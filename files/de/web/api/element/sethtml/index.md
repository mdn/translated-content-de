---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu säubern, in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) umzuwandeln und dann als Teilbaum des Elements in das DOM einzufügen.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das bereinigt und in das Element injiziert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter erwartet wird als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Falls nicht angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu säubern, in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) umzuwandeln und dann als Teilbaum des Elements in das DOM einzufügen.

`setHTML()` entfernt alle Elemente im HTML-String, die im Kontext des aktuellen Elements ungültig sind, wie zum Beispiel ein {{htmlelement("col")}}-Element außerhalb einer {{htmlelement("table")}}.
Anschließend entfernt es alle HTML-Entitäten, die von der Sanitizer-Konfiguration nicht erlaubt sind, und entfernt weitere XSS-unsichere Elemente oder Attribute — unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind.

Wenn keine Sanitizer-Konfiguration im `options.sanitizer` Parameter angegeben wird, wird `setHTML()` mit der Standard-`Sanitizer`-Konfiguration verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und schließt somit Entitäten aus, die als unsicher gelten.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Sanitizer-Konfiguration kann spezifiziert werden, um zu wählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass auch wenn unsichere Optionen von der Sanitizer-Konfiguration erlaubt werden, sie beim Verwenden dieser Methode trotzdem entfernt werden (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Strings in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezieller Bedarf, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode immer Eingabestrings von XSS-unsicheren Entitäten säubert, sie ist nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu säubern und zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode bei verschiedenen Sanitizern.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu säubern und zu injizieren.
Die ursprüngliche Zeichenkette und die bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Anwenden unterschiedlicher Sanitizer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element zum Injizieren des Strings.

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

Zuerst definieren wir den zu säubernden String, der in allen Fällen gleich ist.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsafe gelten.
Wir definieren auch den Handler für die Neuladenschaltfläche.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Als nächstes definieren wir den Click-Handler für die Schaltfläche, die das HTML mit dem Standardsanitizer setzt.
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

Der nächste Click-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass, weil wir die `setHTML` Methode verwenden, `<script>` ebenfalls entfernt wird!

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

Klicken Sie auf die "Default" und "allowScript" Schaltflächen, um die Effekte des Standard- und des benutzerdefinierten Sanitizers zu sehen.
Beachten Sie, dass in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, auch wenn sie ausdrücklich vom Sanitizer erlaubt sind.

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
