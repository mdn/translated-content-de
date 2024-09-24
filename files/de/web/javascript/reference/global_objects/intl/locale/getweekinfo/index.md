---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getWeekInfo()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt ein `weekInfo`-Objekt mit den Eigenschaften `firstDay`, `weekend` und `minimalDays` für diese Locale zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffs-Eigenschaft namens `weekInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie nun als Methode implementiert, um zu verhindern, dass `locale.weekInfo === locale.weekInfo` `false` zurückgibt. Überprüfen Sie die [Tabelle zur Browserkompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die Wocheninformation darstellt, die mit den Locale-Daten angegeben in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) assoziiert ist. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine Ganzzahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Tag der Woche für die Locale angibt. Häufig 1, 5, 6 oder 7.
- `weekend`
  - : Ein Array von Ganzzahlen zwischen 1 und 7, die die Wochenendtage für die Locale angeben. Dies ist normalerweise kontinuierlich, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays`
  - : Eine Ganzzahl zwischen 1 und 7 (häufig 1 und 4), die die Mindestanzahl der Tage angibt, die in der ersten Woche eines Monats oder Jahres erforderlich sind, für Berechnungen der Woche-im-Jahr oder Woche-im-Monat (z.B. Die 20. Woche des Jahres). Zum Beispiel muss im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Kalender die erste Woche eines Jahres mindestens 4 Tage in diesem Jahr haben; wenn also der 1. Januar ein Freitag, Samstag oder Sonntag ist, wird er als Teil der letzten Woche des Vorjahres nummeriert.

## Beispiele

### Abrufen der Wocheninformationen

Geben Sie die Wocheninformation für eine gegebene `Locale` zurück.

```js
const he = new Intl.Locale("he"); // Hebräisch (Israel)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6], minimalDays: 1 }

const af = new Intl.Locale("af"); // Afrikaans (Südafrika)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7], minimalDays: 1 }

const enGB = new Intl.Locale("en-GB"); // Englisch (Vereinigtes Königreich)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7], minimalDays: 4 }

const arAF = new Intl.Locale("ar-AF"); // Arabisch (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5], minimalDays: 1 }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Malediven)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7], minimalDays: 1 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
