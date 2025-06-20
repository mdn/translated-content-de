---
title: Intl.Locale.prototype.getHourCycles()
short-title: getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getHourCycles()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren eindeutigen Stundensystem-Identifikatoren für dieses Locale zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Zugriffseigenschaft namens `hourCycles` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.hourCycles === locale.hourCycles` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getHourCycles()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle Stundensystemtypen repräsentiert, die üblicherweise für das `Locale` verwendet werden, sortiert in absteigender Präferenz. Wenn das `Locale` bereits einen [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) hat, enthält das zurückgegebene Array diesen einzigen Wert.

Unten ist eine Liste der unterstützten Stundensystemtypen.

### Unterstützte Stundensystemtypen

- `h12`
  - : Stundensystem mit 1–12; entspricht 'h' in Mustern. Die 12-Stunden-Uhr, mit Mitternacht beginnend um 12:00 Uhr am. Wie zum Beispiel in den Vereinigten Staaten verwendet.
- `h23`
  - : Stundensystem mit 0–23; entspricht 'H' in Mustern. Die 24-Stunden-Uhr, mit Mitternacht beginnend um 0:00 Uhr.
- `h11`
  - : Stundensystem mit 0–11; entspricht 'K' in Mustern. Die 12-Stunden-Uhr, mit Mitternacht beginnend um 0:00 Uhr am. Meist in Japan verwendet.
- `h24`
  - : Stundensystem mit 1–24; entspricht 'k' im Muster. Die 24-Stunden-Uhr, mit Mitternacht beginnend um 24:00 Uhr. Wird nirgends verwendet.

## Beispiele

### Abrufen unterstützter Stundensysteme

Wenn das `Locale`-Objekt nicht bereits ein `hourCycle` hat, listet `getHourCycles()` alle üblicherweise verwendeten Stundensystem-Identifikatoren für das gegebene `Locale` auf. Für Beispiele zum expliziten Setzen eines `hourCycle`, siehe [`hourCycle` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

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
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Locale-Daten-Markup-Sprache Spezifikation
