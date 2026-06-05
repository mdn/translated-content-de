---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 3e471e05c2529b61634416e483ef415489d7d77a
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und ihn als Unterbaum des Elements in das DOM einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, selbst wenn sie von einem übergebenen Sanitizer erlaubt werden.
Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Es wird empfohlen (falls unterstützt), es als direkter Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zu verwenden, wenn Sie einen vom Benutzer bereitgestellten HTML-String setzen.

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
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingangs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn sie vom Sanitizer erlaubt sind.
        Wenn nicht angegeben, wird die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.

        Beachten Sie, dass es effizienter ist, einen `Sanitizer` zu verwenden und ihn bei Bedarf zu modifizieren, wenn Sie dieselbe Konfiguration mehrfach verwenden.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dieser wird ausgelöst, wenn `options.sanitizer` übergeben wird als:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält.
    - String, der nicht den Wert `"default"` hat.
    - Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und ihn dann als Unterbaum des Elements in das DOM einzufügen.

`setHTML()` verwirft alle Elemente im HTML-Input-String, die im Kontext des aktuellen Elements ungültig sind, wie zum Beispiel ein {{htmlelement("col")}} Element außerhalb eines {{htmlelement("table")}}.
Danach werden alle HTML-Entitäten entfernt, die von der Sanitizer-Konfiguration nicht zugelassen sind, und weitere XSS-unsichere Elemente oder Attribute werden entfernt — ob sie nun vom Sanitizer erlaubt sind oder nicht.

Wenn kein Sanitizer im `options.sanitizer` Parameter angegeben ist, wird `setHTML()` mit der [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.
Diese Konfiguration ist für die meisten Anwendungsfälle geeignet, da sie XSS-Angriffe und andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen vom Sanitizer erlaubt werden, sie bei Verwendung dieser Methode dennoch entfernt werden (sie entfernt dieselben Elemente wie ein Sanitizer, bei dem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifischer Bedarf, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode Eingabestrings von XSS-unsicheren Entitäten immer bereinigt und daher nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert wird.

### Neu-Parsing und mutiertes XSS (mXSS)

Selbst nach der Bereinigung von HTML-Eingaben mit `setHTML()`, ist es immer noch unsicher, das HTML zu serialisieren und mit `innerHTML` neu zu parsen.
Zum Beispiel ist der folgende Code unsicher.

```js example-bad
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // No longer sanitized!
other_element.innerHTML = serializedHTML;
```

Der Grund dafür ist, dass die Bereinigung kontextbezogen ist.
Wenn Sie `setHTML()` auf einem bestimmten Element aufrufen, werden die unsicheren Elemente und Attribute für diesen Kontext entfernt.
Wenn Sie das HTML serialisieren und direkt in einem anderen Element verwenden, könnte es immer noch Elemente enthalten, die in diesem Element unsicher sind.

Das wäre sicher (wenn auch sinnlos):

```js example-good
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // Serialized as a plain string
other_div.setHTML(serializedHTML); // Safe — re-sanitized by setHTML()
```

Es gibt eine Klasse von Angriffen, die diesen Fehler ausnutzen, bekannt als [mutiertes XSS](https://wicg.github.io/sanitizer-api/#mutated-xss).
Die einfache Regel, um dieses Problem zu vermeiden, ist, HTML-Strings immer nur mit sicheren Methoden wie `setHTML()` einzufügen.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode beim Aufruf mit verschiedenen Sanitizern.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Der ursprüngliche String und der bereinigte HTML-Code werden protokolliert, damit Sie die Ergebnisse in jedem Fall überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente für die Anwendung unterschiedlicher Sanitizer, einen weiteren Button zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, um den String einzufügen.

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

Zuerst definieren wir den String, der bereinigt werden soll, und der für alle Fälle gleich bleiben wird.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standard-Sanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente im [`Sanitizer()` Konstruktor-Beispiele](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente zulässt.
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

Klicken Sie auf die "Default" und "allowScript" Schaltflächen, um die Effekte des Standard- und benutzerdefinierten Sanitizers zu sehen.

Beachten Sie, dass wir, weil wir eine sichere Bereinigungsmethode verwenden, in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, selbst wenn sie vom Sanitizer ausdrücklich erlaubt sind.
Allerdings wird das `data-` Attribut mit dem Standard-Sanitizer entfernt, es ist jedoch erlaubt, wenn wir einen Sanitizer übergeben.

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
