---
title: "Content-Security-Policy: trusted-types Directive"
short-title: trusted-types
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types
l10n:
  sourceCommit: ecd02ce48a6a6076e244396747a1d31eb4d9747a
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`trusted-types`**-Direktive wird verwendet, um eine Positivliste von [Trusted Type-Policynamen](/de/docs/Web/API/Trusted_Types_API) anzugeben, die eine Website mithilfe von [`trustedTypes.createPolicy()`](/de/docs/Web/API/TrustedTypePolicyFactory/createPolicy) erstellen kann.

Dies verhindert, dass Website-Code unerwartete Policies erstellt, was es einfacher macht, Trusted Type-Code zu prüfen (`createPolicy()` wird eine Ausnahme auslösen, wenn ein Name übergeben wird, der nicht in `trusted-types` aufgeführt war).

> [!NOTE]
> Die Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) muss gesetzt sein, um die Durchsetzung von Trusted Types zu aktivieren, und das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) wird verwendet, um die Einschränkungen auf [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval) und [`Function()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) zu lockern, wenn Trusted Types aktiviert sind.
>
> Weitere Informationen finden Sie in der [Trusted Type API](/de/docs/Web/API/Trusted_Types_API).

## Syntax

```http
Content-Security-Policy: trusted-types;
Content-Security-Policy: trusted-types 'none';
Content-Security-Policy: trusted-types <policyName>;
Content-Security-Policy: trusted-types <policyName> <policyName> 'allow-duplicates';
```

- \<policyName>
  - : Ein gültiger Policynamen besteht nur aus alphanumerischen Zeichen oder einem der Zeichen `-#=_/@.%`. Ein Stern (`*`) als Policyname weist den Benutzeragenten an, jeden eindeutigen Policynamen zuzulassen (`allow-duplicates` kann dies weiter lockern).
- `'none'`
  - : Verbietet das Erstellen von Trusted Type-Policies (entspricht dem Nichtangeben eines _\<policyName>_).
- `'allow-duplicates'`
  - : Erlaubt das Erstellen von Policies mit einem Namen, der bereits verwendet wurde.

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
  - [`require-trusted-types-for` Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)
  - [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
  - [Injection Sink Schnittstellen](/de/docs/Web/API/Trusted_Types_API#injection_sink_interfaces)
- {{Glossary("Cross-site_scripting", "Cross-Site Scripting (XSS)")}}
