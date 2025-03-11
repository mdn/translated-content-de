---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedScriptURL`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) stellt einen String dar, den ein Entwickler in eine [Injection-Senke](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) einfügen kann, die ihn als URL eines externen Skripts parsen wird. Diese Objekte werden über [`TrustedTypePolicy.createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) erstellt und haben daher keinen Konstruktor.

Der Wert eines `TrustedScriptURL`-Objekts wird beim Erstellen des Objekts festgelegt und kann nicht durch JavaScript geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- [`TrustedScriptURL.toJSON()`](/de/docs/Web/API/TrustedScriptURL/toJSON)
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- [`TrustedScriptURL.toString()`](/de/docs/Web/API/TrustedScriptURL/toString)
  - : Ein String, der die bereinigte URL enthält.

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

- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
