---
title: "TrustedTypePolicyFactory: createPolicy() Methode"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createPolicy()`**-Methode der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.

## Syntax

```js-nolint
createPolicy(policyName, policyOptions)
```

### Parameter

- `policyName`
  - : Ein String mit dem Namen der Richtlinie.
- `policyOptions` {{optional_inline}}

  - : Vom Benutzer definierte Funktionen zur Umwandlung von Zeichenfolgen in vertrauenswürdige Werte.

    - `createHTML(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, die Code enthält, der beim Erstellen eines [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Objekts ausgeführt wird.
    - `createScript(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, die Code enthält, der beim Erstellen eines [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekts ausgeführt wird.
    - `createScriptURL(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, die Code enthält, der beim Erstellen eines [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekts ausgeführt wird.

### Rückgabewert

Ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Richtliniennamen durch die [Content-Security-Policy `trusted-types`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) eingeschränkt sind und dieser Name nicht auf der Positivliste steht.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Name ein Duplikat ist und die [Content-Security-Policy trusted-types-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/trusted-types) nicht `allow-duplicates` verwendet.

## Beispiele

### Erstellen einer Richtlinie für HTML-Senken

Der untenstehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` und einer definierten Funktion für `createHTML()`, die HTML bereinigt.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Erstellen einer Standardrichtlinie

Auf einer Seite, auf der Trusted Types durch eine Content-Security-Policy mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-Direktive mit dem Wert `script` erzwungen werden, erwartet jedes Injektionsskript, das ein Skript akzeptiert, ein Trusted Type-Objekt. Falls stattdessen eine Zeichenfolge eingefügt wird, wird eine [Standardrichtlinie](/de/docs/Web/API/Trusted_Types_API#the_default_policy) verwendet.

Die Standardrichtlinie protokolliert eine Nachricht in der Konsole, um den Entwickler daran zu erinnern, diesen Teil der Anwendung anzupassen, um ein Trusted Type-Objekt zu verwenden. Sie hängt auch Details der Verwendung der Standardrichtlinie, des Typs und der Injektionssenke an den zurückgegebenen Wert an.

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
