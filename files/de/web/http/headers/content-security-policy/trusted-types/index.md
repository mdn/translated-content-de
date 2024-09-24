---
title: "CSP: trusted-types"
slug: Web/HTTP/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`** {{experimental_inline}} Direktive weist Benutzeragenten an, die Erstellung von Trusted Types-Policies einzuschränken - Funktionen, die nicht fälschbare, typisierte Werte erstellen sollen, die anstelle von Strings an DOM XSS-Senken übergeben werden.

Zusammen mit der **[`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)** Direktive ermöglicht dies es Autoren, Regeln zu definieren, die das Schreiben von Werten in das DOM schützen und somit die Angriffsmöglichkeiten durch DOM XSS auf kleine, isolierte Teile des Webanwendungscodes reduzieren, was deren Überwachung und Codeüberprüfung erleichtert. Diese Direktive deklariert eine Positivliste von Trusted Type-Policy-Namen, die mit `trustedTypes.createPolicy` aus der Trusted Types API erstellt wurden.

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Policy-Name besteht nur aus alphanumerischen Zeichen oder einem der folgenden Zeichen: "`-#=_/@.%`". Ein Stern (`*`) als Policy-Name weist den Benutzeragenten an, jeden einzigartigen Policy-Namen zuzulassen ('`allow-duplicates`' kann dies weiter lockern).
- `'none'`
  - : Verhindert die Erstellung jeglicher Trusted Type-Policy (entspricht dem Nicht-Angeben eines _\<policyName>_).
- `'allow-duplicates'`
  - : Erlaubt die Erstellung von Policies mit einem Namen, der bereits verwendet wurde.

## Beispiele

```js
// Content-Security-Policy: trusted-types foo bar 'allow-duplicates';

if (typeof trustedTypes !== "undefined") {
  const policyFoo = trustedTypes.createPolicy("foo", {});
  const policyFoo2 = trustedTypes.createPolicy("foo", {});
  const policyBaz = trustedTypes.createPolicy("baz", {}); // Löst einen Fehler aus und wirft eine SecurityPolicyViolationEvent.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- [Cross-Site Scripting (XSS)](/de/docs/Glossary/Cross-site_scripting)
- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
- Trusted Types mit [DOMPurify](https://github.com/cure53/DOMPurify#what-about-dompurify-and-trusted-types) XSS-Filter
- [Trusted Types Polyfill](https://github.com/w3c/trusted-types#polyfill)
