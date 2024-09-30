---
title: "Window: error Event"
short-title: error
slug: Web/API/Window/error_event
l10n:
  sourceCommit: e472a1caa80ace5959961f741fec330a9e61b672
---

{{APIRef}}

Das `error`-Ereignis wird auf einem [`Window`](/de/docs/Web/API/Window)-Objekt ausgelöst, wenn eine Ressource nicht geladen oder verwendet werden konnte – beispielsweise wenn ein Skript einen Ausführungsfehler hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (message, source, lineno, colno, error) => {};
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten die einzige Ereignishandler-Eigenschaft, die mehr als ein Argument erhält.

## Ereignistyp

Das Ereignisobjekt ist eine Instanz von [`ErrorEvent`](/de/docs/Web/API/ErrorEvent), wenn es von einem Benutzeroberflächenelement generiert wurde, oder eine Instanz von [`Event`](/de/docs/Web/API/Event) sonst.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignishandler-Eigenschaft

Aus historischen Gründen zeigt die `onerror`-Ereignishandler-Eigenschaft bei `Window`- und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Objekten nur ein anderes Verhalten als andere Ereignishandler-Eigenschaften.

Beachten Sie, dass dies nur für Handler gilt, die `onerror` zugewiesen sind, nicht für Handler, die mit `addEventListener()` hinzugefügt wurden.

#### Stornierung

Die meisten Ereignishandler, die Ereignishandler-Eigenschaften zugewiesen sind, können das Standardverhalten des Ereignisses durch Rückgabe von `false` aus dem Handler abbrechen:

```js
textarea.onkeydown = () => false;
```

Um jedoch das Standardverhalten des `error`-Ereignisses von `Window` abzubrechen, muss die Ereignishandler-Eigenschaft stattdessen `true` zurückgeben:

```js
window.onerror = () => true;
```

Wenn es abgebrochen wird, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird weiterhin gestoppt.

#### Argumente

Die Signatur des Ereignishandlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der Ereignishandler, der an `Window.addEventListener()` übergeben wird, erhält ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt, während der `onerror`-Handler fünf Argumente erhält, die den Eigenschaften des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekts entsprechen:

- `message`

  - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt. Entspricht [`ErrorEvent.message`](/de/docs/Web/API/ErrorEvent/message).

    > [!NOTE]
    > In HTML wird das [Attribut des Inhaltseventhandlers](/de/docs/Web/HTML/Attributes#event_handler_attributes) `onerror` am {{HTMLElement("body")}}-Element verwendet, um `error`-Ereignislistener an `window` anzuhängen (_nicht_ das `<body>`-Element). Für diesen Ereignishandler wird der erste Parameter `event` genannt, nicht `message`, obwohl er immer noch einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler generiert hat.
- `lineno`
  - : Eine Ganzzahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine Ganzzahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `error`
  - : Der auszulösende Fehler. In der Regel ein {{jsxref("Error")}}-Objekt.

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
> Diese Parameternamen sind bei einem [HTML-Eventhandler-Attribut](/de/docs/Web/HTML/Attributes#event_handler_attributes) beobachtbar, wobei der erste Parameter `event` statt `message` genannt wird.

Dieses spezielle Verhalten tritt nur beim `onerror`-Ereignishandler bei `window` auf. Der [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event) Handler erhält weiterhin ein einzelnes [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Objekt.

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

- Dieses Ereignis bei `Element`-Zielen: [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis
