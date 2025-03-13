---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)-Direktive **`require-trusted-types-for`** {{experimental_inline}} weist Benutzeragenten an, die Daten zu kontrollieren, die an DOM-XSS-Senkenfunktionen, wie dem [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)-Setter, übergeben werden.

Wenn verwendet, akzeptieren diese Funktionen nur nicht manipulierbare, typisierte Werte, die von Trusted Type-Policies erstellt wurden, und lehnen Zeichenketten ab. Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)**-Direktive, die die Erstellung von Trusted Type-Policies schützen, ermöglicht dies den Autoren, Regeln zu definieren, die das Schreiben von Werten in das DOM überwachen und so die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Webanwendungscodes reduzieren, wodurch deren Überwachung und Codeüberprüfung erleichtert wird.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Verhindert die Verwendung von Zeichenketten mit DOM-XSS-Injektionssenkenfunktionen und erfordert passende Typen, die von Trusted Type-Policies erstellt wurden.

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
- [DOM XSS-Injektionssenken, die von Trusted Types abgedeckt werden](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
