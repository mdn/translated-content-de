---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und könnten ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings verwenden und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) sollte fast immer anstelle dieser Methode verwendet werden — in Browsern, die es unterstützen — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`**-Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle kann verwendet werden, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, unerwünschte Elemente und Attribute optional herauszufiltern und es dann zu nutzen, um den bestehenden Baum im Shadow DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, das HTML definiert, das geparst werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, der einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass ein `Sanitizer` im Allgemeinen effizienter ist als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `input` ein String übergeben wird, wenn [Vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` wird übergeben:
      - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Zum Beispiel eine Konfiguration, die sowohl "erlaubt" als auch "entfernt" Konfigurationseinstellungen enthält.
      - einem String, der nicht den Wert `"default"` hat.
      - einem Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTMLUnsafe()`**-Methode kann verwendet werden, um einen String von HTML zu parsen, unerwünschte Elemente und Attribute optional zu filtern und ihn zu verwenden, um den bestehenden Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in den DOM geparst.
Wenn der HTML-String mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow-Roots geparst.

`setHTMLUnsafe()` führt standardmäßig keine Sanitierung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.

### Sicherheitsüberlegungen

Das Suffix „Unsafe“ im Methodennamen weist darauf hin, dass es die Entfernung aller XSS-unsicheren HTML-Entitäten nicht erzwingt (im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)).
Während dies mit einem geeigneten Sanitizer erfolgen kann, muss es keinen effektiven Sanitizer verwenden oder überhaupt keinen Sanitizer verwenden!
Die Methode ist daher ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen möglicherweise unsichere Strings, die von einem Benutzer bereitgestellt werden, ohne vorherige Sanitierung in den DOM injiziert werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings verwenden, und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mittels der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies gewährleistet, dass die Eingabe durch eine Transformationsfunktion weitergegeben wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Verwendung von `TrustedHTML` macht es möglich, zu prüfen und zu überprüfen, dass Sanitierungscode in nur wenigen Stellen effektiv ist, anstatt über alle Ihre Injection-Sinks verstreut zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, dann ist die nächstsicherste Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard- [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, da es nur sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerbereitgestellte HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, sondern es vermeidet auch das Problem der vertrauenswürdigen Typen.

Die Verwendung von `setHTMLUnsafe()` könnte geeignet sein, wenn:

- Sie `setHTML()` oder vertrauenswürdige Typen aus irgendeinem Grund nicht verwenden können und Sie den sichersten möglichen Filter haben möchten.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard- [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unsicheren Elemente herauszufiltern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Shadow Roots enthalten könnte, sodass sie [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) nicht verwenden können.
- Sie einen Sonderfall haben, in dem Sie HTML-Eingaben benötigen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  In diesem Fall können Sie `setHTML()` nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten erlauben.

  Eine bessere Option hier ist es, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur jene gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Obwohl das immer noch unsicher ist, ist es sicherer als alle davon zuzulassen.

Für den letzten Punkt betrachten Sie eine Situation, in der Ihr Code darauf angewiesen ist, unsichere `onclick`-Handler verwenden zu können.
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

### setHTMLUnsafe() mit Vertrauenswürdigen Typen

Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da vertrauenswürdige Typen noch nicht in allen Browsern unterstützt werden, definieren wir den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabestring in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu sanitisieren, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Jetzt, da wir `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zuerst erstellen wir den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), den wir anvisieren möchten.
Dies könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel erstellen wir die Wurzel deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Dann erhalten wir einen Handle auf die Shadow Root aus dem `#host`-Element und rufen `setHTMLUnsafe()` auf.
Die Eingabe wurde der Transformationsfunktion unterzogen, sodass wir keinen Sanitizer an die Methode übergeben.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Vertrauenswürdige Typen

Dieses Beispiel zeigt den Fall, in dem wir keine vertrauenswürdigen Typen verwenden, sodass wir Sanitizer-Argumente übergeben werden.

Der Code erstellt zunächst einen nicht vertrauenswürdigen String und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

Dieses Beispiel bietet eine „Live“-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String zu injizieren.
Eine Schaltfläche injiziert das HTML, ohne es überhaupt zu sanitisieren, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente erlaubt, aber keine anderen unsicheren Elemente.
Der originale String und das injizierte HTML werden geloggt, so dass Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Weil wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code einen String anstelle eines vertrauenswürdigen Typs.
> Sie sollten dies in produktivem Code nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente zum Injizieren des HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (jeweils), eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}, das die deklarative Shadow Root enthält.

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

Dann definieren wir den Eingabestring, der in die Shadow Root injiziert werden soll, der für alle Fälle gleich sein wird.
Dieser enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Handle zur Shadow Root ist.

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

Als nächstes definieren wir den Click-Handler für die Schaltfläche, die die Shadow Root mit `setHTMLUnsafe()` setzt, ohne einen Sanitizer zu übergeben.
Da es keinen Sanitizer gibt, erwarten wir, dass das injizierte HTML dem Eingabestring entspricht.

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

Der nächste Click-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.

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

Klicken Sie auf die Schaltflächen „None“ und „allowScript“, um die Auswirkungen ohne Sanitizer bzw. mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die Schaltfläche „None“ klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die Schaltfläche „allowScript“ klicken, ist das `<script>`-Element noch vorhanden, aber das `<button>`-Element wird entfernt.
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
