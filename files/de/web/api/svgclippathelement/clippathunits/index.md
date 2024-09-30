---
title: "SVGClipPathElement: clipPathUnits-Eigenschaft"
short-title: clipPathUnits
slug: Web/API/SVGClipPathElement/clipPathUnits
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die schreibgeschützte **`clipPathUnits`**-Eigenschaft des [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)-Interfaces spiegelt das Attribut {{SVGAttr("clipPathUnits")}} eines {{SVGElement("clipPath")}}-Elements wider, das das Koordinatensystem definiert, das für den Inhalt des Elements verwendet wird.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, ist sie lediglich ein Container für zwei Werte, die Sie ändern können, [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal).

## Wert

Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die das Koordinatensystem darstellt. Die möglichen Werte sind in der [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)-Schnittstelle definiert:

- `0` (`SVG_UNIT_TYPE_UNKNOWN`)
  - : Der Typ ist nicht einer der vordefinierten Typen.
- `1` (`SVG_UNIT_TYPE_USERSPACEONUSE`)
  - : Entspricht einem Wert von `userSpaceOnUse` für das {{SVGAttr("clipPathUnits")}}-Attribut und bedeutet, dass alle Koordinaten innerhalb des Elements auf das Benutzerkoordinatensystem verweisen, wie es beim Erstellen des Clipping-Pfads definiert wurde. Es ist der Standardwert.
- `2` (`SVG_UNIT_TYPE_OBJECTBOUNDINGBOX`)
  - : Entspricht einem Wert von `objectBoundingBox` für das Attribut und bedeutet, dass alle Koordinaten innerhalb des Elements relativ zum Begrenzungsrahmen des Elements sind, auf das der Clipping-Pfad angewendet wird. Das bedeutet, dass der Ursprung des Koordinatensystems die obere linke Ecke des Begrenzungsrahmens des Objekts ist und die Breite und Höhe des Begrenzungsrahmens des Objekts als eine Länge von 1 Einheit betrachtet werden.

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
  <svg viewBox="0 0 100 100" width="200" height="200">
    <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
      <circle cx="50" cy="50" r="35" />
    </clipPath>

    <clipPath id="clip2" clipPathUnits="objectBoundingBox">
      <circle cx=".5" cy=".5" r=".35" />
    </clipPath>

    <!-- Some reference rect to materialized to clip path -->
    <rect id="r1" x="0" y="0" width="45" height="45" />
    <rect id="r2" x="0" y="55" width="45" height="45" />
    <rect id="r3" x="55" y="55" width="45" height="45" />
    <rect id="r4" x="55" y="0" width="45" height="45" />

    <!-- The first 3 rect are clipped with userSpaceOnUse units -->
    <use clip-path="url(#clip1)" href="#r1" fill="red" />
    <use clip-path="url(#clip1)" href="#r2" fill="blue" />
    <use clip-path="url(#clip1)" href="#r3" fill="yellow" />

    <!-- The last rect is clipped with objectBoundingBox units -->
    <use clip-path="url(#clip2)" href="#r4" fill="green" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const clipPath1 = document.getElementById("clip1");
const clipPath2 = document.getElementById("clip2");

const log = document.getElementById("log");

log.textContent = `The clipPath used three times has a 'clipPathUnits' value of ${clipPath1.clipPathUnits.baseVal}
The clipPath used three times has a 'clipPathUnits' value of ${clipPath2.clipPathUnits.baseVal}`;
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("clipPathUnits")}}
- {{SVGElement("clipPath")}}
