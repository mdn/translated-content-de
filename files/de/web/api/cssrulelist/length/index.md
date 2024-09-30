---
title: "CSSRuleList: length-Eigenschaft"
short-title: length
slug: Web/API/CSSRuleList/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **`length`**-Eigenschaft des [`CSSRuleList`](/de/docs/Web/API/CSSRuleList)-Interfaces gibt die Anzahl der [`CSSRule`](/de/docs/Web/API/CSSRule)-Objekte in der Liste zurück.

## Wert

Eine ganze Zahl.

## Beispiele

Im folgenden Beispiel wird die Anzahl der Elemente in der [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) namens `myRules` in die Konsole ausgegeben.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
