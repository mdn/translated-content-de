---
title: "SVGMaskElement: maskContentUnits-Eigenschaft"
short-title: maskContentUnits
slug: Web/API/SVGMaskElement/maskContentUnits
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die schreibgeschützte **`maskContentUnits`**-Eigenschaft des [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)-Interfaces spiegelt das {{SVGAttr("maskContentUnits")}}-Attribut wider. Sie gibt an, welches Koordinatensystem für den Inhalt des {{SVGElement("mask")}}-Elements verwendet werden soll.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, ist sie lediglich ein Container für zwei Werte, die Sie ändern können: [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal).

## Wert

Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die das Koordinatensystem darstellt. Die möglichen Werte sind in der [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)-Schnittstelle definiert:

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : Der Typ entspricht keinem der vordefinierten Typen.
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : Entspricht einem Wert von `userSpaceOnUse` für das {{SVGAttr("maskContentUnits")}}-Attribut und bedeutet, dass alle Koordinaten innerhalb des Elements sich auf das Benutzerkoordinatensystem beziehen, das beim Erstellen der Maske definiert wurde. Dies ist der Standardwert.
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : Entspricht einem Wert von `objectBoundingBox` für das Attribut und bedeutet, dass alle Koordinaten innerhalb des Elements relativ zur Umgrenzungsbox des Elements sind, auf das die Maske angewendet wird. Es bedeutet, dass der Ursprung des Koordinatensystems die obere linke Ecke der Objektumgrenzungsbox ist und die Breite und Höhe der Objektumgrenzungsbox als Länge von 1 Einheit betrachtet werden.

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
