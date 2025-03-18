---
title: <cursor>
slug: Web/SVG/Reference/Element/cursor
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{Deprecated_Header}}

> [!NOTE]
> Die CSS-Eigenschaft {{cssxref("cursor")}} sollte anstelle dieses Elements verwendet werden.

Das **`<cursor>`** [SVG](/de/docs/Web/SVG)-Element kann verwendet werden, um einen plattformunabhängigen benutzerdefinierten Cursor zu definieren. Ein empfohlener Ansatz zur Definition eines plattformunabhängigen benutzerdefinierten Cursors besteht darin, ein PNG-Bild zu erstellen und ein `cursor`-Element zu definieren, das auf das PNG-Bild verweist und die genaue Position innerhalb des Bildes identifiziert, die die Zeigerposition darstellt (d.h. den Hotspot).

Das PNG-Format wird empfohlen, da es die Möglichkeit unterstützt, eine Transparenzmaske über einen Alpha-Kanal zu definieren. Wenn ein anderes Bildformat verwendet wird, sollte dieses Format die Definition einer Transparenzmaske unterstützen (zwei Optionen: Bereitstellung eines expliziten Alpha-Kanals oder Verwendung einer bestimmten Pixel-Farbe zur Angabe der Transparenz). Wenn die Transparenzmaske ermittelt werden kann, definiert die Maske die Form des Cursors; andernfalls ist der Cursor ein undurchsichtiges Rechteck. Typischerweise definieren die anderen Pixelinformationen (z.B. die R-, G- und B-Kanäle) die Farben für die Teile des Cursors, die nicht maskiert sind. Beachten Sie, dass Cursors normalerweise mindestens zwei Farben enthalten, damit der Cursor über den meisten Hintergründen sichtbar ist.

## Verwendungskontext

{{SVGInfo}}

## Attribute

- {{SVGAttr("x")}} {{Deprecated_Inline}}
- {{SVGAttr("y")}} {{Deprecated_Inline}}
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGCursorElement`](/de/docs/Web/API/SVGCursorElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
