---
title: "HTMLInputElement: alt-Eigenschaft"
short-title: alt
slug: Web/API/HTMLInputElement/alt
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces definiert das textuelle Label für den Button für Benutzer und Benutzeragenten, die das Bild nicht nutzen können. Sie spiegelt das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `alt`-Eigenschaft ist nur für den [`image`](/de/docs/Web/HTML/Reference/Elements/input/image)-Typ gültig. Es sollte eine nicht-leere Zeichenkette sein, die das Label angibt, das für einen äquivalenten Button angemessen wäre, falls das Bild nicht verfügbar ist.

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
- [Guter Alt-Text, schlechter Alt-Text — Inhalte wahrnehmbar machen](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) auf WCAG.com (2021)
- [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) auf der W3C Web Accessibility Initiative (WAI)
