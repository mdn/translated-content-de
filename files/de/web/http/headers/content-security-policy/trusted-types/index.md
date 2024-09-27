---
title: "CSP: trusted-types"
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Header-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} weist Benutzeragenten an, die Erstellung von Trusted Types-Policies einzuschränken - Funktionen, die nicht fälschbare, typisierte Werte erstellen, die anstelle von Zeichenfolgen an DOM-XSS-Senken übergeben werden sollen.

Zusammen mit der **[`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)**-Direktive ermöglicht dies den Autoren, Regeln zu definieren, die das Schreiben von Werten in das DOM schützen, und somit die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Webanwendungs-Codes reduzieren, wodurch deren Überwachung und Codeüberprüfung erleichtert wird. Diese Direktive deklariert eine Positivliste von Trusted Type-Policy-Namen, die mit `trustedTypes.createPolicy` aus der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Policy-Name besteht nur aus alphanumerischen Zeichen oder einem der folgenden: `-#=_/@.%`. Ein Stern (`*`) als Policy-Name weist den Benutzeragenten an, jeden eindeutigen Policy-Namen zuzulassen (`allow-duplicates` kann dies weiter lockern).
- `'none'`
  - : Verhindert das Erstellen einer Trusted Type-Policy (entspricht dem Nicht-Spezifizieren eines _\<policyName>_).
- `'allow-duplicates'`
  - : Erlaubt das Erstellen von Policies mit einem bereits verwendeten Namen.

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
- [Cross-Site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)
- [DOM-basierte Cross-Site Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Vergleicher
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
