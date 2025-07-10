---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`RangeError`**-Objekt zeigt einen Fehler an, wenn ein Wert nicht in der Menge oder im Bereich der zulässigen Werte liegt.

## Beschreibung

Ein `RangeError` wird ausgelöst, wenn versucht wird, einen Wert als Argument an eine Funktion zu übergeben, die keinen Bereich zulässt, der den Wert einschließt.

Dies kann auftreten, wenn:

- ein Wert übergeben wird, der nicht einer der erlaubten Zeichenfolgenwerte für {{jsxref("String.prototype.normalize()")}} ist, oder
- wenn versucht wird, ein Array mit einer illegalen Länge mit dem {{jsxref("Array")}}-Konstruktor zu erstellen, oder
- wenn ungültige Werte an die numerischen Methoden {{jsxref("Number.prototype.toExponential()")}}, {{jsxref("Number.prototype.toFixed()")}} oder {{jsxref("Number.prototype.toPrecision()")}} übergeben werden.

`RangeError` ist ein {{Glossary("serializable_object", "serialisierbares Objekt")}} und kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

`RangeError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("RangeError/RangeError", "RangeError()")}}
  - : Erstellt ein neues `RangeError`-Objekt.

## Instanzeigenschaften

_Übernimmt auch Instanzeigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `RangeError.prototype` definiert und werden von allen `RangeError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "RangeError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `RangeError`-Instanzen ist der Anfangswert der {{jsxref("RangeError/RangeError", "RangeError")}}-Konstruktor.
- {{jsxref("Error/name", "RangeError.prototype.name")}}
  - : Gibt den Namen für den Fehlertyp an. Für `RangeError.prototype.name` ist der Anfangswert `"RangeError"`.

## Instanzmethoden

_Übernimmt Instanzmethoden von seinem Elternteil {{jsxref("Error")}}_.

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
