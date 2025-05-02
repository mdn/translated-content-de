---
title: "Fenster: Fehlerereignis"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `error`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht genutzt werden konnte – zum Beispiel, wenn ein Skript einen Ausführungsfehler hat.

Dieses Ereignis wird nur für Skriptfehler generiert, die synchron ausgelöst werden, wie beispielsweise während des initialen Ladens oder innerhalb von Ereignis-Handlern. Wenn ein `Promise` abgelehnt wurde (einschließlich eines nicht abgefangenen `throw` innerhalb einer `async function`) und keine Ablehnungshandler angefügt wurden, wird stattdessen ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (message, source, lineno, colno, error) => { }
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` auf `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten die einzige Ereignis-Handler-Eigenschaft, die mehr als ein Argument erhält.

## Ereignistyp

Das Ereignisobjekt ist eine [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Instanz, wenn es von einem Benutzeroberflächenelement generiert wurde, oder eine [`Event`](/de/docs/Web/API/Event)-Instanz, andernfalls.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignis-Handler-Eigenschaft

Aus historischen Gründen hat die `onerror`-Ereignis-Handler-Eigenschaft auf `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten ein anderes Verhalten als andere Ereignis-Handler-Eigenschaften.

Beachten Sie, dass dies nur auf Handler zutrifft, die `onerror` zugewiesen sind, nicht auf Handler, die mit `addEventListener()` hinzugefügt werden.

#### Abbruch

Die meisten Ereignis-Handler, die Ereignis-Handler-Eigenschaften zugewiesen sind, können das Standardverhalten des Ereignisses abbrechen, indem sie `false` aus dem Handler zurückgeben:

```js
textarea.onkeydown = () => false;
```

Allerdings muss für eine Ereignis-Handler-Eigenschaft, um das Standardverhalten des `error`-Ereignisses von `Window` abzubrechen, stattdessen `true` zurückgegeben werden:

```js
window.onerror = () => true;
```

Wenn abgebrochen wird, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird dennoch die Ausführung stoppen.

#### Argumente

Die Signatur des Ereignis-Handlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der Ereignis-Handler, der an `Window.addEventListener()` übergeben wird, erhält ein einziges [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt, während der `onerror`-Handler fünf Argumente erhält, die den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts entsprechen:

- `message`

  - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > In HTML bindet das [Inhalts-Ereignis-Handler Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) `onerror` auf dem {{HTMLElement("body")}}-Element `error`-Ereignis-Listener an `window` (_nicht_ an das `<body>`-Element). Für diesen Ereignis-Handler wird der erste Parameter `event` genannt, nicht `message`, obwohl er immer noch einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler generiert hat.
- `lineno`
  - : Eine Ganzzahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine Ganzzahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `error`
  - : Der Fehler, der geworfen wird. Meist ein {{jsxref("Error")}}-Objekt.

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
> Diese Parameternamen sind mit einem [HTML-Ereignis-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) beobachtbar, wobei der erste Parameter `event` statt `message` genannt wird.

Dieses spezielle Verhalten tritt nur für den `onerror`-Ereignis-Handler auf `window` auf. Der [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event)-Handler erhält weiterhin ein einziges [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

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

- Dieses Ereignis an `Element`-Zielen: [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
- [`Window`: `unhandledrejection` Ereignis](/de/docs/Web/API/Window/unhandledrejection_event)
