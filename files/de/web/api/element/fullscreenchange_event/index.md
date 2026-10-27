---
title: "Element: fullscreenchange-Ereignis"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenchange`**-Ereignis wird unmittelbar ausgelöst, nachdem ein [`Element`](/de/docs/Web/API/Element) in den Vollbildmodus gewechselt ist oder ihn verlassen hat.

Dieses Ereignis wird an das `Element` gesendet, das in den Vollbildmodus wechselt oder ihn verlässt.

Um festzustellen, ob das `Element` in den Vollbildmodus wechselt oder ihn verlässt, prüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): Ist der Wert `null`, verlässt das Element den Vollbildmodus. Andernfalls wechselt es in den Vollbildmodus.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("fullscreenchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onfullscreenchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird dem Element mit der ID `fullscreen-div` ein Handler für das `fullscreenchange`-Ereignis hinzugefügt.

Wenn der Benutzer auf die Schaltfläche „Toggle Fullscreen Mode“ klickt, schaltet der `click`-Handler den Vollbildmodus für das `div` um. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wird das `div` in den Vollbildmodus versetzt.

Wenn das `fullscreenchange`-Ereignis verarbeitet wird, hat sich der Zustand des Elements bereits geändert. Wenn das Element in den Vollbildmodus gewechselt ist, verweist `document.fullscreenElement` daher auf das Element, das sich jetzt im Vollbildmodus befindet. Ist `document.fullscreenElement` dagegen `null`, wurde der Vollbildmodus beendet.

Für den Beispielcode bedeutet das: Wenn sich ein Element im Vollbildmodus befindet, gibt der `fullscreenchange`-Handler die `id` dieses Elements in der Konsole aus. Ist `document.fullscreenElement` `null`, gibt der Code eine Meldung darüber aus, dass der Vollbildmodus verlassen wurde.

### HTML

```html
<h1>fullscreenchange event example</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
</div>
```

### JavaScript

```js
function fullscreenchangeHandler(event) {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    console.log(
      `Element: ${document.fullscreenElement.id} entered fullscreen mode.`,
    );
  } else {
    console.log("Leaving fullscreen mode.");
  }
}

const el = document.getElementById("fullscreen-div");

el.addEventListener("fullscreenchange", fullscreenchangeHandler);
// Or (but note that this replaces other event listeners
// added using onfullscreenchange, if any)
el.onfullscreenchange = fullscreenchangeHandler;

// When the toggle button is clicked, enter/exit fullscreen
document
  .getElementById("toggle-fullscreen")
  .addEventListener("click", (event) => {
    if (document.fullscreenElement) {
      // exitFullscreen is only available on the Document object.
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document: fullscreenchange-Ereignis](/de/docs/Web/API/Document/fullscreenchange_event)
- [Element: fullscreenerror-Ereignis](/de/docs/Web/API/Element/fullscreenerror_event)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
