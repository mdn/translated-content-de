---
title: "Window: load event"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("UI Events")}}

Das **`load`** Ereignis wird ausgelöst, wenn die gesamte Seite geladen ist, einschließlich aller abhängigen Ressourcen wie Stylesheets, Skripten (einschließlich async, deferred und module scripts), iframes und Bilder, außer solchen, die [lazy geladen](/de/docs/Web/Performance/Guides/Lazy_loading#images_iframes_videos_and_audio) werden.
Dies steht im Gegensatz zum [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event), welches ausgelöst wird, sobald das Seiten-DOM geladen wurde, ohne darauf zu warten, dass die Ressourcen fertig geladen sind.

Dieses Ereignis kann nicht abgebrochen werden und führt keine Bubbling aus.

> [!NOTE]
> _Alle Ereignisse namens `load` werden nicht zum `Window` propagiert_, selbst wenn `bubbles` auf `true` gesetzt ist. Um `load`-Ereignisse auf dem `window` abzufangen, muss dieses `load`-Ereignis direkt an das `window` gesendet werden.

> [!NOTE]
> Das `load` Ereignis, das ausgelöst wird, wenn das Hauptdokument geladen ist, _wird_ auf das `window` gesendet, hat aber zwei veränderte Eigenschaften: `target` ist `document`, und `path` ist `undefined`. Diese zwei Eigenschaften sind aufgrund von Kompatibilität mit Legacy-Systemen verändert.

Um zu vermeiden, dass ein Skript ausgeführt wird, bevor das DOM, das es manipuliert, vollständig aufgebaut wurde, können Sie das Skript am Ende des Dokumentkörpers einfügen, unmittelbar vor dem schließenden `</body>` Tag, ohne es in einen Event-Listener einzuwickeln. Normalerweise sollten Sie das `load` Ereignis nur dazu verwenden, um auf das Laden von externen Ressourcen wie Bildern oder deferred scripts zu warten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

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

Dasselbe, aber mit der `onload` Event-Handler-Eigenschaft:

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
