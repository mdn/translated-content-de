---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`EvalError`**-Objekt signalisiert einen Fehler in Bezug auf die globale {{jsxref("Global_Objects/eval", "eval()")}}-Funktion. Diese Ausnahme wird von JavaScript nicht mehr ausgelöst, jedoch bleibt das `EvalError`-Objekt aus Kompatibilitätsgründen erhalten.

`EvalError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`EvalError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("EvalError/EvalError", "EvalError()")}}
  - : Erstellt ein neues `EvalError`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternobjekt {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `EvalError.prototype` definiert und werden von allen `EvalError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "EvalError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `EvalError`-Instanzen ist der Anfangswert der {{jsxref("EvalError/EvalError", "EvalError")}}-Konstruktor.
- {{jsxref("Error/name", "EvalError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `EvalError.prototype.name` ist der Anfangswert `"EvalError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternobjekt {{jsxref("Error")}}_.

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
