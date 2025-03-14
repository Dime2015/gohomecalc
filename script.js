document.addEventListener('DOMContentLoaded', function() {
    // 获取所有选项按钮和计算按钮
    const optionButtons = document.querySelectorAll('.option-btn');
    const calculateButton = document.getElementById('calculate-btn');
    const resultContainer = document.getElementById('result');
    
    // 存储用户的选择
    const userSelections = {};
    
    // 为所有选项按钮添加点击事件
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 获取当前问题的ID
            const questionBlock = this.closest('.question-block');
            const questionId = questionBlock.id;
            
            // 移除同一问题中所有按钮的选中状态
            const buttonsInSameQuestion = questionBlock.querySelectorAll('.option-btn');
            buttonsInSameQuestion.forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // 添加当前按钮的选中状态
            this.classList.add('selected');
            
            // 保存用户选择
            userSelections[questionId] = {
                score: parseFloat(this.getAttribute('data-score')),
                weight: parseFloat(this.getAttribute('data-weight'))
            };
        });
    });
    
    // 计算按钮点击事件
    calculateButton.addEventListener('click', function() {
        // 检查是否所有问题都已回答
        const totalQuestions = document.querySelectorAll('.question-block').length;
        
        // 清除之前的错误信息
        const oldError = document.querySelector('.error-message');
        if (oldError) {
            oldError.remove();
        }
        
        if (Object.keys(userSelections).length < totalQuestions) {
            // 显示错误信息
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = '请完成所有选择';
            calculateButton.insertAdjacentElement('afterend', errorMessage);
            return;
        }
        
        // 计算结果
        let overseasPositiveScore = 0;
        let domesticPositiveScore = 0;
        
        for (const key in userSelections) {
            const selection = userSelections[key];
            const score = selection.score;
            const weight = selection.weight;
            const weightedScore = score * weight;
            
            if (score > 0) {
                overseasPositiveScore += weightedScore;
            } else if (score < 0) {
                domesticPositiveScore += Math.abs(weightedScore);
            }
        }
        
        // 计算差值
        const difference = overseasPositiveScore - domesticPositiveScore;
        
        // 根据差值确定结果文本和颜色
        let resultText = '';
        let scoreClass = '';
        
        if (difference >= 171 && difference <= 259) {
            resultText = `极度适合海外生活，倾向差值：<span class="score-value score-blue">${difference.toFixed(1)}分</span>。现在立刻马上，买机票出发吧，你肯定是投胎错了地方`;
            scoreClass = 'score-blue';
        } else if (difference >= 86 && difference <= 170) {
            resultText = `强烈适合海外生活，倾向差值：<span class="score-value score-blue">${difference.toFixed(1)}分</span>。金鳞岂是池中物，一遇风云便化龙`;
            scoreClass = 'score-blue';
        } else if (difference >= 26 && difference <= 85) {
            resultText = `适度适合海外生活，倾向差值：<span class="score-value score-blue">${difference.toFixed(1)}分</span>。外面的世界很精彩，就是偶尔会想念家里的老妈和老干妈`;
            scoreClass = 'score-blue';
        } else if (difference >= 1 && difference <= 25) {
            resultText = `轻度适合海外生活，倾向差值：<span class="score-value score-blue">${difference.toFixed(1)}分</span>。出去见见世面也好，就是记得常回家看看`;
            scoreClass = 'score-blue';
        } else if (difference >= -25 && difference <= 0) {
            resultText = `中立，倾向差值：<span class="score-value">${difference.toFixed(1)}分</span>。国内国外都行，抛硬币决定吧，人生就是一场豪赌！`;
        } else if (difference >= -85 && difference <= -26) {
            resultText = `轻度适合国内生活，倾向差值：<span class="score-value score-red">${difference.toFixed(1)}分</span>。外面的月亮没家里的圆，还是国内这烟火气更让你舒心`;
            scoreClass = 'score-red';
        } else if (difference >= -170 && difference <= -86) {
            resultText = `适度适合国内生活，倾向差值：<span class="score-value score-red">${difference.toFixed(1)}分</span>。别瞎折腾了，这35-9的外卖券不香吗？KFC疯狂星期四没你那我们可就不办了`;
            scoreClass = 'score-red';
        } else if (difference >= -200 && difference <= -171) {
            resultText = `强烈适合国内生活，倾向差值：<span class="score-value score-red">${difference.toFixed(1)}分</span>。别让外面哪些花花世界迷了你的眼，金窝银窝不如自己的草窝`;
            scoreClass = 'score-red';
        } else if (difference <= -201) {
            resultText = `极度适合国内生活，倾向差值：<span class="score-value score-red">${difference.toFixed(1)}分</span>。你的离开绝对是国有资产流失，这种事情我们要坚决反对`;
            scoreClass = 'score-red';
        }
        
        // 显示结果
        resultContainer.innerHTML = resultText;
        resultContainer.classList.add('show');
        
        // 滚动到结果区域
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}); 