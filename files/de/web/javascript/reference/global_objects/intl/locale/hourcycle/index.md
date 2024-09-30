---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`hourCycle`** Zugriffsproperty von {{jsxref("Intl.Locale")}} Instanzen gibt den Stundentypen für diese Locale zurück.

## Beschreibung

Weltweit werden zwei Hauptarten der Zeitmessung (Uhren) verwendet: die 12-Stunden-Uhr und die 24-Stunden-Uhr. Der Wert der `hourCycle` Eigenschaft wird zur Bauzeit festgelegt, entweder durch den `hc` Schlüssel des Locale-Bezeichners oder durch die `hourCycle` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Priorität, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Eine Liste der unterstützten Stundentypen finden Sie unter [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der set-Accessor von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Stundentyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor hinzugefügt werden.

### Hinzufügen eines Stundentypen über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Stundentypen Locale-Schlüssel "Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Daten über das Locale hinzu und werden zu Locale-Bezeichnern durch Verwendung der `-u` Erweiterung hinzugefügt. Somit kann der Stundentyp dem anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Stundentyp hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel dem String hinzu. Als Nächstes fügen Sie die `-hc` Erweiterung hinzu, um anzugeben, dass Sie einen Stundentyp hinzufügen. Schließlich fügen Sie den Stundentyp dem String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Hinzufügen eines Stundentypen über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine Vielzahl von Erweiterungstypen enthalten kann, einschließlich Stundentypen. Setzen Sie die `hourCycle` Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundentyp und übergeben Sie es dann an den Konstruktor.

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
