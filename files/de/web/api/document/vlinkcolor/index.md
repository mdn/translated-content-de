---
title: "Document: vlinkColor-Eigenschaft"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die **`Document.vlinkColor`**-Eigenschaft holt/setzt die Farbe von Links, die der Benutzer im Dokument besucht hat.

## Wert

Ein String, der die Farbe als Wort (z.B. `"red"`) oder als hexadezimaler Wert (z.B. `"#ff0000"`) darstellt.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null` Wert in den leeren String (`""`) konvertiert, sodass `document.vlinkColor = null` gleichbedeutend ist mit `document.vlinkColor = ""`.

## Hinweise

- Der Standardwert für diese Eigenschaft in Mozilla Firefox ist Lila
  (`#551a8b` in Hexadezimal).
- `Document.vlinkColor` ist in [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-vlinkcolor) veraltet.
- Die empfohlene Alternative ist, die Farbe der CSS {{Cssxref(":visited")}} Pseudoklasse auf HTML {{HtmlElement("a")}} Elementen zu setzen (z.B. `a:visited {color:red;}`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
