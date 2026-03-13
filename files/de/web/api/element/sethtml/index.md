---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und ihn als Unterbaum des Elements in das DOM einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-gefährlich angesehen werden, selbst wenn ein übergebener Sanitizer dies erlaubt.
Besonders folgende Elemente werden immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Es wird empfohlen, diese Methode (falls unterstützt) als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zu verwenden, wenn ein vom Benutzer bereitgestellter String von HTML gesetzt werden soll.

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
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-gefährlichen Elemente und Attribute, selbst wenn dies durch den Sanitizer erlaubt ist.
        Wenn nicht angegeben, wird die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.

        Beachten Sie, dass es effizienter sein kann, einen `Sanitizer` zu verwenden und diesen bei Bedarf zu ändern, wenn dieselbe Konfiguration mehrmals verwendet wird.

### Rückgabewert

Keinen (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält.
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen und ihn dann als Unterbaum des Elements ins DOM einzufügen.

`setHTML()` lässt alle Elemente im HTML-Input-String fallen, die im Kontext des aktuellen Elements ungültig sind, wie zum Beispiel ein {{htmlelement("col")}}-Element außerhalb einer {{htmlelement("table")}}.
Anschließend entfernt es alle HTML-Entitäten, die durch die Sanitizer-Konfiguration nicht erlaubt sind, und entfernt weiter alle XSS-gefährlichen Elemente oder Attribute — unabhängig davon, ob diese durch den Sanitizer erlaubt sind oder nicht.

Wird kein Sanitizer im `options.sanitizer`-Parameter angegeben, wird `setHTML()` mit der [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.
Diese Konfiguration ist für die Mehrheit der Anwendungsfälle geeignet, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen.
Beachten Sie, dass selbst wenn unsichere Optionen durch den Sanitizer erlaubt sind, sie bei Verwendung dieser Methode dennoch entfernt werden (sie entfernt die gleichen Elemente wie ein Sanitizer, bei dem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um unzuverlässige Strings von HTML in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es gibt einen spezifischen Bedarf, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode Eingabestrings von XSS-gefährlichen Entitäten immer bereinigt und daher nicht gesichert oder validiert wird unter Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu bereinigen und zu injizieren.

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
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String unter Verwendung eines Standard- und eines benutzerdefinierten Sanitizers zu bereinigen und zu injizieren.
Der ursprüngliche String und das bereinigte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden verschiedener Sanitizer, eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}-Element, um den String zu injizieren.

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
  height: 320px;
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

Zuerst definieren wir den zu bereinigenden String, der für alle Fälle gleich sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-gefährlich gelten.
Wir definieren auch den Handler für die Reload-Schaltfläche.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM.
      <button onclick="alert('You clicked the button!')">Click me</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">Para with <code>data-</code> attribute</p>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standardsanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()`-Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // Set the content of the element using the default sanitizer
  target.setHTML(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "Default sanitizer: remove script element, onclick attribute, data- attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${target.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur die {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente zulässt.
Beachten Sie, dass `<script>` entfernt wird, weil wir die `setHTML`-Methode verwenden!

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
  log(`\n\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die Schaltflächen "Default" und "allowScript", um die Auswirkungen des Standard- und des benutzerdefinierten Sanitizers zu sehen.

Beachten Sie, dass, weil wir eine sichere Bereinigungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie durch den Sanitizer ausdrücklich erlaubt sind.
Während jedoch das `data-` Attribut beim Standardsanitizer entfernt wird, wird es zugelassen, wenn wir einen Sanitizer übergeben.

{{EmbedLiveSample("setHTML() live example","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) und [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
