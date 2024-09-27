---
title: "StyleSheetList: length Eigenschaft"
short-title: length
slug: Web/API/StyleSheetList/length
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`length`** schreibgeschützte Eigenschaft des [`StyleSheetList`](/de/docs/Web/API/StyleSheetList)-Interfaces gibt die Anzahl der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekte in der Sammlung zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in der Sammlung angibt.

## Beispiele

Im folgenden Beispiel wird `length` in die Konsole ausgegeben und auch in einer For-Schleife verwendet, um jedes einzelne [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in die Konsole auszugeben.

```js
let length = document.styleSheets.length;
console.log(length);

for (let i = 0; i < length; i++) {
  console.log(document.styleSheets[i]);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
