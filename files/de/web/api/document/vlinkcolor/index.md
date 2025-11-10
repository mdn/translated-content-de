---
title: "Dokument: vlinkColor-Eigenschaft"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die **`Document.vlinkColor`**-Eigenschaft erhält/setzt die Farbe der Links, die der Benutzer im Dokument besucht hat.

## Wert

Ein Zeichenfolge, die die Farbe als Wort (z. B., `"red"`) oder als Hexadezimalwert (z. B., `"#ff0000"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) umgewandelt, sodass `document.vlinkColor = null` gleichbedeutend mit `document.vlinkColor = ""` ist.

## Hinweise

- Der Standardwert für diese Eigenschaft in Mozilla Firefox ist Lila (`#551a8b` im Hexadezimalformat).
- `Document.vlinkColor` ist in [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-vlinkcolor) veraltet.
- Die empfohlene Alternative ist das Erhalten/Setzen der Farbe der CSS-{{Cssxref(":visited")}}-Pseudoklasse auf HTML-{{HtmlElement("a")}}-Elementen (z. B., `a:visited {color:red;}`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
