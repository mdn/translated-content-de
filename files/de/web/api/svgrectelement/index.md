---
title: SVGRectElement
slug: Web/API/SVGRectElement
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef("SVG")}}

Die `SVGRectElement`-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("rect")}}-Elementen sowie Methoden, um diese zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGRectElement.x")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}} zurück, das dem {{SVGAttr("x")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- {{domxref("SVGRectElement.y")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}} zurück, das dem {{SVGAttr("y")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- {{domxref("SVGRectElement.width")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}} zurück, das dem {{SVGAttr("width")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- {{domxref("SVGRectElement.height")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}} zurück, das dem {{SVGAttr("height")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- {{domxref("SVGRectElement.rx")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}} zurück, das dem {{SVGAttr("rx")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.
- {{domxref("SVGRectElement.ry")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}} zurück, das dem {{SVGAttr("ry")}}-Attribut des angegebenen {{SVGElement("rect")}}-Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, aber erbt Methoden von ihrem Elternteil, {{domxref("SVGGeometryElement")}}._

## Beispiele

### Die Farbe eines SVG-Rechtecks ändern

Dieses Beispiel setzt die Füllfarbe eines `SVGRectElement` auf einen zufälligen Wert, wenn der Benutzer darauf klickt.

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect
    width="300"
    height="100"
    id="myrect"
    style="fill:rgb(0 0 255);stroke-width:1;stroke:rgb(0 0 0)" />
  <text x="60" y="40" fill="white" font-size="40">Click Me</text>
</svg>
```

#### JavaScript

```js
const myRect = document.querySelector("#myrect");

myRect.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  myRect.style.fill = `rgb(${r} ${g} ${b})`;
});
```

#### Ergebnis

{{EmbedLiveSample('Changing the color of an SVG rectangle')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("rect")}}
