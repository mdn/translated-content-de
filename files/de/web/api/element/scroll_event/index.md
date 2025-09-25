---
title: "Element: scroll-Ereignis"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn ein Element gescrollt wurde.
Um zu erkennen, wann das Scrollen abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Die folgenden Beispiele zeigen, wie das `scroll`-Ereignis mit einem Ereignis-Listener und mit der `onscroll`-Ereignisbehandlereigenschaft verwendet wird.
Die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird verwendet, um die Ereignisbehandlung zu {{Glossary("throttle", "drosseln")}}, da `scroll`-Ereignisse mit hoher Frequenz ausgelöst werden können.
Für zusätzliche Beispiele, die [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwenden, siehe die `Document` [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignisseite.

### Verwendung von `scroll` mit einem Ereignis-Listener

Das folgende Beispiel zeigt, wie das `scroll`-Ereignis verwendet wird, um zu erkennen, wann ein Benutzer innerhalb eines Elements scrollt:

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

### Verwendung der `onscroll`-Ereignisbehandlereigenschaft

Das folgende Beispiel zeigt, wie die `onscroll`-Ereignisbehandlereigenschaft verwendet wird, um zu erkennen, wann ein Benutzer scrollt:

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

- [Element `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Document `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Document `scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
