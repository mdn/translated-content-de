---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
l10n:
  sourceCommit: 6558de67a347fee30c303da8a0b262a9270a6885
---

{{JSRef}}

Das **`TypeError`**-Objekt repräsentiert einen Fehler, wenn eine Operation nicht durchgeführt werden konnte, typischerweise (aber nicht ausschließlich), wenn ein Wert nicht vom erwarteten Typ ist.

Ein `TypeError` kann ausgelöst werden, wenn:

- ein Operand oder Argument, das an eine Funktion übergeben wurde, nicht mit dem von diesem Operator oder der Funktion erwarteten Typ kompatibel ist; oder
- beim Versuch, einen Wert zu ändern, der nicht verändert werden kann; oder
- beim Versuch, einen Wert auf unzulässige Weise zu verwenden.

`TypeError` ist ein {{Glossary("serializable object")}}, daher kann es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden.

`TypeError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("TypeError/TypeError", "TypeError()")}}
  - : Erstellt ein neues `TypeError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `TypeError.prototype` definiert und werden von allen `TypeError`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "TypeError.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `TypeError`-Instanzen ist der Anfangswert der {{jsxref("TypeError/TypeError", "TypeError")}}-Konstruktor.
- {{jsxref("Error/name", "TypeError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Für `TypeError.prototype.name` ist der Anfangswert `"TypeError"`.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

## Beispiele

### Einen TypeError abfangen

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack des Fehlers
}
```

### Einen TypeError erzeugen

```js
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack des Fehlers
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
