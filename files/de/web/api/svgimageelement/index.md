---
title: SVGImageElement
slug: Web/API/SVGImageElement
l10n:
  sourceCommit: b522a0391a0152cf3f1cc57550d700c87b78ccf5
---

{{APIRef("SVG")}}

Das **`SVGImageElement`**-Interface entspricht dem {{SVGElement("image")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGImageElement.crossOrigin`](/de/docs/Web/API/SVGImageElement/crossOrigin)
  - : Ein String, der das {{SVGAttr("crossorigin")}} Inhaltsattribut widerspiegelt, welches die CORS-Einstellung des gegebenen {{SVGElement("image")}}-Elements repräsentiert.
- [`SVGImageElement.decoding`](/de/docs/Web/API/SVGImageElement/decoding)
  - : Stellt einen Hinweis für den Browser dar, wie das Bild dekodiert werden soll.
- [`SVGImageElement.height`](/de/docs/Web/API/SVGImageElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.href`](/de/docs/Web/API/SVGImageElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.preserveAspectRatio`](/de/docs/Web/API/SVGImageElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}}-Attribut des gegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.width`](/de/docs/Web/API/SVGImageElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.x`](/de/docs/Web/API/SVGImageElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.y`](/de/docs/Web/API/SVGImageElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen {{SVGElement("image")}}-Elements entspricht.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Interface, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)
  - : Startet die asynchrone Dekodierung der Bilddaten. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Bilddaten zur Verwendung bereit sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
