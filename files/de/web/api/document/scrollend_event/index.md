---
title: "Dokument: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/Document/scrollend_event
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef}}

Das **`scrollend`**-Ereignis wird ausgelöst, wenn das Dokumentenansicht den Bildlauf abgeschlossen hat.
Ein Scrollen wird als abgeschlossen betrachtet, wenn die Scroll-Position keine ausstehenden Aktualisierungen mehr hat und der Benutzer seine Geste beendet hat.

Scrollpositionsänderungen umfassen sanftes oder sofortiges Scrollen mit dem Mausrad, Scrollen mit der Tastatur, scroll-snap-Ereignisse oder andere APIs und Gesten, die eine Aktualisierung der Scrollposition verursachen.
Benutzergesten wie Touch-Panning oder Trackpad-Scrolling sind erst abgeschlossen, wenn Zeiger oder Tasten losgelassen werden.
Wenn sich die Scrollposition nicht geändert hat, wird kein scrollend-Ereignis ausgelöst.

Um zu erkennen, wann ein Scrollen innerhalb eines Elements abgeschlossen ist, siehe das {{domxref("Element/scrollend_event", "scrollend")}}-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Verwendung von Document `scrollend` mit einem Ereignis-Listener

Das folgende Beispiel zeigt, wie Sie das `scrollend`-Ereignis mit einem Ereignis-Listener verwenden, um zu erkennen, wann der Benutzer das Scrollen des Dokuments gestoppt hat.
Im Beispiel gibt es Inhalte im eingebetteten iframe, die höher und breiter als das iframe selbst sind, sodass ein Scrollen innerhalb des iframes in beide Richtungen möglich ist.
Wenn der Benutzer das Scrollen stoppt, wird das `scrollend`-Ereignis ausgelöst:

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
<p id="output">Warten auf Scroll-Ereignisse...</p>
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

### Verwendung der `onscrollend`-Ereignishandlereigenschaft

Das folgende Beispiel zeigt, wie Sie die `scrollend`-Ereignishandlereigenschaft verwenden, um zu erkennen, wann der Benutzer das Scrollen des Dokuments gestoppt hat.
Im Beispiel gibt es Inhalte im eingebetteten iframe, die höher und breiter als das iframe selbst sind, sodass ein Scrollen innerhalb des iframes in beide Richtungen möglich ist.
Dies basiert auf dem ersten Beispiel, verwendet jedoch `document.onscrollend` anstelle eines Ereignis-Listeners:

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
<p id="output">Warten auf Scroll-Ereignisse...</p>
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

- [Document `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Element `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Element `scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
