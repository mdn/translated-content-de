---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und könnten eine Quelle für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie stets `TrustedHTML`-Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) sollte fast immer anstelle dieser Methode verwendet werden - in den Browsern, die es unterstützen - da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle kann verwendet werden, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, optional unerwünschte Elemente und Attribute herauszufiltern, und dann die bestehende Struktur im Shadow DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder eine Zeichenkette, die das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch eine Zeichenkette mit dem Wert `"default"` sein, die einen `Sanitizer` mit der (XSS-sicheren) [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass es effizienter ist, einen `Sanitizer` zu verwenden, wenn Sie die gleiche Konfiguration mehrfach benötigen und ihn bei Bedarf zu ändern.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn:
    - `input` eine Zeichenkette ist, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` übergeben wird als:
      - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Zum Beispiel eine Konfiguration, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält.
      - Eine Zeichenkette, die nicht den Wert `"default"` hat.
      - Ein Wert, der nicht ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder eine Zeichenkette ist.

## Beschreibung

Die **`setHTMLUnsafe()`**-Methode kann verwendet werden, um eine Zeichenkette von HTML zu parsen, optional unerwünschte Elemente und Attribute herauszufiltern, und sie zu verwenden, um das bestehende Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [deklariative Shadow-Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenkette mehr als eine [deklariative Shadow-Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt - nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieser Shadow-Root geparst.

`setHTMLUnsafe()` führt standardmäßig keine Sanitierung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in die Eingabe injiziert.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen deutet darauf hin, dass es nicht die Entfernung aller XSS-unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)).
Während es dies tun könnte, wenn es mit einem geeigneten Sanitizer verwendet wird, muss es keinen effektiven Sanitizer verwenden oder überhaupt einen Sanitizer!
Die Methode ist daher eine mögliche Quelle für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenketten, die von einem Benutzer bereitgestellt werden, in das DOM injiziert werden, ohne vorher gereinigt zu werden.

Sie sollten dieses Risiko mindern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geht, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, die Effektivität des Sanitierungscodes an nur wenigen Stellen zu überprüfen und zu auditieren, anstatt über alle Injection-Sinks verstreut zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie `TrustedHTML` (oder noch besser, `setHTML()`) aus irgendeinem Grund nicht verwenden können, ist die nächst sicherere Option, `setHTMLUnsafe()` mit der XSS-sicheren [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, da es nur sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerbereitgestellte HTML-Eingaben XSS-unsichere Elemente enthalten müssten.
Nicht nur ist `setHTML()` sicher, sondern es vermeidet auch die Notwendigkeit, sich mit vertrauenswürdigen Typen zu befassen.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder vertrauenswürdige Typen (aus welchen Gründen auch immer) nicht verwenden können und das sicherste mögliche Filtern wünschen.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit der [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwenden, um XSS-unsichere und andere problematische Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklariative Shadow-Roots enthalten könnte, sodass Sie [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) nicht verwenden können.
- Sie einen Randfall haben, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  Sie können in diesem Fall `setHTML()` nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne einen Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer zu verwenden, der nur die gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Auch wenn dies immer noch unsicher ist, ist es sicherer, als sie alle zuzulassen.

Für den letzten Punkt, betrachten Sie eine Situation, in der Ihr Code auf unsichere `onclick`-Handler angewiesen ist.
Der folgende Code zeigt die Wirkung der unterschiedlichen Methoden und Sanitizer in diesem Fall.

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

Um das Risiko von XSS zu mindern, werden wir zuerst ein `TrustedHTML`-Objekt aus der Zeichenkette erstellen, die das HTML enthält, und dann dieses Objekt an `setHTMLUnsafe()` übergeben.
Da vertrauenswürdige Typen noch nicht in allen Browsern unterstützt werden, definieren wir den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenkette in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitisieren:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenkette zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Jetzt, da wir `trustedHTML` haben, zeigt der unten stehende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zuerst erstellen wir die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), die wir anvisieren möchten.
Diese könnte programmgesteuert mithilfe von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir die Root deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Dann holen wir uns einen Zugriff auf die Shadow-Root vom `#host`-Element und rufen `setHTMLUnsafe()` auf.
Die Eingabe wurde durch die Transformationsfunktion geleitet, daher übergeben wir keinen Sanitizer an die Methode.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel demonstriert den Fall, in dem wir keine vertrauenswürdigen Typen verwenden, daher werden wir Sanitizer-Argumente übergeben.

Der Code erstellt zunächst eine nicht vertrauenswürdige Zeichenkette und zeigt eine Reihe von Möglichkeiten, einen Sanitizer an die Methode zu übergeben.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit unterschiedlichen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, auf die Sie klicken können, um eine Zeichenkette von HTML zu injizieren.
Eine Schaltfläche injiziert das HTML ohne jegliche Sanitisierung, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente, aber keine anderen unsicheren Elemente zulässt.
Die ursprüngliche Zeichenkette und das injizierte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code eine Zeichenkette statt eines vertrauenswürdigen Typs.
> Dies sollten Sie in Produktionscode nicht tun.

#### HTML

Der HTML-Code definiert zwei {{htmlelement("button")}}-Elemente, um das HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (jeweils) zu injizieren, eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}, das die deklarative Shadow-Root enthält.

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

Zuerst definieren wir den Handler für die Neulade-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die Eingabezeichenkette, die in die Shadow-Root injiziert werden soll, die in allen Fällen gleich sein wird.
Diese enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Zugriff auf die Shadow-Root ist.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die die Shadow-Root mittels `setHTMLUnsafe()` ohne Angabe eines Sanitizers setzt.
Da kein Sanitizer vorhanden ist, erwarten wir, dass das injizierte HTML mit der Eingabezeichenkette übereinstimmt.

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

Der nächste Klick-Handler setzt die Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente zulässt.

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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Effekte von keinem Sanitizer und einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die Schaltfläche "None" klicken, sollten Sie sehen, dass die Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die Schaltfläche "allowScript" klicken, ist das `<script>`-Element noch vorhanden, aber das `<button>`-Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, ohne dazu gezwungen zu sein.

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
