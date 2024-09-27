---
title: "Document: bgColor-Eigenschaft"
short-title: bgColor
slug: Web/API/Document/bgColor
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die veraltete `bgColor`-Eigenschaft erhält oder setzt die Hintergrundfarbe des aktuellen Dokuments.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimaler Wert (z.B. `"#ff0000"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, daher ist `document.bgColor = null` gleichbedeutend mit `document.bgColor = ""`.

## Beispiele

```js
document.bgColor = "darkblue";
```

## Hinweise

Der Standardwert für diese Eigenschaft in Firefox ist Weiß (`#ffffff` in hexadecimal).

`document.bgColor` ist in [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) veraltet. Die empfohlene Alternative ist die Verwendung des CSS-Stils {{Cssxref("background-color")}}, der über das DOM mit `document.body.style.backgroundColor` zugänglich ist. Eine weitere Alternative ist `document.body.bgColor`, obwohl dies ebenfalls in HTML 4.01 zugunsten der CSS-Alternative veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
