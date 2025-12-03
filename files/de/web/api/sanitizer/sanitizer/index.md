---
title: "Sanitizer: Sanitizer() Konstruktor"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("HTML Sanitizer API")}}{{SeeCompatTable}}

Der **`Sanitizer()`** Konstruktor erzeugt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer) Objekt, welches verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten herauszufiltern, bevor sie in den DOM eingefügt oder dort geparst werden.

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) definiert, oder der String `"default"`, um die Standardkonfiguration anzuzeigen.

### Rückgabewert

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer) Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der `configuration` Parameter wird mit einem der folgenden Werte übergeben:
    - einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das keine gültige Konfiguration ist. Zum Beispiel eine Konfiguration, die sowohl "zugelassene" als auch "entfernte" Konfigurationseinstellungen enthält.
    - einem String, der nicht den Wert `"default"` hat.

## Beschreibung

Der Konstruktor erzeugt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer) Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten herauszufiltern, bevor sie in den DOM eingefügt oder dort geparst werden.

Der Standard-`Sanitizer` erlaubt standardmäßig nur XSS-sichere Eingaben, indem er Elemente wie {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>` und Event-Handler-Attribute aus ihren jeweiligen Erlaubnislisten auslässt und Datenattribute sowie Kommentare nicht zulässt. Er wird erstellt, wenn `"default"` oder kein Objekt an den Konstruktor übergeben wird.

Dem Konstruktor kann ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit einer [gültigen Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) übergeben werden, um das Verhalten des Sanitizers anzupassen.

Eine gültige Konfiguration kann entweder `elements`- oder `removeElements`-Arrays (aber nicht beide) und entweder die `attributes`- oder `removeAttributes`-Arrays (aber nicht beide) angeben. In den meisten Fällen ist es egal, welches dieser Arrays Sie verwenden, da die Methode [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) dasselbe Verhalten durch Hinzufügen des Attributs zum `attributes`-Array oder durch Entfernen aus dem `removeAttributes`-Array implementieren kann. Wichtig zu beachten ist, dass wenn Sie eine Konfiguration mit `removeElements` haben, Sie keine pro-Element-Attribute haben können, da diese im `elements`-Array definiert werden müssen.

## Beispiele

### Erstellen des Standard-Sanitizers

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

Der Code prüft zunächst, ob die `Sanitizer`-Schnittstelle unterstützt wird. Dann wird der Standard-`Sanitizer` erstellt, ohne Optionen zu übergeben, und anschließend die Konfiguration abgerufen und protokolliert.

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

Das Ergebnis wird unten protokolliert. Beachten Sie, dass die Standardkonfiguration eine Erlaubniskonfiguration ist, die sowohl `elements`- als auch `attributes`-Arrays enthält, welche die Elemente enthalten, die erlaubt sind, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Erstellen eines Sanitizers und dessen Verwendung mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitizer in einer sicheren HTML-DOM-Einfügemethode erstellen und verwenden können.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen sowohl das bereinigte als auch das unbereinigte HTML angezeigt wird.

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

Der folgende Code testet, ob die `Sanitizer`-Schnittstelle unterstützt wird. Dann wird ein String von "unsicherem HTML" definiert, der sowohl sichere Elemente, wie {{htmlelement("p")}} und {{htmlelement("span")}}, als auch XSS-unsichere Elemente wie {{htmlelement("script")}} enthält.

Wir erstellen dann ein `Sanitizer`-Objekt mit einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die die HTML-Elemente: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}} und {{htmlelement("script")}} erlaubt. Der Sanitizer wird mit dem unsicheren String in [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet. Sowohl der ursprüngliche als auch der bereinigte String werden als Textknoten angezeigt.

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

Der ursprüngliche String und das bereinigte HTML, das in den DOM geparst wurde, sind unten zu sehen. Beachten Sie, dass selbst wenn der Sanitizer `<script>`-Elemente erlaubt, diese aus dem eingefügten HTML entfernt werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet wird. Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch ihre Namensräume umfasst.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
