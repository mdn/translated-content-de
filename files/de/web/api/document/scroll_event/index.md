---
title: "Dokument: scroll-Ereignis"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn die Dokumentansicht gescrollt wurde.
Wie Sie erkennen, wann der Scrollvorgang abgeschlossen ist, erfahren Sie unter dem [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis von `Document`.
Informationen zum Scrollen von Elementen finden Sie unter dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scroll", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Häufigkeit von `scroll`-Ereignissen begrenzen

Da `scroll`-Ereignisse sehr häufig ausgelöst werden können, sollte der Event-Handler keine rechenintensiven Operationen wie Änderungen am DOM ausführen. Wenn Sie beim schnellen Scrollen {{Glossary("jank", "Ruckeln")}} bemerken, sollten Sie die {{Glossary("throttle", "Ausführungshäufigkeit begrenzen")}}.

Möglicherweise stoßen Sie auf Code, der die Ausführungshäufigkeit des `scroll`-Event-Handlers mithilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) begrenzt. Das ist _wirkungslos_, da Animation-Frame-Callbacks mit derselben Häufigkeit wie `scroll`-Event-Handler ausgelöst werden. Stattdessen müssen Sie das Zeitintervall selbst festlegen, beispielsweise mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

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

Alternativ können Sie [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) verwenden, mit dem sich Ereignisse anhand von Schwellenwerten beobachten lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document: `scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
- [Element: `scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
- [Element: `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
