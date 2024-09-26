---
title: "SVGMaskElement: maskUnits-Eigenschaft"
short-title: maskUnits
slug: Web/API/SVGMaskElement/maskUnits
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die schreibgeschützte **`maskUnits`**-Eigenschaft der {{domxref("SVGMaskElement")}}-Schnittstelle spiegelt das {{SVGAttr("maskUnits")}}-Attribut eines {{SVGElement("mask")}}-Elements wider, welches das Koordinatensystem definiert, das für die Maske des Elements verwendet werden soll.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, dient sie lediglich als Container für zwei Werte, die Sie ändern können, {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}} und {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}.

## Wert

Eine {{domxref("SVGAnimatedEnumeration")}}, die das Koordinatensystem darstellt. Die möglichen Werte sind in der {{domxref("SVGUnitTypes")}}-Schnittstelle definiert:

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : Der Typ ist keiner der vordefinierten Typen.
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : Entspricht einem Wert von `userSpaceOnUse` für das {{SVGAttr("maskUnits")}}-Attribut und bedeutet, dass sich alle Koordinaten innerhalb des Elements auf das Benutzerkoordinatensystem beziehen, so wie es bei der Erstellung der Maske definiert wurde. Es ist der Standardwert.
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : Entspricht einem Wert von `objectBoundingBox` für das Attribut und bedeutet, dass sich alle Koordinaten innerhalb des Elements relativ zur Begrenzungsbox des Elements beziehen, auf das die Maske angewendet wird. Es bedeutet, dass der Ursprung des Koordinatensystems die obere linke Ecke der Begrenzungsbox des Objekts ist und die Breite und Höhe der Begrenzungsbox als eine Länge von 1 Einheit betrachtet werden.

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<div>
  <svg
    viewBox="0 0 100 100"
    height="200"
    width="200"
    xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask1"
      maskUnits="userSpaceOnUse"
      x="20%"
      y="20%"
      width="60%"
      height="60%">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
    </mask>

    <mask
      id="mask2"
      maskUnits="objectBoundingBox"
      x="20%"
      y="20%"
      width="60%"
      height="60%">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
      <animate
        attributeName="maskUnits"
        values="objectBoundingBox;userSpaceOnUse"
        dur="1s"
        repeatCount="indefinite" />
    </mask>

    <!-- Einige Referenzrechtecke zur Darstellung der Maske -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- Die ersten 3 Rechtecke werden mit useSpaceOnUse-Einheiten maskiert -->
    <use mask="url(#mask1)" href="#r1" fill="blue" />
    <use mask="url(#mask1)" href="#r2" fill="green" />
    <use mask="url(#mask1)" href="#r3" fill="yellow" />

    <!-- Das letzte Rechteck wird mit objectBoundingBox-Einheiten maskiert -->
    <use mask="url(#mask2)" href="#r4" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const unitType = ["unknown", "userSpaceOnUse", "objectBoundingBox"];

const mask = document.getElementById("mask2");
const log = document.getElementById("log");

function displayLog() {
  const baseValue = unitType[mask.maskUnits.baseVal];
  const animValue = unitType[mask.maskUnits.animVal];
  log.textContent = `The top-right 'maskUnits.baseVal' coord system : ${baseValue}\n`;
  log.textContent += `The top-right 'maskUnits.animVal' coord system : ${animValue}`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("maskUnits")}}
- {{SVGElement("mask")}}