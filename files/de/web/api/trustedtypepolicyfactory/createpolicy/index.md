---
title: "TrustedTypePolicyFactory: createPolicy() Methode"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createPolicy()`** Methode des [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) Interfaces erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt, das die als `policyOptions` übermittelten Regeln umsetzt.

## Syntax

```js-nolint
createPolicy(policyName, policyOptions)
```

### Parameter

- `policyName`
  - : Ein String mit dem Namen der Richtlinie.
- `policyOptions` {{optional_inline}}
  - : Vom Benutzer definierte Funktionen zur Umwandlung von Strings in vertrauenswürdige Werte.
    - `createHTML(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, der den auszuführenden Code beim Erstellen eines [`TrustedHTML`](/de/docs/Web/API/TrustedHTML) Objekts enthält.
    - `createScript(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, der den auszuführenden Code beim Erstellen eines [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekts enthält.
    - `createScriptURL(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, der den auszuführenden Code beim Erstellen eines [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekts enthält.

### Rückgabewert

Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy) Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn Richtliniennamen durch die [Content Security Policy `trusted-types` Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) eingeschränkt sind und dieser Name nicht auf der Zulassungsliste steht.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der Name ein Duplikat ist und die [Content Security Policy trusted-types Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) `allow-duplicates` nicht verwendet.

## Beispiele

### Eine Richtlinie für HTML-Senken erstellen

Der untenstehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer definierten Funktion für `createHTML()`, die HTML bereinigt.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Eine Standardrichtlinie erstellen

Auf einer Website, auf der Trusted Types durch eine Content Security Policy mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) Direktive auf `script` gesetzt erzwungen werden, erwartet jedes Injektionsskript, das ein Skript akzeptiert, ein Trusted Type Objekt. Für den Fall, dass stattdessen ein String eingefügt wird, wird eine [Standardrichtlinie](/de/docs/Web/API/Trusted_Types_API#the_default_policy) verwendet.

Die Standardrichtlinie protokolliert eine Nachricht in der Konsole, um den Entwickler daran zu erinnern, diesen Teil der Anwendung zu überarbeiten, um ein Trusted Type Objekt zu verwenden. Sie fügt auch Details zur Verwendung der Standardrichtlinie, des Typs und der Injektionssenke zum zurückgegebenen Wert hinzu.

```js
trustedTypes.createPolicy("default", {
  createScriptURL(s, type, sink) {
    console.log("Please refactor.");
    return `${s}?default-policy-used&type=${encodeURIComponent(
      type,
    )}&sink=${encodeURIComponent(sink)}`;
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
