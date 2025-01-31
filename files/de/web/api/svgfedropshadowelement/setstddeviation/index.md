---
title: "SVGFEDropShadowElement: setStdDeviation() Methode"
short-title: setStdDeviation()
slug: Web/API/SVGFEDropShadowElement/setStdDeviation
l10n:
  sourceCommit: 7527a11a2b7fc7440aa6d518a9f5b4c061794ff3
---

{{APIRef("SVG")}}

Die `setStdDeviation()` Methode der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement) Schnittstelle setzt die Werte für das {{SVGAttr("stdDeviation")}} Attribut.

## Syntax

```js-nolint
SVGFEDropShadowElement.setStdDeviation(x, y)
```

### Parameter

- `x`
  - : Ein Float, der die X-Komponente des {{SVGAttr("stdDeviation")}} Attributs darstellt.
- `y`
  - : Ein Float, der die Y-Komponente des {{SVGAttr("stdDeviation")}} Attributs darstellt.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

### Verwendung von `setStdDeviation()`

In diesem Beispiel setzen wir die horizontalen und vertikalen Standardabweichungen für eine Weichzeichnungsoperation für einen `<feDropShadow>` Filter-Schattierungseffekt mithilfe der `setStdDeviation()` Methode der `SVGFEDropShadowElement` Schnittstelle.

```html
<svg height="200" width="200" viewBox="0 0 200 200">
  <defs>
    <filter id="drop-shadow-filter">
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5 5"
        flood-color="gray" />
    </filter>
  </defs>

  <!-- Rectangle with an initial gray shadow -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#drop-shadow-filter)" />
</svg>

<!-- Button to update the shadow -->
<button id="updateShadow" type="button">Update Shadow</button>
```

```js
// Get the feDropShadow element
const dropShadow = document.querySelector("feDropShadow");

// Button to trigger the update
document.getElementById("updateShadow").addEventListener("click", () => {
  // Change the standard deviation (blur radius) of the shadow
  dropShadow.setStdDeviation(15, 20);
});
```

{{EmbedLiveSample("Examples", "", "240")}}

Klicken Sie auf das rote Rechteck, um den Weichzeichnungseffekt des Schattens zu aktualisieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
