---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toJSON()`** von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum im gleichen ISO-Format darstellt wie {{jsxref("Date/toISOString", "toISOString()")}}.

{{InteractiveExample("JavaScript Demo: Date.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette, die das gegebene Datum im [Datum-Zeit-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß universeller Zeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Bei gültigen Daten ist der Rückgabewert derselbe wie der von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt serialisiert wird. Diese Methode ist im Allgemeinen dazu gedacht, {{jsxref("Date")}}-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung auf nützliche Weise zu serialisieren. Anschließend können sie mithilfe des {{jsxref("Date/Date", "Date()")}}-Konstruktors als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

Die Methode versucht zunächst, ihren `this`-Wert [in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem sie der Reihe nach die Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} aufruft. Wenn das Ergebnis eine [nicht-endliche Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, bei dem {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn der umgewandelte primitive Wert keine Zahl ist oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht überprüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Das Aufrufen von `Date.prototype.toJSON()` auf Nicht-`Date`-Objekten schlägt jedoch fehl, es sei denn, die primitive Zahlenrepräsentation des Objekts ist `NaN`, oder das Objekt verfügt ebenfalls über eine `toISOString()`-Methode.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierung mit Rückkonvertierung

Beim Parsen von JSON, das Datumszeichenketten enthält, können Sie den {{jsxref("Date/Date", "Date()")}}-Konstruktor verwenden, um diese in die ursprünglichen Date-Objekte zu konvertieren.

```js
const fileData = {
  author: "Maria",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const response = JSON.stringify(fileData);

// Imagine transmission through network

const data = JSON.parse(response, (key, value) => {
  if (key === "createdAt" || key === "updatedAt") {
    return new Date(value);
  }
  return value;
});

console.log(data);
```

> [!NOTE]
> Der Reviver von `JSON.parse()` muss auf die erwartete Struktur der Nutzlast abgestimmt sein, da die Serialisierung _unumkehrbar_ ist: Es ist nicht möglich, zwischen einem String, der ein Datum darstellt, und einem normalen String zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
