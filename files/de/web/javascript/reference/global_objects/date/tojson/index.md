---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toJSON()`**-Methode von {{jsxref("Date")}} Instanzen gibt einen String zurück, der dieses Datum im gleichen ISO-Format darstellt wie {{jsxref("Date/toISOString", "toISOString()")}}.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum im [Date Time String Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) in universaler Zeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Bei gültigen Daten entspricht der Rückgabewert dem von {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt in einen String umgewandelt wird. Diese Methode ist generell dazu gedacht, standardmäßig {{jsxref("Date")}} Objekte während der [JSON](/de/docs/Glossary/JSON)-Serialisierung nützlich zu serialisieren, die dann mit dem {{jsxref("Date/Date", "Date()")}}-Konstruktor als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

Die Methode versucht zunächst, ihren `this`-Wert durch Aufrufen ihrer [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit „number“ als Hinweis), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}} Methoden in dieser Reihenfolge in ein [Primitive](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) zu konvertieren. Wenn das Ergebnis eine [nicht-endliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, dessen {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn das konvertierte Primitive keine Zahl oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht prüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Das Aufrufen von `Date.prototype.toJSON()` auf Nicht-`Date`-Objekten schlägt jedoch fehl, es sei denn, die Primitive-Repräsentation der Zahl des Objekts ist `NaN`, oder das Objekt hat auch eine `toISOString()`-Methode.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierungs-Rundreise

Beim Parsen von JSON, das Datums-Strings enthält, können Sie den {{jsxref("Date/Date", "Date()")}}-Konstruktor verwenden, um sie in die ursprünglichen Datum-Objekte wiederzubeleben.

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
> Der Reviver von `JSON.parse()` muss spezifisch für die erwartete Struktur der Nutzlast sein, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem String, der ein Datum darstellt, und einem normalen String zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
