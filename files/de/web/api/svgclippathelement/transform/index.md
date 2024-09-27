---
title: "SVGClipPathElement: transform-Eigenschaft"
short-title: transform
slug: Web/API/SVGClipPathElement/transform
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Die schreibgeschützte **`transform`**-Eigenschaft des [`SVGClipPathElement`](/de/docs/Web/API/SVGClipPathElement)-Interfaces spiegelt das {{SVGAttr("transform")}}-Attribut eines {{SVGElement("clipPath")}}-Elements wider, das eine Liste von Transformationen ist, die auf das Element angewendet werden.

## Wert

Eine [`SVGTransformList`](/de/docs/Web/API/SVGTransformList).

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
    <clipPath
      id="clip1"
      clipPathUnits="objectBoundingBox"
      transform="skewX(40) scale(1 0.5)">
      <circle cx=".5" cy=".5" r=".35" />
    </clipPath>

    <rect id="r1" x="0" y="0" width="100" height="100" />

    <use clip-path="url(#clip1)" href="#r1" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const translateType = [
  "unknown",
  "matrix()",
  "translate()",
  "scale()",
  "rotate()",
  "skewx()",
  "skewy()",
];

const clipPath1 = document.getElementById("clip1");

const log = document.getElementById("log");

let result = "The following transformation have been applied:\n";
for (const transform of clipPath1.transform.baseVal) {
  result += `- A transform of type '${translateType[transform.type]}' found.\n`;
}

log.textContent = result;
```

{{EmbedLiveSample("Examples", "280", "280")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("clipPathUnits")}}
- {{SVGElement("clipPath")}}
