---
title: "Window: error-Ereignis"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("UI Events")}}

Das `error`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann – beispielsweise, wenn bei der Ausführung eines Skripts ein Fehler auftritt.

Dieses Ereignis wird nur für synchron ausgelöste Skriptfehler erzeugt, etwa beim erstmaligen Laden oder innerhalb von Event-Handlern. Wenn ein Promise zurückgewiesen wurde (auch durch ein nicht abgefangenes `throw` innerhalb einer `async function`) und keine Rejection-Handler registriert wurden, wird stattdessen ein [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie einen Handler der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (message, source, lineno, colno, error) => { }
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten die einzige Event-Handler-Eigenschaft, die mehr als ein Argument erhält.

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von [`ErrorEvent`](/de/docs/Web/API/ErrorEvent), wenn das Ereignis von einem Benutzeroberflächenelement erzeugt wurde, andernfalls eine Instanz von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Event-Handler-Eigenschaft

Aus historischen Gründen verhält sich die Event-Handler-Eigenschaft `onerror` bei `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten anders als andere Event-Handler-Eigenschaften.

Dies gilt nur für Handler, die `onerror` zugewiesen wurden, nicht für Handler, die mit `addEventListener()` hinzugefügt wurden.

#### Abbrechen des Standardverhaltens

Die meisten Event-Handler, die Event-Handler-Eigenschaften zugewiesen wurden, können das Standardverhalten des Ereignisses abbrechen, indem sie `false` zurückgeben:

```js
textarea.onkeydown = () => false;
```

Damit eine Event-Handler-Eigenschaft das Standardverhalten des `error`-Ereignisses von `Window` abbricht, muss sie dagegen `true` zurückgeben:

```js
window.onerror = () => true;
```

Wird das Standardverhalten abgebrochen, erscheint der Fehler nicht in der Konsole. Die Ausführung des aktuellen Skripts wird dennoch beendet.

#### Argumente

Die Signatur des Event-Handlers unterscheidet sich zwischen `addEventListener()` und `onerror`. Der an `Window.addEventListener()` übergebene Event-Handler erhält ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt. Der `onerror`-Handler erhält dagegen fünf Argumente, die den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts entsprechen:

- `message`
  - : Ein String mit einer für Menschen lesbaren Fehlermeldung, die das Problem beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > In HTML registriert das [Event-Handler-Attribut im Inhalt](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) `onerror` des {{HTMLElement("body")}}-Elements `error`-Event-Listener für `window` (_nicht_ für das `<body>`-Element). Bei diesem Event-Handler heißt der erste Parameter `event` statt `message`, obwohl er ebenfalls einen String enthält. Um die Fehlermeldung zu protokollieren, verwenden Sie also `<body onerror="console.error(event)">`.

- `source`
  - : Ein String mit der URL des Skripts, das den Fehler verursacht hat.
- `lineno`
  - : Eine Ganzzahl mit der Zeilennummer der Skriptdatei, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine Ganzzahl mit der Spaltennummer der Skriptdatei, in der der Fehler aufgetreten ist.
- `error`
  - : Der ausgelöste Fehler. In der Regel ein {{jsxref("Error")}}-Objekt.

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
> Diese Parameternamen sind bei einem [HTML-Event-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) sichtbar. Dort heißt der erste Parameter `event` statt `message`.

Dieses besondere Verhalten tritt nur beim `onerror`-Event-Handler von `window` auf. Der Handler [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event) erhält weiterhin ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

## Beispiele

### Interaktives Beispiel

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

- Dieses Ereignis bei `Element`-Zielen: [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis
- [`Window`: `unhandledrejection`-Ereignis](/de/docs/Web/API/Window/unhandledrejection_event)
