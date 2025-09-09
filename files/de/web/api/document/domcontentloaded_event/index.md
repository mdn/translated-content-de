---
title: "Dokument: DOMContentLoaded-Ereignis"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: 9d7911a8a4b9bbe16a2303fb376c9dec3e33846f
---

{{APIRef}}

Das **`DOMContentLoaded`**-Ereignis wird ausgelöst, wenn das HTML-Dokument vollständig geparst wurde und alle zurückgestellten Skripte ([`<script defer src="…">`](/de/docs/Web/HTML/Reference/Elements/script#defer) und [`<script type="module">`](/de/docs/Web/HTML/Reference/Elements/script#module)) heruntergeladen und ausgeführt wurden. Es wartet nicht darauf, dass andere Dinge wie Bilder, Subframes und asynchrone Skripte das Laden beenden.

`DOMContentLoaded` wartet nicht darauf, dass Stylesheets laden, jedoch warten zurückgestellte Skripte _auf_ Stylesheets, und das `DOMContentLoaded`-Ereignis wird in die Warteschlange nach den zurückgestellten Skripten eingereiht. Auch Skripte, die nicht zurückgestellt oder asynchron sind (z. B. `<script>`), werden warten, bis bereits geparste Stylesheets geladen sind.

Ein anderes Ereignis, [`load`](/de/docs/Web/API/Window/load_event), sollte nur verwendet werden, um eine vollständig geladene Seite zu erkennen. Es ist ein häufiger Fehler, `load` zu verwenden, wo `DOMContentLoaded` passender wäre.

Dieses Ereignis lässt sich nicht abbrechen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("DOMContentLoaded", (event) => { })
```

> [!NOTE]
> Es gibt keine `onDOMContentLoaded` Ereignis-Handler-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Grundlegende Nutzung

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

Manchmal kann es vorkommen, dass Ihr Skript ausgeführt wird, nachdem das `DOMContentLoaded`-Ereignis bereits ausgelöst wurde. Dies geschieht typischerweise, wenn das Skript asynchron läuft. Häufige Szenarien sind:

- Ein Modul, das dynamisch importiert wird, nachdem das Dokument bereits geladen ist.
- Ein Skript, das über `<script async>` eingebunden ist.
- Ein Skript, das dynamisch in die Seite eingefügt wird.
- Code, der nach einer asynchronen Operation fortgesetzt wird, wie `await fetch(...)`, einschließlich nach einem top-level await in einem Modul.

In diesen Fällen sollten Sie den `readyState` des Dokuments überprüfen, bevor Sie einen `DOMContentLoaded`-Listener hinzufügen, sonst könnte Ihre Initialisierungslogik überhaupt nicht ausgeführt werden. Für synchrone Skripte (ohne `async`), die bereits im initialen Markup vorhanden sind, tritt diese Situation nicht auf. Das Dokument wartet darauf, dass das Skript ausgeführt wird, bevor `DOMContentLoaded` ausgelöst wird, sodass Sie immer sicherstellen können, dass die Setup-Logik im Listener ausgeführt wird.

Betrachten Sie das folgende Skript isoliert:

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

Das Skript kann nicht erzwingen, wie es durch das HTML eingebunden wird. Wenn es über `<script async>` eingebunden wird oder dynamisch injiziert wird, dann hat `DOMContentLoaded` bereits ausgelöst, wenn es ausgeführt wird. Um sicherzustellen, dass `doSomething()` immer ausgeführt wird, wenn das Skript geladen wird, benötigen wir zwei Wege: Einen, der `doSomething` sofort ausführt, falls das Dokument bereits geladen ist, und einen anderen, der `doSomething` ausführt, sobald das Dokument geladen ist.

> [!NOTE]
> Hier gibt es kein Rennen – es ist nicht möglich, dass das Dokument zwischen der `if`-Prüfung und dem `addEventListener()`-Aufruf geladen wird. JavaScript hat run-to-completion-Semantik, was bedeutet, dass, wenn das Dokument zu einem bestimmten Zeitpunkt im Event-Loop geladen wird, es nicht bis zum nächsten Zyklus geladen werden kann, zu dem Zeitpunkt, zu dem der `doSomething`-Handler bereits angehängt und ausgelöst wird.

> [!NOTE]
> `document.readyState` wird auf `"interactive"` gesetzt, nachdem der HTML-Parser abgeschlossen ist, aber vor der Ausführung von Skripten mit `defer` oder `type="module"`. `DOMContentLoaded` wird nach der Ausführung dieser Skripte ausgelöst, aber vor der Ausführung von Skripten mit `async`. `document.readyState` wird auf `"complete"` gesetzt, nachdem die asynchronen Skripte ausgeführt sind. Das bedeutet, dass während der Ausführung von zurückgestellten und Modul-Skripten `document.readyState` `"interactive"` ist, es jedoch weiterhin möglich ist, `DOMContentLoaded`-Listener anzuhängen und sie wie üblich auszulösen. In der Praxis ist es in Ordnung, `doSomething()` etwas früher auszuführen, es sei denn, es ist auf einen globalen Zustand angewiesen, der durch andere zurückgestellte/Modul-Skripte eingerichtet wird.

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
