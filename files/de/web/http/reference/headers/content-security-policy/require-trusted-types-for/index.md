---
title: "Content-Security-Policy: require-trusted-types-for Richtlinie"
short-title: require-trusted-types-for
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** Richtlinie weist Benutzeragenten an, die Daten, die an DOM XSS-Senkenfunktionen übergeben werden, zu kontrollieren, wie zum Beispiel den [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Setter.

Wenn verwendet, akzeptieren diese Funktionen nur nicht manipulierbare, getypte Werte, die durch Trusted Type-Policies erstellt wurden, und lehnen Zeichenfolgen ab. Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)** Richtlinie, die die Erstellung von Trusted Type-Policies schützt, ermöglicht dies Autoren, Regeln zu definieren, die das Schreiben von Werten in den DOM bewachen und somit die Angriffsfläche von DOM XSS auf kleine, isolierte Teile des Webanwendungs-Codebase reduzieren. Dies erleichtert deren Überwachung und Code-Review.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Verbietet die Verwendung von Zeichenfolgen mit DOM XSS-Injektionssenkenfunktionen und erfordert übereinstimmende Typen, die durch Trusted Type-Policies erstellt wurden.

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
- [Von Trusted Types abgedeckte DOM XSS-Injektionssenken](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Verhindern von DOM-basierten Cross-Site Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Filter
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
