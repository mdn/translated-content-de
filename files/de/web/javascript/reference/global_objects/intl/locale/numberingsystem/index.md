---
title: Intl.Locale.prototype.numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{JSRef}}

Die **`numberingSystem`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für diese Locale zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Der Wert der `numberingSystem` Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `nu`-Schlüssel des Locale-Bezeichners oder durch die `numberingSystem`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Zahlensystemtypen siehe [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems#supported_numbering_system_types).

## Beispiele

Wie andere Locale-Subtags kann der Zahlensystemtyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Locale-String

In der [Unicode Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Zahlensystemtypen als Locale-Schlüssel "Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Informationen über das Locale hinzu und werden durch die Verwendung der `-u` Erweiterung zu Locale-Bezeichnern hinzugefügt. Somit kann der Zahlensystemtyp zu dem Anfangs-String des Locale-Bezeichners hinzugefügt werden, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Zahlensystemtyp hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie dann die `-nu` Erweiterung hinzu, um anzugeben, dass Sie ein Zahlensystem hinzufügen. Schließlich fügen Sie den Zahlensystemtyp zum String hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine der verschiedenen Erweiterungstypen enthalten kann, einschließlich Zahlensystemtypen. Setzen Sie die `numberingSystem` Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Zahlensystemtyp und übergeben Sie es dann in den Konstruktor.

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
