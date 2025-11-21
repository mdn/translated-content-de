---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) sollte fast immer anstelle dieser Methode verwendet werden – auf Browsern, wo dies unterstützt wird – da XSS-unsichere HTML-Entitäten immer entfernt werden.

Die **`setHTMLUnsafe()`** Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle kann verwendet werden, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute optional gefiltert werden, um dann den bestehenden Baum im Shadow DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder einem String, der zu parsierendes HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, der einen `Sanitizer` mit der standardmäßigen (XSS-sicheren) Konfiguration anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter erwartet wird als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Kein (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird geworfen, wenn:
    - `input` ein String übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen der folgenden Werte übergeben wird:
      - einen Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
      - einen String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode kann verwendet werden, um einen HTML-String zu parsen, wobei unerwünschte Elemente und Attribute optional gefiltert werden, und damit das bestehende Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [Deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn der HTML-String mehr als eine [Deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Shadow Root geparst.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass es keine Entfernung aller XSS-unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)).
Es kann dies tun, wenn es mit einem geeigneten Sanitizer verwendet wird, es muss jedoch keinen effektiven Sanitizer verwenden oder überhaupt einen verwenden!
Die Methode ist daher ein potenzieller Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, ohne vorherige Bereinigung in das DOM injiziert werden.

Sie sollten dieses Risiko mindern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben, und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie zum Beispiel {{htmlelement("script")}} Elemente und Eventhandler-Attribute) zu entfernen, bevor es injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, zu auditieren und zu überprüfen, dass der Bereinigungscode nur an wenigen Stellen effektiv ist, anstatt über alle Ihre Injection Sinks verstreut zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, ist die nächstsicherste Option, `setHTMLUnsafe()` mit dem standardmäßigen, XSS-sicheren [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, da es nur sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerdefinierte HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, sondern es spart auch die Überlegung über Trusted Types.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder Trusted Types nicht verwenden können (aus welchen Gründen auch immer) und Sie die sicherste mögliche Filterung wünschen.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem standardmäßigen [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unsicheren Elemente herauszufiltern.
- Sie können `setHTML()` nicht verwenden und die Eingabe könnte deklarative Shadow Roots enthalten, sodass Sie [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) nicht verwenden können.
- Sie haben einen Sonderfall, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  Sie können `setHTML()` in diesem Fall nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne einen Sanitizer oder `innerHTML` verwenden, dadurch würden jedoch alle unsicheren Entitäten zugelassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur die gefährlichen Elemente und Attribute zulässt, die wir tatsächlich benötigen.
  Auch wenn dies immer noch unsicher ist, ist es sicherer, als alle zuzulassen.

Für den letzten Punkt, betrachten Sie eine Situation, in der Ihr Code darauf angewiesen ist, unsichere `onclick` Handler verwenden zu können.
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

Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML` Objekt aus dem String, der das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da Trusted Types noch nicht auf allen Browsern unterstützt werden, definieren wir das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabestring in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen zu transformieren.
Häufig verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus dem potenziell unsicheren Eingabestring zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Da wir nun `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zuerst erstellen wir die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), die wir anvisieren möchten.
Diese könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir die Root deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Dann erhalten wir einen Handler für die Shadow Root vom `#host` Element und rufen `setHTMLUnsafe()` auf.
Die Eingabe ist durch die Transformationsfunktion gegangen, daher übergeben wir keinen Sanitizer an die Methode.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel demonstriert den Fall, in dem wir keine Trusted Types verwenden und daher Sanitizer-Argumente übergeben werden müssen.

Der Code erstellt zuerst einen ungetrüsteten String und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

### `setHTMLUnsafe()` Live-Beispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String zu injizieren.
Eine Schaltfläche injiziert das HTML ohne jegliche Bereinigung, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>` Elemente erlaubt, aber nicht andere unsichere Elemente.
Der ursprüngliche String und das injizierte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall überprüfen können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code einen String anstelle eines Trusted Types.
> Das sollten Sie in Produktionscode nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Injizieren des HTMLs ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (jeweils), eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das die deklarative Shadow Root enthält.

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
  height: 320px;
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

Zuerst definieren wir den Handler für die Neuladen-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir den Eingabestring, der in die Shadow Root injiziert werden soll, der in allen Fällen derselbe sein wird.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsafe angesehen werden.
Wir erhalten auch die Variable `shadow`, die unser Handle auf die Shadow Root ist.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>Paragraph to inject into shadow DOM.
      <button onclick="alert('You clicked the button!')">Click me</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">Para with <code>data-</code> attribute</p>
  </div>
`;

const shadow = document.querySelector("#host").shadowRoot;
```

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die die Shadow Root mit `setHTMLUnsafe()` ohne Übergabe eines Sanitizers setzt.
Da kein Sanitizer vorhanden ist, erwarten wir, dass das injizierte HTML mit dem Eingabestring übereinstimmt.

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set the content of the element with no sanitizer
  shadow.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent = "No sanitizer\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${shadow.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente erlaubt.

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
  log(`\n\nunsanitized: ${unsanitizedString}`);
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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Auswirkungen von keinem Sanitizer bzw. einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie die Schaltfläche "None" klicken, sollten Sie sehen, dass die Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie die Schaltfläche "allowScript" klicken, ist das `<script>` Element immer noch vorhanden, aber das `<button>` Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie sind nicht dazu gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

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
