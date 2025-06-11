---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu analysieren und zu bereinigen und anschließend in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) umzuwandeln, das als Teilbaum des Elements in den DOM eingefügt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, welches bereinigt und in das Element eingefügt wird.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Beachten Sie, dass in der Regel ein `Sanitizer` effizienter als eine `SanitizerConfig` ist, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanitizerkonfiguration verwendet.

### Rückgabewert

Kein Wert (`undefined`).

### Ausnahmen

- `TypeError`

  - : Dies wird geworfen, wenn `options.sanitizer` übergeben wird:

    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - ein String der nicht den Wert `"default"` hat.
    - ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), oder String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um einen String von HTML zu analysieren und zu bereinigen, und dann in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) umzuwandeln und als Teilbaum des Elements in den DOM einzufügen.

`setHTML()` verwirft alle Elemente im HTML-Input-String, die im Kontext des aktuellen Elements ungültig sind, wie z.B. ein {{htmlelement("col")}} Element außerhalb einer {{htmlelement("table")}}.
Anschließend entfernt es alle HTML-Entitäten, die durch die Sanitizerkonfiguration nicht erlaubt sind, sowie weitere XSS-unsichere Elemente oder Attribute — unabhängig davon, ob sie durch die Sanitizerkonfiguration erlaubt sind oder nicht.

Wenn keine Sanitizerkonfiguration im Parameter `options.sanitizer` angegeben wird, wird `setHTML()` mit der Standard- [`Sanitizer`](/de/docs/Web/API/Sanitizer) Konfiguration verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und damit werden Entitäten, die als unsicher gelten, nicht zugelassen.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Sanitizerkonfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Sanitizerkonfiguration erlaubt werden, diese beim Verwenden dieser Methode dennoch entfernt werden (welche implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) für das Einfügen von nicht vertrauenswürdigen HTML-Strings in ein Element verwendet werden.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es gibt einen spezifischen Bedarf, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode immer XSS-unsichere Eingabestrings bereinigt und dass dieser Prozess nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, `setHTML()` zu verwenden, um einen HTML-String zu bereinigen und zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie klicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und zu injizieren.
Der ursprüngliche String und der bereinigte HTML-Code werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente, um unterschiedliche Sanitizer anzuwenden, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, in das der String injiziert wird.

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

Zuerst definieren wir den String, der bereinigt werden soll, der in allen Fällen gleich sein wird.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsafe angesehen werden.
Wir definieren auch den Handler für die Neuladen-Schaltfläche.

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

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standard-Sanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()` Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass, da wir die `setHTML` Methode verwenden, `<script>` ebenfalls entfernt wird!

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

Klicken Sie auf die Schaltflächen "Default" und "allowScript", um die Auswirkungen des Standard- und benutzerdefinierten Sanitizers zu sehen.
Beachten Sie, dass in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, auch wenn sie explizit vom Sanitizer erlaubt sind.

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
