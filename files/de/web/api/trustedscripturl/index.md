---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedScriptURL`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String, den Entwickler in einen [Injection Sink](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) einfügen können, der ihn als URL eines externen Skripts interpretiert. Diese Objekte werden über [`TrustedTypePolicy.createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedScriptURL`-Objekts wird bei seiner Erstellung festgelegt und kann von JavaScript nicht geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- [`TrustedScriptURL.toJSON()`](/de/docs/Web/API/TrustedScriptURL/toJSON)
  - : Gibt einen String zurück, der das `TrustedScriptURL`-Objekt repräsentiert. Sein Wert entspricht dem Rückgabewert von [`TrustedScriptURL.toString()`](/de/docs/Web/API/TrustedScriptURL/toString). Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.
- [`TrustedScriptURL.toString()`](/de/docs/Web/API/TrustedScriptURL/toString)
  - : Gibt einen String zurück, der die bereinigte URL enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types Policy erstellt wurde.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized); /* a TrustedScriptURL object */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types verhindern](https://web.dev/articles/trusted-types)
