---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** {{experimental_inline}} Direktive weist Benutzeragenten an, die Daten zu kontrollieren, die an DOM-XSS-Senkenfunktionen, wie den [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Setter, übergeben werden.

Bei Verwendung akzeptieren diese Funktionen nur unverfälschbare, typisierte Werte, die durch Trusted Type-Richtlinien erstellt wurden, und lehnen Zeichenketten ab. Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)** Direktive, die die Erstellung von Trusted Type-Richtlinien schützt, ermöglicht dies Autor*innen, Regeln zu definieren, die das Schreiben von Werten in das DOM absichern und somit die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Anwendungscodes reduzieren. Dies erleichtert ihre Überwachung und Codeüberprüfung.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Verbietet die Verwendung von Zeichenketten mit DOM-XSS-Injektion-Senkenfunktionen und verlangt passende Typen, die durch Trusted Type-Richtlinien erstellt wurden.

## Beispiele

```js
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const attackerInput = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement("div");

if (typeof trustedTypes !== "undefined") {
  // Create a policy that can create TrustedHTML values
  // after sanitizing the input strings with DOMPurify library.
  const sanitizer = trustedTypes.createPolicy("foo", {
    createHTML: (input) => DOMPurify.sanitize(input),
  });

  el.innerHTML = sanitizer.createHTML(attackerInput); // Puts the sanitized value into the DOM.
  el.innerHTML = attackerInput; // Rejects a string value; throws a TypeError.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)
- [DOM-XSS-Injektionssenken, die durch Trusted Types abgedeckt sind](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Filter
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
