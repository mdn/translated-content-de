---
title: Temporal.ZonedDateTime.prototype.second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/second
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Die Zugriffs-Eigenschaft **`second`** von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit repräsentiert.

Der Set-Zugriffs-Methoden von `second` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}.

Für `ZonedDateTime` kann `second` aufgrund von Offset-Änderungen nicht kontinuierlich sein. Obwohl dies viel seltener vorkommt als Änderungen von `hour` oder `minute` (da Zeitumstellungen normalerweise in ganzen Stunden erfolgen), kann es dennoch auftreten.

## Beispiele

### Verwendung von second

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.second); // 56
```

### Nicht-kontinuierliche Sekunde

In der Regel geht `second` immer von 0 bis 59 und dann zurück zu 0, selbst beim Durchlaufen einer Zeitumstellung. Es gibt einen bemerkenswerten Fall, in dem die Sekunde nicht kontinuierlich sein kann: die Standardisierung der Zeitzonen. Zu Beginn des 20. Jahrhunderts verwendeten die meisten Länder ihre eigenen Zeitzonen, die oft keine volle Stunde vom UTC abwichen. Zum Beispiel hatte Paris früher einen Offset von UTC+0:09:21, der am 11. März 1911 auf UTC+0 geändert wurde.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:59+00:09:21[Europe/Paris]",
);
console.log(dt.second); // 59
const dt2 = dt.add({ seconds: 1 });
console.log(dt2.second); // 39
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

Aus diesem Grund sollten Sie immer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} und {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} bevorzugen, um Daten und Zeiten zu manipulieren, anstatt die `second`-Eigenschaft direkt zu ändern.

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
