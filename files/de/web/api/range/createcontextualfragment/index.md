---
title: "Range: createContextualFragment() Methode"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: c72602cbd5a2000cc0df3f24dcd581793f304a44
---

{{ApiRef("DOM")}}

> [!WARNING]
> Diese Methode analysiert ihre Eingabe als HTML oder XML und schreibt das Ergebnis in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das anschließend in das DOM eingefügt werden könnte.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein, wenn die Eingabe ursprünglich von einem Angreifer stammt.
>
> Sie können das Risiko verringern, indem Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) verwenden.
> Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion verarbeitet wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup wie {{htmlelement("script")}} Elemente und Ereignishandlerattribute zu entfernen.

Die **`Range.createContextualFragment()`** Methode der [`Range`](/de/docs/Web/API/Range) Schnittstelle gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die geparste Eingabe als HTML oder XML darstellt.

## Syntax

```js-nolint
createContextualFragment(input)
```

### Parameter

- `input`
  - : Eine Instanz von [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) oder ein String, der den Text und die Tags repräsentiert, die in ein Dokumentfragment umgewandelt werden sollen.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Objekt.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft auf einen String gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die **`Range.createContextualFragment()`** Methode gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, indem der HTML-Fragment-Parsing-Algorithmus oder der XML-Fragment-Parsing-Algorithmus mit dem Beginn des Bereichs (dem _Elternteil_ des ausgewählten Knotens) als Kontextknoten aufgerufen wird.

Der HTML-Fragment-Parsing-Algorithmus wird verwendet, wenn der Bereich zu einem `Document` gehört, dessen HTML-Bit gesetzt ist.
Im HTML-Fall, wenn der Kontextknoten `html` wäre, wird aus historischen Gründen der Fragment-Parsing-Algorithmus mit `body` als Kontext aufgerufen.

### Sicherheitsüberlegungen

Die Methode führt keine Bereinigung der Eingabe durch, um XSS-unsichere Elemente wie {{htmlelement("script")}} oder Inhaltseigenschaften von Ereignishandlern zu entfernen.
Wenn die Eingabe von einem Benutzer bereitgestellt wird und das zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) anschließend in das DOM eingefügt wird, kann diese Methode daher ein Vektor für [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.

Zum Beispiel würde der folgende Code den potenziell gefährlichen vom Benutzer bereitgestellten String in das DOM einfügen.

```js example-bad
const untrustedCode = "<script>alert('Potentially evil code!');</script>";

const range = document.createRange();
// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(untrustedCode);
document.body.appendChild(documentFragment);
```

Wenn Sie HTML mit `createContextualFragment()` in eine Seite einfügen, sollten Sie [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte anstelle von Strings übergeben und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion verarbeitet wird, die die Möglichkeit hat, die Eingabe zu [sanitisieren](/de/docs/Web/Security/Attacks/XSS#sanitization), um potenziell gefährliches Markup zu entfernen, bevor es eingefügt wird.

## Beispiele

### Verwendung von `createContextualFragment()` mit `TrustedHTML`

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zunächst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die JavaScript-API der Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes definieren wir eine Richtlinie namens `some-content-policy`, um [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekte aus der Eingabe zu erstellen (wir sollten die `some-content-policy` auch mit CSP erzwingen).
Der Code implementiert eine No-Op-Richtlinie, um zu ermöglichen, dass dieses Beispiel ohne Drittanbieter-Abhängigkeit funktioniert.
Ihr eigener Anwendungscode sollte eine Drittanbieter-Bibliothek wie die "DOMPurify" Bibliothek verwenden, um bereinigte Inhalte aus der nicht vertrauenswürdigen Eingabe zurückzugeben.

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

Wir können dann ein `DocumentFragment` mit unserer vertrauenswürdigen Version des ursprünglichen Textes erstellen und es sicher an das Dokument anhängen:

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

- [Die DOM-Schnittstellen-Index](/de/docs/Web/API/Document_Object_Model)
