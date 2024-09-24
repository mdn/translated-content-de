---
title: "Window: load Ereignis"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}

Das **`load`** Ereignis wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets, Skripte, iframes und Bilder, mit Ausnahme derjenigen, die [lazy geladen](/de/docs/Web/Performance/Lazy_loading#images_and_iframes) werden.
Dies steht im Gegensatz zu {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, das ausgelöst wird, sobald das DOM der Seite geladen wurde, ohne darauf zu warten, dass die Ressourcen fertig geladen sind.

Dieses Ereignis ist nicht stornierbar und löst keine Bubbling-Effekte aus.

> **Hinweis:** _Alle Ereignisse, die `load` genannt sind, werden nicht auf `Window` weitergeleitet_, selbst wenn `bubbles` auf `true` gesetzt ist. Um `load`-Ereignisse am `window` zu erfassen, muss dieses `load`-Ereignis direkt an das `window` gesendet werden.

> [!NOTE]
> Das `load`-Ereignis, das ausgelöst wird, wenn das Hauptdokument geladen ist, _wird_ auf dem `window` ausgelöst, hat aber zwei veränderte Eigenschaften: `target` ist `document`, und `path` ist `undefined`. Diese beiden Eigenschaften werden aus Gründen der alten Konformität verändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Eine Nachricht protokollieren, wenn die Seite vollständig geladen ist:

```js
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
```

Dasselbe, aber Verwendung der `onload`-Event-Handler-Eigenschaft:

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
  <label for="eventLog">Event-Log:</label>
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
  - {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - {{domxref("Document/readystatechange_event", "readystatechange")}}
  - {{domxref("Window/beforeunload_event", "beforeunload")}}
  - {{domxref("Window/unload_event", "unload")}}
