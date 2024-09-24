---
title: TrustedScript
slug: Web/API/TrustedScript
l10n:
  sourceCommit: 736da094f1fe86aefb458e5505ad216789b0ba12
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

Das **`TrustedScript`**-Interface der {{domxref("Trusted Types API", "", "", "nocode")}} repräsentiert einen String mit einem nicht kompilierten Skriptkörper, den ein Entwickler in eine [Injection-Senke](/de/docs/Web/API/Trusted_Types_API#injection_sinks) einfügen kann, die das Skript möglicherweise ausführt. Diese Objekte werden über {{domxref("TrustedTypePolicy.createScript","TrustedTypePolicy.createScript()")}} erstellt und haben daher keinen Konstruktor.

Der Wert eines **TrustedScript**-Objekts wird beim Erstellen des Objekts festgelegt und kann nicht durch JavaScript geändert werden, da kein Setter verfügbar ist.

## Instanzmethoden

- {{domxref("TrustedScript.toJSON()")}}
  - : Gibt eine JSON-Darstellung der gespeicherten Daten zurück.
- {{domxref("TrustedScript.toString()")}}
  - : Ein String, der das bereinigte Skript enthält.

## Beispiele

Die Konstante `sanitized` ist ein Objekt, das über eine Trusted Types-Policy erstellt wurde.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized); /* ein TrustedScript-Objekt */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vermeiden Sie DOM-basierte Cross-Site-Scripting-Schwachstellen mit Trusted Types](https://web.dev/articles/trusted-types)
