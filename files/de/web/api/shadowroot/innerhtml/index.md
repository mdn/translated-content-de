---
title: "ShadowRoot: innerHTML-Eigenschaft"
short-title: innerHTML
slug: Web/API/ShadowRoot/innerHTML
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("Shadow DOM")}}

> [!WARNING]
> Diese Eigenschaft parst ihre Eingabe als HTML und schreibt das Ergebnis in das DOM.
> APIs wie diese werden als [Injektionssenken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können ein potenzieller Vektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`innerHTML`**-Eigenschaft der [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Schnittstelle ruft das HTML-Markup für den DOM-Baum innerhalb des `ShadowRoot` ab oder legt es fest.

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung der Nachfolger des Shadow Root enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String.
Dieser Wert wird als HTML geparst, und alle Nachfolger des Elements werden durch das Ergebnis ersetzt.
Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `shadowRoot.innerHTML = null` gleichbedeutend mit `shadowRoot.innerHTML = ""` ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wurde, den Wert von `innerHTML` mit einem String festzulegen, der kein korrekt formatiertes HTML ist.
- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

`innerHTML` ruft eine Serialisierung der verschachtelten DOM-Kindelemente innerhalb des Shadow Root ab oder legt HTML oder XML fest, das geparst werden soll, um den DOM-Baum innerhalb des Shadow Root zu ersetzen.

Beachten Sie, dass einige Browser die Zeichen `<` und `>` als `&lt;` und `&gt;` serialisieren, wenn sie in Attributwerten vorkommen (siehe [Browser-Kompatibilität](#browser-kompatibilität)).
Dies soll eine potenzielle Sicherheitslücke ([Mutation XSS](https://securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)) verhindern, bei der ein Angreifer Eingaben erstellen kann, die eine [Sanitisierungsfunktion](/de/docs/Web/Security/Attacks/XSS#sanitization) umgehen und dadurch einen Cross-Site-Scripting-Angriff (XSS) ermöglichen.

### Sicherheitsaspekte

Die `innerHTML`-Eigenschaft ist ein möglicher Vektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS), bei denen potenziell unsichere, von einem Benutzer bereitgestellte Strings ohne vorherige Sanitisierung in das DOM eingefügt werden.
Obwohl die Eigenschaft verhindert, dass {{HTMLElement("script")}}-Elemente bei ihrer Injektion ausgeführt werden, ist sie anfällig für viele andere Möglichkeiten, wie Angreifer HTML erstellen können, um schädliches JavaScript auszuführen.
Das folgende Beispiel würde beispielsweise den Code im `error`-Event-Handler ausführen, weil der `src`-Wert des {{htmlelement("img")}} keine gültige Bild-URL ist:

```js
const name = "<img src='x' onerror='alert(1)'>";
shadowRoot.innerHTML = name; // shows the alert
```

Sie können diese Probleme mindern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und Trusted Types mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Eingabe [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization) kann, um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Den HTML-Inhalt eines Elements lesen

Das Lesen von `innerHTML` veranlasst den User Agent, die Nachfolger des Shadow Root zu serialisieren.

Bei folgendem HTML:

```html
<div class="host">
  <template shadowrootmode="open">
    <p>My name is Joe</p>
  </template>
</div>
```

Können Sie das Markup für den Shadow Root wie folgt abrufen und protokollieren:

```js
const shadowHost = document.querySelector("#host");
const shadowRoot = shadowHost.shadowRoot;
const contents = shadowRoot.innerHTML;
console.log(contents); // "\n  <p>My name is Joe</p>\n"
```

### Das innerHTML eines Shadow Root festlegen

In diesem Beispiel ersetzen wir das DOM eines Elements, indem wir HTML der `innerHTML`-Eigenschaft des Elements zuweisen.
Um das XSS-Risiko zu mindern, erstellen wir zunächst aus dem String, der das HTML enthält, ein `TrustedHTML`-Objekt und weisen dieses Objekt dann `innerHTML` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser fungiert als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode zum Transformieren eines Eingabe-Strings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
Üblicherweise verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe wie unten gezeigt zu sanitisieren:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus dem potenziell unsicheren Eingabe-String ein `TrustedHTML`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

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
> Obwohl Sie einen String direkt `innerHTML` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsaspekte) dar, wenn der einzufügende String potenziell schädliche Inhalte enthalten könnte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
