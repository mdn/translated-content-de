---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getWeekInfo()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt ein `weekInfo`-Objekt mit den Eigenschaften `firstDay`, `weekend` und `minimalDays` für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Accessor-Eigenschaft namens `weekInfo` implementiert. Da jedoch bei jedem Zugriff ein neues Objekt zurückgegeben wird, ist sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.weekInfo === locale.weekInfo` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für weitere Details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die Wocheninformationen darstellt, die mit den Locale-Daten in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) angegeben sind. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine Ganzzahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Tag der Woche für die Locale angibt. Üblicherweise 1, 5, 6 oder 7.
- `weekend`
  - : Ein Array von Ganzzahlen zwischen 1 und 7, das die Wochenendtages für die Locale angibt. Dies ist normalerweise kontinuierlich, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays`
  - : Eine Ganzzahl zwischen 1 und 7 (üblicherweise 1 und 4), die die minimal erforderlichen Tage in der ersten Woche eines Monats oder Jahres für Berechnungen der Woche des Jahres oder der Woche des Monats angibt (z.B. die 20. Woche des Jahres). Zum Beispiel muss in der [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Kalender die erste Woche eines Jahres mindestens 4 Tage in diesem Jahr haben, sodass, wenn der 1. Januar ein Freitag, Samstag oder Sonntag ist, er als Teil der letzten Woche des Vorjahres gezählt wird.

## Beispiele

### Abrufen der Wocheninformationen

Rückgabe der Wocheninformationen für eine bestimmte `Locale`.

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
