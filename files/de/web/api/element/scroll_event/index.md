---
title: "Element: scroll-Ereignis"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn ein Element gescrollt wird.
Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das {{domxref("Element/scrollend_event", "scrollend")}}-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Die folgenden Beispiele zeigen, wie das `scroll`-Ereignis mit einem Ereignis-Listener und mit der `onscroll`-Ereignis-Handler-Eigenschaft verwendet wird.
Die Methode {{DOMxRef("setTimeout()")}} wird verwendet, um den Ereignis-Handler zu {{glossary("throttle")}}, da `scroll`-Ereignisse mit hoher Geschwindigkeit ausgelöst werden können.
Für zusätzliche Beispiele, die {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}} verwenden, siehe die `Document` {{domxref("Document/scroll_event", "scroll")}}-Ereignisseite.

### Verwendung von `scroll` mit einem Event Listener

Das folgende Beispiel zeigt, wie das `scroll`-Ereignis verwendet wird, um zu erkennen, wann der Benutzer in einem Element scrollt:

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scrollen Sie mich!</p>
</div>
<p style="text-align: center;" id="output">Warten auf Scroll-Ereignisse...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "Scroll-Ereignis ausgelöst!";
  setTimeout(() => {
    output.textContent = "Warten auf Scroll-Ereignisse...";
  }, 1000);
});
```

{{EmbedLiveSample("Using_scroll_with_an_event_listener", "100%", 120)}}

### Verwendung der `onscroll`-Ereignis-Handler-Eigenschaft

Das folgende Beispiel zeigt, wie die `onscroll`-Ereignis-Handler-Eigenschaft verwendet wird, um zu erkennen, wann der Benutzer scrollt:

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scrollen Sie mich!</p>
</div>
<p id="output" style="text-align: center;">Warten auf Scroll-Ereignisse...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.textContent = "Element Scroll-Ereignis ausgelöst!";
  setTimeout(() => {
    output.textContent = "Warten auf Scroll-Ereignisse...";
  }, 1000);
};
```

{{EmbedLiveSample("Using_onscroll_event_handler_property", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Element `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Document `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Document `scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
