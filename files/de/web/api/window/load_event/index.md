---
title: "Window: load event"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef}}

Das **`load`**-Ereignis wird ausgelöst, wenn die gesamte Seite geladen ist, einschließlich aller abhängigen Ressourcen wie Stylesheets, Skripte, iframes und Bilder, mit Ausnahme derer, die [lazy geladen](/de/docs/Web/Performance/Guides/Lazy_loading#images_and_iframes) werden.
Das steht im Gegensatz zu [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), das ausgelöst wird, sobald der DOM der Seite geladen ist, ohne darauf zu warten, dass Ressourcen vollständig geladen sind.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergegeben.

> [!NOTE] > _Alle Ereignisse namens `load` werden nicht auf das `Window` übertragen_, auch wenn `bubbles` auf `true` gesetzt ist. Um `load`-Ereignisse auf `window` zu erfassen, muss dieses `load`-Ereignis direkt an das `window` gesendet werden.

> [!NOTE]
> Das `load`-Ereignis, das gesendet wird, wenn das Hauptdokument geladen ist, _wird_ auf dem `window` gesendet, hat jedoch zwei veränderte Eigenschaften: `target` ist `document`, und `path` ist `undefined`. Diese beiden Eigenschaften sind aufgrund von Legacy-Konformität verändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

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

Dasselbe, aber mit der `onload`-Ereignishandlereigenschaft:

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
