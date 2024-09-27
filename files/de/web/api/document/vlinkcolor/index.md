---
title: "Document: vlinkColor-Eigenschaft"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die **`Document.vlinkColor`**-Eigenschaft ruft die Farbe von Links ab, die der Benutzer im Dokument besucht hat, bzw. setzt diese.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimale Angabe (z.B. `"#ff0000"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null` Wert in den leeren String (`""`) umgewandelt, sodass `document.vlinkColor = null` gleichbedeutend ist mit `document.vlinkColor = ""`.

## Hinweise

- Der Standardwert für diese Eigenschaft in Mozilla Firefox ist lila (`#551a8b` in hexadezimal).
- `Document.vlinkColor` ist [in DOM Level 2 HTML veraltet](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).
- Die empfohlene Alternative ist das Setzen der Farbe der CSS-{{Cssxref(":visited")}}-Pseudoklasse auf HTML-{{HtmlElement("a")}}-Elementen (z.B. `a:visited {color:red;}`).
- Eine weitere Alternative ist `document.body.vLink`, obwohl dies in [HTML 4.01 veraltet ist](https://www.w3.org/TR/html401/struct/global.html#adef-vlink) zugunsten der CSS-Alternative.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
