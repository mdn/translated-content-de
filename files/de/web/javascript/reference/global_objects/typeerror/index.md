---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`TypeError`**-Objekt repräsentiert einen Fehler, wenn eine Operation nicht ausgeführt werden konnte, typischerweise (aber nicht ausschließlich), wenn ein Wert nicht vom erwarteten Typ ist.

Ein `TypeError` kann ausgelöst werden, wenn:

- ein Operand oder ein Argument, das an eine Funktion übergeben wird, nicht mit dem von diesem Operator oder dieser Funktion erwarteten Typ kompatibel ist; oder
- wenn versucht wird, einen Wert zu ändern, der nicht geändert werden kann; oder
- wenn versucht wird, einen Wert auf unangemessene Weise zu verwenden.

`TypeError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

`TypeError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : Erstellt ein neues `TypeError`-Objekt.

## Instanzeigenschaften

_Erbaut auch Instanzeigenschaften von seinem übergeordneten Objekt {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `TypeError.prototype` definiert und werden von allen `TypeError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `TypeError`-Instanzen ist der Anfangswert der {{jsxref("TypeError/TypeError", "TypeError")}}-Konstruktor.
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `TypeError.prototype.name` ist der Anfangswert `"TypeError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem übergeordneten Objekt {{jsxref("Error")}}_.

## Beispiele

### Abfangen eines TypeError

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

### Erstellen eines TypeError

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
