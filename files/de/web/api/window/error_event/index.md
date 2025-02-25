---
title: "Window: error event"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: 19185ae9656a62e0b6527a54828e1200a827e3dd
---

{{APIRef}}

Das `error` Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen oder verwendet werden konnte — zum Beispiel, wenn ein Skript einen Ausführungsfehler hat.

Dieses Ereignis wird nur für synchron ausgelöste Skriptfehler generiert, wie sie beim initialen Laden oder innerhalb von Event-Handlern auftreten. Wenn ein Versprechen abgelehnt wurde (einschließlich eines nicht abgefangenen `throw` in einer `async function`) und keine Ablehnungs-Handler angehängt wurden, wird stattdessen ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (message, source, lineno, colno, error) => {};
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` auf `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten die einzige Ereignishandler-Eigenschaft, die mehr als ein Argument empfängt.

## Eventtyp

Das Ereignisobjekt ist eine [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Instanz, wenn es von einem Benutzeroberflächenelement erzeugt wurde, oder eine [`Event`](/de/docs/Web/API/Event)-Instanz anderweitig.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignishandler-Eigenschaft

Aus historischen Gründen zeigt die `onerror`-Ereignishandler-Eigenschaft auf `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten ein anderes Verhalten als andere Ereignishandler-Eigenschaften.

Beachten Sie, dass dies nur auf Handler zutrifft, die `onerror` zugewiesen sind, nicht auf Handler, die mit `addEventListener()` hinzugefügt werden.

#### Abbrechen

Die meisten Ereignishandler, die Ereignishandler-Eigenschaften zugewiesen sind, können das Standardverhalten des Ereignisses durch Rückgabe von `false` aus dem Handler abbrechen:

```js
textarea.onkeydown = () => false;
```

Um jedoch das Standardverhalten des `error`-Ereignisses von `Window` abzubrechen, muss der Ereignishandler stattdessen `true` zurückgeben:

```js
window.onerror = () => true;
```

Wenn das Ereignis abgebrochen wurde, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird trotzdem nicht weiter ausgeführt.

#### Argumente

Die Signatur des Ereignishandlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der Ereignishandler, der zu `Window.addEventListener()` übergeben wird, erhält ein einziges [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt, während der `onerror`-Handler fünf Argumente erhält, die den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts entsprechen:

- `message`

  - : Ein String, der eine lesbare Fehlermeldung enthält, welche das Problem beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > Im HTML wird mit dem [content event handler attribute](/de/docs/Web/HTML/Attributes#event_handler_attributes) `onerror` auf dem {{HTMLElement("body")}}-Element `error`-Ereignis-Hörer an den `window` (und _nicht_ an das `<body>`-Element) angehängt. Für diesen Ereignishandler wird der erste Parameter `event` genannt, nicht `message`, obwohl er weiterhin einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler generiert hat.
- `lineno`
  - : Eine ganze Zahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine ganze Zahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
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
> Diese Parameternamen sind mit einem [HTML-Ereignishandler-Attribut](/de/docs/Web/HTML/Attributes#event_handler_attributes) beobachtbar, wobei der erste Parameter `event` genannt wird anstelle von `message`.

Dieses spezielle Verhalten tritt nur für den `onerror`-Ereignishandler auf `window` auf. Der [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event)-Handler erhält weiterhin ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

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

- Dieses Ereignis auf `Element`-Zielen: [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
- [`Window`: `unhandledrejection`-Ereignis](/de/docs/Web/API/Window/unhandledrejection_event)
