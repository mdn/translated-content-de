---
title: Intl.Locale.prototype.getHourCycles()
short-title: getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Methode **`getHourCycles()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste mit einem oder mehreren eindeutigen Kennungen für Stundenzyklen dieser Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Accessor-Eigenschaft namens `hourCycles` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie nun als Methode implementiert. So wird vermieden, dass `locale.hourCycles === locale.hourCycles` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getHourCycles()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle gemäß den [Regionseinstellungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences) für die `Locale` gebräuchlichen Stundenzyklustypen enthält, sortiert nach absteigender Präferenz. Wenn für die `Locale` bereits ein Wert für [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) festgelegt ist, enthält das zurückgegebene Array nur diesen Wert.

Im Folgenden sind die unterstützten Stundenzyklustypen aufgeführt.

### Unterstützte Stundenzyklustypen

- `h12`
  - : Stundensystem von 1 bis 12; entspricht „h“ in Mustern. Die 12-Stunden-Uhr, bei der Mitternacht um 12:00 am beginnt. Wird beispielsweise in den Vereinigten Staaten verwendet.
- `h23`
  - : Stundensystem von 0 bis 23; entspricht „H“ in Mustern. Die 24-Stunden-Uhr, bei der Mitternacht um 0:00 beginnt.
- `h11`
  - : Stundensystem von 0 bis 11; entspricht „K“ in Mustern. Die 12-Stunden-Uhr, bei der Mitternacht um 0:00 am beginnt. Wird hauptsächlich in Japan verwendet.
- `h24`
  - : Stundensystem von 1 bis 24; entspricht „k“ in Mustern. Die 24-Stunden-Uhr, bei der Mitternacht um 24:00 beginnt. Wird nirgendwo verwendet.

## Beispiele

### Unterstützte Stundenzyklen abrufen

Wenn für das `Locale`-Objekt noch kein `hourCycle` festgelegt ist, listet `getHourCycles()` alle gebräuchlichen Kennungen für Stundenzyklen der angegebenen `Locale` auf. Beispiele für das explizite Festlegen eines `hourCycle` finden Sie in den [Beispielen zu `hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

### Regionsüberschreibungen

Die Erweiterungs-Subtags `rg` und `sd` ändern die [Regionseinstellungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences). Dadurch können andere Kennungen für Stundenzyklen zurückgegeben werden, während der Basisname gleich bleibt.

```js
const enUS = new Intl.Locale("en-US");
console.log(enUS.getHourCycles()); // ["h12"]

const enUSInJP = new Intl.Locale("en-US-u-rg-jpzzzz");
console.log(enUSInJP.getHourCycles()); // ["h23"]

const enScot = new Intl.Locale("en-u-sd-gbsct");
console.log(enScot.getHourCycles()); // ["h23"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- [Unicode-Kennung für Stundenzyklen](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Spezifikation der Unicode Locale Data Markup Language
