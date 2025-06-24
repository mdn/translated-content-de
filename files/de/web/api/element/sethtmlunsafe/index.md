---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute herausgefiltert werden können, die im Kontext nicht benötigt werden. Anschließend wird es verwendet, um den Subtree des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) wird bei `setHTMLUnsafe()` nicht garantiert, dass XSS-unsichere HTML-Entities entfernt werden.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Ein String oder [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz, die das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden. Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter erwartet wird als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll. Falls nicht angegeben, wird kein Sanitizer verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese Ausnahme wird geworfen, wenn:
    - `input` ein String übergeben wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie festgelegt ist.
    - `options.sanitizer` einen Wert übergeben bekommt, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
      - ein String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute herausgefiltert werden können, die im Kontext nicht benötigt werden. Anschließend wird es verwendet, um den Subtree des Elements im DOM zu ersetzen.

Die "Unsafe"-Endung im Methodennamen zeigt an, dass die Methode zwar erlaubt, den Eingabestring von unerwünschten HTML-Entities zu filtern, jedoch nicht die Sanierung oder Entfernung potenziell unsicherer, XSS-relevanter Eingaben, wie z. B. {{htmlelement("script")}}-Elemente und Skript- oder Ereignis-Handler-Content-Attribute, erzwingt. Wenn keine Konfiguration in `options.sanitizer` angegeben ist, wird `setHTMLUnsafe()` ohne jede Sanitization verwendet.

Der HTML-Input kann [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) umfassen. Wenn der HTML-String mehr als eine [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Schatten-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieses Schatten-Roots geparst.

Wie `setHTML()`, kann `setHTMLUnsafe()` anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um HTML-Strings zu parsen, die deklarative Schatten-Roots enthalten können. `setHTMLUnsafe()` sollte anstelle von [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet werden, wenn potenziell unsichere HTML-Strings analysiert werden sollen, die aus irgendeinem Grund XSS-unsichere Elemente oder Attribute enthalten müssen. Wenn die zu injectierenden Strings keine unsicheren HTML-Entities enthalten müssen, sollten Sie immer [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) nutzen.

Da diese Methode nicht zwangsläufig Eingabe-Strings mit XSS-unsafe Entities saniert, sollten Eingabe-Strings auch unter Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert werden. Wenn die Methode sowohl mit trusted types als auch einem Sanitizer verwendet wird, wird der Eingabestring durch die vertrauenswürdige Transformationsfunktion geführt, bevor er saniert wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt einige der Möglichkeiten, wie Sie `setHTMLUnsafe()` verwenden können, um einen HTML-String zu injecten.

```js
// Define unsanitized string of HTML
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTML() with no sanitizer
target.setHTMLUnsafe(unsanitizedString);

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
target.setHTMLUnsafe(unsanitizedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` Live-Beispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, die mit verschiedenen Sanitisatoren aufgerufen wird. Der Code definiert Schaltflächen, die Sie klicken können, um einen HTML-String zu injecten, der nicht sanitisiert wird, und der einen benutzerdefinierten Sanitizer verwendet. Der ursprüngliche String und das injectierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente, um die Methode mit verschiedenen Sanitisatoren aufzurufen, eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}-Element, in das der String injiziert wird.

```html
<button id="buttonNoSanitizer" type="button">None</button>
<button id="buttonAllowScript" type="button">allowScript</button>

<button id="reload" type="button">Reload</button>
<div id="target">Original content of target element</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 240px;
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

Zuerst definieren wir den zu sanierenden String, der in allen Fällen der gleiche sein wird. Dieser enthält das {{htmlelement("script")}}-Element und den `onclick` Handler, die beide als XSS-unsicher gelten. Wir definieren auch den Handler für die Neu laden-Schaltfläche.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"><script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Als nächstes definieren wir den Click-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt. Generell würden wir erwarten, dass die Methode Elemente im String verwirft, die im Kontext nicht erlaubt sind (wie tabellenspezifische Elemente in einem `<div>`-Element), ansonsten den Eingabestring abgleicht. In diesem Fall sollten die Strings übereinstimmen.

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set unsafe HTML without specifying a sanitizer
  target.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "No sanitizer: string should be injected without filtering\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

Der nächste Click-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt. Beachten Sie, dass wenn wir die `setHTMLUnsafe()` Methode verwenden, `<script>` nicht entfernt werden!

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // Set the content of the element using a custom sanitizer
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // Log HTML before sanitization and after being injected
  logElement.textContent = "Sanitizer: {elements: ['div', 'p', 'script']}\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die "None" und "allowScript" Schaltflächen, um die Effekte von keinem Sanitizer und einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie die "None" Schaltfläche klicken, sollten Sie feststellen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird. Wenn Sie die "allowScript" Schaltfläche klicken, ist das `<script>` Element noch vorhanden, aber das `<button>` Element wird entfernt. Mit diesem Ansatz können Sie sicheres HTML erstellen, müssen es aber nicht erzwingen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","380px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
