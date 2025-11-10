---
title: Intl.Locale.prototype.getCalendars()
short-title: getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getCalendars()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren eindeutigen Kalender-Identifikatoren für diese Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Zugriffs-Eigenschaft namens `calendars` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie nun als Methode implementiert, um die Situation zu vermeiden, dass `locale.calendars === locale.calendars` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für weitere Details.

## Syntax

```js-nolint
getCalendars()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle Kalender darstellt, die für die `Locale` üblicherweise verwendet werden, sortiert in absteigender Präferenz. Wenn die `Locale` bereits einen [`calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) hat, enthält das zurückgegebene Array diesen einzigen Wert.

Für eine Liste der unterstützten Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

## Beispiele

### Ermitteln unterstützter Kalender

Wenn das `Locale`-Objekt noch keinen `calendar` hat, listet `getCalendars()` alle üblicherweise verwendeten Kalender für die gegebene `Locale` auf. Für Beispiele zum expliziten Setzen eines `calendar`, siehe [`calendar` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode Locale Data Markup Language Spezifikation
