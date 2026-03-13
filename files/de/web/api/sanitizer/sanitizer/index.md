---
title: "Sanitizer: Konstruktor von Sanitizer()"
short-title: Sanitizer()
slug: Web/API/Sanitizer/Sanitizer
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("HTML Sanitizer API")}}

Der **`Sanitizer()`**-Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in den DOM eingefügt/geparst werden.

## Syntax

```js-nolint
new Sanitizer()
new Sanitizer(configuration)
```

### Parameter

- `configuration` {{optional_inline}}
  - : Ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das eine [gültige Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) definiert, oder der String `"default"`, um die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) anzuzeigen.
    Die "leere Konfiguration" (`{}`) kann ebenfalls übergeben werden und führt zu einer [Entfernungskonfiguration](/de/docs/Web/API/HTML_Sanitizer_API#remove_configurations) mit leeren Arrays.

    Wenn weggelassen, gibt der Konstruktor einen `Sanitizer` mit der Standardkonfiguration zurück.

### Rückgabewert

Eine Instanz des [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der `configuration`-Parameter wird mit einem der folgenden Werte übergeben:
    - ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das keine gültige Konfiguration ist.
      Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält.
    - ein String, der nicht den Wert `"default"` hat.

## Beschreibung

Der Konstruktor erstellt ein neues [`Sanitizer`](/de/docs/Web/API/Sanitizer)-Objekt, das verwendet werden kann, um unerwünschte Elemente und Attribute aus HTML oder Dokumenten zu filtern, bevor sie in den DOM eingefügt/geparst werden.

Die [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) ist ein [Zulassungs-Sanitizer](/de/docs/Web/API/HTML_Sanitizer_API#allow_configurations), der XSS-unsichere Elemente und Attribute weglässt, zusammen mit anderen Elementen und Attributen, die potenziell in anderen Angriffen wie Clickjacking und Spoofing verwendet werden können.
Diese Konfiguration ist für die meisten Anwendungsfälle der Sanitierung geeignet.
Sie wird erstellt, wenn `"default"` oder kein Objekt an den Konstruktor übergeben wird.

Dem Konstruktor kann ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) mit einer [gültigen Konfiguration](/de/docs/Web/API/SanitizerConfig#valid_configuration) übergeben werden, um das Verhalten des Sanitizers anzupassen.

Eine gültige Konfiguration kann entweder `elements`- oder `removeElements`-Arrays (aber nicht beide) und entweder die `attributes`- oder `removeAttributes`-Arrays (aber nicht beide) spezifizieren.
In den meisten Fällen spielt es keine Rolle, welche dieser Arrays Sie verwenden, da zum Beispiel die Methode [`allowAttribute()`](/de/docs/Web/API/Sanitizer/allowAttribute) dasselbe Verhalten implementieren kann, indem das Attribut dem `attributes`-Array hinzugefügt oder aus dem `removeAttributes`-Array entfernt wird.
Das Wichtigste zu beachten ist, dass wenn Sie eine Konfiguration mit `removeElements` haben, dann können Sie keine per-Element-Attribute haben, da diese im `elements`-Array definiert werden müssen.

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

Der Code prüft zuerst, ob die `Sanitizer`-Schnittstelle unterstützt wird.
Dann erstellt er den Standard-`Sanitizer`, ohne Optionen zu übergeben, und erhält und protokolliert dann die Konfiguration.

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
Beachten Sie, dass die Standardkonfiguration eine Zulassungskonfiguration ist, die sowohl `elements`- als auch `attributes`-Arrays enthält, die die Elemente enthalten, die erlaubt sind, wenn der Sanitizer verwendet wird.

{{EmbedLiveSample("Creating the default sanitizer","100","480px")}}

### Erstellen eines `Sanitizer` und verwenden mit `setHTML()`

Dieses Beispiel zeigt, wie Sie einen benutzerdefinierten Sanitizer in einer sicheren HTML-DOM-Einfügemethode erstellen und verwenden können.

#### HTML

Hier definieren wir zwei {{htmlelement("pre")}}-Elemente, in denen wir sowohl das gesäuberte als auch das unsäuberliche HTML anzeigen.

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
Dann definiert er einen String von "unsicherem HTML", das sowohl sichere Elemente wie {{htmlelement("p")}} und {{htmlelement("span")}} als auch XSS-unsichere Elemente wie {{htmlelement("script")}} enthält.

Wir erstellen dann ein `Sanitizer`-Objekt mit einem [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das die HTML-Elemente erlaubt: {{htmlelement("div")}}, {{htmlelement("p")}}, {{htmlelement("span")}}, und {{htmlelement("script")}}.
Der Sanitizer wird mit dem unsicheren String in [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet.
Sowohl die ursprünglichen als auch die gesäuberten Strings werden als Textknoten angezeigt.

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

Die Originalstring und gesäubertes HTML, das in den DOM geparst wurde, werden unten angezeigt.
Beachten Sie, dass auch wenn der Sanitizer `<script>`-Elemente zulässt, diese aus dem eingefügten HTML entfernt werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet wird.
Beachten Sie auch, dass die Konfiguration sowohl die Namen der Elemente als auch deren Namespaces enthält.

{{EmbedLiveSample("Creating the default sanitizer","100","650px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
