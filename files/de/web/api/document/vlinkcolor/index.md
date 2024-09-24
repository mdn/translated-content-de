---
title: "Document: vlinkColor-Eigenschaft"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die **`Document.vlinkColor`**-Eigenschaft ruft die Farbe auf oder setzt die Farbe von Links, die der Benutzer im Dokument besucht hat.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimaler Wert (z.B. `"#ff0000"`) darstellt.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `document.vlinkColor = null` dem `document.vlinkColor = ""` entspricht.

## Hinweise

- Der Standardwert für diese Eigenschaft in Mozilla Firefox ist lila
  (`#551a8b` in Hexadezimal).
- `Document.vlinkColor` ist [in DOM Level 2 HTML veraltet](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).
- Die empfohlene Alternative besteht darin, die Farbe der CSS-{{Cssxref(":visited")}}-Pseudoklasse auf HTML-{{HtmlElement("a")}}-Elementen zu setzen (z.B., `a:visited {color:red;}`).
- Eine weitere Alternative ist `document.body.vLink`, obwohl dies [in HTML 4.01 veraltet](https://www.w3.org/TR/html401/struct/global.html#adef-vlink) ist, zugunsten der CSS-Alternative.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
