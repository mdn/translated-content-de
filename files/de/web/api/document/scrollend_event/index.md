---
title: "Dokument: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/Document/scrollend_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`scrollend`**-Ereignis wird ausgelöst, wenn das Dokumentansicht das Scrollen abgeschlossen hat.
Das Scrollen gilt als abgeschlossen, wenn die Scrollposition keine weiteren ausstehenden Aktualisierungen mehr hat und der Benutzer seine Geste abgeschlossen hat.

Scrollpositionsaktualisierungen umfassen sanftes oder sofortiges Scrollen mit dem Mausrad, Scrollen mit der Tastatur, scroll-snap-Ereignisse oder andere APIs und Gesten, die dazu führen, dass die Scrollposition aktualisiert wird.
Benutzergesten wie das Streichen mit Berührung oder Scrollen mit dem Trackpad sind erst abgeschlossen, wenn Zeiger oder Tasten losgelassen wurden.
Wenn sich die Scrollposition nicht geändert hat, wird kein scrollend-Ereignis ausgelöst.

Um zu erkennen, wann das Scrollen innerhalb eines Elements abgeschlossen ist, siehe das [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("scrollend", (event) => { })

onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwenden von Document `scrollend` mit einem Ereignis-Listener

Das folgende Beispiel zeigt, wie das `scrollend`-Ereignis mit einem Ereignis-Listener verwendet wird, um zu erkennen, wann der Benutzer das Scrollen des Dokuments beendet hat.
Im Beispiel gibt es Inhalte im eingebetteten iframe, die höher und breiter sind als das iframe selbst, sodass das Scrollen innerhalb des iframes in beiden Richtungen möglich ist.
Wenn der Benutzer das Scrollen beendet, wird das `scrollend`-Ereignis ausgelöst:

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

### Verwenden der `onscrollend`-Ereignishandlereigenschaft

Das folgende Beispiel zeigt, wie die `scrollend`-Ereignishandlereigenschaft verwendet wird, um zu erkennen, wann der Benutzer das Scrollen des Dokuments beendet hat.
Im Beispiel gibt es Inhalte im eingebetteten iframe, die höher und breiter sind als das iframe selbst, sodass das Scrollen innerhalb des iframes in beiden Richtungen möglich ist.
Dies baut auf dem ersten Beispiel auf, verwendet jedoch `document.onscrollend` anstelle eines Ereignis-Listeners:

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

- [Dokument `scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Element `scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Element `scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
