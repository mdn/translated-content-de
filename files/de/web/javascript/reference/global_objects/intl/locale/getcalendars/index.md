---
title: Intl.Locale.prototype.getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die Methode **`getCalendars()`** von Instanzen des {{jsxref("Intl.Locale")}} gibt eine Liste von einem oder mehreren einzigartigen Kalenderkennungen für diese Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Zugriffs-Eigenschaft namens `calendars` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie nun als Methode implementiert, um zu verhindern, dass `locale.calendars === locale.calendars` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getCalendars()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenketten, das alle Kalender darstellt, die üblicherweise für die `Locale` verwendet werden, sortiert in absteigender Präferenz. Wenn die `Locale` bereits einen [`calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Für eine Liste der unterstützten Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

## Beispiele

### Erhalten unterstützter Kalender

Wenn das `Locale`-Objekt nicht bereits einen `calendar` hat, listet `getCalendars()` alle üblicherweise verwendeten Kalender für das gegebene `Locale` auf. Für Beispiele, wie ein `calendar` explizit gesetzt wird, siehe [`calendar` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#examples).

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode-Locale-Daten-Markup-Sprache-Spezifikation
