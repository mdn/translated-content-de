---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{JSRef}}

Das **`TypeError`**-Objekt repräsentiert einen Fehler, wenn eine Operation nicht ausgeführt werden konnte, typischerweise (aber nicht ausschließlich), wenn ein Wert nicht den erwarteten Typ hat.

Ein `TypeError` kann ausgelöst werden, wenn:

- ein Operand oder Argument, das an eine Funktion übergeben wird, nicht mit dem Typ kompatibel ist, den dieser Operator oder diese Funktion erwartet; oder
- wenn versucht wird, einen Wert zu ändern, der nicht geändert werden kann; oder
- wenn versucht wird, einen Wert auf unangemessene Weise zu verwenden.

`TypeError` ist ein [serielles Objekt](/de/docs/Glossary/serializable_object), sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

`TypeError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : Erstellt ein neues `TypeError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch die Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `TypeError.prototype` definiert und werden von allen `TypeError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `TypeError`-Instanzen ist der Anfangswert der {{jsxref("TypeError/TypeError", "TypeError")}}-Konstruktor.
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `TypeError.prototype.name` ist der Anfangswert `"TypeError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

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
