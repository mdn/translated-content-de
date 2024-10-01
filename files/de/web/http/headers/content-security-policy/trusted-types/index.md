---
title: "CSP: trusted-types"
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} Direktive weist Benutzeragenten an, die Erstellung von Trusted Types-Policies einzuschränken - Funktionen, die nicht fälschbare, typisierte Werte erstellen, die anstelle von Zeichenfolgen an DOM XSS-Senken übergeben werden sollen.

Zusammen mit der **[`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)** Direktive ermöglicht dies den Autoren, Regeln zu definieren, die das Schreiben von Werten in das DOM schützen und so die Angriffsfläche für DOM XSS auf kleine, isolierte Teile des Webanwendungscodes reduzieren. Dies erleichtert deren Überwachung und Codeüberprüfung. Diese Direktive deklariert eine Positivliste von Trusted Type-Policynamen, die mit `trustedTypes.createPolicy` aus der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Policyname besteht nur aus alphanumerischen Zeichen oder einem der folgenden Zeichen: `-#=_/@.%`. Ein Stern (`*`) als Policyname weist den Benutzeragenten an, jeden eindeutigen Policyname zuzulassen (`allow-duplicates` kann dies weiter lockern).
- `'none'`
  - : Verbietet die Erstellung jeglicher Trusted Type-Policy (gleichbedeutend mit dem Weglassen eines _\<policyName>_).
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
- [DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
- Trusted Types mit dem [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Sanitizer
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
