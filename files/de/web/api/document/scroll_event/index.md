---
title: "Document: scroll-Ereignis"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn die Dokumentansicht gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis von `Document`. Für das Scrollen von Elementen siehe das [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Scroll-Ereignis-Throttling

Da `scroll`-Ereignisse mit hoher Frequenz ausgelöst werden können, sollte der Ereignishandler keine rechenintensiven Operationen wie DOM-Änderungen ausführen. Stattdessen wird empfohlen, das Ereignis mithilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder einem [`CustomEvent`](/de/docs/Web/API/CustomEvent) zu drosseln, wie folgt.

Beachten Sie jedoch, dass Eingabeereignisse und Animationsframes mit etwa der gleichen Geschwindigkeit ausgelöst werden, daher ist die untenstehende Optimierung oft nicht erforderlich. Dieses Beispiel optimiert das `scroll`-Ereignis für `requestAnimationFrame`.

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
