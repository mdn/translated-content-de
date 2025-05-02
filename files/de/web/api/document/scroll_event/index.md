---
title: "Dokument: scroll-Ereignis"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn die Dokumentansicht gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen wurde, siehe das [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis des `Document`. Für das Scrollen von Elementen, siehe [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis des `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Scroll-Ereignis-Drosselung

Da `scroll`-Ereignisse mit hoher Rate ausgelöst werden können, sollte der Ereignis-Handler keine rechenintensiven Operationen wie DOM-Modifikationen ausführen. Stattdessen wird empfohlen, das Ereignis mithilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) oder einem [`CustomEvent`](/de/docs/Web/API/CustomEvent) zu drosseln, wie folgt.

Beachten Sie jedoch, dass Eingabeereignisse und Animationsrahmen ungefähr mit der gleichen Rate ausgelöst werden, wodurch die folgende Optimierung oft unnötig ist. Dieses Beispiel optimiert das `scroll`-Ereignis für `requestAnimationFrame`.

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
