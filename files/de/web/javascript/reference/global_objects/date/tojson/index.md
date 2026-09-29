---
title: Date.prototype.toJSON()
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 13d5331637ae88b41af236e4b3d1b6c901d08f69
---

Die Methode **`toJSON()`** von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der das Datum im selben ISO-Format wie {{jsxref("Date/toISOString", "toISOString()")}} darstellt.

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

Ein String, der das angegebene Datum gemäß der Weltzeit im [Format für Datums- und Uhrzeitangaben](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Bei gültigen Datumsangaben entspricht der Rückgabewert dem von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die Methode `toJSON()` wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt in einen String umgewandelt wird. Die Methode dient im Allgemeinen dazu, {{jsxref("Date")}}-Objekte bei der {{Glossary("JSON", "JSON")}}-Serialisierung standardmäßig sinnvoll zu serialisieren. Anschließend können sie mithilfe des Konstruktors {{jsxref("Date/Date", "Date()")}} innerhalb des Revivers von {{jsxref("JSON.parse()")}} deserialisiert werden.

Die Methode versucht zunächst, ihren `this`-Wert [in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dazu ruft sie der Reihe nach dessen Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} auf. Ist das Ergebnis eine [nicht endliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, dessen {{jsxref("Date/valueOf", "valueOf()")}} den Wert {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn der umgewandelte primitive Wert keine Zahl oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht prüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Der Aufruf von `Date.prototype.toJSON()` für Objekte, die keine `Date`-Objekte sind, schlägt jedoch fehl, sofern die primitive Zahlendarstellung des Objekts nicht `NaN` ist oder das Objekt nicht ebenfalls eine Methode `toISOString()` besitzt.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierung und anschließende Deserialisierung

Wenn Sie JSON mit Datums-Strings parsen, können Sie diese mit dem Konstruktor {{jsxref("Date/Date", "Date()")}} wieder in die ursprünglichen Datumsobjekte umwandeln.

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
> Der Reviver von `JSON.parse()` muss auf die erwartete Struktur der Daten abgestimmt sein, da die Serialisierung _unumkehrbar_ ist: Ein String, der ein Datum darstellt, lässt sich nicht von einem gewöhnlichen String unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
