---
title: "Window: error Ereignis"
short-title: Fehler
slug: Web/API/Window/error_event
l10n:
  sourceCommit: e472a1caa80ace5959961f741fec330a9e61b672
---

{{APIRef}}

Das `error` Ereignis wird auf einem {{domxref("Window")}} Objekt ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendbar ist — zum Beispiel, wenn ein Skript einen Ausführungsfehler hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (message, source, lineno, colno, error) => {};
```

> [!NOTE]
> Aus historischen Gründen ist `onerror` bei `Window` und {{domxref("WorkerGlobalScope")}} Objekten die einzige Ereignisbehandlereigenschaft, die mehr als ein Argument erhält.

## Ereignistyp

Das Ereignisobjekt ist eine {{domxref("ErrorEvent")}} Instanz, wenn es von einem Benutzerschnittstellenelement generiert wurde, oder eine {{domxref("Event")}} Instanz, wenn nicht.

{{InheritanceDiagram("ErrorEvent")}}

## Beschreibung

### Ereignisbehandlereigenschaft

Aus historischen Gründen hat die `onerror` Ereignisbehandlereigenschaft bei `Window` und {{domxref("WorkerGlobalScope")}} Objekten ein anderes Verhalten als andere Ereignisbehandlereigenschaften.

Beachten Sie, dass dies nur für Behandler gilt, die `onerror` zugewiesen sind, nicht für Behandler, die mit `addEventListener()` hinzugefügt werden.

#### Abbruch

Die meisten Ereignisbehandler, die Ereignisbehandlereigenschaften zugewiesen sind, können das Standardverhalten des Ereignisses abbrechen, indem sie `false` vom Behandler zurückgeben:

```js
textarea.onkeydown = () => false;
```

Um jedoch das Standardverhalten des `error` Ereignisses von `Window` abzubrechen, muss stattdessen `true` zurückgegeben werden:

```js
window.onerror = () => true;
```

Wenn abgebrochen, erscheint der Fehler nicht in der Konsole, aber das aktuelle Skript wird dennoch nicht weiter ausgeführt.

#### Argumente

Die Signatur des Ereignisbehandlers ist asymmetrisch zwischen `addEventListener()` und `onerror`. Der Ereignisbehandler, der an `Window.addEventListener()` übergeben wird, erhält ein einzelnes {{domxref("ErrorEvent")}} Objekt, während der `onerror` Behandler fünf Argumente erhält, die den Eigenschaften des {{domxref("ErrorEvent")}} Objekts entsprechen:

- `message`

  - : Ein String, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt. Entspricht {{domxref("ErrorEvent.message")}}.

    > [!NOTE]
    > Im HTML-Attribut für Inhaltsereignisbehandler, `onerror` im {{HTMLElement("body")}} Element, werden `error` Ereignisbehandler an `window` gebunden (_nicht_ am `<body>` Element). Für diesen Ereignisbehandler heißt der erste Parameter `event`, nicht `message`, obwohl er immer noch einen String enthält; das heißt, Sie würden `<body onerror="console.error(event)">` verwenden, um die Fehlermeldung zu protokollieren.

- `source`
  - : Ein String, der die URL des Skripts enthält, das den Fehler erzeugt hat.
- `lineno`
  - : Eine Ganzzahl, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `colno`
  - : Eine Ganzzahl, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.
- `error`
  - : Der Fehler, der ausgelöst wird. Üblicherweise ein {{jsxref("Error")}} Objekt.

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
> Diese Parameternamen sind mit einem [HTML-Attribut für Ereignisbehandler](/de/docs/Web/HTML/Attributes#event_handler_attributes) beobachtbar, wobei der erste Parameter `event` statt `message` genannt wird.

Dieses spezielle Verhalten tritt nur für den `onerror` Ereignisbehandler auf `window` auf. Der [`Element.onerror`](/de/docs/Web/API/HTMLElement/error_event) Behandler erhält immer noch ein einzelnes {{domxref("ErrorEvent")}} Objekt.

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="controls">
  <button id="script-error" type="button">Skriptfehler erzeugen</button>
  <img class="bad-img" />
</div>

<div class="event-log">
  <label for="eventLog">Ereignisprotokoll:</label>
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

- Dieses Ereignis bei `Element`-Zielen: {{domxref("HTMLElement/error_event", "error")}} Ereignis
