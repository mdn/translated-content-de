---
title: Globales HTML-Attribut `containertiming`
short-title: containertiming
slug: Web/HTML/Reference/Global_attributes/containertiming
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

Das [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) **`containertiming`** kennzeichnet ein Element als _Container-Root_. Für dieses können [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-Einträge mit [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten vom Typ `"container"` beobachtet werden.

Jedes Zeichnen in zuvor nicht gezeichneten Bereichen innerhalb des Unterbaums des Container-Roots trägt zur Zeitmessung des Containers bei. Inhalte, die direkt im Container-Root gezeichnet werden, und das erneute Zeichnen bereits gezeichneter Bereiche sind davon ausgenommen.
Zeitmessungseinträge werden nur erfasst, bis der Benutzer scrollt oder mit der Seite interagiert.
Unterbäume von Nachfahren können mit dem Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore) von der Zeitmessung eines Containers ausgeschlossen werden.
Weitere Informationen finden Sie unter der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

Im DOM wird dieses Attribut durch [`HTMLElement.containerTiming`](/de/docs/Web/API/HTMLElement/containerTiming) widergespiegelt.

## Wert

Ein String, der den Container identifiziert.
Er wird in [`PerformanceContainerTiming.identifier`](/de/docs/Web/API/PerformanceContainerTiming/identifier) zurückgegeben.

## Beispiele

### Einen Container-Root kennzeichnen

Dieses Beispiel kennzeichnet zwei Elemente als Container-Roots mit den Kennungen `"hero"` und `"product-list"`.

```html
<section containertiming="hero">
  <h1>Welcome</h1>
  <img src="hero.jpg" alt="" />
</section>

<div containertiming="product-list">
  <!-- product cards -->
</div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore)
- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- [`HTMLElement.containerTiming`](/de/docs/Web/API/HTMLElement/containerTiming)
