---
title: "Element: fullscreenchange Ereignis"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenchange`**-Ereignis wird sofort ausgelöst, nachdem ein [`Element`](/de/docs/Web/API/Element) in den oder aus dem Vollbildmodus wechselt.

Dieses Ereignis wird an das `Element` gesendet, das in den oder aus dem Vollbildmodus wechselt.

Um herauszufinden, ob das `Element` in den Vollbildmodus wechselt oder ihn verlässt, überprüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): Wenn dieser Wert `null` ist, verlässt das Element den Vollbildmodus, andernfalls tritt es in den Vollbildmodus ein.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("fullscreenchange", (event) => { })

onfullscreenchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird ein Handler für das `fullscreenchange`-Ereignis zu dem Element hinzugefügt, dessen ID `fullscreen-div` ist.

Wenn der Benutzer auf die Schaltfläche "Vollbildmodus umschalten" klickt, wird der `click`-Handler den Vollbildmodus für das `div` umschalten. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wird das div in den Vollbildmodus gesetzt.

Denken Sie daran, dass zum Zeitpunkt der Bearbeitung des `fullscreenchange`-Ereignisses der Status des Elements bereits geändert wurde. Also, wenn die Änderung in den Vollbildmodus ist, zeigt `document.fullscreenElement` auf das Element, das sich jetzt im Vollbildmodus befindet. Andererseits hat, wenn `document.fullscreenElement` `null` ist, der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass der `fullscreenchange`-Handler, wenn sich ein Element derzeit im Vollbildmodus befindet, die `id` des Vollbildelements in der Konsole protokolliert. Wenn `document.fullscreenElement` `null` ist, protokolliert der Code eine Nachricht, dass die Änderung darin besteht, den Vollbildmodus zu verlassen.

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

- [Document: fullscreenchange event](/de/docs/Web/API/Document/fullscreenchange_event)
- [Element: fullscreenerror event](/de/docs/Web/API/Element/fullscreenerror_event)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
