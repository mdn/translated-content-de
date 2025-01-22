---
title: Intl.Locale.prototype.numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`numberingSystem`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für dieses Gebietsschema zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Der Wert der `numberingSystem` Eigenschaft wird zur Zeit der Konstruktion festgelegt, entweder über den `nu` Schlüssel des Gebietsschema-Identifiers oder durch die `numberingSystem` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Typen von Zahlensystemen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

Wie andere Gebietsschema-Subtags kann der Zahlensystemtyp über den Gebietsschema-String oder über ein Konfigurationsobjekt-Argument an das {{jsxref("Intl.Locale")}} Objekt hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Gebietsschema-String

In der [Unicode-Gebietsschema-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Zahlensystemtypen "Extensions-Untertags" des Gebietsschemas. Diese Untertags fügen zusätzliche Daten über das Gebietsschema hinzu und werden zu Gebietsschema-Identifikatoren durch die Verwendung der `-u` Erweiterung hinzugefügt. Somit kann der Zahlensystemtyp zum initialen Gebietsschema-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Zahlensystemtyp hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie dann die `-nu` Erweiterung hinzu, um anzuzeigen, dass Sie ein Zahlensystem hinzufügen. Schließlich fügen Sie den Zahlensystemtyp zum String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen, einschließlich Zahlensystemtypen, enthalten kann. Setzen Sie die `numberingSystem` Eigenschaft des Konfigurationsobjekts auf den gewünschten Zahlensystemtyp und übergeben Sie ihn dann an den Konstruktor.

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
