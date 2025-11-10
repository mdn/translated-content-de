---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 1ad74264b2c41abc00b12abfd1876747473f518c
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet eine XSS-sichere Methode, um eine Zeichenkette von HTML zu parsen und zu bereinigen und sie als Unterbaum des Elements in das DOM einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, selbst wenn sie von einem übergebenen Sanitizer erlaubt werden.
Insbesondere werden die folgenden Elemente immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, und Ereignis-Handler-Attribute.

Es wird (wenn unterstützt) als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) empfohlen, wenn eine vom Benutzer bereitgestellte Zeichenkette von HTML gesetzt werden soll.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Eine Zeichenkette, die HTML definiert, das bereinigt und in das Element eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Inputs erlaubt oder entfernt werden, oder die Zeichenkette `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn sie vom Sanitizer erlaubt sind.

        Beachten Sie, dass ein `Sanitizer` im Allgemeinen effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed"- als auch "removed"-Konfigurationseinstellungen enthält).
    - eine Zeichenkette, die nicht den Wert `"default"` hat.
    - ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder eine Zeichenkette ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um eine Zeichenkette von HTML in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen und sie dann als Unterbaum des Elements in das DOM einzufügen.

`setHTML()` verwirft alle Elemente in der HTML-Input-Zeichenkette, die im Kontext des aktuellen Elements ungültig sind, wie etwa ein {{htmlelement("col")}} Element außerhalb eines {{htmlelement("table")}}.
Es entfernt dann alle HTML-Entitäten, die von der Sanitizer-Konfiguration nicht erlaubt sind, und entfernt weiter alle XSS-unsicheren Elemente oder Attribute – unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind oder nicht.

Wenn keine Sanitizer-Konfiguration im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der Standardkonfiguration von [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, wodurch Entitäten, die als unsicher gelten, nicht erlaubt werden; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor für weitere Informationen.
Ein benutzerdefinierter Sanitizer oder eine Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass unsichere Optionen, selbst wenn sie von der Sanitizer-Konfiguration erlaubt sind, bei Verwendung dieser Methode immer noch entfernt werden (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um unzuverlässige Zeichenketten von HTML in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zu erlauben.

Beachten Sie, dass diese Methode immer Eingabezeichenketten von XSS-unsicheren Entitäten bereinigt, es wird nicht mithilfe der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um eine Zeichenkette von HTML zu bereinigen und zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitisierern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie klicken können, um eine Zeichenkette von HTML mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und zu injizieren.
Die ursprüngliche Zeichenkette und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Anwenden verschiedener Sanitisierverfahren, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, um die Zeichenkette einzufügen.

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

Zuerst definieren wir die zu bereinigende Zeichenkette, die für alle Fälle dieselbe sein wird.
Diese enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für die Neulade-Schaltfläche.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standardsanitizer setzt.
Dies sollte alle unsicheren Entitäten entfernen, bevor die Zeichenkette von HTML eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()` Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass, weil wir die `setHTML` Methode verwenden, `<script>` ebenfalls entfernt wird!

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

Klicken Sie auf die "Default" und "allowScript" Schaltflächen, um die Effekte des Standard- und benutzerdefinierten Sanitisierers zu sehen.

Beachten Sie, dass weil wir eine sichere Bereinigungsmethode verwenden, in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, selbst wenn sie durch den Sanitisierer explizit erlaubt sind.
Während das `data-` Attribut mit dem Standardsanitizer entfernt wird, bleibt es erhalten, wenn wir einen Sanitisierer verwenden.

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
