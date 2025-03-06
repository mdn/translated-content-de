---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`toJSON()`**-Methode von {{jsxref("Date")}}-Instanzen gibt eine Zeichenkette zurück, die dieses Datum im gleichen ISO-Format wie {{jsxref("Date/toISOString", "toISOString()")}} darstellt.

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

Eine Zeichenkette, die das angegebene Datum im [datetime-String-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß der Weltzeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Für gültige Daten ist der Rückgabewert derselbe wie der von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt als Zeichenkette dargestellt wird. Diese Methode ist im Allgemeinen dazu gedacht, {{jsxref("Date")}}-Objekte während der {{Glossary("JSON", "JSON")}}-Serialisierung nützlich zu serialisieren, die dann unter Verwendung des {{jsxref("Date/Date", "Date()")}}-Konstruktors als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

Die Methode versucht zunächst, ihren `this`-Wert [in ein primitives Element zu konvertieren](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem sie nacheinander ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit dem Hinweis `"number"`), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} aufruft. Wenn das Ergebnis eine [nicht-endliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, dessen {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn das konvertierte Primitive keine Zahl oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht überprüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Der Aufruf von `Date.prototype.toJSON()` für Nicht-`Date`-Objekte schlägt jedoch fehl, es sei denn, die numerische Primitive-Darstellung des Objekts ist `NaN` oder das Objekt hat ebenfalls eine `toISOString()`-Methode.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierungsrundlauf

Beim Parsen von JSON, das Datumszeichenfolgen enthält, können Sie den {{jsxref("Date/Date", "Date()")}}-Konstruktor verwenden, um sie wieder in die ursprünglichen Datumsobjekte umzuwandeln.

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
> Der Reviver von `JSON.parse()` muss speziell für die von Ihnen erwartete Payload-Struktur ausgelegt sein, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich zu unterscheiden, ob eine Zeichenkette ein Datum darstellt oder eine normale Zeichenkette ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
