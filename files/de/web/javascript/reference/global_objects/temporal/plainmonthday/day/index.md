---
title: Temporal.PlainMonthDay.prototype.day
short-title: day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/day
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`day`** Zugriffs-Eigenschaft von {{jsxref("Temporal.PlainMonthDay")}} Instanzen gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt. Dies entspricht der Tagesnummer, die Sie im Kalender sehen würden und ist abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).

Der Set-Zugriff von `day` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern. Verwenden Sie die {{jsxref("Temporal/PlainMonthDay/with", "with()")}} Methode, um ein neues `Temporal.PlainMonthDay` Objekt mit dem gewünschten neuen Wert zu erstellen.

Für allgemeine Informationen und weitere Beispiele siehe {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

## Beispiele

### Verwendung von day

```js
const md = Temporal.PlainMonthDay.from("07-01"); // ISO 8601 calendar
console.log(md.day); // 1

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md2.day); // 22; it is May 22 in the Chinese calendar
```

### Ändern von day

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md.with({ day: 15 });
console.log(newMD.toString()); // 07-15
```

Standardmäßig beschränkt `with()` den Tag auf den Bereich gültiger Werte. So können Sie `{ day: 1 }` verwenden, um den Tag auf den ersten Tag des Monats zu setzen, selbst wenn der erste Tag nicht die Nummer `1` hat. Ebenso wird Folgendes den Tag auf den letzten Tag des Monats setzen:

```js
const md = Temporal.PlainMonthDay.from("07-01");
const lastMD = md.with({ day: Number.MAX_VALUE }); // 07-31
```

Für den Zweck von `PlainMonthDay` wird der Februar immer als 29 Tage umfassend betrachtet.

```js
const md = Temporal.PlainMonthDay.from("02-01");
const lastMD = md.with({ day: Number.MAX_VALUE }); // 02-29
console.log(lastMD.day); // 29
```

Für andere Kalender, solange es ein Jahr gibt, in dem der Monat-Tag gültig ist, wird der Monat-Tag als gültig betrachtet, und das zugrunde liegende Referenzjahr kann sich daher ändern. Zum Beispiel:

```js
const md = Temporal.PlainMonthDay.from({
  monthCode: "M02",
  day: 29,
  calendar: "hebrew",
});
console.log(md.toString()); // 1972-11-06[u-ca=hebrew]
console.log(md.toLocaleString("en-US", { calendar: "hebrew" })); // 29 Heshvan
const lastMD = md.with({ day: Number.MAX_VALUE });
// 30 Heshvan does not exist in 1972, so the reference year changes to 1971
console.log(lastMD.toString()); // 1971-11-18[u-ca=hebrew]
console.log(lastMD.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Heshvan
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
