---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getTime()`**-Methode von Instanzen des {{jsxref("Date")}} gibt die Anzahl der Millisekunden für dieses Datum seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück, die als Mitternacht zu Beginn des 1. Januar 1970 UTC definiert ist.

{{EmbedInteractiveExample("pages/js/date-gettime.html", "shorter")}}

## Syntax

```js-nolint
getTime()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date), in Millisekunden, dieses Datums repräsentiert. Gibt `NaN` zurück, wenn das Datum [ungültig](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) ist.

## Beschreibung

`Date`-Objekte werden im Wesentlichen durch einen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) dargestellt, und diese Methode ermöglicht es Ihnen, den Zeitstempel abzurufen. Sie können diese Methode verwenden, um einem anderen {{jsxref("Date")}}-Objekt ein Datum und eine Uhrzeit zuzuweisen. Diese Methode ist funktionell äquivalent zur {{jsxref("Date/valueof", "valueOf()")}}-Methode.

## Beispiele

### Verwendung von getTime() zum Kopieren von Daten

Erstellen eines Date-Objekts mit dem identischen Zeitwert.

```js
// Da der Monat nullbasiert ist, ist der Geburtstag am 10. Januar 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Messung der Ausführungszeit

Das Subtrahieren von zwei aufeinanderfolgenden `getTime()`-Aufrufen auf neu erstellten {{jsxref("Date")}}-Objekten gibt die Zeitspanne zwischen diesen beiden Aufrufen an. Dies kann verwendet werden, um die Ausführungszeit einiger Operationen zu berechnen. Siehe auch {{jsxref("Date.now()")}}, um die Instanziierung unnötiger {{jsxref("Date")}}-Objekte zu vermeiden.

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
> In Browsern, die das Feature der hochauflösenden Zeit der {{domxref("Performance API", "", "", "nocode")}} unterstützen, kann {{domxref("Performance.now()")}} zuverlässigere und genauere Messungen der verstrichenen Zeit als {{jsxref("Date.now()")}} bereitstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
- {{jsxref("Date.now()")}}
