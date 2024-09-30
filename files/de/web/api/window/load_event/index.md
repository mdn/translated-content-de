---
title: "Window: load Event"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}

Das **`load`** Event wird ausgelöst, wenn die gesamte Seite geladen ist, einschließlich aller abhängigen Ressourcen wie Stylesheets, Skripten, iframes und Bildern, mit Ausnahme derjenigen, die [lazy geladen](/de/docs/Web/Performance/Lazy_loading#images_and_iframes) werden.
Dies steht im Gegensatz zu [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), welches ausgelöst wird, sobald das DOM der Seite geladen ist, ohne darauf zu warten, dass die Ressourcen zu Ende geladen sind.

Dieses Ereignis ist nicht abbrechbar und wird nicht nach oben weitergereicht.

> **Hinweis:** _Alle Ereignisse, die `load` genannt werden, werden nicht an `Window` weitergereicht_, selbst wenn `bubbles` auf `true` initialisiert wird. Um `load` Ereignisse im Fenster zu erfassen, muss dieses `load` Ereignis direkt zum Fenster gesendet werden.

> [!NOTE]
> Das `load` Ereignis, das ausgesendet wird, wenn das Hauptdokument geladen wurde, _wird_ auf dem `window` gesendet, hat aber zwei veränderte Eigenschaften: `target` ist `document` und `path` ist `undefined`. Diese beiden Eigenschaften sind aufgrund von älteren Konventionen verändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
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

Dasselbe, aber mit der `onload` Ereignishandlereigenschaft:

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
