---
title: "Dokument: fgColor-Eigenschaft"
short-title: fgColor
slug: Web/API/Document/fgColor
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{Deprecated_header}}

**`fgColor`** liest/setzt die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments.

## Wert

Ein Zeichenfolgenwert, der die Farbe als Wort (z. B. `"red"`) oder als hexadezimale Zahl (z. B. `"#ff0000"`) darstellt.

## Beispiele

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist schwarz (`#000000` in Hexadezimal).

`document.fgColor` ist im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-fgcolor) veraltet. Die empfohlene Alternative ist die CSS-Eigenschaft {{Cssxref("color")}}
(z. B. `document.body.style.color = "red"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
