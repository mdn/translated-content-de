---
title: "SVGAnimationElement: getStartTime() Methode"
short-title: getStartTime()
slug: Web/API/SVGAnimationElement/getStartTime
l10n:
  sourceCommit: f95c5bf30c37292e8dba047346a19f937421c3e1
---

{{APIRef("SVG")}}

Die Methode `getStartTime()` des [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) gibt einen float-Wert zurück, der die Startzeit in Sekunden für das aktuelle Intervall dieses Animationselements darstellt, falls es existiert, unabhängig davon, ob das Intervall bereits begonnen hat.

Die von `getStartTime()` zurückgegebene Startzeit wird in Sekunden relativ zur Zeit null des Zeitcontainers gemessen.

Zeit null bezieht sich auf den Moment, in dem der Zeitcontainer seine Zeitleiste beginnt. Sie fungiert als Ausgangsreferenzpunkt für alle Animationen innerhalb dieses Containers.

Ein Zeitcontainer ist ein Element oder Kontext, das eine lokale Zeitleiste für eine oder mehrere Animationen definiert. Animationen innerhalb des Zeitcontainers werden relativ zu seiner Zeitleiste gemessen. Wenn ein Zeitcontainer verzögert, angehalten oder manipuliert wird, passen sich alle darin enthaltenen Animationen entsprechend an.

Diese Eigenschaft spiegelt das {{SVGAttr("begin")}} Attribut des {{SVGElement("animate")}}, {{SVGElement("animateMotion")}} oder {{SVGElement("animateTransform")}} Elements wider.

## Syntax

```js-nolint
getStartTime()
```

### Parameter

Keine ({{jsxref('undefined')}}).

### Rückgabewert

Ein float-Wert.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `SVGAnimationElement` kein aktuelles Intervall hat. Dies passiert, wenn die {{SVGAttr("begin")}} Zeit des Animationselements nicht erreicht oder definiert ist, sodass die `getStartTime()` Methode keine gültige Startzeit ermitteln kann. Ein Beispiel wäre, wenn die Animation auf `begin="click"` gesetzt ist, aber der Benutzer noch nicht geklickt hat, um sie zu starten.

## Beispiele

Dieses Beispiel zeigt, wie das Attribut `begin="3s"` die Animation 3 Sekunden nach Beginn der Zeitleiste des Zeitcontainers starten lässt.

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="20" fill="rebeccapurple">
    <animate attributeName="cx" from="50" to="150" dur="5s" begin="3s" />
  </circle>
</svg>
```

```js
const animationElement = document.querySelector("animate");

const startTime = animationElement.getStartTime();
console.log(
  `The animation starts at: ${startTime} seconds relative to the time container's timeline`,
); // Output: 3
```

Die `getStartTime()` Methode gibt `3.0` zurück, da dies die Zeit relativ zur Zeit null des Zeitcontainers ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
