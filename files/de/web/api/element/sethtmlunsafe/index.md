---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 21c690ab5437f9f0624ed2a709092734b7f5c0cf
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte anstelle von Zeichenfolgen übergeben und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) sollte fast immer anstelle dieser Methode verwendet werden — auf Browsern, wo es unterstützt wird — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um HTML-Eingaben in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, wobei optional unerwünschte Elemente und Attribute herausgefiltert werden, und dann damit den Teilbaum des Elements im DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder eine Zeichenfolge, die HTML definiert, das analysiert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch eine Zeichenfolge mit dem Wert `"default"` sein, was einen `Sanitizer` mit der Standard-(XSS-sicheren) Konfiguration anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass ein `Sanitizer` normalerweise effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

None (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `input` eine Zeichenfolge übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) durch ein CSP erzwungen werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` ein:
      - Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (eine, die sowohl "erlaubte" als auch "entfernte" Konfigurationseinstellungen enthält).
      - String, der nicht den Wert `"default"` hat, übergeben wird.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um eine HTML-Eingabe in einen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, wobei optional unerwünschte Elemente und Attribute entfernt und Elemente, die laut HTML-Spezifikation im Zielelement nicht erlaubt sind, verworfen werden (wie z.B. {{htmlelement("li")}} innerhalb eines {{htmlelement("div")}}).
Der `DocumentFragment` wird dann verwendet, um den Teilbaum des Elements im DOM zu ersetzen.

Anders als bei [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM analysiert.
Wenn der HTML-String mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Shadow Root analysiert.

`setHTMLUnsafe()` führt standardmäßig keine Sanitärmaßnahmen durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe eingefügt.
Es ist daher potenziell noch weniger sicher als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das die Ausführung von {{htmlelement("script")}} deaktiviert, wenn es analysiert wird.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass es nicht die Entfernung aller XSS-unschädlichen HTML-Entitäten erzwingt (im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)).
Obwohl es dies tun kann, wenn es mit einem geeigneten Sanitizer verwendet wird, muss es keinen effektiven Sanitizer verwenden, oder überhaupt einen Sanitizer!
Die Methode ist daher ein potenzieller Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen möglicherweise unsichere vom Benutzer bereitgestellte Zeichenfolgen in das DOM eingefügt werden, ohne dass sie zuvor gesäubert werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen übergeben und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion läuft, die die Möglichkeit hat, die Eingabe zu [säubern](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups (wie {{htmlelement("script")}} Elemente und Ereignishandlerattribute) zu entfernen, bevor sie eingefügt wird.

Die Nutzung von `TrustedHTML` ermöglicht es, die Säuberungscodes nur an wenigen Stellen zu prüfen und zu überprüfen, statt sie über alle Injektionspfade zu verteilen.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, dann ist die nächste sichere Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, weil es nur sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerdefinierter HTML-Eingang XSS-unschädliche Elemente enthalten muss.
Nicht nur ist `setHTML()` sicher, es vermeidet auch das Berücksichtigen von trusted types.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder trusted types nicht verwenden können (aus welchen Gründen auch immer) und Sie die sicherste mögliche Filterung benötigen.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unschädlichen Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Shadow Roots enthalten könnte, sodass Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht verwenden können.
- Sie einen Sonderfall haben, bei dem Sie HTML-Eingaben erlauben müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  Sie können `setHTML()` in diesem Fall nicht verwenden, weil es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne einen Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten erlauben.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer zu verwenden, der nur die gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Auch wenn dies noch unsicher ist, ist es sicherer als alle zu erlauben.

Für den letzten Punkt, bedenken Sie eine Situation, in der Ihr Code darauf angewiesen ist, unsichere `onclick`-Handler zu verwenden.
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

Um das Risiko von XSS zu mildern, erstellen wir zuerst ein `TrustedHTML` Objekt aus der Zeichenfolge, die das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da trusted types noch nicht in allen Browsern unterstützt werden, definieren wir den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die trusted types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen zu transformieren.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu säubern, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML` Objekt aus der möglicherweise unsicheren Eingabezeichenfolge zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Da wir jetzt `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Die Eingabe wurde durch die Transformationsfunktion geführt, also übergeben wir keinen Sanitizer an die Methode.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel zeigt den Fall, in dem wir keine trusted types verwenden, sodass wir Sanitizer-Argumente übergeben werden.

Der Code erstellt eine nicht vertrauenswürdige Zeichenfolge und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitisern aufgerufen wird.
Der Code definiert Schaltflächen, auf die Sie klicken können, um eine Zeichenfolge von HTML einzufügen.
Eine Schaltfläche fügt das HTML ein, ohne es überhaupt zu säubern, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>` Elemente erlaubt, aber andere unsichere Elemente nicht.
Die ursprüngliche Zeichenfolge und das eingefügte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code eine Zeichenfolge anstelle eines trusted type.
> Sie sollten dies in Produktionscode nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Aufrufen der Methode mit verschiedenen Sanitisern, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element zum Einfügen der Zeichenfolge.

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

Zuerst definieren wir die zu säubernde Zeichenfolge, die für alle Fälle gleich sein wird.
Diese enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für die Neuladeschaltfläche.

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

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt.
Im Allgemeinen würden wir erwarten, dass die Methode Elemente in der Zeichenfolge, die im Kontext nicht erlaubt sind (wie tabellenspezifische Elemente in einem `<div>` Element) verwirft, aber ansonsten die Eingabezeichenfolge abgleicht.
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
  log(`\nsanitized: ${target.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}} Elemente erlaubt.
Beachten Sie, dass durch die Verwendung der `setHTMLUnsafe()` Methode `<script>` nicht entfernt werden!

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

Klicken Sie auf die "None" und "allowScript" Schaltflächen, um die Auswirkungen von keinem Sanitizer und einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die "None" Schaltfläche klicken, sollten Sie sehen, dass die Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die "allowScript" Schaltfläche klicken, ist das `<script>` Element noch vorhanden, aber das `<button>` Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, sind aber nicht dazu gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","380px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
