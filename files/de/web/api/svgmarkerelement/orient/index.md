---
title: "SVGMarkerElement: orient-Eigenschaft"
short-title: orient
slug: Web/API/SVGMarkerElement/orient
l10n:
  sourceCommit: fcae10dc7577ef8ae93c0ec36d43b35fb301f0f9
---

{{APIRef("SVG")}}

Die **`orient`**-Eigenschaft der Schnittstelle [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement) definiert, wie der Marker gedreht wird, wenn er an seiner Position auf der Form platziert wird. Sie spiegelt den Wert des {{SVGAttr("orient")}}-Attributs des entsprechenden {{SVGElement("marker")}}-Elements wider.

Im Gegensatz zu [`SVGMarkerElement.orientType`](/de/docs/Web/API/SVGMarkerElement/orientType) und [`SVGMarkerElement.orientAngle`](/de/docs/Web/API/SVGMarkerElement/orientAngle), die jeweils nur Lesezugriff auf die Orientierung und den Winkel bieten, ermöglicht die `orient`-Eigenschaft das direkte Abrufen und Setzen des `orient`-Attributs als Zeichenkette.

## Wert

Eine Zeichenkette. Mögliche Werte sind:

- `"auto"`
  - : Der Marker wird automatisch gedreht, um der Richtung des Pfades an dem Punkt zu folgen, an dem er platziert ist.
- `"auto-start-reverse"`
  - : Wenn durch {{SVGAttr("marker-start")}} platziert, wird der Marker in einem Winkel von 180° zur Orientierung ausgerichtet, die verwendet würde, wenn `auto` angegeben wäre. Für alle anderen Marker bedeutet `auto-start-reverse` dasselbe wie `auto`.
- Ein [`<angle>`](/de/docs/Web/SVG/Guides/Content_type#angle)-Wert (z.B. `"45deg"`)
  - : Der Marker wird um den angegebenen Winkel gedreht, gemessen von der Horizontalen.
- Ein [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)-Wert (z.B. `"45"`)
  - : Der Marker wird im angegebenen Winkel in Grad ausgerichtet.

## Beispiele

### Zugriff auf die `orient`-Eigenschaft

```html
<svg
  viewBox="0 0 100 100"
  width="300"
  height="300"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="12"
      markerHeight="12"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
  <polyline
    points="10,90 50,10 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-mid="url(#arrow)"
    marker-end="url(#arrow)" />
</svg>
<output></output>
```

```css hidden
body {
  font-family: system-ui;
}

output {
  display: block;
  font: inherit;
  white-space: pre;
}
```

Wir können die `orient`-Eigenschaft lesen und dann auf einen neuen Wert setzen:

```js
const marker = document.querySelector("marker");
const log = document.querySelector("output");

if ("orient" in marker) {
  // Read the current orient value
  log.textContent = `orient: "${marker.orient}"\n`; // "auto-start-reverse"

  // Set a new orient value
  marker.orient = "90deg";
  log.textContent += `after setting "90deg": "${marker.orient}"`;
} else {
  log.textContent = "orient is not supported in this browser";
}
```

{{EmbedLiveSample("Examples", "", "340")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGMarkerElement.orientType`](/de/docs/Web/API/SVGMarkerElement/orientType)
- [`SVGMarkerElement.orientAngle`](/de/docs/Web/API/SVGMarkerElement/orientAngle)
- [`SVGMarkerElement.setOrientToAuto()`](/de/docs/Web/API/SVGMarkerElement/setOrientToAuto)
- [`SVGMarkerElement.setOrientToAngle()`](/de/docs/Web/API/SVGMarkerElement/setOrientToAngle)
- {{SVGAttr("orient")}}
