---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String in einem [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen, der dann den bestehenden Baum im Shadow DOM ersetzt.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, welches bereinigt und in den Shadow-Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden, oder der String `"default"` für die Standard-Sanitizer-Konfiguration.
        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter ist als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wird kein Wert angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` eine:
    - nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - einen String, der nicht den Wert `"default"` hat.
    - einen Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist, übergeben wird.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und ihn zu nutzen, um den bestehenden Baum im Shadow DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die nicht durch die Sanitizer-Konfiguration erlaubt sind, und entfernt weiter alle XSS-unsicheren Elemente oder Attribute — unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind oder nicht.

Wenn keine Sanitizer-Konfiguration im Parameter `options.sanitizer` angegeben wird, wird `setHTML()` mit der Standard-`Sanitizer`-Konfiguration verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher angesehen werden, wodurch Entitäten, die als unsicher gelten, nicht erlaubt sind.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass auch wenn unsichere Optionen durch die Sanitizer-Konfiguration erlaubt sind, sie bei Verwendung dieser Methode immer noch entfernt werden (was implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um nicht vertrauenswürdige HTML-Strings in das Shadow DOM einzufügen.
Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezieller Bedarf, unsichere Elemente und Attribute zuzulassen.

Da diese Methode Eingabestrings von XSS-unsicheren Entitäten immer bereinigt, wird sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu bereinigen und einzufügen.

Zuerst erstellen wir den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), den wir anvisieren wollen.
Dieser könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir den Root deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können einen Zugriff auf den Shadow-Root vom `#host`-Element wie folgt erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der unten stehende Code zeigt, wie wir `setHTML()` mit einem String und verschiedenen Sanitizern aufrufen können, um den HTML-Inhalt im Shadow-Root zu filtern und einzufügen.

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

### `setHTML()`-Live-Beispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Der ursprüngliche String und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall prüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente, um verschiedene Sanitizer anzuwenden, eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}, das den deklarativen Shadow-Root enthält.

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

Zuerst definieren wir den Handler für die Neulade-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den String, der bereinigt werden soll, welcher in allen Fällen gleich sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Verweis auf den Shadow-Root ist.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die den Shadow-Root mit dem Standardsanitizer setzt.
Dieser sollte alle unsicheren Entitäten strippen, bevor der HTML-String eingefügt wird.
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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}}-Elemente erlaubt.
Beachten Sie, dass das `<script>` trotzdem entfernt wird, da wir die `setHTML`-Methode verwenden!

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

Klicken Sie auf die Schaltflächen "Default" und "allowScript", um die Effekte des Standardsanitizers bzw. des benutzerdefinierten Sanitizers zu sehen.
Beachten Sie, dass, da wir eine gleiche Bereinigungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie explizit vom Sanitizer erlaubt sind.

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
