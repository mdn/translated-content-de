---
title: TrustedScript
slug: Web/API/TrustedScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Die **`TrustedScript`**-Schnittstelle der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) repräsentiert einen String mit einem nicht kompilierten Skriptkörper, den ein Entwickler in einen [Injektionspunkt](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, der das Skript möglicherweise ausführt. Diese Objekte werden über [`TrustedTypePolicy.createScript()`](/de/docs/Web/API/TrustedTypePolicy/createScript) erstellt und haben daher keinen Konstruktor.

Der Wert eines **TrustedScript**-Objekts wird bei der Erstellung festgelegt und kann nicht durch JavaScript geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- [`TrustedScript.toJSON()`](/de/docs/Web/API/TrustedScript/toJSON)
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- [`TrustedScript.toString()`](/de/docs/Web/API/TrustedScript/toString)
  - : Ein String, der das bereinigte Skript enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Policy erstellt wurde.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized); /* a TrustedScript object */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vermeiden von DOM-basierten Cross-Site Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
