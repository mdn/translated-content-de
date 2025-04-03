---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Resize Observer API")}}

Die Resize Observer API bietet einen effizienten Mechanismus, mit dem Code die Änderungen der Größe eines Elements überwachen kann, wobei jedes Mal, wenn sich die Größe ändert, Benachrichtigungen an den Observer gesendet werden.

## Konzepte und Nutzung

Es gibt eine Vielzahl von Anwendungsfällen für Techniken des responsiven Designs (und andere darüber hinaus), die auf Änderungen der Größe eines Elements reagieren müssen, aber ihre Implementierungen waren zuvor oft ungeschickt und/oder anfällig.

Zum Beispiel sind [Media Queries](/de/docs/Web/CSS/CSS_media_queries) / [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia) großartig, um Layouts bei bestimmten Punkten zu aktualisieren, wenn sich die Größe des Viewports ändert. Aber was, wenn Sie das Layout in Reaktion auf die Größenänderung eines spezifischen Elements ändern wollen, das nicht der äußere Container ist?

Um dies zu erreichen, wäre eine begrenzte Lösung, auf Änderungen an einem geeigneten Ereignis zu hören, das auf das Element hinweist, dessen Größe Sie ändern möchten (z. B. das Fenster-[Resize-Ereignis](/de/docs/Web/API/Window/resize_event)), und dann die neuen Dimensionen oder andere Merkmale des Elements nach einer Größenänderung anhand von [`Element.getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) oder [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) zu ermitteln.

Eine solche Lösung neigt dazu, nur für begrenzte Anwendungsfälle zu funktionieren, ist schlecht für die Leistung (das kontinuierliche Aufrufen der oben genannten Methoden führt zu einem großen Leistungseinbruch), und funktioniert oft nicht, wenn die Größe des Browserfensters nicht geändert wird.

Die Resize Observer API bietet eine Lösung für genau diese Arten von Problemen und mehr, indem sie Ihnen ermöglicht, Änderungen der Größe des Inhalts oder des Rahmenkastens eines Elements auf effiziente Weise zu beobachten und darauf zu reagieren. Sie bietet eine JavaScript-Lösung für das oft diskutierte Fehlen von [Element-Abfragen](https://www.xanthir.com/b4PR0) in der Webplattform.

Die Nutzung ist einfach und entspricht im Wesentlichen anderen Observers wie [Performance Observer](/de/docs/Web/API/PerformanceObserver) oder [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) — Sie erstellen ein neues [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Objekt mithilfe des [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)-Konstruktors und verwenden dann [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe), um Änderungen an der Größe eines bestimmten Elements zu beobachten. Eine im Konstruktor eingerichtete Callback-Funktion läuft jedes Mal, wenn sich die Größe ändert und bietet Zugriff auf die neuen Dimensionen, sodass Sie alles tun können, was Sie als Reaktion auf diese Änderungen möchten.

## Schnittstellen

- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
  - : Bietet die Möglichkeit, neue Observer zu registrieren und das Beobachten von Elementen zu starten und zu stoppen.
- [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)
  - : Beschreibt ein einzelnes Element, das in seiner Größe verändert wurde, identifiziert das Element und seine neue Größe.

## Beispiele

Sie finden ein paar einfache Beispiele in unserem GitHub-Repo:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([siehe Quellcode](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): Ein einfaches Beispiel mit einem grünen Kasten, der als Prozentsatz der Größe des Viewports dimensioniert ist. Wenn die Größe des Viewports geändert wird, ändern sich die abgerundeten Ecken des Kastens proportional zur Größe des Kastens. Wir könnten dies einfach mit {{cssxref("border-radius")}} und einem Prozentsatz umsetzen, aber das führt schnell zu hässlich aussehenden elliptischen Ecken, während die obige Lösung Ihnen schöne runde Ecken gibt, die mit der Größe des Kastens skalieren.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quellcode](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Hier verwenden wir den Resize Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, während der Wert eines Sliders geändert wird und der `<div>`-Container seine Breite ändert. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, selbst wenn diese nichts mit dem Viewport zu tun haben.

Der Code folgt normalerweise diesem Muster (entnommen aus resize-observer-border-radius.html):

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize,
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height,
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ResizeObserver: It's Like document.onresize for Elements](https://web.dev/articles/resize-observer)
