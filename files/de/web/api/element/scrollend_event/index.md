---
title: "Element: scrollend Ereignis"
short-title: scrollend
slug: Web/API/Element/scrollend_event
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef}}

Das **`scrollend`** Ereignis wird ausgelöst, wenn das Scrollen eines Elements abgeschlossen ist. Scrollen gilt als abgeschlossen, wenn die Scrollposition keine weiteren ausstehenden Aktualisierungen hat und der Benutzer seine Geste beendet hat.

Scrollpositionsaktualisierungen umfassen sanftes oder sofortiges Scrollen mit dem Mausrad, Tastatur-Scrolling, Scroll-Snap-Ereignisse oder andere APIs und Gesten, die eine Aktualisierung der Scrollposition verursachen. Benutzer-Gesten wie Touch-Panning oder Trackpad-Scrolling sind nicht abgeschlossen, bis Zeiger oder Tasten losgelassen wurden. Wenn sich die Scrollposition nicht verändert hat, wird kein scrollend Ereignis ausgelöst.

Um zu erkennen, wann das Scrollen innerhalb eines Dokuments abgeschlossen ist, beachten Sie das [`scrollend`](/de/docs/Web/API/Document/scrollend_event) Ereignis des `Dokuments`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

### Verwendung von `scrollend` mit einem Ereignislistener

Das folgende Beispiel zeigt, wie das `scrollend` Ereignis verwendet wird, um zu erkennen, wann der Benutzer das Scrollen gestoppt hat:

```css hidden
#scroll-box {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#scroll-box-title {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#large-element {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
```

```html
<div id="scroll-box">
  <p id="scroll-box-title">Scroll me!</p>
  <p id="large-element"></p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "scroll event fired, waiting for scrollend...";
});

element.addEventListener("scrollend", (event) => {
  output.textContent = "scrollend event fired!";
});
```

{{EmbedLiveSample("Using_scrollend_with_an_event_listener", "100%", 130)}}

### Verwendung der `onscrollend` Ereignishandler-Eigenschaft

Das folgende Beispiel zeigt, wie die `onscrollend` Ereignishandler-Eigenschaft verwendet wird, um zu erkennen, wann der Benutzer das Scrollen gestoppt hat:

```css hidden
#scroll-box {
  height: 100px;
  width: 100px;
  float: left;
  overflow: scroll;
  outline: 4px dotted;
  margin: 4px;
}

#scroll-box-title {
  position: fixed;
  top: 5px;
  left: 5px;
  transform: translateX(0);
}

#large-element {
  height: 200px;
  width: 200px;
}

#output {
  text-align: center;
}
```

```html
<div id="scroll-box">
  <p id="scroll-box-title">Scroll me!</p>
  <p id="large-element"></p>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.textContent = "Element scroll event fired, waiting for scrollend...";
};

element.onscrollend = (event) => {
  output.textContent = "Element scrollend event fired!";
};
```

{{EmbedLiveSample("Using_onscrollend_event_handler_property", "100%", 130)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Element `scroll` Ereignis](/de/docs/Web/API/Element/scroll_event)
- [Document `scrollend` Ereignis](/de/docs/Web/API/Document/scrollend_event)
- [Document `scroll` Ereignis](/de/docs/Web/API/Document/scroll_event)
