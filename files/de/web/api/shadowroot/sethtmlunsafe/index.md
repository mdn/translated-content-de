---
title: "ShadowRoot: setHTMLUnsafe() Methode"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 1ad74264b2c41abc00b12abfd1876747473f518c
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte statt Zeichenfolgen übergeben und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

> [!NOTE]
> [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) sollte fast immer anstelle dieser Methode verwendet werden – auf Browsern, die es unterstützen –, da sie immer XSS-unsichere HTML-Entitäten entfernt.

Die **`setHTMLUnsafe()`** Methode der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Schnittstelle kann verwendet werden, um HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zu analysieren, unerwünschte Elemente und Attribute optional herauszufiltern und dann den bestehenden Baum im Shadow DOM zu ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder String-Instanz, die das zu analysierende HTML definiert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden optionalen Parametern:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) Objekt, das definiert, welche Elemente der Eingabe erlaubt oder entfernt werden.
        Dies kann auch eine Zeichenfolge mit dem Wert `"default"` sein, die einen `Sanitizer` mit der standardmäßigen (XSS-sicheren) Konfiguration anwendet.
        Wenn nicht angegeben, wird kein Sanitizer verwendet.

        Beachten Sie, dass im Allgemeinen ein `Sanitizer` effizienter erwartet wird als eine `SanitizerConfig`, wenn die Konfiguration wiederverwendet werden soll.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- `TypeError`
  - : Dies wird ausgelöst, wenn:
    - `input` eine Zeichenfolge übergeben wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - `options.sanitizer` ein:
      - Wert übergeben wird, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer), [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) noch eine Zeichenfolge ist.
      - nicht normalisierte [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) übergeben wird (eine, die sowohl "allowed" als auch "removed" Konfigurationseinstellungen enthält).
      - Zeichenfolge übergeben wird, die nicht den Wert `"default"` hat.

## Beschreibung

Die **`setHTMLUnsafe()`** Methode kann verwendet werden, um eine Zeichenfolge von HTML zu analysieren, unerwünschte Elemente und Attribute optional herauszufiltern und den bestehenden Shadow DOM zu ersetzen.

