---
title: "Dokument: DOMContentLoaded-Ereignis"
short-title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef}}

Das **`DOMContentLoaded`**-Ereignis wird ausgelöst, wenn das HTML-Dokument vollständig geparst wurde und alle verzögerten Skripte ([`<script defer src="…">`](/de/docs/Web/HTML/Reference/Elements/script#defer) und [`<script type="module">`](/de/docs/Web/HTML/Reference/Elements/script#module)) heruntergeladen und ausgeführt wurden. Es wartet nicht darauf, dass andere Elemente wie Bilder, Unterrahmen und asynchrone Skripte das Laden abgeschlossen haben.

`DOMContentLoaded` wartet nicht auf das Laden von Stylesheets, jedoch warten verzögerte Skripte _schon_ auf Stylesheets und das `DOMContentLoaded`-Ereignis wird nach den verzögerten Skripten in die Warteschlange gestellt. Auch Skripte, die weder verzögert noch asynchron sind (z.B. `<script>`), warten darauf, dass bereits geparste Stylesheets geladen werden.

Ein anderes Ereignis, [`load`](/de/docs/Web/API/Window/load_event), sollte nur verwendet werden, um eine vollständig geladene Seite zu erkennen. Es ist ein häufiger Fehler, `load` zu verwenden, wo `DOMContentLoaded` geeigneter wäre.

Normalerweise können Sie, um zu vermeiden, dass ein Skript ausgeführt wird, bevor der DOM, den es manipuliert, vollständig konstruiert wurde, das Skript einfach am Ende des Dokumentkörpers, direkt vor dem schließenden `</body>`-Tag, platzieren, ohne es in einen Ereignis-Listener einzubetten.

Dieses Ereignis ist nicht stornierbar.

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

Manchmal kann es vorkommen, dass Ihr Skript ausgeführt wird, nachdem das `DOMContentLoaded`-Ereignis schon ausgelöst wurde. Dies geschieht typischerweise, wenn das Skript asynchron ausgeführt wird. Häufige Szenarien umfassen:

- Ein Modul, das dynamisch importiert wird, nachdem das Dokument bereits geladen ist.
- Ein Skript, das über `<script async>` eingebunden ist.
- Ein Skript, das dynamisch in die Seite eingefügt wird.
- Code, der nach einer asynchronen Operation fortsetzt, wie `await fetch(...)`, einschließlich nach einem Top-Level `await` in einem Modul.

In diesen Fällen sollten Sie den `readyState` des Dokuments prüfen, bevor Sie einen `DOMContentLoaded`-Listener hinzufügen, andernfalls wird Ihre Einrichtung möglicherweise gar nicht ausgeführt. Für synchrone Skripte (ohne `async`), die bereits im anfänglichen Markup vorhanden sind, tritt diese Situation nicht auf. Das Dokument wartet darauf, dass das Skript ausgeführt wird, bevor `DOMContentLoaded` ausgelöst wird, sodass Sie immer sicher sein können, dass die Einrichtung in dem Listener ausgeführt wird.

Betrachten Sie folgendes Skript, isoliert betrachtet:

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

Das Skript kann nicht erzwingen, wie es durch das HTML eingebunden wurde. Wenn es über `<script async>` eingebunden wird oder dynamisch eingefügt wird, hat `DOMContentLoaded` bereits ausgelöst, wenn es ausgeführt wird. Um sicherzustellen, dass `doSomething()` immer ausgeführt wird, wenn das Skript geladen wird, müssen wir zwei Wege haben: einen, der `doSomething` sofort ausführt, wenn das Dokument bereits geladen ist, und einen anderen, der `doSomething` ausführt, sobald das Dokument geladen ist.

> [!NOTE]
> Es gibt keine Race-Condition — es ist nicht möglich, dass das Dokument zwischen der `if`-Prüfung und dem `addEventListener()`-Aufruf geladen wird. JavaScript-Durchlauf-zu-Ende-Semantik bedeutet, dass, wenn das Dokument zu einem bestimmten Zeitpunkt der Event-Schleife lädt, es nicht bis zum nächsten Zyklus geladen werden kann, bei dem der `doSomething`-Handler bereits angehängt ist und ausgelöst wird.

> [!NOTE]
> `document.readyState` ist auf `"interactive"` gesetzt, nachdem der HTML-Parser abgeschlossen ist, aber vor der Ausführung von Skripten mit `defer` oder `type="module"`. `DOMContentLoaded` wird nach der Ausführung dieser Skripte, aber vor der Ausführung von Skripten mit `async` ausgelöst. `document.readyState` ist auf `"complete"` gesetzt, nachdem die asynchronen Skripte ausgeführt wurden. Dies bedeutet, dass während der Ausführung von verzögerten und Modul-Skripten `document.readyState` `"interactive"` ist, es aber immer noch möglich ist, `DOMContentLoaded`-Listener anzuhängen und auszulösen wie gewöhnlich. In der Praxis ist es in Ordnung, `doSomething()` etwas früher auszuführen, es sei denn, es hängt von einem globalen Zustand ab, der durch andere verzögertes/Modul-Skripte eingerichtet wurde.

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
