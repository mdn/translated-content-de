---
title: Globales HTML-Attribut `containertimingignore`
short-title: containertimingignore
slug: Web/HTML/Reference/Global_attributes/containertimingignore
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

Das **`containertimingignore`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein boolesches Attribut. Es schließt ein Element und seine Nachfahren davon aus, zur Zeitmessung eines übergeordneten Elements beizutragen, das mit [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) gekennzeichnet ist.
Weitere Informationen finden Sie bei der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

Im DOM wird dieses Attribut durch [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore) abgebildet.

## Beispiele

### Einen Teilbaum von der Zeitmessung eines Containers ausschließen

In diesem Beispiel werden das {{htmlelement("div")}} und sein Inhalt von der Zeitmessung des Containers `"hero"` ausgeschlossen. Das Bild trägt weiterhin dazu bei.

```html
<section containertiming="hero">
  <img src="hero.jpg" alt="" />
  <div containertimingignore>
    <!-- content painted here does not count toward the "hero" container's timing -->
  </div>
</section>
```

Beispiele dafür, wie Sie mit der Container Timing API Zeitmessungsinformationen abrufen, finden Sie unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore)
