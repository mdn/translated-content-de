---
title: "Element: fullscreenchange Ereignis"
short-title: fullscreenchange
slug: Web/API/Element/fullscreenchange_event
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Das `fullscreenchange`-Ereignis wird unmittelbar nach dem Wechsel eines {{domxref("Element")}} in den Vollbildmodus oder aus diesem heraus ausgelöst.

Dieses Ereignis wird an das `Element` gesendet, das in den Vollbildmodus wechselt oder diesen verlässt.

Um festzustellen, ob das `Element` in den Vollbildmodus wechselt oder diesen verlässt, prüfen Sie den Wert von {{domxref("Document.fullscreenElement")}}: Wenn dieser Wert `null` ist, verlässt das Element den Vollbildmodus, andernfalls tritt es in den Vollbildmodus ein.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

In diesem Beispiel wird ein Handler für das `fullscreenchange`-Ereignis zu dem Element hinzugefügt, dessen ID `fullscreen-div` ist.

Wenn der Benutzer auf die Schaltfläche "Toggle Fullscreen Mode" klickt, wird durch den `click`-Handler der Vollbildmodus für das `div` umgeschaltet. Falls `document.fullscreenElement` einen Wert hat, wird der Vollbildmodus verlassen. Andernfalls wechselt das `div` in den Vollbildmodus.

Denken Sie daran, dass der Status des Elements bereits geändert wurde, wenn das `fullscreenchange`-Ereignis behandelt wird. Wenn die Änderung auf den Vollbildmodus erfolgt, verweist `document.fullscreenElement` auf das Element, das sich jetzt im Vollbildmodus befindet. Andererseits, wenn `document.fullscreenElement` null ist, wurde der Vollbildmodus abgebrochen.

Das bedeutet für den Beispielcode, dass, wenn sich ein Element derzeit im Vollbildmodus befindet, der `fullscreenchange`-Handler die `id` des Vollbildelements in die Konsole protokolliert. Wenn `document.fullscreenElement` null ist, protokolliert der Code eine Nachricht, dass der Wechsel zum Verlassen des Vollbildmodus erfolgt.

### HTML

```html
<h1>fullscreenchange Ereignisbeispiel</h1>
<div id="fullscreen-div">
  <button id="toggle-fullscreen">Toggle Fullscreen Mode</button>
</div>
```

### JavaScript

```js
function fullscreenchanged(event) {
  // document.fullscreenElement weist auf das Element hin,
  // das sich im Vollbildmodus befindet, falls vorhanden. 
  // Andernfalls ist der Wert der Eigenschaft null.
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
// oder
el.onfullscreenchange = fullscreenchanged;

// Wenn die Umschalttaste geklickt wird, betreten/verlassen Sie den Vollbildmodus
document
  .getElementById("toggle-fullscreen")
  .addEventListener("click", (event) => {
    if (document.fullscreenElement) {
      // exitFullscreen ist nur auf dem Document-Objekt verfügbar.
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
