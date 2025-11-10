---
title: "PerformanceNavigationTiming: activationStart-Eigenschaft"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`activationStart`** repräsentiert die Zeit zwischen dem Beginn des Prerenderings eines Dokuments und dessen Aktivierung.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer zwischen dem Beginn des Prerenderings eines Dokuments und dessen Aktivierung in Millisekunden darstellt.

Der Wert ist `0`, wenn die Seite nicht prerendert wurde oder sich noch im Prerendering befindet.

## Beispiele

### Prerendered-Seiten erkennen

Wenn ein prerendertes Dokument aktiviert wird, wird `activationStart` auf die aktuelle Zeit gesetzt. Die folgende Funktion kann überprüfen, ob eine Seite [prerendering](/de/docs/Web/API/Document/prerendering) ist oder bereits prerendert wurde:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Benutzerwahrgenommene Leistungsziele messen

Bei prerenderten Seiten kann eine Seite lange vor dem eigentlichen Aufruf erstellt worden sein. Bei der Verwendung der [Performance API](/de/docs/Web/API/Performance_API) auf prerenderten Seiten ist es wichtig, die zurückgegebenen Werte mit `activationStart` zu vergleichen, um irreführende Messungen zu vermeiden.

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
