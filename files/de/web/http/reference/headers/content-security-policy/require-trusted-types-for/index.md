---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: 28da811a08240c53da000bfdd8319338290e3f0b
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** weist Benutzeragenten an, die Daten zu kontrollieren, die an DOM-XSS-Sink-Funktionen wie den [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Setter übergeben werden.

Bei Verwendung akzeptieren diese Funktionen nur nicht manipulierbare, getypte Werte, die durch Trusted Type-Richtlinien erstellt wurden, und lehnen Zeichenfolgen ab. Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)**-Direktive, die die Erstellung von Trusted Type-Richtlinien überwacht, ermöglicht dies Autoren, Regeln für die Kontrolle der Werteschreibung in das DOM festzulegen. Dadurch wird die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Webanwendungscodes reduziert, was deren Überwachung und Codeüberprüfung erleichtert.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Verhindert die Verwendung von Zeichenfolgen mit DOM-XSS-Injektions-Sink-Funktionen und erfordert übereinstimmende Typen, die durch Trusted Type-Richtlinien erstellt wurden.

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
- {{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}
- [Durch Trusted Types abgedeckte DOM-XSS-Injektions-Sinks](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit dem [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
