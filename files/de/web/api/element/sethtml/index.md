---
title: "Element: Methode setHTML()"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces bietet eine XSS-sichere Methode zum Parsen und Bereinigen eines HTML-Strings und fügt ihn als Unterbaum des Elements in das DOM ein.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, auch wenn sie durch einen übergebenen Sanitizer zugelassen werden. Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Es wird empfohlen (sofern unterstützt), dies als direkte Alternative zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zu verwenden, wenn ein vom Benutzer bereitgestellter HTML-String festgelegt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der zu bereinigendes und in das Element zu injizierendes HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, welches definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, auch wenn sie durch den Sanitizer erlaubt sind.
        Wenn nicht angegeben, wird die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.

        Beachten Sie, dass es effizienter ist, einen `Sanitizer` zu verwenden und diesen bei Bedarf zu modifizieren, wenn Sie die gleiche Konfiguration mehrmals verwenden.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn `options.sanitizer` ein:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird, das nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
    - String, der nicht den Wert `"default"` hat.
    - Wert, der nicht ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), oder String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und diesen dann als [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) in das DOM als Unterbaum des Elements einzufügen.

`setHTML()` verwirft alle Elemente im HTML-Input-String, die im Kontext des aktuellen Elements ungültig sind, wie beispielsweise ein {{htmlelement("col")}}-Element außerhalb eines {{htmlelement("table")}}. Es entfernt dann alle HTML-Entitäten, die nicht durch die Sanitizer-Konfiguration erlaubt sind, und entfernt weiterhin alle XSS-unsicheren Elemente oder Attribute, ob sie durch den Sanitizer erlaubt sind oder nicht.

Wenn kein Sanitizer im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet. Diese Konfiguration ist für die meisten Anwendungsfälle geeignet, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden. Beachten Sie, dass unsichere Optionen, selbst wenn sie durch den Sanitizer erlaubt sind, immer noch entfernt werden, wenn diese Methode verwendet wird (sie entfernt die gleichen Elemente wie ein Sanitizer, auf den [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in ein Element einzufügen. Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode, da sie Eingabestrings immer auf XSS-unsichere Entitäten bereinigt, nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert ist.

### Re-Parsen und mutiertes XSS (mXSS)

Auch nach der Bereinigung von HTML-Input mit `setHTML()` ist es nicht sicher, das HTML zu serialisieren und es mit `innerHTML` erneut zu parsen. Zum Beispiel ist der folgende Code unsicher.

```js example-bad
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // No longer sanitized!
otherElement.innerHTML = serializedHTML;
```

Der Grund dafür ist, dass die Bereinigung kontextabhängig ist. Wenn Sie `setHTML()` auf einem bestimmten Element aufrufen, werden die unsicheren Elemente und Attribute für diesen Kontext entfernt. Wenn Sie das HTML serialisieren und direkt in ein anderes Element verwenden, kann es immer noch Elemente enthalten, die in diesem Element unsicher sind.

Dies wäre sicher (wenn auch sinnlos):

```js example-good
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // Serialized as a plain string
otherDiv.setHTML(serializedHTML); // Safe — re-sanitized by setHTML()
```

Es gibt eine Klasse von Angriffen, die diesen Fehler ausnutzen, bekannt als [mutation XSS](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss). Die einfache Regel, um dieses Problem zu vermeiden, besteht darin, HTML-Strings nur mit sicheren Methoden wie `setHTML()` zu injizieren.

## Beispiele

### Grundlegende Nutzung

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

Dieses Beispiel bietet eine "live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitisierern aufgerufen wird. Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und zu injizieren. Der ursprüngliche String und das bereinigte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zur Anwendung verschiedener Sanitisierer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}-Element, um den String zu injizieren.

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

Zuerst definieren wir den String, der bereinigt werden soll, welcher für alle Fälle derselbe sein wird. Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten. Wir definieren auch den Handler für die Neuladenschaltfläche.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standard-Sanitizer festlegt. Dieser sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingesetzt wird. Beachten Sie, dass Sie in den [`Sanitizer()` Konstruktor-Beispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) genau sehen können, welche Elemente entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitisierers, der nur die {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt. Beachten Sie, dass, weil wir die `setHTML`-Methode verwenden, `<script>` ebenfalls entfernt wird!

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

Klicken Sie auf die "Default"- und "allowScript"-Schaltflächen, um die Effekte des Standard- und benutzerdefinierten Sanitisierers zu sehen.

Beachten Sie, dass wir aufgrund der Verwendung einer sicheren Bereinigungsmethode in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, auch wenn sie explizit durch den Sanitisierer erlaubt sind. Während jedoch das `data-`-Attribut mit dem Standardsanitisierer entfernt wird, ist es erlaubt, wenn wir einen Sanitisierer verwenden.

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
