---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 061611f4e4244587ee63436a987e51c3215596d3
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`** Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen, der dann den bestehenden Baum im Shadow-DOM ersetzt.

Es wird empfohlen (wenn unterstützt), `setHTML()` als direkten Ersatz für [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) zu verwenden, wenn ein benutzerdefinierter HTML-String gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der definiert, welcher HTML bereinigt und in den Shadow-Root eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, welches definiert, welche Elemente des Inputs erlaubt oder entfernt werden sollen, oder der String `"default"` für die Standardeinstellung.
        Die Methode wird alle XSS-unsicheren Elemente und Attribute entfernen, auch wenn sie vom Sanitizer erlaubt sind.

        Beachten Sie, dass generell ein `Sanitizer` effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standardkonfiguration des Sanitizers verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese wird geworfen, wenn `options.sanitizer` übergeben wird:
    - nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - einen String, der nicht den Wert `"default"` hat.
    - einen Wert, der nicht ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder ein String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und diesen zu verwenden, um den bestehenden Baum im Shadow-DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die nicht von der Konfiguration des Sanitizers erlaubt sind, und entfernt außerdem alle XSS-unsicheren Elemente oder Attribute – unabhängig davon, ob sie von der Konfiguration des Sanitizers erlaubt sind.

Wenn keine Konfiguration des Sanitizers im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und verbietet somit Entitäten, die als unsicher gelten; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor für weitere Informationen.
Ein benutzerdefinierter Sanitizer oder eine benutzerdefinierte Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass, selbst wenn unsichere Optionen von der Konfiguration des Sanitizers erlaubt sind, sie beim Verwenden dieser Methode immer noch entfernt werden (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in den Shadow-DOM einzufügen.
Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es gibt einen spezifischen Bedarf, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode immer Saiten von XSS-unsicheren Entitäten bereinigt und daher nicht über die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu bereinigen und einzusetzen.

Zuerst erstellen wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das wir anvisieren möchten.
Dies könnte programmatisch mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir den Root deklarativ.

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

Der unten stehende Code zeigt, wie wir `setHTML()` mit einem String und verschiedenen Sanitizern aufrufen können, um das HTML zu filtern und in den Shadow-Root einzusetzen.

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

Dieses Beispiel bietet eine "live" Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzusetzen.
Der Originalstring und das bereinigte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente für die Anwendung verschiedener Sanitizer, einen weiteren Button zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das den deklarativen Shadow-Root enthält.

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

Zuerst definieren wir den Handler für den Neuladeschalter.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den String zum Bereinigen, der in allen Fällen gleich sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
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

Als Nächstes definieren wir den Klick-Handler für den Button, der den Shadow-Root mit dem Standardsanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingesetzt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()` Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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
Beachten Sie, weil wir die `setHTML` Methode verwenden, wird `<script>` trotzdem entfernt!

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

Klicken Sie auf die "Default" und "allowScript" Schaltflächen, um die Auswirkungen des Standard- und benutzerdefinierten Sanitizers zu sehen.
Beachten Sie, dass, weil wir die gleiche Sanitisierungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie ausdrücklich durch den Sanitizer erlaubt sind.

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
