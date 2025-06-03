---
title: "Element: scroll event"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn ein Element gescrollt wurde. Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Die folgenden Beispiele zeigen, wie man das `scroll`-Ereignis mit einem Ereignis-Listener und mit der Eigenschaft `onscroll` verwendet. Die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird verwendet, um den Ereignis-Handler zu {{Glossary("throttle", "drosseln")}}, da `scroll`-Ereignisse mit hoher Frequenz ausgelöst werden können. Weitere Beispiele, die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, finden Sie auf der Seite des `Document` [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignisses.

### Verwendung von `scroll` mit einem Ereignis-Listener

Das folgende Beispiel zeigt, wie das `scroll`-Ereignis verwendet wird, um zu erkennen, wann der Benutzer in einem Element scrollt:

```html
<div id="scroll-box">
  <p>Scroll me!</p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```css
#scroll-box {
  overflow: scroll;
  height: 100px;
  width: 100px;
  float: left;
}

#scroll-box p {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
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

### Verwendung der Eigenschaft `onscroll` für den Ereignis-Handler

Das folgende Beispiel zeigt, wie die `onscroll`-Ereignis-Handler-Eigenschaft verwendet wird, um zu erkennen, wann der Benutzer scrollt:

```html
<div id="scroll-box">
  <p>Scroll me!</p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```css
#scroll-box {
  overflow: scroll;
  height: 100px;
  width: 100px;
  float: left;
}

#scroll-box p {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
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

- [Element `scrollend` event](/de/docs/Web/API/Element/scrollend_event)
- [Document `scroll` event](/de/docs/Web/API/Document/scroll_event)
- [Document `scrollend` event](/de/docs/Web/API/Document/scrollend_event)
