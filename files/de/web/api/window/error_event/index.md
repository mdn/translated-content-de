---
title: "Window: error event"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("UI Events")}}

Das `error` Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden konnte - zum Beispiel, wenn ein Skript einen Ausführungsfehler hatte.

Dieses Ereignis wird nur für synchron geworfene Skriptfehler generiert, wie zum Beispiel während des initialen Ladens oder innerhalb von Ereignis-Handlern. Wenn ein Promise zurückgewiesen wurde (einschließlich eines nicht abgefangenen `throw` innerhalb einer `async function`) und keine Ablehnungshandler angebunden wurden, wird stattdessen ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event) Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (message, source, lineno, colno, error) => { }
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` auf `Window` und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten die einzige Ereignishandler-Eigenschaft, die mehr als ein Argument erhält.

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von [`ErrorEvent`](/de/docs/Web/API/ErrorEvent), wenn es von einem Benutzeroberflächenelement generiert wurde, oder eine Instanz von [`Event`](/de/docs/Web/API/Event) andernfalls.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignishandler-Eigenschaft

Aus historischen Gründen hat die `onerror` Ereignishandler-Eigenschaft, nur auf `Window` und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten, ein anderes Verhalten als andere Ereignishandler-Eigenschaften.

Beachten Sie, dass dies nur für Handler gilt, die `onerror` zugewiesen sind, nicht für Handler, die mit `addEventListener()` hinzugefügt werden.

#### Abbruch

Die meisten Ereignishandler, die Ereignishandler-Eigenschaften zugewiesen sind, können das Standardverhalten des Ereignisses abbrechen, indem sie `false` aus dem Handler zurückgeben:

```js
textarea.onkeydown = () => false;
```

Für eine Ereignishandler-Eigenschaft, um das Standardverhalten des `error` Ereignisses von `Window` abzubrechen, muss sie jedoch stattdessen `true` zurückgeben:

```js
window.onerror = () => true;
```

Wenn abgebrochen wird, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird die Ausführung noch stoppen.

#### Argumente

Die Signatur des Ereignishandlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der Ereignishandler, der an `Window.addEventListener()` übergeben wird, erhält ein einziges [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt, während der `onerror` Handler fünf Argumente erhält, die zu den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts passen:

- `message`
  - : Ein String, der eine für Menschen lesbare Fehlermeldung beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > Im HTML-Attribut [content event handler attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) `onerror` auf dem {{HTMLElement("body")}}-Element wird der `error`-Ereignis-Listener `window` (nicht dem `<body>`-Element) zugeordnet. Für diesen Ereignishandler wird der erste Parameter `event` genannt, nicht `message`, obwohl er immer noch einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler generiert hat.
- `lineno`
  - : Eine Ganzzahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine Ganzzahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `error`
  - : Der Fehler, der geworfen wird. In der Regel ein {{jsxref("Error")}}-Objekt.

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
> Diese Parameternamen sind mit einem [HTML-Ereignis-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) beobachtbar, wobei der erste Parameter `event` anstelle von `message` genannt wird.

Dieses spezielle Verhalten tritt nur beim `onerror` Ereignishandler auf `window` auf. Der [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event)-Handler erhält immer noch ein einziges [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Generate script error</button>
  <img src="bad-image.jpg" class="bad-img" alt="I don't exist" />
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
  throw new Error("This is a script error");
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Dieses Ereignis auf `Element`-Zielen: [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
- [`Window`: `unhandledrejection` Ereignis](/de/docs/Web/API/Window/unhandledrejection_event)
