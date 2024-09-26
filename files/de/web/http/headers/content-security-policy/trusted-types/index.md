---
title: "CSP: trusted-types"
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} Direktive weist Benutzeragenten an, die Erstellung von Trusted Types-Richtlinien einzuschränken - Funktionen, die nicht fälschbare, typisierte Werte erstellen, die an DOM-XSS-Senken anstelle von Zeichenfolgen übergeben werden sollen.

Zusammen mit der **[`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)** Direktive ermöglicht dies Autoren, Regeln festzulegen, die das Schreiben von Werten in das DOM überwachen und so die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Webanwendungscodes reduzieren, was deren Überwachung und Codeüberprüfung erleichtert. Diese Direktive deklariert eine Positivliste von Trusted Types-Richtliniennamen, die mit `trustedTypes.createPolicy` aus der Trusted Types-API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Richtlinienname besteht nur aus alphanumerischen Zeichen oder einem von `-#=_/@.%`. Ein Sternchen (`*`) als Richtlinienname weist den Benutzeragenten an, jeden eindeutigen Richtliniennamen zuzulassen (`allow-duplicates` kann diese Einschränkung weiter lockern).
- `'none'`
  - : Untersagt die Erstellung jeglicher Trusted Type-Richtlinien (entspricht dem Nicht-Spezifizieren eines _\<policyName>_).
- `'allow-duplicates'`
  - : Erlaubt die Erstellung von Richtlinien mit einem Namen, der bereits verwendet wurde.

## Beispiele

```js
// Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

if (typeof trustedTypes !== "undefined") {
  const policyFoo = trustedTypes.createPolicy("foo", {});
  const policyFoo2 = trustedTypes.createPolicy("foo", {});
  const policyBaz = trustedTypes.createPolicy("baz", {}); // Löst aus und sendet ein SecurityPolicyViolationEvent.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)
- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
