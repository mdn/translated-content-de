---
title: "ShadowRoot: Methode setHTMLUnsafe()"
short-title: setHTMLUnsafe()
slug: Web/API/ShadowRoot/setHTMLUnsafe
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese gelten als [Injektionssenken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können ein Angriffsweg für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie immer `TrustedHTML`-Objekte statt Zeichenfolgen übergeben und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

> [!NOTE]
> Sofern vom Browser unterstützt, sollte fast immer [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) statt dieser Methode verwendet werden, da sie stets XSS-unsichere HTML-Elemente und -Attribute entfernt.

Die Methode **`setHTMLUnsafe()`** der Schnittstelle [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) kann HTML-Eingaben in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) parsen, dabei optional unerwünschte Elemente und Attribute herausfiltern und anschließend den bestehenden Baum im Shadow DOM durch das Ergebnis ersetzen.

## Syntax

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder eine Zeichenfolge mit dem zu parsenden HTML.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit dem folgenden optionalen Parameter:
    - `sanitizer` {{optional_inline}}
      - : Ein [`Sanitizer`](/de/docs/Web/API/Sanitizer)- oder [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekt, das festlegt, welche Elemente der Eingabe zugelassen oder entfernt werden.
        Alternativ kann dies eine Zeichenfolge mit dem Wert `"default"` sein. Dadurch wird ein `Sanitizer` mit der (XSS-sicheren) [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) angewendet.
        Wenn der Parameter nicht angegeben wird, wird kein Sanitizer verwendet.

        Wenn Sie dieselbe Konfiguration mehrfach verwenden, ist es voraussichtlich effizienter, einen `Sanitizer` zu verwenden und ihn bei Bedarf anzupassen.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in folgenden Fällen ausgelöst:
    - Für `input` wird eine Zeichenfolge übergeben, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    - Für `options.sanitizer` wird Folgendes übergeben:
      - Eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig), die nicht [gültig](/de/docs/Web/API/SanitizerConfig#valid_configuration) ist.
        Ein Beispiel ist eine Konfiguration, die sowohl Einstellungen für zugelassene als auch für entfernte Elemente enthält.
      - Eine Zeichenfolge mit einem anderen Wert als `"default"`.
      - Ein Wert, der weder ein [`Sanitizer`](/de/docs/Web/API/Sanitizer) noch eine [`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig) oder eine Zeichenfolge ist.

## Beschreibung

Die Methode **`setHTMLUnsafe()`** kann eine HTML-Zeichenfolge parsen, dabei optional unerwünschte Elemente und Attribute herausfiltern und anschließend das bestehende Shadow DOM durch das Ergebnis ersetzen.

Anders als bei [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) werden [deklarative Shadow Roots](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) in der Eingabe in das DOM geparst.
Wenn die HTML-Zeichenfolge für einen bestimmten Shadow-Host mehr als einen [deklarativen Shadow Root](/de/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom) definiert, wird nur der erste [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) erstellt. Nachfolgende Deklarationen werden als `<template>`-Elemente innerhalb dieses Shadow Roots geparst.

`setHTMLUnsafe()` führt standardmäßig keine Bereinigung durch.
Wenn kein Sanitizer als Parameter übergeben wird, werden sämtliche HTML-Elemente und -Attribute der Eingabe eingefügt.

### Sicherheitsaspekte

Der Namenszusatz „Unsafe“ weist darauf hin, dass die Methode – anders als [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) – nicht die Entfernung aller XSS-unsicheren HTML-Elemente und -Attribute erzwingt.
Mit einem geeigneten Sanitizer kann sie diese zwar entfernen, sie muss aber weder einen wirksamen Sanitizer noch überhaupt einen Sanitizer verwenden.
Die Methode kann daher ein Angriffsweg für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn potenziell unsichere Zeichenfolgen von Benutzern ohne vorherige Bereinigung in das DOM eingefügt werden.

Sie sollten dieses Risiko verringern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen übergeben und [Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) durchsetzen.
So wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die sie vor dem Einfügen [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) und potenziell gefährliches Markup entfernen kann, etwa {{htmlelement("script")}}-Elemente und Event-Handler-Attribute.

Durch die Verwendung von `TrustedHTML` können Sie an wenigen Stellen prüfen, ob der Bereinigungscode wirksam ist, statt dies bei allen Injektionssenken einzeln tun zu müssen.
Wenn Sie `TrustedHTML` verwenden, sollten Sie der Methode keinen Sanitizer übergeben müssen.

Falls Sie aus irgendeinem Grund weder `TrustedHTML` noch – die bessere Wahl – `setHTML()` verwenden können, ist die nächstsicherste Option, `setHTMLUnsafe()` mit der XSS-sicheren [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) zu verwenden.

### Wann sollte `setHTMLUnsafe()` verwendet werden?

Wenn [`ShadowRoot.setHTML()`](/de/docs/Web/API/ShadowRoot/setHTML) verfügbar ist, sollte `setHTMLUnsafe()` fast nie verwendet werden: Es gibt kaum Fälle, in denen von Benutzern bereitgestellte HTML-Eingaben XSS-unsichere Elemente enthalten müssen.
`setHTML()` ist nicht nur sicher, sondern erspart Ihnen auch die Auseinandersetzung mit Trusted Types.

Die Verwendung von `setHTMLUnsafe()` kann sinnvoll sein, wenn:

- Sie weder `setHTML()` noch Trusted Types verwenden können und die Eingabe möglichst sicher filtern möchten.
  In diesem Fall können Sie `setHTMLUnsafe()` mit der [Standard-Sanitizer-Konfiguration](/de/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) verwenden, um XSS-unsichere und andere problematische Elemente herauszufiltern.
- Sie `setHTML()` nicht verwenden können und die Eingabe deklarative Shadow Roots enthalten könnte, sodass auch [`ShadowRoot.innerHTML`](/de/docs/Web/API/ShadowRoot/innerHTML) nicht infrage kommt.
- Sie in einem Sonderfall HTML-Eingaben zulassen müssen, die eine bekannte Gruppe unsicherer HTML-Elemente und -Attribute enthalten.

  `setHTML()` können Sie in diesem Fall nicht verwenden, da es alle unsicheren Elemente und Attribute entfernt.
  Sie könnten `setHTMLUnsafe()` ohne Sanitizer oder `innerHTML` verwenden, würden damit aber alle unsicheren Elemente und Attribute zulassen.

  Besser ist es, `setHTMLUnsafe()` mit einem Sanitizer aufzurufen, der nur die tatsächlich benötigten gefährlichen Elemente und Attribute zulässt.
  Das bleibt zwar unsicher, ist aber sicherer, als alle zuzulassen.

Betrachten Sie für den letzten Fall eine Situation, in der Ihr Code auf die Verwendung unsicherer `onclick`-Handler angewiesen ist.
Der folgende Code zeigt, wie sich die verschiedenen Methoden und Sanitizer in diesem Fall auswirken.

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

Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der HTML-Zeichenfolge ein `TrustedHTML`-Objekt und übergeben dieses dann an `setHTMLUnsafe()`.
Da Trusted Types noch nicht von allen Browsern unterstützt werden, definieren wir den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
Implementierungen von `createHTML()` verwenden häufig eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus der potenziell unsicheren Eingabezeichenfolge ein `TrustedHTML`-Objekt zu erstellen:

```js
// The potentially malicious string
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);
```

Nachdem wir `trustedHTML` erstellt haben, zeigt der folgende Code, wie Sie es mit `setHTMLUnsafe()` verwenden können.
Zunächst erstellen wir den [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), den wir bearbeiten möchten.
Er könnte programmgesteuert mit [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow) erstellt werden; für dieses Beispiel erstellen wir ihn jedoch deklarativ.

```html
<div id="host">
  <template shadowrootmode="open">
    <span>A span element in the shadow DOM</span>
  </template>
</div>
```

Dann greifen wir über das Element `#host` auf den Shadow Root zu und rufen `setHTMLUnsafe()` auf.
Die Eingabe hat die Transformationsfunktion bereits durchlaufen, daher übergeben wir der Methode keinen Sanitizer.

```js
const shadow = document.querySelector("#host").shadowRoot;
// setHTMLUnsafe() with no sanitizer (no filtering)
shadow.setHTMLUnsafe(trustedHTML);
```

### setHTMLUnsafe() ohne Trusted Types verwenden

Dieses Beispiel zeigt den Fall, dass wir keine Trusted Types verwenden und daher Sanitizer-Argumente übergeben.

Der Code erstellt zunächst eine nicht vertrauenswürdige Zeichenfolge und zeigt verschiedene Möglichkeiten, der Methode einen Sanitizer zu übergeben.

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

### Interaktives Beispiel für `setHTMLUnsafe()`

Dieses Beispiel zeigt eine interaktive Demonstration der Methode mit verschiedenen Sanitizern.
Der Code definiert Schaltflächen, mit denen Sie eine HTML-Zeichenfolge einfügen können.
Eine Schaltfläche fügt das HTML ohne jegliche Bereinigung ein. Die zweite verwendet einen benutzerdefinierten Sanitizer, der `<script>`-Elemente zulässt, andere unsichere Bestandteile jedoch nicht.
Die ursprüngliche Zeichenfolge und das eingefügte HTML werden protokolliert, damit Sie die Ergebnisse in beiden Fällen prüfen können.

> [!NOTE]
> Da wir zeigen möchten, wie das Sanitizer-Argument verwendet wird, fügt der folgende Code eine Zeichenfolge statt eines Trusted Type ein.
> In Produktionscode sollten Sie dies nicht tun.

#### HTML

Das HTML definiert zwei {{htmlelement("button")}}-Elemente, um das HTML ohne Sanitizer beziehungsweise mit einem benutzerdefinierten Sanitizer einzufügen, eine weitere Schaltfläche zum Zurücksetzen des Beispiels sowie ein {{htmlelement("div")}}, das den deklarativen Shadow Root enthält.

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

Zunächst definieren wir den Handler für die Schaltfläche zum Neuladen.

```js
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

Dann definieren wir die Eingabezeichenfolge, die in den Shadow Root eingefügt werden soll und in allen Fällen gleich ist.
Sie enthält das {{htmlelement("script")}}-Element und den `onclick`-Handler, die beide als XSS-unsicher gelten.
Außerdem holen wir die Variable `shadow`, über die wir auf den Shadow Root zugreifen.

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

Als Nächstes definieren wir den Klick-Handler für die Schaltfläche, die den Shadow Root mit `setHTMLUnsafe()` setzt, ohne einen Sanitizer zu übergeben.
Da kein Sanitizer verwendet wird, erwarten wir, dass das eingefügte HTML mit der Eingabezeichenfolge übereinstimmt.

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

Der nächste Klick-Handler setzt das Ziel-HTML mit einem benutzerdefinierten Sanitizer, der nur die Elemente {{htmlelement("div")}}, {{htmlelement("p")}} und {{htmlelement("script")}} zulässt.

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

Klicken Sie auf die Schaltflächen „None“ und „allowScript“, um zu sehen, wie sich das Fehlen eines Sanitizers beziehungsweise ein benutzerdefinierter Sanitizer auswirkt.

Wenn Sie auf „None“ klicken, sollten Eingabe und Ausgabe übereinstimmen, da kein Sanitizer angewendet wird.
Wenn Sie auf „allowScript“ klicken, bleibt das `<script>`-Element erhalten, das `<button>`-Element wird jedoch entfernt.
Mit diesem Ansatz können Sie sicheres HTML erzeugen, sind dazu aber nicht gezwungen.

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
