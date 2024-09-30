---
title: "Document: scrollend Ereignis"
short-title: scrollend
slug: Web/API/Document/scrollend_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef}}

Das **`scrollend`** Ereignis wird ausgelöst, wenn die Ansicht des Dokuments das Scrollen abgeschlossen hat. Das Scrollen gilt als abgeschlossen, wenn die Scroll-Position keine weiteren ausstehenden Updates mehr hat und der Benutzer seine Geste beendet hat.

Updates der Scroll-Position umfassen sanftes oder sofortiges Scrollen mit dem Mausrad, Scrollen mit der Tastatur, Scroll-Snap-Ereignisse oder andere APIs und Gesten, die dazu führen, dass sich die Scroll-Position aktualisiert. Benutzer-Gesten wie das Berühren des Bildschirms oder das Scrollen mit dem Trackpad sind erst abgeschlossen, wenn Zeiger oder Tasten losgelassen wurden. Wenn sich die Scroll-Position nicht geändert hat, wird kein `scrollend` Ereignis ausgelöst.

Um zu erkennen, wann das Scrollen innerhalb eines Elements abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Element/scrollend_event) Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von Document `scrollend` mit einem Event Listener

Das folgende Beispiel zeigt, wie das `scrollend` Ereignis mit einem Event Listener verwendet wird, um festzustellen, wann der Benutzer das Scrollen des Dokuments beendet hat. Im Beispiel gibt es Inhalte im eingebetteten `<iframe>`, die höher und breiter als das `<iframe>` selbst sind, sodass das Scrollen innerhalb des `<iframe>` in beide Richtungen möglich ist. Wenn der Benutzer das Scrollen stoppt, wird das `scrollend` Ereignis ausgelöst:

```css hidden
* {
  margin: 10px;
}

.box-wrapper {
  width: 900px;
  border: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  display: block;
  border: 4px dotted;
  border-radius: 10px;
}

#output {
  text-align: center;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```html
<div class="box-wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
const output = document.querySelector("p#output");

document.addEventListener("scroll", (event) => {
  output.textContent = "Document scroll event fired!";
});

document.addEventListener("scrollend", (event) => {
  output.textContent = "Document scrollend event fired!";
});
```

{{EmbedLiveSample("Using_document_scrollend_with_an_event_listener", "100%", 200)}}

### Verwendung der `onscrollend` Ereignis-Handler-Eigenschaft

Das folgende Beispiel zeigt, wie die `scrollend` Ereignis-Handler-Eigenschaft verwendet wird, um festzustellen, wann der Benutzer das Scrollen des Dokuments beendet hat. Im Beispiel gibt es Inhalte im eingebetteten `<iframe>`, die höher und breiter als das `<iframe>` selbst sind, sodass das Scrollen innerhalb des `<iframe>` in beide Richtungen möglich ist. Dies baut auf dem ersten Beispiel auf, verwendet jedoch `document.onscrollend` anstelle eines Event Listeners:

```css hidden
* {
  margin: 10px;
}

.box-wrapper {
  width: 900px;
  border: 4px dotted;
}

.box {
  height: 100px;
  width: 100px;
  display: block;
  border: 4px dotted;
  border-radius: 10px;
}

#output {
  text-align: center;
  font-size: 1.2em;
  position: sticky;
  bottom: 0;
}
```

```html
<div class="box-wrapper">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<p id="output">Waiting on scroll events...</p>
```

```js
document.onscroll = (event) => {
  output.textContent = "Document scroll event fired!";
};

document.onscrollend = (event) => {
  output.textContent = "Document scrollend event fired!";
};
```

{{EmbedLiveSample("Using_scrollend_with_an_event_handler_property", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document `scroll` Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Element `scrollend` Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Element `scroll` Ereignis](/de/docs/Web/API/Element/scroll_event)
