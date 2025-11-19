---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: f12ba417c1e9eda30d1c4f3984f67bea78e4f1aa
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Eigenschaft parst ihre Eingabe als HTML und schreibt das Ergebnis in den DOM.
> APIs wie diese sind als [injection sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen zuweisen und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`innerHTML`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces liest oder setzt das HTML-Markup im DOM-Baum innerhalb des `ShadowRoot`.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenkette zurück, die die HTML-Serialisierung der Nachkommen des Shadow-Roots enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenkette.
Es parst diesen Wert als HTML und ersetzt alle Nachkommen des Elements mit dem Ergebnis.
Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in die leere Zeichenkette (`""`) umgewandelt, sodass `shadowRoot.innerHTML = null` gleichbedeutend mit `shadowRoot.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einer Zeichenkette zu setzen, die nicht ordnungsgemäß formatiertes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenkette gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

`innerHTML` liest eine Serialisierung der verschachtelten Kind-DOM-Elemente innerhalb des Shadow-Roots oder setzt HTML oder XML, das geparst werden soll, um den DOM-Baum innerhalb des Shadow-Roots zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten erscheinen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies dient dazu, eine potenzielle Sicherheitslücke ([mutation XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) zu verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und so einen Cross-Site-Scripting (XSS)-Angriff ermöglichen.

### Sicherheitsüberlegungen

Die `innerHTML`-Eigenschaft ist ein potentieller Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, bei denen potenziell unsichere vom Benutzer bereitgestellte Zeichenfolgen in den DOM injiziert werden, ohne vorher gesäubert zu werden.
Während die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente ausgeführt werden, wenn sie injiziert werden, ist sie anfällig für viele andere Wege, wie Angreifer HTML erstellen können, um bösartigen JavaScript auszuführen.
Zum Beispiel würde das folgende Beispiel den Code im `error`-Ereignishandler ausführen, weil der {{htmlelement("img")}} `src`-Wert keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
shadowRoot.innerHTML = name; // shows the alert
```

Sie können diese Probleme mildern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Zeichenfolgen zuweisen und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Gelegenheit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

## Beispiele

### Lesen des HTML-Inhalts eines Elements

Das Lesen von `innerHTML` veranlasst den Benutzeragenten zur Serialisierung der Nachkommen des Shadow-Roots.

Angenommen, das folgende HTML:

```html
<div class="host">
  <template shadowrootmode="open">
    <p>My name is Joe</p>
  </template>
</div>
```

Sie können das Markup des Shadow-Roots abrufen und protokollieren wie folgt:

```js
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;
const contents = shadowRoot.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Setzen von `innerHTML` eines Shadow-Roots

In diesem Beispiel werden wir den DOM eines Elements ersetzen, indem wir HTML in die `innerHTML`-Eigenschaft des Elements zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zunächst ein `TrustedHTML`-Objekt aus der Zeichenkette, die das HTML enthält, und weisen dieses Objekt dann `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode definiert, um eine Eingabezeichenkette in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Häufig verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu reinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der potenziell unsicheren Eingabezeichenkette zu erstellen und das Ergebnis dem Element zuzuweisen:

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
> Während Sie direkt eine Zeichenkette `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzufügende Zeichenkette potenziell schädlichen Inhalt enthalten könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
