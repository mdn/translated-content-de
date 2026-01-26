---
title: "Content-Security-Policy: require-trusted-types-for Richtlinie"
short-title: require-trusted-types-for
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for
l10n:
  sourceCommit: ecd02ce48a6a6076e244396747a1d31eb4d9747a
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`require-trusted-types-for`**-Richtlinie weist Benutzeragenten an, die Daten zu kontrollieren, die an DOM XSS-Sink-Funktionen übergeben werden, wie den [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) Setter.

Wenn diese verwendet wird, akzeptieren diese Funktionen nur nicht manipulierbare, typisierte Werte, die durch [Trusted Type](/de/docs/Web/API/Trusted_Types_API) Richtlinien erstellt wurden, und lehnen Zeichenfolgen ab.
Zusammen mit der **[`trusted-types`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)**-Richtlinie, die die Erstellung von Trusted Type-Richtlinien überwacht, können Autoren Regeln definieren, die das Schreiben von Werten in das DOM schützen. Dadurch wird die Angriffsfläche für DOM XSS auf kleine, isolierte Teile der Codebasis einer Webanwendung reduziert, was deren Überwachung und Codeprüfung erleichtert.

## Syntax

```http
Content-Security-Policy: require-trusted-types-for 'script';
```

- `'script'`
  - : Verbietet die Verwendung von Zeichenfolgen mit DOM XSS-Injektions-Sink-Funktionen und erfordert passende Typen, die durch Trusted Type-Richtlinien erstellt wurden.

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
  - [`trusted-types` Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types)
  - [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
  - [Injection sink Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces)
- {{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}
