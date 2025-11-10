---
title: Temporal.ZonedDateTime.prototype.minute
short-title: minute
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/minute
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Die **`minute`**-Zugriffseigenschaft von {{jsxref("Temporal.ZonedDateTime")}}-Instanzen gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.

Der Set-Accessor von `minute` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}.

Für `ZonedDateTime` kann `minute` aufgrund von Offset-Änderungen nicht kontinuierlich sein. Obwohl es viel seltener vorkommt als `hour`-Änderungen (weil Zeitumstellungen normalerweise in ganzen Stunden erfolgen), kann es dennoch vorkommen.

## Beispiele

### Verwendung von minute

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.minute); // 34
```

### Nicht kontinuierliche Minute

Typischerweise geht `minute` immer von 0 bis 59 und dann wieder zurück zu 0, selbst wenn eine Zeitumstellung durchlaufen wird. Ein besonderer Fall, bei dem die Sommerzeit eine 30-Minuten-Verschiebung hat, ist die Lord-Howe-Insel in Australien, die zwischen +10:30 und +11:00 wechselt. In diesem Fall kann die Minute nicht kontinuierlich sein.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-10-03T01:59:00+10:30[Australia/Lord_Howe]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 30
console.log(dt2.toString()); // 2021-10-03T02:30:00+11:00[Australia/Lord_Howe]
```

Es gibt einen zweiten speziellen Fall, in dem die Minute nicht kontinuierlich sein kann: die Standardisierung der stündlichen Zeitzonen. Im frühen 20. Jahrhundert verwendeten die meisten Länder ihre eigenen Zeitzonen, die oft keine ganze Stunde von UTC abgewichen waren. Zum Beispiel hatte Paris früher einen Offset von UTC+0:09:21, der am 11. März 1911 auf UTC+0 geändert wurde.

```js
const dt = Temporal.ZonedDateTime.from(
  "1911-03-10T23:59:00+00:09:21[Europe/Paris]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 50
console.log(dt2.toString()); // 1911-03-10T23:50:39+00:00[Europe/Paris]
```

Aus diesem Grund sollten Sie immer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} und {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} bevorzugen, um Daten und Zeiten zu manipulieren, anstatt die `minute`-Eigenschaft direkt zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
