---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`hourCycle`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Stundentyp für diese Locale zurück.

## Beschreibung

Es gibt zwei Haupttypen von Zeitmesskonventionen (Uhren), die weltweit verwendet werden: die 12-Stunden-Uhr und die 24-Stunden-Uhr. Der Wert der `hourCycle` Eigenschaft wird zur Konstruktionszeit festgelegt, entweder über den `hc` Schlüssel des Locale-Identifiers oder über die `hourCycle` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzteres hat Vorrang, wenn sie beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Stundentypen siehe [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der set-Accessor von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Stundentyp zum {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Stundentypen über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Stundentypen Locale-Key-„Erweiterungs-Subtags“. Diese Subtags fügen zusätzliche Daten zur Locale hinzu und werden zu Locale-Identifikatoren hinzugefügt, indem die `-u` Erweiterung verwendet wird. Somit kann der Stundentyp zum initialen Locale-Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Stundentyp hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie dann die `-hc` Erweiterung hinzu, um anzuzeigen, dass Sie einen Stundentyp hinzufügen. Schließlich fügen Sie den Stundentyp zum String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Hinzufügen eines Stundentypen über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor verfügt über ein optionales Konfigurationsobjekt-Argument, das eines von mehreren Erweiterungstypen, einschließlich Stundentypen, enthalten kann. Setzen Sie die `hourCycle` Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundentyp und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles)
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Locale-Daten-Markup-Sprache-Spezifikation