Im Gegensatz zu [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in den DOM analysiert.
Wenn die Zeichenfolge von HTML mehr als eine [deklarative Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in einem bestimmten Shadow Host definiert, wird nur das erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt – nachfolgende Deklarationen werden als `<template>` Elemente innerhalb dieser Shadow Root analysiert.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden alle HTML-Entitäten in der Eingabe injiziert.

### Sicherheitsüberlegungen

Der Suffix "Unsafe" im Methodennamen zeigt, dass es nicht die Entfernung aller XSS-unsicheren HTML-Entitäten erzwingt (im Gegensatz zu [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML)).
Während es dies tun kann, wenn es mit einem geeigneten Sanitizer verwendet wird, benötigt es keinen effektiven Sanitizer oder überhaupt keinen!
Die Methode ist daher ein möglicher Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenfolgen von einem Benutzer in den DOM injiziert werden, ohne dass sie vorher bereinigt werden.

Sie sollten dieses Risiko mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen übergeben und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion gelaufen ist, die die Möglichkeit hat, die Eingabe zu [sanitizieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup (wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute) zu entfernen, bevor es injiziert wird.

Durch die Verwendung von `TrustedHTML` wird es möglich, zu auditieren und zu überprüfen, dass der Sanitierungscode an nur wenigen Stellen effektiv ist, anstatt über alle Ihre Injection Sinks verteilt zu sein.
Sie sollten keinen Sanitizer an die Methode übergeben müssen, wenn Sie `TrustedHTML` verwenden.

Wenn Sie aus irgendeinem Grund `TrustedHTML` (oder noch besser `setHTML()`) nicht verwenden können, dann ist die nächstsicherste Option die Verwendung von `setHTMLUnsafe()` mit dem XSS-sicheren Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer).

### Wann sollte `setHTMLUnsafe()` verwendet werden?

`setHTMLUnsafe()` sollte fast nie verwendet werden, wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, da es sehr wenige (wenn überhaupt) Fälle gibt, wo von Benutzern bereitgestelltes HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
Nicht nur ist `setHTML()` sicher, es vermeidet auch die Berücksichtigung vertrauenswürdiger Typen.

Die Verwendung von `setHTMLUnsafe()` könnte angemessen sein, wenn:

- Sie `setHTML()` oder vertrauenswürdige Typen nicht verwenden können (aus welchem Grund auch immer) und Sie möchten die sicherste mögliche Filterung haben.
  In diesem Fall könnten Sie `setHTMLUnsafe()` mit dem Standard-[`Sanitizer`](/de/docs/Web/API/Sanitizer) verwenden, um alle XSS-unsicheren Elemente herauszufiltern.
- Sie können `setHTML()` nicht verwenden und die Eingabe könnte deklarative Shadow Roots enthalten, sodass Sie [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) nicht verwenden können.
- Sie haben einen Randfall, in dem Sie HTML-Eingaben zulassen müssen, die einen bekannten Satz unsicherer HTML-Entitäten enthalten.

  Sie können `setHTML()` in diesem Fall nicht verwenden, da es alle unsicheren Entitäten entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, aber das würde alle unsicheren Entitäten zulassen.

  Eine bessere Option hier ist, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur diejenigen gefährlichen Elemente und Attribute erlaubt, die wir tatsächlich benötigen.
  Obwohl dies immer noch unsicher ist, ist es sicherer, als alle von ihnen zu erlauben.

Für den letzten Punkt: Betrachten Sie eine Situation, in der Ihr Code darauf angewiesen ist, unsichere `onclick`-Handler verwenden zu können.
Der folgende Code zeigt die Auswirkungen der verschiedenen Methoden und Sanitizer auf diesen Fall.

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

Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus der Zeichenfolge, die das HTML enthält, und übergeben dieses Objekt dann an `setHTMLUnsafe()`.
Da vertrauenswürdige Typen noch nicht in allen Browsern unterstützt werden, definieren wir den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy` Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Jetzt, da wir `trustedHTML` haben, zeigt der Code unten, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zuerst erstellen wir das [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das wir anvisieren möchten.
Dieses könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden, aber für dieses Beispiel werden wir die Root deklarativ erstellen.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Wir erhalten dann ein Handle für die Shadow Root vom `#host` Element und rufen `setHTMLUnsafe()` auf.
Die Eingabe wurde durch die Transformationsfunktion geleitet, daher übergeben wir keinen Sanitizer an die Methode.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### Verwendung von setHTMLUnsafe() ohne Trusted Types

Dieses Beispiel zeigt den Fall, in dem wir keine vertrauenswürdigen Typen verwenden, sodass wir Sanitizer-Argumente übergeben werden.

Der Code erstellt zuerst eine nicht vertrauenswürdige Zeichenfolge und zeigt einige Möglichkeiten, wie ein Sanitizer an die Methode übergeben werden kann.

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

Dieses Beispiel bietet eine "Live"-Demonstration der Methode, wenn sie mit verschiedenen Sanitizern aufgerufen wird.
Der Code definiert Schaltflächen, auf die Sie klicken können, um eine Zeichenfolge von HTML zu injizieren.
Eine Schaltfläche injiziert das HTML ohne jegliche Bereinigung, und die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente erlaubt, aber keine anderen unsicheren Elemente.
Die ursprüngliche Zeichenfolge und das injizierte HTML werden protokolliert, sodass Sie die Ergebnisse in jedem Fall inspizieren können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, injizieren der folgende Code eine Zeichenfolge anstelle eines vertrauenswürdigen Typs.
> Sie sollten dies nicht in Produktionscode tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}} Elemente zum Injizieren des HTML ohne Sanitizer und mit einem benutzerdefinierten Sanitizer (entsprechend), eine weitere Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("div")}}, das die deklarative Shadow Root enthält.

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

Zuerst definieren wir den Handlers für den Neuladen-Button.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die Eingabezeichenfolge, die in die Shadow Root injiziert werden soll, die für alle Fälle gleich sein wird.
Dies enthält das {{htmlelement("script")}} Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Wir erhalten auch die Variable `shadow`, die unser Handle zur Shadow Root darstellt.

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

Als nächstes definieren wir den Klick-Handler für den Button, der die Shadow Root mit `setHTMLUnsafe()` setzt, ohne einen Sanitizer zu übergeben.
Da kein Sanitizer vorhanden ist, erwarten wir, dass das injizierte HTML der Eingabezeichenfolge entspricht.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur {{htmlelement("div")}}, {{htmlelement("p")}}, und {{htmlelement("script")}} Elemente erlaubt.

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

Klicken Sie auf die Schaltflächen "None" und "allowScript", um die Auswirkungen von keinem Sanitizer und einem benutzerdefinierten Sanitizer zu sehen.

Wenn Sie die Schaltfläche "None" anklicken, sollten Sie feststellen, dass die Eingabe und Ausgabe identisch sind, da kein Sanitizer angewendet wird.
Wenn Sie die Schaltfläche "allowScript" anklicken, ist das `<script>`-Element noch vorhanden, aber das `<button>`-Element wird entfernt.
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
