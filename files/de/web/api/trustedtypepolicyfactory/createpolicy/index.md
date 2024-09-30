---
title: "TrustedTypePolicyFactory: Methode createPolicy()"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createPolicy()`**-Methode des [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Interfaces erstellt ein [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy)-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.

### Die Standardrichtlinie

In Chrome erstellt eine Richtlinie mit dem Namen "default" eine spezielle Richtlinie, die verwendet wird, wenn ein String (anstatt eines Trusted Type-Objekts) in einen Injektionspunkt übergeben wird. Dies kann in einer Übergangsphase genutzt werden, während eine Anwendung von der Einfügung von Zeichenfolgen in Injektionspunkte umgestellt wird.

> [!NOTE]
> Das oben beschriebene Verhalten ist in der Spezifikation noch nicht endgültig festgelegt und kann sich in Zukunft ändern.

> [!WARNING]
> Eine lax definierte Standardrichtlinie könnte den Zweck der Verwendung von Trusted Types vereiteln. Daher sollte sie mit strengen Regeln definiert werden, um sicherzustellen, dass sie nicht zum Ausführen gefährlichen Codes verwendet werden kann.

## Syntax

```js-nolint
createPolicy(policyName, policyOptions)
```

### Parameter

- `policyName`
  - : Ein String mit dem Namen der Richtlinie.
- `policyOptions` {{optional_inline}}

  - : Vom Benutzer definierte Funktionen zum Konvertieren von Strings in vertrauenswürdige Werte.

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
  - : Wird ausgelöst, wenn Richtliniennamen durch die [Content Security Policy `trusted-types` Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) eingeschränkt sind und dieser Name nicht auf der Positivliste steht.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Name ein Duplikat ist und die [Content Security Policy trusted-types Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) nicht `allow-duplicates` verwendet.

## Beispiele

Der unten stehende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer Funktion, die für `createHTML()` definiert ist und HTML bereinigt.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Erstellen einer Standardrichtlinie

Auf einer Seite, auf der Trusted Types über eine Content Security Policy mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)-Direktive und dem Wert `script` durchgesetzt werden, erwartet jedes Injektionsskript, das ein Skript akzeptiert, ein Trusted Type-Objekt. Im Fall, dass stattdessen ein String eingefügt wird, wird die folgende Standardrichtlinie verwendet.

Die Richtlinie protokolliert eine Nachricht in der Konsole, um den Entwickler daran zu erinnern, diesen Teil der Anwendung in die Verwendung eines Trusted Type-Objekts umzuwandeln. Sie fügt auch Details zur Verwendung der Standardrichtlinie, des Typs und des Injektionspunkts dem zurückgegebenen Wert hinzu.

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
