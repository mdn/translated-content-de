---
title: "Dokument: DOMContentLoaded-Ereignis"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Das **`DOMContentLoaded`**-Ereignis wird ausgelöst, wenn das HTML-Dokument vollständig analysiert wurde und alle verzögerten Skripte ([`<script defer src="…">`](/de/docs/Web/HTML/Reference/Elements/script#defer) und [`<script type="module">`](/de/docs/Web/HTML/Reference/Elements/script#module)) heruntergeladen und ausgeführt wurden. Es wartet nicht auf andere Dinge wie Bilder, Unterrahmen oder asynchrone Skripte.

`DOMContentLoaded` wartet nicht auf Stylesheets, jedoch warten verzögerte Skripte _schon_ auf Stylesheets, und das `DOMContentLoaded`-Ereignis wird nach den verzögerten Skripten in die Warteschlange gestellt. Auch Skripte, die nicht verzögert oder asynchron sind (z.B. `<script>`), warten darauf, dass bereits analysierte Stylesheets geladen werden.

Ein anderes Ereignis, [`load`](/de/docs/Web/API/Window/load_event), sollte nur verwendet werden, um eine vollständig geladene Seite zu erkennen. Es ist ein häufiger Fehler, `load` zu verwenden, wo `DOMContentLoaded` angemessener wäre.

Üblicherweise können Sie, um zu vermeiden, dass ein Skript ausgeführt wird, bevor der von ihm manipulierte DOM vollständig aufgebaut ist, das Skript einfach am Ende des Dokuments, unmittelbar vor dem schließenden `</body>`-Tag, platzieren, ohne es in einen Ereignis-Listener zu packen.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("DOMContentLoaded", (event) => { })
```

> [!NOTE]
> Es gibt keine `onDOMContentLoaded`-Ereignishandler-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Verwendung

```js
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
```

### Verzögern von DOMContentLoaded

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

Manchmal kann es vorkommen, dass Ihr Skript ausgeführt wird, nachdem das `DOMContentLoaded`-Ereignis bereits ausgelöst wurde. Dies geschieht typischerweise, wenn das Skript asynchron ausgeführt wird. Häufige Szenarien umfassen:

- Ein Modul, das dynamisch importiert wird, nachdem das Dokument bereits geladen ist.
- Ein Skript, das über `<script async>` eingebunden wird.
- Ein Skript, das dynamisch in die Seite eingefügt wird.
- Code, der nach einer asynchronen Operation wieder fortgeführt wird, wie `await fetch(...)`, einschließlich nach einem Top-Level await in einem Modul.

In diesen Fällen sollten Sie den `readyState` des Dokuments überprüfen, bevor Sie einen `DOMContentLoaded`-Listener hinzufügen, da Ihre Einrichtung sonst möglicherweise nicht ausgeführt wird. Für synchrone Skripte (ohne `async`), die bereits im anfänglichen Markup vorhanden sind, tritt diese Situation nicht auf. Das Dokument wartet darauf, dass das Skript ausgeführt wird, bevor `DOMContentLoaded` ausgelöst wird, sodass Sie sich immer sicher sein können, dass die Einrichtung im Listener ausgeführt wird.

Betrachten Sie die folgende Skriptdatei isoliert:

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

Das Skript kann nicht erzwingen, wie es durch das HTML eingebunden wird. Wenn es über `<script async>` eingebunden oder dynamisch eingefügt wird, dann wird beim Ausführen das `DOMContentLoaded`-Ereignis bereits ausgelöst. Um sicherzustellen, dass `doSomething()` immer ausgeführt wird, wenn das Skript geladen wird, müssen wir zwei Pfade haben: einen, der `doSomething` sofort ausführt, wenn das Dokument bereits geladen ist, und einen anderen, der `doSomething` ausführt, sobald das Dokument geladen ist.

> [!NOTE]
> Hier gibt es keine Race-Bedingung — es ist nicht möglich, dass das Dokument zwischen der `if`-Überprüfung und dem `addEventListener()`-Aufruf geladen wird. JavaScript hat Lauf-zur-Vollendung-Semantik, was bedeutet, dass, wenn das Dokument in einem bestimmten Tick der Ereignisschleife lädt, es erst im nächsten Zyklus geladen sein kann, zu dem Zeitpunkt, an dem der `doSomething`-Handler bereits angehängt ist und ausgelöst wird.

> [!NOTE]
> `document.readyState` wird auf `"interactive"` gesetzt, nachdem der HTML-Parser beendet ist, aber bevor die Ausführung von Skripten mit `defer` oder `type="module"`. `DOMContentLoaded` wird nach der Ausführung dieser Skripte ausgelöst, aber vor der Ausführung von Skripten mit `async`. `document.readyState` wird auf `"complete"` gesetzt, nachdem asynchrone Skripte ausgeführt wurden. Das bedeutet, dass während der Ausführung von verzögerten und Modulscripten `document.readyState` `"interactive"` ist, es jedoch weiterhin möglich ist, `DOMContentLoaded`-Listener anzuhängen und sie wie gewohnt auszulösen. In der Praxis ist es in Ordnung, `doSomething()` etwas früher auszuführen, es sei denn, es hängt von einem globalen Zustand ab, der von anderen verzögerten/Modulskripten eingerichtet wurde.

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
