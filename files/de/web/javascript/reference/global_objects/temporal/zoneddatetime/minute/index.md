---
title: Temporal.ZonedDateTime.prototype.minute
short-title: minute
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/minute
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}{{SeeCompatTable}}

Die **`minute`**-Zugriffseigenschaft von Instanzen des {{jsxref("Temporal.ZonedDateTime")}} gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit repräsentiert.

Der Set-Accessor von `minute` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, um ein neues `Temporal.ZonedDateTime`-Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}.

Für `ZonedDateTime` kann `minute` aufgrund von Offset-Änderungen nicht kontinuierlich sein. Obwohl seltener als `hour`-Änderungen (da Zeitumstellungen in der Regel ganze Stunden verschieben), kann es dennoch vorkommen.

## Beispiele

### Verwendung von minute

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.minute); // 34
```

### Nicht-kontinuierliche Minute

Typischerweise verläuft `minute` immer von 0 bis 59 und dann zurück zu 0, selbst beim Übergang durch eine Zeitumstellung. Es gibt einen besonderen Fall, in dem DST eine 30-minütige Verschiebung aufweist: Lord Howe Island in Australien, das zwischen +10:30 und +11:00 wechselt. In diesem Fall kann die Minute nicht kontinuierlich sein.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-10-03T01:59:00+10:30[Australia/Lord_Howe]",
);
console.log(dt.minute); // 59
const dt2 = dt.add({ minutes: 1 });
console.log(dt2.minute); // 30
console.log(dt2.toString()); // 2021-10-03T02:30:00+11:00[Australia/Lord_Howe]
```

Es gibt einen zweiten ungewöhnlichen Fall, in dem die Minute nicht kontinuierlich sein kann: die Standardisierung der stündlichen Zeitzonen. Im frühen 20. Jahrhundert verwendeten die meisten Länder ihre eigenen Zeitzonen, die oft nicht eine ganze Stunde von UTC abwichen. Zum Beispiel hatte Paris früher einen Offset von UTC+0:09:21, der am 11. März 1911 auf UTC+0 geändert wurde.

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
