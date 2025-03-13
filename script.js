// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const homePage = document.getElementById('homePage');
    const questionPage1 = document.getElementById('questionPage1');
    const questionPage2 = document.getElementById('questionPage2');
    const btnForeign = document.getElementById('btnForeign');
    const btnDomestic = document.getElementById('btnDomestic');
    const calculateBtn1 = document.getElementById('calculateBtn1');
    const calculateBtn2 = document.getElementById('calculateBtn2');
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const backBtn1 = document.getElementById('backBtn1');
    const backBtn2 = document.getElementById('backBtn2');
    const questionContainer1 = document.getElementById('questionContainer1');
    const questionContainer2 = document.getElementById('questionContainer2');

    // 问题集合 - 已在国外考虑回国（页面1）
    const questions1 = [
        {
            id: 'age',
            question: '你多大了？',
            weight: 1.5,
            options: [
                { text: '18-25岁 - 后浪天花板，这儿随便浪，卷死老外多爽！', value: 10, desc: '后浪天花板，这儿随便浪，卷死老外多爽！' },
                { text: '26-35岁 - 黄金打工人，这儿还能秀肌肉，谁想挨996的PUA？', value: 6, desc: '黄金打工人，这儿还能秀肌肉，谁想挨996的PUA？' },
                { text: '36-45岁 - 中年社畜，这儿那儿都差不多，emo随缘吧！', value: 0, desc: '中年社畜，这儿那儿都差不多，emo随缘吧！' },
                { text: '46-60岁 - 油腻大叔，这儿累得慌，躺平多香啊！', value: -6, desc: '油腻大叔，这儿累得慌，躺平多香啊！' },
                { text: '60岁以上 - 广场舞大爷，这儿养老院都嫌你，退休金多稳！', value: -10, desc: '广场舞大爷，这儿养老院都嫌你，退休金多稳！' }
            ]
        },
        {
            id: 'income',
            question: '你家一年赚多少钱？够不够国外的花销？',
            weight: 1.8,
            options: [
                { text: '100万以上 - 壕无人性，这儿随便氪金，谁想省那点小钱？', value: 10, desc: '壕无人性，这儿随便氪金，谁想省那点小钱？' },
                { text: '50-100万 - 小资天花板，这儿硬核消费，抠门多emo！', value: 6, desc: '小资天花板，这儿硬核消费，抠门多emo！' },
                { text: '20-50万 - 中产打工人，这儿还能撑，也没啥福报好拿！', value: 2, desc: '中产打工人，这儿还能撑，也没啥福报好拿！' },
                { text: '5-20万 - 月光族天命，这儿物价PUA你，苟着多省心！', value: -4, desc: '月光族天命，这儿物价PUA你，苟着多省心！' },
                { text: '5万以下 - 穷鬼天选，这儿活不下去，喝西北风都香！', value: -10, desc: '穷鬼天选，这儿活不下去，喝西北风都香！' }
            ]
        },
        {
            id: 'english',
            question: '你的英语咋样？在这儿混得开吗？',
            weight: 2.0,
            options: [
                { text: '母语级别 - 英语卷王，这儿随便秀，伦敦腔谁听啊？', value: 10, desc: '英语卷王，这儿随便秀，伦敦腔谁听啊？' },
                { text: '流利交流 - 日常硬聊，这儿yyds，用不上多白瞎！', value: 6, desc: '日常硬聊，这儿yyds，用不上多白瞎！' },
                { text: '基础对话 - How are you够用，这儿凑合，摆烂也行！', value: 2, desc: 'How are you够用，这儿凑合，摆烂也行！' },
                { text: '只认识ABC - 小学僧水平，这儿都混不开，随便糊弄多轻松！', value: -4, desc: '小学僧水平，这儿都混不开，随便糊弄多轻松！' },
                { text: '完全不会 - 英语摆烂王，这儿活成笑话，yyds在别处！', value: -10, desc: '英语摆烂王，这儿活成笑话，yyds在别处！' }
            ]
        },
        {
            id: 'localLanguage',
            question: '你在这儿当地语言咋样？能融入本地不？',
            weight: 2.0,
            options: [
                { text: '母语级别 - 语言天花板，这儿当大哥，谁听你秀啊？', value: 10, desc: '语言天花板，这儿当大哥，谁听你秀啊？' },
                { text: '流利交流 - 点菜硬聊，这儿稳赢，技能白瞎多可惜！', value: 6, desc: '点菜硬聊，这儿稳赢，技能白瞎多可惜！' },
                { text: '基础对话 - 硬憋几句，这儿能活，轻松点更好！', value: 2, desc: '硬憋几句，这儿能活，轻松点更好！' },
                { text: '一知半解 - 半吊子战士，这儿铁憨憨，随便混多省事！', value: -4, desc: '半吊子战士，这儿铁憨憨，随便混多省事！' },
                { text: '完全不会 - 哑巴天选，这儿手势求生，起飞多简单！', value: -10, desc: '哑巴天选，这儿手势求生，起飞多简单！' }
            ]
        },
        {
            id: 'familyRelation',
            question: '你跟国内的家人亲不亲？回国有人惦记吗？',
            weight: 1.0,
            options: [
                { text: '形同陌路 - 家庭？不存在，这儿随便浪，有啥用啊！', value: 8, desc: '家庭？不存在，这儿随便浪，有啥用啊！' },
                { text: '偶尔联系 - 过年"哈哈"，这儿无牵挂，emo个啥！', value: 4, desc: '过年"哈哈"，这儿无牵挂，emo个啥！' },
                { text: '关系一般 - 不冷不热，这儿那儿都行，随缘啦！', value: 0, desc: '不冷不热，这儿那儿都行，随缘啦！' },
                { text: '每周联系 - 老妈查岗，这儿还得哄，省心点多好！', value: -4, desc: '老妈查岗，这儿还得哄，省心点多好！' },
                { text: '黏在一起 - 妈宝天选，这儿都想家，爽爆了别处！', value: -8, desc: '妈宝天选，这儿都想家，爽爆了别处！' }
            ]
        },
        {
            id: 'parentSupport',
            question: '国内爹妈能给你啥支持？回国有靠山不？',
            weight: 1.5,
            options: [
                { text: '经济+情感双支持 - 爹妈神仙，这儿有靠山，浪费多可惜！', value: 8, desc: '爹妈神仙，这儿有靠山，浪费多可惜！' },
                { text: '只有经济支持 - 钞能力到位，这儿硬撑，没必要走啊！', value: 4, desc: '钞能力到位，这儿硬撑，没必要走啊！' },
                { text: '只有情感支持 - 嘴炮王，这儿聊胜于无，还是香啊！', value: 2, desc: '嘴炮王，这儿聊胜于无，还是香啊！' },
                { text: '无支持 - 爹妈摆烂，这儿自己扛，省心多好！', value: -4, desc: '爹妈摆烂，这儿自己扛，省心多好！' },
                { text: '拖后腿 - 爹妈负资产，这儿累死，还等你养呢！', value: -8, desc: '爹妈负资产，这儿累死，还等你养呢！' }
            ]
        },
        {
            id: 'overseasRelatives',
            question: '你在这儿有啥亲戚朋友？留下来有人罩你吗？',
            weight: 1.0,
            options: [
                { text: '有亲密家人/伴侣 - 海外靠山，这儿开挂，emo个啥啊！', value: 10, desc: '海外靠山，这儿开挂，emo个啥啊！' },
                { text: '有挚友 - 铁哥们，这儿硬核救命，没这待遇谁要走？', value: 6, desc: '铁哥们，这儿硬核救命，没这待遇谁要走？' },
                { text: '有熟人 - 点头之交，这儿凑合，也没啥差别！', value: 2, desc: '点头之交，这儿凑合，也没啥差别！' },
                { text: '仅点头之交 - 半熟脸，这儿孤狼，老乡多热闹！', value: -2, desc: '半熟脸，这儿孤狼，老乡多热闹！' },
                { text: '完全没人 - 社恐天选，这儿自闭，yyds在别处！', value: -8, desc: '社恐天选，这儿自闭，yyds在别处！' }
            ]
        },
        {
            id: 'education',
            question: '你学历多高？在这儿混得下去吗？',
            weight: 1.5,
            options: [
                { text: '博士 - 学霸天花板，这儿随便卷，浪费多可惜！', value: 10, desc: '学霸天花板，这儿随便卷，浪费多可惜！' },
                { text: '硕士 - 高知卷王，这儿硬刚，没舞台谁要走？', value: 6, desc: '高知卷王，这儿硬刚，没舞台谁要走？' },
                { text: '本科 - 普普通通，这儿凑合，也没啥区别！', value: 2, desc: '普普通通，这儿凑合，也没啥区别！' },
                { text: '大专 - 学历摆烂，这儿混不开，随便混多轻松！', value: -4, desc: '学历摆烂，这儿混不开，随便混多轻松！' },
                { text: '高中及以下 - 读书少天命，这儿靠脸都混不下去，摆烂多香！', value: -8, desc: '读书少天命，这儿靠脸都混不下去，摆烂多香！' }
            ]
        },
        {
            id: 'skill',
            question: '你有啥蓝领技能？在这儿能靠手艺吃饭不？',
            weight: 1.5,
            options: [
                { text: '多项大师级 - 厨神修车王，这儿直接封神，手艺白瞎多亏！', value: 10, desc: '厨神修车王，这儿直接封神，手艺白瞎多亏！' },
                { text: '熟练一项 - 手艺人天选，这儿吃饭不愁，技能浪费谁要走？', value: 6, desc: '手艺人天选，这儿吃饭不愁，技能浪费谁要走？' },
                { text: '基础水平 - 半吊子手艺，这儿能糊弄，轻松点多好！', value: 2, desc: '半吊子手艺，这儿能糊弄，轻松点多好！' },
                { text: '只看不干 - 眼高手低，这儿没人惯你，随便混多香！', value: -4, desc: '眼高手低，这儿没人惯你，随便混多香！' },
                { text: '啥也不会 - 手残天命，这儿只能洗盘子，躺平yyds！', value: -8, desc: '手残天命，这儿只能洗盘子，躺平yyds！' }
            ]
        },
        {
            id: 'currentJob',
            question: '你现在干啥工作？回国还找得到饭碗吗？',
            weight: 1.0,
            options: [
                { text: '外企 - 国际卷王，这儿无缝硬刚，降级谁想啊？', value: 6, desc: '国际卷王，这儿无缝硬刚，降级谁想啊？' },
                { text: '创业者 - 天生卷狗，这儿还能秀，996福报有啥好？', value: 4, desc: '天生卷狗，这儿还能秀，996福报有啥好？' },
                { text: '民企 - 不上不下，这儿那儿都行，随缘吧！', value: 0, desc: '不上不下，这儿那儿都行，随缘吧！' },
                { text: '体制内 - 铁饭碗天选，这儿不香，稳如老狗多好！', value: -6, desc: '铁饭碗天选，这儿不香，稳如老狗多好！' },
                { text: '无业游民 - 躺平天命，这儿没活，刷短视频多香！', value: -8, desc: '躺平天命，这儿没活，刷短视频多香！' }
            ]
        },
        {
            id: 'asset',
            question: '你家有多少资产？回国能躺平吗？',
            weight: 1.8,
            options: [
                { text: '大富 - 富哥天花板，这儿随便浪，省钱谁要啊？', value: 10, desc: '富哥天花板，这儿随便浪，省钱谁要啊？' },
                { text: '小富 - 小资卷王，这儿硬核消费，抠门多emo！', value: 6, desc: '小资卷王，这儿硬核消费，抠门多emo！' },
                { text: '小康 - 日子凑合，这儿能撑，也没啥差别！', value: 2, desc: '日子凑合，这儿能撑，也没啥差别！' },
                { text: '没闲钱但饿不死 - 紧巴巴天命，这儿物价PUA你，苟着多香！', value: -4, desc: '紧巴巴天命，这儿物价PUA你，苟着多香！' },
                { text: '一贫如洗 - 穷鬼天选，这儿活不下去，喝西北风yyds！', value: -10, desc: '穷鬼天选，这儿活不下去，喝西北风yyds！' }
            ]
        },
        {
            id: 'familyStatus',
            question: '你有伴侣孩子吗？回国拖家带口咋办？',
            weight: 1.0,
            options: [
                { text: '单身贵族 - 一人吃饱，这儿浪到飞起，找罪受谁要啊？', value: 6, desc: '一人吃饱，这儿浪到飞起，找罪受谁要啊？' },
                { text: '有伴侣无孩 - 两人世界，这儿还能撑，随便也行！', value: 2, desc: '两人世界，这儿还能撑，随便也行！' },
                { text: '有伴侣有1孩 - 拖家带口，这儿成本高，省心点多好！', value: -2, desc: '拖家带口，这儿成本高，省心点多好！' },
                { text: '有伴侣多孩 - 孩子一堆，这儿累死，奶爸轻松多香！', value: -6, desc: '孩子一堆，这儿累死，奶爸轻松多香！' },
                { text: '单亲带娃 - 单身狗天命，这儿emo爆炸，救命别处有！', value: -8, desc: '单身狗天命，这儿emo爆炸，救命别处有！' }
            ]
        },
        {
            id: 'familyOpinion',
            question: '伴侣孩子想回国吗？（若无家庭请选最后一项）',
            weight: 1.5,
            options: [
                { text: '举家支持 - 全家卷王，这儿团战无敌，散伙谁想啊？', value: 10, desc: '全家卷王，这儿团战无敌，散伙谁想啊？' },
                { text: '勉强同意 - 磨叽半天，这儿还能硬刚，也行吧！', value: 4, desc: '磨叽半天，这儿还能硬刚，也行吧！' },
                { text: '无所谓 - 爱回不回，这儿那儿都摆烂，随缘！', value: 0, desc: '爱回不回，这儿那儿都摆烂，随缘！' },
                { text: '有点反对 - 家里吵翻，这儿头秃，省心多好！', value: -6, desc: '家里吵翻，这儿头秃，省心多好！' },
                { text: '坚决反对 - 家都不和，这儿自找PUA，yyds在别处！', value: -10, desc: '家都不和，这儿自找PUA，yyds在别处！' },
                { text: '无伴侣/孩子 - 和我没关系，一个人随便浪！', value: 0, desc: '和我没关系，一个人随便浪！' }
            ]
        },
        {
            id: 'goal',
            question: '你在这儿的目标是啥？回国还有奔头吗？',
            weight: 1.0,
            options: [
                { text: '职业巅峰 - 卷王天命，这儿大舞台随便秀，降级谁要啊？', value: 8, desc: '卷王天命，这儿大舞台随便秀，降级谁要啊？' },
                { text: '子女教育 - 鸡娃战士，这儿拼娃硬核，白瞎多可惜！', value: 6, desc: '鸡娃战士，这儿拼娃硬核，白瞎多可惜！' },
                { text: '生活质量 - 蓝天白云，这儿硬核躺，福报有啥好？', value: 4, desc: '蓝天白云，这儿硬核躺，福报有啥好？' },
                { text: '随便看看 - 旅游摆烂，这儿混混够，也没啥差别！', value: 2, desc: '旅游摆烂，这儿混混够，也没啥差别！' },
                { text: '没啥目标 - 迷迷糊糊，这儿emo，随便多香！', value: -2, desc: '迷迷糊糊，这儿emo，随便多香！' }
            ]
        },
        {
            id: 'health',
            question: '你身体咋样？在这儿扛得住吗？',
            weight: 1.0,
            options: [
                { text: '壮如牛 - 健身卷王，这儿随便硬刚，养老谁想啊？', value: 8, desc: '健身卷王，这儿随便硬刚，养老谁想啊？' },
                { text: '还凑合 - 小病小痛，这儿能撑，也没啥差别！', value: 2, desc: '小病小痛，这儿能撑，也没啥差别！' },
                { text: '慢性病 - 药罐子，这儿医药费PUA你，多香别处！', value: -4, desc: '药罐子，这儿医药费PUA你，多香别处！' },
                { text: '病秧子 - 走两步就喘，这儿直接寄，养着yyds！', value: -8, desc: '走两步就喘，这儿直接寄，养着yyds！' }
            ]
        },
        {
            id: 'visa',
            question: '你签证咋样？还能在这儿待多久？',
            weight: 2.0,
            options: [
                { text: '永居在手 - 绿卡卷王，这儿随便浪，丢身份谁要啊？', value: 10, desc: '绿卡卷王，这儿随便浪，丢身份谁要啊？' },
                { text: '长期签证 - 硬住几年，这儿稳如老狗，没必要走！', value: 6, desc: '硬住几年，这儿稳如老狗，没必要走！' },
                { text: '短期签证 - 晃悠几圈，这儿还能混，也随便！', value: 2, desc: '晃悠几圈，这儿还能混，也随便！' },
                { text: '申请中 - 悬而未决，这儿忐忑，省心多好！', value: -2, desc: '悬而未决，这儿忐忑，省心多好！' },
                { text: '啥也没有 - 签证摆烂，这儿待不下去，yyds别处！', value: -10, desc: '签证摆烂，这儿待不下去，yyds别处！' }
            ]
        }
    ];

    // 问题集合 - 人在国内考虑去海外（页面2）
    const questions2 = [
        {
            id: 'age',
            question: '你多大了？适合出去闯荡吗？',
            weight: 1.5,
            options: [
                { text: '18-25岁 - 后浪卷王，出去炫酷一条龙，996算个啥！', value: 10, desc: '后浪卷王，出去炫酷一条龙，996算个啥！' },
                { text: '26-35岁 - 打工人巅峰，出去当卷王，天花板太低了！', value: 6, desc: '打工人巅峰，出去当卷王，天花板太低了！' },
                { text: '36-45岁 - 中年社畜，出去那儿都差不多，随缘摆烂吧！', value: 0, desc: '中年社畜，出去那儿都差不多，随缘摆烂吧！' },
                { text: '46-60岁 - 油腻大叔，出去折腾啥，躺平多稳！', value: -6, desc: '油腻大叔，出去折腾啥，躺平多稳！' },
                { text: '60岁以上 - 广场舞大爷，出去干嘛，退休金不香吗？', value: -10, desc: '广场舞大爷，出去干嘛，退休金不香吗？' }
            ]
        },
        {
            id: 'income',
            question: '你家一年赚多少钱？够不够海外的开销？',
            weight: 1.8,
            options: [
                { text: '100万以上 - 钞能力满级，出去买买买，壕得不够爽！', value: 10, desc: '钞能力满级，出去买买买，壕得不够爽！' },
                { text: '50-100万 - 小资卷王，出去硬核氪金，攒钱多累！', value: 6, desc: '小资卷王，出去硬核氪金，攒钱多累！' },
                { text: '20-50万 - 中产社畜，出去不至于破产，也能凑合！', value: 2, desc: '中产社畜，出去不至于破产，也能凑合！' },
                { text: '5-20万 - 月光族天命，出去物价吓死你，苟着多好！', value: -4, desc: '月光族天命，出去物价吓死你，苟着多好！' },
                { text: '5万以下 - 穷鬼天选，出去想屁吃，外卖券救命！', value: -10, desc: '穷鬼天选，出去想屁吃，外卖券救命！' }
            ]
        },
        {
            id: 'english',
            question: '你的英语咋样？出去能活下来吗？',
            weight: 2.0,
            options: [
                { text: '母语级别 - 英语卷王，出去硬核输出，憋屈死啦！', value: 10, desc: '英语卷王，出去硬核输出，憋屈死啦！' },
                { text: '流利交流 - 日常硬聊，出去yyds，用不上太亏！', value: 6, desc: '日常硬聊，出去yyds，用不上太亏！' },
                { text: '基础对话 - How are you能憋，出去别社死就行！', value: 2, desc: 'How are you能憋，出去别社死就行！' },
                { text: '只认识ABC - 小学僧水平，出去被老外PUA，安全第一！', value: -4, desc: '小学僧水平，出去被老外PUA，安全第一！' },
                { text: '完全不会 - 英语摆烂王，出去哑巴天命，蹲着多香！', value: -10, desc: '英语摆烂王，出去哑巴天命，蹲着多香！' }
            ]
        },
        {
            id: 'localLanguage',
            question: '你会目标国家的语言吗？能混进当地圈子不？',
            weight: 2.0,
            options: [
                { text: '母语级别 - 语言卷王，出去当地人都喊哥，憋着多亏！', value: 10, desc: '语言卷王，出去当地人都喊哥，憋着多亏！' },
                { text: '流利交流 - 点菜硬聊，出去yyds，用不上太惨！', value: 6, desc: '点菜硬聊，出去yyds，用不上太惨！' },
                { text: '基础对话 - 硬憋几句，出去别社死，能凑合！', value: 2, desc: '硬憋几句，出去别社死，能凑合！' },
                { text: '一知半解 - 半吊子水平，出去当铁憨憨，稳一点吧！', value: -4, desc: '半吊子水平，出去当铁憨憨，稳一点吧！' },
                { text: '完全不会 - 哑巴天选，出去笑拉了，蹲着多香！', value: -10, desc: '哑巴天选，出去笑拉了，蹲着多香！' }
            ]
        },
        {
            id: 'familyRelation',
            question: '你跟国内家人亲不亲？出去会不会想家？',
            weight: 1.0,
            options: [
                { text: '形同陌路 - 家庭？没这回事，出去起飞，绝绝子！', value: 8, desc: '家庭？没这回事，出去起飞，绝绝子！' },
                { text: '偶尔联系 - 过年"哈哈"，出去无压力，挺自由！', value: 4, desc: '过年"哈哈"，出去无压力，挺自由！' },
                { text: '关系一般 - 不冷不热，出去那儿随便，摆烂就好！', value: 0, desc: '不冷不热，出去那儿随便，摆烂就好！' },
                { text: '每周联系 - 老妈查岗，出去还得报备，太累了！', value: -4, desc: '老妈查岗，出去还得报备，太累了！' },
                { text: '黏在一起 - 妈宝天命，出去就emo，蹲着多稳！', value: -8, desc: '妈宝天命，出去就emo，蹲着多稳！' }
            ]
        },
        {
            id: 'parentSupport',
            question: '国内爹妈能给你啥支持？出去有后援吗？',
            weight: 1.5,
            options: [
                { text: '经济+情感双支持 - 爹妈是神，出去硬核带飞，太亏了不走！', value: 8, desc: '爹妈是神，出去硬核带飞，太亏了不走！' },
                { text: '只有经济支持 - 钞能力在线，出去能撑，浪费多惨！', value: 4, desc: '钞能力在线，出去能撑，浪费多惨！' },
                { text: '只有情感支持 - 嘴炮爹妈，出去聊胜于无，也凑合！', value: 2, desc: '嘴炮爹妈，出去聊胜于无，也凑合！' },
                { text: '无支持 - 全靠自己，出去费劲，省心点吧！', value: -4, desc: '全靠自己，出去费劲，省心点吧！' },
                { text: '拖后腿 - 爹妈负资产，出去累死，蹲着多香！', value: -8, desc: '爹妈负资产，出去累死，蹲着多香！' }
            ]
        },
        {
            id: 'overseasRelatives',
            question: '你在国外有啥亲戚朋友？去了有人接应吗？',
            weight: 1.0,
            options: [
                { text: '有亲密家人/伴侣 - 海外有家，出去直接开挂，憋屈死啦！', value: 10, desc: '海外有家，出去直接开挂，憋屈死啦！' },
                { text: '有挚友 - 铁哥们在线，出去硬核接应，牛啊！', value: 6, desc: '铁哥们在线，出去硬核接应，牛啊！' },
                { text: '有熟人 - 点头之交，出去不至于emo，还行吧！', value: 2, desc: '点头之交，出去不至于emo，还行吧！' },
                { text: '仅点头之交 - 半熟脸，出去帮不上，老乡多香！', value: -2, desc: '半熟脸，出去帮不上，老乡多香！' },
                { text: '完全没人 - 社恐天选，出去自闭，稳一点多好！', value: -8, desc: '社恐天选，出去自闭，稳一点多好！' }
            ]
        },
        {
            id: 'education',
            question: '你学历多高？出去能找到好工作吗？',
            weight: 1.5,
            options: [
                { text: '博士 - 学霸天花板，出去卷死老外，憋屈死啦！', value: 10, desc: '学霸天花板，出去卷死老外，憋屈死啦！' },
                { text: '硕士 - 高知卷王，出去硬刚，没舞台太亏！', value: 6, desc: '高知卷王，出去硬刚，没舞台太亏！' },
                { text: '本科 - 普普通通，出去混个中庸，也凑合！', value: 2, desc: '普普通通，出去混个中庸，也凑合！' },
                { text: '大专 - 学历摆烂，出去被老外PUA，苟着吧！', value: -4, desc: '学历摆烂，出去被老外PUA，苟着吧！' },
                { text: '高中及以下 - 读书少天命，出去靠脸吃饭？蹲着多稳！', value: -8, desc: '读书少天命，出去靠脸吃饭？蹲着多稳！' }
            ]
        },
        {
            id: 'skill',
            question: '你有啥蓝领技能？出去能靠手艺吃饭吗？',
            weight: 1.5,
            options: [
                { text: '多项大师级 - 厨神修车王，出去直接封神，埋没你太惨！', value: 10, desc: '厨神修车王，出去直接封神，埋没你太惨！' },
                { text: '熟练一项 - 手艺人天选，出去硬核吃饭，太亏不走！', value: 6, desc: '手艺人天选，出去硬核吃饭，太亏不走！' },
                { text: '基础水平 - 半吊子手艺，出去能混，也凑合！', value: 2, desc: '半吊子手艺，出去能混，也凑合！' },
                { text: '只看不干 - 眼高手低，出去没人惯着，摆烂多好！', value: -4, desc: '眼高手低，出去没人惯着，摆烂多好！' },
                { text: '啥也不会 - 手残天命，出去洗盘子，躺平多香！', value: -8, desc: '手残天命，出去洗盘子，躺平多香！' }
            ]
        },
        {
            id: 'currentJob',
            question: '你现在干啥工作？出去还能干啥？',
            weight: 1.0,
            options: [
                { text: '外企 - 国际卷王，出去无缝衔接，天花板太低啦！', value: 6, desc: '国际卷王，出去无缝衔接，天花板太低啦！' },
                { text: '创业者 - 天生卷狗，出去当老板，憋屈死不走！', value: 4, desc: '天生卷狗，出去当老板，憋屈死不走！' },
                { text: '民企 - 不上不下，出去那儿随便，随缘摆烂！', value: 0, desc: '不上不下，出去那儿随便，随缘摆烂！' },
                { text: '体制内 - 铁饭碗天选，出去干嘛，躺平多香！', value: -6, desc: '铁饭碗天选，出去干嘛，躺平多香！' },
                { text: '无业游民 - 躺平天命，出去没活，刷剧多稳！', value: -8, desc: '躺平天命，出去没活，刷剧多稳！' }
            ]
        },
        {
            id: 'asset',
            question: '你家有多少资产？出去能撑多久？',
            weight: 1.8,
            options: [
                { text: '大富 - 富哥天花板，出去全球买买买，壕得不够爽！', value: 10, desc: '富哥天花板，出去全球买买买，壕得不够爽！' },
                { text: '小富 - 小资卷王，出去硬核氪金，攒钱多累！', value: 6, desc: '小资卷王，出去硬核氪金，攒钱多累！' },
                { text: '小康 - 日子凑合，出去不破产，也行吧！', value: 2, desc: '日子凑合，出去不破产，也行吧！' },
                { text: '没闲钱但饿不死 - 紧巴巴天命，出去物价吓死你，苟着多好！', value: -4, desc: '紧巴巴天命，出去物价吓死你，苟着多好！' },
                { text: '一贫如洗 - 穷鬼天选，出去想屁吃，喝西北风稳！', value: -10, desc: '穷鬼天选，出去想屁吃，喝西北风稳！' }
            ]
        },
        {
            id: 'familyStatus',
            question: '你有伴侣孩子吗？出去拖家带口行不行？',
            weight: 1.0,
            options: [
                { text: '单身贵族 - 一人吃饱，出去浪到飞起，憋屈死啦！', value: 6, desc: '一人吃饱，出去浪到飞起，憋屈死啦！' },
                { text: '有伴侣无孩 - 两人世界，出去硬撑，也凑合！', value: 2, desc: '两人世界，出去硬撑，也凑合！' },
                { text: '有伴侣有1孩 - 拖家带口，出去成本翻倍，稳一点吧！', value: -2, desc: '拖家带口，出去成本翻倍，稳一点吧！' },
                { text: '有伴侣多孩 - 孩子一堆，出去全职奶爸，太香不走！', value: -6, desc: '孩子一堆，出去全职奶爸，太香不走！' },
                { text: '单亲带娃 - 单身狗天命，出去带娃emo，蹲着多稳！', value: -8, desc: '单身狗天命，出去带娃emo，蹲着多稳！' }
            ]
        },
        {
            id: 'familyOpinion',
            question: '伴侣孩子想出去吗？（若无家庭请选最后一项）',
            weight: 1.5,
            options: [
                { text: '举家支持 - 全家卷王，出去团战无敌，太亏不走！', value: 10, desc: '全家卷王，出去团战无敌，太亏不走！' },
                { text: '勉强同意 - 磨叽半天，出去硬刚，也凑合！', value: 4, desc: '磨叽半天，出去硬刚，也凑合！' },
                { text: '无所谓 - 爱去不去，出去那儿都摆烂，随缘吧！', value: 0, desc: '爱去不去，出去那儿都摆烂，随缘吧！' },
                { text: '有点反对 - 家里吵翻，出去头秃，稳一点多香！', value: -6, desc: '家里吵翻，出去头秃，稳一点多香！' },
                { text: '坚决反对 - 家都不和，出去自找PUA，蹲着yyds！', value: -10, desc: '家都不和，出去自找PUA，蹲着yyds！' },
                { text: '无伴侣/孩子 - 和我没关系，一个人随便浪！', value: 0, desc: '和我没关系，一个人随便浪！' }
            ]
        },
        {
            id: 'goal',
            question: '你出去想干啥？有啥目标没？',
            weight: 1.0,
            options: [
                { text: '职业巅峰 - 卷王天命，出去大舞台硬核秀，憋屈死啦！', value: 8, desc: '卷王天命，出去大舞台硬核秀，憋屈死啦！' },
                { text: '子女教育 - 鸡娃战士，出去拼娃牛啊，太亏不走！', value: 6, desc: '鸡娃战士，出去拼娃牛啊，太亏不走！' },
                { text: '生活质量 - 追求蓝天白云，出去硬核躺，福报多烦！', value: 4, desc: '追求蓝天白云，出去硬核躺，福报多烦！' },
                { text: '随便看看 - 旅游摆烂王，出去混混，也凑合！', value: 2, desc: '旅游摆烂王，出去混混，也凑合！' },
                { text: '没啥目标 - 迷迷糊糊，出去干嘛，emo了吧！', value: -2, desc: '迷迷糊糊，出去干嘛，emo了吧！' }
            ]
        },
        {
            id: 'health',
            question: '你身体咋样？出去扛得住吗？',
            weight: 1.0,
            options: [
                { text: '壮如牛 - 健身卷王，出去硬核刚，憋屈死啦！', value: 8, desc: '健身卷王，出去硬核刚，憋屈死啦！' },
                { text: '还凑合 - 小病小痛，出去能扛，也凑合！', value: 2, desc: '小病小痛，出去能扛，也凑合！' },
                { text: '慢性病 - 药罐子天命，出去医药费吓死你，稳一点吧！', value: -4, desc: '药罐子天命，出去医药费吓死你，稳一点吧！' },
                { text: '病秧子 - 走两步就喘，出去直接寄，养着多香！', value: -8, desc: '走两步就喘，出去直接寄，养着多香！' }
            ]
        },
        {
            id: 'visa',
            question: '你签证咋样？能出去不？',
            weight: 2.0,
            options: [
                { text: '永居在手 - 绿卡卷王，出去世界我有，憋屈死啦！', value: 10, desc: '绿卡卷王，出去世界我有，憋屈死啦！' },
                { text: '长期签证 - 出去硬住几年，稳如老狗，太亏不走！', value: 6, desc: '出去硬住几年，稳如老狗，太亏不走！' },
                { text: '短期签证 - 晃悠几圈，出去能混，也随便！', value: 2, desc: '晃悠几圈，出去能混，也随便！' },
                { text: '申请中 - 悬而未决，出去看命，稳一点吧！', value: -2, desc: '悬而未决，出去看命，稳一点吧！' },
                { text: '啥也没有 - 签证摆烂王，出去想屁吃，刷短视频多香！', value: -10, desc: '签证摆烂王，出去想屁吃，刷短视频多香！' }
            ]
        }
    ];

    // 渲染问题函数
    function renderQuestions(questions, container) {
        container.innerHTML = '';
        questions.forEach((q, index) => {
            const questionBox = document.createElement('div');
            questionBox.className = 'question-box';
            questionBox.dataset.id = q.id;
            questionBox.dataset.weight = q.weight || 1.0;

            const questionTitle = document.createElement('div');
            questionTitle.className = 'question-title';
            questionTitle.textContent = `${index + 1}. ${q.question}`;

            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';

            q.options.forEach(option => {
                const optionBtn = document.createElement('div');
                optionBtn.className = 'option-btn';
                optionBtn.textContent = option.text;
                optionBtn.dataset.value = option.value;
                
                // 如果有描述，添加到提示工具
                if (option.desc) {
                    optionBtn.title = option.desc;
                }
                
                optionBtn.addEventListener('click', function() {
                    // 移除同组中其他选中状态
                    const siblings = this.parentNode.querySelectorAll('.option-btn');
                    siblings.forEach(sib => sib.classList.remove('selected'));
                    
                    // 添加当前选中状态
                    this.classList.add('selected');
                });
                
                optionsContainer.appendChild(optionBtn);
            });

            questionBox.appendChild(questionTitle);
            questionBox.appendChild(optionsContainer);
            container.appendChild(questionBox);
        });
    }

    // 切换到页面1（国外考虑回国）
    btnForeign.addEventListener('click', function() {
        homePage.classList.add('hidden');
        questionPage1.classList.remove('hidden');
        renderQuestions(questions1, questionContainer1);
    });

    // 切换到页面2（国内考虑去海外）
    btnDomestic.addEventListener('click', function() {
        homePage.classList.add('hidden');
        questionPage2.classList.remove('hidden');
        renderQuestions(questions2, questionContainer2);
    });

    // 返回首页按钮
    backBtn1.addEventListener('click', function() {
        questionPage1.classList.add('hidden');
        homePage.classList.remove('hidden');
        result1.classList.remove('show');
        result1.style.display = 'none';
    });

    backBtn2.addEventListener('click', function() {
        questionPage2.classList.add('hidden');
        homePage.classList.remove('hidden');
        result2.classList.remove('show');
        result2.style.display = 'none';
    });

    // 计算得分并显示结果 - 页面1
    calculateBtn1.addEventListener('click', function() {
        const allQuestions = questionContainer1.querySelectorAll('.question-box');
        let allAnswered = true;
        let totalScore = 0;

        allQuestions.forEach(q => {
            const selectedOption = q.querySelector('.option-btn.selected');
            if (!selectedOption) {
                allAnswered = false;
                return;
            }
            // 计算加权得分
            const weight = parseFloat(q.dataset.weight) || 1.0;
            const value = parseInt(selectedOption.dataset.value);
            totalScore += value * weight;
        });

        if (!allAnswered) {
            alert('请完成所有选择');
            return;
        }

        // 显示结果（四舍五入为整数）
        const roundedScore = Math.round(totalScore);
        result1.innerHTML = '';
        result1.style.display = 'block';
        
        const scoreElement = document.createElement('div');
        scoreElement.className = 'score';
        scoreElement.textContent = `得分：${roundedScore}分`;
        
        // 根据分数设置颜色
        if (roundedScore >= 75) {
            scoreElement.style.color = '#2ecc71'; // 绿色 - 高分
        } else if (roundedScore >= 1) {
            scoreElement.style.color = '#27ae60'; // 浅绿色 - 中高分
        } else if (roundedScore >= -25) {
            scoreElement.style.color = '#f39c12'; // 黄色 - 中立分数
        } else if (roundedScore >= -75) {
            scoreElement.style.color = '#e67e22'; // 橙色 - 中低分
        } else {
            scoreElement.style.color = '#e74c3c'; // 红色 - 低分
        }
        
        // 设置字体样式
        scoreElement.style.fontWeight = 'bold';
        scoreElement.style.fontSize = '24px';
        scoreElement.style.marginBottom = '10px';
        
        const adviceElement = document.createElement('div');
        adviceElement.className = 'advice';
        
        // 根据得分范围给出建议
        let advice = '';
        if (roundedScore >= 151 && roundedScore <= 231) {
            advice = '极度适合留在国外，得分：' + roundedScore + '分。你是海外的王者，回国干嘛委屈自己？';
        } else if (roundedScore >= 76 && roundedScore <= 150) {
            advice = '强烈适合留在国外，得分：' + roundedScore + '分。这儿对你来说是天堂，回国太亏了！';
        } else if (roundedScore >= 26 && roundedScore <= 75) {
            advice = '适度适合留在国外，得分：' + roundedScore + '分。这儿还不错，回国得想想清楚！';
        } else if (roundedScore >= 1 && roundedScore <= 25) {
            advice = '轻度适合留在国外，得分：' + roundedScore + '分。国外能凑合，回国也不差啥！';
        } else if (roundedScore >= -25 && roundedScore <= 0) {
            advice = '中立，得分：' + roundedScore + '分。回不回国都行，抛硬币决定吧！';
        } else if (roundedScore >= -75 && roundedScore <= -26) {
            advice = '轻度适合回国，得分：' + roundedScore + '分。国内的饭菜在召唤，考虑回去吧！';
        } else if (roundedScore >= -150 && roundedScore <= -76) {
            advice = '适度适合回国，得分：' + roundedScore + '分。国外有点折腾，国内更舒服！';
        } else if (roundedScore >= -230 && roundedScore <= -151) {
            advice = '强烈适合回国，得分：' + roundedScore + '分。你是祖国的宝贝，回来享福吧！';
        } else if (roundedScore <= -231) {
            advice = '极度适合回国，得分：' + roundedScore + '分。国外待不下去了，快回家喝鸡汤！';
        }
        
        adviceElement.textContent = advice;
        
        result1.appendChild(scoreElement);
        result1.appendChild(adviceElement);
        result1.classList.add('show');
    });

    // 计算得分并显示结果 - 页面2
    calculateBtn2.addEventListener('click', function() {
        const allQuestions = questionContainer2.querySelectorAll('.question-box');
        let allAnswered = true;
        let totalScore = 0;

        allQuestions.forEach(q => {
            const selectedOption = q.querySelector('.option-btn.selected');
            if (!selectedOption) {
                allAnswered = false;
                return;
            }
            // 计算加权得分
            const weight = parseFloat(q.dataset.weight) || 1.0;
            const value = parseInt(selectedOption.dataset.value);
            totalScore += value * weight;
        });

        if (!allAnswered) {
            alert('请完成所有选择');
            return;
        }

        // 显示结果（四舍五入为整数）
        const roundedScore = Math.round(totalScore);
        result2.innerHTML = '';
        result2.style.display = 'block';
        
        const scoreElement = document.createElement('div');
        scoreElement.className = 'score';
        scoreElement.textContent = `得分：${roundedScore}分`;
        
        // 根据分数设置颜色
        if (roundedScore >= 75) {
            scoreElement.style.color = '#2ecc71'; // 绿色 - 高分
        } else if (roundedScore >= 1) {
            scoreElement.style.color = '#27ae60'; // 浅绿色 - 中高分
        } else if (roundedScore >= -25) {
            scoreElement.style.color = '#f39c12'; // 黄色 - 中立分数
        } else if (roundedScore >= -75) {
            scoreElement.style.color = '#e67e22'; // 橙色 - 中低分
        } else {
            scoreElement.style.color = '#e74c3c'; // 红色 - 低分
        }
        
        // 设置字体样式
        scoreElement.style.fontWeight = 'bold';
        scoreElement.style.fontSize = '24px';
        scoreElement.style.marginBottom = '10px';
        
        const adviceElement = document.createElement('div');
        adviceElement.className = 'advice';
        
        // 根据得分范围给出建议
        let advice = '';
        if (roundedScore >= 151 && roundedScore <= 231) {
            advice = '极度适合海外生活，得分：' + roundedScore + '分。你是天生的环球旅行家，赶紧买机票，别让地球等急了！';
        } else if (roundedScore >= 76 && roundedScore <= 150) {
            advice = '强烈适合海外生活，得分：' + roundedScore + '分。海外对你来说就是块大蛋糕，吃了不亏！';
        } else if (roundedScore >= 26 && roundedScore <= 75) {
            advice = '适度适合海外生活，得分：' + roundedScore + '分。出去闯闯挺靠谱，别忘了带点辣条解乡愁！';
        } else if (roundedScore >= 1 && roundedScore <= 25) {
            advice = '轻度适合海外生活，得分：' + roundedScore + '分。海外能混得开，但别太浪，小心水土不服！';
        } else if (roundedScore >= -25 && roundedScore <= 0) {
            advice = '中立，得分：' + roundedScore + '分。国内国外都行，抛硬币决定吧，人生就是一场豪赌！';
        } else if (roundedScore >= -75 && roundedScore <= -26) {
            advice = '轻度适合留在国内，得分：' + roundedScore + '分。国内的饭菜更香，出去可能会后悔哦！';
        } else if (roundedScore >= -150 && roundedScore <= -76) {
            advice = '适度适合留在国内，得分：' + roundedScore + '分。别瞎折腾了，国内的WiFi比国外靠谱！';
        } else if (roundedScore >= -230 && roundedScore <= -151) {
            advice = '强烈适合留在国内，得分：' + roundedScore + '分。你是祖国的宝贝，出去就是给自己找罪受！';
        } else if (roundedScore <= -231) {
            advice = '极度适合留在国内，得分：' + roundedScore + '分。出国？想都别想，家里炖的鸡汤不香吗？';
        }
        
        adviceElement.textContent = advice;
        
        result2.appendChild(scoreElement);
        result2.appendChild(adviceElement);
        result2.classList.add('show');
    });
}); 