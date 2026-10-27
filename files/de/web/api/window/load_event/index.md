---
title: "Window: load-Ereignis"
short-title: load
slug: Web/API/Window/load_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("UI Events")}}

Das **`load`**-Ereignis wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller benötigten Ressourcen wie Stylesheets, Skripten (auch asynchrone, verzögert geladene und Modulskripte), iframes und Bilder. Ausgenommen sind Ressourcen, die [verzögert geladen werden](/de/docs/Web/Performance/Guides/Lazy_loading#images_iframes_videos_and_audio).
Im Gegensatz dazu wird [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst, sobald das DOM der Seite geladen wurde, ohne darauf zu warten, dass alle Ressourcen vollständig geladen sind.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergereicht.

> [!NOTE]
> _Ereignisse mit dem Namen `load` werden nicht an `Window` weitergegeben_, selbst wenn `bubbles` mit `true` initialisiert wurde. Damit ein `load`-Ereignis auf `window` erfasst werden kann, muss es direkt auf `window` ausgelöst werden.

> [!NOTE]
> Das `load`-Ereignis, das beim Laden des Hauptdokuments ausgelöst wird, _wird_ auf `window` ausgelöst, hat jedoch zwei veränderte Eigenschaften: `target` ist `document` und `path` ist `undefined`. Diese beiden Eigenschaften wurden aus Gründen der Abwärtskompatibilität verändert.

Damit ein Skript nicht ausgeführt wird, bevor das DOM, das es verändert, vollständig aufgebaut ist, können Sie es am Ende des Dokumentkörpers unmittelbar vor dem schließenden `</body>`-Tag platzieren, ohne es in einen Event-Listener einzubinden. In der Regel sollten Sie das `load`-Ereignis nur verwenden, um auf das Laden externer Ressourcen wie Bilder oder verzögert geladene Skripte zu warten.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("load", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Geben Sie eine Meldung aus, wenn die Seite vollständig geladen ist:

```js
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
```

Dasselbe mit der `onload`-Event-Handler-Eigenschaft. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onload` hinzugefügte Event-Listener ersetzt werden:

```js
window.onload = (event) => {
  console.log("page is fully loaded");
};
```

### Interaktives Beispiel

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

- Die [readyState](/de/docs/Web/API/Document/readyState)-API von Document
- Verwandte Ereignisse:
  - [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)
  - [`unload`](/de/docs/Web/API/Window/unload_event)
