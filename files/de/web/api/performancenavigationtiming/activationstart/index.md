---
title: "PerformanceNavigationTiming: activationStart Eigenschaft"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`activationStart`**-Eigenschaft, die nur gelesen werden kann, repräsentiert die Zeit zwischen dem Beginn des Prerenderings eines Dokuments und dessen Aktivierung.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Dauer zwischen dem Beginn des Prerenderings und der Aktivierung des Dokuments in Millisekunden darstellt.

Der Wert ist `0`, wenn die Seite nicht prerendert wurde oder sich noch im Prerendering befindet.

## Beispiele

### Erkennen von prerenderten Seiten

Wenn ein prerendertes Dokument aktiviert wird, wird `activationStart` auf die aktuelle Zeit gesetzt. Die folgende Funktion kann überprüfen, ob eine Seite {{DOMxRef("Document.prerendering", "prerendering")}} wird oder bereits prerendert wurde:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Messung von aus Benutzersicht wahrgenommenen Leistungsmeilensteinen

Bei prerenderten Seiten kann eine Seite lange vor ihrer tatsächlichen Navigation erstellt worden sein. Beim Verwenden der [Performance API](/de/docs/Web/API/Performance_API) auf prerenderten Seiten ist es wichtig, die zurückgegebenen Werte mit `activationStart` zu vergleichen, um irreführende Messungen zu vermeiden.

```js
// Zeit bis zur Aktivierung
let activationStart =
  performance.getEntriesByType("navigation")[0].activationStart;

// Zeit bis zum ersten Paint
let firstPaint = performance.getEntriesByName("first-paint")[0].startTime;

// Zeit bis zum ersten inhaltsreichen Paint
let firstContentfulPaint = performance.getEntriesByName(
  "first-contentful-paint",
)[0].startTime;

console.log("Zeit bis zum ersten Paint: " + (firstPaint - activationStart));
console.log(
  "Zeit bis zum ersten inhaltsreichen Paint: " + (firstContentfulPaint - activationStart),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)
- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading)
