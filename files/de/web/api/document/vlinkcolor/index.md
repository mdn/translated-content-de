---
title: "Document: vlinkColor Eigenschaft"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die **`Document.vlinkColor`**-Eigenschaft ruft die Farbe ab oder setzt die Farbe von Links, die der Benutzer im Dokument besucht hat.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimale Angabe (z.B. `"#ff0000"`) darstellt.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.vlinkColor = null` äquivalent zu `document.vlinkColor = ""` ist.

## Hinweise

- Der Standardwert für diese Eigenschaft in Mozilla Firefox ist Lila
  (`#551a8b` in hexadezimal).
- `Document.vlinkColor` ist [im DOM Level 2 HTML veraltet](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).
- Die empfohlene Alternative ist, die Farbe der CSS {{Cssxref(":visited")}} Pseudoklasse auf HTML {{HtmlElement("a")}} Elementen festzulegen (z.B. `a:visited {color:red;}`).
- Eine weitere Alternative ist `document.body.vLink`, obwohl dies [in HTML 4.01 veraltet](https://www.w3.org/TR/html401/struct/global.html#adef-vlink) zugunsten der CSS-Alternative ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
