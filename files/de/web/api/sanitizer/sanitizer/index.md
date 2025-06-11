---
title: "Sanitizer: Konstruktor `Sanitizer()`"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: baec726bf3fe1bd82cf22a0f8ba9523e0f7ccd80
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Der **`Sanitizer()`**-Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in das DOM eingefügt/geparst werden.

Die Standardeinstellung der `Sanitizer()`-Konfiguration erlaubt standardmäßig nur XSS-sichere Eingaben und lässt Elemente wie {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>`, und Event-Handler-Attribute von ihren jeweiligen Zulassungslisten aus, sowie verbietet Datenattribute und Kommentare.

Die Option `Konfiguration` des Konstruktors kann verwendet werden, um das Verhalten des Sanitizers anzupassen.

<!--
Entweder hier oder in der Konfigurationsbeschreibung (oder in beiden) erklären, wie eine (in)valide Konfiguration aussieht
-->

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der eine Sanitizer-Konfiguration definiert, oder der String `"default"`, um die Standardkonfiguration anzugeben.

### Rückgabewert

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird (eine, die sowohl "allowed"- als auch "removed"-Konfigurationseinstellungen enthält) oder wenn ein String übergeben wird, der nicht `"default"` ist.

## Beispiele

### Erstellen des Standardsanitizers

Dieses Beispiel zeigt, wie Sie den Standard-`Sanitizer` erstellen und das resultierende Konfigurationsobjekt protokollieren.

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

Der Code prüft zunächst, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Dann wird der Standard-`Sanitizer` ohne Optionen erstellt und anschließend die Konfiguration abgerufen und protokolliert.

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

Das Ergebnis wird unten protokolliert.
Beachten Sie, dass die Standardkonfiguration ziemlich umfangreich ist und viele Elemente und Attribute zulässt.

{{EmbedLiveSample("Erstellen des Standardsanitizers","100","480px")}}

### Erstellen eines Sanitizers und Verwenden mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitizer in einer sicheren HTML-DOM-Einfügemethode erstellen und verwenden können.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen wir sowohl die bereinigten als auch die unbereinigten HTML anzeigen werden.

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

Der folgende Code prüft, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Dann wird ein String von "unsicherem HTML" definiert, das sowohl sichere Elemente wie {{htmlelement("p")}} und {{htmlelement("span")}} als auch XSS-unsichere Elemente wie {{htmlelement("script")}} enthält.

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
setHTMLElement.setHTML(unsafeHTMLString, { sanitizer });

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

Der ursprüngliche String und das bereinigte HTML, das in das DOM geparst wurde, werden unten angezeigt.
Beachten Sie, dass, obwohl der Sanitizer `<script>`-Elemente erlaubt, diese beim Einfügen in das HTML mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) entfernt werden.
Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch ihre Namespaces beinhaltet.

{{EmbedLiveSample("Erstellen des Standardsanitizers","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
