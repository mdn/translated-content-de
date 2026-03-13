---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen ein potenzielles Risiko für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

> [!NOTE]
> [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) sollte fast immer anstelle dieser Methode verwendet werden — auf Browsern, die sie unterstützen — da sie immer XSS-gefährliche HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute herausgefiltert werden können, die nicht in den Kontext gehören. Anschließend wird es verwendet, um den Unterbaum des Elements im DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, der das zu parsende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingaben erlaubt oder entfernt werden.
        Dies kann auch ein String mit dem Wert `"default"` sein, der einen `Sanitizer` mit der (XSS-sicheren) [Standard-Konfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass es effizienter sein kann, einen `Sanitizer` zu verwenden und ihn bei Bedarf zu ändern, wenn Sie dieselbe Konfiguration mehrmals verwenden.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn:
    - `input` ein String ist, Trusted Types [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` übergeben wird mit:
      - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Zum Beispiel eine Konfiguration, die sowohl "allow" als auch "remove" Einstellungen enthält.
      - einem String, der nicht den Wert `"default"` hat.
      - einem Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, wobei unerwünschte Elemente und Attribute optional entfernt und Elemente verworfen werden, die die HTML-Spezifikation im Ziel-Element nicht zulässt (zum Beispiel {{htmlelement("li")}} innerhalb eines {{htmlelement("div")}}).
Das `DocumentFragment` wird dann verwendet, um den Unterbaum des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden deklarative Schattenwurzeln [declarative shadow roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenkette mehr als eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Schatten-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieser Schattenwurzel geparst.

`setHTMLUnsafe()` führt standardmäßig keine Sanitierung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.
Es ist daher potenziell weniger sicher als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das die Ausführung von {{htmlelement("script")}} beim Parsen deaktiviert.

### Sicherheitsüberlegungen

Der Suffix "Unsafe" im Methodennamen weist darauf hin, dass nicht alle XSS-gefährlichen HTML-Entitäten entfernt werden (im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)).
Obwohl dies der Fall sein kann, wenn ein geeigneter Sanitizer verwendet wird, muss es keinen wirksamen Sanitizer verwenden, oder überhaupt keinen!
Die Methode ist daher eine mögliche Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Zeichenfolgen, die von einem Benutzer bereitgestellt werden, ohne vorherige Reinigung in das DOM eingefügt werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion läuft, die die Möglichkeit hat, die Eingabe zu [sanitieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markups (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor sie eingefügt wird.

Die Verwendung von `TrustedHTML` macht es möglich, zu überprüfen und sicherzustellen, dass der Sanitierungscode an nur wenigen Stellen effektiv ist, anstatt über alle Injection Sinks verstreut zu sein.
Sie sollten beim Verwenden von `TrustedHTML` keinen Sanitizer an die Methode übergeben müssen.

Wenn Sie aus irgendeinem Grund kein `TrustedHTML` (oder noch besser, `setHTML()`) verwenden können, dann ist die nächstsicherste Option, `setHTMLUnsafe()` mit der [Standardkonfiguration des Sanitizers](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerbereitgestellte HTML-Eingaben XSS-gefährliche Elemente enthalten sollten.
Nicht nur ist `setHTML()` sicher, sondern es vermeidet auch Überlegungen zu Trusted Types.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder Trusted Types nicht verwenden können (aus welchem Grund auch immer) und Sie die sicherstmögliche Filterung wünschen.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-gefährlichen Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Schattenwurzeln enthalten könnte, sodass Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht verwenden können.
- Sie einen Randfall haben, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  Sie können `setHTML()` in diesem Fall nicht verwenden, weil es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten erlauben.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur die gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Auch wenn dies immer noch unsicher ist, ist es sicherer als alle von ihnen zuzulassen.

Für den letzten Punkt, betrachten Sie eine Situation, in der Ihr Code davon abhängt, dass unsichere `onclick` Handler verwendet werden können.
Der folgende Code zeigt die Wirkung der verschiedenen Methoden und Sanitizer in diesem Fall.

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

Um das Risiko von XSS zu reduzieren, erstellen wir zuerst ein `TrustedHTML` Objekt aus dem String, der das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da Trusted Types noch nicht in allen Browsern unterstützt werden, definieren wir das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies funktioniert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) zur Sanitisierung der Eingabe, wie unten gezeigt:

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

Nun, da wir `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Die Eingabe wurde durch die Transformationsfunktion geführt, daher übergeben wir keinen Sanitizer an die Methode.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### Verwenden von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel zeigt den Fall, in dem wir keine Trusted Types verwenden, daher werden wir Sanitizer-Argumente übergeben.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitisierern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um eine HTML-Zeichenkette einzufügen.
Eine Schaltfläche fügt das HTML ohne jegliche Sanitisierung ein, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente zulässt, jedoch keine anderen unsicheren Elemente.
Die ursprüngliche Zeichenfolge und das eingespritzte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall überprüfen können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code einen String anstelle eines Trusted Type.
> Dies sollten Sie in Produktionscode nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Aufrufen der Methode mit verschiedenen Sanitisierern, eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}} Element, in das die Zeichenkette eingefügt wird.

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

Zuerst definieren wir die zu sanitisierende Zeichenfolge, die für alle Fälle dieselbe sein wird.
Diese enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-gefährlich gelten.
Wir definieren auch den Handler für die Neulade-Schaltfläche.

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

Als nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt.
Normalerweise würden wir erwarten, dass die Methode die Elemente in der Zeichenfolge verwirft, die im Kontext nicht erlaubt sind (wie table-spezifische Elemente in einem `<div>`-Element), aber ansonsten der Eingabezeichenfolge entspricht.
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

Der nächste Klick-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanitisierers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.
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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Effekte von fehlendem Sanitizer bzw. einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die Schaltfläche "None" klicken, sollten Sie sehen, dass Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die "allowScript"-Schaltfläche klicken, ist das `<script>`-Element noch vorhanden, aber das `<button>`-Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, aber Sie sind nicht dazu gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
