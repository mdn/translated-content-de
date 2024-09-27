---
title: "Document: scroll-Ereignis"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}

Das **`scroll`**-Ereignis tritt auf, wenn die Dokumentansicht gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis von `Document`. Für das Scrollen von Elementen, siehe das [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Throttling des Scroll-Ereignisses

Da `scroll`-Ereignisse mit hoher Frequenz auftreten können, sollte der Ereignis-Handler keine rechenintensiven Operationen wie DOM-Modifikationen ausführen. Stattdessen wird empfohlen, das Ereignis mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), [`setTimeout()`](/de/docs/Web/API/SetTimeout) oder einem [`CustomEvent`](/de/docs/Web/API/CustomEvent) zu [throttlen](/de/docs/Glossary/throttle), wie folgt.

Beachten Sie jedoch, dass Eingabeereignisse und Animationsframes etwa mit der gleichen Rate ausgelöst werden, sodass die nachfolgende Optimierung oft nicht erforderlich ist. Dieses Beispiel optimiert das `scroll`-Ereignis für `requestAnimationFrame`.

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document: `scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
- [Element: `scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
- [Element: `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
