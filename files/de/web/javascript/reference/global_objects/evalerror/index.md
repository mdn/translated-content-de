---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Das **`EvalError`**-Objekt zeigt einen Fehler in Bezug auf die globale {{jsxref("Global_Objects/eval", "eval()")}}-Funktion an. Diese Ausnahme wird von JavaScript nicht mehr ausgelöst, jedoch bleibt das `EvalError`-Objekt aus Kompatibilitätsgründen erhalten.

`EvalError` ist ein {{Glossary("serializable object")}}, daher kann es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden.

`EvalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Erstellt ein neues `EvalError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `EvalError.prototype` definiert und werden von allen `EvalError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `EvalError`-Instanzen ist der Anfangswert der {{jsxref("EvalError/EvalError", "EvalError")}}-Konstruktor.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `EvalError.prototype.name` ist der Anfangswert `"EvalError"`.

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
  console.log(e.stack); // Stack des Fehlers
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Global_Objects/eval", "eval()")}}
