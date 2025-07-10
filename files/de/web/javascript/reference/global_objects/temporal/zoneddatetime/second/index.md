---
title: Temporal.ZonedDateTime.prototype.second
short-title: second
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/second
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Die **`second`** Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}} Instanzen gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundekomponente dieser Zeit darstellt.

Der set-Zugriff der `second`-Eigenschaft ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Nutzen Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele, siehe {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}.

Für `ZonedDateTime` kann `second` aufgrund von Offset-Änderungen diskontinuierlich sein. Obwohl dies seltener ist als Änderungen bei `hour` oder `minute` (da Zeitumstellungen normalerweise ganze Stunden betreffen), kann es dennoch vorkommen.

## Beispiele

### Verwendung von second

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.second); // 56
```

### Diskontinuierliche Sekunde

Normalerweise wechselt `second` immer von 0 zu 59 und dann wieder auf 0, selbst beim Übergang durch eine Zeitumstellung. Es gibt einen besonderen Fall, in dem die Sekunde diskontinuierlich sein kann: die Standardisierung stündlicher Zeitzonen. Im frühen 20. Jahrhundert nutzten die meisten Länder ihre eigenen Zeitzonen, die oft keinen vollen Stundenshift von UTC hatten. Zum Beispiel hatte Paris früher einen Offset von UTC+0:09:21, der am 11. März 1911 auf UTC+0 geändert wurde.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:59+00:09:21[Europe/Paris]",
);
console.log(dt.second); // 59
const dt2 = dt.add({ seconds: 1 });
console.log(dt2.second); // 39
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

Aus diesem Grund sollten Sie immer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} und {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} verwenden, um Daten und Zeiten zu manipulieren, anstatt die `second`-Eigenschaft direkt zu ändern.

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
