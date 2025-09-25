---
title: "Dokument: readystatechange-Ereignis"
short-title: readystatechange
slug: Web/API/Document/readystatechange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Das **`readystatechange`**-Ereignis wird ausgelöst, wenn sich das [`readyState`](/de/docs/Web/API/Document/readyState)-Attribut eines Dokuments ändert.

Dieses Ereignis ist nicht abbrechbar und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("readystatechange", (event) => { })

onreadystatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Reload</button>
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

#### CSS

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

#reload {
  height: 2rem;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("load", (event) => {
  log.textContent = `${log.textContent}load\n`;
});

document.addEventListener("readystatechange", (event) => {
  log.textContent = `${log.textContent}readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent = `${log.textContent}DOMContentLoaded\n`;
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), [`load`](/de/docs/Web/API/Window/load_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), [`unload`](/de/docs/Web/API/Window/unload_event)
