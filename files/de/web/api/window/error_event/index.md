---
title: "Window: error event"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das `error`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen oder nicht verwendet werden konnte, beispielsweise wenn ein Skript einen Ausführungsfehler hat.

Dieses Ereignis wird nur für synchron geworfene Skriptfehler generiert, wie etwa beim initialen Laden oder innerhalb von Ereignishandlern. Wenn ein Promise abgelehnt wurde (einschließlich eines nicht abgefangenen `throw` innerhalb einer `async function`) und keine Ablehnungsbehandler angehängt sind, wird stattdessen ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (message, source, lineno, colno, error) => { }
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten die einzige Ereignishandlereigenschaft, die mehr als ein Argument erhält.

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von [`ErrorEvent`](/de/docs/Web/API/ErrorEvent), wenn es von einem Benutzerschnittstellenelement generiert wurde, oder eine Instanz von [`Event`](/de/docs/Web/API/Event) in anderen Fällen.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignishandlereigenschaft

Aus historischen Gründen hat die `onerror`-Ereignishandlereigenschaft bei `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten ein anderes Verhalten als andere Ereignishandlereigenschaften.

Bitte beachten Sie, dass dies nur für Handler gilt, die `onerror` zugewiesen sind, nicht für Handler, die mit `addEventListener()` hinzugefügt wurden.

#### Abbruch

Die meisten Ereignishandler, die Eigenschaften von Ereignishandlern zugewiesen sind, können das Standardverhalten des Ereignisses abbrechen, indem sie `false` vom Handler zurückgeben:

```js
textarea.onkeydown = () => false;
```

Um jedoch das Standardverhalten des `error`-Ereignisses von `Window` abzubrechen, muss die Ereignishandlereigenschaft stattdessen `true` zurückgeben:

```js
window.onerror = () => true;
```

Wenn abgebrochen, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird dennoch nicht mehr ausgeführt.

#### Argumente

Die Signatur des Ereignishandlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der an `Window.addEventListener()` übergebene Ereignishandler erhält ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt, während der `onerror`-Handler fünf Argumente erhält, die den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts entsprechen:

- `message`

  - : Ein String, der eine lesbare Fehlermeldung enthält, die das Problem beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > Im HTML bindet das [Inhaltsereignishandler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) `onerror` im {{HTMLElement("body")}}-Element `error`-Ereignishörer an `window` (_nicht_ an das `<body>`-Element). Für diesen Ereignishandler wird der erste Parameter `event` genannt, nicht `message`, obwohl er weiterhin einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler erzeugt hat.
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
> Diese Parameternamen sind mit einem [HTML-Ereignishandler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) beobachtbar, wo der erste Parameter `event` statt `message` genannt wird.

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
- [`Window`: `unhandledrejection` Ereignis](/de/docs/Web/API/Window/unhandledrejection_event)
