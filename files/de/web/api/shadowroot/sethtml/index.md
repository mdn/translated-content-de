---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: b3401d14892454cb509338239fb1a028e5c1470f
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu säubern und in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu konvertieren, das dann den bestehenden Baum im Shadow-DOM ersetzt.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der definiert, welches HTML gesäubert und in den Shadow-Root injiziert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Beachten Sie, dass ein `Sanitizer` im Allgemeinen effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standardkonfiguration des Sanitizers verwendet.
        Die Standardkonfiguration erlaubt nur bekannte Elemente und Attribute, die als XSS-sicher gelten; insbesondere sind {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, Event-Handler-Attribute und Daten-Attribute nicht in der Zulassungsliste enthalten.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - eine nicht-normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubt" als auch "entfernt" Konfigurationseinstellungen enthält).
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu säubern, und verwendet ihn, um den bestehenden Baum im Shadow-DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die nicht durch die Konfiguration des Sanitizers erlaubt sind, und entfernt zudem alle XSS-gefährlichen Elemente oder Attribute – unabhängig davon, ob sie durch die Konfiguration des Sanitizers erlaubt sind oder nicht.

Wenn keine Konfiguration des Sanitizers im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet somit Entitäten, die als unsicher gelten; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor für mehr Informationen.
Ein benutzerdefinierter Sanitizer oder eine Sanitisierungskonfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Konfiguration des Sanitizers erlaubt sind, sie bei Verwendung dieser Methode (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft) dennoch entfernt werden.

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) für das Einfügen unzuverlässiger HTML-Strings in das Shadow-DOM verwendet werden.
Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass da diese Methode Eingabe-Strings von XSS-gefährlichen Entitäten immer saniert, sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, `setHTML()` zur Sanitisierung und Einbindung eines HTML-Strings zu verwenden.

Zuerst erstellen wir den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), auf den wir abzielen möchten.
Dieser könnte programmatisch mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir den Root deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können einen Zugriff auf den Shadow-Root über das `#host`-Element so erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der Code unten zeigt, wie wir `setHTML()` mit einem String und verschiedenen Sanitizern aufrufen können, um das HTML in den Shadow-Root zu filtern und zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu säubern und einzuschleusen.
Der ursprüngliche String und das gesäuberte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zur Anwendung verschiedener Sanitizer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das den deklarativen Shadow-Root enthält.

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

Zuerst definieren wir den Handler für die Neuladen-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den String, der gesäubert werden soll, der für alle Fälle derselbe sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-gefährlich angesehen werden.
Wir erhalten auch die Variable `shadow`, die unser Zugriff auf den Shadow-Root ist.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"></script>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die den Shadow-Root mit dem Standardsanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente im [`Sanitizer()` Konstruktorbeispiele](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.
Beachten Sie, dass das `<script>` auch entfernt wird, weil wir die Methode `setHTML` verwenden!

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

Klicken Sie auf die "Default"- und "allowScript"-Schaltflächen, um die Effekte des Standard- und benutzerdefinierten Sanitizers zu sehen.
Beachten Sie, dass, weil wir dieselbe Sanitisierungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn dies vom Sanitizer explizit erlaubt wird.

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
