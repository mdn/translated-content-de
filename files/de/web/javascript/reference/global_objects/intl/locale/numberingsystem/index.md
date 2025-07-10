---
title: Intl.Locale.prototype.numberingSystem
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`numberingSystem`**-Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für dieses Gebietsschema zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Der Wert der `numberingSystem`-Eigenschaft wird zur Konstruktionszeit festgelegt, entweder über den `nu`-Schlüssel des Gebietsschema-Identifikators oder über die `numberingSystem`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

Wie andere Gebietsschema-Subtags kann der Zahlensystemtyp dem {{jsxref("Intl.Locale")}}-Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Gebietsschema-String

Im [Unicode-Gebietsschema-String-Standard](https://www.unicode.org/reports/tr35/) sind Zahlensystemtypen Erweiterungssubtags für den Gebietsschema-Schlüssel. Diese Subtags fügen zusätzliche Daten über das Gebietsschema hinzu und werden zu Gebietsschema-Identifikatoren hinzugefügt, indem die `-u`-Erweiterung verwendet wird. Somit kann der Zahlensystemtyp zu dem anfänglichen Gebietsschema-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Um den Zahlensystemtyp hinzuzufügen, fügen Sie zuerst den `-u`-Erweiterungsschlüssel dem String hinzu. Fügen Sie dann die `-nu`-Erweiterung hinzu, um anzugeben, dass Sie ein Zahlensystem hinzufügen. Schließlich fügen Sie den Zahlensystemtyp dem String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verschiedene Erweiterungstypen, einschließlich Zahlensystemtypen, enthalten kann. Setzen Sie die `numberingSystem`-Eigenschaft des Konfigurationsobjekts auf den gewünschten Zahlensystemtyp und übergeben Sie es dann an den Konstruktor.

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
- [Einzelheiten zu den standardisierten Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
