---
title: "PerformanceNavigationTiming: activationStart-Eigenschaft"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`activationStart`**-Eigenschaft, die nur gelesen werden kann, stellt die Zeitspanne dar, die zwischen dem Beginn des Prerendering eines Dokuments und seiner Aktivierung liegt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer zwischen dem Start des Prerendering des Dokuments und der Aktivierung in Millisekunden darstellt.

Der Wert ist `0`, wenn die Seite nicht prerendert wurde oder sich noch im Prerendering befindet.

## Beispiele

### Erkennung von prerendered Seiten

Wenn ein dokumentiert prerenderte Dokument aktiviert wird, wird `activationStart` auf die aktuelle Zeit gesetzt. Die folgende Funktion kann überprüfen, ob eine Seite [`prerendering`](/de/docs/Web/API/Document/prerendering) ist oder bereits prerendert wurde:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Messung von leistungsbezogenen Meilensteinen, die von Nutzern wahrgenommen werden

Bei prerendered Seiten könnte eine Seite schon lange vor der eigentlichen Navigation erstellt worden sein. Wenn die [Performance API](/de/docs/Web/API/Performance_API) auf prerendered Seiten verwendet wird, ist es wichtig, die zurückgegebenen Werte mit `activationStart` zu vergleichen, um irreführende Messungen zu vermeiden.

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

console.log("time to first paint: " + (firstPaint - activationStart));
console.log(
  "time to first-contentful-paint: " + (firstContentfulPaint - activationStart),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
