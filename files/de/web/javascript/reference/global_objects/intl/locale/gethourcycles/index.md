---
title: Intl.Locale.prototype.getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`getHourCycles()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren eindeutigen Stundenzyklus-Identifikatoren für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als ein Zugriffs-Property namens `hourCycles` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgab, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.hourCycles === locale.hourCycles` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getHourCycles()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle Stundenzyklus-Typen darstellt, die üblicherweise für die `Locale` verwendet werden, sortiert in absteigender Präferenz. Falls die `Locale` bereits einen [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Im Folgenden finden Sie eine Liste der unterstützten Stundenzyklus-Typen.

### Unterstützte Stundenzyklus-Typen

- `h12`
  - : Stundensystem mit 1–12; entspricht 'h' in Mustern. Die 12-Stunden-Uhr, wobei Mitternacht bei 12:00 Uhr beginnt. Wird beispielsweise in den Vereinigten Staaten verwendet.
- `h23`
  - : Stundensystem mit 0–23; entspricht 'H' in Mustern. Die 24-Stunden-Uhr, wobei Mitternacht bei 0:00 Uhr beginnt.
- `h11`
  - : Stundensystem mit 0–11; entspricht 'K' in Mustern. Die 12-Stunden-Uhr, wobei Mitternacht bei 0:00 Uhr beginnt. Wird überwiegend in Japan verwendet.
- `h24`
  - : Stundensystem mit 1–24; entspricht 'k' in Mustern. Die 24-Stunden-Uhr, wobei Mitternacht bei 24:00 Uhr beginnt. Wird nirgendwo verwendet.

## Beispiele

### Erhalt unterstützter Stundenzyklen

Wenn das `Locale`-Objekt bereits keinen `hourCycle` hat, listet `getHourCycles()` alle üblicherweise verwendeten Stundenzyklus-Identifikatoren für die angegebene `Locale` auf. Für Beispiele zum expliziten Setzen eines `hourCycle` siehe [`hourCycle` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Locale-Daten-Markup-Sprache-Spezifikation
