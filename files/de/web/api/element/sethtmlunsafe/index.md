---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko reduzieren, indem Sie immer `TrustedHTML` Objekte anstelle von Strings verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) sollte fast immer anstelle dieser Methode verwendet werden — in Browsern, die sie unterstützen — da sie immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces wird verwendet, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, unerwünschte Elemente und Attribute sowie solche, die nicht in den Kontext gehören, optional herauszufiltern und dann zu verwenden, um den Unterbaum des Elements im DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder ein String, der das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Objekt mit Optionen mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, der einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass in der Regel ein `Sanitizer` effizienter sein kann als ein `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `input` ein String übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` ein Wert übergeben wird, der nicht ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - eine nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
      - ein String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, optional von unerwünschten Elementen und Attributen zu bereinigen und Elemente zu verwerfen, die die HTML-Spezifikation im Ziel-Element nicht erlaubt (wie {{htmlelement("li")}} innerhalb eines {{htmlelement("div")}}).
Das `DocumentFragment` wird dann verwendet, um den Unterbaum des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenfolge mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieses Shadow-Roots geparst.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.
Es ist daher potenziell sogar unsicherer als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das die Ausführung von {{htmlelement("script")}} beim Parsen deaktiviert.

### Sicherheitsüberlegungen

Der Suffix "Unsafe" im Methodennamen zeigt an, dass er nicht die Entfernung aller XSS-gefährlichen HTML-Entitäten erzwingt (im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)).
Obwohl er dies tun kann, wenn er mit einem geeigneten Sanitizer verwendet wird, muss er keinen effektiven Sanitizer verwenden oder überhaupt einen!
Die Methode ist daher ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Zeichenfolgen eines Benutzers in das DOM injiziert werden, ohne vorher bereinigt zu werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, welche die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups (wie {{htmlelement("script")}} Elemente und Ereignis-Handler-Attribute) zu entfernen, bevor sie injiziert werden.

Die Verwendung von `TrustedHTML` macht es möglich, den Code zur Bereinigung und Überprüfung auf Effektivität an wenigen Stellen zu auditieren, anstatt über alle Ihre Injection Sinks verstreut zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Falls Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, ist die nächst sicherere Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, in denen vom Benutzer bereitgestellte HTML-Eingaben XSS-gefährliche Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, es vermeidet auch die Notwendigkeit, sich mit Trusted Types auseinanderzusetzen.

Die Verwendung von `setHTMLUnsafe()` könnte angebracht sein, wenn:

- Sie `setHTML()` oder Trusted Types aus irgendeinem Grund nicht verwenden können und die sicherstmögliche Filterung wünschen.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-gefährlichen Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Shadow Roots enthalten könnte, sodass [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht verwendet werden kann.
- Sie einen Sonderfall haben, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  In diesem Fall können Sie `setHTML()` nicht verwenden, weil es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne einen Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten erlauben.

  Eine bessere Option wäre, `setHTMLUnsafe()` mit einem Sanitizer zu verwenden, der nur die gefährlichen Elemente und Attribute zulässt, die wir tatsächlich benötigen.
  Auch wenn dies immer noch unsicher ist, ist es sicherer, als alle zuzulassen.

Für den letzten Punkt: Stellen Sie sich eine Situation vor, in der Ihr Code darauf angewiesen ist, unsichere `onclick` Handler verwenden zu können.
Der folgende Code zeigt die Wirkung der verschiedenen Methoden und Sanitizer für diesen Fall.

```js
const target = document.querySelector("#target");

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// Safe - removes all XSS-unsafe entities.
target.setHTML(input);

// Removes no event handler attributes
target.setHTMLUnsafe(input);
target.innerHTML = input;

// Safe - removes all XSS-unsafe entities.
const configSafe = new Sanitizer();
target.setHTMLUnsafe(input, { sanitizer: configSafe });

// Removes all XSS-unsafe entities except `onclick`
const configLessSafe = new Sanitizer();
config.allowAttribute("onclick");
target.setHTMLUnsafe(input, { sanitizer: configLessSafe });
```

## Beispiele

### setHTMLUnsafe() mit Trusted Types

Um das Risiko von XSS zu verringern, erstellen wir zunächst ein `TrustedHTML` Objekt aus der Zeichenfolge, die das HTML enthält, und übergeben dieses Objekt dann an `setHTMLUnsafe()`.
Da Trusted Types noch nicht von allen Browsern unterstützt werden, definieren wir das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieses fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) zum Transformieren einer Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

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

Jetzt, da wir `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Die Eingabe wurde durch die Transformationsfunktion geleitet, daher übergeben wir keinen Sanitizer an die Methode.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel demonstriert den Fall, in dem wir keine Trusted Types verwenden, sodass wir Sanitizer-Argumente übergeben.

Der Code erstellt eine nicht vertrauenswürdige Zeichenfolge und zeigt eine Reihe von Wegen, wie ein Sanitizer an die Methode übergeben werden kann.

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// Get the target Element with id "target"
const target = document.getElementById("target");

// Define custom Sanitizer and use in setHTMLUnsafe()
// This allows only elements: div, p, button, script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// Define custom SanitizerConfig within setHTMLUnsafe()
// Removes the <script> element but allows other potentially unsafe entities.
target.setHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` Live-Beispiel

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um eine Zeichenfolge von HTML zu injizieren.
Eine Schaltfläche injiziert das HTML, ohne es überhaupt zu bereinigen, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>` Elemente zulässt, aber keine anderen unsicheren Elemente.
Die ursprüngliche Zeichenfolge und das injizierte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code eine Zeichenfolge anstelle eines Trusted Types.
> Sie sollten dies in Produktionscode nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Aufrufen der Methode mit verschiedenen Sanitizern, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, in das die Zeichenfolge injiziert werden soll.

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

Zuerst definieren wir die Zeichenfolge, die bereinigt werden soll, welche für alle Fälle gleich sein wird.
Diese enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für die Schaltfläche zum Neuladen.

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

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt.
Im Allgemeinen würden wir erwarten, dass die Methode Elemente in der Zeichenfolge fallen lässt, die im Kontext nicht erlaubt sind (wie tabellen-spezifische Elemente in einem `<div>` Element), ansonsten sollte sie jedoch die Eingabezeichenfolge entsprechen.
In diesem Fall sollten die Zeichenfolgen übereinstimmen.

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // Set unsafe HTML without specifying a sanitizer
  target.setHTMLUnsafe(unsanitizedString);

  // Log HTML before sanitization and after being injected
  logElement.textContent =
    "No sanitizer: string should be injected without filtering\n\n";
  log(`\nunsanitized: ${unsanitizedString}`);
  log(`\n\nsanitized: ${target.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizeurs, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente zulässt.
Beachten Sie, dass, da wir die `setHTMLUnsafe()` Methode verwenden, `<script>` nicht entfernt wird!

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
  log(`\n\nsanitized: ${target.innerHTML}`);
});
```

```js hidden
} else {
  log("The HTML Sanitizer API is NOT supported in this browser.");
  // Provide fallback or alternative behavior
}
```

#### Ergebnisse

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Auswirkungen ohne Sanitizer und mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie die Schaltfläche "None" klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie die Schaltfläche "allowScript" klicken, ist das `<script>` Element immer noch vorhanden, aber das `<button>` Element wurde entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie sind nicht gezwungen dazu.

{{EmbedLiveSample("setHTMLUnsafe() Live-Beispiel","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
