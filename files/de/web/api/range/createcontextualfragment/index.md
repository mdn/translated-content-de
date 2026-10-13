---
title: "Range: Methode createContextualFragment()"
short-title: createContextualFragment()
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{ApiRef("DOM")}}

> [!WARNING]
> Diese Methode parst ihre Eingabe als HTML oder XML und schreibt das Ergebnis in ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment), das anschließend möglicherweise in das DOM eingefügt wird.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet. Wenn die Eingabe ursprünglich von einem Angreifer stammt, können sie als Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) dienen.
>
> Sie können das Risiko verringern, indem Sie statt Strings [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte übergeben und [Trusted Types mithilfe der CSP-Direktive erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
> Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die [potenziell gefährliches Markup bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann, etwa {{htmlelement("script")}}-Elemente und Event-Handler-Attribute.

Die Methode **`Range.createContextualFragment()`** der [`Range`](/de/docs/Web/API/Range)-Schnittstelle gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die geparste HTML- oder XML-Eingabe enthält.

## Syntax

```js-nolint
createContextualFragment(input)
```

### Parameter

- `input`
  - : Eine [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder ein String mit dem Text und den Tags, die in ein Dokumentfragment umgewandelt werden sollen.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn als Wert ein String übergeben wird, obwohl [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.

## Beschreibung

Die Methode **`Range.createContextualFragment()`** gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück. Dazu ruft sie den Algorithmus zum Parsen von HTML-Fragmenten oder XML-Fragmenten auf und verwendet den Anfang des Bereichs (das _Elternelement_ des ausgewählten Knotens) als Kontextknoten.

Der Algorithmus zum Parsen von HTML-Fragmenten wird verwendet, wenn der Bereich zu einem `Document` gehört, dessen HTMLness-Bit gesetzt ist.
Falls der Kontextknoten bei HTML `html` wäre, wird der Algorithmus zum Parsen von Fragmenten aus historischen Gründen stattdessen mit `body` als Kontext aufgerufen.

### Sicherheitshinweise

Die Methode bereinigt die Eingabe nicht um Elemente wie {{htmlelement("script")}} oder Event-Handler-Content-Attribute, die für XSS-Angriffe genutzt werden können.
Wenn die Eingabe von einem Benutzer stammt und das zurückgegebene [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) anschließend in das DOM eingefügt wird, kann diese Methode als Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) dienen.

Der folgende Code würde beispielsweise einen vom Benutzer bereitgestellten, potenziell gefährlichen String in das DOM einfügen.

```js example-bad
const untrustedCode = "<script>alert('Potentially evil code!');</script>";

const range = document.createRange();
// Make the parent of the first div in the document become the context node
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(untrustedCode);
document.body.appendChild(documentFragment);
```

Wenn Sie mit `createContextualFragment()` HTML in eine Seite einfügen, sollten Sie statt Strings [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte übergeben und [Trusted Types mithilfe der CSP-Direktive erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die potenziell gefährliches Markup [bereinigen](/de/docs/Web/Security/Attacks/XSS#sanitization) kann, bevor es eingefügt wird.

## Beispiele

### `createContextualFragment()` mit `TrustedHTML` verwenden

Trusted Types werden noch nicht von allen Browsern unterstützt. Daher definieren wir zunächst den [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser dient als transparenter Ersatz für die Trusted Types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes definieren wir eine Richtlinie namens `some-content-policy`, um aus der Eingabe [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekte zu erstellen (wir sollten `some-content-policy` außerdem mithilfe einer CSP erzwingen).
Der Code implementiert eine Richtlinie, die keine Änderungen vornimmt, damit dieses Beispiel ohne Drittanbieter-Abhängigkeit funktioniert.
In Ihrem eigenen Anwendungscode sollten Sie eine Drittanbieter-Bibliothek wie „DOMPurify“ verwenden, um aus der nicht vertrauenswürdigen Eingabe bereinigte Inhalte zurückzugeben.

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

Anschließend können wir mit der vertrauenswürdigen Version des ursprünglichen Textes ein `DocumentFragment` erstellen und es sicher an das Dokument anhängen:

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

- [Verzeichnis der DOM-Schnittstellen](/de/docs/Web/API/Document_Object_Model)
