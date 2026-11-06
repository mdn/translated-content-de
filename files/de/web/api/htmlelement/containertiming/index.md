---
title: "HTMLElement: containerTiming-Eigenschaft"
short-title: containerTiming
slug: Web/API/HTMLElement/containerTiming
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die Eigenschaft **`containerTiming`** der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) kennzeichnet das Element als Container-Wurzel für die Beobachtung durch die [Container Timing API](/de/docs/Web/API/PerformanceContainerTiming).

Die Eigenschaft `containerTiming` spiegelt den Wert des Attributs [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) wider. Wird die Eigenschaft gesetzt, wird das Attribut hinzugefügt und das Element damit zur Container-Wurzel. Befindet sich das Element bereits im Dokument, tragen nur nachfolgende Rendering-Vorgänge zu seinen Zeitmessdaten bei.

## Wert

Ein String. Wenn das Attribut nicht gesetzt ist, ist der Wert ein leerer String (`""`).

## Beispiele

### Wert von `containerTiming` protokollieren

In diesem Beispiel wird das {{htmlelement("section")}}-Element durch Hinzufügen des Attributs [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) als Container-Wurzel eingerichtet.

```html
<section containertiming="hero" id="hero-section">
  <!-- ... -->
</section>
```

Anschließend können Sie die Eigenschaft auslesen und ihren Wert protokollieren:

```js
const el = document.getElementById("hero-section");
console.log(el.containerTiming); // "hero"
```

Beispiele dafür, wie Sie mit der Container Timing API Zeitmessdaten abrufen, finden Sie unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
- [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore)
