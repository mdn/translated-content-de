---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 1ad74264b2c41abc00b12abfd1876747473f518c
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle bietet eine XSS-sichere Methode zum Parsen und Säubern eines HTML-Strings, der dann den bestehenden Baum im Shadow DOM ersetzt.

Die Methode entfernt alle Elemente und Attribute, die als XSS-gefährlich gelten, selbst wenn sie von einem übergebenen Sanierer erlaubt sind. Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Es wird empfohlen (sofern unterstützt), sie als direkten Ersatz für [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) zu verwenden, wenn ein benutzerdefinierter HTML-String gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das gesäubert und in den Shadow-Root injiziert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Eingangs erlaubt oder entfernt werden, oder der String `"default"` für die standardmäßige Konfiguration. Die Methode wird jegliche XSS-unsicheren Elemente und Attribute entfernen, selbst wenn sie vom Sanierer erlaubt sind.

        Beachten Sie, dass ein `Sanitizer` im Allgemeinen effizienter als eine `SanitizerConfig` ist, wenn die Konfiguration wiederverwendet werden soll. Wird kein spezifischer Sanierer angegeben, wird die Standard-Sanierer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese Ausnahme wird ausgelöst, wenn `options.sanitizer` ein:
    - nicht normalisiertes [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eines, das sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen umfasst) übergeben wird.
    - String, der nicht den Wert `"default"` hat.
    - Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode zum Parsen und Säubern eines HTML-Strings und verwendet diesen, um den bestehenden Baum im Shadow DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die nicht durch die Saniererkonfiguration zugelassen sind, und entfernt weiter alle XSS-gefährlichen Elemente oder Attribute — unabhängig davon, ob sie durch die Saniererkonfiguration erlaubt sind oder nicht.

Wenn keine Saniererkonfiguration im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer)-Konfiguration verwendet. Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet dadurch Entitäten, die als unsicher gelten; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor für weitere Informationen. Ein benutzerdefinierter Sanierer oder eine Saniererkonfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen. Beachten Sie, dass selbst wenn unsichere Optionen durch die Saniererkonfiguration erlaubt sind, sie bei der Verwendung dieser Methode (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft) weiterhin entfernt werden.

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Strings in das Shadow DOM einzufügen. Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Da diese Methode stets Eingabestrings von XSS-gefährlichen Entitäten reinigt, wird sie nicht mithilfe der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu säubern und zu injizieren.

Zuerst erstellen wir den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), den wir anvisieren wollen. Dies könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel werden wir den Root deklarativ erstellen.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können einen Zugriff auf den Shadow Root vom `#host`-Element wie folgt erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der folgende Code zeigt, wie wir `setHTML()` mit einem String und unterschiedlichen Sanierern aufrufen können, um das HTML in den Shadow Root zu filtern und zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit unterschiedlichen Sanierern aufgerufen wird. Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanierer zu säubern und zu injizieren. Der Originalstring und das gesäuberte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente für das Anwenden unterschiedlicher Sanierer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels, und ein {{htmlelement("div")}}, das den deklarativen Shadow Root enthält.

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

Zuerst definieren wir die Steuerung für die Neustarttaste.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den zu säubernden String, der für alle Fälle derselbe sein wird. Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-gefährlich angesehen werden. Wir holen auch die Variable `shadow`, die unser Zugriffspunkt auf den Shadow Root ist.

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

Als nächstes definieren wir den Klick-Handler für die Taste, die den Shadow Root mit dem Standardsanierer setzt. Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird. Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()`-Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanierers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt. Beachten Sie, dass das `<script>`-Element auch entfernt wird, da wir die `setHTML`-Methode verwenden!

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

Klicken Sie auf die Schaltflächen "Default" und "allowScript", um die Effekte des Standard- und benutzerdefinierten Sanierers zu sehen.

Beachten Sie, dass, da wir eine sichere Sanierungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie explizit durch den Sanierer erlaubt sind. Während das `data-`-Attribut mit dem Standard-Sanierer entfernt wird, ist es erlaubt, wenn wir einen Sanierer übergeben.

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
