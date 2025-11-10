---
title: "HTMLImageElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLImageElement/align
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die _veraltete_ **`align`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces ist ein String, der angibt, wie das Bild relativ zu seinem Container positioniert wird. Sie spiegelt das [`align`](/de/docs/Web/HTML/Reference/Elements/img#align)-Inhaltsattribut des `<img>`-Elements wider.

Stattdessen sollten Sie die CSS-Eigenschaft {{cssxref("vertical-align")}} verwenden, die tatsächlich auch bei Bildern funktioniert, trotz ihres Namens. Sie können auch die {{cssxref("float")}}-Eigenschaft verwenden, um das Bild an den linken oder rechten Rand zu schweben.

## Wert

Ein String, dessen Wert `top`, `middle`, `bottom`, `left` oder `right` ist. Für ihre Bedeutungen siehe die HTML-Referenz zu [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#align).

## Beispiele

### Die align-Eigenschaft setzen

```js example-bad
const img = new Image();
img.src = "example.png";
img.align = "top";
```

Statt die veraltete `align`-Eigenschaft zu nutzen, sollten Sie erwägen, die CSS-Eigenschaft `vertical-align` zu setzen:

```js example-good
const img = new Image();
img.src = "example.png";
img.style.verticalAlign = "top";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
