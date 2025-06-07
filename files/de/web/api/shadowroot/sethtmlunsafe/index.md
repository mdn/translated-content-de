---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 2033446e38e93f71eb28a0efd3f663a8e0e7aeb7
---

{{APIRef("Shadow DOM")}}

Die **`setHTMLUnsafe()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle kann verwendet werden, um eine HTML-Zeichenkette in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei optional unerwünschte Elemente und Attribute gefiltert werden können, und es dann zu verwenden, um den bestehenden Baum im Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) wird bei `setHTMLUnsafe()` nicht garantiert, dass XSS-unsichere HTML-Entitäten entfernt werden.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Zeichenkette oder eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz, die das zu parsende HTML definiert.
- `options` {{optional_inline}}

  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:

    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente des Eingangs erlaubt oder entfernt werden. Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter als eine `SanitizerConfig` ist, wenn die Konfiguration wiederverwendet werden soll. Falls nicht angegeben, wird kein Sanitizer verwendet.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`

  - : Dies wird ausgelöst, wenn:

    - `html` eine Zeichenkette übergeben wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen Wert erhält, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder Zeichenkette ist.
    - eine nicht-normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
    - eine Zeichenkette, die nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`**-Methode kann verwendet werden, um eine HTML-Zeichenkette zu parsen, optional unerwünschte Elemente und Attribute zu filtern und damit das bestehende Shadow DOM zu ersetzen.

Der Suffix "Unsafe" im Methodennamen zeigt an, dass die Methode zwar erlaubt, dass die Eingangszeichenkette von unerwünschten HTML-Entitäten gefiltert wird, aber nicht die Sanitisierung oder Entfernung potenziell unsicherer XSS-relevanter Eingaben, wie `<script>`-Elemente und Skript- oder Ereignis-Handler-Inhalte Attribute, durchsetzt.
Wenn keine Sanitisierungskonfiguration im Parameter `options.sanitizer` angegeben ist, wird `setHTMLUnsafe()` ohne jegliche Sanitisierung verwendet.

Das Eingangs-HTML kann [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) enthalten.
Wenn die Zeichenkette von HTML mehr als einen [declarative shadow root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow-Root geparst.

`setHTMLUnsafe()` sollte anstelle von [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwendet werden, wenn potentiell unsichere Zeichenfolgen von HTML geparst werden müssen, die aus welchen Gründen auch immer XSS-unsichere Elemente oder Attribute enthalten müssen.
Wenn die zu injizierenden Zeichenfolgen keine unsicheren HTML-Entitäten enthalten müssen, sollten Sie [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verwenden.

Beachten Sie, dass diese Methode nicht zwingend Eingangszeichenfolgen von XSS-unsicheren Entitäten saniert, daher sollten Eingangszeichenfolgen ebenfalls mit der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) validiert werden.
Wenn die Methode mit sowohl einem Trusted-Typ als auch einem Sanitizer verwendet wird, wird die Eingangszeichenfolge über die Trusted-Transformationsfunktion geführt, bevor sie saniert wird.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt einige der Möglichkeiten, wie `setHTMLUnsafe()` verwendet werden kann, um eine Zeichenfolge von HTML zu sanitisieren und zu injizieren.

Zuerst werden wir den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellen, den wir anvisieren möchten.
Dieser könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber in diesem Beispiel erstellen wir den Root deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir können einen Zugriff auf den Shadow Root vom `#host`-Element so bekommen:

```js
const shadow = document.querySelector("#host").shadowRoot;
```

Der folgende Code zeigt, wie wir `setHTMLUnsafe()` mit einer Zeichenfolge und verschiedenen Sanitisierungsmethoden aufrufen können, um das HTML in den Shadow Root zu filtern und einzuspeisen.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit unterschiedlichen Sanitisierern aufgerufen wird.
Der Code definiert Schaltflächen, auf die Sie klicken können, um eine Zeichenfolge von HTML mit einem Standard- und einem benutzerdefinierten Sanitizer zu sanitisieren und einzuspeisen.
Die ursprüngliche Zeichenkette und das sanitisierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall überprüfen können.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Injizieren des HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (jeweils), eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das den deklarativen Shadow Root enthält.

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

Zuerst definieren wir den Handler für die Neuladenschaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die Eingangszeichenfolge, die in den Shadow Root injiziert werden soll, die für alle Fälle dieselbe sein wird.
Diese enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Zugriff auf den Shadow Root ist.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die den Shadow Root mit `setHTMLUnsafe()` festlegt, ohne einen Sanitizer zu übergeben.
Da kein Sanitizer vorhanden ist, erwarten wir, dass das injizierte HTML mit der Eingangszeichenfolge übereinstimmt.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente zulässt.

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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Effekte ohne und mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die "None"-Schaltfläche klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die "allowScript"-Schaltfläche klicken, ist das `<script>`-Element noch vorhanden, aber das `<button>`-Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, ohne dass Sie dazu gezwungen werden.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","350px")}}

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
