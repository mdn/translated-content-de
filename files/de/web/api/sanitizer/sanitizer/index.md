---
title: "Sanitizer: Konstruktor von Sanitizer()"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: ba886c384e385689ce8feffacf4f7ce1d8c5e736
---

{{APIRef("HTML Sanitizer API")}}

Der **`Sanitizer()`**-Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in den DOM eingefügt/verarbeitet werden.

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) definiert, oder der String `"default"`, um die Standardkonfiguration anzuzeigen.

### Rückgabewert

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der `configuration`-Parameter wird mit einem der folgenden übergeben:
    - einer [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die keine gültige Konfiguration ist. Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
    - einem String, der nicht den Wert `"default"` hat.

## Beschreibung

Der Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in den DOM eingefügt/verarbeitet werden.

Der Standard-`Sanitizer` erlaubt standardmäßig nur XSS-sichere Eingaben und lässt Elemente wie {{HTMLElement("script")}}, {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, `<use>` und Ereignishandler-Attribute von ihren jeweiligen Erlaubnislisten aus und verbietet Datenattribute und Kommentare.
Er wird erstellt, wenn `"default"` oder kein Objekt an den Konstruktor übergeben wird.

Dem Konstruktor kann eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit einer [gültigen Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) übergeben werden, um das Verhalten des Sanitizers anzupassen.

Eine gültige Konfiguration kann entweder `elements` oder `removeElements` Arrays (aber nicht beides) und entweder die `attributes` oder `removeAttributes` Arrays (aber nicht beides) spezifizieren.
In den meisten Fällen ist es irrelevant, welches dieser Arrays Sie verwenden, da beispielsweise die Methode [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) dasselbe Verhalten implementieren kann, indem sie das Attribut zum `attributes` Array hinzufügt oder es aus dem `removeAttributes` Array entfernt.
Das Hauptaugenmerk liegt darauf, dass, wenn Sie eine Konfiguration mit `removeElements` haben, Sie keine attributspezifischen Elemente haben können, da diese im `elements` Array definiert sein müssen.

## Beispiele

### Erstellen des Standard-Sanitizers

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

Der Code testet zunächst, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Dann erstellt er den Standard-`Sanitizer`, übergibt keine Optionen und erhält und protokolliert die Konfiguration.

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

Unten ist die Ausgabe protokolliert.
Beachten Sie, dass die Standardkonfiguration eine Erlaubnis-Konfiguration ist, die sowohl `elements` als auch `attributes` Arrays enthält, die die Elemente enthalten, die erlaubt sind, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Erstellen eines Sanitizers und dessen Verwendung mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitizer erstellen und in einer sicheren HTML-DOM-Einfügemethode verwenden könnten.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen wir sowohl das bereinigte als auch das unbereinigte HTML anzeigen werden.

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
Dann definiert er einen String von "unsicherem HTML", das sowohl sichere Elemente, wie {{htmlelement("p")}} und {{htmlelement("span")}}, als auch XSS-unsichere Elemente wie {{htmlelement("script")}} enthält.

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

Der ursprüngliche String und das bereinigte HTML, das in den DOM geparst wurde, werden unten angezeigt.
Beachten Sie, dass auch wenn der Sanitizer `<script>`-Elemente erlaubt, diese aus dem eingefügten HTML entfernt werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet wird.
Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch deren Namespaces umfasst.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
