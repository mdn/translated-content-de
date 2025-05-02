---
title: "Dokument: DOMContentLoaded Ereignis"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`DOMContentLoaded`** Ereignis wird ausgelöst, wenn das HTML-Dokument vollständig geparst wurde und alle verzögerten Skripte ([`<script defer src="…">`](/de/docs/Web/HTML/Reference/Elements/script#defer) und [`<script type="module">`](/de/docs/Web/HTML/Reference/Elements/script#module)) heruntergeladen und ausgeführt wurden. Es wartet nicht darauf, dass andere Elemente wie Bilder, Subframes oder asynchrone Skripte das Laden abgeschlossen haben.

`DOMContentLoaded` wartet nicht auf Stylesheets, jedoch warten verzögerte Skripte _auf_ Stylesheets, und das `DOMContentLoaded` Ereignis wird in die Warteschlange nach verzögerten Skripten gestellt. Auch Skripte, die nicht verzögert oder asynchron sind (z. B. `<script>`), warten darauf, dass bereits geparste Stylesheets geladen werden.

Ein anderes Ereignis, [`load`](/de/docs/Web/API/Window/load_event), sollte nur verwendet werden, um eine vollständig geladene Seite zu erkennen. Es ist ein häufiger Fehler, `load` zu verwenden, wo `DOMContentLoaded` angemessener wäre.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("DOMContentLoaded", (event) => { })
```

> [!NOTE]
> Es gibt keine `onDOMContentLoaded` Ereignishandler-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Verwendung

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

### Verzögerung von DOMContentLoaded

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // This synchronous script is going to delay parsing of the DOM,
  // so the DOMContentLoaded event is going to launch later.
</script>
```

### Überprüfen, ob das Laden bereits abgeschlossen ist

`DOMContentLoaded` kann ausgelöst werden, bevor Ihr Skript eine Chance zur Ausführung hat, daher ist es klug, vor dem Hinzufügen eines Listeners zu überprüfen.

```js
function doSomething() {
  console.info("DOM loaded");
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` has already fired
  doSomething();
}
```

> [!NOTE]
> Es gibt hier keine Race-Condition — es ist nicht möglich, dass das Dokument zwischen der `if`-Überprüfung und dem `addEventListener()`-Aufruf geladen wird. JavaScript hat Ausführungssemantiken, was bedeutet, dass, wenn das Dokument zu einem bestimmten Zeitpunkt des Event-Loops lädt, es erst im nächsten Zyklus geladen sein kann, zu welchem Zeitpunkt der `doSomething`-Handler bereits angehängt ist und ausgelöst wird.

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
  log.textContent += "DOMContentLoaded\n";
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '160px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`load`](/de/docs/Web/API/Window/load_event), [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event), [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event), [`unload`](/de/docs/Web/API/Window/unload_event)
