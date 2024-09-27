---
title: TrustedScript
slug: Web/API/TrustedScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedScript`**-Interface der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String mit einem nicht kompilierten Skriptkörper, den ein Entwickler in ein [Injection Sink](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, das das Skript ausführen könnte. Diese Objekte werden über [`TrustedTypePolicy.createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) erstellt und haben daher keinen Konstruktor.

Der Wert eines **TrustedScript**-Objekts wird bei der Erstellung des Objekts festgelegt und kann von JavaScript nicht geändert werden, da kein Setter verfügbar ist.

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

- [Verhindern Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
