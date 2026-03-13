---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle bietet eine XSS-sichere Methode, einen HTML-String zu parsen und zu bereinigen, der dann den vorhandenen Baum im Shadow DOM ersetzt.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, auch wenn sie durch einen übergebenen Sanitizer erlaubt sind.
Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Diese Methode wird empfohlen (falls unterstützt), um sie als direkten Ersatz für [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) zu verwenden, wenn ein vom Nutzer bereitgestellter HTML-String gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das bereinigt und in das Shadow-Root injiziert wird.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration).
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, auch wenn sie durch den Sanitizer erlaubt sind.
        Falls nicht angegeben, wird die Standardkonfiguration des `Sanitizer` verwendet.

        Beachten Sie, dass es effizienter sein kann, einen `Sanitizer` zu verwenden und diesen bei Bedarf zu modifizieren, wenn Sie dieselbe Konfiguration mehrfach verwenden.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese Ausnahme wird ausgelöst, wenn `options.sanitizer` aufgerufen wird mit:
    - einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
    - einem String, der nicht den Wert `"default"` hat.
    - einem Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, einen HTML-String zu parsen und zu bereinigen und ihn zu verwenden, um den bestehenden Baum im Shadow DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die nicht durch die Konfiguration des Sanitizers erlaubt sind, und entfernt zudem alle XSS-unsicheren Elemente oder Attribute — unabhängig davon, ob sie durch die Sanitizer-Konfiguration erlaubt sind.

Falls im Parameter `options.sanitizer` kein Sanitizer angegeben wird, wird `setHTML()` mit der [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwendet.
Diese Konfiguration ist für die meisten Anwendungsfälle geeignet, da sie XSS-Angriffe sowie andere Angriffe wie Clickjacking oder Spoofing verhindert.

Ein benutzerdefinierter `Sanitizer` oder `SanitizerConfig` kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch den Sanitizer erlaubt werden, sie bei Verwendung dieser Methode trotzdem entfernt werden (es entfernt dieselben Elemente wie ein Sanitizer, bei dem [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufgerufen wurde).

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in das Shadow DOM einzufügen.
Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass, da diese Methode immer Eingabe-Strings von XSS-unsicheren Entitäten bereinigt, sie nicht mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, `setHTML()` zu verwenden, um einen HTML-String zu bereinigen und zu injizieren.

Zuerst werden wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, das wir anvisieren wollen.
Dies könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel werden wir das Root deklarativ erstellen.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können wie folgt eine Referenz auf das Shadow Root vom `#host`-Element erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der folgende Code zeigt, wie wir `setHTML()` mit einem String und verschiedenen Sanitisern aufrufen können, um das HTML in das Shadow Root zu filtern und zu injizieren.

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

### `setHTML()` Live-Beispiel

Dieses Beispiel bietet eine "live" Demonstration der Methode, wenn sie mit verschiedenen Sanitisern aufgerufen wird.
Der Code definiert Buttons, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und zu injizieren.
Der ursprüngliche String und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden verschiedener Sanitisern, einen weiteren Button zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das das deklarative Shadow Root enthält.

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

Zuerst definieren wir den Handler für den Neuladen-Button.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den zu bereinigenden String, der für alle Fälle gleich ist.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unsere Referenz zum Shadow Root ist.

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

Als nächstes definieren wir den Click-Handler für den Button, der das Shadow Root mit dem Standard-Sanitizer setzt.
Dieser soll alle unsicheren Entitäten vor dem Einfügen des HTML-Strings entfernen.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [Beispielen des `Sanitizer()`-Konstruktors](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Click-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.
Beachten Sie, dass, weil wir die `setHTML`-Methode verwenden, `<script>` trotzdem entfernt wird!

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

Klicken Sie auf die Buttons "Default" und "allowScript", um die Effekte des Standard- und des benutzerdefinierten Sanitizers zu sehen.

Beachten Sie, dass, weil wir eine sichere Bereinigungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie ausdrücklich vom Sanitizer erlaubt sind.
Während jedoch das `data-`-Attribut mit dem Standard-Sanitizer entfernt wird, ist es erlaubt, wenn wir einen Sanitizer übergeben.

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
