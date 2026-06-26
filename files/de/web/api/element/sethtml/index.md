---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 438ac3c8511239d9ef8f4b562980ffc57ea8b358
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet eine XSS-sichere Methode, um eine HTML-Zeichenkette zu parsen, zu bereinigen und als Unterbaum in das DOM des Elements einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, auch wenn sie von einem übergebenen Sanitizer erlaubt sind.
Besonders die folgenden Elemente werden immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Ereignis-Handler-Attribute.

Es wird empfohlen (wenn unterstützt) als Drop-in-Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), wenn eine vom Benutzer bereitgestellte HTML-Zeichenkette gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das bereinigt und in das Element eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden sollen, oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, auch wenn sie vom Sanitizer erlaubt sind.
        Wenn nicht angegeben, wird die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.

        Beachten Sie, dass bei mehrfacher Verwendung derselben Konfiguration erwartet wird, dass die Verwendung eines `Sanitizer` und dessen Modifikation bei Bedarf effizienter ist.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird mit:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Beispielsweise eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Einstellungen enthält.
    - einem String, der nicht den Wert `"default"` hat.
    - einem Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um eine HTML-Zeichenkette in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und diesen dann als Unterbaum des Elements in das DOM einzufügen.

`setHTML()` verwirft alle Elemente in der HTML-Input-Zeichenkette, die im Kontext des aktuellen Elements ungültig sind, wie ein {{htmlelement("col")}} Element außerhalb einer {{htmlelement("table")}}.
Anschließend entfernt es alle HTML-Entitys, die in der Konfiguration des Sanitizers nicht erlaubt sind, und entfernt weitere XSS-unsichere Elemente oder Attribute — unabhängig davon, ob sie vom Sanitizer erlaubt sind oder nicht.

Wenn kein Sanitizer im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.
Diese Konfiguration ist für die Mehrzahl der Anwendungsfälle geeignet, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um festzulegen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen vom Sanitizer erlaubt sind, sie beim Verwenden dieser Methode trotzdem entfernt werden (es werden dieselben Elemente entfernt, wie bei einem Sanitizer, auf dem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zum Einfügen von nicht vertrauenswürdigen HTML-Zeichenketten in ein Element verwendet werden.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode, da sie stets Eingabezeichenfolgen unsicherer XSS-Entitys bereinigt, nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert ist.

### Neu-Parsing und verändertes XSS (mXSS)

Auch nach dem Bereinigen von HTML-Eingaben mit `setHTML()` ist es weiterhin unsicher, das HTML zu serialisieren und mit `innerHTML` neu zu parsen.
Beispielsweise ist der folgende Code unsicher.

```js example-bad
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // No longer sanitized!
other_element.innerHTML = serializedHTML;
```

Der Grund dafür ist, dass die Bereinigung kontextsensitiv ist.
Wenn Sie `setHTML()` für ein bestimmtes Element aufrufen, werden die unsicheren Elemente und Attribute für diesen Kontext entfernt.
Wenn Sie das HTML serialisieren und direkt in einem anderen Element verwenden, kann es immer noch Elemente enthalten, die in diesem Element unsicher sind.

Dies wäre sicher (wenn auch sinnlos):

```js example-good
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // Serialized as a plain string
other_div.setHTML(serializedHTML); // Safe — re-sanitized by setHTML()
```

Es gibt eine Klasse von Angriffen, die diesen Mangel ausnutzen, bekannt als [mutation XSS](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss).
Die einfache Regel zur Vermeidung dieses Problems besteht darin, HTML-Zeichenketten nur mit sicheren Methoden wie `setHTML()` einzufügen.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt einige der Möglichkeiten, die `setHTML()` bietet, um eine HTML-Zeichenkette zu bereinigen und einzufügen.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit unterschiedlichen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um eine HTML-Zeichenkette mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Die ursprüngliche Zeichenkette und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zur Anwendung unterschiedlicher Sanitizer, einen weiteren Button zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, in das die Zeichenkette eingefügt wird.

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

Zuerst definieren wir die zu bereinigende Zeichenkette, die für alle Fälle gleich sein wird.
Diese enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren außerdem den Handler für den Neuladen-Button.

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

Als nächstes definieren wir den Klick-Handler für den Button, der das HTML mit dem Standard-Sanitizer setzt.
Dieser sollte alle unsicheren Einheiten entfernen, bevor die HTML-Zeichenkette eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()` Constructor-Beispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass, da wir die `setHTML` Methode verwenden, `<script>` auch entfernt wird!

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

Klicken Sie auf die Buttons "Default" und "allowScript", um die Effekte des Standard- und des benutzerdefinierten Sanitizers zu sehen.

Beachten Sie, dass wir aufgrund der Verwendung einer sicheren Bereinigungsmethode in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, auch wenn sie ausdrücklich vom Sanitizer erlaubt sind.
Allerdings wird das `data-` Attribut bei der Standard-Bereinigung entfernt, es ist jedoch erlaubt, wenn wir einen Sanitizer übergeben.

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
