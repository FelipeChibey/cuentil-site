import { defineMdastPlugin } from "satteri";
import { fillSiteTokens } from "../site";

export const siteTokensPlugin = defineMdastPlugin({
  name: "site-tokens",
  text(node, ctx) {
    const value = fillSiteTokens(node.value);
    if (value !== node.value) ctx.setProperty(node, "value", value);
  },
  link(node, ctx) {
    const url = fillSiteTokens(node.url);
    if (url !== node.url) ctx.setProperty(node, "url", url);
  },
});
