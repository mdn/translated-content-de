---
title: Globales HTML-Attribut `containertiming`
short-title: containertiming
slug: Web/HTML/Reference/Global_attributes/containertiming
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}

Das **`containertiming`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) kennzeichnet ein Element als _Container-Wurzel_. Für diese können [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-Einträge von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten mit dem Typ `"container"` beobachtet werden.

Alle Darstellungen in neuen Bereichen innerhalb des Teilbaums der Container-Wurzel fließen in die Zeitmessung des Containers ein. Inhalte, die direkt in der Container-Wurzel dargestellt werden, sowie erneute Darstellungen bereits dargestellter Bereiche sind ausgenommen.
Zeitmessungseinträge werden nur gemeldet, bis die Benutzerin oder der Benutzer scrollt oder mit der Seite interagiert.
Untergeordnete Teilbäume können mit dem Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore) von der Zeitmessung eines Containers ausgeschlossen werden.
Weitere Einzelheiten finden Sie in der Beschreibung der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

Im DOM wird dieses Attribut durch [`HTMLElement.containerTiming`](/de/docs/Web/API/HTMLElement/containerTiming) abgebildet.

## Wert

Eine Zeichenfolge, die den Container identifiziert.
Sie wird in [`PerformanceContainerTiming.identifier`](/de/docs/Web/API/PerformanceContainerTiming/identifier) zurückgegeben.

## Beispiele

### Eine Container-Wurzel kennzeichnen

Dieses Beispiel kennzeichnet zwei Elemente als Container-Wurzeln, die durch `"hero"` und `"product-list"` identifiziert werden.

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
