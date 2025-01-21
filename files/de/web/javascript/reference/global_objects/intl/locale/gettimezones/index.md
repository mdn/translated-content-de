---
title: Intl.Locale.prototype.getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`getTimeZones()`**-Methode der {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste der für diese Locale unterstützten Zeitzonen zurück.

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Accessor-Eigenschaft namens `timeZones` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.timeZones === locale.timeZones` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für weitere Details.

## Syntax

```js-nolint
getTimeZones()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, die die unterstützten Zeitzonen für die zugehörige `Locale` darstellen, wobei jeder Wert ein [kanonischer IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) ist, sortiert in alphabetischer Reihenfolge. Wenn der Locale-Identifikator kein Regions-Subtag enthält, ist der zurückgegebene Wert `undefined`.

> [!NOTE]
> Die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Bezeichner in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Siehe [Zeitzonen und Versätze](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) für weitere Informationen.

## Beispiele

### Ermitteln unterstützter Zeitzonen

Listen Sie die unterstützten Zeitzonen für eine gegebene `Locale` auf.

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
