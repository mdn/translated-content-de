---
title: "Element: Methode setHTMLUnsafe()"
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet. Wenn die Eingabe ursprünglich von einem Angreifer stammt, können sie ein Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein.
>
> Sie können dieses Risiko verringern, indem Sie immer `TrustedHTML`-Objekte statt Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

> [!NOTE]
> In Browsern, die [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) unterstützen, sollten Sie fast immer diese Methode statt `setHTMLUnsafe()` verwenden, da sie stets XSS-anfällige HTML-Inhalte entfernt.

Die Methode **`setHTMLUnsafe()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) parst eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment). Dabei können unerwünschte Elemente und Attribute sowie solche, die im jeweiligen Kontext nicht zulässig sind, optional herausgefiltert werden. Anschließend wird mit dem Fragment der Teilbaum des Elements im DOM ersetzt.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder eine Zeichenfolge, die das zu parsende HTML enthält.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das festlegt, welche Elemente der Eingabe zugelassen oder entfernt werden.
        Der Wert kann auch die Zeichenfolge `"default"` sein. Damit wird ein `Sanitizer` mit der (XSS-sicheren) [Standardkonfiguration für Sanitizer](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) angewendet.
        Wird kein Wert angegeben, kommt kein Sanitizer zum Einsatz.

        Wenn Sie dieselbe Konfiguration mehrfach verwenden, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und ihn bei Bedarf anzupassen.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - für `input` eine Zeichenfolge übergeben wird, obwohl [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist;
    - für `options.sanitizer` einer der folgenden Werte übergeben wird:
      - eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist, beispielsweise eine Konfiguration, die sowohl Einstellungen für zugelassene als auch für entfernte Elemente enthält;
      - eine Zeichenfolge mit einem anderen Wert als `"default"`;
      - ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) noch eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder eine Zeichenfolge ist.

## Beschreibung

Die Methode **`setHTMLUnsafe()`** parst eine HTML-Eingabe in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment). Optional werden dabei unerwünschte Elemente und Attribute bereinigt. Außerdem werden Elemente verworfen, die laut HTML-Spezifikation im Zielelement nicht zulässig sind (beispielsweise {{htmlelement("li")}} innerhalb von {{htmlelement("div")}}).
Anschließend wird mit dem `DocumentFragment` der Teilbaum des Elements im DOM ersetzt.

Anders als bei [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenfolge mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) für einen bestimmten Shadow Host definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt. Nachfolgende Deklarationen werden innerhalb dieses Shadow Roots als `<template>`-Elemente geparst.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wird kein Sanitizer als Parameter übergeben, werden alle HTML-Inhalte der Eingabe in das DOM eingefügt.
Die Methode ist daher möglicherweise sogar weniger sicher als [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML), das die Ausführung von {{htmlelement("script")}} beim Parsen unterbindet.

### Sicherheitsaspekte

Der Namenszusatz „Unsafe“ weist darauf hin, dass die Methode – anders als [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) – nicht erzwingt, dass alle XSS-anfälligen HTML-Inhalte entfernt werden.
Mit einem geeigneten Sanitizer kann sie diese zwar entfernen, sie kann aber auch mit einem ungeeigneten oder ganz ohne Sanitizer verwendet werden.
Die Methode kann daher ein Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen ohne vorherige Bereinigung in das DOM eingefügt werden.

Sie sollten dieses Risiko verringern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen übergeben und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) verwenden.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die potenziell gefährliches Markup (etwa {{htmlelement("script")}}-Elemente und Event-Handler-Attribute) vor dem Einfügen [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann.

Durch die Verwendung von `TrustedHTML` lässt sich die Wirksamkeit des Bereinigungscodes an wenigen Stellen prüfen, statt an allen Injection Sinks.
Wenn Sie `TrustedHTML` verwenden, sollten Sie der Methode keinen Sanitizer übergeben müssen.

Wenn Sie aus irgendeinem Grund weder `TrustedHTML` noch – die bessere Wahl – `setHTML()` verwenden können, ist die nächstsicherste Option, `setHTMLUnsafe()` mit der [Standardkonfiguration für Sanitizer](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) aufzurufen.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

Wenn [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) verfügbar ist, sollten Sie `setHTMLUnsafe()` fast nie verwenden. Es gibt kaum Fälle – wenn überhaupt –, in denen von Benutzern bereitgestellte HTML-Eingaben XSS-anfällige Elemente enthalten müssen.
`setHTML()` ist nicht nur sicher, sondern erspart Ihnen auch die Berücksichtigung von Trusted Types.

Die Verwendung von `setHTMLUnsafe()` kann sinnvoll sein, wenn:

- Sie `setHTML()` und Trusted Types aus irgendeinem Grund nicht verwenden können und eine möglichst sichere Filterung benötigen.
  In diesem Fall können Sie `setHTMLUnsafe()` mit dem standardmäßigen [`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-anfälligen Elemente herauszufiltern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Shadow Roots enthalten könnte, sodass auch [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) nicht infrage kommt.
