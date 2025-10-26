---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: b3401d14892454cb509338239fb1a028e5c1470f
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode analysiert ihren Eingabewert als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können möglicherweise ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) sollte nahezu immer anstelle dieser Methode verwendet werden – in Browsern, die unterstützt werden – da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`** Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle kann verwendet werden, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute optional herausgefiltert werden, und dann den existierenden Baum im Shadow DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String, die das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch eine Zeichenfolge mit dem Wert `"default"` sein, die einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Falls nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass ein `Sanitizer` in der Regel effizienter als eine `SanitizerConfig` ist, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese Ausnahme wird ausgelöst, wenn:
    - `input` eine Zeichenfolge übergeben wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` übergeben wird mit:
      - einem Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder Zeichenfolge ist.
      - einer nicht normalisierten [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
      - einer Zeichenfolge, die nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode kann verwendet werden, um eine Zeichenfolge von HTML zu parsen, wobei unerwünschte Elemente und Attribute optional herausgefiltert werden, und damit das bestehende Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenkette mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, dann wird nur das erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow Roots geparst.

`setHTMLUnsafe()` führt standardmäßig keine Säuberung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen zeigt an, dass es nicht die Entfernung aller XSS-Unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)).
Während die Methode dies tun kann, wenn sie mit einem geeigneten Sanitizer verwendet wird, muss sie keinen effektiven Sanitizer oder überhaupt keinen verwenden!
Die Methode ist daher ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Zeichenfolgen eines Benutzers ungefiltert in das DOM injiziert werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, den Reinigungsprozess an wenigen Stellen zu überprüfen und sicherzustellen, dass der Code effektiv ist, anstatt ihn über alle Ihre Injection Sinks zu verteilen.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Sollten Sie aus irgendeinem Grund kein `TrustedHTML` (oder noch besser, `setHTML()`) verwenden können, dann ist die nächst sicherste Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard-`Sanitizer` zu nutzen.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerbereitgestelltes HTML-Eingaben XSS-unsichere Elemente enthalten müsste.
`setHTML()` ist nicht nur sicher, sondern vermeidet auch die Notwendigkeit, vertrauenswürdige Typen zu berücksichtigen.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder vertrauenswürdige Typen aus irgendeinem Grund nicht verwenden können und das sicherste mögliche Filtern wünschen.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard-`Sanitizer` verwenden, um alle XSS-unsicheren Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Shadow Roots enthalten kann, sodass Sie nicht [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) verwenden können.
- Sie einen seltenen Fall haben, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  In diesem Fall können Sie `setHTML()` nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne einen Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur jene gefährlichen Elemente und Attribute zulässt, die tatsächlich benötigt werden.
  Obwohl dies immer noch unsicher ist, ist es sicherer, als alle zuzulassen.

Für den letzten Punkt, ziehen Sie eine Situation in Betracht, in der Ihr Code davon abhängt, unsichere `onclick` Handler zu verwenden.
Der folgende Code zeigt die Wirkung der verschiedenen Methoden und Sanitizer in diesem Fall.

```js
const shadow = document.querySelector("#host").shadowRoot;

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// Safe - removes all XSS-unsafe entities.
shadow.setHTML(input);

// Removes no event handler attributes
shadow.setHTMLUnsafe(input);
shadow.innerHTML = input;

// Safe - removes all XSS-unsafe entities.
const configSafe = new Sanitizer();
shadow.setHTMLUnsafe(input, { sanitizer: configSafe });

// Removes all XSS-unsafe entities except `onclick`
const configLessSafe = new Sanitizer();
config.allowAttribute("onclick");
shadow.setHTMLUnsafe(input, { sanitizer: configLessSafe });
```

## Beispiele

### setHTMLUnsafe() mit Trusted Types

Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML` Objekt aus der Zeichenfolge, die das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da vertrauenswürdige Typen noch nicht in allen Browsern unterstützt werden, definieren wir das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Umwandlung einer Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu reinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Nun, da wir `trustedHTML` haben, zeigt der untenstehende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zuerst erstellen wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das wir anvisieren möchten.
Dies könnte programmgesteuert unter Verwendung von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir die Wurzel deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir erhalten dann einen Zugriff auf die Shadow-Root vom `#host` Element und rufen `setHTMLUnsafe()` auf.
Da die Eingabe durch die Transformationsfunktion ging, übergeben wir keinen Sanitizer an die Methode.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel zeigt den Fall, in dem wir keine trusted types verwenden, also werden wir Sanitizer-Argumente übergeben.

Der Code erstellt zuerst eine nicht-vertrauenswürdige Zeichenfolge und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// Get the shadow root element
const shadow = document.querySelector("#host").shadowRoot;

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
shadow.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
shadow.setHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` Livebeispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Buttons, mit denen Sie eine Zeichenfolge von HTML injizieren können.
Ein Button injiziert das HTML ohne jegliche Reinigung, und der zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>` Elemente erlaubt, aber keine anderen unsicheren Elemente.
Die ursprüngliche Zeichenfolge und das injizierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall überprüfen können.

> [!NOTE]
> Da wir zeigen wollen, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code eine Zeichenfolge statt eines vertrauenswürdigen Typs.
> Sie sollten dies nicht in Produktionscode tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Injizieren des HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (jeweils), einen weiteren Button, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}, das die deklarative Shadow Root enthält.

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

Zuerst definieren wir den Handler für den Reload-Button.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die Eingabezeichenfolge, die in das Shadow-Root injiziert werden soll, die für alle Fälle gleich sein wird.
Diese enthält das {{htmlelement("script")}} Element und den `onclick` Handler, welche beide als XSS-Unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Zugang zum Shadow-Root ist.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"></script>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

Als nächstes definieren wir den Click-Handler für den Button, der das Shadow-Root unter Verwendung von `setHTMLUnsafe()` ohne einen Sanitizer setzt.
Da kein Sanitizer vorhanden ist, erwarten wir, dass das injizierte HTML der Eingabezeichenfolge entspricht.

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

Der nächste Click-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur die {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}} Elemente erlaubt.

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

Klicken Sie auf die Buttons "None" und "allowScript", um die Effekte von keinem Sanitizer und einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf den "None" Button klicken, sollten Sie sehen, dass die Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewandt wird.
Wenn Sie auf den "allowScript" Button klicken, ist das `<script>` Element immer noch vorhanden, aber das `<button>` Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, werden jedoch nicht gezwungen dazu.

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
