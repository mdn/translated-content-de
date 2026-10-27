---
title: "Element: scroll-Ereignis"
short-title: scroll
slug: Web/API/Element/scroll_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("CSSOM view API")}}

Das **`scroll`**-Ereignis wird ausgelöst, wenn innerhalb eines Elements gescrollt wurde.
Um zu erkennen, wann das Scrollen abgeschlossen ist, verwenden Sie das [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scroll", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscroll = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Die folgenden Beispiele zeigen, wie Sie das `scroll`-Ereignis mit einem Event-Listener und mit der Event-Handler-Eigenschaft `onscroll` verwenden.
Die Methode [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) wird verwendet, um den Event-Handler zu {{Glossary("throttle", "drosseln")}}, da `scroll`-Ereignisse sehr häufig ausgelöst werden können.
Weitere Beispiele mit [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) finden Sie auf der Seite zum [`scroll`](/de/docs/Web/API/Document/scroll_event)-Ereignis von `Document`.

### `scroll` mit einem Event-Listener verwenden

Das folgende Beispiel zeigt, wie Sie mit dem `scroll`-Ereignis erkennen, wenn innerhalb eines Elements gescrollt wird:

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

### Die Event-Handler-Eigenschaft `onscroll` verwenden

Das folgende Beispiel zeigt, wie Sie mit der Event-Handler-Eigenschaft `onscroll` erkennen, wenn gescrollt wird. Beachten Sie jedoch, dass dadurch andere Event-Listener ersetzt werden, die gegebenenfalls über `onscroll` hinzugefügt wurden:

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

- [Element-`scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Document-`scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Document-`scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
