---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Resize Observer API")}}

Die Resize Observer API bietet einen performanten Mechanismus, durch den Code ein Element auf Änderungen seiner Größe überwachen kann, wobei jedes Mal, wenn sich die Größe ändert, Benachrichtigungen an den Beobachter gesendet werden.

## Konzepte und Nutzung

Es gibt viele Anwendungsfälle für responsive Design-Techniken (und andere), die auf Änderungen der Größe eines Elements reagieren. Frühere Implementierungen waren jedoch oft umständlich und/oder instabil.

Zum Beispiel sind [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) / [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia) großartig, um Layouts an spezifischen Punkten zu aktualisieren, wenn sich die Größe des Ansichtsfensters ändert. Aber was, wenn Sie das Layout in Reaktion auf die Größenänderung eines bestimmten Elements, das nicht der äußere Container ist, ändern möchten?

Um dies zu erreichen, wäre eine begrenzte Lösung, Änderungen an einem geeigneten Ereignis zu überwachen, das auf das Element hindeutet, dessen Größenänderung Sie interessiert (z. B. das [window resize event](/de/docs/Web/API/Window/resize_event)), und dann die neuen Dimensionen oder andere Merkmale des Elements nach einer Größenänderung mittels [`Element.getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) oder [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) zu ermitteln.

Eine solche Lösung funktioniert in der Regel nur für begrenzte Anwendungsfälle, ist schlecht für die Leistung (das kontinuierliche Aufrufen der genannten Methoden würde zu einem großen Leistungseinbruch führen) und funktioniert oft nicht, wenn die Größe des Browserfensters nicht geändert wird.

Die Resize Observer API bietet eine Lösung für genau diese Art von Problemen und darüber hinaus, indem sie es Ihnen ermöglicht, Änderungen der Größe des Inhalts oder des Randbereichs eines Elements auf performante Weise zu beobachten und darauf zu reagieren. Sie bietet eine JavaScript-Lösung für das oft diskutierte Fehlen von [Element Queries](https://www.xanthir.com/b4PR0) in der Webplattform.

Die Nutzung ist einfach und ähnelt sehr anderen Beobachtern, wie dem [Performance Observer](/de/docs/Web/API/PerformanceObserver) oder dem [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) — Sie erstellen ein neues [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Objekt mit dem [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver) Konstruktor und verwenden dann [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe), um ein bestimmtes Element auf Größenänderungen zu überwachen. Eine im Konstruktor eingerichtete Rückruffunktion wird dann jedes Mal ausgeführt, wenn sich die Größe ändert, und ermöglicht den Zugriff auf die neuen Dimensionen, sodass Sie auf diese Änderungen beliebig reagieren können.

## Schnittstellen

- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
  - : Bietet die Möglichkeit, neue Beobachter zu registrieren und das Beobachten von Elementen zu starten und zu stoppen.
- [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)
  - : Beschreibt ein einzelnes Element, das in der Größe geändert wurde, wobei das Element und seine neue Größe identifiziert werden.

## Beispiele

Sie finden ein paar einfache Beispiele in unserem GitHub-Repo:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): Ein einfaches Beispiel mit einem grünen Kasten, der als Prozentsatz der Ansichtsfenstergröße dimensioniert ist. Wenn sich die Größe des Ansichtsfensters ändert, ändern sich die abgerundeten Ecken des Kastens proportional zur Größe des Kastens. Wir könnten dies einfach {{cssxref("border-radius")}} mit einem Prozentsatz implementieren, aber das führt schnell zu hässlich aussehenden elliptischen Ecken, während die obige Lösung Ihnen schön runde Ecken gibt, die mit der Kasten-Größe skalieren.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Hier verwenden wir den Resize Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, wenn sich der Wert eines Sliders ändert und dadurch das enthaltende `<div>` seine Breite ändert. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, auch wenn diese nichts mit dem Ansichtsfenster zu tun haben.

Der Code wird normalerweise nach diesem Muster verlaufen (entnommen von resize-observer-border-radius.html):

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
