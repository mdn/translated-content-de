---
title: "Content-Security-Policy: trusted-types Directive"
short-title: trusted-types
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`**-Direktive weist Benutzeragenten an, die Erstellung von Trusted Types Policies einzuschränken - Funktionen, die nicht manipulierbare, typisierte Werte erstellen, die anstelle von Zeichenketten an DOM-XSS-Senken übergeben werden sollen.

Zusammen mit der **[`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)**-Direktive ermöglicht dies Autoren, Regeln zum Schreiben von Werten in das DOM zu definieren und so die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Codes der Webanwendung zu reduzieren, was ihre Überwachung und Codeüberprüfung erleichtert. Diese Direktive deklariert eine Positivliste von Trusted Type Policy-Namen, die mit `trustedTypes.createPolicy` aus der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Policy-Name besteht nur aus alphanumerischen Zeichen oder einem von `-#=_/@.%`. Ein Sternchen (`*`) als Policy-Name weist den Benutzeragenten an, jeden eindeutigen Policy-Namen zuzulassen (`allow-duplicates` kann dies weiter lockern).
- `'none'`
  - : Verhindert die Erstellung einer Trusted Type Policy (entspricht dem Nicht-Spezifizieren eines _\<policyName>_).
- `'allow-duplicates'`
  - : Erlaubt die Erstellung von Policies mit einem bereits verwendeten Namen.

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
- {{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}
- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
