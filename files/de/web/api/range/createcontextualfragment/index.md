---
title: "Range: createContextualFragment() Methode"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: a287c9eea38e92fe1694f4272fd4969a46b01c5d
---

{{ApiRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML oder XML und schreibt das Ergebnis in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das anschließend in das DOM injiziert werden könnte.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell eine Angriffsstelle für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup wie {{htmlelement("script")}} Elemente und Event-Handler-Attribute zu entfernen.

Die **`Range.createContextualFragment()`** Methode der [`Range`](/de/docs/Web/API/Range) Schnittstelle gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die analysierte Eingabe als HTML oder XML darstellt.

## Syntax

```js-nolint
createContextualFragment(input)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Instanz oder Zeichenfolge, die den Text und die Tags darstellt, die in ein Dokumentfragment umgewandelt werden sollen.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Objekt.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`Range.createContextualFragment()`** Methode gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, indem der HTML-Fragment-Parsing-Algorithmus oder der XML-Fragment-Parsing-Algorithmus mit dem Start des Bereichs (dem _Elternelement_ des ausgewählten Knotens) als Kontextknoten aufgerufen wird.

Der HTML-Fragment-Parsing-Algorithmus wird verwendet, wenn der Bereich zu einem `Document` gehört, dessen HTMLbit gesetzt ist.
Im HTML-Fall, wenn der Kontextknoten `html` wäre, wird aus historischen Gründen der Fragment-Parsing-Algorithmus mit `body` als Kontext aufgerufen.

### Sicherheitsüberlegungen

Die Methode führt keine Sanitizierung der Eingabe durch, um XSS-unsichere Elemente wie {{htmlelement("script")}}, oder Event-Handler-Inhaltsattribute zu entfernen.
Wenn die Eingabe von einem Benutzer bereitgestellt wird, und das zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) anschließend in das DOM eingefügt wird, kann diese Methode eine Angriffsstelle für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe werden.

Zum Beispiel würde der folgende Code die potenziell gefährliche benutzerbereitgestellte Zeichenfolge in das DOM einfügen.

```js example-bad
const untrustedCode = "<script>alert('Potentially evil code!');</script>";

const range = document.createRange();
// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(untrustedCode);
document.body.appendChild(documentFragment);
```

Beim Einfügen von HTML in eine Seite mit `createContextualFragment()` sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Zeichenfolgen verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die Eingabe zu [sanitizen](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Verwendung von `createContextualFragment()` mit `TrustedHTML`

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes definieren wir eine Richtlinie namens `some-content-policy`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus der Eingabe zu erstellen (wir sollten auch die `some-content-policy` mit CSP durchsetzen).
Der Code implementiert eine No-Op-Richtlinie, um dieses Beispiel ohne Drittanbieterabhängigkeiten funktionsfähig zu machen.
Ihr eigener Anwendungscode sollte eine Drittanbieterbibliothek wie die "DOMPurify"-Bibliothek verwenden, um gereinigten Inhalt aus der unzuverlässigen Eingabe zurückzugeben.

```js
const policy = trustedTypes.createPolicy("some-content-policy", {
  createHTML(input) {
    return input; // Do not do this in your own code!
    // Instead do something like:
    // return DOMPurify.sanitize(input);
  },
});

const unsafeText = "<script>alert('Potentially evil code!');</script>";
const trustedHTML = policy.createHTML(unsafeText);
```

Wir können dann ein `DocumentFragment` mithilfe unserer vertrauenswürdigen Version des Originaltexts erstellen und es sicher an das Dokument anhängen:

```js
const range = document.createRange();

// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(trustedHTML);
document.body.appendChild(documentFragment);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Verzeichnis](/de/docs/Web/API/Document_Object_Model)
