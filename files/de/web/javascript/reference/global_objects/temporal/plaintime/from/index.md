---
title: Temporal.PlainTime.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/from
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die statische Methode **`Temporal.PlainTime.from()`** erstellt ein neues `Temporal.PlainTime`-Objekt aus einem anderen `Temporal.PlainTime`-Objekt, einem Objekt mit Zeit-Eigenschaften oder einem [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format)-String.

## Syntax

```js-nolint
Temporal.PlainTime.from(info)
Temporal.PlainTime.from(info, options)
```

### Parameter

- `info`

  - : Eines der folgenden:

    - Eine {{jsxref("Temporal.PlainTime")}}-Instanz, die eine Kopie der Instanz erstellt.
    - Eine {{jsxref("Temporal.PlainDateTime")}}-Instanz, die die Zeit auf die gleiche Weise liefert wie {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainTime()")}}.
    - Eine {{jsxref("Temporal.ZonedDateTime")}}-Instanz, die die Zeit auf die gleiche Weise liefert wie {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}.
    - Ein [RFC 9557](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#rfc_9557_format)-String, der eine Zeit enthält.
    - Ein Objekt, das mindestens eine der folgenden Eigenschaften enthält (in der Reihenfolge, in der sie abgerufen und validiert werden):

      - {{jsxref("Temporal/PlainTime/hour", "hour")}}
      - {{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}
      - {{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}
      - {{jsxref("Temporal/PlainTime/minute", "minute")}}
      - {{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}
      - {{jsxref("Temporal/PlainTime/second", "second")}}

      Sie werden auf ganze Zahlen gekürzt. Werte außerhalb des Bereichs werden durch die `overflow`-Option behandelt.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgende Eigenschaft enthält:
    - `overflow` {{optional_inline}}
      - : Ein String, der das Verhalten angibt, wenn eine Zeitkomponente außerhalb des Bereichs liegt (bei Verwendung des Objekts `info`). Mögliche Werte sind:
        - `"constrain"` (Standard)
          - : Die Zeitkomponente wird in den gültigen Bereich eingegrenzt.
        - `"reject"`
          - : Ein {{jsxref("RangeError")}} wird geworfen, wenn die Zeitkomponente außerhalb des Bereichs liegt.

### Rückgabewert

Ein neues `Temporal.PlainTime`-Objekt, das die von `info` angegebene Zeit darstellt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird in einem der folgenden Fälle geworfen:
    - `info` ist kein Objekt mit mindestens einer erkannten Eigenschaft oder ein String.
    - `options` ist kein Objekt oder `undefined`.
- {{jsxref("RangeError")}}
  - : Wird geworfen, wenn die angegebenen numerischen Eigenschaften außerhalb des Bereichs liegen und `options.overflow` auf `"reject"` eingestellt ist.

## Beispiele

### Erstellen einer PlainTime aus einem Objekt

```js
const t1 = Temporal.PlainTime.from({ hour: 0 });
console.log(t1.toString()); // "00:00:00"

const t2 = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
console.log(t2.toString()); // "12:34:56"

const t3 = Temporal.PlainTime.from({
  hour: 12,
  minute: 34,
  second: 56,
  millisecond: 123,
  microsecond: 456,
  nanosecond: 789,
});
console.log(t3.toString()); // "12:34:56.123456789"
```

### Kontrollieren des Überlaufverhaltens

Standardmäßig werden Werte außerhalb des Bereichs in den gültigen Bereich eingegrenzt:

```js
const t1 = Temporal.PlainTime.from({ hour: 25 });
console.log(t1.toString()); // "23:00:00"

const t2 = Temporal.PlainTime.from({ hour: 25, minute: 60 });
console.log(t2.toString()); // "23:59:00"
```

Sie können dieses Verhalten ändern, um stattdessen einen Fehler zu werfen:

```js
Temporal.PlainTime.from({ hour: 25 }, { overflow: "reject" });
// RangeError: time value "hour" not in 0..23: 25
```

### Erstellen einer PlainTime aus einem String

```js
const t1 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(t1.toLocaleString("en-US", { timeStyle: "full" }));
// 12:34:56 PM
```

### Erstellen einer PlainTime aus einer anderen Temporal-Instanz

```js
const dt = Temporal.PlainDateTime.from("2021-07-01T12:00");
const t = Temporal.PlainTime.from(dt);
console.log(t.toString()); // "12:00:00"

const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T00:00+08:00[Asia/Shanghai]",
);
const t2 = Temporal.PlainTime.from(zdt);
console.log(t2.toString()); // "00:00:00"

const t3 = Temporal.PlainTime.from(t);
console.log(t3.toString()); // "12:00:00"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
