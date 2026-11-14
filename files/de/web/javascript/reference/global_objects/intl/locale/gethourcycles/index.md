---
title: Intl.Locale.prototype.getHourCycles()
short-title: getHourCycles()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Methode **`getHourCycles()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste mit einem oder mehreren eindeutigen Kennungen für Stundenzyklen dieser Locale zurück.

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als Accessor-Eigenschaft namens `hourCycles` implementiert. Da sie bei jedem Zugriff ein neues Array zurückgibt, ist sie inzwischen als Methode implementiert. So wird vermieden, dass `locale.hourCycles === locale.hourCycles` den Wert `false` zurückgibt. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getHourCycles()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle für die `Locale` gebräuchlichen Stundenzyklustypen enthält, sortiert nach absteigender Präferenz. Wenn die `Locale` bereits einen [`hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle) hat, enthält das zurückgegebene Array nur diesen Wert.

Im Folgenden sind die unterstützten Stundenzyklustypen aufgeführt.

### Unterstützte Stundenzyklustypen

- `h12`
  - : Stundensystem mit den Werten 1–12; entspricht „h“ in Formatmustern. Eine 12-Stunden-Uhr, bei der Mitternacht um 12:00 Uhr am beginnt. Wird beispielsweise in den Vereinigten Staaten verwendet.
- `h23`
  - : Stundensystem mit den Werten 0–23; entspricht „H“ in Formatmustern. Eine 24-Stunden-Uhr, bei der Mitternacht um 0:00 Uhr beginnt.
- `h11`
  - : Stundensystem mit den Werten 0–11; entspricht „K“ in Formatmustern. Eine 12-Stunden-Uhr, bei der Mitternacht um 0:00 Uhr am beginnt. Wird hauptsächlich in Japan verwendet.
- `h24`
  - : Stundensystem mit den Werten 1–24; entspricht „k“ in Formatmustern. Eine 24-Stunden-Uhr, bei der Mitternacht um 24:00 Uhr beginnt. Wird nirgendwo verwendet.

## Beispiele

### Unterstützte Stundenzyklen abrufen

Wenn für das `Locale`-Objekt noch kein `hourCycle` festgelegt wurde, gibt `getHourCycles()` alle für die angegebene `Locale` gebräuchlichen Stundenzykluskennungen zurück. Beispiele für das explizite Festlegen eines `hourCycle` finden Sie unter [Beispiele zu `hourCycle`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle#examples).

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
- [Unicode-Stundenzykluskennung](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Spezifikation der Unicode Locale Data Markup Language
