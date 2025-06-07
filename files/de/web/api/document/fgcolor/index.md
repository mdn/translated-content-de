---
title: "Dokument: fgColor-Eigenschaft"
short-title: fgColor
slug: Web/API/Document/fgColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{ApiRef}}{{Deprecated_header}}

**`fgColor`** holt/setzt die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als Hexadezimalwert (z.B. `"#ff0000"`) darstellt.

## Beispiele

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Hinweise

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist schwarz (`#000000` in Hexadezimal).

`document.fgColor` ist im [HTML-Standard](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-fgcolor) veraltet. Die empfohlene Alternative ist die CSS-Eigenschaft {{Cssxref("color")}} (z.B. `document.body.style.color = "red"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
