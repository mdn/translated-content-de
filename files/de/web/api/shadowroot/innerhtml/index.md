---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihren Eingabewert als HTML und schreibt das Ergebnis in das DOM.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`innerHTML`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle erhält oder setzt das HTML-Markup im DOM-Baum innerhalb des `ShadowRoot`.

## Wert

Der Zugriff auf die Eigenschaft liefert eine Zeichenfolge, die die HTML-Serialisierung der Nachfahren des Shadow-Roots enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge.
Dieser Wert wird als HTML analysiert und alle Nachfahren des Elements werden mit dem Ergebnis ersetzt.
Wenn der Wert `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenfolge (`""`) konvertiert, so dass `shadowRoot.innerHTML = null` gleichbedeutend mit `shadowRoot.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenfolge zu setzen, die kein korrektes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

`innerHTML` erhält eine Serialisierung der verschachtelten untergeordneten DOM-Elemente innerhalb des Shadow-Roots oder setzt HTML oder XML, das zum Ersetzen des DOM-Baums innerhalb des Shadow-Roots analysiert werden soll.

Beachten Sie, dass einige Browser die `<`- und `>`-Zeichen als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitslücke ([Mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindern, bei der ein Angreifer eine Eingabe erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgeht und einen Cross-Site-Scripting (XSS)-Angriff ermöglicht.

### Sicherheitsüberlegungen

Die `innerHTML`-Eigenschaft ist ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere Zeichenfolgen, die von einem Benutzer bereitgestellt werden, in das DOM eingefügt werden, ohne vorher gereinigt zu werden.
Obwohl die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente beim Einfügen ausgeführt werden, ist sie anfällig für viele andere Methoden, mit denen Angreifer HTML erstellen können, um bösartigen JavaScript-Code auszuführen.
Beispielsweise würde der folgende Code im `error`-Ereignishandler ausgeführt, da der {{htmlelement("img")}} `src`-Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
shadowRoot.innerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [sanisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Lesen der HTML-Inhalte eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten zur Serialisierung der Nachfahren des Shadow-Roots.

Angenommen, folgendes HTML liegt vor:

```html
<div class="host">
  <template shadowrootmode="open">
    <p>My name is Joe</p>
  </template>
</div>
```

Sie können das Markup für den Shadow-Root abrufen und protokollieren, wie folgt:

```js
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;
const contents = shadowRoot.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Setzen des innerHTML für einen Shadow-Root

In diesem Beispiel ersetzen wir ein Element-DOM, indem wir HTML der `innerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko eines XSS zu mindern, erstellen wir zunächst ein `TrustedHTML`-Objekt aus der Zeichenfolge, die das HTML enthält, und weisen dieses Objekt dann `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zunächst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode definiert, um eine Eingabezeichenfolge in `TrustedHTML`-Instanzen zu transformieren.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitisieren:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen und das Ergebnis dem Element zuzuweisen:

```js
// The potentially malicious string
const untrustedString = "<p>I might be XSS</p><img src='x' onerror='alert(1)'>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Get the shadow root
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;

// Inject the TrustedHTML (which contains a trusted string)
shadowRoot.innerHTML = trustedHTML;
```

> [!WARNING]
> Obwohl Sie direkt eine Zeichenfolge `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzusetzende Zeichenfolge potenziell bösartigen Inhalt enthalten könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
