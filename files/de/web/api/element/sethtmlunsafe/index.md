---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: b3401d14892454cb509338239fb1a028e5c1470f
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML` Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für mehr Informationen.

> [!NOTE]
> [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) sollte fast immer anstelle dieser Methode verwendet werden — in Browsern, in denen es unterstützt wird — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, dabei optional unerwünschte Elemente und Attribute herauszufiltern und solche, die nicht in den Kontext gehören, und dann den Subtree des Elements im DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, der das zu analysierende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, was einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Wird keiner angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Diese wird ausgelöst, wenn:
    - `input` ein String ist und [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` wird ein:
      - Wert übergeben, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), noch ein String ist.
      - Nicht-normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (die sowohl "erlaubt" als auch "entfernt" Konfigurationseinstellungen enthält).
      - String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, es dabei optional von unerwünschten Elementen und Attributen zu bereinigen und Elemente zu verwerfen, die die HTML-Spezifikation im Zielelement nicht zulässt (wie z. B. {{htmlelement("li")}} innerhalb eines {{htmlelement("div")}}).
Das `DocumentFragment` wird dann verwendet, um den Subtree des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden [deklarative Schattenwurzeln](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM analysiert.
Wenn der HTML-String mehr als eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Schattenwirt definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Schattenwurzel analysiert.

`setHTMLUnsafe()` führt keine Bereinigung von Haus aus durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.
Es ist daher potenziell sogar noch unsicherer als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das die Ausführung von {{htmlelement("script")}} beim Parsen deaktiviert.

### Sicherheitsüberlegungen

Der Suffix "Unsafe" im Methodennamen weist darauf hin, dass es nicht die Entfernung aller XSS-unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)).
Es kann dies tun, wenn es mit einem geeigneten Sanitizer verwendet wird, muss aber keinen effektiven Sanitizer verwenden oder überhaupt keinen!
Die Methode ist daher ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, ohne vorherige Bereinigung in das DOM injiziert werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types mit dem CSP-Direktiv `require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) durchsetzen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geht, die die Chance hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, zu prüfen und sicherzustellen, dass die Bereinigung des Codes effektiv ist, und das nur an wenigen Stellen, anstatt über alle Injektionsstellen verteilt.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Falls Sie aus irgendeinem Grund kein `TrustedHTML` (oder noch besser, `setHTML()`) verwenden können, dann ist die nächst sicherste Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerbereitgestellte HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, sondern es vermeidet auch die Notwendigkeit, Trusted Types zu berücksichtigen.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie können `setHTML()` oder Trusted Types (aus welchen Gründen auch immer) nicht verwenden und möchten die möglichst sicherste Filterung.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unsicheren Elemente zu filtern.
- Sie können `setHTML()` nicht verwenden und die Eingabe könnte deklarative Schattenwurzeln enthalten, sodass Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht verwenden können.
- Sie haben einen Sonderfall, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  Sie können `setHTML()` in diesem Fall nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur die gefährlichen Elemente und Attribute zulässt, die wir tatsächlich benötigen.
  Auch wenn dies weiterhin unsicher ist, ist es sicherer, als alle zuzulassen.

Für den letzten Punkt: Stellen Sie sich eine Situation vor, in der Ihr Code darauf angewiesen ist, unsichere `onclick`-Handler verwenden zu können.
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

Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML` Objekt aus dem String, der das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da Trusted Types noch nicht von allen Browsern unterstützt werden, definieren wir das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) zur Bereinigung der Eingabe, wie unten gezeigt:

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
Die Eingabe durchlief die Transformationsfunktion, daher übergeben wir keinen Sanitizer an die Methode.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel zeigt den Fall, in dem wir keine Trusted Types verwenden, was bedeutet, dass wir Sanitizer-Argumente übergeben.

Der Code erstellt einen untrusted String und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode bei Aufruf mit verschiedenen Sanitizern.
Der Code definiert Buttons, die Sie anklicken können, um einen String von HTML zu injizieren.
Ein Button injiziert das HTML, ohne es überhaupt zu bereinigen, und der zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>` Elemente erlaubt, aber keine anderen unsicheren Elemente.
Der ursprüngliche String und das injizierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall untersuchen können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code einen String anstelle eines Trusted Types.
> Dies sollten Sie nicht in Produktionscode machen.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Aufrufen der Methode mit verschiedenen Sanitizern, einen weiteren Button zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, um den String zu injizieren.

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

Zuerst definieren wir den zu bereinigenden String, der in allen Fällen gleich sein wird.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für den Neuladen-Button.

```js
// Define unsafe string of HTML
const unsanitizedString = `
  <div>
    <p>This is a paragraph. <button onclick="alert('You clicked the button!')">Click me</button></p>
    <script src="path/to/a/module.js" type="module"></script>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Als nächstes definieren wir den Klick-Handler für den Button, der das HTML ohne Sanitizer setzt.
Im Allgemeinen würden wir erwarten, dass die Methode Elemente im String entfernt, die im Kontext nicht erlaubt sind (wie table-spezifische Elemente in einem `<div>` Element), aber ansonsten den Eingabestring übereinstimmt.
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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} Elemente zulässt.
Beachten Sie, dass, weil wir die `setHTMLUnsafe()` Methode verwenden, `<script>` nicht entfernt werden!

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

Klicken Sie auf die Buttons "None" und "allowScript", um die Auswirkungen von keinem Sanitizer bzw. einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf den "None" Button klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf den "allowScript" Button klicken, ist das `<script>` Element noch vorhanden, aber das `<button>` Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie sind nicht gezwungen dazu.

{{EmbedLiveSample("setHTMLUnsafe() Live-Beispiel","100","380px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
