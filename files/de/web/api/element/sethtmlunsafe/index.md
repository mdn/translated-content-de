---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 1ad74264b2c41abc00b12abfd1876747473f518c
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) sollte fast immer anstelle dieser Methode verwendet werden – in Browsern, die sie unterstützen – da HTML-Entitäten, die nicht XSS-sicher sind, immer entfernt werden.

Die **`setHTMLUnsafe()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle wird verwendet, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen, dabei optional unerwünschte Elemente und Attribute sowie solche, die nicht in den Kontext gehören, herauszufiltern und dann den Teilbaum des Elements im DOM zu ersetzen.

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
      - : Ein Objekt [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), das definiert, welche Elemente der Eingabe zugelassen oder entfernt werden sollen.
        Dies kann auch ein String mit dem Wert `"default"` sein, wodurch ein `Sanitizer` mit der standardmäßigen (XSS-sicheren) Konfiguration angewendet wird.
        Wird kein Wert angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass ein `Sanitizer` in der Regel effizienter ist als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Wird geworfen, wenn:
    - `input` als String übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` wird übergeben mit einem:
      - Wert, der kein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder String ist.
      - Nicht-normalisierten [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) (der sowohl "zugelassene" als auch "entfernte" Konfigurationseinstellungen enthält).
      - String, der nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode wird verwendet, um eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu parsen und dabei optional unerwünschte Elemente und Attribute zu bereinigen und Elemente zu verwerfen, die laut HTML-Spezifikation im Ziel-Element nicht zulässig sind (wie z. B. {{htmlelement("li")}} innerhalb eines {{htmlelement("div")}}).
Das `DocumentFragment` wird dann verwendet, um den Teilbaum des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden [deklarative Schattenwurzeln](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn der HTML-String mehr als eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Schatten-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Schattenwurzel geparst.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in die Eingabe injiziert.
Es ist daher potenziell noch unsicherer als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das die Ausführung von {{htmlelement("script")}} beim Parsen deaktiviert.

### Sicherheitsüberlegungen

Der Zusatz "Unsafe" im Methodennamen weist darauf hin, dass nicht alle XSS-unsicheren HTML-Entitäten entfernt werden (im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)).
Obwohl dies der Fall sein kann, wenn ein geeigneter Sanitizer verwendet wird, muss es keinen effektiven Sanitizer verwenden oder überhaupt keinen!
Die Methode ist daher ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, ohne vorherige Bereinigung in das DOM injiziert werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) durch die Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markup (wie {{htmlelement("script")}} Elemente und Ereignishandler-Attribute) zu entfernen, bevor sie injiziert wird.

Die Verwendung von `TrustedHTML` ermöglicht es, sicherzustellen, dass der Bereinigungscode nur an wenigen Stellen effektiv ist, anstatt über alle Ihre Injection-Sinks verstreut zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Falls Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser, `setHTML()`) nicht verwenden können, ist die nächstsicherste Option die Verwendung von `setHTMLUnsafe()` mit dem XSS-sicheren Standard[`Sanitizer`](/de/docs/Web/API/Sanitizer).

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte nahezu nie verwendet werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerbereitgestellte HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, sondern es erfordert auch keine Überlegungen zu Trusted Types.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder trusted types aus irgendeinem Grund nicht verwenden können und den sichersten verfügbaren Filter anwenden möchten.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard[`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unsicheren Elemente zu filtern.
- Sie können `setHTML()` nicht verwenden und die Eingabe könnte deklarative Schattenwurzeln enthalten, sodass Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht verwenden können.
- Sie haben einen Sonderfall, in dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  In diesem Fall können Sie `setHTML()` nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option ist es, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur die gefährlichen Elemente und Attribute zulässt, die wir tatsächlich benötigen.
  Obwohl das immer noch unsicher ist, ist es sicherer, als alle zuzulassen.

Für den letzten Punkt: Betrachten Sie eine Situation, in der Ihr Code darauf angewiesen ist, dass unsichere `onclick`-Handler verwendet werden können.
Der folgende Code zeigt den Effekt der verschiedenen Methoden und Sanitizer für diesen Fall.

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

Um das Risiko eines XSS zu mindern, erstellen wir zuerst ein `TrustedHTML` Objekt aus dem String, der das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da Trusted Types noch nicht in allen Browsern unterstützt werden, definieren wir das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

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

Nachdem wir `trustedHTML` haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Die Eingabe wurde durch die Transformationsfunktion geleitet, daher übergeben wir keinen Sanitizer an die Methode.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel demonstriert den Fall, in dem wir keine Trusted Types verwenden, daher werden wir Sanitizer-Argumente übergeben.

Der Code erstellt einen nicht vertrauten String und zeigt eine Reihe von Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

Dieses Beispiel bietet eine „Live“-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, die Sie anklicken können, um einen HTML-String zu injizieren.
Ein Button injiziert das HTML ohne jegliche Bereinigung, und der zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>` Elemente erlaubt, aber andere unsichere Elemente nicht.
Der Original-String und das injizierte HTML werden protokolliert, damit Sie die Ergebnisse in jedem Fall überprüfen können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code einen String anstelle eines Trusted Types.
> Sie sollten dies in Produktivcode nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente für das Aufrufen der Methode mit verschiedenen Sanitizern, eine weitere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}} Element, um den String zu injizieren.

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

Zuerst definieren wir den String, der bereinigt werden soll, der in allen Fällen gleich ist.
Dieser enthält das {{htmlelement("script")}} Element und den `onclick` Handler, die beide als XSS-unsicher gelten.
Wir definieren auch den Handler für die Neuladeschaltfläche.

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

Als nächstes definieren wir den Click-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt.
Generell würden wir erwarten, dass die Methode Elemente im String auslässt, die im Kontext nicht erlaubt sind (wie tabellenspezifische Elemente in einem `<div>` Element), im Übrigen jedoch den Eingabestring entspricht.
In diesem Fall sollten sich die Strings entsprechen.

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

Der nächste Click-Handler setzt das Ziel-HTML mithilfe eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}} Elemente erlaubt.
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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Auswirkungen ohne Sanitizer bzw. mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die Schaltfläche "None" klicken, sollten Sie sehen, dass die Eingabe und die Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf die Schaltfläche "allowScript" klicken, ist das `<script>` Element noch vorhanden, aber das `<button>` Element wird entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, sind aber nicht dazu gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
