---
title: "Dokument: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/Document/scrollend_event
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("CSSOM view API")}}

Das **`scrollend`**-Ereignis wird ausgelöst, wenn das Scrollen der Dokumentansicht abgeschlossen ist.
Das Scrollen gilt als abgeschlossen, wenn keine Aktualisierungen der Scrollposition mehr ausstehen und die Benutzerinteraktion beendet ist.

Zu den Aktualisierungen der Scrollposition gehören flüssiges oder sofortiges Scrollen mit dem Mausrad, Scrollen mit der Tastatur, Scroll-Snap-Ereignisse sowie andere APIs und Interaktionen, die die Scrollposition verändern.
Benutzerinteraktionen wie das Verschieben per Touch-Geste oder das Scrollen mit dem Trackpad sind erst abgeschlossen, wenn die Zeiger oder Tasten losgelassen wurden.
Wenn sich die Scrollposition nicht geändert hat, wird kein `scrollend`-Ereignis ausgelöst.

Wie Sie erkennen, wann das Scrollen innerhalb eines Elements abgeschlossen ist, erfahren Sie unter dem [`scrollend`](/de/docs/Web/API/Element/scrollend_event)-Ereignis von `Element`.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Document `scrollend` mit einem Event-Listener verwenden

Das folgende Beispiel zeigt, wie Sie mit einem Event-Listener für das `scrollend`-Ereignis erkennen, wann der Benutzer das Scrollen im Dokument beendet hat.
Im Beispiel enthält der eingebettete iframe Inhalte, die höher und breiter als der iframe selbst sind. Daher kann innerhalb des iframe in beide Richtungen gescrollt werden.
Wenn der Benutzer aufhört zu scrollen, wird das `scrollend`-Ereignis ausgelöst:

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

### Die `onscrollend`-Event-Handler-Eigenschaft verwenden

Das folgende Beispiel zeigt, wie Sie mit der `scrollend`-Event-Handler-Eigenschaft erkennen, wann der Benutzer das Scrollen im Dokument beendet hat.
Im Beispiel enthält der eingebettete iframe Inhalte, die höher und breiter als der iframe selbst sind. Daher kann innerhalb des iframe in beide Richtungen gescrollt werden.
Dieses Beispiel baut auf dem ersten auf, verwendet aber `document.onscrollend` anstelle eines Event-Listeners. Beachten Sie, dass dadurch gegebenenfalls andere über `onscroll` und `onscrollend` hinzugefügte Event-Listener ersetzt werden:

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

{{EmbedLiveSample("using_onscrollend_event_handler_property", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document-`scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
- [Element-`scrollend`-Ereignis](/de/docs/Web/API/Element/scrollend_event)
- [Element-`scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
