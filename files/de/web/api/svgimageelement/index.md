---
title: SVGImageElement
slug: Web/API/SVGImageElement
l10n:
  sourceCommit: 59838756a270111e120db552ee53d8986e14ddee
---

{{APIRef("SVG")}}

Die **`SVGImageElement`**-Schnittstelle entspricht dem {{SVGElement("image")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGImageElement.href`](/de/docs/Web/API/SVGImageElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des angegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.decoding`](/de/docs/Web/API/SVGImageElement/decoding)
  - : Repräsentiert einen Hinweis für den Browser, wie das Bild dekodiert werden soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `"sync"` für die synchrone Dekodierung des Bildes, `"async"` für die asynchrone Dekodierung oder `"auto"`, um keine Präferenz anzugeben (was der Standardwert ist).
- [`SVGImageElement.height`](/de/docs/Web/API/SVGImageElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.preserveAspectRatio`](/de/docs/Web/API/SVGImageElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}}-Attribut des angegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.width`](/de/docs/Web/API/SVGImageElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.x`](/de/docs/Web/API/SVGImageElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("image")}}-Elements entspricht.
- [`SVGImageElement.y`](/de/docs/Web/API/SVGImageElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("image")}}-Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihrer übergeordneten Schnittstelle [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGImageElement.decode()`](/de/docs/Web/API/SVGImageElement/decode)
  - : Initiates eine asynchrone Dekodierung der Bilddaten. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Bilddaten zur Nutzung bereit sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
