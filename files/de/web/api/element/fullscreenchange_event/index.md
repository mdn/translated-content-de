---
title: "Element: fullscreenchange Ereignis"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenchange`**-Ereignis wird unmittelbar nach einem Wechsel eines [`Element`](/de/docs/Web/API/Element) in den oder aus dem Vollbildmodus ausgelöst.

Dieses Ereignis wird an das `Element` gesendet, das in den oder aus dem Vollbildmodus wechselt.

Um festzustellen, ob das `Element` in den Vollbildmodus eintritt oder diesen verlässt, überprüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): Wenn dieser Wert `null` ist, verlässt das Element den Vollbildmodus, andernfalls tritt es in den Vollbildmodus ein.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird ein Handler für das `fullscreenchange`-Ereignis zu dem Element hinzugefügt, dessen ID `fullscreen-div` ist.

Wenn der Benutzer auf die Schaltfläche "Toggle Fullscreen Mode" klickt, wird der `click`-Handler den Vollbildmodus für das `div` umschalten. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wird das `div` in den Vollbildmodus gebracht.

Denken Sie daran, dass der Status des Elements bereits geändert wurde, wenn das `fullscreenchange`-Ereignis verarbeitet wird. Wenn der Wechsel in den Vollbildmodus erfolgt, zeigt `document.fullscreenElement` auf das Element, das jetzt im Vollbildmodus ist. Andererseits, wenn `document.fullscreenElement` `null` ist, wurde der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass, wenn ein Element aktuell im Vollbildmodus ist, der `fullscreenchange`-Handler die `id` des Vollbildelements in die Konsole protokolliert. Wenn `document.fullscreenElement` `null` ist, protokolliert der Code eine Nachricht, dass der Wechsel zum Verlassen des Vollbildmodus erfolgt.

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
// or
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

- [Document: fullscreenchange Ereignis](/de/docs/Web/API/Document/fullscreenchange_event)
- [Element: fullscreenerror Ereignis](/de/docs/Web/API/Element/fullscreenerror_event)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
