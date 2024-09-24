---
title: "Dokument: fullscreenchange Ereignis"
short-title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das `fullscreenchange` Ereignis wird unmittelbar nach dem Wechsel des Browsers in den oder aus dem Vollbildmodus ausgelöst.

Das Ereignis wird an das `Element` gesendet, das in den oder aus dem Vollbildmodus wechselt, und dieses Ereignis "blubbert" dann bis zum `Dokument`.

Um herauszufinden, ob das `Element` in den Vollbildmodus wechselt oder ihn verlässt, überprüfen Sie den Wert von {{domxref("Document.fullscreenElement")}}: Wenn dieser Wert `null` ist, verlässt das Element den Vollbildmodus, andernfalls wechselt es in den Vollbildmodus.

Dieses Ereignis ist nicht stornierbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### `fullscreenchange` Ereignisse protokollieren

In diesem Beispiel wird ein Handler für das `fullscreenchange` Ereignis zum {{domxref("Document")}} hinzugefügt.

Wenn der Benutzer auf die Schaltfläche „Vollbildmodus umschalten“ klickt, schaltet der `click` Handler den Vollbildmodus für das `div` um. Wenn `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wird das `div` in den Vollbildmodus versetzt.

Denken Sie daran, dass der Status des Elements bereits geändert wurde, wenn das `fullscreenchange` Ereignis behandelt wird. Wenn die Änderung in den Vollbildmodus erfolgt, zeigt `document.fullscreenElement` auf das Element, das sich jetzt im Vollbildmodus befindet. Wenn hingegen `document.fullscreenElement` null ist, wurde der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass der `fullscreenchange` Handler die `id` des Vollbildelements in die Konsole protokolliert, wenn sich ein Element derzeit im Vollbildmodus befindet. Ist `document.fullscreenElement` null, protokolliert der Code eine Nachricht, dass der Wechsel aus dem Vollbildmodus erfolgt.

#### HTML

```html
<h1>fullscreenchange Ereignisbeispiel</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">Vollbildmodus umschalten</button>
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
  // document.fullscreenElement wird auf das Element zeigen,
  // das im Vollbildmodus ist, falls vorhanden. Ist kein solches
  // Element vorhanden, ist der Wert der Eigenschaft null.
  if (document.fullscreenElement) {
    log(`Element: ${document.fullscreenElement.id} im Vollbildmodus betreten.`);
  } else {
    log("Vollbildmodus wird verlassen.");
  }
}

document.addEventListener("fullscreenchange", fullscreenchanged);

// Wenn der Umschaltknopf gedrückt wird, Vollbild ein-/ausschalten
document.getElementById("toggle-fullscreen").addEventListener("click", () => {
  if (document.fullscreenElement) {
    // exitFullscreen ist nur auf dem Document-Objekt verfügbar.
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

- {{domxref("Document/fullscreenerror_event", "fullscreenerror")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} Ereignis
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
