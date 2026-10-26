---
title: "Dokument: fullscreenchange-Ereignis"
short-title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Fullscreen API")}}

Das Ereignis **`fullscreenchange`** wird unmittelbar ausgelöst, nachdem der Browser in den Vollbildmodus gewechselt oder ihn verlassen hat.

Das Ereignis wird an das `Element` gesendet, das in den Vollbildmodus wechselt oder ihn verlässt. Anschließend wird es an das `Document` weitergegeben.

Um festzustellen, ob das `Element` in den Vollbildmodus wechselt oder ihn verlässt, prüfen Sie den Wert von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement): Ist dieser Wert `null`, verlässt das Element den Vollbildmodus; andernfalls wechselt es in den Vollbildmodus.

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

### `fullscreenchange`-Ereignisse protokollieren

In diesem Beispiel wird dem [`Document`](/de/docs/Web/API/Document) ein Handler für das Ereignis `fullscreenchange` hinzugefügt.

Wenn die Person auf die Schaltfläche „Toggle Fullscreen Mode“ klickt, schaltet der `click`-Handler den Vollbildmodus für das `div` um. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wird das `div` in den Vollbildmodus versetzt.

Beachten Sie, dass sich der Zustand des Elements bereits geändert hat, wenn das Ereignis `fullscreenchange` verarbeitet wird. Wenn in den Vollbildmodus gewechselt wurde, verweist `document.fullscreenElement` daher auf das Element, das sich nun im Vollbildmodus befindet. Ist `document.fullscreenElement` dagegen `null`, wurde der Vollbildmodus beendet.

Für den Beispielcode bedeutet das: Befindet sich ein Element derzeit im Vollbildmodus, protokolliert der `fullscreenchange`-Handler die `id` des Vollbildelements in der Konsole. Ist `document.fullscreenElement` gleich `null`, protokolliert der Code eine Meldung darüber, dass der Vollbildmodus verlassen wurde.

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

{{EmbedLiveSample("Logging fullscreenchange events", 640, 250, "", "", "", "fullscreen")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
- [`Element`](/de/docs/Web/API/Element): Ereignis [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
