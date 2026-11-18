---
title: Intl.Locale.prototype.getCalendars()
short-title: getCalendars()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Methode **`getCalendars()`** von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste mit einem oder mehreren eindeutigen Kalenderkennungen für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Accessor-Eigenschaft namens `calendars` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie jetzt als Methode implementiert. So wird vermieden, dass `locale.calendars === locale.calendars` den Wert `false` zurückgibt. Weitere Informationen finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

## Syntax

```js-nolint
getCalendars()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das alle für die `Locale` gemäß ihren [Regionseinstellungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences) gebräuchlichen Kalender angibt, sortiert nach absteigender Präferenz. Wenn für die `Locale` bereits ein Wert für [`calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar) festgelegt ist, enthält das zurückgegebene Array nur diesen Wert.

Eine Liste der unterstützten Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

## Beispiele

### Unterstützte Kalender abrufen

Wenn für das `Locale`-Objekt noch kein `calendar` festgelegt ist, listet `getCalendars()` alle für die angegebene `Locale` gebräuchlichen Kalender auf. Beispiele für das explizite Festlegen von `calendar` finden Sie in den [Beispielen zu `calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getCalendars()); // ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getCalendars()); // ["gregory", "japanese"]
```

### Regionsüberschreibungen

Die Erweiterungs-Subtags `rg` und `sd` ändern die [Regionseinstellungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#region_preferences). Dadurch können andere Kalenderkennungen zurückgegeben werden, obwohl der Basisname gleich bleibt.

```js
const enUS = new Intl.Locale("en-US");
console.log(enUS.getCalendars()); // ["gregory"]

const enUSInJP = new Intl.Locale("en-US-u-rg-jpzzzz");
console.log(enUSInJP.getCalendars()); // ["gregory", "japanese"]

const jaScot = new Intl.Locale("ja-u-sd-gbsct");
console.log(jaScot.getCalendars()); // ["gregory"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.calendar`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)
- [Unicode-Kalenderkennung](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Spezifikation der Unicode Locale Data Markup Language
