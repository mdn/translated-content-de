---
title: "Element: setHTML() Methode"
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Die **`setHTML()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle bietet eine XSS-sichere Methode, um einen HTML-String zu parsen und zu bereinigen und ihn als Teilbaum des Elements im DOM einzufügen.

Die Methode entfernt alle Elemente und Attribute, die als XSS-unsicher gelten, selbst wenn sie von einem übergebenen Sanitizer erlaubt werden.
Insbesondere die folgenden Elemente werden immer entfernt: {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{SVGElement("use")}}, und Ereignis-Handler Attribute.

Es wird empfohlen (falls unterstützt), diese Methode als direkten Ersatz für [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) zu verwenden, wenn ein vom Benutzer bereitgestellter HTML-String gesetzt wird.

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
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingangs erlaubt oder entfernt werden, oder der String `"default"` für die Standardkonfiguration.
        Die Methode entfernt alle XSS-unsicheren Elemente und Attribute, selbst wenn sie vom Sanitizer erlaubt werden.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter als ein `SanitizerConfig` sein soll, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird die Standard-Sanitizer-Konfiguration verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn `options.sanitizer` folgende Werte übergeben werden:
    - Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
      Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
    - ein String, der nicht den Wert `"default"` hat.
    - ein Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.

## Beschreibung

Die **`setHTML()`** Methode bietet eine XSS-sichere Methode, um einen HTML-String in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und zu bereinigen und diesen dann als Teilbaum des Elements in das DOM einzufügen.

`setHTML()` lässt alle Elemente im HTML-String fallen, die im Kontext des aktuellen Elements ungültig sind, wie ein {{htmlelement("col")}} Element außerhalb einer {{htmlelement("table")}}.
Es entfernt dann alle HTML-Entitäten, die nicht durch die Sanitizer-Konfiguration erlaubt sind, und entfernt weiterhin jegliche XSS-unsicheren Elemente oder Attribute — unabhängig davon, ob sie von der Sanitizer-Konfiguration erlaubt sind oder nicht.

Wenn keine Sanitizer-Konfiguration im Parameter `options.sanitizer` angegeben ist, wird `setHTML()` mit der Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer) Konfiguration verwendet.
Diese Konfiguration erlaubt alle als XSS-sicher geltenden Elemente und Attribute und lehnt daher die als unsicher geltenden Entitäten ab; sehen Sie den [`Sanitizer()`](/de/docs/Web/API/Sanitizer/Sanitizer) Konstruktor für weitere Informationen.
Ein benutzerdefinierter Sanitizer oder eine Sanitizer-Konfiguration kann angegeben werden, um auszuwählen, welche Elemente, Attribute und Kommentare erlaubt oder entfernt werden.
Beachten Sie, dass auch wenn unsichere Optionen von der Sanitizer-Konfiguration erlaubt werden, sie bei Verwendung dieser Methode immer noch entfernt werden (was implizit [`Sanitizer.removeUnsafe()`](/de/docs/Web/API/Sanitizer/removeUnsafe) aufruft).

`setHTML()` sollte anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um unzuverlässige HTML-Strings in ein Element einzufügen.
Es sollte auch anstelle von [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe) verwendet werden, es sei denn, es besteht ein spezifisches Bedürfnis, unsichere Elemente und Attribute zuzulassen.

Da diese Methode immer Eingabestrings von XSS-unsicheren Entitäten bereinigt, ist sie nicht durch die [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) gesichert oder validiert.

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

Dieses Beispiel bietet eine "live" Demonstration der Methode bei Aufruf mit verschiedenen Sanitisern.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Der Originalstring und das bereinigte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zur Anwendung verschiedener Sanitisers, einen weiteren Button, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}} Element, um den String einzufügen.

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

Zuerst definieren wir den zu bereinigenden String, der für alle Fälle gleich sein wird.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für die Neuladen-Schaltfläche.

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
Dieser sollte alle unsicheren Entitäten entfernen, bevor der HTML-String eingefügt wird.
Beachten Sie, dass Sie genau sehen können, welche Elemente im [`Sanitizer()` Konstruktorbeispiel](/de/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer) entfernt werden.

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

Der nächste Klick-Handler setzt das Ziel-HTML mittels eines benutzerdefinierten Sanitisers, das nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass, weil wir die Methode `setHTML` verwenden, `<script>` auch entfernt wird!

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

Klicken Sie auf die Buttons "Default" und "allowScript", um die Effekte des Standard- bzw. benutzerdefinierten Sanitisers zu sehen.

Beachten Sie, dass, weil wir eine sichere Bereinigungsmethode verwenden, in beiden Fällen das `<script>` Element und der `onclick` Handler entfernt werden, selbst wenn sie ausdrücklich von dem Sanitizer erlaubt wurden.
Während das `data-` Attribut mit dem Standard-Sanitizer entfernt wird, wird es erlaubt, wenn wir einen Sanitizer übergeben.

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
