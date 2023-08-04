module.exports = {
  docs: [
    "introduction",
    "term",
    "interview",
    "supportprices",
    "application",
    "contractaddress",
    "question",
    {
      type: "category",
      label: "使用教程",
      collapsed: false,
      items: [
        "tutorial/register",
        "tutorial/renew",
        {
          label: "设置解析",
          type: "category",
          items: ["tutorial/setaddress/user", "tutorial/setaddress/bot"],
        },
      ],
    },
  ],
};