- Sie in einem Sonderfall HTML-Eingaben zulassen müssen, die eine bekannte Gruppe unsicherer HTML-Inhalte enthalten.

  `setHTML()` kommt in diesem Fall nicht infrage, weil es alle unsicheren Inhalte entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, würden damit aber sämtliche unsicheren Inhalte zulassen.

  Besser ist es, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur die tatsächlich benötigten gefährlichen Elemente und Attribute zulässt.
  Das bleibt zwar unsicher, ist aber sicherer, als alle zuzulassen.

Betrachten Sie für den letzten Fall ein Szenario, in dem Ihr Code auf unsichere `onclick`-Handler angewiesen ist.
Der folgende Code zeigt, wie sich die verschiedenen Methoden und Sanitizer in diesem Fall auswirken.

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

Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der Zeichenfolge mit dem HTML ein `TrustedHTML`-Objekt und übergeben dieses anschließend an `setHTMLUnsafe()`.
Da Trusted Types noch nicht von allen Browsern unterstützt werden, definieren wir den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Funktion definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
Häufig verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um aus der potenziell unsicheren Eingabezeichenfolge ein `TrustedHTML`-Objekt zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Nachdem wir `trustedHTML` erstellt haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Die Eingabe hat bereits die Transformationsfunktion durchlaufen. Deshalb übergeben wir der Methode keinen Sanitizer.

```js
// Get the target Element with id "target"
const target = document.getElementById("target");

// setHTMLUnsafe() with no sanitizer
target.setHTMLUnsafe(trustedHTML);
```

### setHTMLUnsafe() ohne Trusted Types verwenden

Dieses Beispiel zeigt einen Fall ohne Trusted Types, in dem wir stattdessen Sanitizer-Argumente übergeben.

Der Code erstellt eine nicht vertrauenswürdige Zeichenfolge und zeigt verschiedene Möglichkeiten, der Methode einen Sanitizer zu übergeben.

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

### Interaktives Beispiel für `setHTMLUnsafe()`

Dieses Beispiel demonstriert die Methode interaktiv mit verschiedenen Sanitizern.
Der Code definiert Schaltflächen, mit denen Sie eine HTML-Zeichenfolge einfügen können.
Eine Schaltfläche fügt das HTML ohne jede Bereinigung ein. Die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente, aber keine anderen unsicheren Inhalte zulässt.
Die ursprüngliche Zeichenfolge und das eingefügte HTML werden protokolliert, damit Sie die Ergebnisse jeweils untersuchen können.

> [!NOTE]
> Um die Verwendung des Sanitizer-Arguments zu zeigen, fügt der folgende Code eine Zeichenfolge statt eines vertrauenswürdigen Typs ein.
> In Produktivcode sollten Sie dies nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente, mit denen die Methode mit unterschiedlichen Sanitizern aufgerufen wird, eine weitere Schaltfläche zum Zurücksetzen des Beispiels sowie ein {{htmlelement("div")}}-Element, in das die Zeichenfolge eingefügt wird.

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

Zunächst definieren wir die zu bereinigende Zeichenfolge, die in allen Fällen gleich ist.
Sie enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-anfällig gelten.
Außerdem definieren wir den Handler für die Schaltfläche zum Neuladen.

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

Als Nächstes definieren wir den Click-Handler für die Schaltfläche, die das HTML ohne Sanitizer setzt.
Im Allgemeinen ist zu erwarten, dass die Methode Elemente aus der Zeichenfolge verwirft, die im jeweiligen Kontext nicht zulässig sind (beispielsweise tabellenspezifische Elemente in einem `<div>`-Element). Ansonsten sollte die Ausgabe der Eingabezeichenfolge entsprechen.
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

Der nächste Click-Handler setzt das HTML des Zielelements mit einem benutzerdefinierten Sanitizer, der nur die Elemente {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} zulässt.
Beachten Sie, dass `<script>`-Elemente nicht entfernt werden, weil wir die Methode `setHTMLUnsafe()` verwenden!

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

Klicken Sie auf die Schaltflächen „None“ und „allowScript“, um die Auswirkungen ohne Sanitizer beziehungsweise mit einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie auf „None“ klicken, sollten Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf „allowScript“ klicken, bleibt das `<script>`-Element erhalten, während das `<button>`-Element entfernt wird.
Mit diesem Ansatz können Sie sicheres HTML erzeugen, sind dazu aber nicht gezwungen.

{{EmbedLiveSample("setHTMLUnsafe() live example","100","450px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ShadowRoot.setHTMLUnsafe()`](/de/docs/Web/API/ShadowRoot/setHTMLUnsafe)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) und [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
