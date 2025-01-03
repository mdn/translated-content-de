---
title: Intl.Locale.prototype.getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: ff51011fc71bfeaf8ab7e611f5a5ec936480fa01
---

{{JSRef}}

Die **`getTimeZones()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste der unterstützten Zeitzonen für dieses Gebietsschema zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Zugriffs-Property namens `timeZones` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.timeZones === locale.timeZones` `false` zurückgibt. Einzelheiten finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

## Syntax

```js-nolint
getTimeZones()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenketten, das die unterstützten Zeitzonen für das zugehörige `Locale` repräsentiert, wobei jeder Wert ein [IANA-Zeitzonenkanonischer Name](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) ist, sortiert in alphabetischer Reihenfolge. Wenn der Gebietsschema-Bezeichner kein Regions-Untertag enthält, ist der zurückgegebene Wert `undefined`.

Beachten Sie, dass sich die IANA-Datenbank von Zeit zu Zeit ändert, [die Unicode-CLDR-Datenbank, die von Browsern verwendet wird, alte Zeitzonennamen jedoch aus Stabilitätsgründen beibehält](https://unicode.org/reports/tr35/#Time_Zone_Identifiers). Hier sind einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Name              | CLDR-Datenbank         |
| -------------------------------- | ---------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires` |
| `Asia/Kolkata`                   | `Asia/Calcutta`        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`          |
| `Europe/Kyiv`                    | `Europe/Kiev`          |

Einige Browser (Firefox) überschreiben diese Legacy-Namen, während andere dies nicht tun (Safari und Chrome). Für weitere Informationen, sehen Sie sich die [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) an. (IANA-Namen sind mit `"_iana"` gekennzeichnet, falls abweichend.) Es gibt [eine Anstrengung in TC39, diese kanonischen Bezeichner korrekt zu handhaben](https://github.com/tc39/proposal-canonical-tz), die auch Links zu verwandten CLDR-Problemen enthält.

## Beispiele

### Ermittlung unterstützter Zeitzonen

Listen Sie die unterstützten Zeitzonen für ein gegebenes `Locale` auf.

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
