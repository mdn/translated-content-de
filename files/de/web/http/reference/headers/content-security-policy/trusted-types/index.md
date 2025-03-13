---
title: "CSP: trusted-types"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} weist Benutzeragenten an, die Erstellung von Trusted Types-Richtlinien einzuschränken - Funktionen, die nicht fälschbare, typisierte Werte erstellen, die anstelle von Zeichenketten an DOM-XSS-Senken übergeben werden sollen.

Zusammen mit der Direktive **[`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)** ermöglicht dies den Autoren, Regeln festzulegen, die das Schreiben von Werten in das DOM schützen und somit die Angriffsfläche für DOM-XSS auf kleinere, isolierte Teile des Webanwendungscodes reduzieren, was ihre Überwachung und Codeprüfung erleichtert. Diese Direktive erklärt eine Positivliste von Trusted-Type-Richtliniennamen, die mit `trustedTypes.createPolicy` aus der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Richtlinienname besteht nur aus alphanumerischen Zeichen oder einem der folgenden: `-#=_/@.%`. Ein Stern (`*`) als Richtlinienname weist den Benutzeragenten an, jeden eindeutigen Richtliniennamen zuzulassen (`allow-duplicates` kann das weiter lockern).
- `'none'`
  - : Verbietet die Erstellung jeglicher Trusted Type-Richtlinie (entspricht dem Nicht-Spezifizieren eines _\<policyName>_).
- `'allow-duplicates'`
  - : Erlaubt das Erstellen von Richtlinien mit einem bereits verwendeten Namen.

## Beispiele

```js
// Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

if (typeof trustedTypes !== "undefined") {
  const policyFoo = trustedTypes.createPolicy("foo", {});
  const policyFoo2 = trustedTypes.createPolicy("foo", {});
  const policyBaz = trustedTypes.createPolicy("baz", {}); // Throws and dispatches a SecurityPolicyViolationEvent.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{Glossary("Cross-site_scripting", "Cross-Site-Scripting (XSS)")}}
- [DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
