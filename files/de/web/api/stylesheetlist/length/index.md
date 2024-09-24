---
title: "StyleSheetList: length-Eigenschaft"
short-title: Länge
slug: Web/API/StyleSheetList/length
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`length`** schreibgeschützte Eigenschaft der {{domxref("StyleSheetList")}}-Schnittstelle gibt die Anzahl der {{domxref("CSSStyleSheet")}}-Objekte in der Sammlung zurück.

## Wert

Ein ganzzahliger Wert, der die Anzahl der Elemente in der Sammlung angibt.

## Beispiele

Im folgenden Beispiel wird `length` in die Konsole ausgegeben und auch in einer for-Schleife verwendet, um jedes einzelne {{domxref("CSSStyleSheet")}}-Objekt in die Konsole zu schreiben.

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
