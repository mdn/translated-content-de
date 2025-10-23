---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 58f6e20d5669f370278dcf2af95321dd95c26d0e
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen und es dann als Unterbaum des Elements in das DOM einzufügen.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der das zu bereinigende und in das Element einzufügende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingabe-Strings erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Beachten Sie, dass in der Regel ein `Sanitizer` effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` einen:
    - nicht normalisierten [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben bekommt (eines, das sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - String bekommt, der nicht den Wert `"default"` hat.
    - Wert bekommt, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen und ihn dann als Unterbaum des Elements in das DOM einzufügen.

`setHTML()` entfernt alle Elemente im HTML-Input-String, die im Kontext des aktuellen Elements ungültig sind, wie ein {{htmlelement("col")}} Element außerhalb einer {{htmlelement("table")}}.
Anschließend entfernt es alle HTML-Entitäten, die von der Sanitizer-Konfiguration nicht erlaubt sind, und entfernt weiterhin alle XSS-unsicheren Elemente oder Attribute — unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind oder nicht.

Wird in den `options.sanitizer`-Parametern keine Sanitizer-Konfiguration angegeben, wird `setHTML()` mit der Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer)-Konfiguration verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet somit Entitäten, die als unsicher gelten.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen von der Sanitizer-Konfiguration erlaubt sind, sie bei Verwendung dieser Methode dennoch entfernt werden (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um untrusted HTML-Strings in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Da diese Methode immer Input-Strings unsicherer XSS-Entitäten bereinigt, ist sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu bereinigen und einzufügen.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTML() with default sanitizer
target.setHTML(unsanitizedString);

// Define custom Sanitizer and use in setHTML()
// This allows only elements: div, p, button (script is unsafe and will be removed)
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTML()
// This removes elements div, p, button, script, and any other unsafe elements/attributes
target.setHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

### `setHTML()` Live-Beispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, die mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie klicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Der ursprüngliche String und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente für die Anwendung verschiedener Sanitizer, einen weiteren Button zur Rücksetzung des Beispiels und ein {{htmlelement("div")}} Element, um den String einzufügen.

```html
<button id="buttonDefault" type="button">Default</button>
<button id="buttonAllowScript" type="button">allowScript</button>

<button id="reload" type="button">Reload</button>
<div id="target">Original content of target element</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 220px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

Zuerst definieren wir den String, der bereinigt werden soll, der in allen Fällen derselbe sein wird.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für die Neuladeschaltfläche.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"></script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standard-Sanitizer setzt.
Dieser sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()` Konstruktor-Beispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // Set the content of the element using the default sanitizer
  target.setHTML(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "Default sanitizer: remove script element and onclick attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass, weil wir die `setHTML` Methode verwenden, `<script>` auch entfernt wird!

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "Sanitizer: {elements: ['div', 'p', 'script']}\n Script removed even though allowed\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die Schaltflächen "Default" und "allowScript", um die Auswirkungen des Standard- und benutzerdefinierten Sanitisers zu sehen.
Beachten Sie, dass in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, selbst wenn sie ausdrücklich vom Sanitizer erlaubt sind.

{{EmbedLiveSample("setHTML() live example","100","350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
