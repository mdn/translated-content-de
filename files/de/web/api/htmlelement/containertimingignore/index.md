---
title: "HTMLElement: Eigenschaft containerTimingIgnore"
short-title: containerTimingIgnore
slug: Web/API/HTMLElement/containerTimingIgnore
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`containerTimingIgnore`** der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle schließt das Element und seine Nachfahren von der Zeitmessung übergeordneter Container-Roots in der [Container Timing API](/de/docs/Web/API/PerformanceContainerTiming) aus.

Die Eigenschaft `containerTimingIgnore` spiegelt den Wert des Attributs [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore) wider.

## Wert

Ein boolescher Wert.

## Beispiele

### Den Wert von `containerTimingIgnore` protokollieren

In diesem Beispiel wird einem {{htmlelement("div")}}-Element das Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore) hinzugefügt. Dadurch wird es von der Zeitmessung seines übergeordneten Containers ausgeschlossen.

```html
<section containertiming="hero">
  <div containertimingignore id="ignored">
    <!-- ... -->
  </div>
</section>
```

Anschließend können wir die Eigenschaft auslesen und ihren Wert protokollieren:

```js
const el = document.getElementById("ignored");
console.log(el.containerTimingIgnore); // true
```

Beispiele dafür, wie Sie mit der Container Timing API Zeitmessungsinformationen abrufen, finden Sie unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- HTML-Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore)
- [`HTMLElement.containerTiming`](/de/docs/Web/API/HTMLElement/containerTiming)
