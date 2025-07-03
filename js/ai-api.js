// AI接口调用函数
async function callAI(inputText) {
    // 替换为你的API信息
    const apiKey = "sk-8dcf7189ded24c1babee65907b2c8806"; // 你的API密钥
    const apiUrl = "https://api.deepseek.com"; // 如：https://api.openai.com/v1/chat/completions

    try {
        // 发送请求到API
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}` // 按API要求的格式传密钥
            },
            body: JSON.stringify({
                // 按API文档填写参数，以下为示例
                model: "gpt-3.5-turbo", // 模型名称（根据你的API修改）
                messages: [{ role: "user", content: inputText }]
            })
        });

        // 解析返回结果（根据API格式调整）
        const result = await response.json();
        return result.choices[0].message.content; // 提取AI回答
    } catch (error) {
        return "AI调用失败，请稍后再试";
    }
}