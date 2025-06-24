---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Shadow DOM")}}

Die **`setHTMLUnsafe()`** Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle kann verwendet werden, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute optional herausgefiltert werden, und dann verwendet werden, um den bestehenden Baum im Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) werden XSS-unsichere HTML-Entitäten nicht garantiert entfernt.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Ein String oder eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz, die definiert, welche HTML geparst werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingabe-Strings zugelassen oder entfernt werden.
        Beachten Sie, dass im Allgemeinen ein `Sanitizer` erwartungsgemäß effizienter ist als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Falls nicht angegeben, wird kein Sanitizer verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `html` ein String übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie festgelegt ist.
    - `options.sanitizer` ein:
      - Wert übergeben wird, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - Nicht-normalisiertes [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eines, das sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
      - String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode kann verwendet werden, um einen HTML-String zu parsen, wobei unerwünschte Elemente und Attribute optional herausgefiltert werden und der bestehende Shadow DOM ersetzt wird.

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass die Methode zwar das Filtern unerwünschter HTML-Entitäten im Eingabe-String ermöglicht, aber nicht die Bereinigung oder Entfernung potenziell unsicherer XSS-relevanter Eingaben, wie beispielsweise `<script>`-Elemente und Inhaltsattribute von Scripts oder Ereignishandlern, erzwingt.
Wenn keine Sanitisierungskonfiguration im Parameter `options.sanitizer` angegeben ist, wird `setHTMLUnsafe()` ohne jegliche Sanitisierung verwendet.

Das Eingabe-HTML kann [deklarative Shadow-Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als eine [deklarative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem spezifischen Shadow-Host definiert, wird nur das erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow-Roots geparst.

`setHTMLUnsafe()` sollte anstelle von [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwendet werden, wenn potenziell unsichere HTML-Strings geparst werden sollen, die aus irgendwelchen Gründen XSS-unsichere Elemente oder Attribute enthalten müssen.
Wenn Strings, die injiziert werden sollen, keine unsicheren HTML-Entitäten enthalten müssen, sollten Sie [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwenden.

Beachten Sie, dass, da diese Methode nicht zwangsläufig Eingabe-Strings von XSS-unsicheren Entitäten bereinigt, Eingabe-Strings auch mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert werden sollten.
Wenn die Methode mit sowohl Trusted Types als auch einem Sanitizer verwendet wird, wird der Eingabe-String zuerst durch die vertrauenswürdige Transformationsfunktion geführt, bevor er saniert wird.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTMLUnsafe()` verwenden können, um einen HTML-String zu bereinigen und einzufügen.

Zuerst erstellen wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das wir ansprechen möchten.
Dieses könnte programmatisch mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir die Root deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können eine Referenz auf das Shadow-Root vom `#host`-Element auf diese Weise erhalten:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der folgende Code zeigt, wie wir `setHTMLUnsafe()` mit einem String und verschiedenen Sanitisatoren aufrufen können, um das HTML in das Shadow-Root zu filtern und einzufügen.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";

// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(unsanitizedString);

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: <div>, <p>, <span>, <script> (<script> is unsafe)
const sanitizer1 = new Sanitizer({ elements: ["div", "p", "span", "script"] });
shadow.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// This removes only the script
shadow.setHTMLUnsafe(unsanitizedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` Live-Beispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode bei Aufruf mit verschiedenen Sanitisatoren.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String mit einem Standard- und einem benutzerdefinierten Sanitizer zu bereinigen und einzufügen.
Der Originalstring und das bereinigte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente, um das HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer einzufügen (jeweils), eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}, das die deklarative Shadow-Root enthält.

```html
<button id="buttonNoSanitizer" type="button">None</button>
<button id="buttonAllowScript" type="button">allowScript</button>
<button id="reload" type="button">Reload</button>

<div id="host">
  <template shadowrootmode="open">
    <span>I am in the shadow DOM </span>
  </template>
</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 250px;
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

Zuerst definieren wir den Handler für die Neuladeschaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den Eingabe-String, der in das Shadow-Root eingefügt werden soll, und wird für alle Fälle gleich sein.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unsere Referenz auf das Shadow-Root ist.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das Shadow-Root mit `setHTMLUnsafe()` ohne Übergabe eines Sanitizers setzt.
Da kein Sanitizer vorhanden ist, erwarten wir, dass das eingefügte HTML mit dem Eingabestring übereinstimmt.

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set the content of the element with no sanitizer
  shadow.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent = "No sanitizer\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}}-Elemente zulässt.

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  shadow.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent = "Sanitizer: {elements: ['div', 'p', 'script']}\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${shadow.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Auswirkungen von keinem Sanitizer und einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die Schaltfläche "None" klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die Schaltfläche "allowScript" klicken, ist das `<script>`-Element immer noch vorhanden, aber das `<button>`-Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie sind nicht dazu gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() Live-Beispiel","100","350px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)
- [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML)
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) und [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
- [HTML Sanitizer API](/de/docs/Web/API/HTML_Sanitizer_API)
