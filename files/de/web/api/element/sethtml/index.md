---
title: "Element: Methode setHTML()"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML Sanitizer API")}}

Die Methode **`setHTML()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) bietet eine XSS-sichere Möglichkeit, einen HTML-String zu parsen, zu bereinigen und als Teilbaum des Elements in das DOM einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, selbst wenn sie von einem übergebenen Sanitizer zugelassen werden. Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}} und {{SVGElement("use")}}. Auch Event-Handler-Attribute werden immer entfernt.

Sofern unterstützt, wird die Methode als direkter Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) empfohlen, wenn ein von Benutzern bereitgestellter HTML-String gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String mit HTML, das bereinigt und in das Element eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit dem folgenden optionalen Parameter:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das festlegt, welche Elemente der Eingabe zugelassen oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn der Sanitizer sie zulässt.
        Wenn der Parameter nicht angegeben wird, kommt die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) zum Einsatz.

        Wenn Sie dieselbe Konfiguration mehrfach verwenden, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und ihn bei Bedarf anzupassen.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn an `options.sanitizer` Folgendes übergeben wird:
    - Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist, beispielsweise eine Konfiguration, die sowohl Einstellungen für zugelassene als auch für entfernte Elemente enthält.
    - Ein String, dessen Wert nicht `"default"` ist.
    - Ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- noch ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt oder ein String ist.

## Beschreibung

Die Methode **`setHTML()`** bietet eine XSS-sichere Möglichkeit, einen HTML-String zu parsen und zu einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu bereinigen. Anschließend fügt sie dieses als Teilbaum des Elements in das DOM ein.

`setHTML()` verwirft alle Elemente des HTML-Eingabestrings, die im Kontext des aktuellen Elements ungültig sind, beispielsweise ein {{htmlelement("col")}}-Element außerhalb eines {{htmlelement("table")}}-Elements. Danach entfernt die Methode alle HTML-Entitäten, die von der Sanitizer-Konfiguration nicht zugelassen werden, sowie alle XSS-unsicheren Elemente und Attribute – unabhängig davon, ob der Sanitizer sie zulässt.

Wenn im Parameter `options.sanitizer` kein Sanitizer angegeben ist, verwendet `setHTML()` die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration). Diese Konfiguration eignet sich für die meisten Anwendungsfälle, da sie sowohl XSS-Angriffe als auch andere Angriffe wie Clickjacking oder Spoofing verhindert.

Sie können einen eigenen `Sanitizer` oder eine eigene `SanitizerConfig` angeben, um festzulegen, welche Elemente, Attribute und Kommentare zugelassen oder entfernt werden. Beachten Sie, dass unsichere Elemente und Attribute bei Verwendung dieser Methode auch dann entfernt werden, wenn der Sanitizer sie zulässt. Die Methode entfernt dieselben Elemente wie ein Sanitizer, für den [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde.

Verwenden Sie `setHTML()` anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), um nicht vertrauenswürdige HTML-Strings in ein Element einzufügen. Auch gegenüber [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) sollte `setHTML()` bevorzugt werden, sofern es keinen konkreten Grund gibt, unsichere Elemente und Attribute zuzulassen.

Da diese Methode XSS-unsichere Bestandteile von Eingabestrings stets entfernt, wird sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) abgesichert oder validiert.

### Erneutes Parsen und mutiertes XSS (mXSS)

Auch nachdem eine HTML-Eingabe mit `setHTML()` bereinigt wurde, ist es nicht sicher, das HTML zu serialisieren und mit `innerHTML` erneut zu parsen. Der folgende Code ist beispielsweise unsicher.

```js example-bad
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // No longer sanitized!
otherElement.innerHTML = serializedHTML;
```

Der Grund dafür ist, dass die Bereinigung vom Kontext abhängt. Wenn Sie `setHTML()` für ein bestimmtes Element aufrufen, werden die in diesem Kontext unsicheren Elemente und Attribute entfernt. Wenn Sie das HTML serialisieren und direkt in einem anderen Element verwenden, kann es weiterhin Elemente enthalten, die in diesem anderen Element unsicher sind.

Dies wäre sicher (wenn auch sinnlos):

```js example-good
div.setHTML(unsafeString); // Safe
const serializedHTML = div.innerHTML; // Serialized as a plain string
otherDiv.setHTML(serializedHTML); // Safe — re-sanitized by setHTML()
```

Eine Klasse von Angriffen, die diese Schwachstelle ausnutzt, wird als [Mutation XSS](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss) bezeichnet. Um dieses Problem zu vermeiden, sollten Sie HTML-Strings ausschließlich mit sicheren Methoden wie `setHTML()` einfügen.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige Möglichkeiten, wie Sie mit `setHTML()` einen HTML-String bereinigen und einfügen können.

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

### Interaktives Beispiel für `setHTML()`

Dieses Beispiel demonstriert die Methode interaktiv mit verschiedenen Sanitizern. Der Code definiert Schaltflächen, auf die Sie klicken können, um einen HTML-String entweder mit dem Standard-Sanitizer oder mit einem eigenen Sanitizer zu bereinigen und einzufügen. Der ursprüngliche String und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse jeweils prüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden verschiedener Sanitizer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}-Element, in das der String eingefügt wird.

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

Zunächst definieren wir den zu bereinigenden String, der in allen Fällen gleich ist. Er enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten. Außerdem definieren wir den Handler für die Schaltfläche zum Neuladen.

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

Als Nächstes definieren wir den Click-Handler für die Schaltfläche, die das HTML mit dem Standard-Sanitizer setzt. Dieser sollte alle unsicheren Bestandteile entfernen, bevor der HTML-String eingefügt wird. Welche Elemente genau entfernt werden, sehen Sie in den [Beispielen zum `Sanitizer()`-Konstruktor](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer).

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

Der nächste Click-Handler setzt das HTML des Zielelements mithilfe eines eigenen Sanitizers, der nur {{htmlelement("div")}}-, {{htmlelement("p")}}- und {{htmlelement("script")}}-Elemente zulässt. Da wir die Methode `setHTML` verwenden, wird auch `<script>` entfernt!

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

Klicken Sie auf die Schaltflächen „Default“ und „allowScript“, um die Auswirkungen des Standard-Sanitizers beziehungsweise des eigenen Sanitizers zu sehen.

Da wir eine sichere Bereinigungsmethode verwenden, werden das `<script>`-Element und der `onclick`-Handler in beiden Fällen entfernt, selbst wenn der Sanitizer sie ausdrücklich zulässt. Das `data-`-Attribut wird dagegen nur vom Standard-Sanitizer entfernt; wenn wir einen eigenen Sanitizer übergeben, bleibt es erhalten.

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
