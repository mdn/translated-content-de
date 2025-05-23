---
title: "Content-Security-Policy: require-trusted-types-for Anweisung"
short-title: require-trusted-types-for
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** Anweisung weist Benutzeragenten an, die an DOM XSS-Senkenfunktionen, wie den [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Setter, übergebenen Daten zu kontrollieren.

Bei Verwendung akzeptieren diese Funktionen nur nicht manipulierbare, typisierte Werte, die durch Trusted Type-Policies erstellt wurden, und lehnen Zeichenfolgen ab. Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)** Anweisung, die die Erstellung von Trusted Type-Policies überwacht, ermöglicht dies den Autoren, Regeln zu definieren, die das Schreiben von Werten in den DOM kontrollieren. Dadurch wird die Angriffsfläche für DOM XSS auf kleine, isolierte Teile des Webanwendungscode reduziert, was deren Überwachung und Codeüberprüfung erleichtert.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Untersagt die Verwendung von Zeichenfolgen mit DOM XSS-Injektionssenkenfunktionen und erfordert übereinstimmende Typen, die durch Trusted Type-Policies erstellt wurden.

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
- [Durch Trusted Types abgedeckte DOM XSS-Injektionssenken](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Vermeidung von DOM-basierter Cross-Site-Scripting-Anfälligkeit mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit dem [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
