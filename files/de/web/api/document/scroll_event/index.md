---
title: "Document: scroll-Ereignis"
short-title: scroll
slug: Web/API/Document/scroll_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn die Dokumentansicht gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das {{domxref("Document/scrollend_event", "scrollend")}}-Ereignis von `Document`. Für das Scrollen von Elementen siehe das {{domxref("Element/scroll_event", "scroll")}}-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Scroll-Ereignis-Drosselung

Da `scroll`-Ereignisse mit hoher Rate ausgelöst werden können, sollte der Ereignis-Handler keine rechenintensiven Operationen wie DOM-Änderungen ausführen. Stattdessen wird empfohlen, das Ereignis mit {{glossary("throttle")}} unter Verwendung von {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("setTimeout()")}}, oder einem {{DOMxRef("CustomEvent")}} zu drosseln, wie folgt.

Es ist jedoch zu beachten, dass Eingabe-Ereignisse und Animations-Frames ungefähr in gleicher Rate ausgelöst werden und daher die untenstehende Optimierung oft nicht notwendig ist. Dieses Beispiel optimiert das `scroll`-Ereignis für `requestAnimationFrame`.

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
