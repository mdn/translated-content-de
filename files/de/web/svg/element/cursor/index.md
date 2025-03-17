---
title: <cursor>
slug: Web/SVG/Element/cursor
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}{{Deprecated_Header}}

> [!NOTE]
> Die CSS-Eigenschaft {{cssxref("cursor")}} sollte anstelle dieses Elements verwendet werden.

Das **`<cursor>`** [SVG](/de/docs/Web/SVG) Element kann verwendet werden, um einen plattformunabhängigen benutzerdefinierten Mauszeiger zu definieren. Ein empfehlenswerter Ansatz, um einen plattformunabhängigen benutzerdefinierten Mauszeiger zu definieren, ist, ein PNG-Bild zu erstellen und ein `cursor`-Element zu definieren, das auf das PNG-Bild verweist und die genaue Position innerhalb des Bildes angibt, die die Zeigerposition darstellt (d.h. der Hotspot).

Das PNG-Format wird empfohlen, da es die Möglichkeit bietet, eine Transparenzmaske über einen Alphakanal zu definieren. Wenn ein anderes Bildformat verwendet wird, sollte dieses Format die Definition einer Transparenzmaske unterstützen (zwei Optionen: Bereitstellung eines expliziten Alphakanals oder Verwendung einer bestimmten Pixelfarbe zur Kennzeichnung der Transparenz). Wenn die Transparenzmaske bestimmt werden kann, definiert die Maske die Form des Cursors; andernfalls ist der Cursor ein undurchsichtiges Rechteck. Typischerweise definieren die anderen Pixelinformationen (z. B. die R-, G- und B-Kanäle) die Farben für jene Teile des Cursors, die nicht maskiert sind. Beachten Sie, dass Cursor normalerweise mindestens zwei Farben enthalten, damit der Cursor über den meisten Hintergründen sichtbar ist.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("x")}} {{Deprecated_Inline}}
- {{SVGAttr("y")}} {{Deprecated_Inline}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGCursorElement`](/de/docs/Web/API/SVGCursorElement).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
