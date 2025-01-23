---
title: "SVGAnimationElement: getSimpleDuration()-Methode"
short-title: getSimpleDuration()
slug: Web/API/SVGAnimationElement/getSimpleDuration
l10n:
  sourceCommit: f95c5bf30c37292e8dba047346a19f937421c3e1
---

{{APIRef("SVG")}}

Die Methode `getSimpleDuration()` des [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) gibt einen Float-Wert zurück, der die Anzahl der Sekunden für die einfache Dauer dieser Animation darstellt.

Die einfache Dauer bezieht sich auf die Zeitspanne, die eine Animation in einer einzigen Iteration laufen soll, ohne Wiederholungen, Neustarts oder Verlängerungen zu berücksichtigen.

Diese Eigenschaft spiegelt das {{SVGAttr("dur")}}-Attribut des {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} oder {{SVGElement("animateTransform")}}-Elements wider.

## Syntax

```js-nolint
getSimpleDuration()
```

### Parameter

Keine ({{jsxref('undefined')}}).

### Rückgabewert

Ein Float.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die einfache Dauer des `SVGAnimationElement` undefiniert ist (z. B. wenn die Endzeit unbestimmt ist). Dies geschieht, wenn das {{SVGAttr("dur")}}-Attribut auf `indefinite` gesetzt ist oder undefiniert ist, da in diesem Fall die einfache Dauer als undefiniert gilt.

## Beispiele

Dieses Beispiel demonstriert, wie das Attribut `dur="3s"` eine einfache Dauer von 3 Sekunden definiert.

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="20" fill="rebeccapurple">
    <animate
      attributeName="cx"
      from="50"
      to="150"
      dur="3s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

```js
const animationElement = document.querySelector("animate");

const simpleDuration = animationElement.getSimpleDuration();
console.log(`The simple duration is: ${simpleDuration} seconds`); // Output: 3
```

Da `repeatCount="indefinite"` kontinuierliches Schleifen spezifiziert, ist die effektive Dauer unendlich, aber die einfache Dauer bleibt 3 Sekunden pro Iteration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
