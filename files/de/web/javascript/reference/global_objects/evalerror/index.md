---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`EvalError`** Objekt zeigt einen Fehler bezüglich der globalen {{jsxref("Global_Objects/eval", "eval()")}} Funktion an. Diese Ausnahme wird von JavaScript nicht mehr ausgelöst, jedoch bleibt das `EvalError` Objekt zur Kompatibilität bestehen.

`EvalError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

`EvalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Erstellt ein neues `EvalError` Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `EvalError.prototype` definiert und werden von allen `EvalError` Instanzen geteilt.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `EvalError` Instanzen ist der Anfangswert der {{jsxref("EvalError/EvalError", "EvalError")}} Konstruktor.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `EvalError.prototype.name` ist der Anfangswert `"EvalError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Erstellen eines EvalError

```js
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
