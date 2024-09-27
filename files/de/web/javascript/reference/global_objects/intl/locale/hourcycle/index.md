---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`hourCycle`** Zugriffs-Property von {{jsxref("Intl.Locale")}} Instanzen gibt den Stundenzyklustyp für dieses Gebietsschema zurück.

## Beschreibung

Weltweit werden hauptsächlich zwei Arten von Zeitkonventionen (Uhren) verwendet: die 12-Stunden-Uhr und die 24-Stunden-Uhr. Der Wert der `hourCycle` Property wird zur Konstruktion festgelegt, entweder durch den `hc`-Schlüssel des Gebietsschemas oder durch die `hourCycle`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Property den Wert `undefined`.

Für eine Liste der unterstützten Stundenzyklustypen siehe [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der set-Zugriff von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann der Stundenzyklustyp dem {{jsxref("Intl.Locale")}} Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Stundenzyklus über den Gebietsschema-String

In der [Unicode-Gebietsschema-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Stundenzyklustypen "Erweiterungssubtags" des Gebietsschlüssels. Diese Subtags fügen zusätzlichen Daten über das Gebietsschema hinzu und werden zu Gebietsschema-Bezeichnern durch die Verwendung der `-u` Erweiterung hinzugefügt. Der Stundenzyklustyp kann somit zum anfänglichen Gebietsschema-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Stundenzyklustyp hinzuzufügen, fügen Sie zuerst den `-u` Erweiterungsschlüssel hinzu. Fügen Sie als Nächstes die `-hc` Erweiterung hinzu, um anzugeben, dass Sie einen Stundenzyklus hinzufügen. Fügen Sie schließlich den Stundenzyklustyp dem String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Hinzufügen eines Stundenzyklus über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das alle von mehreren Erweiterungstypen enthalten kann, einschließlich Stundenzyklustypen. Setzen Sie die `hourCycle` Property des Konfigurationsobjekts auf Ihren gewünschten Stundenzyklustyp und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Gebietsschemadaten-Auszeichnungssprache-Spezifikation
