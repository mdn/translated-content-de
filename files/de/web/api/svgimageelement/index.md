---
title: SVGImageElement
slug: Web/API/SVGImageElement
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef("SVG")}}

Die **`SVGImageElement`**-Schnittstelle entspricht dem {{SVGElement("image")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGImageElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} des angegebenen {{SVGElement("image")}}-Elements entspricht.
- {{domxref("SVGImageElement.decoding")}}
  - : Stellt einen Hinweis dar, wie der Browser das Bild dekodieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `"sync"` zum synchronen Dekodieren des Bildes, `"async"` zum asynchronen Dekodieren oder `"auto"`, um keine Präferenz anzugeben (was Standard ist).
- {{domxref("SVGImageElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem Attribut {{SVGAttr("height")}} des angegebenen {{SVGElement("image")}}-Elements entspricht.
- {{domxref("SVGImageElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedPreserveAspectRatio")}}, das dem Attribut {{SVGAttr("preserveAspectRatio")}} des angegebenen {{SVGElement("image")}}-Elements entspricht.
- {{domxref("SVGImageElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem Attribut {{SVGAttr("width")}} des angegebenen {{SVGElement("image")}}-Elements entspricht.
- {{domxref("SVGImageElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem Attribut {{SVGAttr("x")}} des angegebenen {{SVGElement("image")}}-Elements entspricht.
- {{domxref("SVGImageElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem Attribut {{SVGAttr("y")}} des angegebenen {{SVGElement("image")}}-Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrer übergeordneten Schnittstelle, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGImageElement.decode()")}}
  - : Initiert das asynchrone Dekodieren der Bilddaten. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Bilddaten bereit zur Verwendung sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
