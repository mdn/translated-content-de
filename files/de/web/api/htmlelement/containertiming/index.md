---
title: "HTMLElement: containerTiming-Eigenschaft"
short-title: containerTiming
slug: Web/API/HTMLElement/containerTiming
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("HTML DOM")}}

Die **`containerTiming`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle kennzeichnet das Element als Container-Root für die Beobachtung mit der [Container Timing API](/de/docs/Web/API/PerformanceContainerTiming).

Die `containerTiming`-Eigenschaft spiegelt den Wert des [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)-Attributs wider. Wenn Sie die Eigenschaft setzen, wird das Attribut hinzugefügt und das Element zum Container-Root. Befindet sich das Element bereits im Dokument, tragen nur nachfolgende Paints zu seinen Timing-Daten bei.

## Wert

Ein String. Wenn das Attribut nicht gesetzt ist, ist der Wert der leere String (`""`).

## Beispiele

### Den Wert von `containerTiming` protokollieren

In diesem Beispiel wird das {{htmlelement("section")}}-Element durch Hinzufügen des [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)-Attributs zum Container-Root.

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

Beispiele dafür, wie Sie mit der Container Timing API Timing-Informationen abrufen, finden Sie unter [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
- [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore)
