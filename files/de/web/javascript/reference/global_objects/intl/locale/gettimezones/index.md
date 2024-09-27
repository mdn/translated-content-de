---
title: Intl.Locale.prototype.getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getTimeZones()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste der unterstützten Zeitzonen für diese Locale zurück.

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als Zugriffseigenschaft `timeZones` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.timeZones === locale.timeZones` `false` ergibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getTimeZones()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das die unterstützten Zeitzonen für das zugehörige `Locale` darstellt, wobei jeder Wert ein [IANA-Zeitzonen-Canonical-Name](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) ist, sortiert in alphabetischer Reihenfolge. Wenn der Locale-Identifier kein Region-Subtag enthält, ist der zurückgegebene Wert `undefined`.

Beachten Sie, dass sich die IANA-Datenbank von Zeit zu Zeit ändert, [die Unicode-CLDR-Datenbank (die von Browsern verwendet wird) jedoch alte Zeitzonennamen zur Stabilität beibehält](https://unicode.org/reports/tr35/#Time_Zone_Identifiers). Zum Beispiel sind hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Name              | CDLR-Datenbank         |
| -------------------------------- | ---------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires` |
| `Asia/Kolkata`                   | `Asia/Calcutta`        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`          |
| `Europe/Kyiv`                    | `Europe/Kiev`          |

Einige Browser (Firefox) überschreiben diese veralteten Namen, während andere das nicht tun (Safari und Chrome). Für weitere Informationen sehen Sie in der [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) nach. (IANA-Namen sind mit `"_iana"` markiert, falls abweichend.) Es gibt [eine Initiative in TC39, um diese kanonischen Bezeichner korrekt zu handhaben](https://github.com/tc39/proposal-canonical-tz), die auch Links zu verwandten CLDR-Problemen enthält.

## Beispiele

### Ermitteln unterstützter Zeitzonen

Liste der unterstützten Zeitzonen für ein bestimmtes `Locale`.

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getTimeZones()); // ["Africa/Cairo"]
```

```js
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getTimeZones()); // ["Asia/Tokyo"]
```

```js
const ar = new Intl.Locale("ar");
console.log(ar.getTimeZones()); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) auf Wikipedia
