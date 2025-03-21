---
title: "CSP: trusted-types"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: 28da811a08240c53da000bfdd8319338290e3f0b
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** weist Benutzeragenten an, die Erstellung von Trusted Types-Policies einzuschränken - Funktionen, die nicht manipulierbare, typisierte Werte erzeugen, die anstelle von Zeichenketten an DOM-XSS-Senken übergeben werden sollen.

Zusammen mit der Direktive **[`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)** ermöglicht dies den Autoren, Regeln festzulegen, die das Schreiben von Werten in das DOM bewachen. Dadurch wird die Angriffsfläche für DOM-XSS auf kleine, isolierte Teile des Anwendungscodes reduziert, was deren Überwachung und Code-Überprüfung erleichtert. Diese Direktive deklariert eine Whitelist von Trusted Type-Policynamen, die mit `trustedTypes.createPolicy` aus der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Policy-Name besteht nur aus alphanumerischen Zeichen oder einem von `-#=_/@.%`. Ein Sternchen (`*`) als Policy-Name weist den Benutzeragenten an, jeden eindeutigen Policy-Namen zuzulassen (`allow-duplicates` kann diese Einschränkung weiter lockern).
- `'none'`
  - : Verhindert die Erstellung von Trusted Type-Policies (entspricht dem Nicht-Angaben eines _\<policyName>_).
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
