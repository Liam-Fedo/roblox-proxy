export default async function handler(req, res) {
    const keyword = req.query.keyword || "";
    const limit = req.query.limit || 30;
    
    try {
        const response = await fetch(`https://catalog.roblox.com/v1/search/items?category=Accessories&limit=${limit}&keyword=${encodeURIComponent(keyword)}&sortType=Relevance`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.json({ data: [] });
    }
}