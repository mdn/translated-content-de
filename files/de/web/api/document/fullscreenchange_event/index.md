---
title: "Dokument: fullscreenchange Ereignis"
short-title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenchange`** Ereignis wird ausgelöst, sobald der Browser in den Vollbildmodus wechselt oder diesen verlässt.

Das Ereignis wird an das `Element` gesendet, das in den oder aus dem Vollbildmodus wechselt. Dieses Ereignis "blubbert" dann bis zum `Document` hoch.

Um festzustellen, ob das `Element` in den Vollbildmodus wechselt oder diesen verlässt, überprüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): Wenn dieser Wert `null` ist, verlässt das Element den Vollbildmodus, andernfalls wechselt es in den Vollbildmodus.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("fullscreenchange", (event) => { })

onfullscreenchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Protokollierung von `fullscreenchange` Ereignissen

In diesem Beispiel wird ein Handler für das `fullscreenchange` Ereignis zum [`Document`](/de/docs/Web/API/Document) hinzugefügt.

Wenn der Benutzer auf die Schaltfläche "Vollbildmodus umschalten" klickt, schaltet der `click`-Handler den Vollbildmodus für das `div` um. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wird das `div` in den Vollbildmodus versetzt.

Denken Sie daran, dass der Status des Elements bereits geändert wurde, wenn das `fullscreenchange` Ereignis behandelt wird. Wenn die Änderung in den Vollbildmodus erfolgt, zeigt `document.fullscreenElement` auf das Element, das sich nun im Vollbildmodus befindet. Andererseits, wenn `document.fullscreenElement` `null` ist, wurde der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass, wenn ein Element derzeit im Vollbildmodus ist, der `fullscreenchange`-Handler die `id` des Vollbildelements in die Konsole protokolliert. Wenn `document.fullscreenElement` `null` ist, protokolliert der Code eine Nachricht, dass die Änderung darin besteht, den Vollbildmodus zu verlassen.

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

function fullscreenchangeHandler(event) {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  if (document.fullscreenElement) {
    log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    log("Leaving fullscreen mode.");
  }
}

document.addEventListener("fullscreenchange", fullscreenchangeHandler);

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

{{EmbedLiveSample("Protokollierung von fullscreenchange Ereignissen", 640, 250, "", "", "", "fullscreen")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
- [`Element`](/de/docs/Web/API/Element): [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
