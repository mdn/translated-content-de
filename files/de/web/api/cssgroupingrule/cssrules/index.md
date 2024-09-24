---
title: "CSSGroupingRule: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSGroupingRule/cssRules
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

Die **`cssRules`**-Eigenschaft des {{domxref("CSSGroupingRule")}}-Interfaces gibt eine {{domxref("CSSRuleList")}} zurück, die eine Sammlung von {{domxref("CSSRule")}}-Objekten enthält.

## Wert

eine {{domxref("CSSRuleList")}}.

## Beispiele

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
