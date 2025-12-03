---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Die **`setHTML()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und ihn als Unterstruktur des Elements in den DOM einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, selbst wenn sie durch einen übergebenen Sanitizer erlaubt sind.
Besonders die folgenden Elemente werden immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}} und Event-Handler-Attribute.

Es wird empfohlen (falls unterstützt), dies als Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zu verwenden, wenn ein vom Benutzer bereitgestellter HTML-String gesetzt wird.

## Syntax

```js-nolint
setHTML(input)
setHTML(input, options)
```

### Parameter

- `input`
  - : Ein String, der HTML definiert, das bereinigt und in das Element eingefügt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer`
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente des Eingabe-Strings erlaubt oder entfernt werden oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, auch wenn sie vom Sanitizer erlaubt sind.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter erwartet wird als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` übergeben wird:
    - Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Einstellungskonfigurationen enthält.
    - Ein String, der nicht den Wert `"default"` hat.
    - Ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTML()`**-Methode bietet eine XSS-sichere Methode, um einen HTML-String in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen und dann als Unterstruktur des Elements in den DOM einzufügen.

`setHTML()` verwirft alle Elemente im HTML-Eingabe-String, die im Kontext des aktuellen Elements ungültig sind, z.B. ein {{htmlelement("col")}}-Element außerhalb einer {{htmlelement("table")}}.
Es entfernt dann alle HTML-Entitäten, die durch die Sanitizer-Konfiguration nicht erlaubt sind, und entfernt weiterhin alle XSS-gefährlichen Elemente oder Attribute — unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind oder nicht.

Wenn keine Sanitizer-Konfiguration im `options.sanitizer`-Parameter angegeben ist, wird `setHTML()` mit der Standard-`Sanitizer`-Konfiguration verwendet.
Diese Konfiguration erlaubt alle Elemente und Attribute, die als XSS-sicher gelten, wodurch Entitäten, die als unsicher gelten, nicht erlaubt werden; siehe den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer)-Konstruktor für weitere Informationen.
Ein benutzerdefinierter Sanitizer oder eine Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass selbst wenn unsichere Optionen durch die Sanitizer-Konfiguration erlaubt sind, sie beim Verwenden dieser Methode (die implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft) immer noch entfernt werden.

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Beachten Sie, dass diese Methode immer Eingabe-Strings von XSS-unsicheren Entitäten bereinigt, sie wird nicht gesichert oder validiert über die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTML()` verwenden können, um einen HTML-String zu bereinigen und einzufügen.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie klicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Der Original-String und das bereinigte HTML werden protokolliert, damit Sie in jedem Fall die Ergebnisse überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Anwenden unterschiedlicher Sanitizer, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}-Element, um den String einzufügen.

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

Zuerst definieren wir den zu bereinigenden String, der in allen Fällen gleich sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-gefährlich gelten.
Wir definieren auch den Handler für die Neuladenschaltfläche.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML mit dem Standard-Sanitizer setzt.
Dieser sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente in den [`Sanitizer()`-Konstruktorbeispielen](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.
Beachten Sie, dass da wir die `setHTML`-Methode verwenden, `<script>` ebenfalls entfernt wird!

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

Klicken Sie auf die Schaltflächen "Default" und "allowScript", um die Effekte des Standard- und des benutzerdefinierten Sanitizers zu sehen.

Beachten Sie, dass wir, da wir eine sichere Bereinigungsmethode verwenden, in beiden Fällen das `<script>`-Element und der `onclick`-Handler entfernt werden, selbst wenn sie explizit durch den Sanitizer erlaubt sind.
Allerdings wird das `data-`-Attribut mit dem Standard-Sanitizer entfernt, es ist jedoch erlaubt, wenn wir einen Sanitizer übergeben.

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
