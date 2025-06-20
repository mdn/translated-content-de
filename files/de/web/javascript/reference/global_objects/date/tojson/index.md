---
title: Date.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toJSON()`** Methode von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der dieses Datum im gleichen ISO-Format wie {{jsxref("Date/toISOString", "toISOString()")}} darstellt.

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

Ein String, der das gegebene Datum im [datetime string format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß Weltzeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Für gültige Daten entspricht der Rückgabewert dem von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt in einen String umgewandelt wird. Diese Methode ist im Allgemeinen dazu gedacht, {{jsxref("Date")}}-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann unter Verwendung des {{jsxref("Date/Date", "Date()")}}-Konstruktors als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

Die Methode versucht zuerst, ihren `this`-Wert [in einen primitiven Wert zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem sie der Reihe nach ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} Methoden aufruft. Wenn das Ergebnis eine [nicht-finite](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, dessen {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn der konvertierte primitive Wert keine Zahl oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht überprüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Das Aufrufen von `Date.prototype.toJSON()` auf Nicht-`Date`-Objekten schlägt jedoch fehl, es sei denn, die numerische Primitive-Darstellung des Objekts ist `NaN`, oder das Objekt hat auch eine `toISOString()`-Methode.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierungs-Rundreise

Beim Parsen von JSON, das Datumsstrings enthält, können Sie den {{jsxref("Date/Date", "Date()")}}-Konstruktor verwenden, um sie in die ursprünglichen Datum-Objekte zu verwandeln.

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
> Der Reviver von `JSON.parse()` muss spezifisch für die erwartete Payload-Form sein, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem String, der ein Datum darstellt, und einem normalen String zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
