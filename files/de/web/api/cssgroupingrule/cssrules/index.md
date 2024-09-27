---
title: "CSSGroupingRule: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSGroupingRule/cssRules
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{ APIRef("CSSOM") }}

Die **`cssRules`**-Eigenschaft des
[`CSSGroupingRule`](/de/docs/Web/API/CSSGroupingRule)-Interfaces gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die eine Sammlung von [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekten enthält.

## Wert

eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList).

## Beispiele

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
