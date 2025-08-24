---
title: "Dokument: scroll-Ereignis"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 0ef46d51ce0797cb2e3aa0060ded987e03f0a33f
---

{{APIRef}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn die Dokumentansicht gescrollt wurde.
Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis von `Document`.
Für das Scrollen von Elementen, siehe das [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Drosselung von Scroll-Ereignissen

Da `scroll`-Ereignisse mit hoher Rate ausgelöst werden können, sollte der Ereignishandler keine rechenintensiven Operationen wie DOM-Änderungen ausführen. Wenn Sie ein {{Glossary("jank", "Ruckeln")}} beim schnellen Scrollen bemerken, sollten Sie in Erwägung ziehen, das Ereignis {{Glossary("throttle", "zu drosseln")}}.

Beachten Sie, dass Sie Code sehen könnten, der den `scroll`-Ereignishandler mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) drosselt. Dies ist _nutzlos_, da Animation-Frame-Rückrufe mit der gleichen Rate wie `scroll`-Ereignishandler ausgelöst werden. Stattdessen müssen Sie das Timeout selbst messen, beispielsweise durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    // Throttle the event to "do something" every 20ms
    setTimeout(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    }, 20);

    ticking = true;
  }
});
```

Alternativ können Sie in Erwägung ziehen, [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu verwenden, der eine schwellenwertbasierte Überwachung ermöglicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document: `scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
- [Element: `scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
- [Element: `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
