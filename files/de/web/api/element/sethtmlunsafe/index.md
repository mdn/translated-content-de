---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("DOM")}}

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, optional unerwünschte Elemente und Attribute und solche, die nicht in den Kontext gehören, herauszufiltern, und es dann zu verwenden, um den Teilbaum des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) wird nicht garantiert, dass XSS-ungeeignete HTML-Entitäten entfernt werden.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Ein String oder eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz, die das zu parsende HTML definiert.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, welches definiert, welche Elemente des Eingabe-Strings erlaubt oder entfernt werden.
        Beachten Sie, dass im Allgemeinen ein `"Sanitizer` effizienter erwartet wird als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`

  - : Dieser wird geworfen, wenn:

    - `input` ein String ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [von einer CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` eine:
      - einen Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
      - String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um einen HTML-String in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, optional unerwünschte Elemente und Attribute und solche, die nicht in den Kontext gehören, herauszufiltern, und es dann zu verwenden, um den Teilbaum des Elements im DOM zu ersetzen.

Das Suffix "Unsafe" im Methodennamen zeigt an, dass die Methode zwar ermöglicht, den Eingabe-String von unerwünschten HTML-Entitäten zu filtern, sie jedoch nicht die Bereinigung oder Entfernung potenziell unsicherer XSS-bezogener Eingaben, wie z. B. {{htmlelement("script")}}-Elemente und Skript- oder Ereignis-Handler-Content-Attribute, erzwingt.
Wenn keine Sanitizer-Konfiguration im `options.sanitizer` Parameter angegeben wird, wird `setHTMLUnsafe()` ohne jede Bereinigung verwendet.

Der Eingabe-HTML kann [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn der HTML-String mehr als eine [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, dann wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Shadow-Root geparst.

Wie `setHTML()` kann `setHTMLUnsafe()` anstelle von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) verwendet werden, um HTML-Strings zu parsen, die möglicherweise deklarative Shadow-Roots enthalten.
`setHTMLUnsafe()` sollte anstelle von [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwendet werden, wenn potenziell unsichere HTML-Strings geparst werden müssen, die aus irgendeinem Grund XSS-unsichere Elemente oder Attribute enthalten müssen.
Wenn die zu injizierenden Strings keine unsicheren HTML-Entitäten enthalten müssen, sollten Sie immer [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verwenden.

Da diese Methode nicht unbedingt Eingabestrings von XSS-unsicheren Entitäten bereinigt, sollten Eingabestrings auch unter Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert werden.
Wenn die Methode mit sowohl Trusted Types als auch einem Sanitizer verwendet wird, wird der Eingabestring durch die vertrauenswürdige Transformationsfunktion geleitet, bevor er bereinigt wird.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt einige Möglichkeiten, wie `setHTMLUnsafe()` verwendet werden kann, um einen HTML-String zu injizieren.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String zu injizieren, der nicht bereinigt wird, und der jeweils einen benutzerdefinierten Sanitizer verwendet.
Der ursprüngliche String und der injizierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Aufrufen der Methode mit verschiedenen Sanitizern, einen weiteren Button, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}-Element, um den String hineinzuspritzen.

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

Zuerst definieren wir den String, der bereinigt werden soll, der für alle Fälle gleich sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher betrachtet werden.
Wir definieren auch den Handler für die Neustart-Taste.

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

Als nächstes definieren wir den Klick-Handler für den Button, der das HTML ohne Sanitizer setzt.
Im Allgemeinen würden wir erwarten, dass die Methode Elemente im String fallen lässt, die im Kontext nicht erlaubt sind (wie tabellenspezifische Elemente in einem `<div>` Element), andernfalls sollte der Eingabestring jedoch dem Ausgabe-String entsprechen.
In diesem Fall sollten die Strings übereinstimmen.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass weil wir die `setHTMLUnsafe()` Methode verwenden, `<script>` nicht entfernt wird!

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

Klicken Sie auf die "None" und "allowScript" Buttons, um die Auswirkungen ohne Sanitizer bzw. mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die "None" Taste klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie die "allowScript"-Taste klicken, ist das `<script>`-Element immer noch vorhanden, aber das `<button>`-Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie sind nicht gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","380px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
