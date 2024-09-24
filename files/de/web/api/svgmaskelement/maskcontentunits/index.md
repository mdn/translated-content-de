---
title: "SVGMaskElement: Eigenschaft maskContentUnits"
short-title: maskContentUnits
slug: Web/API/SVGMaskElement/maskContentUnits
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die schreibgeschützte **`maskContentUnits`**-Eigenschaft der {{domxref("SVGMaskElement")}}-Schnittstelle spiegelt das {{SVGAttr("maskContentUnits")}}-Attribut wider. Sie gibt an, welches Koordinatensystem für den Inhalt des {{SVGElement("mask")}}-Elements verwendet werden soll.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, handelt es sich lediglich um einen Container für zwei Werte, die Sie ändern können, {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}} und {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}.

## Wert

Eine {{domxref("SVGAnimatedEnumeration")}}, die das Koordinatensystem darstellt. Die möglichen Werte sind in der {{domxref("SVGUnitTypes")}}-Schnittstelle definiert:

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : Der Typ ist keiner der vordefinierten Typen.
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : Entspricht dem Wert `userSpaceOnUse` für das {{SVGAttr("maskContentUnits")}}-Attribut und bedeutet, dass sich alle Koordinaten innerhalb des Elements auf das Benutzerkoordinatensystem beziehen, wie es bei der Erstellung der Maske definiert wurde. Es ist der Standardwert.
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : Entspricht dem Wert `objectBoundingBox` für das Attribut und bedeutet, dass sich alle Koordinaten innerhalb des Elements relativ zur Begrenzungsbox des Elements verhalten, auf das die Maske angewendet wird. Es bedeutet, dass der Ursprung des Koordinatensystems die obere linke Ecke der Objektbegrenzungsbox ist und die Breite sowie Höhe der Objektbegrenzungsbox als 1 Einheit angesehen werden.

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
    width="150"
    height="150"
    xmlns="http://www.w3.org/2000/svg">
    <mask id="mask1" maskContentUnits="userSpaceOnUse">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx="50" cy="50" r="35" />
    </mask>

    <mask id="mask2" maskContentUnits="objectBoundingBox">
      <rect fill="black" x="0" y="0" width="100%" height="100%" />
      <circle fill="white" cx=".5" cy=".5" r=".35" />
      <animate
        attributeName="maskContentUnits"
        values="objectBoundingBox;userSpaceOnUse"
        dur="1s"
        repeatCount="indefinite" />
    </mask>

    <!-- Some reference rect to materialized the mask -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- The first 3 rect are masked with useSpaceOnUse units -->
    <use mask="url(#mask1)" href="#r1" fill="blue" />
    <use mask="url(#mask1)" href="#r2" fill="yellow" />
    <use mask="url(#mask1)" href="#r3" fill="green" />

    <!-- The last rect is masked with objectBoundingBox units -->
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
  const baseValue = unitType[mask.maskContentUnits.baseVal];
  const animValue = unitType[mask.maskContentUnits.animVal];
  log.textContent = `The top-right 'maskContentUnits.baseVal' coord system : ${baseValue}\n`;
  log.textContent += `The top-right 'maskContentUnits.animVal' coord system : ${animValue}`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample("Examples", "280", "220")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("maskContentUnits")}}
- {{SVGElement("mask")}}
