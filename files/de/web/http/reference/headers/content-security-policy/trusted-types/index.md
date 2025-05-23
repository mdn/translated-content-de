---
title: "Content-Security-Policy: trusted-types directive"
short-title: trusted-types
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** weist Benutzeragenten an, die Erstellung von Trusted Types-Richtlinien einzuschränken - Funktionen, die nicht manipulierbare, typisierte Werte erstellen, die anstelle von Zeichenfolgen an DOM XSS-Senken übergeben werden sollen.

Zusammen mit der **[`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)** Direktive ermöglicht dies den Autoren, Regeln zu definieren, die das Schreiben von Werten an das DOM überwachen, und somit die DOM XSS-Angriffsfläche auf kleine, isolierte Teile des Webanwendungscodes zu reduzieren, was deren Überwachung und Codeüberprüfung erleichtert. Diese Direktive deklariert eine Weiße Liste von Namen vertrauenswürdiger Typenrichtlinien, die mit `trustedTypes.createPolicy` der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Richtlinienname besteht nur aus alphanumerischen Zeichen oder einem der `-#=_/@.%`. Ein Sternchen (`*`) als Richtlinienname weist den Benutzeragenten an, einen beliebigen eindeutigen Richtliniennamen zuzulassen (`allow-duplicates` kann dies weiter lockern).
- `'none'`
  - : Verhindert die Erstellung einer Trusted Types-Richtlinie (entspricht dem Nicht-Angeben eines _\<policyName>_).
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
- {{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}
- [Verhindern von DOM-basierten Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Filter
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
