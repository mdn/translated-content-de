---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Resize Observer API")}}

Die Resize Observer API bietet einen leistungsfähigen Mechanismus, mit dem Code ein Element auf Änderungen seiner Größe überwachen kann, wobei bei jeder Größenänderung Benachrichtigungen an den Beobachter gesendet werden.

## Konzepte und Nutzung

Es gibt eine Vielzahl von Anwendungsfällen für Techniken des responsiven Designs (und andere), die auf Änderungen der Größe eines Elements reagieren. Deren Implementierungen waren bisher jedoch oft improvisiert und/oder unzuverlässig.

Zum Beispiel sind [Media Queries](/de/docs/Web/CSS/CSS_media_queries) / [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia) großartig, um Layouts an bestimmten Punkten zu aktualisieren, wenn sich die Größe des Ansichtsfensters ändert. Aber was, wenn Sie das Layout als Reaktion auf die Größenänderung eines bestimmten Elements ändern möchten, das nicht der äußere Container ist?

Um dies zu erreichen, wäre eine eingeschränkte Lösung, auf Änderungen eines geeigneten Ereignisses zu lauschen, das auf das Element hinweist, dessen Größe Sie ändern möchten (z.B. das [resize event](/de/docs/Web/API/Window/resize_event) des Fensters). Anschließend könnten Sie die neuen Dimensionen oder andere Merkmale des Elements nach einer Größenänderung mit [`Element.getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) oder [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) feststellen.

Eine solche Lösung funktioniert jedoch tendenziell nur für eingeschränkte Anwendungsfälle, ist leistungstechnisch schlecht (die oben genannten Methoden ständig aufzurufen, würde zu einem großen Leistungseinbruch führen) und funktioniert oft nicht, wenn sich die Fenstergröße des Browsers nicht ändert.

Die Resize Observer API bietet eine Lösung genau für diese Art von Problemen und mehr, sodass Sie Änderungen an der Größe des Inhalts oder des Rahmenfelds eines Elements auf eine leistungsstarke Weise einfach beobachten und darauf reagieren können. Sie bietet eine JavaScript-Lösung für das häufig diskutierte Fehlen von [element queries](https://www.xanthir.com/b4PR0) in der Webplattform.

Die Nutzung ist einfach und im Wesentlichen die gleiche wie bei anderen Beobachtern wie [Performance Observer](/de/docs/Web/API/PerformanceObserver) oder [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) — Sie erstellen ein neues [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Objekt mit dem [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver) Konstruktor und verwenden dann [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe), um Änderungen an der Größe eines bestimmten Elements zu überwachen. Eine in den Konstruktor eingerichtete Callback-Funktion wird jedes Mal ausgeführt, wenn sich die Größe ändert, und bietet Zugriff auf die neuen Dimensionen, sodass Sie auf diese Änderungen beliebig reagieren können.

## Schnittstellen

- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
  - : Bietet die Möglichkeit, neue Beobachter zu registrieren und das Beobachten von Elementen zu starten und zu stoppen.
- [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)
  - : Beschreibt ein einzelnes Element, das in seiner Größe verändert wurde, und identifiziert das Element sowie seine neue Größe.

## Beispiele

Einige einfache Beispiele finden Sie in unserem GitHub-Repository:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([Quelltext ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): Ein einfaches Beispiel mit einem grünen Kasten, der als Prozentsatz der Ansichtsfenstergröße dimensioniert ist. Wenn sich die Größe des Ansichtsfensters ändert, ändern sich die abgerundeten Ecken des Kastens proportional zur Größe des Kastens. Wir könnten dies einfach mit {{cssxref("border-radius")}} als Prozentsatz implementieren, aber das führt schnell zu hässlich aussehenden elliptischen Ecken, während die obige Lösung Ihnen schöne runde Ecken bietet, die mit der Kasten-Größe skalieren.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quelltext ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Hier verwenden wir den Resize Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, während der Wert eines Schiebereglers geändert wird und der enthaltene `<div>` seine Breite ändert. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, auch wenn sie nichts mit dem Ansichtsfenster zu tun haben.

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
