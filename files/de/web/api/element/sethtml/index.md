---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: b3401d14892454cb509338239fb1a028e5c1470f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet eine XSS-sichere Methode, um eine HTML-Zeichenkette zu parsen und zu säubern und dann als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) in den DOM als Teilbaum des Elements einzufügen.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Eine Zeichenkette, die definiert, welches HTML gesäubert und in das Element eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingabewerts erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Beachten Sie, dass ein `Sanitizer` in der Regel effizienter ist als eine `SanitizerConfig`, falls die Konfiguration wiederverwendet werden soll.
        Wenn nichts angegeben ist, wird die Standardkonfiguration des Sanitizers verwendet.
        Die Standardkonfiguration erlaubt nur bekannte Elemente und Attribute, die als XSS-sicher gelten; insbesondere {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, Ereignis-Handler- und Daten-Attribute stehen nicht auf der Erlaubnisliste.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird geworfen, wenn `options.sanitizer` übergeben wird:
    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um eine HTML-Zeichenkette zu parsen und zu säubern und dann als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) in den DOM als Teilbaum des Elements einzufügen.

`setHTML()` entfernt alle Elemente in der HTML-Eingabezeichenfolge, die im Kontext des aktuellen Elements ungültig sind, wie z.B. ein {{htmlelement("col")}} Element außerhalb einer {{htmlelement("table")}}.
Anschließend werden alle HTML-Entitäten entfernt, die in der Sanitizer-Konfiguration nicht erlaubt sind, und alle XSS-unsicheren Elemente oder Attribute, unabhängig davon, ob sie in der Sanitizer-Konfiguration erlaubt sind, werden ebenfalls entfernt.

Falls keine Sanitizer-Konfiguration im `options.sanitizer` Parameter angegeben ist, wird `setHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet dabei Entitäten, die als unsicher gelten; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor für weitere Informationen.
Eine benutzerdefinierte Sanitizer- oder Sanitizer-Konfiguration kann angegeben werden, um zu wählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Sanitizer-Konfiguration erlaubt sind, sie bei Verwendung dieser Methode dennoch entfernt werden (die implizit auf [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Zeichenfolgen in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, sofern nicht ausdrücklich der Bedarf besteht, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode immer Eingabezeichenfolgen von XSS-unsicheren Entitäten säubert, sie wird nicht mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um eine HTML-Zeichenfolge zu säubern und zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitisierern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um eine HTML-Zeichenfolge mit einem Standard- und einem benutzerdefinierten Sanitisierer zu säubern und einzufügen.
Die ursprüngliche Zeichenfolge und das gesäuberte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zur Anwendung verschiedener Sanitisierer, einen weiteren Button zur Zurücksetzung des Beispiels und ein {{htmlelement("div")}} Element, in das die Zeichenfolge eingefügt wird.

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

Zuerst definieren wir die zu säubernde Zeichenfolge, welche in allen Fällen gleich sein wird.
Diese enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für den Neuladen-Button.

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

Als nächstes definieren wir den Klick-Handler für den Button, der das HTML mit dem Standardsanitizer setzt.
Dieser sollte alle unsicheren Entitäten entfernen, bevor die HTML-Zeichenfolge eingefügt wird.
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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente zulässt.
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

Klicken Sie auf die "Default" und "allowScript" Buttons, um die Auswirkungen des Standard- bzw. benutzerdefinierten Sanitisierers zu sehen.
Beachten Sie, dass in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, auch wenn sie explizit durch den Sanitisierer erlaubt sind.

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
