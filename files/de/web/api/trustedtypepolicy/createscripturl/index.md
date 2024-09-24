---
title: "TrustedTypePolicy: createScriptURL()-Methode"
short-title: createScriptURL()
slug: Web/API/TrustedTypePolicy/createScriptURL
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`createScriptURL()`**-Methode der {{domxref("TrustedTypePolicy")}}-Schnittstelle erstellt ein {{domxref("TrustedScriptURL")}}-Objekt mithilfe einer von {{domxref("TrustedTypePolicyFactory.createPolicy()")}} erstellten Richtlinie.

## Syntax

```js-nolint
createScriptURL(input)
createScriptURL(input, args)
```

### Parameter

- `input`
  - : Ein String, der den String enthält, der durch die Richtlinie bereinigt werden soll.
- `args` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch {{domxref("TrustedTypePolicy")}} dargestellte Funktion übergeben werden.

### Rückgabewert

Ein {{domxref("TrustedScriptURL")}}-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn {{domxref("TrustedTypePolicy")}} keine Funktion zum Ausführen auf dem Input enthält.

## Beispiele

Im folgenden Beispiel wird ein String, der die URL zu einer externen Ressource enthält, als Input für `createScriptURL()` verwendet. Die Richtlinie kann überprüfen, ob es sich um eine erlaubte URL handelt, bevor diese in eine Injektionsstelle eingefügt wird, die das Ausführen dieses externen Skripts verursachen könnte.

```js
const escaped = escapeURLPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
