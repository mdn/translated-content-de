---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Resize Observer API")}}

Die Resize Observer API bietet einen leistungsstarken Mechanismus, mit dem Code die Größe eines Elements überwachen kann, wobei dem Beobachter jedes Mal Benachrichtigungen übermittelt werden, wenn sich die Größe ändert.

## Konzepte und Nutzung

Es gibt eine ganze Reihe von Anwendungsfällen für Techniken des responsiven Designs (und andere), die auf Änderungen der Größe eines Elements reagieren, aber ihre Implementierungen waren bisher oft ungeschickt und/oder anfällig.

Zum Beispiel sind [Media Queries](/de/docs/Web/CSS/CSS_media_queries) / [`window.matchMedia`](/de/docs/Web/API/Window/matchMedia) großartig, um Layouts an bestimmten Punkten zu aktualisieren, wenn sich die Größe des Ansichtsfensters ändert. Aber was ist, wenn Sie das Layout als Reaktion auf die Größenänderung eines bestimmten Elements ändern möchten, das nicht der äußere Container ist?

Um dies zu erreichen, wäre eine begrenzte Lösung, auf Änderungen eines geeigneten Ereignisses zu lauschen, das auf das Element hinweist, das Sie interessiert, wenn es seine Größe ändert (z.B. das Fenster- [resize event](/de/docs/Web/API/Window/resize_event)), und dann herauszufinden, was die neuen Abmessungen oder andere Merkmale des Elements nach einer Größenänderung sind, z.B. mit [`Element.getBoundingClientRect`](/de/docs/Web/API/Element/getBoundingClientRect) oder [`Window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle).

Eine solche Lösung neigt dazu, nur für begrenzte Anwendungsfälle zu funktionieren, ist schlecht für die Leistung (das kontinuierliche Aufrufen der oben genannten Methoden würde zu einem erheblichen Leistungseinbruch führen) und funktioniert oft nicht, wenn sich die Größe des Browserfensters nicht ändert.

Die Resize Observer API bietet eine Lösung genau für diese Art von Problemen und noch mehr, da sie es Ihnen leicht ermöglicht, Änderungen in der Größe des Inhalts oder des Rahmenkastens eines Elements auf leistungsstarke Weise zu beobachten und darauf zu reagieren. Sie bietet eine JavaScript-Lösung für den oft diskutierten Mangel an [Element Queries](https://www.xanthir.com/b4PR0) in der Webplattform.

Die Nutzung ist einfach und nahezu identisch mit anderen Observern wie zum Beispiel [Performance Observer](/de/docs/Web/API/PerformanceObserver) oder [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) — Sie erstellen ein neues [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Objekt mit dem [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)-Konstruktor und verwenden dann [`ResizeObserver.observe()`](/de/docs/Web/API/ResizeObserver/observe), um es auf Änderungen der Größe eines bestimmten Elements reagieren zu lassen. Eine im Konstruktor eingerichtete Rückruffunktion wird dann jedes Mal ausgeführt, wenn sich die Größe ändert, wodurch der Zugriff auf die neuen Abmessungen gewährt wird und Sie können als Antwort auf diese Änderungen alles tun, was Sie möchten.

## Schnittstellen

- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
  - : Bietet die Möglichkeit, neue Beobachter zu registrieren sowie das Beobachten von Elementen zu starten und zu stoppen.
- [`ResizeObserverEntry`](/de/docs/Web/API/ResizeObserverEntry)
  - : Beschreibt ein einzelnes Element, das in der Größe geändert wurde, identifiziert das Element und seine neue Größe.

## Beispiele

Sie finden ein paar einfache Beispiele in unserem GitHub-Repo:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): Ein einfaches Beispiel mit einem grünen Kasten, der als Prozentsatz der Ansichtsfenstergröße formatiert ist. Wenn die Größe des Ansichtsfensters geändert wird, ändern sich die abgerundeten Ecken des Kastens proportional zur Größe des Kastens. Wir könnten dies einfach mit {{cssxref("border-radius")}} in Prozent umsetzen, aber das führt schnell zu hässlich aussehenden elliptischen Ecken, während die obige Lösung Ihnen schöne runde Ecken bietet, die mit der Kasten-Größe skalieren.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Hier verwenden wir den Resize Observer, um die {{cssxref("font-size")}} einer Überschrift und eines Absatzes zu ändern, wenn der Wert eines Schiebereglers geändert wird, was dazu führt, dass sich die Breite des enthaltenden `<div>` ändert. Dies zeigt, dass Sie auf Änderungen in der Größe eines Elements reagieren können, selbst wenn sie nichts mit dem Ansichtsfenster zu tun haben.

Der Code folgt in der Regel diesem Muster (entnommen aus resize-observer-border-radius.html):

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

- [ResizeObserver: It’s Like document.onresize for Elements](https://web.dev/articles/resize-observer)
