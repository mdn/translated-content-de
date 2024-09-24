---
title: Intl.Locale.prototype.getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getHourCycles()`**-Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren eindeutigen Stundenzyklus-Identifikatoren für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Zugriffsattribute namens `hourCycles` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie nun als Methode implementiert, um die Situation zu vermeiden, dass `locale.hourCycles === locale.hourCycles` `false` zurückgibt. Überprüfen Sie die [Tabelle zur Browserkompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getHourCycles()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle Stundenzyklus-Typen repräsentiert, die üblicherweise für die `Locale` verwendet werden, sortiert in absteigender Präferenz. Wenn die `Locale` bereits einen [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) hat, dann enthält das zurückgegebene Array diesen einzelnen Wert.

Unten ist eine Liste der unterstützten Stundenzyklus-Typen.

### Unterstützte Stundenzyklus-Typen

- `h12`
  - : Stundensystem, das 1–12 verwendet; entspricht 'h' in Mustern. Die 12-Stunden-Uhr, bei der Mitternacht um 12:00 Uhr beginnt. Wird beispielsweise in den Vereinigten Staaten verwendet.
- `h23`
  - : Stundensystem, das 0–23 verwendet; entspricht 'H' in Mustern. Die 24-Stunden-Uhr, bei der Mitternacht um 0:00 Uhr beginnt.
- `h11`
  - : Stundensystem, das 0–11 verwendet; entspricht 'K' in Mustern. Die 12-Stunden-Uhr, bei der Mitternacht um 0:00 Uhr beginnt. Meistens in Japan verwendet.
- `h24`
  - : Stundensystem, das 1–24 verwendet; entspricht 'k' in Mustern. Die 24-Stunden-Uhr, bei der Mitternacht um 24:00 Uhr beginnt. Nirgendwo verwendet.

## Beispiele

### Abrufen unterstützter Stundenzyklen

Wenn das `Locale`-Objekt noch keinen `hourCycle` hat, listet `getHourCycles()` alle üblicherweise verwendeten Stundenzyklus-Identifikatoren für die angegebene `Locale` auf. Für Beispiele zur expliziten Einstellung eines `hourCycle` siehe [`hourCycle` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

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
