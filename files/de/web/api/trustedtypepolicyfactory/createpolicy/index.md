---
title: "TrustedTypePolicyFactory: Methode createPolicy()"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createPolicy()`**-Methode der Schnittstelle [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.

## Syntax

```js-nolint
createPolicy(policyName, policyOptions)
```

### Parameter

- `policyName`
  - : Ein String mit dem Namen der Richtlinie.
- `policyOptions` {{optional_inline}}

  - : Benutzerdefinierte Funktionen zur Umwandlung von Strings in vertrauenswürdige Werte.

    - `createHTML(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, der Code enthält, der beim Erstellen eines [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekts ausgeführt wird.
    - `createScript(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, der Code enthält, der beim Erstellen eines [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekts ausgeführt wird.
    - `createScriptURL(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, der Code enthält, der beim Erstellen eines [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekts ausgeführt wird.

### Rückgabewert

Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn Richtliniennamen durch die [Content Security Policy `trusted-types` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) eingeschränkt sind und dieser Name nicht auf der Positivliste steht.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der Name ein Duplikat ist und die [Content Security Policy trusted-types directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) `allow-duplicates` nicht verwendet.

## Beispiele

### Erstellen einer Richtlinie für HTML-Sinks

Der unten stehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer definierten Funktion für `createHTML()`, die HTML bereinigt.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Erstellen einer Standardrichtlinie

Auf einer Website, auf der Trusted Types über eine Content Security Policy mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-Richtlinie, die auf `script` gesetzt ist, erzwungen werden, erwartet jedes Einspritzskript, das ein Skript akzeptiert, ein Trusted Type-Objekt. Falls stattdessen ein String eingefügt wird, wird eine [Standardrichtlinie](/de/docs/Web/API/Trusted_Types_API#the_default_policy) verwendet.

Die Standardrichtlinie protokolliert eine Nachricht in der Konsole, um den Entwickler daran zu erinnern, diesen Teil der Anwendung zu überarbeiten, um ein Trusted Type-Objekt zu verwenden. Sie fügt außerdem Details zur Verwendung der Standardrichtlinie, des Typs und des Einspritzsinks zum zurückgegebenen Wert hinzu.

```js
trustedTypes.createPolicy("default", {
  createScriptURL: (s, type, sink) => {
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
