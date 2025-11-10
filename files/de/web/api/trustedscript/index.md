---
title: TrustedScript
slug: Web/API/TrustedScript
l10n:
  sourceCommit: 3ceedbd90089cfb6970c9bf63ff9e6f3801fcbc5
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedScript`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String mit einem nicht kompilierten Skriptkörper, den ein Entwickler in ein [Injection-Sink](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) einfügen kann, das möglicherweise das Skript ausführt. Diese Objekte werden über [`TrustedTypePolicy.createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) erstellt und haben daher keinen Konstruktor.

Der Wert eines **TrustedScript**-Objekts wird bei der Erstellung des Objekts festgelegt und kann nicht durch JavaScript geändert werden, da es keinen Setter gibt.

## Instanzmethoden

- [`TrustedScript.toJSON()`](/de/docs/Web/API/TrustedScript/toJSON)
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- [`TrustedScript.toString()`](/de/docs/Web/API/TrustedScript/toString)
  - : Ein String, der das bereinigte Skript enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Richtlinie erstellt wurde.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized); /* a TrustedScript object */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vermeiden Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
