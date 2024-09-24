---
title: Intl.Locale.prototype.numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{JSRef}}

Die **`numberingSystem`** Zugriffs-Property von {{jsxref("Intl.Locale")}} Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für diese Locale zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Der Wert der `numberingSystem`-Eigenschaft wird zur Zeit der Konstruktion festgelegt, entweder über den `nu`-Schlüssel des Locale-Bezeichners oder über die `numberingSystem`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Typen von Zahlensystemen, siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types).

## Beispiele

Wie andere Locale-Subtags kann der Typ des Zahlensystems dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Locale-String

Im [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Zahlensystemtypen "Erweiterungs-Subtags" des Locale-Schlüssels. Diese Subtags fügen zusätzliche Informationen über das Locale hinzu und werden den Locale-Bezeichnern durch Verwendung der `-u` Erweiterung hinzugefügt. Somit kann der Typ des Zahlensystems dem initialen Locale-Bezeichner-String, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird, hinzugefügt werden. Um den Typ des Zahlensystems hinzuzufügen, fügen Sie zunächst den `-u` Erweiterungsschlüssel dem String hinzu. Fügen Sie dann die `-nu` Erweiterung hinzu, um zu kennzeichnen, dass Sie ein Zahlensystem hinzufügen. Schließlich fügen Sie den Typ des Zahlensystems dem String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das beliebige von mehreren Erweiterungstypen enthalten kann, einschließlich Typen von Zahlensystemen. Setzen Sie die `numberingSystem`-Eigenschaft des Konfigurationsobjekts auf den gewünschten Typ des Zahlensystems und übergeben Sie dieses an den Konstruktor.

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
- [Details zu den standardisierten Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
