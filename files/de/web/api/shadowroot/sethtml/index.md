---
title: "ShadowRoot: Methode setHTML()"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML Sanitizer API")}}

Die Methode **`setHTML()`** der Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) bietet eine vor XSS geschützte Möglichkeit, einen HTML-String zu parsen und zu bereinigen. Das Ergebnis ersetzt anschließend den vorhandenen Baum im Shadow DOM.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten – selbst wenn ein übergebener Sanitizer sie erlaubt. Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} sowie Event-Handler-Attribute.

Wenn die Methode unterstützt wird, empfiehlt sie sich als direkter Ersatz für [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML), wenn ein von Benutzern bereitgestellter HTML-String gesetzt werden soll.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String mit HTML, das bereinigt und in die Shadow Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das festlegt, welche Elemente der Eingabe erlaubt oder entfernt werden, oder der String `"default"` für die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn der Sanitizer sie erlaubt.
        Wenn der Parameter nicht angegeben wird, kommt die Standardkonfiguration von `Sanitizer` zum Einsatz.

        Wenn Sie dieselbe Konfiguration mehrfach verwenden, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und ihn bei Bedarf anzupassen.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn an `options.sanitizer` Folgendes übergeben wird:
    - Eine [ungültige](/de/docs/Web/API/SanitizerConfig#valid_configuration) [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), beispielsweise eine Konfiguration, die sowohl Einstellungen für erlaubte als auch für entfernte Einträge enthält.
    - Ein String, dessen Wert nicht `"default"` ist.
    - Ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) noch eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die Methode **`setHTML()`** bietet eine vor XSS geschützte Möglichkeit, einen HTML-String zu parsen und zu bereinigen und damit den vorhandenen Baum im Shadow DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die nach der Sanitizer-Konfiguration nicht erlaubt sind. Darüber hinaus entfernt die Methode alle XSS-unsicheren Elemente und Attribute – unabhängig davon, ob die Sanitizer-Konfiguration sie erlaubt.

Wenn im Parameter `options.sanitizer` kein Sanitizer angegeben wird, verwendet `setHTML()` die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration). Diese Konfiguration eignet sich für die meisten Anwendungsfälle, da sie sowohl XSS-Angriffe als auch andere Angriffe wie Clickjacking oder Spoofing verhindert.

Sie können einen benutzerdefinierten `Sanitizer` oder eine `SanitizerConfig` angeben, um festzulegen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden. Auch wenn der Sanitizer unsichere Einträge erlaubt, werden diese bei Verwendung dieser Methode entfernt. Sie entfernt dieselben Elemente wie ein Sanitizer, für den [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde.

Zum Einfügen nicht vertrauenswürdiger HTML-Strings in das Shadow DOM sollten Sie `setHTML()` anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwenden. Verwenden Sie die Methode auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe), sofern es keinen besonderen Grund gibt, unsichere Elemente und Attribute zuzulassen.

Da diese Methode Eingabe-Strings stets von XSS-unsicheren Entitäten bereinigt, wird sie nicht mithilfe der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) abgesichert oder validiert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige Möglichkeiten, `setHTML()` zum Bereinigen und Einfügen eines HTML-Strings zu verwenden.

Zunächst erstellen wir die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), auf die wir zugreifen möchten. Sie ließe sich mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) programmatisch erstellen; für dieses Beispiel erstellen wir sie jedoch deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Über das Element `#host` können wir wie folgt eine Referenz auf die Shadow Root erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der folgende Code zeigt, wie Sie `setHTML()` mit einem String und verschiedenen Sanitizern aufrufen können, um das HTML zu filtern und in die Shadow Root einzufügen.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";

// setHTML() with default sanitizer
shadow.setHTML(unsanitizedString);

// Define custom Sanitizer and use in setHTML()
// This allows only elements: <div>, <p>, <span> (<script> is unsafe and will be removed)
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
shadow.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTML()
// This removes elements <div>, <p>, <span>, <script>, and any other unsafe elements/attributes
shadow.setHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "span", "script"] },
});
```

### Interaktives Beispiel für `setHTML()`

Dieses Beispiel demonstriert die Methode beim Aufruf mit verschiedenen Sanitizern. Der Code definiert Schaltflächen, auf die Sie klicken können, um einen HTML-String mit dem Standard-Sanitizer beziehungsweise einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen. Der ursprüngliche String und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in beiden Fällen untersuchen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden verschiedener Sanitizer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}-Element, das die deklarative Shadow Root enthält.

```html
<button id="buttonDefault" type="button">Default</button>
<button id="buttonAllowScript" type="button">allowScript</button>
<button id="reload" type="button">Reload</button>

<div id="host">
  <template shadowrootmode="open">
    <span>I am in the shadow DOM </span>
  </template>
</div>
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

Zunächst definieren wir den Handler für die Schaltfläche zum Neuladen.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Anschließend definieren wir den zu bereinigenden String, der in allen Fällen gleich ist. Er enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten. Außerdem erhalten wir die Variable `shadow`, unsere Referenz auf die Shadow Root.

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

const shadow = document.querySelector("#host").shadowRoot;
```

Als Nächstes definieren wir den Click-Handler für die Schaltfläche, die den Inhalt der Shadow Root mit dem Standard-Sanitizer setzt. Dieser sollte alle unsicheren Einträge entfernen, bevor der HTML-String eingefügt wird. Welche Elemente genau entfernt werden, sehen Sie in den [Beispielen zum `Sanitizer()`-Konstruktor](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer).

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // Set the content of the element using the default sanitizer
  shadow.setHTML(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "Default sanitizer: remove script element, onclick attribute, data- attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${shadow.innerHTML}`);
});
```

Der nächste Click-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanitizers, der nur die Elemente {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} erlaubt. Da wir die Methode `setHTML` verwenden, wird auch `<script>` entfernt!

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  shadow.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "Sanitizer: {elements: ['div', 'p', 'script']}\n Script removed even though allowed\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${shadow.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die Schaltflächen „Default“ und „allowScript“, um die Wirkung des Standard-Sanitizers beziehungsweise des benutzerdefinierten Sanitizers zu sehen.

Da wir eine sichere Bereinigungsmethode verwenden, werden in beiden Fällen das Element `<script>` und der `onclick`-Handler entfernt – selbst wenn der Sanitizer sie ausdrücklich erlaubt. Das Attribut `data-` wird hingegen nur vom Standard-Sanitizer entfernt; bei Übergabe des benutzerdefinierten Sanitizers bleibt es erhalten.

{{EmbedLiveSample("setHTML() live example","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
