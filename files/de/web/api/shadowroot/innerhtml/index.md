---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Eigenschaft parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie stets `TrustedHTML`-Objekte statt Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`innerHTML`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle liest oder setzt das HTML-Markup des DOM-Baums innerhalb des `ShadowRoot`.

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge zurückgegeben, die die HTML-Serialisierung der Nachfahren des Shadow Roots enthält.

Beim Setzen akzeptiert die Eigenschaft entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge.
Sie parst diesen Wert als HTML und ersetzt alle Nachfahren des Elements durch das Ergebnis.
Wird die Eigenschaft auf den Wert `null` gesetzt, wird dieser in eine leere Zeichenfolge (`""`) umgewandelt. Daher ist `shadowRoot.innerHTML = null` gleichbedeutend mit `shadowRoot.innerHTML = ""`.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, `innerHTML` auf eine Zeichenfolge zu setzen, die kein wohlgeformtes HTML ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standard-Policy definiert ist.

## Beschreibung

`innerHTML` liefert eine Serialisierung der verschachtelten DOM-Kindelemente innerhalb des Shadow Roots oder setzt HTML beziehungsweise XML, das geparst werden soll, um den DOM-Baum innerhalb des Shadow Roots zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine mögliche Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindern, bei der ein Angreifer eine Eingabe erstellen kann, die eine [Bereinigungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgeht und so einen Cross-Site-Scripting-Angriff (XSS) ermöglicht.

### Sicherheitsaspekte

Die Eigenschaft `innerHTML` ist ein möglicher Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS), wenn potenziell unsichere, von Benutzern bereitgestellte Zeichenfolgen ohne vorherige Bereinigung in das DOM eingefügt werden.
Die Eigenschaft verhindert zwar, dass eingefügte {{HTMLElement("script")}}-Elemente ausgeführt werden, doch Angreifer können auf viele andere Arten HTML erstellen, das schädliches JavaScript ausführt.
Im folgenden Beispiel würde etwa der Code im `error`-Event-Handler ausgeführt, weil der `src`-Wert des {{htmlelement("img")}}-Elements keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
shadowRoot.innerHTML = name; // shows the alert
```

Sie können diese Risiken verringern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) erzwingen.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die potenziell gefährliches Markup vor dem Einfügen [entfernen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann.

## Beispiele

### HTML-Inhalt eines Elements lesen

Beim Lesen von `innerHTML` serialisiert der User Agent die Nachfahren des Shadow Roots.

Gegeben sei folgendes HTML:

```html
<div class="host">
  <template shadowrootmode="open">
    <p>My name is Joe</p>
  </template>
</div>
```

So können Sie das Markup des Shadow Roots abrufen und protokollieren:

```js
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;
const contents = shadowRoot.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### innerHTML eines Shadow Roots setzen

In diesem Beispiel ersetzen wir den DOM-Baum eines Elements, indem wir seiner Eigenschaft `innerHTML` HTML zuweisen.
Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der Zeichenfolge mit dem HTML ein `TrustedHTML`-Objekt und weisen dieses anschließend `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Es dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
Implementierungen von `createHTML()` verwenden häufig eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu bereinigen:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus der potenziell unsicheren Eingabezeichenfolge ein `TrustedHTML`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

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
> Sie können `innerHTML` zwar direkt eine Zeichenfolge zuweisen, doch dies stellt ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn die einzufügende Zeichenfolge potenziell schädliche Inhalte enthalten könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
