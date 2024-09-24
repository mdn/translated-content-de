---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
l10n:
  sourceCommit: d19dc31570f62196a5837be38bd0b11c45e67b05
---

{{JSRef}}

Das **`RangeError`**-Objekt zeigt einen Fehler an, wenn ein Wert nicht in der Menge oder dem Bereich der erlaubten Werte liegt.

## Beschreibung

Ein `RangeError` wird ausgelöst, wenn versucht wird, einen Wert als Argument an eine Funktion zu übergeben, deren Bereich diesen Wert nicht zulässt.

Dies kann auftreten, wenn:

- ein Wert übergeben wird, der nicht einer der erlaubten Zeichenfolgenwerte für {{jsxref("String.prototype.normalize()")}} ist, oder
- wenn versucht wird, ein Array einer illegalen Länge mit dem {{jsxref("Array")}} Konstruktor zu erstellen, oder
- wenn ungültige Werte an die numerischen Methoden {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} oder {{jsxref("Number.prototype.toPrecision()")}} übergeben werden.

`RangeError` ist ein {{Glossary("serializable object")}}, sodass es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mittels {{domxref("Worker/postMessage()", "postMessage()")}} kopiert werden kann.

`RangeError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : Erstellt ein neues `RangeError`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Eltern {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `RangeError.prototype` definiert und werden von allen `RangeError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RangeError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RangeError`-Instanzen ist der Initialwert der {{jsxref("RangeError/RangeError", "RangeError")}} Konstruktor.
- {{jsxref("Error/name", "RangeError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `RangeError.prototype.name` ist der Initialwert `"RangeError"`.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Eltern {{jsxref("Error")}}_.

## Beispiele

### Verwendung von RangeError (für numerische Werte)

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

### Verwendung von RangeError (für nicht-numerische Werte)

```js
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Array")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
