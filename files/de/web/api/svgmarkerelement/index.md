---
title: SVGMarkerElement
slug: Web/API/SVGMarkerElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGMarkerElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("marker")}}-Elementen sowie Methoden zu deren Manipulation. Das {{SVGElement("marker")}}-Element definiert die Grafiken, die zum Zeichnen von Markierungen auf einer Form verwendet werden.

{{InheritanceDiagram}}

Die folgenden Eigenschaften und Methoden beziehen sich auf die Attribute des durch `SVGMarkerElement` dargestellten {{SVGElement("marker")}}-Elements.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGMarkerElement.markerUnits`](/de/docs/Web/API/SVGMarkerElement/markerUnits) {{ReadOnlyInline}}

  - : Gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt zurück, mit einem der folgenden Werte:

    - 0
      - : `SVG_MARKERUNITS_UNKNOWN`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut einen anderen Wert als die beiden vordefinierten Schlüsselwörter aufweist.
    - 1
      - : `SVG_MARKERUNITS_USERSPACEONUSE`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut den Schlüsselwortwert `userSpaceOnUse` hat.
    - 2
      - : `SVG_MARKERUNITS_STROKEWIDTH`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut den Schlüsselwortwert `strokeWidth` hat.

- [`SVGMarkerElement.markerWidth`](/de/docs/Web/API/SVGMarkerElement/markerWidth) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das die Breite des {{SVGElement("marker")}}-Ansichtsfensters enthält.
- [`SVGMarkerElement.markerHeight`](/de/docs/Web/API/SVGMarkerElement/markerHeight) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das die Höhe des {{SVGElement("marker")}}-Ansichtsfensters enthält.
- [`SVGMarkerElement.orientType`](/de/docs/Web/API/SVGMarkerElement/orientType) {{ReadOnlyInline}}

  - : Gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt zurück, mit einem der folgenden Werte:

    - 0
      - : `SVG_MARKER_ORIENT_UNKNOWN`, was bedeutet, dass das {{SVGattr("orient")}}-Attribut einen anderen Wert als die beiden vordefinierten Schlüsselwörter aufweist.
    - 1
      - : `SVG_MARKERUNITS_ORIENT_AUTO`, was bedeutet, dass das {{SVGattr("orient")}}-Attribut den Schlüsselwortwert `auto` hat.
    - 2
      - : `SVG_MARKERUNITS_ORIENT_ANGLE`, was bedeutet, dass das {{SVGattr("orient")}}-Attribut einen {{cssxref("angle")}}- oder {{cssxref("number")}}-Wert besitzt, der den Winkel angibt.

- [`SVGMarkerElement.orientAngle`](/de/docs/Web/API/SVGMarkerElement/orientAngle) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)-Objekt zurück, das den Winkel des {{SVGattr("orient")}}-Attributs enthält.
- [`SVGMarkerElement.refX`](/de/docs/Web/API/SVGMarkerElement/refX) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das den Wert des {{SVGattr("refX")}}-Attributs des {{SVGElement("marker")}} enthält.
- [`SVGMarkerElement.refY`](/de/docs/Web/API/SVGMarkerElement/refY) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das den Wert des {{SVGattr("refY")}}-Attributs des {{SVGElement("marker")}} enthält.
- [`SVGMarkerElement.viewBox`](/de/docs/Web/API/SVGMarkerElement/viewBox) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt zurück, das ein [`SVGRect`](/de/docs/Web/API/SVGRect) enthält, welches die durch das {{SVGattr("viewBox")}}-Attribut am {{SVGElement("marker")}}-Element gesetzten Werte enthält.
- [`SVGMarkerElement.preserveAspectRatio`](/de/docs/Web/API/SVGMarkerElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Gibt ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)-Objekt zurück, das die durch das {{SVGattr("preserveAspectRatio")}}-Attribut am {{SVGElement("marker")}}-Ansichtsfenster gesetzten Werte enthält.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGMarkerElement.setOrientToAuto()`](/de/docs/Web/API/SVGMarkerElement/setOrientToAuto)
  - : Setzt den Wert des {{SVGattr("orient")}}-Attributs auf `auto`.
- [`SVGMarkerElement.setOrientToAngle()`](/de/docs/Web/API/SVGMarkerElement/setOrientToAngle)
  - : Setzt den Wert des {{SVGattr("orient")}}-Attributs auf einen speziellen Winkelwert.

## Beispiele

Das folgende SVG wird in den Beispielen verwendet.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="90">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

### Ermitteln der Breite des Markers

Die `markerWidth`-Eigenschaft gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) zurück, das ein [`SVGLength`](/de/docs/Web/API/SVGLength) mit dem Wert des {{SVGattr("markerWidth")}}-Attributs enthält.

```js
let marker = document.getElementById("arrow");
console.log(marker.markerWidth.baseVal.value); // 6
```

### Aktualisierung des Orientierungswinkels

Im folgenden Beispiel wird der Wert des `orient`-Attributs mit `setOrientToAngle()` aktualisiert, indem ein [`SVGAngle`](/de/docs/Web/API/SVGAngle) verwendet wird, das mit [`SVGElement.createSVGAngle()`](/de/docs/Web/API/SVGElement/createSVGAngle) erstellt wurde.

```js
let svg = document.getElementById("svg");
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // value in SVG above - 90
let angle = svg.createSVGAngle();
angle.value = "110";
marker.setOrientToAngle(angle);
console.log(marker.orientAngle.baseVal.value); // new value - 110
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
