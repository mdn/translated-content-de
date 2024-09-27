---
title: "Element: scrollend Event"
short-title: scrollend
slug: Web/API/Element/scrollend_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef}}

Das **`scrollend`**-Ereignis wird ausgelöst, wenn das Scrollen eines Elements abgeschlossen ist.
Ein Scrollvorgang gilt als abgeschlossen, wenn die Scrollposition keine weiteren ausstehenden Aktualisierungen mehr hat und der Benutzer seine Geste beendet hat.

Scrollpositionsaktualisierungen umfassen sanftes oder sofortiges Scrollen mit dem Mausrad, Scrollen über Tastatur, Scrollschnapp-Ereignisse oder andere APIs und Gesten, die die Scrollposition aktualisieren.
Benutzergesten wie Wischbewegungen oder Scrollen mit dem Trackpad sind erst abgeschlossen, wenn Zeiger oder Tasten losgelassen werden.
Wenn sich die Scrollposition nicht ändert, wird kein `scrollend`-Ereignis ausgelöst.

Um zu erkennen, wann das Scrollen innerhalb eines Dokuments abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis des `Document`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

### Verwendung von `scrollend` mit einem Ereignislistener

Das folgende Beispiel zeigt, wie das `scrollend`-Ereignis verwendet wird, um zu erkennen, wann der Benutzer das Scrollen gestoppt hat:

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
  output.textContent = "Scroll event fired, waiting for scrollend...";
});

element.addEventListener("scrollend", (event) => {
  output.textContent = "Scrollend event fired!";
});
```

{{EmbedLiveSample("Using_scrollend_with_an_event_listener", "100%", 130)}}

### Verwendung der `onscrollend`-Ereignisbehandlungseigenschaft

Das folgende Beispiel zeigt, wie die `onscrollend`-Ereignisbehandlungseigenschaft verwendet wird, um zu erkennen, wann der Benutzer das Scrollen gestoppt hat:

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
