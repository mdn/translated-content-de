---
title: "Element: fullscreenchange Ereignis"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenchange`** Ereignis wird unmittelbar ausgelöst, nachdem ein [`Element`](/de/docs/Web/API/Element) in den oder aus dem Vollbildmodus wechselt.

Dieses Ereignis wird an das `Element` gesendet, das in den oder aus dem Vollbildmodus übergeht.

Um festzustellen, ob das `Element` in den oder aus dem Vollbildmodus wechselt, prüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): Wenn dieser Wert `null` ist, verlässt das Element den Vollbildmodus, andernfalls wechselt es in den Vollbildmodus.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

In diesem Beispiel wird ein Handler für das `fullscreenchange` Ereignis dem Element mit der ID `fullscreen-div` hinzugefügt.

Wenn der Benutzer auf die Schaltfläche "Vollbildmodus umschalten" klickt, schaltet der `click`-Handler den Vollbildmodus für das `div` um. Wenn `document.fullscreenElement` einen Wert hat, verlässt es den Vollbildmodus. Andernfalls wird das `div` in den Vollbildmodus versetzt.

Denken Sie daran, dass der Status des Elements bereits geändert wurde, wenn das `fullscreenchange` Ereignis verarbeitet wird. Wenn die Änderung zum Vollbildmodus erfolgt, zeigt `document.fullscreenElement` auf das Element, das sich jetzt im Vollbildmodus befindet. Wenn hingegen `document.fullscreenElement` `null` ist, wurde der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass der `fullscreenchange` Handler, wenn ein Element derzeit im Vollbildmodus ist, die `id` des Vollbildelements in die Konsole protokolliert. Wenn `document.fullscreenElement` `null` ist, protokolliert der Code eine Nachricht, dass der Wechsel zum Verlassen des Vollbildmodus erfolgt ist.

### HTML

```html
<h1>fullscreenchange event example</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
</div>
```

### JavaScript

```js
function fullscreenchanged(event) {
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

el.addEventListener("fullscreenchange", fullscreenchanged);
// or
el.onfullscreenchange = fullscreenchanged;

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
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
