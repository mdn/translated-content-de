---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedScriptURL`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String, den ein Entwickler in einen [Injection-Punkt](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, der ihn als URL eines externen Skripts interpretiert. Diese Objekte werden über [`TrustedTypePolicy.createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedScriptURL`-Objekts wird bei der Erstellung des Objekts festgelegt und kann nicht durch JavaScript geändert werden, da kein Setter bereitgestellt wird.

## Instanzmethoden

- [`TrustedScriptURL.toJSON()`](/de/docs/Web/API/TrustedScriptURL/toJSON)
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- [`TrustedScriptURL.toString()`](/de/docs/Web/API/TrustedScriptURL/toString)
  - : Ein String, der die bereinigte URL enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde.

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
