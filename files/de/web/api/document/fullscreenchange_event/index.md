---
title: "Document: fullscreenchange-Ereignis"
short-title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenchange`**-Ereignis wird unmittelbar ausgelöst, nachdem der Browser in den oder aus dem Vollbildmodus wechselt.

Das Ereignis wird an das `Element` gesendet, das in den oder aus dem Vollbildmodus wechselt, und dieses Ereignis steigt dann zum `Document` auf.

Um herauszufinden, ob das `Element` in den oder aus dem Vollbildmodus wechselt, prüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): wenn dieser Wert `null` ist, dann verlässt das Element den Vollbildmodus, andernfalls tritt es in den Vollbildmodus ein.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Protokollieren von `fullscreenchange`-Ereignissen

In diesem Beispiel wird ein Handler für das `fullscreenchange`-Ereignis dem [`Document`](/de/docs/Web/API/Document) hinzugefügt.

Wenn der Benutzer auf die Schaltfläche "Vollbildmodus umschalten" klickt, wird der `click`-Handler den Vollbildmodus für das `div` umschalten. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus beendet. Andernfalls wird das `div` in den Vollbildmodus gesetzt.

Denken Sie daran, dass der Status des Elements zum Zeitpunkt der Behandlung des `fullscreenchange`-Ereignisses bereits geändert wurde. Wenn die Änderung auf den Vollbildmodus erfolgt, zeigt `document.fullscreenElement` auf das Element, das sich jetzt im Vollbildmodus befindet. Wenn dagegen `document.fullscreenElement` `null` ist, wurde der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass, wenn sich ein Element derzeit im Vollbildmodus befindet, der `fullscreenchange`-Handler die `id` des Vollbildelements in die Konsole protokolliert. Wenn `document.fullscreenElement` `null` ist, protokolliert der Code eine Nachricht, dass die Änderung darin besteht, den Vollbildmodus zu verlassen.

#### HTML

```html
<h1>fullscreenchange event example</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
  <pre id="logger"></pre>
</div>
```

#### CSS

```css
* {
  box-sizing: border-box;
}

#fullscreen-div {
  height: 150px;
  padding: 1rem;
  background-color: pink;
}

#logger {
  height: 80px;
  padding: 0 0.5rem;
  background-color: white;
  overflow: scroll;
}
```

#### JavaScript

```js
const logger = document.querySelector("#logger");
const fullScreenElement = document.querySelector("#fullscreen-div");

function log(message) {
  logger.textContent = `${logger.textContent}\n${message}`;
}

function fullscreenchanged(event) {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  if (document.fullscreenElement) {
    log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    log("Leaving fullscreen mode.");
  }
}

document.addEventListener("fullscreenchange", fullscreenchanged);

// When the toggle button is clicked, enter/exit fullscreen
document.getElementById("toggle-fullscreen").addEventListener("click", () => {
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    fullScreenElement.requestFullscreen();
  }
});
```

{{EmbedLiveSample("Logging fullscreenchange events", 640, 250, "", "", "", "fullscreen")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
- [`Element`](/de/docs/Web/API/Element): [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
