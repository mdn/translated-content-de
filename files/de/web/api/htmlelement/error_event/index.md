---
title: "HTMLElement: error Ereignis"
short-title: error
slug: Web/API/HTMLElement/error_event
l10n:
  sourceCommit: c87cce81bf1a0e3d4d010efb914d620b7f23e522
---

{{APIRef}}

Das `error` Ereignis wird auf einem Element ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann. Zum Beispiel, wenn ein Skript einen Ausführungsfehler hat oder ein Bild nicht gefunden wird oder ungültig ist.

Dieses Ereignis kann nicht abgebrochen werden und es wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von [`UIEvent`](/de/docs/Web/API/UIEvent), wenn es von einem Benutzerschnittstellenelement generiert wurde, oder eine Instanz von [`Event`](/de/docs/Web/API/Event) andernfalls.

{{InheritanceDiagram("UIEvent")}}

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <button id="img-error" type="button">Generate image error</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Event log:</label>
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
  log.textContent += `${event.type}: Loading image\n`;
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

  - Window: [`error`](/de/docs/Web/API/Window/error_event) Ereignis
  - HTMLElement: [`load`](/de/docs/Web/API/HTMLElement/load_event) Ereignis
