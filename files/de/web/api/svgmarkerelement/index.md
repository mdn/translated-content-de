---
title: SVGMarkerElement
slug: Web/API/SVGMarkerElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGMarkerElement`**-Schnittstelle ermöglicht den Zugriff auf die Eigenschaften der {{SVGElement("marker")}}-Elemente sowie Methoden zu deren Manipulation. Das {{SVGElement("marker")}}-Element definiert die Grafiken, die zum Zeichnen von Markierungen auf einer Form verwendet werden.

{{InheritanceDiagram}}

Die folgenden Eigenschaften und Methoden geben entweder die Attribute des durch `SVGMarkerElement` dargestellten {{SVGElement("marker")}}-Elements zurück oder arbeiten mit diesen.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGElement")}}._

- {{domxref("SVGMarkerElement.markerUnits")}} {{ReadOnlyInline}}

  - : Gibt ein {{domxref("SVGAnimatedEnumeration")}}-Objekt zurück mit einem der folgenden Werte:

    - 0
      - : `SVG_MARKERUNITS_UNKNOWN`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut einen anderen Wert als die beiden vordefinierten Schlüsselwörter hat.
    - 1
      - : `SVG_MARKERUNITS_USERSPACEONUSE`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut den Schlüsselwortwert `userSpaceOnUse` aufweist.
    - 2
      - : `SVG_MARKERUNITS_STROKEWIDTH`, was bedeutet, dass das {{SVGattr("markerUnits")}}-Attribut den Schlüsselwortwert `strokeWidth` aufweist.

- {{domxref("SVGMarkerElement.markerWidth")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das die Breite des {{SVGElement("marker")}}-Viewports enthält.
- {{domxref("SVGMarkerElement.markerHeight")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das die Höhe des {{SVGElement("marker")}}-Viewports enthält.
- {{domxref("SVGMarkerElement.orientType")}} {{ReadOnlyInline}}

  - : Gibt ein {{domxref("SVGAnimatedEnumeration")}}-Objekt zurück mit einem der folgenden Werte:

    - 0
      - : `SVG_MARKER_ORIENT_UNKNOWN`, was bedeutet, dass das {{SVGattr("orient")}}-Attribut einen anderen Wert als die beiden vordefinierten Schlüsselwörter hat.
    - 1
      - : `SVG_MARKERUNITS_ORIENT_AUTO`, was bedeutet, dass das {{SVGattr("orient")}}-Attribut den Schlüsselwortwert `auto` aufweist.
    - 2
      - : `SVG_MARKERUNITS_ORIENT_ANGLE`, was bedeutet, dass das {{SVGattr("orient")}}-Attribut einen {{cssxref("angle")}} oder {{cssxref("number")}} Wert hat, der den Winkel angibt.

- {{domxref("SVGMarkerElement.orientAngle")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedAngle")}}-Objekt zurück, das den Winkel des {{SVGattr("orient")}}-Attributs enthält.
- {{domxref("SVGMarkerElement.refX")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das den Wert des {{SVGattr("refX")}}-Attributs des {{SVGElement("marker")}} enthält.
- {{domxref("SVGMarkerElement.refY")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das den Wert des {{SVGattr("refY")}}-Attributs des {{SVGElement("marker")}} enthält.
- {{domxref("SVGMarkerElement.viewBox")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGAnimatedRect")}}-Objekt zurück, das ein {{domxref("SVGRect")}} enthält, das die durch das {{SVGattr("viewBox")}}-Attribut am {{SVGElement("marker")}} gesetzten Werte enthält.
- {{domxref("SVGMarkerElement.preserveAspectRatio")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SVGPreserveAspectRatio")}}-Objekt zurück, das die durch das {{SVGattr("preserveAspectRatio")}}-Attribut am {{SVGElement("marker")}}-Viewport gesetzten Werte enthält.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihrem Elternteil, {{domxref("SVGElement")}}._

- {{domxref("SVGMarkerElement.setOrientToAuto()")}}
  - : Setzt den Wert des {{SVGattr("orient")}}-Attributs auf `auto`.
- {{domxref("SVGMarkerElement.setOrientToAngle()")}}
  - : Setzt den Wert des {{SVGattr("orient")}}-Attributs auf einen bestimmten Winkelwert.

## Beispiele

Das folgende SVG wird in den Beispielen referenziert.

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

### Ermittlung der Breite des Markers

Die `markerWidth`-Eigenschaft gibt ein {{domxref("SVGAnimatedLength")}} zurück, das ein {{domxref("SVGLength")}} enthält, mit dem Wert des {{SVGattr("markerWidth")}}-Attributs.

```js
let marker = document.getElementById("arrow");
console.log(marker.markerWidth.baseVal.value); // 6
```

### Aktualisierung des Orientierungswinkels

Im folgenden Beispiel wird der Wert des `orient`-Attributs mit `setOrientToAngle()` aktualisiert, indem ein {{domxref("SVGAngle")}} verwendet wird, der mit {{domxref("SVGElement.createSVGAngle()")}} erstellt wurde.

```js
let svg = document.getElementById("svg");
let marker = document.getElementById("arrow");
console.log(marker.orientAngle.baseVal.value); // Wert im obigen SVG - 90
let angle = svg.createSVGAngle();
angle.value = "110";
marker.setOrientToAngle(angle);
console.log(marker.orientAngle.baseVal.value); // neuer Wert - 110
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
