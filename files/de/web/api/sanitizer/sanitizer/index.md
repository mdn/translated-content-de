---
title: "Sanitizer: Konstruktor `Sanitizer()`"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: f9e87cf7d09830e097a2aadb5e507eb12c9a4514
---

{{APIRef("HTML Sanitizer API")}}

Der **`Sanitizer()`** Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor diese in den DOM eingefügt oder geparst werden.

Die standardmäßige `Sanitizer()`-Konfiguration erlaubt nur XSS-sichere Eingaben, indem sie Elemente wie {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>` und Ereignis-Handler-Attribute in ihren jeweiligen Erlaubnislisten auslässt sowie Datenattribute und Kommentare nicht zulässt.

Die `configuration`-Option des Konstruktors kann verwendet werden, um das Verhalten des Sanitisers anzupassen.

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die eine Sanitizer-Konfiguration definiert, oder der String `"default"`, um die Standardkonfiguration anzugeben.

### Rückgabe

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält), oder wenn ein String übergeben wird, der nicht `"default"` ist.

## Beispiele

### Erstellen des Standard-Sanitisers

Dieses Beispiel zeigt, wie Sie den Standard-`Sanitizer` erstellen und das resultierende Konfigurationsobjekt protokollieren können.

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

Der Code testet zunächst, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Anschließend wird der Standard-`Sanitizer` erstellt, indem keine Optionen übergeben werden, und dann die Konfiguration abgerufen und protokolliert.

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

Die Ausgabe wird unten protokolliert.
Beachten Sie, dass die Standardkonfiguration ziemlich groß ist und viele Elemente und Attribute zulässt.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Erstellen eines Sanitisers und Verwenden mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitiser in einer sicheren HTML-DOM-Einfügemethode erstellen und verwenden können.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen wir sowohl das bereinigte als auch das nicht bereinigte HTML anzeigen werden.

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

Der folgende Code testet, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Er definiert dann einen String mit "unsicherem HTML", der sowohl sichere Elemente wie {{htmlelement("p")}} und {{htmlelement("span")}} als auch XSS-unsichere Elemente wie {{htmlelement("script")}} enthält.

Dann erstellen wir ein `Sanitizer`-Objekt mit einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das die HTML-Elemente {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}} und {{htmlelement("script")}} zulässt.
Der Sanitiser wird mit dem unsicheren String in [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet.
Sowohl die ursprünglichen als auch die bereinigten Strings werden als Textknoten angezeigt.

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

Der ursprüngliche String und das bereinigte HTML, das in den DOM geparst wurde, werden unten angezeigt.
Beachten Sie, dass auch wenn der Sanitiser `<script>`-Elemente zulässt, diese aus dem eingefügten HTML entfernt werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet wird.
Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch ihre Namespaces umfasst.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
