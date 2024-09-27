---
title: "TrustedTypePolicyFactory: createPolicy()-Methode"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createPolicy()`**-Methode der [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Schnittstelle erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.

### Die Standardrichtlinie

In Chrome erstellt eine Richtlinie mit dem Namen "default" eine spezielle Richtlinie, die verwendet wird, wenn ein String (statt eines Trusted Type-Objekts) an eine Injektionsstelle übergeben wird. Dies kann in einer Übergangsphase genutzt werden, während man von einer Anwendung wechselt, die Strings in Injektionsstellen einfügt.

> [!NOTE]
> Das oben beschriebene Verhalten ist in der Spezifikation noch nicht festgelegt und kann sich in der Zukunft ändern.

> [!WARNING]
> Eine lockere Standardrichtlinie könnte den Zweck von Trusted Types zunichtemachen und sollte daher mit strengen Regeln definiert werden, um sicherzustellen, dass sie nicht verwendet werden kann, um gefährlichen Code auszuführen.

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
  - : Wird ausgelöst, wenn Richtliniennamen durch die [Content Security Policy `trusted-types`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) eingeschränkt sind und dieser Name nicht auf der Whitelist steht.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Name ein Duplikat ist und die [Content Security Policy trusted-types Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) nicht `allow-duplicates` verwendet.

## Beispiele

Der unten stehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer definierten Funktion für `createHTML()`, die HTML bereinigt.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Erstellen einer Standardrichtlinie

Auf einer Website, auf der Trusted Types über eine Content Security Policy mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)-Direktive, die auf `script` gesetzt ist, erzwungen werden, erwartet ein Injektionsskript, das ein Skript akzeptiert, ein Trusted Type-Objekt. Falls stattdessen ein String eingefügt wird, wird die folgende Standardrichtlinie verwendet.

Die Richtlinie protokolliert eine Nachricht in der Konsole, um den Entwickler daran zu erinnern, diesen Teil der Anwendung zu überarbeiten, um ein Trusted Type-Objekt zu verwenden. Sie fügt außerdem Details zur Verwendung der Standardrichtlinie, Typ und Injektionsstelle dem zurückgegebenen Wert hinzu.

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
