---
title: "Dokument: Eigenschaft fgColor"
short-title: fgColor
slug: Web/API/Document/fgColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

**`fgColor`** ruft die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments ab oder setzt diese.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimalen Wert (z.B. `"#ff0000"`) darstellt.

## Beispiele

```js
document.fgColor = "white";
document.bgColor = "darkblue";
```

## Anmerkungen

Der Standardwert für diese Eigenschaft in Mozilla Firefox ist schwarz (`#000000` in Hexadezimal).

`document.fgColor` ist im [HTML-Standard](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-fgcolor) veraltet. Die empfohlene Alternative ist die CSS-Eigenschaft {{Cssxref("color")}} (z.B. `document.body.style.color = "red"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
