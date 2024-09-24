---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Resize Observer API")}}

Die Resize Observer API bietet einen leistungsfähigen Mechanismus, mit dem Code Änderungen der Größe eines Elements überwachen kann, wobei jedes Mal, wenn sich die Größe ändert, Benachrichtigungen an den Beobachter gesendet werden.

## Konzepte und Nutzung

Es gibt viele Anwendungsfälle für responsive Design-Techniken (und andere), die auf Änderungen der Größe eines Elements reagieren. Diese Implementierungen waren bisher jedoch oft unzuverlässig und/oder anfällig.

Zum Beispiel sind [Media Queries](/de/docs/Web/CSS/CSS_media_queries) / {{domxref("window.matchMedia")}} hervorragend geeignet, um Layouts an bestimmten Punkten zu aktualisieren, wenn sich die Größe des Ansichtsfensters ändert. Aber was, wenn Sie das Layout als Reaktion auf die Größenänderung eines bestimmten Elements ändern möchten, das nicht der äußere Container ist?

Um dies zu erreichen, könnte man eine begrenzte Lösung verwenden, bei der man Änderungen eines geeigneten Ereignisses überwacht, das auf die Größenänderung des gewünschten Elements hinweist (z. B. das [resize event](/de/docs/Web/API/Window/resize_event) des Fensters), und danach die neuen Dimensionen oder andere Eigenschaften des Elements nach der Größenänderung mit z. B. {{domxref("Element.getBoundingClientRect")}} oder {{domxref("Window.getComputedStyle")}} ermittelt.

Eine solche Lösung funktioniert tendenziell nur für begrenzte Anwendungsfälle, ist schlecht für die Leistung (das ständige Aufrufen der obigen Methoden führt zu einer erheblichen Leistungseinbuße) und funktioniert oft nicht, wenn die Größe des Browserfensters nicht geändert wird.

Die Resize Observer API bietet eine Lösung genau für diese Art von Problemen und mehr, sodass Sie Änderungen der Größe des Inhalts oder des Randkastens eines Elements auf eine leistungsfähige Weise einfach beobachten und darauf reagieren können. Sie bietet eine JavaScript-Lösung für das oft diskutierte Fehlen von [element queries](https://www.xanthir.com/b4PR0) in der Web-Plattform.

Die Nutzung ist einfach und im Wesentlichen die gleiche wie bei anderen Beobachtern, wie dem [Performance Observer](/de/docs/Web/API/PerformanceObserver) oder dem [Intersection Observer](/de/docs/Web/API/Intersection_Observer_API) — Sie erstellen ein neues {{domxref("ResizeObserver")}}-Objekt mit dem [`ResizeObserver()`](/de/docs/Web/API/ResizeObserver/ResizeObserver)-Konstruktor und verwenden dann {{domxref("ResizeObserver.observe()")}}, um Änderungen der Größe eines bestimmten Elements zu beobachten. Eine im Konstruktor eingerichtete Rückruffunktion wird jedes Mal ausgeführt, wenn sich die Größe ändert, und bietet Zugriff auf die neuen Abmessungen, sodass Sie auf diese Änderungen beliebig reagieren können.

## Schnittstellen

- {{domxref("ResizeObserver")}}
  - : Bietet die Möglichkeit, neue Beobachter zu registrieren und das Beobachten von Elementen zu starten und zu stoppen.
- {{domxref("ResizeObserverEntry")}}
  - : Beschreibt ein einzelnes Element, das in der Größe geändert wurde, und identifiziert das Element und seine neue Größe.

## Beispiele

Sie finden ein paar einfache Beispiele in unserem GitHub-Repo:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): Ein einfaches Beispiel mit einem grünen Kasten, der als Prozentsatz der Ansichtsfenstergröße dimensioniert ist. Wenn sich die Ansichtsfenstergröße ändert, ändern sich die abgerundeten Ecken des Kastens proportional zur Größe des Kastens. Wir könnten dies einfach mit {{cssxref("border-radius")}} in Prozent implementieren, aber das führt schnell zu unschön aussehenden ellipsenförmigen Ecken, während die obige Lösung schöne runde Ecken liefert, die mit der Kastengröße skalieren.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([siehe Quelle](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Hier verwenden wir den Resize Observer, um die {{cssxref("font-size")}} eines Headers und Absatzes zu ändern, wenn sich der Wert eines Sliders ändert und somit das umgebende `<div>` seine Breite ändert. Dies zeigt, dass Sie auf Änderungen der Größe eines Elements reagieren können, selbst wenn sie nichts mit dem Ansichtsfenster zu tun haben.

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
