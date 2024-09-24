---
title: "HTMLElement: error-Ereignis"
short-title: error
slug: Web/API/HTMLElement/error_event
l10n:
  sourceCommit: c87cce81bf1a0e3d4d010efb914d620b7f23e522
---

{{APIRef}}

Das `error`-Ereignis wird auf einem Element ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden wird oder ungültig ist.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von {{domxref("UIEvent")}}, wenn es von einem Benutzeroberflächenelement erzeugt wurde, oder eine Instanz von {{domxref("Event")}}, andernfalls.

{{InheritanceDiagram("UIEvent")}}

## Beispiele

### Lebendes Beispiel

#### HTML

```html
<div class="controls">
  <button id="img-error" type="button">Bildfehler erzeugen</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Ereignisprotokoll:</label>
  <textarea
    readonly
    class="event-log-contents"
    rows="8"
    cols="30"
    id="eventLog"></textarea>
</div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "control log";
}

.controls {
  grid-area: control;
  display: flex;
  align-items: center;
  justify-content: center;
}

.event-log {
  grid-area: log;
}

.event-log-contents {
  resize: none;
}

label,
button {
  display: block;
}

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");

const badImg = document.querySelector(".bad-img");
badImg.addEventListener("error", (event) => {
  log.textContent += `${event.type}: Bild wird geladen\n`;
  console.log(event);
});

const imgError = document.querySelector("#img-error");
imgError.addEventListener("click", () => {
  badImg.setAttribute("src", "i-dont-exist");
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse

  - Fenster: {{domxref("Window/error_event", "error")}} Ereignis
  - HTMLElement: {{domxref("HTMLElement/load_event", "load")}} Ereignis
