---
title: "HTMLInputElement: alt Eigenschaft"
short-title: alt
slug: Web/API/HTMLInputElement/alt
l10n:
  sourceCommit: acb4e05fe7ea33a7b20fa03fdeb26a93511624e0
---

{{APIRef("HTML DOM")}}

Die **`alt`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces definiert das textuelle Label für den Button für Benutzer und Benutzeragenten, die das Bild nicht nutzen können. Sie spiegelt das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `alt`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Element/input/image) gültig. Es sollte ein nicht-leerer String sein, der das Label bereitstellt, das für einen gleichwertigen Button angemessen wäre, falls das Bild nicht verfügbar ist.

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
- [Guter Alt-Text, schlechter Alt-Text — Machen Sie Ihren Inhalt wahrnehmbar](https://www.wcag.com/blog/good-alt-text-bad-alt-text-making-your-content-perceivable/) auf WCAG.com (2021)
- [Ein Alt-Entscheidungsbaum](https://www.w3.org/WAI/tutorials/images/decision-tree/) auf der W3C Web Accessibility Initiative (WAI)
