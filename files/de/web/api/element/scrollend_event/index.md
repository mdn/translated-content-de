---
title: "Element: scrollend-Ereignis"
short-title: scrollend
slug: Web/API/Element/scrollend_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("CSSOM view API")}}

Das **`scrollend`**-Ereignis wird ausgelöst, wenn das Scrollen eines Elements abgeschlossen ist. Das Scrollen gilt als abgeschlossen, wenn keine Aktualisierungen der Scrollposition mehr ausstehen und die Benutzerinteraktion beendet ist.

Zu den Aktualisierungen der Scrollposition gehören sanftes oder sofortiges Scrollen mit dem Mausrad, Scrollen per Tastatur, Scroll-Snap-Ereignisse sowie andere APIs und Interaktionen, die die Scrollposition ändern. Benutzerinteraktionen wie Wischgesten auf einem Touchscreen oder das Scrollen mit einem Trackpad sind erst abgeschlossen, wenn die Zeiger nicht mehr aktiv sind oder die Tasten losgelassen wurden. Wenn sich die Scrollposition nicht geändert hat, wird kein `scrollend`-Ereignis ausgelöst.

Informationen dazu, wie Sie erkennen, wann das Scrollen innerhalb eines Document abgeschlossen ist, finden Sie beim [`scrollend`](/de/docs/Web/API/Document/scrollend_event)-Ereignis von `Document`.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("scrollend", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onscrollend = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

### `scrollend` mit einem Event Listener verwenden

Das folgende Beispiel zeigt, wie Sie mit dem `scrollend`-Ereignis erkennen, wann der Benutzer aufgehört hat zu scrollen:

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

### Die Event-Handler-Eigenschaft `onscrollend` verwenden

Das folgende Beispiel zeigt, wie Sie mit der Event-Handler-Eigenschaft `onscrollend` erkennen, wann der Benutzer aufgehört hat zu scrollen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onscroll` und `onscrollend` hinzugefügte Event Listener ersetzt werden:

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

- [Element-`scroll`-Ereignis](/de/docs/Web/API/Element/scroll_event)
- [Document-`scrollend`-Ereignis](/de/docs/Web/API/Document/scrollend_event)
- [Document-`scroll`-Ereignis](/de/docs/Web/API/Document/scroll_event)
