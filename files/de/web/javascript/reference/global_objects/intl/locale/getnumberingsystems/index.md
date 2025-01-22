---
title: Intl.Locale.prototype.getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die Methode **`getNumberingSystems()`** von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren eindeutigen [Nummerierungssystem](https://en.wikipedia.org/wiki/Numeral_system)-Kennzeichen für dieses Locale zurück.

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Accessor-Eigenschaft namens `numberingSystems` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, wird sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.numberingSystems === locale.numberingSystems` `false` zurückgibt. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle Nummerierungssysteme darstellt, die üblicherweise für das `Locale` verwendet werden, sortiert nach absteigender Präferenz. Wenn das `Locale` bereits ein [`numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) hat, enthält das zurückgegebene Array diesen einen Wert.

Für eine Liste der unterstützten Nummerierungssystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

### Unterstützte Nummerierungssysteme erhalten

Wenn das `Locale`-Objekt nicht bereits ein `numberingSystem` hat, listet `getNumberingSystems()` alle gebräuchlichen Nummerierungssysteme für das angegebene `Locale` auf. Für Beispiele zur expliziten Festlegung eines `numberingSystem` siehe [`numberingSystem` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Details zu den standardmäßigen Unicode-Nummerierungssystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
