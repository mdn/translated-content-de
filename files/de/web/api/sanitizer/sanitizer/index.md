---
title: "Sanitizer: Sanitizer()-Konstruktor"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Der **`Sanitizer()`**-Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in den DOM eingefügt/geparst werden.

Die Standardeinstellung der `Sanitizer()`-Konfiguration erlaubt standardmäßig nur XSS-sichere Eingaben, indem sie Elemente wie {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>`, und Event-Handler-Attribute aus ihren jeweiligen Zulassungslisten ausschließt und Datenattribute sowie Kommentare verbietet.

Die `configuration`-Option des Konstruktors kann verwendet werden, um das Verhalten des Sanitizers anzupassen.

<!--
Entweder hier oder in der Konfiguration (oder beides) sollte erklärt werden, wie eine (un)gültige Konfiguration aussieht
-->

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das eine Sanitisierungskonfiguration definiert, oder der String `"default"`, um die Standardkonfiguration anzuzeigen.

### Rückgabewert

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird (eine, die sowohl "allowed" als auch "removed"-Konfigurationseinstellungen enthält), oder wenn ein String übergeben wird, der nicht `"default"` ist.

## Beispiele

### Erstellen des Standardsanitizers

Dieses Beispiel zeigt, wie Sie den Standard-`Sanitizer` erstellen können und wie das resultierende Konfigurationsobjekt protokolliert wird.

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

Der Code überprüft zuerst, ob die `Sanitizer`-Schnittstelle unterstützt wird. Dann wird der Standard-`Sanitizer` erstellt, ohne Optionen zu übergeben, und anschließend wird die Konfiguration abgerufen und protokolliert.

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

Die Ausgabe wird unten protokolliert. Beachten Sie, dass die Standardkonfiguration ziemlich umfangreich ist und viele Elemente und Attribute erlaubt.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Erstellen eines Sanitizers und dessen Verwendung mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitizer in einer sicheren HTML-DOM-Einfügemethode erstellen und verwenden könnten.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen wir sowohl das sanitisierte als auch das nicht sanitisierte HTML anzeigen werden.

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

Der folgende Code überprüft, ob die `Sanitizer`-Schnittstelle unterstützt wird. Dann definiert es einen String von "unsicherem HTML", der sowohl sichere Elemente wie {{htmlelement("p")}} und {{htmlelement("span")}}, als auch XSS-gefährdete Elemente wie {{htmlelement("script")}} enthält.

Wir erstellen dann ein `Sanitizer`-Objekt mit einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das die HTML-Elemente {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, und {{htmlelement("script")}} erlaubt. Der Sanitizer wird mit dem unsicheren String in [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet. Sowohl die Original- als auch die sanitisierte Zeichenfolge werden als Textknoten angezeigt.

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

Der ursprüngliche String und das sanitisierte HTML, das in den DOM geparst wurde, werden unten angezeigt. Beachten Sie, dass auch wenn der Sanitizer `<script>`-Elemente erlaubt, diese beim Einfügen des HTMLs mit [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) entfernt werden. Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch deren Namensräume umfasst.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
