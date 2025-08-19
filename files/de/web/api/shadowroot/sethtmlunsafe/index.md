---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 21c690ab5437f9f0624ed2a709092734b7f5c0cf
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer kam.
>
> Sie können dieses Risiko mindern, indem Sie stets `TrustedHTML`-Objekte anstelle von Zeichenketten übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) sollte fast immer anstelle dieser Methode verwendet werden – in Browsern, die sie unterstützen –, da sie stets XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle kann verwendet werden, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, unerwünschte Elemente und Attribute optional herauszufiltern und es dann zu verwenden, um das bestehende Baum im Shadow DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder eine Zeichenkette, die zu analysierendes HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden sollen.
        Dies kann auch eine Zeichenkette mit dem Wert `"default"` sein, die einen `Sanitizer` mit der standardmäßigen (XSS-sicheren) Konfiguration anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass in der Regel ein `Sanitizer` effizienter ist als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `input` eine Zeichenkette ist und [Vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen:
      - Wert erhält, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), noch ein [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), noch eine Zeichenkette ist.
      - nicht-normalisiertes [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) erhält (eine, die sowohl "allowed"- als auch "removed"-Konfigurationseinstellungen enthält).
      - Zeichenkette, die nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`**-Methode kann verwendet werden, um eine Zeichenkette von HTML zu analysieren, unerwünschte Elemente und Attribute optional herauszufiltern und es zu verwenden, um das bestehende Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenkette mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow Roots geparst.

`setHTMLUnsafe()` führt standardmäßig keine Sanitization durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in die Eingabe injiziert.

### Sicherheitsüberlegungen

Der Suffix "Unsafe" im Methodennamen zeigt an, dass er nicht die Entfernung aller XSS-unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)).
Obwohl er dies tun kann, wenn er mit einem geeigneten Sanitizer verwendet wird, muss er keinen effektiven Sanitizer verwenden oder überhaupt keinen Sanitizer!
Die Methode ist daher eine potenzielle Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenketten durch einen Benutzer in das DOM injiziert werden, ohne vorher gesäubert zu werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenketten übergeben und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion durchläuft, die die Möglichkeit hat, die Eingabe zu [sanitizieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, die Effektivität der Sanitisierung in wenigen Stellen zu überprüfen, anstatt über alle Injection Sinks hinweg verstreut zu sein.
Sie sollten der Methode keinen Sanitizer übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, dann ist die nächstsicherste Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard-`Sanitizer` zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerdefinierte HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, sondern es vermeidet auch, vertrauenswürdige Typen berücksichtigen zu müssen.

`setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder vertrauenswürdige Typen nicht verwenden können (aus welchen Gründen auch immer) und Sie den sichersten möglichen Filter haben möchten.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard-`Sanitizer` verwenden, um alle XSS-unsicheren Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe könnte deklarative Shadow Roots enthalten, sodass Sie [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) nicht verwenden können.
- Sie einen Grenzfall haben, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten beinhalten.

  Sie können in diesem Fall `setHTML()` nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur diese gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Auch wenn dies immer noch unsicher ist, ist es sicherer, als alle von ihnen zuzulassen.

Für den letzten Punkt, betrachten Sie eine Situation, in der Ihr Code darauf angewiesen ist, unsichere `onclick`-Handler verwenden zu können.
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

Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus der Zeichenkette, die das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da vertrauenswürdige Typen noch nicht in allen Browsern unterstützt werden, definieren wir den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die vertrauenswürdigen Typen JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Umwandlung einer Eingabezeichenkette in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitizieren:

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

Nun, da wir `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zuerst erstellen wir die [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), die wir anvisieren möchten.
Dies könnte programmgesteuert mithilfe von [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir den Root-deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir holen dann einen Bezug auf den Shadow-Root aus dem `#host`-Element und rufen `setHTMLUnsafe()` auf.
Die Eingabe wurde durch die Transformationsfunktion geführt, sodass wir der Methode keinen Sanitizer übergeben.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel zeigt den Fall, in dem wir keine vertrauenswürdigen Typen verwenden, sodass wir Sanitizer-Argumente übergeben werden.

Der Code erstellt zuerst eine nicht vertrauenswürdige Zeichenfolge und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitisatoren aufgerufen wird.
Der Code definiert Schaltflächen, die Sie klicken können, um eine Zeichenkette von HTML zu injizieren.
Eine Schaltfläche injiziert das HTML ohne es überhaupt zu sanitizieren, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente erlaubt, aber keine anderen unsicheren Elemente.
Die ursprüngliche Zeichenkette und das injizierte HTML werden geloggt, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Da wir zeigen wollen, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code eine Zeichenkette anstelle eines vertrauenswürdigen Typs.
> Dies sollten Sie nicht in Produktivcode tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente, um das HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (jeweils) zu injizieren, eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}, das die deklarative Shadow-Root enthält.

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

Zuerst definieren wir den Handler für die Neu-Laden-Schaltfläche.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die Eingabezeichenfolge, um sie in die Shadow-Root zu injizieren, die in allen Fällen gleich sein wird.
Diese enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Bezug zur Shadow-Root ist.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die die Shadow-Root mithilfe von `setHTMLUnsafe()` ohne Übergabe eines Sanitizers setzt.
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

Der nächste Klick-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanitisators, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.

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

Wenn Sie auf die "None"-Schaltfläche klicken, sehen Sie, dass die Eingabe und der Output übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die "allowScript"-Schaltfläche klicken, ist das `<script>`-Element noch vorhanden, aber das `<button>`-Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie müssen es nicht erzwingen.

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
