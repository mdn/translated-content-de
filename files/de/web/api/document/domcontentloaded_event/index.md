---
title: "Dokument: DOMContentLoaded-Ereignis"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef}}

Das **`DOMContentLoaded`**-Ereignis wird ausgelöst, wenn das HTML-Dokument vollständig analysiert wurde und alle Deferred-Skripte ([`<script defer src="…">`](/de/docs/Web/HTML/Element/script#defer) und [`<script type="module">`](/de/docs/Web/HTML/Element/script#module)) heruntergeladen und ausgeführt wurden. Es wartet nicht auf andere Elemente wie Bilder, Unter-Frames und asynchrone Skripte, um das Laden zu beenden.

`DOMContentLoaded` wartet nicht darauf, dass Stylesheets geladen werden, allerdings warten Deferred-Skripte _auf_ Stylesheets, und das `DOMContentLoaded`-Ereignis wird nach den Deferred-Skripten in die Warteschlange gestellt. Auch Skripte, die weder deferred noch async sind (z. B. `<script>`), warten darauf, dass bereits analysierte Stylesheets geladen werden.

Ein anderes Ereignis, {{domxref("Window/load_event", "load")}}, sollte nur verwendet werden, um eine vollständig geladene Seite zu erkennen. Es ist ein häufiger Fehler, `load` zu verwenden, wo `DOMContentLoaded` angemessener wäre.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("DOMContentLoaded", (event) => {});
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

### Grundlegende Verwendung

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM vollständig geladen und analysiert");
});
```

### Verzögertes DOMContentLoaded

```html
<script>
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM vollständig geladen und analysiert");
  });

  for (let i = 0; i < 1_000_000_000; i++);
  // Dieses synchrone Skript verzögert das Parsen des DOM,
  // sodass das DOMContentLoaded-Ereignis später ausgelöst wird.
</script>
```

### Überprüfung, ob das Laden bereits abgeschlossen ist

`DOMContentLoaded` könnte ausgelöst werden, bevor Ihr Skript die Möglichkeit hat, zu laufen, daher ist es ratsam, vor dem Hinzufügen eines Listeners zu überprüfen.

```js
function doSomething() {
  console.info("DOM geladen");
}

if (document.readyState === "loading") {
  // Laden ist noch nicht abgeschlossen
  document.addEventListener("DOMContentLoaded", doSomething);
} else {
  // `DOMContentLoaded` wurde bereits ausgelöst
  doSomething();
}
```

> [!NOTE]
> Es gibt kein Race Condition hier – es ist nicht möglich, dass das Dokument zwischen der `if`-Überprüfung und dem `addEventListener()`-Aufruf geladen wird. JavaScript hat die Semantik des Durchgangs zur Fertigstellung, was bedeutet, dass wenn das Dokument zu einem bestimmten Tick der Ereignisschleife geladen wird, es nicht bis zum nächsten Zyklus geladen werden kann, zu welchem Zeitpunkt der `doSomething`-Handler bereits angehängt ist und ausgelöst wird.

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <button id="reload" type="button">Neu laden</button>
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

- Verwandte Ereignisse: {{domxref("Window/load_event", "load")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/beforeunload_event", "beforeunload")}}, {{domxref("Window/unload_event", "unload")}}
