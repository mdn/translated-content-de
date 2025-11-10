---
title: Intl.Locale.prototype.getWeekInfo()
short-title: getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`getWeekInfo()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt ein `weekInfo`-Objekt mit den Eigenschaften `firstDay`, `weekend` und `minimalDays` für diese Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Accessor-Eigenschaft `weekInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.weekInfo === locale.weekInfo` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die Wocheninformationen darstellt, die mit den Locale-Daten verknüpft sind, die in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) angegeben sind. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine ganze Zahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Wochentag für die Locale angibt. Üblicherweise 1, 5, 6 oder 7.
- `weekend`
  - : Ein Array von ganzen Zahlen zwischen 1 und 7, das die Wochenendtage für die Locale angibt. Dies ist normalerweise kontinuierlich, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays`
  - : Eine ganze Zahl zwischen 1 und 7 (üblicherweise 1 und 4), die die minimalen Tage angibt, die in der ersten Woche eines Monats oder Jahres erforderlich sind, für Berechnungen der Woche-des-Jahres oder Woche-des-Monats (z. B. die 20. Woche des Jahres). Im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Kalender muss beispielsweise die erste Woche eines Jahres mindestens 4 Tage in diesem Jahr haben, so dass, wenn der 1. Januar ein Freitag, Samstag oder Sonntag ist, er als Teil der letzten Woche des vorherigen Jahres nummeriert wird.

## Beispiele

### Erhalten der Wocheninformationen

Geben Sie die Wocheninformationen für eine bestimmte `Locale` zurück.

```js
const he = new Intl.Locale("he"); // Hebrew (Israel)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af"); // Afrikaans (South Africa)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB"); // English (United Kingdom)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const arAF = new Intl.Locale("ar-AF"); // Arabic (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5], minimalDays: 1 }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Maldives)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7], minimalDays: 1 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
