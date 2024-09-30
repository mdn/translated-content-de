---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getTime()`** Methode von {{jsxref("Date")}} Instanzen gibt die Anzahl der Millisekunden für dieses Datum seit dem [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück, die als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist.

{{EmbedInteractiveExample("pages/js/date-gettime.html", "shorter")}}

## Syntax

```js-nolint
getTime()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in Millisekunden für dieses Datum repräsentiert. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`Date` Objekte werden grundlegend durch einen [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dargestellt, und diese Methode ermöglicht Ihnen, den Timestamp abzurufen. Sie können diese Methode verwenden, um einem anderen {{jsxref("Date")}} Objekt ein Datum und eine Uhrzeit zuzuweisen. Diese Methode ist funktional gleichwertig mit der {{jsxref("Date/valueof", "valueOf()")}} Methode.

## Beispiele

### Verwenden von getTime() zum Kopieren von Daten

Erstellen eines Datumsobjekts mit demselben Zeitwert.

```js
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Messung der Ausführungszeit

Das Subtrahieren von zwei aufeinanderfolgenden `getTime()` Aufrufen auf neu generierten {{jsxref("Date")}} Objekten liefert die Zeitspanne zwischen diesen beiden Aufrufen. Dies kann verwendet werden, um die Ausführungszeit einiger Operationen zu berechnen. Siehe auch {{jsxref("Date.now()")}}, um das Instanziieren unnötiger {{jsxref("Date")}} Objekte zu vermeiden.

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

> [!NOTE]
> In Browsern, die das hochauflösende Zeitmessungs-Feature der [Performance API](/de/docs/Web/API/Performance_API) unterstützen, kann [`Performance.now()`](/de/docs/Web/API/Performance/now) verlässlichere und präzisere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} liefern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
