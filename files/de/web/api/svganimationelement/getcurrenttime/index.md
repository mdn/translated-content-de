---
title: "SVGAnimationElement: getCurrentTime() Methode"
short-title: getCurrentTime()
slug: Web/API/SVGAnimationElement/getCurrentTime
l10n:
  sourceCommit: f95c5bf30c37292e8dba047346a19f937421c3e1
---

{{APIRef("SVG")}}

Die Methode `getCurrentTime()` des [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) gibt einen Float-Wert zurück, der die aktuelle Zeit in Sekunden relativ zur Zeit null des angegebenen Zeitcontainers darstellt.

Die Zeit null bezieht sich auf den Moment, in dem der Zeitcontainer seine Zeitleiste beginnt. Sie fungiert als Startreferenzpunkt für alle Animationen innerhalb dieses Containers.

Ein Zeitcontainer ist ein Element oder Kontext, das eine lokale Zeitleiste für eine oder mehrere Animationen definiert. Animationen innerhalb des Zeitcontainers werden relativ zu dessen Zeitleiste gemessen. Wenn ein Zeitcontainer verzögert, angehalten oder manipuliert wird, passen sich alle Animationen darin entsprechend an.

## Syntax

```js-nolint
getCurrentTime()
```

### Parameter

Keine ({{jsxref('undefined')}}).

### Rückgabewert

Ein Float.

## Beispiele

Dieses Beispiel demonstriert, wie die `getCurrentTime()`-Methode die Zeit abruft, die seit der Zeit null des Zeitcontainers verstrichen ist.

```html
<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="50" cy="50" r="20" fill="rebeccapurple">
    <animate
      attributeName="cx"
      from="50"
      to="150"
      dur="4s"
      repeatCount="indefinite" />
  </circle>
</svg>
```

```js
const animationElement = document.querySelector("animate");

setInterval(() => {
  const currentTime = animationElement.getCurrentTime();
  console.log(
    `Current time relative to the time container: ${currentTime} seconds`,
  );
}, 1000);
```

Die Animation startet bei `time zero = 0` und läuft unendlich, und der `getCurrentTime()`-Wert erhöht sich kontinuierlich im Kontext des Zeitcontainers.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
