---
title: "HTMLInputElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLInputElement/alt
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces definiert das Textlabel für die Schaltfläche für Benutzer und Benutzeragenten, die das Bild nicht verwenden können. Sie spiegelt das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `alt`-Eigenschaft ist nur für den [`image`](/de/docs/Web/HTML/Element/input/image)-Typ gültig. Sie sollte eine nicht-leere Zeichenkette sein, die das Label angibt, das für eine gleichwertige Schaltfläche angemessen wäre, falls das Bild nicht verfügbar wäre.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.alt);
inputElement.alt = "A much better description";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.alt`](/de/docs/Web/API/HTMLImageElement/alt)
- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- [Gutes Alt-Text schreiben](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/)
