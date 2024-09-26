---
title: "CSP: require-trusted-types-for"
slug: Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`** {{experimental_inline}} Direktive weist Benutzeragenten an, die Daten zu kontrollieren, die an DOM XSS-Senkenfunktionen übergeben werden, wie den {{DOMxRef("Element.innerHTML")}} Setter.

Wird sie verwendet, akzeptieren diese Funktionen nur nicht fälschbare, getypte Werte, die durch Trusted-Type-Policies erstellt wurden, und lehnen Zeichenfolgen ab. Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types)** Direktive, die die Erstellung von Trusted-Type-Policies schützt, ermöglicht dies es den Autoren, Regeln zu definieren, die das Schreiben von Werten in den DOM überwachen und somit die Angriffsfläche für DOM XSS auf kleine, isolierte Teile des Webanwendungscodes reduzieren, was deren Überwachung und Code-Review erleichtert.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Verbietet die Verwendung von Zeichenfolgen mit DOM XSS-Injektionssenkenfunktionen und erfordert übereinstimmende Typen, die durch Trusted-Type-Policies erstellt wurden.

## Beispiele

```js
// Content-Security-Policy: require-trusted-types-for 'script'; trusted-types foo;

const attackerInput = '<svg onload="alert(/cross-site-scripting/)" />';
const el = document.createElement("div");

if (typeof trustedTypes !== "undefined") {
  // Erstellen Sie eine Policy, die TrustedHTML-Werte erstellen kann
  // nach der Bereinigung der Eingabezeichenfolgen mit der DOMPurify-Bibliothek.
  const sanitizer = trustedTypes.createPolicy("foo", {
    createHTML: (input) => DOMPurify.sanitize(input),
  });

  el.innerHTML = sanitizer.createHTML(attackerInput); // Setzt den bereinigten Wert in den DOM.
  el.innerHTML = attackerInput; // Lehnt einen Zeichenfolgenwert ab; wirft einen TypeError.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)
- [DOM XSS-Injektionssenken, die von Trusted Types abgedeckt werden](https://w3c.github.io/trusted-types/dist/spec/#injection-sinks)
- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit dem [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Desinfektionsmittel
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)