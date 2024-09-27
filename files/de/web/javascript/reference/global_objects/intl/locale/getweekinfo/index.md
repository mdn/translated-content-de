---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getWeekInfo()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt ein `weekInfo`-Objekt mit den Eigenschaften `firstDay`, `weekend` und `minimalDays` für diese Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Zugriffs-Property namens `weekInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu verhindern, dass `locale.weekInfo === locale.weekInfo` `false` ergibt. Weitere Informationen finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das Wocheninformationen darstellt, die mit den Locale-Daten verbunden sind, wie in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) angegeben. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine Zahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Tag der Woche für die Locale angibt. Üblicherweise 1, 5, 6 oder 7.
- `weekend`
  - : Ein Array von Zahlen zwischen 1 und 7, das die Wochenendtage für die Locale angibt. Dies ist normalerweise kontinuierlich, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays`
  - : Eine Zahl zwischen 1 und 7 (üblich 1 oder 4), die die minimalen Tage angibt, die in der ersten Woche eines Monats oder Jahres erforderlich sind, um Berechnungen wie Woche-des-Jahres oder Woche-des-Monats durchzuführen (z.B. die 20. Woche des Jahres). Im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Kalender muss beispielsweise die erste Woche eines Jahres mindestens 4 Tage in diesem Jahr haben. Wenn also der 1. Januar ein Freitag, Samstag oder Sonntag ist, wird er als Teil der letzten Woche des vorherigen Jahres gezählt.

## Beispiele

### Abrufen der Wocheninformationen

Rückgabe der Wocheninformationen für eine gegebene `Locale`.

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
