---
title: Intl.Locale.prototype.getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die Methode **`getWeekInfo()`** von {{jsxref("Intl.Locale")}} Instanzen gibt ein `weekInfo`-Objekt mit den Eigenschaften `firstDay`, `weekend` und `minimalDays` für diese Locale zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffs-Eigenschaft namens `weekInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.weekInfo === locale.weekInfo` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt, das die Wocheninformationen repräsentiert, die mit den Locale-Daten in [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) spezifiziert sind. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine Ganzzahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Tag der Woche für die Locale angibt. Üblicherweise 1, 5, 6 oder 7.
- `weekend`
  - : Ein Array von Ganzzahlen zwischen 1 und 7, das die Wochenendtage für die Locale angibt. Dies ist üblicherweise kontinuierlich, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays`
  - : Eine Ganzzahl zwischen 1 und 7 (üblicherweise 1 und 4), die die minimal erforderlichen Tage in der ersten Woche eines Monats oder Jahres angibt, für Berechnungen der Woche im Jahr oder Woche im Monat (z. B. die 20. Woche im Jahr). Im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Kalender muss zum Beispiel die erste Woche eines Jahres mindestens 4 Tage in diesem Jahr haben, sodass, wenn der 1. Januar ein Freitag, Samstag oder Sonntag ist, er als Teil der letzten Woche des vorherigen Jahres gezählt wird.

## Beispiele

### Erhalten der Wocheninformationen

Geben Sie die Wocheninformationen für eine gegebene `Locale` zurück.

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
