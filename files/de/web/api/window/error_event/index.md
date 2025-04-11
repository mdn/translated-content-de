---
title: "Window: error event"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Das `error`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden konnte – zum Beispiel, wenn ein Skript einen Ausführungsfehler hat.

Dieses Ereignis wird nur für synchron geworfene Skriptfehler generiert, wie während des initialen Ladens oder innerhalb von Ereignis-Handlern. Wenn ein Promise abgelehnt wurde (einschließlich eines nicht abgefangenen `throw` innerhalb einer `async function`) und keine Ablehnungshandler angehängt wurden, wird stattdessen ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (message, source, lineno, colno, error) => {};
```

> [!NOTE]
> Aus historischen Gründen empfängt `onerror` auf `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten als einzige Ereignis-Handler-Eigenschaft mehr als ein Argument.

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von [`ErrorEvent`](/de/docs/Web/API/ErrorEvent), wenn es von einem Benutzeroberflächenelement generiert wurde, oder eine Instanz von [`Event`](/de/docs/Web/API/Event) andernfalls.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignis-Handler-Eigenschaft

Aus historischen Gründen hat die `onerror`-Ereignis-Handler-Eigenschaft, nur auf `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten, ein anderes Verhalten als andere Ereignis-Handler-Eigenschaften.

Beachten Sie, dass dies nur für Handler gilt, die `onerror` zugewiesen sind, nicht für Handler, die mit `addEventListener()` hinzugefügt wurden.

#### Stornierung

Die meisten Ereignis-Handler, die zu Ereignis-Handler-Eigenschaften zugewiesen sind, können das Standardverhalten des Ereignisses abbrechen, indem sie `false` vom Handler zurückgeben:

```js
textarea.onkeydown = () => false;
```

Um jedoch das Standardverhalten des `error`-Ereignisses von `Window` zu stornieren, muss der Ereignis-Handler stattdessen `true` zurückgeben:

```js
window.onerror = () => true;
```

Wenn storniert, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird dennoch gestoppt.

#### Argumente

Die Signatur des Ereignis-Handlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der an `Window.addEventListener()` übergebene Ereignis-Handler erhält ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt, während der `onerror`-Handler fünf Argumente erhält, die den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts entsprechen:

- `message`

  - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > In HTML hängt das [content event handler attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) `onerror` am {{HTMLElement("body")}}-Element `error`-Ereignis-Listener an `window` (nicht am `<body>`-Element). Für diesen Ereignishandler wird der erste Parameter `event` genannt, nicht `message`, obwohl er immer noch einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler generiert hat.
- `lineno`
  - : Eine Ganzzahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine Ganzzahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `error`
  - : Der geworfene Fehler. Üblicherweise ein {{jsxref("Error")}}-Objekt.

```js
window.onerror = (a, b, c, d, e) => {
  console.log(`message: ${a}`);
  console.log(`source: ${b}`);
  console.log(`lineno: ${c}`);
  console.log(`colno: ${d}`);
  console.log(`error: ${e}`);

  return true;
};
```

> [!NOTE]
> Diese Parameternamen sind mit einem [HTML event handler attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) beobachtbar, bei dem der erste Parameter `event` statt `message` genannt wird.

Dieses spezielle Verhalten tritt nur für den `onerror`-Ereignis-Handler auf `window` auf. Der [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event)-Handler erhält immer noch ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img class="bad-img" />
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

button {
  height: 2rem;
  margin: 0.5rem;
}

img {
  width: 0;
  height: 0;
}
```

#### JavaScript

```js
const log = document.querySelector(".event-log-contents");

window.addEventListener("error", (event) => {
  log.textContent = `${log.textContent}${event.type}: ${event.message}\n`;
  console.log(event);
});

const scriptError = document.querySelector("#script-error");
scriptError.addEventListener("click", () => {
  const badCode = "const s;";
  eval(badCode);
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Dieses Ereignis bei `Element`-Zielen: [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis
- [`Window`: `unhandledrejection`-Ereignis](/de/docs/Web/API/Window/unhandledrejection_event)
