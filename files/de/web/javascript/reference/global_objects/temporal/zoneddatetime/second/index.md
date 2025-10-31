---
title: Temporal.ZonedDateTime.prototype.second
short-title: second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/second
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`second`** Zugriffs-Eigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.

Der set-Zugriff von `second` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode, um ein neues `Temporal.ZonedDateTime` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele, siehe {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}.

Für `ZonedDateTime` kann `second` aufgrund von Offset-Änderungen nicht kontinuierlich sein. Dies ist viel seltener als Änderungen von `hour` oder `minute` (da die Sommerzeitverschiebungen normalerweise in ganzen Stunden erfolgen), kann aber dennoch vorkommen.

## Beispiele

### Verwendung von second

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.second); // 56
```

### Nicht kontinuierliche Sekunde

Typischerweise geht `second` immer von 0 bis 59 und dann wieder zurück zu 0, selbst beim Übergang durch eine Sommerzeitumstellung. Es gibt einen besonderen Fall, in dem die Sekunde nicht kontinuierlich sein kann: die Standardisierung der stündlichen Zeitzonen. Im frühen 20. Jahrhundert nutzten die meisten Länder ihre eigenen Zeitzonen, die oft nicht eine ganze Stunde von UTC abgewichen sind. Zum Beispiel hatte Paris früher eine Abweichung von UTC+0:09:21, die am 11. März 1911 auf UTC+0 geändert wurde.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:59+00:09:21[Europe/Paris]",
);
console.log(dt.second); // 59
const dt2 = dt.add({ seconds: 1 });
console.log(dt2.second); // 39
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

Aus diesem Grund sollten Sie immer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} und {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} bevorzugen, um Daten und Zeiten zu manipulieren, anstatt die `second` Eigenschaft direkt zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
