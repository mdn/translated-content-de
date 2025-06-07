---
title: "Sanitizer: Konstruktor Sanitizer()"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("HTML Sanitizer API")}}

Der **`Sanitizer()`**-Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in das DOM eingefügt/verarbeitet werden.

Die Standardkonfiguration von `Sanitizer()` erlaubt standardmäßig nur XSS-sichere Eingaben. Sie schließt Elemente wie {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>`, und Ereignishandler-Attribute aus ihren jeweiligen Erlaubnislisten aus und verbietet Datenattribute sowie Kommentare.

Die `configuration`-Option des Konstruktors kann verwendet werden, um das Verhalten des Sanitizers anzupassen.

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die eine Konfiguration für den Sanitizer definiert, oder der String `"default"`, um die Standardkonfiguration anzugeben.

### Rückgabewert

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird (eine, die sowohl "allowed"- als auch "removed"-Konfigurationseinstellungen enthält) oder wenn ein String übergeben wird, der nicht `"default"` ist.

## Beispiele

### Erstellen des Standard-Sanitizers

Dieses Beispiel zeigt, wie man den Standard-`Sanitizer` erstellt und das resultierende Konfigurationsobjekt protokolliert.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 400px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Der Code prüft zunächst, ob die `Sanitizer`-Schnittstelle unterstützt wird. Dann erstellt er den Standard-`Sanitizer`, ohne Optionen zu übergeben, und erhält und protokolliert die Konfiguration.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

```js
// Create default sanitizer
const sanitizer = new Sanitizer();

// Get and log the (default) configuration
const defaultConfig = sanitizer.get();
log(JSON.stringify(defaultConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Der Output wird unten protokolliert.
Beachten Sie, dass die Standardkonfiguration ziemlich umfangreich ist und viele Elemente und Attribute erlaubt.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Erstellen eines Sanitizers und Verwenden mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitizer in einer sicheren HTML-DOM-Einfügemethode erstellen und verwenden könnten.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen wir sowohl das bereinigte als auch das unbereinigte HTML anzeigen.

```html
<pre id="unmodified"></pre>
<pre id="setHTML"></pre>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 430px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent = text;
}
```

Der folgende Code prüft, ob die `Sanitizer`-Schnittstelle unterstützt wird. Danach definiert er einen String mit "unsicherem HTML", der sowohl sichere Elemente wie {{htmlelement("p")}} und {{htmlelement("span")}} als auch XSS-unsichere Elemente wie {{htmlelement("script")}} enthält.

Wir erstellen dann ein `Sanitizer`-Objekt mit einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die HTML-Elemente erlaubt: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, und {{htmlelement("script")}}.
Der Sanitizer wird mit dem unsicheren String in [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet.
Sowohl der ursprüngliche als auch der bereinigte String werden als Textknoten angezeigt.

```js hidden
if ("Sanitizer" in window) {
```

```js
// Define unsafe string of HTML
const unsafeHTMLString = `
  <div>
    <p>This is a paragraph. <span onclick="alert('You clicked the span!')">Click me</span></p>
    <script src="path/to/amodule.js" type="module"
  </div>
`;

// Set unsafe string as a text node of first element
const unmodifiedElement = document.querySelector("#unmodified");
unmodifiedElement.innerText = unsafeHTMLString;

// Create sanitizer using a SanitizerConfig that allows script (and other elements)
const sanitizer = new Sanitizer({ elements: ["div", "p", "span", "script"] });

// Use the sanitizer to set the HTML of the second element using the safe method
const setHTMLElement = document.querySelector("#setHTML");
setHTMLElement.setHTML(unsafeHTMLString, { sanitizer: sanitizer });

// Get that HTML and set it back to the element as a text node
// (so we can see the elements)
setHTMLElement.innerText = setHTMLElement.innerHTML;

// Log the configuration
const sanitizerConfig = sanitizer.get();
log(JSON.stringify(sanitizerConfig, null, 2));
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
}
```

#### Ergebnisse

Der ursprüngliche String und das bereinigte HTML, das in das DOM eingefügt wurde, werden unten gezeigt.
Beachten Sie, dass selbst wenn der Sanitizer `<script>`-Elemente erlaubt, diese aus dem eingefügten HTML entfernt werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet wird.
Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch ihre Namensräume enthält.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
