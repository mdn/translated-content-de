---
title: Intl.Locale.prototype.getHourCycles()
short-title: getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getHourCycles()`**-Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren eindeutigen Stundenzyklus-Identifikatoren für diese Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Accessor-Eigenschaft namens `hourCycles` implementiert. Da sie jedoch jedes Mal ein neues Array zurückgibt, wurde sie jetzt als Methode implementiert, um zu verhindern, dass `locale.hourCycles === locale.hourCycles` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitäts-Tabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getHourCycles()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenketten, das alle häufig verwendeten Stundenzyklustypen des `Locale` darstellt, sortiert nach absteigender Präferenz. Wenn das `Locale` bereits einen [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Unten ist eine Liste der unterstützten Stundenzyklustypen.

### Unterstützte Stundenzyklustypen

- `h12`
  - : Stundensystem, das 1–12 verwendet; entspricht 'h' in Mustern. Die 12-Stunden-Uhr, bei der Mitternacht um 12:00 Uhr nachts beginnt. Wird zum Beispiel in den Vereinigten Staaten verwendet.
- `h23`
  - : Stundensystem, das 0–23 verwendet; entspricht 'H' in Mustern. Die 24-Stunden-Uhr, bei der Mitternacht um 0:00 Uhr beginnt.
- `h11`
  - : Stundensystem, das 0–11 verwendet; entspricht 'K' in Mustern. Die 12-Stunden-Uhr, bei der Mitternacht um 0:00 Uhr beginnt. Wird hauptsächlich in Japan verwendet.
- `h24`
  - : Stundensystem, das 1–24 verwendet; entspricht 'k' in Mustern. Die 24-Stunden-Uhr, bei der Mitternacht um 24:00 Uhr beginnt. Nirgendwo verwendet.

## Beispiele

### Unterstützung von Stundenzyklen abrufen

Wenn das `Locale`-Objekt noch keinen `hourCycle` hat, listet `getHourCycles()` alle häufig verwendeten Stundenzyklus-Identifikatoren für das gegebene `Locale` auf. Für Beispiele zur expliziten Einstellung eines `hourCycle` siehe [`hourCycle` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

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
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Locale-Daten-Auszeichnungssprache-Spezifikation
