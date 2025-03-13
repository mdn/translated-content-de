---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`toJSON()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der dieses Datum im gleichen ISO-Format darstellt wie {{jsxref("Date/toISOString", "toISOString()")}}.

{{InteractiveExample("JavaScript Demo: Date.prototype.toJSON()")}}

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

Ein String, der das angegebene Datum im [Datum-Zeit-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß Weltzeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Für gültige Daten entspricht der Rückgabewert dem von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt als String dargestellt wird. Diese Methode dient im Allgemeinen dazu, {{jsxref("Date")}}-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung standardmäßig nützlich zu serialisieren, die dann mit dem Konstruktor {{jsxref("Date/Date", "Date()")}} als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

Die Methode versucht zunächst, ihren `this`-Wert [in ein primitives](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) umzuwandeln, indem sie der Reihe nach seine `[Symbol.toPrimitive]()`-Methode (mit dem Hinweis `"number"`), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} Methoden aufruft. Wenn das Ergebnis eine [nicht-endliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, dessen {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn das konvertierte Primitive keine Zahl oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht überprüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Das Aufrufen von `Date.prototype.toJSON()` auf Nicht-`Date`-Objekten schlägt jedoch fehl, es sei denn, die primitive Zahlenrepräsentation des Objekts ist `NaN`, oder das Objekt verfügt ebenfalls über eine `toISOString()`-Methode.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierungs-Roundtrip

Beim Parsen von JSON, das Datumsstrings enthält, können Sie den {{jsxref("Date/Date", "Date()")}}-Konstruktor verwenden, um sie in die ursprünglichen Datumsobjekte wiederzubeleben.

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
> Der Reviver von `JSON.parse()` muss spezifisch für die Form der Nutzlast sein, die Sie erwarten, da die Serialisierung _irreversibel_ ist: es ist nicht möglich, zwischen einem String, der ein Datum darstellt, und einem normalen String zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
