---
title: "PerformanceNavigationTiming: activationStart property"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`activationStart`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Zeit darstellt, die zwischen dem Start des Pre-Renderings eines Dokuments und seiner Aktivierung verstreicht.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer zwischen dem Start des Dokument-Pre-Renderings und der Aktivierung in Millisekunden darstellt.

Der Wert ist `0`, wenn die Seite nicht vorgerendert wurde oder sich noch im Pre-Rendering befindet.

## Beispiele

### Erkennen von vorgerenderten Seiten

Wenn ein vorgerendertes Dokument aktiviert wird, wird `activationStart` auf die aktuelle Zeit gesetzt. Die folgende Funktion kann überprüfen, ob eine Seite [vorgerendert](/de/docs/Web/API/Document/prerendering) wird oder bereits vorgerendert wurde:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Messen von vom Nutzer wahrgenommenen Leistungsmeilensteinen

Bei vorgerenderten Seiten kann es sein, dass eine Seite lange bevor sie tatsächlich aufgerufen wird, erstellt wurde. Beim Einsatz der [Performance API](/de/docs/Web/API/Performance_API) auf vorgerenderten Seiten ist es wichtig, die zurückgegebenen Werte mit `activationStart` zu vergleichen, um irreführende Messungen zu vermeiden.

```js
// Time to when activation occurred
let activationStart =
  performance.getEntriesByType("navigation")[0].activationStart;

// Time to first paint
let firstPaint = performance.getEntriesByName("first-paint")[0].startTime;

// Time to first contentful paint
let firstContentfulPaint = performance.getEntriesByName(
  "first-contentful-paint",
)[0].startTime;

console.log(`time to first paint: ${firstPaint - activationStart}`);
console.log(
  `time to first-contentful-paint: ${firstContentfulPaint - activationStart}`,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading)
