---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`EvalError`** Objekt zeigt einen Fehler in Bezug auf die globale {{jsxref("Global_Objects/eval", "eval()")}} Funktion an. Diese Ausnahme wird von JavaScript nicht mehr ausgelöst, jedoch bleibt das `EvalError` Objekt zur Kompatibilität bestehen.

`EvalError` ist ein [serialisierbares Objekt](/de/docs/Glossary/serializable_object), daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`EvalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Erstellt ein neues `EvalError` Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("Error")}}._

Diese Eigenschaften sind auf `EvalError.prototype` definiert und werden von allen `EvalError` Instanzen geteilt.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `EvalError` Instanzen ist der Anfangswert der {{jsxref("EvalError/EvalError", "EvalError")}} Konstruktor.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `EvalError.prototype.name` ist der Anfangswert `"EvalError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("Error")}}._

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
