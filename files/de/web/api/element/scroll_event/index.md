---
title: "Element: scroll Ereignis"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}

Das **`scroll`** Ereignis wird ausgelöst, wenn ein Element gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen ist, sehen Sie sich das [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis von `Element` an.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Die folgenden Beispiele zeigen, wie das `scroll` Ereignis mit einem Event-Listener und mit der `onscroll` Event-Handler-Eigenschaft verwendet wird. Die [`setTimeout()`](/de/docs/Web/API/SetTimeout) Methode wird verwendet, um den Event-Handler zu {{Glossary("throttle", "drosseln")}}, da `scroll` Ereignisse mit einer hohen Rate ausgelöst werden können. Für zusätzliche Beispiele, die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, siehe die `Document` [`scroll`](/de/docs/Web/API/Document/scroll_event) Ereignis-Seite.

### Verwendung von `scroll` mit einem Event-Listener

Das folgende Beispiel zeigt, wie das `scroll` Ereignis verwendet wird, um zu erkennen, wenn der Benutzer innerhalb eines Elements scrollt:

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scroll me!</p>
</div>
<p style="text-align: center;" id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "Scroll event fired!";
  setTimeout(() => {
    output.textContent = "Waiting on scroll events...";
  }, 1000);
});
```

{{EmbedLiveSample("Using_scroll_with_an_event_listener", "100%", 120)}}

### Verwendung der `onscroll` Event-Handler-Eigenschaft

Das folgende Beispiel zeigt, wie die `onscroll` Event-Handler-Eigenschaft verwendet wird, um zu erkennen, wenn der Benutzer scrollt:

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scroll me!</p>
</div>
<p id="output" style="text-align: center;">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.textContent = "Element scroll event fired!";
  setTimeout(() => {
    output.textContent = "Waiting on scroll events...";
  }, 1000);
};
```

{{EmbedLiveSample("Using_onscroll_event_handler_property", "100%", 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Element `scrollend` Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Document `scroll` Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Document `scrollend` Ereignis](/de/docs/Web/API/Document/scrollend_event)
