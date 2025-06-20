---
title: Intl.Locale.prototype.numberingSystem
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Zugriffs-Eigenschaft **`numberingSystem`** von {{jsxref("Intl.Locale")}} Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für diese Locale zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Der Wert der `numberingSystem`-Eigenschaft wird zur Zeit der Konstruktion festgelegt, entweder über den Schlüssel `nu` des Locale-Identifikators oder über die `numberingSystem`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keines vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

## Beispiele

Wie andere Locale-Subtags kann der Zahlensystemtyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjektargument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Zahlensystemtypen Locale-Schlüssel "Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Daten über die Locale hinzu und werden zu den Locale-Identifikatoren hinzugefügt, indem sie die `-u` Erweiterung verwenden. Somit kann der Zahlensystemtyp zu dem anfänglichen Locale-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Zahlensystemtyp hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel dem String hinzu. Fügen Sie als nächstes die `-nu` Erweiterung hinzu, um anzuzeigen, dass Sie ein Zahlensystem hinzufügen. Schließlich fügen Sie den Zahlensystemtyp dem String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjektargument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjektargument, das verschiedene Erweiterungstypen enthalten kann, einschließlich Zahlensystemtypen. Setzen Sie die `numberingSystem`-Eigenschaft des Konfigurationsobjekts auf den gewünschten Zahlensystemtyp und übergeben Sie es dann in den Konstruktor.

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
- [Details über die standardmäßigen Unicode-Zahlsysteme](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
