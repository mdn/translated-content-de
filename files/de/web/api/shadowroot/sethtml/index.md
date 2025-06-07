---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces bietet eine XSS-sichere Methode, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu sanitieren, welches dann den bestehenden Baum im Shadow DOM ersetzt.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das saniert und in die Shadow-Root eingefügt werden soll.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standard-Sanitizer-Konfiguration.
        Beachten Sie, dass in der Regel ein `"Sanitizer"` effizienter sein sollte als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`

  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:

    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu sanitieren und ihn zu verwenden, um den bestehenden Baum im Shadow DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entities, die von der Sanitizer-Konfiguration nicht erlaubt sind, und entfernt außerdem alle XSS-unsicheren Elemente oder Attribute, unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind.

Wenn keine Sanitizer-Konfiguration im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer)-Konfiguration verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet dadurch Entitäten, die als unsicher angesehen werden.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden sollen.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Sanitizer-Konfiguration erlaubt sind, sie bei Verwendung dieser Methode dennoch entfernt werden (was implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in das Shadow DOM einzufügen.
Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Da diese Methode immer Input-Strings von XSS-unsicheren Entitäten saniert, ist sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu sanieren und einzufügen.

Zuerst werden wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, das wir anvisieren möchten.
Dies könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel werden wir die Root deklarativ erstellen.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können einen Zugriff auf die Shadow-Root vom `#host` Element wie folgt erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der untenstehende Code zeigt, wie wir `setHTML()` mit einem String und verschiedenen Sanitizern aufrufen können, um das HTML in die Shadow-Root zu filtern und einzufügen.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie klicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu sanieren und einzufügen.
Der ursprüngliche String und das sanierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden verschiedener Sanitizer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das die deklarative Shadow-Root enthält.

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

Zuerst definieren wir den Handler für die Neustart-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den zu sanierenden String, der in allen Fällen derselbe sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Zugriff auf die Shadow-Root darstellt.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die die Shadow-Root mit dem Standard-Sanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()`-Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // Set the content of the element using the default sanitizer
  shadow.setHTML(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "Default sanitizer: remove &lt;script&gt; element and onclick attribute\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass da wir die `setHTML` Methode verwenden, `<script>` ebenfalls entfernt wird!

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
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die "Default" und "allowScript"-Schaltflächen, um die Auswirkungen des Standard- und benutzerdefinierten Sanitizers zu sehen.
Beachten Sie, dass, weil wir dieselbe Sanierungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie explizit vom Sanitizer erlaubt sind.

{{EmbedLiveSample("setHTML() live example","100","350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
