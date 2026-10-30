---
title: Date.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

Die Methode **`toJSON()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der dieses Datum im selben ISO-Format wie {{jsxref("Date/toISOString", "toISOString()")}} darstellt.

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

Ein String, der das angegebene Datum im [Datums- und Zeitzeichenfolgenformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) gemäß der Weltzeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Bei gültigen Datumsangaben entspricht der Rückgabewert dem von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `Date`-Objekt vorkommt. Der serialisierte Wert kann anschließend mithilfe des Konstruktors {{jsxref("Date/Date", "Date()")}} im Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden.

Die Methode versucht zunächst, ihren `this`-Wert [in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dazu ruft sie der Reihe nach die Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hint), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} auf. Wenn das Ergebnis eine [nicht endliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, dessen {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls wird, wenn der umgewandelte primitive Wert keine Zahl oder eine endliche Zahl ist, der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht prüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Der Aufruf von `Date.prototype.toJSON()` für Objekte, die keine `Date`-Objekte sind, schlägt jedoch fehl, sofern die primitive Zahlendarstellung des Objekts nicht `NaN` ist oder das Objekt nicht ebenfalls über eine Methode `toISOString()` verfügt.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierung und Wiederherstellung

Wenn Sie JSON mit Datumszeichenfolgen parsen, können Sie diese mit dem Konstruktor {{jsxref("Date/Date", "Date()")}} wieder in die ursprünglichen Datumsobjekte umwandeln.

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
> Der Reviver von `JSON.parse()` muss auf die erwartete Struktur der Daten zugeschnitten sein, da die Serialisierung _nicht umkehrbar_ ist: Es ist nicht möglich, zwischen einem String, der ein Datum darstellt, und einem gewöhnlichen String zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
