---
title: "TrustedTypePolicyFactory: createPolicy()-Methode"
short-title: createPolicy()
slug: Web/API/TrustedTypePolicyFactory/createPolicy
l10n:
  sourceCommit: c7d5004cd6c5d5b1318f626425fcb06cb2c6a509
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createPolicy()`**-Methode der {{domxref("TrustedTypePolicyFactory")}}-Schnittstelle erstellt ein {{domxref("TrustedTypePolicy")}}-Objekt, das die als `policyOptions` übergebenen Regeln implementiert.

### Die Standardrichtlinie

In Chrome erstellt eine Richtlinie mit dem Namen "default" eine spezielle Richtlinie, die verwendet wird, wenn ein String (anstatt eines Trusted Type-Objekts) an einen Injektions-Sink übergeben wird. Dies kann in einer Übergangsphase genutzt werden, während der Umstellung von einer Anwendung, die Strings in Injektions-Sinks einfügt.

> [!NOTE]
> Das oben beschriebene Verhalten ist in der Spezifikation noch nicht festgelegt und kann sich in Zukunft ändern.

> [!WARNING]
> Eine lockere Standardrichtlinie könnte den Zweck der Verwendung von Trusted Types untergraben und sollte daher mit strengen Regeln definiert werden, um sicherzustellen, dass sie nicht zum Ausführen gefährlichen Codes verwendet werden kann.

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
      - : Eine Callback-Funktion in Form eines Strings, die Code enthält, der beim Erstellen eines {{domxref("TrustedHTML")}}-Objekts ausgeführt wird.
    - `createScript(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, die Code enthält, der beim Erstellen eines {{domxref("TrustedScript")}}-Objekts ausgeführt wird.
    - `createScriptURL(input[,args])`
      - : Eine Callback-Funktion in Form eines Strings, die Code enthält, der beim Erstellen eines {{domxref("TrustedScriptURL")}}-Objekts ausgeführt wird.

### Rückgabewert

Ein {{domxref("TrustedTypePolicy")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn Richtlininamen durch die [Content Security Policy `trusted-types`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) eingeschränkt sind und dieser Name nicht auf der Zulassungsliste steht.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Name ein Duplikat ist und die [Content Security Policy trusted-types Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types) nicht `allow-duplicates` verwendet.

## Beispiele

Der folgende Code erstellt eine Richtlinie mit dem Namen `"myEscapePolicy"` mit einer definierten Funktion für `createHTML()`, die HTML bereinigt.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});
```

### Erstellen einer Standardrichtlinie

Auf einer Website, auf der Trusted Types über eine Content Security Policy mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for)-Direktive und dem Wert `script` erzwungen werden, erwartet jedes Injektionsskript, dass es ein Trusted Type-Objekt akzeptiert. Falls stattdessen ein String eingefügt wird, wird die folgende Standardrichtlinie angewendet.

Die Richtlinie protokolliert eine Nachricht in die Konsole, um den Entwickler daran zu erinnern, diesen Teil der Anwendung so umzustrukturieren, dass ein Trusted Type-Objekt verwendet wird. Sie fügt außerdem Details zur Verwendung der Standardrichtlinie, Typ und Injektions-Sink, dem zurückgegebenen Wert hinzu.

```js
trustedTypes.createPolicy("default", {
  createScriptURL: (s, type, sink) => {
    console.log("Bitte refaktorisieren.");
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
