---
title: Intl.Locale.prototype.numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{JSRef}}

Die Zugriffseigenschaft **`numberingSystem`** von {{jsxref("Intl.Locale")}} Instanzen gibt das [Zahlensystem](https://de.wikipedia.org/wiki/Zahlensystem) für diese Lokalisierung zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Der Wert der `numberingSystem`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `nu` Schlüssel des Lokalisierungsidentifikators oder durch die `numberingSystem` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types).

## Beispiele

Wie andere Lokalisierungs-Untertags kann der Zahlensystemtyp dem {{jsxref("Intl.Locale")}} Objekt über den Lokalisierungsstring oder ein Konfigurationsobjektargument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Lokalisierungsstring

In der [Unicode-Spezifikation für Lokalisierungsstrings](https://www.unicode.org/reports/tr35/) sind Zahlensystemtypen "Erweiterungs-Untertags" für Lokalisierungsschlüssel. Diese Untertags fügen zusätzliche Daten zur Lokalisierung hinzu und werden durch die Verwendung der `-u` Erweiterung zu Lokalisierungsidentifikatoren hinzugefügt. Damit kann der Zahlensystemtyp zum ursprünglichen Lokalisierungsidentifikator hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Zahlensystemtyp hinzuzufügen, fügen Sie zunächst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie anschließend die `-nu` Erweiterung hinzu, um anzuzeigen, dass Sie ein Zahlensystem hinzufügen. Schließlich fügen Sie den Zahlensystemtyp zum String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjektargument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjektargument, das verschiedene Erweiterungstypen enthalten kann, einschließlich Zahlensystemtypen. Setzen Sie die `numberingSystem` Eigenschaft des Konfigurationsobjekts auf den gewünschten Zahlensystemtyp und übergeben Sie es dann in den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { numberingSystem: "latn" });
console.log(locale.numberingSystem); // "latn"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems)
- [Details zu den standardmäßigen Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
