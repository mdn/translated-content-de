---
title: Intl.Locale.prototype.getTimeZones()
short-title: getTimeZones()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTimeZones
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`getTimeZones()`**-Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste der unterstützten Zeitzonen für diese Locale zurück.

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als Accessor-Eigenschaft namens `timeZones` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um zu verhindern, dass `locale.timeZones === locale.timeZones` `false` zurückgibt. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getTimeZones()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das die unterstützten Zeitzonen für das zugehörige `Locale` darstellt, wobei jeder Wert ein [kanonischer IANA-Zeitzonenname](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) ist, alphabetisch sortiert. Wenn der Locale-Identifier kein Region-Subtag enthält, ist der zurückgegebene Wert `undefined`.

> [!NOTE]
> Die Standardisierung von `Temporal` erfordert, dass Browser immer den primären Bezeichner in der IANA-Datenbank zurückgeben, der sich im Laufe der Zeit ändern kann. Weitere Informationen finden Sie unter [Zeitzonen und Offsets](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

## Beispiele

### Ermitteln unterstützter Zeitzonen

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
