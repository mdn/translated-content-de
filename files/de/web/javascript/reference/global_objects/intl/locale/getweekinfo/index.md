---
title: Intl.Locale.prototype.getWeekInfo()
short-title: getWeekInfo()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Methode **`getWeekInfo()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt Informationen über die Woche für die Locale zurück, beispielsweise den ersten Wochentag und die Wochenendtage.

> [!NOTE]
> In einigen Versionen mancher Browser war diese Methode als Accessor-Eigenschaft namens `weekInfo` implementiert. Da sie jedoch bei jedem Zugriff ein neues Objekt zurückgibt, ist sie jetzt als Methode implementiert. So wird verhindert, dass `locale.weekInfo === locale.weekInfo` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getWeekInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit Wocheninformationen, die den Locale-Daten gemäß den [Week Elements von UTS 35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) und den [Regionseinstellungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences) der Locale zugeordnet sind. Es hat die folgenden Eigenschaften:

- `firstDay`
  - : Eine Ganzzahl zwischen 1 (Montag) und 7 (Sonntag), die den ersten Wochentag für die Locale angibt. Häufig ist dies 1, 5, 6 oder 7. Wenn für die `Locale` bereits ein Wert für [`firstDayOfWeek`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek) festgelegt ist, bezeichnet `firstDay` denselben Tag als Zahl.
- `weekend`
  - : Ein Array von Ganzzahlen zwischen 1 und 7, das die Wochenendtage für die Locale angibt. Diese Tage liegen normalerweise unmittelbar hintereinander, da UTS 35 stattdessen `weekendStart` und `weekendEnd` speichert.
- `minimalDays` {{deprecated_inline}} {{non-standard_inline}}
  - : Eine Ganzzahl zwischen 1 und 7 (häufig 1 oder 4), die angibt, wie viele Tage mindestens in der ersten Woche eines Monats oder Jahres liegen müssen, damit diese Woche bei der Berechnung der Kalenderwoche oder der Woche eines Monats als erste Woche zählt (z. B. die 20. Woche des Jahres). Im Kalender nach [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) muss die erste Woche eines Jahres beispielsweise mindestens 4 Tage dieses Jahres enthalten. Fällt der 1. Januar auf einen Freitag, Samstag oder Sonntag, wird er daher der letzten Woche des Vorjahres zugeordnet.

    > [!NOTE]
    > Diese Eigenschaft wurde aus der Spezifikation entfernt und wird aus Browsern entfernt, da Benutzer im Allgemeinen erwarten, dass unabhängig von der Locale die ISO-Regeln angewendet werden.

## Beispiele

### Wocheninformationen abrufen

Die Methode `getWeekInfo()` gibt die Wocheninformationen für eine bestimmte `Locale` zurück. Beispiele für das explizite Festlegen von `firstDayOfWeek` finden Sie in den [Beispielen zu `firstDayOfWeek`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/firstDayOfWeek#examples).

```js
const he = new Intl.Locale("he"); // Hebrew (Israel)
console.log(he.getWeekInfo()); // { firstDay: 7, weekend: [5, 6] }

const af = new Intl.Locale("af"); // Afrikaans (South Africa)
console.log(af.getWeekInfo()); // { firstDay: 7, weekend: [6, 7] }

const enGB = new Intl.Locale("en-GB"); // English (United Kingdom)
console.log(enGB.getWeekInfo()); // { firstDay: 1, weekend: [6, 7] }

const arAF = new Intl.Locale("ar-AF"); // Arabic (Afghanistan)
console.log(arAF.getWeekInfo()); // { firstDay: 6, weekend: [4, 5] }

const dvMV = new Intl.Locale("dv-MV"); // Divehi (Maldives)
console.log(dvMV.getWeekInfo()); // { firstDay: 5, weekend: [6, 7] }
```

### Regionale Überschreibungen

Die Erweiterungs-Subtags `rg` und `sd` ändern die [Regionseinstellungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences). Dadurch können andere Wocheninformationen zurückgegeben werden, obwohl der Basisname gleich bleibt.

```js
const enUS = new Intl.Locale("en-US");
console.log(enUS.getWeekInfo()); // { firstDay: 7, weekend: [6, 7] }

const enUSInUK = new Intl.Locale("en-US-u-rg-gbzzzz");
console.log(enUSInUK.getWeekInfo()); // { firstDay: 1, weekend: [6, 7] }

const enScot = new Intl.Locale("en-u-sd-gbsct");
console.log(enScot.getWeekInfo()); // { firstDay: 1, weekend: [6, 7] }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
