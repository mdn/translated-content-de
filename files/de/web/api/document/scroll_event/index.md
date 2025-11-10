---
title: "Dokument: scroll event"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn die Dokumentansicht gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis des `Document`. Für das Scrollen von Elementen siehe das [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Throttling des Scroll-Ereignisses

Da `scroll`-Ereignisse in hoher Frequenz ausgelöst werden können, sollte der Ereignis-Handler keine rechenintensiven Operationen wie DOM-Modifikationen ausführen. Wenn Sie bei schnellem Scrollen ein {{Glossary("jank", "Ruckeln")}} bemerken, sollten Sie in Betracht ziehen, das Ereignis zu {{Glossary("throttle", "drosseln")}}.

Beachten Sie, dass Sie möglicherweise Code sehen, der den `scroll`-Ereignis-Handler mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) drosselt. Dies ist _nutzlos_, da Animationsframe-Rückrufe mit der gleichen Frequenz wie `scroll`-Ereignis-Handler ausgeführt werden. Stattdessen müssen Sie die Timeout-Zeit selbst messen, beispielsweise mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

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

Alternativ sollten Sie erwägen, stattdessen [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) zu verwenden, der ein schwellenwertbasiertes Zuhören ermöglicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document: `scrollend` event](/de/docs/Web/API/Document/scrollend_event)
- [Element: `scroll` event](/de/docs/Web/API/Element/scroll_event)
- [Element: `scrollend` event](/de/docs/Web/API/Element/scrollend_event)
