---
title: "Dokument: DOMContentLoaded-Ereignis"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("DOM")}}

Das **`DOMContentLoaded`**-Ereignis wird ausgelöst, wenn das HTML-Dokument vollständig geparst wurde und alle verzögert ausgeführten Skripte ([`<script defer src="…">`](/de/docs/Web/HTML/Reference/Elements/script#defer) und [`<script type="module">`](/de/docs/Web/HTML/Reference/Elements/script#module)) heruntergeladen und ausgeführt wurden. Es wartet nicht darauf, dass andere Ressourcen wie Bilder, Subframes und asynchrone Skripte vollständig geladen sind.

`DOMContentLoaded` wartet nicht darauf, dass Stylesheets geladen werden. Verzögert ausgeführte Skripte warten _jedoch_ auf Stylesheets, und das `DOMContentLoaded`-Ereignis wird erst nach diesen Skripten in die Warteschlange eingereiht. Auch Skripte, die weder verzögert noch asynchron ausgeführt werden (z. B. `<script>`), warten darauf, dass bereits geparste Stylesheets geladen werden.

Ein anderes Ereignis, [`load`](/de/docs/Web/API/Window/load_event), sollte nur verwendet werden, um zu erkennen, dass eine Seite vollständig geladen wurde. Es ist ein häufiger Fehler, `load` zu verwenden, obwohl `DOMContentLoaded` besser geeignet wäre.

Um zu vermeiden, dass ein Skript ausgeführt wird, bevor das DOM, das es verändert, vollständig aufgebaut ist, können Sie das Skript in der Regel einfach am Ende des Dokumentkörpers unmittelbar vor dem schließenden `</body>`-Tag platzieren, ohne es in einen Event-Listener einzubinden.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("DOMContentLoaded", (event) => { })
```

> [!NOTE]
> Für dieses Ereignis gibt es keine `onDOMContentLoaded`-Event-Handler-Eigenschaft.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Verwendung

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

### DOMContentLoaded verzögern

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

### Prüfen, ob der Ladevorgang bereits abgeschlossen ist

Manchmal wird Ihr Skript erst ausgeführt, nachdem das `DOMContentLoaded`-Ereignis bereits ausgelöst wurde. Das passiert typischerweise, wenn das Skript asynchron ausgeführt wird. Häufige Fälle sind:

- Ein Modul, das dynamisch importiert wird, nachdem das Dokument bereits geladen wurde.
- Ein Skript, das über `<script async>` eingebunden wird.
- Ein Skript, das dynamisch in die Seite eingefügt wird.
- Code, dessen Ausführung nach einer asynchronen Operation wie `await fetch(...)` fortgesetzt wird, einschließlich nach einem Top-Level-`await` in einem Modul.

In diesen Fällen sollten Sie `readyState` des Dokuments prüfen, bevor Sie einen `DOMContentLoaded`-Listener hinzufügen. Andernfalls wird Ihre Initialisierungslogik möglicherweise überhaupt nicht ausgeführt. Bei synchronen Skripten (ohne `async`), die bereits im ursprünglichen Markup enthalten sind, tritt diese Situation nicht auf. Das Dokument wartet mit dem Auslösen von `DOMContentLoaded`, bis das Skript ausgeführt wurde. Daher können Sie sicher sein, dass die Initialisierungslogik im Listener ausgeführt wird.

Betrachten Sie die folgende Skriptdatei für sich genommen:

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

Das Skript kann nicht bestimmen, wie es in das HTML eingebunden wird. Wenn es über `<script async>` eingebunden oder dynamisch eingefügt wird, kann `DOMContentLoaded` zum Zeitpunkt seiner Ausführung bereits ausgelöst worden sein. Damit `doSomething()` beim Laden des Skripts immer ausgeführt wird, benötigen wir zwei Wege: einen, der `doSomething` sofort ausführt, wenn das Dokument bereits geladen ist, und einen weiteren, der `doSomething` ausführt, sobald das Dokument geladen ist.

> [!NOTE]
> Hier gibt es keine Race Condition: Das Dokument kann nicht zwischen der `if`-Prüfung und dem Aufruf von `addEventListener()` geladen werden. JavaScript folgt der Run-to-Completion-Semantik. Das bedeutet: Wenn das Dokument in einem bestimmten Durchlauf der Ereignisschleife noch geladen wird, kann es erst im nächsten Durchlauf vollständig geladen sein. Zu diesem Zeitpunkt ist der `doSomething`-Handler bereits registriert und wird aufgerufen.

> [!NOTE]
> `document.readyState` wird nach Abschluss des HTML-Parsers, aber vor der Ausführung von Skripten mit `defer` oder `type="module"` auf `"interactive"` gesetzt. `DOMContentLoaded` wird nach der Ausführung dieser Skripte ausgelöst, aber vor der Ausführung von Skripten mit `async`. Nach der Ausführung asynchroner Skripte wird `document.readyState` auf `"complete"` gesetzt. Das bedeutet, dass `document.readyState` während der Ausführung verzögert ausgeführter Skripte und von Modulskripten `"interactive"` ist. Dennoch können `DOMContentLoaded`-Listener registriert werden, die dann wie üblich aufgerufen werden. In der Praxis ist es unproblematisch, `doSomething()` etwas früher auszuführen, sofern die Funktion nicht von einem globalen Zustand abhängt, der durch andere verzögert ausgeführte Skripte oder Modulskripte eingerichtet wird.

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
