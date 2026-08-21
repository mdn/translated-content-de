---
title: "HTMLImageElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die _veraltete_ **`align`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle ist ein String, der angibt, wie das Bild relativ zu seinem Container positioniert werden soll. Sie spiegelt das [`align`](/de/docs/Web/HTML/Reference/Elements/img#align)-Inhaltsattribut des `<img>`-Elements wider.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("vertical-align")}} verwenden, die tatsächlich auch bei Bildern funktioniert, obwohl der Name etwas anderes suggeriert. Sie können auch die {{cssxref("float")}}-Eigenschaft verwenden, um das Bild an den linken oder rechten Rand zu verschieben.

## Wert

Ein String mit einem Wert von `top`, `middle`, `bottom`, `left` oder `right`. Für deren Bedeutung siehe die HTML-[`<img>`](/de/docs/Web/HTML/Reference/Elements/img#align)-Referenz.

## Beispiele

### Einstellen des align-Attributs

```js example-bad
const img = new Image();
img.src = "example.png";
img.align = "top";
```

Anstatt die veraltete `align`-Eigenschaft zu verwenden, sollten Sie stattdessen die CSS-Eigenschaft `vertical-align` einstellen:

```js example-good
const img = new Image();
img.src = "example.png";
img.style.verticalAlign = "top";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
