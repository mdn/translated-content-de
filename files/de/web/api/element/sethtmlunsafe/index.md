---
title: "Element: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 8b449a5846c1de417894acfe9b4471447181b57f
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert Ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potenziell eine Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko minimieren, indem Sie immer `TrustedHTML`-Objekte anstatt von Strings übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) sollte fast immer anstelle dieser Methode verwendet werden — in Browsern, in denen es unterstützt wird — da es immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces wird verwendet, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, wobei optionale Filter unerwünschte Elemente und Attribute sowie diejenigen, die im Kontext nicht zulässig sind, herausfiltern, und dann damit den Teilbaum des Elements im DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder ein String, der definiert, welches HTML analysiert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden sollen.
        Dies kann auch ein String mit dem Wert `"default"` sein, was einen `Sanitizer` mit der Standardkonfiguration (XSS-sicher) anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass ein `Sanitizer` im Allgemeinen effizienter ist als eine `SanitizerConfig`, vorausgesetzt, dass die Konfiguration wiederverwendet wird.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Wird geworfen, wenn:
    - `input` einen String erhält, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` einen übergebenen:
      - [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), der nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Zum Beispiel eine Konfiguration, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält.
      - String, der nicht den Wert `"default"` hat.
      - Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch ein String ist.

## Beschreibung

Die **`setHTMLUnsafe()`**-Methode wird verwendet, um eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, wobei unerwünschte Elemente und Attribute optional bereinigt werden, und Elemente verworfen werden, die das HTML-Spezifikation im Ziel-Element nicht erlaubt (wie {{htmlelement("li")}} innerhalb eines {{htmlelement("div")}}).
Das `DocumentFragment` wird dann verwendet, um den Teilbaum des Elements im DOM zu ersetzen.

Im Gegensatz zu [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden [deklarative Schattenwurzeln](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM analysiert.
Wenn der HTML-String mehr als eine [deklarative Schattenwurzel](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Schatten-Host definiert, wird nur die erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt — nachfolgende Deklarationen werden als `<template>` Elemente innerhalb der Schattenwurzel analysiert.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in die Eingabe eingebettet.
Es ist daher potenziell sogar weniger sicher als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das bei der Analyse die Markierung {{htmlelement("script")}} deaktiviert.

### Sicherheitsüberlegungen

Das Suffix "Unsafe" im Methodennamen weist darauf hin, dass es nicht die Entfernung aller XSS-gefährlichen HTML-Entitäten erzwingt (im Gegensatz zu [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML)).
Obwohl es so sein kann, wenn es mit einem geeigneten Sanitizer verwendet wird, muss es nicht unbedingt einen effektiven Sanitizer verwenden oder überhaupt einen verwenden!
Die Methode ist daher ein möglicher Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, in das DOM eingefügt werden, ohne vorher bereinigt zu werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings verwenden und [Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive durchsetzen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geführt wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliche Markierungen (wie {{htmlelement("script")}} Elemente und Ereignis-Handler-Attribute) zu entfernen, bevor sie eingebettet werden.

Die Verwendung von `TrustedHTML` ermöglicht es, den Bereinigungscode auf nur wenige Stellen zu überprüfen und sicherzustellen, dass er effektiv ist, anstatt über alle Ihre Injection-Sinks verstreut zu sein.
Wenn Sie `TrustedHTML` verwenden, sollte es nicht nötig sein, einen Sanitizer an die Methode zu übergeben.

Wenn Sie aus irgendeinem Grund weder `TrustedHTML` (noch besser, `setHTML()`) verwenden können, dann ist die nächste sichere Option, `setHTMLUnsafe()` mit dem XSS-sicheren Standard- [`Sanitizer`](/de/docs/Web/API/Sanitizer) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, da es nur sehr wenige (wenn überhaupt) Fälle gibt, in denen benutzerdefinierte HTML-Eingaben unsichere XSS-Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, sondern es vermeidet auch die Berücksichtigung vertrauenswürdiger Typen.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder vertrauenswürdige Typen aus irgendeinem Grund nicht verwenden können und Sie das sicherste mögliche Filtern haben möchten.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard- [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unsicheren Elemente zu filtern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Schattenwurzeln enthalten kann, sodass Sie [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht verwenden können.
- Sie einen Sonderfall haben, bei dem Sie HTML-Eingaben zulassen müssen, die eine bekannte Menge unsicherer HTML-Entitäten enthalten.

  Sie können `setHTML()` in diesem Fall nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur diejenigen gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Obwohl dies immer noch unsicher ist, ist es sicherer, als alle von ihnen zuzulassen.

Für den letzten Punkt sollten Sie eine Situation in Betracht ziehen, in der Ihr Code darauf angewiesen ist, unsichere `onclick`-Handler verwenden zu können.
Der folgende Code zeigt die Auswirkungen der verschiedenen Methoden und Sanitizer für diesen Fall.

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

Um das Risiko von XSS zu mindern, erstellen wir zunächst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und übergeben dann dieses Objekt an `setHTMLUnsafe()`.
Da Trusted Types noch nicht in allen Browsern unterstützt werden, definieren wir die [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingaben zu bereinigen, wie unten gezeigt:

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

Jetzt, da wir `trustedHTML` haben, zeigt der untenstehende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Die Eingabe wurde durch die Transformationsfunktion geleitet, daher übergeben wir keinen Sanitizer an die Methode.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel demonstriert den Fall, in dem wir keine Trusted Types verwenden, sodass wir Sanitizer-Argumente übergeben.

Der Code erstellt einen unzuverlässigen String und zeigt verschiedene Wege, auf denen ein Sanitizer an die Methode übergeben werden kann.

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
Der Code definiert Schaltflächen, die Sie klicken können, um einen HTML-String einzufügen.
Ein Button fügt das HTML ohne jegliche Bereinigung ein, und der zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente erlaubt, jedoch keine anderen unsicheren Elemente.
Der Original-String und das eingebettete HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injiziert der folgende Code einen String anstelle eines vertrauenswürdigen Typs.
> Dies sollten Sie in Produktionscode nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente, um die Methode mit verschiedenen Sanitizern aufzurufen, eine andere Schaltfläche, um das Beispiel zurückzusetzen, und ein {{htmlelement("div")}}-Element, um den String einzufügen.

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

Zunächst definieren wir den String, der bereinigt werden soll, der in allen Fällen gleich sein wird.
Dies enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
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

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt.
Im Allgemeinen würden wir erwarten, dass die Methode Elemente im String fallen lässt, die im Kontext nicht erlaubt sind (wie tabellenspezifische Elemente in einem `<div>`), ansonsten jedoch den Eingabestring abgleicht.
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
  log(`\n\nsanitized: ${target.innerHTML}`);
});
```

Der nächste Klick-Handler setzt das Ziel-HTML unter Verwendung eines benutzerdefinierten Sanitizers, der nur {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}}-Elemente erlaubt.
Beachten Sie, dass da wir die `setHTMLUnsafe()`-Methode verwenden, `<script>` nicht entfernt werden!

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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Auswirkungen ohne einen Sanitizer beziehungsweise mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf die "None"-Schaltfläche klicken, sollten Sie sehen, dass die Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewandt wird.
Wenn Sie auf die "allowScript"-Schaltfläche klicken, ist das `<script>`-Element immer noch vorhanden, das `<button>`-Element wird jedoch entfernt.
Mit diesem Ansatz können Sie sicheres HTML erstellen, ohne dazu gezwungen zu sein.

{{EmbedLiveSample("setHTMLUnsafe() Live-Beispiel","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
