---
title: Intl.Locale.prototype.getTimeZones()
short-title: getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getTimeZones()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste der unterstützten Zeitzonen für dieses Locale zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Accessor-Eigenschaft namens `timeZones` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.timeZones === locale.timeZones` `false` zurückgibt. Überprüfen Sie die [Kompatibilitätstabelle der Browser](#browserkompatibilität) für Details.

## Syntax

```js-nolint
getTimeZones()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das die unterstützten Zeitzonen für die zugehörige `Locale` darstellt, wobei jeder Wert ein [kanonischer IANA-Zeitzonenname](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) ist und alphabetisch sortiert wird. Wenn der Locale-Bezeichner kein Region-Subtag enthält, ist der zurückgegebene Wert `undefined`.

Es ist wichtig zu beachten, dass sich die IANA-Datenbank von Zeit zu Zeit ändert, [die Unicode CLDR-Datenbank (die von Browsern verwendet wird) jedoch alte Zeitzonennamen aus Stabilitätsgründen beibehält](https://unicode.org/reports/tr35/#Time_Zone_Identifiers). Hier sind einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Name              | CDLR-Datenbank         |
| -------------------------------- | ---------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires` |
| `Asia/Kolkata`                   | `Asia/Calcutta`        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`          |
| `Europe/Kyiv`                    | `Europe/Kiev`          |

Einige Browser (Firefox) überschreiben diese veralteten Namen, während andere dies nicht tun (Safari und Chrome). Für weitere Informationen sehen Sie sich die [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) an. (IANA-Namen sind mit `"_iana"` gekennzeichnet, wenn sie unterschiedlich sind.) Es gibt [eine Anstrengung in TC39, diese kanonischen Bezeichner ordnungsgemäß zu behandeln](https://github.com/tc39/proposal-canonical-tz), die auch Links zu verwandten CLDR-Problemen enthält.

## Beispiele

### Ermittlung der unterstützten Zeitzonen

Liste der unterstützten Zeitzonen für ein gegebenes `Locale`.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [IANA-Zeitzonendatenbank](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) auf Wikipedia
