---
title: "CSSRuleList: length Eigenschaft"
short-title: Länge
slug: Web/API/CSSRuleList/length
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **`length`** Eigenschaft des {{domxref("CSSRuleList")}} Interfaces gibt die Anzahl der {{domxref("CSSRule")}} Objekte in der Liste zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Im folgenden Beispiel wird die Anzahl der Elemente in der {{domxref("CSSRuleList")}} namens `myRules` in der Konsole ausgegeben.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
