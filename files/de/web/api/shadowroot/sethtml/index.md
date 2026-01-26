---
title: "ShadowRoot: setHTML() Methode"
short-title: setHTML()
slug: Web/API/ShadowRoot/setHTML
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`**-Methode des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces bietet eine XSS-sichere Methode, um eine HTML-Zeichenfolge zu parsen und zu säubern, die dann den bestehenden Baum im Shadow DOM ersetzt.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, selbst wenn sie von einem übergebenen Sanierer erlaubt werden.
Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Es wird empfohlen (falls unterstützt), diese Methode als unkomplizierte Alternative zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) zu verwenden, wenn eine vom Benutzer bereitgestellte HTML-Zeichenfolge gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Eine Zeichenfolge, die das zu säubernde und in das Shadow-Root einzufügende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder die Zeichenfolge `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn sie von dem Sanierer erlaubt werden.

        Beachten Sie, dass ein `Sanitizer` im Allgemeinen effizienter erwartet wird als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanierer-Konfiguration verwendet.

### Rückgabewert

Keine (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese wird ausgelöst, wenn `options.sanitizer` folgende Gegebenheiten aufweist:
    - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält.
    - Zeichenfolge, die nicht den Wert `"default"` hat.
    - Ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder Zeichenfolge ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um eine HTML-Zeichenfolge zu parsen, zu säubern und zu verwenden, um den bestehenden Baum im Shadow DOM zu ersetzen.

`setHTML()` entfernt alle HTML-Entitäten, die von der Saniererkonfiguration nicht zugelassen sind, und entfernt weiter alle XSS-unsicheren Elemente oder Attribute, unabhängig davon, ob sie von der Saniererkonfiguration erlaubt sind oder nicht.

Wenn keine Saniererkonfiguration im `options.sanitizer`-Parameter angegeben ist, wird `setHTML()` mit der Standardkonfiguration des [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, und lehnt damit Entitäten ab, die als unsicher gelten; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor für weitere Informationen.
Ein benutzerdefinierter Sanierer oder eine Saniererkonfiguration kann angegeben werden, um zu wählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass unsichere Optionen, auch wenn sie von der Saniererkonfiguration zugelassen werden, dennoch beim Verwenden dieser Methode entfernt werden (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwendet werden, um unvertraute HTML-Zeichenfolgen in das Shadow DOM einzufügen.
Es sollte auch anstelle von [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe) verwendet werden, es sei denn, es gibt einen spezifischen Bedarf, unsichere Elemente und Attribute zu erlauben.

Beachten Sie, dass diese Methode, da sie Eingabezeichenfolgen von XSS-unsicheren Entitäten immer säubert, nicht gesichert oder mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie `setHTML()` verwendet werden kann, um eine HTML-Zeichenfolge zu säubern und einzufügen.

Zuerst erstellen wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das wir anvisieren wollen.
Dieses könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir die Wurzel deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können einen Zugriff auf das Shadow-Root vom `#host`-Element wie folgt erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der folgende Code zeigt, wie `setHTML()` mit einer Zeichenfolge und verschiedenen Sanierern aufgerufen werden kann, um das HTML in das Shadow-Root zu filtern und einzufügen.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanierern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um eine Zeichenfolge von HTML mit einem Standard- und einem benutzerdefinierten Sanierer zu säubern und einzufügen.
Die ursprüngliche Zeichenfolge und das gereinigte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden verschiedener Sanierer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das das deklarative Shadow-Root enthält.

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

Zuerst definieren wir den Handler für die Neuladen-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die zu säubernde Zeichenfolge, die in allen Fällen gleich sein wird.
Diese enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Zugriff auf das Shadow-Root ist.

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

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das Shadow-Root mit dem Standardsanierer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor die HTML-Zeichenfolge eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente im [`Sanitizer()` Konstruktor Beispiele](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanierer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.
Beachten Sie, dass da wir die `setHTML`-Methode verwenden, `<script>` trotzdem entfernt wird!

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

Klicken Sie auf die "Default"- und "allowScript"-Schaltflächen, um die Effekte des Standard- und des benutzerdefinierten Sanierers zu sehen.

Da wir eine sichere Sanierungsmethode verwenden, werden in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt, selbst wenn sie explizit vom Sanierer erlaubt werden.
Während jedoch das `data-`-Attribut mit dem Standardsanierer entfernt wird, bleibt es erhalten, wenn wir einen Sanierer übergeben.

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
