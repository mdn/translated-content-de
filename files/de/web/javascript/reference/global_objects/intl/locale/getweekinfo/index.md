---
title: Intl.Locale.prototype.getWeekInfo()
short-title: getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getWeekInfo()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt ein `weekInfo`-Objekt mit den Eigenschaften `firstDay`, `weekend` und `minimalDays` für diese Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als ein Accessor-Property namens `weekInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.weekInfo === locale.weekInfo` `false` zurückgibt. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Wocheninformationen darstellt, die mit den Locale-Daten verbunden sind, wie in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) angegeben. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine Ganzzahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Tag der Woche für die Locale angibt. Üblicherweise 1, 5, 6 oder 7.
- `weekend`
  - : Ein Array von Ganzzahlen zwischen 1 und 7, das die Wochenendtage für die Locale angibt. Dies ist normalerweise zusammenhängend, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays`
  - : Eine Ganzzahl zwischen 1 und 7 (üblicherweise 1 und 4), die die minimal erforderlichen Tage in der ersten Woche eines Monats oder Jahres angibt, für Berechnungen nach Woche-des-Jahres oder Woche-des-Monats (z.B. die 20. Woche des Jahres). Im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Kalender muss die erste Woche eines Jahres beispielsweise mindestens 4 Tage in diesem Jahr haben, sodass, wenn der 1. Januar ein Freitag, Samstag oder Sonntag ist, er als Teil der letzten Woche des Vorjahres nummeriert wird.

## Beispiele

### Erhalten der Wocheninformationen

Gibt die Wocheninformationen für eine gegebene `Locale` zurück.

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
