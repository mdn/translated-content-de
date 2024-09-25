---
title: <cursor>
slug: Web/SVG/Element/cursor
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}{{Deprecated_Header}}

> [!NOTE]
> Die CSS-Eigenschaft {{cssxref("cursor")}} sollte anstelle dieses Elements verwendet werden.

Das **`<cursor>`** [SVG](/de/docs/Web/SVG) Element kann verwendet werden, um einen plattformunabhängigen benutzerdefinierten Cursor zu definieren. Ein empfohlener Ansatz zur Definition eines plattformunabhängigen benutzerdefinierten Cursors besteht darin, ein PNG-Bild zu erstellen und ein `cursor`-Element zu definieren, das auf das PNG-Bild verweist und die genaue Position im Bild angibt, die die Zeigerposition darstellt (d.h., den Hotspot).

Das PNG-Format wird empfohlen, da es die Möglichkeit unterstützt, eine Transparenzmaske über einen Alphakanal zu definieren. Wenn ein anderes Bildformat verwendet wird, sollte dieses Format die Definition einer Transparenzmaske unterstützen (zwei Optionen: einen expliziten Alphakanal bereitstellen oder eine bestimmte Pixel-Farbe verwenden, um Transparenz anzuzeigen). Wenn die Transparenzmaske bestimmt werden kann, definiert die Maske die Form des Cursors; andernfalls ist der Cursor ein undurchsichtiges Rechteck. Typischerweise definieren die anderen Pixelinformationen (z. B. die R-, G- und B-Kanäle) die Farben für die Teile des Cursors, die nicht maskiert sind. Beachten Sie, dass Cursor in der Regel mindestens zwei Farben enthalten, damit der Cursor über den meisten Hintergründen sichtbar sein kann.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("x")}} {{Deprecated_Inline}}
- {{SVGAttr("y")}} {{Deprecated_Inline}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die {{DOMxRef("SVGCursorElement")}}-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
