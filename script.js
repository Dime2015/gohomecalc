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
                { text: '18-25岁', value: 10, desc: '后浪天花板，这儿随便浪，回国卷啥996啊！' },
                { text: '26-35岁', value: 6, desc: '黄金打工人，这儿还能秀肌肉，回国干嘛挨PUA？' },
                { text: '36-45岁', value: 0, desc: '中年社畜，这儿国内都差不多，emo随缘吧！' },
                { text: '46-60岁', value: -6, desc: '油腻大叔，回国躺平多香，这儿累死你！' },
                { text: '60岁以上', value: -10, desc: '广场舞大爷，回国退休金yyds，这儿养老院都嫌你！' }
            ]
        },
        {
            id: 'income',
            question: '你家一年赚多少钱？够不够国外的花销？',
            weight: 1.8,
            options: [
                { text: '100万以上', value: 10, desc: '壕无人性，这儿随便氪金，回国干嘛省钱？' },
                { text: '50-100万', value: 6, desc: '小资天花板，这儿硬核消费，回国抠门多emo！' },
                { text: '20-50万', value: 2, desc: '中产打工人，这儿还能撑，回去也没啥福报！' },
                { text: '5-20万', value: -4, desc: '月光族天命，这儿物价PUA你，回国还能苟！' },
                { text: '5万以下', value: -10, desc: '穷鬼天选，这儿活不下去，回国喝西北风都香！' }
            ]
        },
        {
            id: 'english',
            question: '你的英语咋样？在这儿混得开吗？',
            weight: 2.0,
            options: [
                { text: '母语级别', value: 10, desc: '英语卷王，这儿随便秀，回国跟谁聊伦敦腔？' },
                { text: '流利交流', value: 6, desc: '日常硬聊，这儿yyds，回国用不上白瞎！' },
                { text: '基础对话', value: 2, desc: 'How are you够用，这儿凑合，回国更摆烂！' },
                { text: '只认识ABC', value: -4, desc: '小学僧水平，这儿都混不开，回国随便糊弄！' },
                { text: '完全不会', value: -10, desc: '英语摆烂王，这儿活成笑话，回国yyds！' }
            ]
        },
        {
            id: 'localLanguage',
            question: '你在这儿当地语言咋样？能融入本地不？',
            weight: 2.0,
            options: [
                { text: '母语级别', value: 10, desc: '语言天花板，这儿当大哥，回国谁听你秀？' },
                { text: '流利交流', value: 6, desc: '点菜硬聊，这儿稳赢，回国白瞎技能！' },
                { text: '基础对话', value: 2, desc: '硬憋几句，这儿能活，回国更轻松！' },
                { text: '一知半解', value: -4, desc: '半吊子战士，这儿铁憨憨，回国随便混！' },
                { text: '完全不会', value: -10, desc: '哑巴天选，这儿手势求生，回国直接起飞！' }
            ]
        },
        {
            id: 'familyRelation',
            question: '你跟国内的家人亲不亲？回国有人惦记吗？',
            weight: 1.0,
            options: [
                { text: '形同陌路', value: 8, desc: '家庭？不存在，这儿随便浪，回国有啥用！' },
                { text: '偶尔联系', value: 4, desc: '过年"哈哈"，这儿无牵挂，回国也emo！' },
                { text: '关系一般', value: 0, desc: '不冷不热，这儿那儿都行，随缘吧！' },
                { text: '每周联系', value: -4, desc: '老妈查岗，这儿还得哄，回国更省心！' },
                { text: '黏在一起', value: -8, desc: '妈宝天选，这儿都想家，回国直接爽！' }
            ]
        },
        {
            id: 'parentSupport',
            question: '国内爹妈能给你啥支持？回去有靠山不？',
            weight: 1.5,
            options: [
                { text: '经济+情感双支持', value: 8, desc: '爹妈神仙，这儿有靠山，回国干嘛浪费？' },
                { text: '只有经济支持', value: 4, desc: '钞能力到位，这儿硬撑，回国没必要！' },
                { text: '只有情感支持', value: 2, desc: '嘴炮王，这儿聊胜于无，回国更香！' },
                { text: '无支持', value: -4, desc: '爹妈摆烂，这儿自己扛，回国省心！' },
                { text: '拖后腿', value: -8, desc: '爹妈负资产，这儿累死，回国他们还等你养！' }
            ]
        },
        {
            id: 'overseasRelatives',
            question: '你在这儿有啥亲戚朋友？留下来有人罩你吗？',
            weight: 1.0,
            options: [
                { text: '有亲密家人/伴侣', value: 10, desc: '海外靠山，这儿开挂，回国干嘛emo？' },
                { text: '有挚友', value: 6, desc: '铁哥们，这儿硬核救命，回国没这待遇！' },
                { text: '有熟人', value: 2, desc: '点头之交，这儿凑合，回国也差不多！' },
                { text: '仅点头之交', value: -2, desc: '半熟脸，这儿孤狼，回国老乡多！' },
                { text: '完全没人', value: -8, desc: '社恐天选，这儿自闭，回国yyds！' }
            ]
        },
        {
            id: 'education',
            question: '你学历多高？在这儿混得下去吗？',
            weight: 1.5,
            options: [
                { text: '博士', value: 10, desc: '学霸天花板，这儿随便卷，回国干嘛浪费？' },
                { text: '硕士', value: 6, desc: '高知卷王，这儿硬刚，回国没舞台！' },
                { text: '本科', value: 2, desc: '普普通通，这儿凑合，回国也行！' },
                { text: '大专', value: -4, desc: '学历摆烂，这儿混不开，回国随便！' },
                { text: '高中及以下', value: -8, desc: '读书少天命，这儿靠脸都混不下去，回国随便摆烂！' }
            ]
        },
        {
            id: 'skill',
            question: '你有啥蓝领技能？在这儿能靠手艺吃饭不？',
            weight: 1.5,
            options: [
                { text: '多项大师级', value: 10, desc: '厨神修车王，这儿直接封神，回国干嘛浪费手艺？' },
                { text: '熟练一项', value: 6, desc: '手艺人天选，这儿吃饭不愁，回国白瞎技能！' },
                { text: '基础水平', value: 2, desc: '半吊子手艺，这儿能糊弄，回国更轻松！' },
                { text: '只看不干', value: -4, desc: '眼高手低，这儿没人惯你，回国随便混！' },
                { text: '啥也不会', value: -8, desc: '手残天命，这儿只能洗盘子，回国躺平yyds！' }
            ]
        },
        {
            id: 'currentJob',
            question: '你现在干啥工作？回国还找得到饭碗吗？',
            weight: 1.0,
            options: [
                { text: '外企', value: 6, desc: '国际卷王，这儿无缝硬刚，回国干嘛降级？' },
                { text: '创业者', value: 4, desc: '天生卷狗，这儿还能秀，回国996福报？' },
                { text: '民企', value: 0, desc: '不上不下，这儿那儿都行，随缘吧！' },
                { text: '体制内', value: -6, desc: '铁饭碗天选，这儿不香，回国稳如老狗！' },
                { text: '无业游民', value: -8, desc: '躺平天命，这儿没活，回国刷短视频吧！' }
            ]
        },
        {
            id: 'asset',
            question: '你家有多少资产？回国能躺平吗？',
            weight: 1.8,
            options: [
                { text: '大富', value: 10, desc: '富哥天花板，这儿随便浪，回国干嘛省钱？' },
                { text: '小富', value: 6, desc: '小资卷王，这儿硬核消费，回国抠门emo！' },
                { text: '小康', value: 2, desc: '日子凑合，这儿能撑，回国也差不多！' },
                { text: '没闲钱但饿不死', value: -4, desc: '紧巴巴天命，这儿物价PUA你，回国苟着香！' },
                { text: '一贫如洗', value: -10, desc: '穷鬼天选，这儿活不下去，回国喝西北风yyds！' }
            ]
        },
        {
            id: 'familyStatus',
            question: '你有伴侣孩子吗？回国拖家带口咋办？',
            weight: 1.0,
            options: [
                { text: '单身贵族', value: 6, desc: '一人吃饱，这儿浪到飞起，回国干嘛找罪受？' },
                { text: '有伴侣无孩', value: 2, desc: '两人世界，这儿还能撑，回国也随便！' },
                { text: '有伴侣有1孩', value: -2, desc: '拖家带口，这儿成本高，回国省心点！' },
                { text: '有伴侣多孩', value: -6, desc: '孩子一堆，这儿累死，回国奶爸轻松！' },
                { text: '单亲带娃', value: -8, desc: '单身狗天命，这儿emo爆炸，回国救命！' }
            ]
        },
        {
            id: 'familyOpinion',
            question: '伴侣孩子想回国吗？（若无家庭请选最后一项）',
            weight: 1.5,
            options: [
                { text: '举家支持', value: 10, desc: '全家卷王，这儿团战无敌，回国干嘛散伙？' },
                { text: '勉强同意', value: 4, desc: '磨叽半天，这儿还能硬刚，回国也行！' },
                { text: '无所谓', value: 0, desc: '爱回不回，这儿那儿都摆烂，随缘！' },
                { text: '有点反对', value: -6, desc: '家里吵翻，这儿头秃，回国省心！' },
                { text: '坚决反对', value: -10, desc: '家都不和，这儿自找PUA，回国yyds！' },
                { text: '无伴侣/孩子', value: 0, desc: '和我没关系，一个人随便浪！' }
            ]
        },
        {
            id: 'goal',
            question: '你在这儿的目标是啥？回国还有奔头吗？',
            weight: 1.0,
            options: [
                { text: '职业巅峰', value: 8, desc: '卷王天命，这儿大舞台随便秀，回国干嘛降级？' },
                { text: '子女教育', value: 6, desc: '鸡娃战士，这儿拼娃硬核，回国白瞎！' },
                { text: '生活质量', value: 4, desc: '蓝天白云，这儿硬核躺，回国福报多？' },
                { text: '随便看看', value: 2, desc: '旅游摆烂，这儿混混够，回国也行！' },
                { text: '没啥目标', value: -2, desc: '迷迷糊糊，这儿emo，回国随便！' }
            ]
        },
        {
            id: 'health',
            question: '你身体咋样？在这儿扛得住吗？',
            weight: 1.0,
            options: [
                { text: '壮如牛', value: 8, desc: '健身卷王，这儿随便硬刚，回国干嘛养老？' },
                { text: '还凑合', value: 2, desc: '小病小痛，这儿能撑，回国也行！' },
                { text: '慢性病', value: -4, desc: '药罐子，这儿医药费PUA你，回国香！' },
                { text: '病秧子', value: -8, desc: '走两步就喘，这儿直接寄，回国养着yyds！' }
            ]
        },
        {
            id: 'visa',
            question: '你签证咋样？还能在这儿待多久？',
            weight: 2.0,
            options: [
                { text: '永居在手', value: 10, desc: '绿卡卷王，这儿随便浪，回国干嘛丢身份？' },
                { text: '长期签证', value: 6, desc: '硬住几年，这儿稳如老狗，回国没必要！' },
                { text: '短期签证', value: 2, desc: '晃悠几圈，这儿还能混，回国也行！' },
                { text: '申请中', value: -2, desc: '悬而未决，这儿忐忑，回国省心！' },
                { text: '啥也没有', value: -10, desc: '签证摆烂，这儿待不下去，回国yyds！' }
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
                { text: '18-25岁', value: 10, desc: '后浪卷王，出去炫酷一条龙，国内996算啥！' },
                { text: '26-35岁', value: 6, desc: '打工人巅峰，出去当卷王，国内天花板太低！' },
                { text: '36-45岁', value: 0, desc: '中年社畜，出去国内都差不多，随缘摆烂吧！' },
                { text: '46-60岁', value: -6, desc: '油腻大叔，出去折腾啥，国内躺平多稳！' },
                { text: '60岁以上', value: -10, desc: '广场舞大爷，出去干嘛，国内退休金不香吗？' }
            ]
        },
        {
            id: 'income',
            question: '你家一年赚多少钱？够不够海外的开销？',
            weight: 1.8,
            options: [
                { text: '100万以上', value: 10, desc: '钞能力满级，出去买买买，国内壕得不够爽！' },
                { text: '50-100万', value: 6, desc: '小资卷王，出去硬核氪金，国内攒钱多累！' },
                { text: '20-50万', value: 2, desc: '中产社畜，出去不至于破产，国内也凑合！' },
                { text: '5-20万', value: -4, desc: '月光族天命，出去物价吓死你，国内苟着吧！' },
                { text: '5万以下', value: -10, desc: '穷鬼天选，出去想屁吃，国内外卖券救命！' }
            ]
        },
        {
            id: 'english',
            question: '你的英语咋样？出去能活下来吗？',
            weight: 2.0,
            options: [
                { text: '母语级别', value: 10, desc: '英语卷王，出去硬核输出，国内憋屈死！' },
                { text: '流利交流', value: 6, desc: '日常硬聊，出去yyds，国内用不上憋死！' },
                { text: '基础对话', value: 2, desc: 'How are you能憋，出去别社死就行！' },
                { text: '只认识ABC', value: -4, desc: '小学僧水平，出去被老外PUA，国内安全！' },
                { text: '完全不会', value: -10, desc: '英语摆烂王，出去哑巴天命，国内蹲着吧！' }
            ]
        },
        {
            id: 'localLanguage',
            question: '你会目标国家的语言吗？能混进当地圈子不？',
            weight: 2.0,
            options: [
                { text: '母语级别', value: 10, desc: '语言卷王，出去当地人都喊哥，国内憋屈！' },
                { text: '流利交流', value: 6, desc: '点菜硬聊，出去yyds，国内用不上！' },
                { text: '基础对话', value: 2, desc: '硬憋几句，出去别社死，国内随便！' },
                { text: '一知半解', value: -4, desc: '半吊子水平，出去当铁憨憨，国内稳！' },
                { text: '完全不会', value: -10, desc: '哑巴天选，出去笑拉了，国内蹲着香！' }
            ]
        },
        {
            id: 'familyRelation',
            question: '你跟国内家人亲不亲？出去会不会想家？',
            weight: 1.0,
            options: [
                { text: '形同陌路', value: 8, desc: '家庭？没这回事，出去起飞，绝绝子！' },
                { text: '偶尔联系', value: 4, desc: '过年"哈哈"，出去无压力，国内也行！' },
                { text: '关系一般', value: 0, desc: '不冷不热，出去国内随便，摆烂吧！' },
                { text: '每周联系', value: -4, desc: '老妈查岗，出去还得报备，累了！' },
                { text: '黏在一起', value: -8, desc: '妈宝天命，出去就emo，国内蹲着吧！' }
            ]
        },
        {
            id: 'parentSupport',
            question: '国内爹妈能给你啥支持？出去有后援吗？',
            weight: 1.5,
            options: [
                { text: '经济+情感双支持', value: 8, desc: '爹妈是神，出去硬核带飞，国内太亏！' },
                { text: '只有经济支持', value: 4, desc: '钞能力在线，出去能撑，国内浪费！' },
                { text: '只有情感支持', value: 2, desc: '嘴炮爹妈，出去聊胜于无，国内也行！' },
                { text: '无支持', value: -4, desc: '全靠自己，出去费劲，国内省心！' },
                { text: '拖后腿', value: -8, desc: '爹妈负资产，出去累死，国内蹲着吧！' }
            ]
        },
        {
            id: 'overseasRelatives',
            question: '你在国外有啥亲戚朋友？去了有人接应吗？',
            weight: 1.0,
            options: [
                { text: '有亲密家人/伴侣', value: 10, desc: '海外有家，出去直接开挂，国内憋屈！' },
                { text: '有挚友', value: 6, desc: '铁哥们在线，出去硬核接应，牛啊！' },
                { text: '有熟人', value: 2, desc: '点头之交，出去不至于emo，还行！' },
                { text: '仅点头之交', value: -2, desc: '半熟脸，出去帮不上，国内老乡香！' },
                { text: '完全没人', value: -8, desc: '社恐天选，出去自闭，国内稳！' }
            ]
        },
        {
            id: 'education',
            question: '你学历多高？出去能找到好工作吗？',
            weight: 1.5,
            options: [
                { text: '博士', value: 10, desc: '学霸天花板，出去卷死老外，国内憋屈！' },
                { text: '硕士', value: 6, desc: '高知卷王，出去硬刚，国内没舞台！' },
                { text: '本科', value: 2, desc: '普普通通，出去混个中庸，国内也行！' },
                { text: '大专', value: -4, desc: '学历摆烂，出去被老外PUA，国内苟着吧！' },
                { text: '高中及以下', value: -8, desc: '读书少天命，出去靠脸吃饭？国内蹲着稳！' }
            ]
        },
        {
            id: 'skill',
            question: '你有啥蓝领技能？出去能靠手艺吃饭吗？',
            weight: 1.5,
            options: [
                { text: '多项大师级', value: 10, desc: '厨神修车王，出去直接封神，国内埋没你！' },
                { text: '熟练一项', value: 6, desc: '手艺人天选，出去硬核吃饭，国内太亏！' },
                { text: '基础水平', value: 2, desc: '半吊子手艺，出去能混，国内也凑合！' },
                { text: '只看不干', value: -4, desc: '眼高手低，出去没人惯着，国内摆烂吧！' },
                { text: '啥也不会', value: -8, desc: '手残天命，出去洗盘子，国内躺平香！' }
            ]
        },
        {
            id: 'currentJob',
            question: '你现在干啥工作？出去还能干啥？',
            weight: 1.0,
            options: [
                { text: '外企', value: 6, desc: '国际卷王，出去无缝衔接，国内天花板低！' },
                { text: '创业者', value: 4, desc: '天生卷狗，出去当老板，国内太憋屈！' },
                { text: '民企', value: 0, desc: '不上不下，出去国内都随便，随缘摆烂！' },
                { text: '体制内', value: -6, desc: '铁饭碗天选，出去干嘛，国内躺平香！' },
                { text: '无业游民', value: -8, desc: '躺平天命，出去没活，国内刷剧稳！' }
            ]
        },
        {
            id: 'asset',
            question: '你家有多少资产？出去能撑多久？',
            weight: 1.8,
            options: [
                { text: '大富', value: 10, desc: '富哥天花板，出去全球买买买，国内壕得不够爽！' },
                { text: '小富', value: 6, desc: '小资卷王，出去硬核氪金，国内攒钱累！' },
                { text: '小康', value: 2, desc: '日子凑合，出去不破产，国内也行！' },
                { text: '没闲钱但饿不死', value: -4, desc: '紧巴巴天命，出去物价吓死你，国内苟着吧！' },
                { text: '一贫如洗', value: -10, desc: '穷鬼天选，出去想屁吃，国内喝西北风稳！' }
            ]
        },
        {
            id: 'familyStatus',
            question: '你有伴侣孩子吗？出去拖家带口行不行？',
            weight: 1.0,
            options: [
                { text: '单身贵族', value: 6, desc: '一人吃饱，出去浪到飞起，国内憋屈死！' },
                { text: '有伴侣无孩', value: 2, desc: '两人世界，出去硬撑，国内也凑合！' },
                { text: '有伴侣有1孩', value: -2, desc: '拖家带口，出去成本翻倍，国内稳！' },
                { text: '有伴侣多孩', value: -6, desc: '孩子一堆，出去全职奶爸，国内香！' },
                { text: '单亲带娃', value: -8, desc: '单身狗天命，出去带娃emo，国内蹲着吧！' }
            ]
        },
        {
            id: 'familyOpinion',
            question: '伴侣孩子想出去吗？（若无家庭请选最后一项）',
            weight: 1.5,
            options: [
                { text: '举家支持', value: 10, desc: '全家卷王，出去团战无敌，国内太亏！' },
                { text: '勉强同意', value: 4, desc: '磨叽半天，出去硬刚，国内也凑合！' },
                { text: '无所谓', value: 0, desc: '爱去不去，出去国内都摆烂，随缘吧！' },
                { text: '有点反对', value: -6, desc: '家里吵翻，出去头秃，国内稳！' },
                { text: '坚决反对', value: -10, desc: '家都不和，出去自找PUA，国内香！' },
                { text: '无伴侣/孩子', value: 0, desc: '和我没关系，一个人随便浪！' }
            ]
        },
        {
            id: 'goal',
            question: '你出去想干啥？有啥目标没？',
            weight: 1.0,
            options: [
                { text: '职业巅峰', value: 8, desc: '卷王天命，出去大舞台硬核秀，国内憋屈！' },
                { text: '子女教育', value: 6, desc: '鸡娃战士，出去拼娃牛啊，国内太亏！' },
                { text: '生活质量', value: 4, desc: '追求蓝天白云，出去硬核躺，国内福报多！' },
                { text: '随便看看', value: 2, desc: '旅游摆烂王，出去混混，国内也凑合！' },
                { text: '没啥目标', value: -2, desc: '迷迷糊糊，出去干嘛，国内emo吧！' }
            ]
        },
        {
            id: 'health',
            question: '你身体咋样？出去扛得住吗？',
            weight: 1.0,
            options: [
                { text: '壮如牛', value: 8, desc: '健身卷王，出去硬核刚，国内憋屈！' },
                { text: '还凑合', value: 2, desc: '小病小痛，出去能扛，国内也凑合！' },
                { text: '慢性病', value: -4, desc: '药罐子天命，出去医药费吓死你，国内稳！' },
                { text: '病秧子', value: -8, desc: '走两步就喘，出去直接寄，国内养着吧！' }
            ]
        },
        {
            id: 'visa',
            question: '你签证咋样？能出去不？',
            weight: 2.0,
            options: [
                { text: '永居在手', value: 10, desc: '绿卡卷王，出去世界我有，国内憋屈死！' },
                { text: '长期签证', value: 6, desc: '出去硬住几年，稳如老狗，国内太亏！' },
                { text: '短期签证', value: 2, desc: '晃悠几圈，出去能混，国内也随便！' },
                { text: '申请中', value: -2, desc: '悬而未决，出去看命，国内稳！' },
                { text: '啥也没有', value: -10, desc: '签证摆烂王，出去想屁吃，国内刷短视频吧！' }
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