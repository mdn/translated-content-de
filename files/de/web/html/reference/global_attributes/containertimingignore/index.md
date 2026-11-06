---
title: Globales HTML-Attribut `containertimingignore`
short-title: containertimingignore
slug: Web/HTML/Reference/Global_attributes/containertimingignore
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}

Das **`containertimingignore`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein boolesches Attribut. Es schließt ein Element und seine Nachkommen von der Berechnung der Zeitmessung aller übergeordneten Elemente aus, die mit [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) gekennzeichnet sind.
Weitere Informationen finden Sie unter der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

Im DOM wird dieses Attribut durch [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore) abgebildet.

## Beispiele

### Einen Teilbaum von der Zeitmessung eines Containers ausschließen

In diesem Beispiel werden {{htmlelement("div")}} und dessen Inhalt von der Zeitmessung des `"hero"`-Containers ausgeschlossen, während das Bild weiterhin zu ihr beiträgt.

```html
<section containertiming="hero">
  <img src="hero.jpg" alt="" />
  <div containertimingignore>
    <!-- content painted here does not count toward the "hero" container's timing -->
  </div>
</section>
```

Beispiele dafür, wie Sie mit der Container Timing API Zeitinformationen abrufen, finden Sie unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore)
