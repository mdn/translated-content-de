---
title: "Window: load-Event"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`load`**-Event wird ausgelöst, wenn die gesamte Seite geladen ist, einschließlich aller abhängigen Ressourcen wie Stylesheets, Skripte, `iframes` und Bilder, mit Ausnahme derer, die [lazy geladen](/de/docs/Web/Performance/Guides/Lazy_loading#images_and_iframes) werden.
Dies steht im Gegensatz zu [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), das ausgelöst wird, sobald das DOM der Seite geladen wurde, ohne darauf zu warten, dass die Ressourcen fertig geladen sind.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

> **Note:** _Alle Ereignisse mit dem Namen `load` werden nicht an `Window` weitergeleitet_, selbst wenn `bubbles` auf `true` initialisiert ist. Um `load`-Ereignisse auf dem `window` zu erfassen, muss dieses `load`-Ereignis direkt an das `window` gesendet werden.

> [!NOTE]
> Das `load`-Event, das ausgelöst wird, wenn das Hauptdokument geladen ist, _wird_ auf dem `window` ausgelöst, hat jedoch zwei veränderte Eigenschaften: `target` ist `document` und `path` ist `undefined`. Diese beiden Eigenschaften sind aufgrund der Einhaltung älterer Standards verändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Protokollieren Sie eine Nachricht, wenn die Seite vollständig geladen ist:

```js
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
```

Dasselbe, aber mit der `onload`-Ereignishandler-Eigenschaft:

```js
window.onload = (event) => {
  console.log("page is fully loaded");
};
```

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
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) => {
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += `DOMContentLoaded\n`;
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Document [readyState](/de/docs/Web/API/Document/readyState) API
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
