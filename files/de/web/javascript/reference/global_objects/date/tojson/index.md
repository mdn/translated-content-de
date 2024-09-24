---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`toJSON()`**-Methode von {{jsxref("Date")}}-Instanzen gibt einen String zurück, der dieses Datum im gleichen ISO-Format wie {{jsxref("Date/toISOString", "toISOString()")}} darstellt.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein String, der das angegebene Datum im [date time string format](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) entsprechend der Universalzeit darstellt, oder `null`, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist. Für gültige Daten ist der Rückgabewert derselbe wie bei {{jsxref("Date/toISOString", "toISOString()")}}.

## Beschreibung

Die `toJSON()`-Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen, wenn ein `Date`-Objekt in einen String umgewandelt wird. Diese Methode soll allgemein standardmäßig {{jsxref("Date")}}-Objekte nützlich serialisieren während der [JSON](/de/docs/Glossary/JSON)-Serialisierung, die dann unter Verwendung des {{jsxref("Date/Date", "Date()")}}-Konstruktors als Reviver von {{jsxref("JSON.parse()")}} deserialisiert werden können.

Die Methode versucht zuerst, ihren `this`-Wert [in einen primitiven Wert umzuwandeln](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem sie nacheinander ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"number"` als Hinweis), {{jsxref("Object/valueOf", "valueOf()")}} und {{jsxref("Object/toString", "toString()")}}-Methoden aufruft. Wenn das Ergebnis eine [unendliche](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) Zahl ist, wird `null` zurückgegeben. (Dies entspricht im Allgemeinen einem ungültigen Datum, bei dem {{jsxref("Date/valueOf", "valueOf()")}} {{jsxref("NaN")}} zurückgibt.) Andernfalls, wenn der umgewandelte primitive Wert keine Zahl oder eine endliche Zahl ist, wird der Rückgabewert von {{jsxref("Date/toISOString", "this.toISOString()")}} zurückgegeben.

Beachten Sie, dass die Methode nicht überprüft, ob der `this`-Wert ein gültiges {{jsxref("Date")}}-Objekt ist. Jedoch schlägt der Aufruf von `Date.prototype.toJSON()` auf Nicht-`Date`-Objekten fehl, es sei denn, die nummerische primitive Darstellung des Objekts ist `NaN`, oder das Objekt hat ebenfalls eine `toISOString()`-Methode.

## Beispiele

### Verwendung von toJSON()

```js
const jsonDate = new Date(0).toJSON(); // '1970-01-01T00:00:00.000Z'
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 1970-01-01T00:00:00.000Z
```

### Serialisierungs-Round-Tripping

Beim Parsen von JSON, das Datumsstrings enthält, können Sie den {{jsxref("Date/Date", "Date()")}}-Konstruktor verwenden, um sie in die ursprünglichen Datumsobjekte zu überführen.

```js
const fileData = {
  author: "Maria",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const response = JSON.stringify(fileData);

// Vorstellung der Übertragung über das Netzwerk

const data = JSON.parse(response, (key, value) => {
  if (key === "createdAt" || key === "updatedAt") {
    return new Date(value);
  }
  return value;
});

console.log(data);
```

> [!NOTE]
> Der Reviver von `JSON.parse()` muss spezifisch für die erwartete Payload-Struktur sein, da die Serialisierung _irreversibel_ ist: Es ist nicht möglich, zwischen einem String, der ein Datum darstellt, und einem normalen String zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
