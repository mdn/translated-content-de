---
title: Intl.Locale.prototype.hourCycle
short-title: hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`hourCycle`** Zugriffseigenschaft von Instanzen von {{jsxref("Intl.Locale")}} gibt den Stundenzyklustyp für dieses Gebietsschema zurück.

## Beschreibung

Weltweit werden zwei Haupttypen von Zeitmesskonventionen (Uhren) verwendet: die 12-Stunden-Uhr und die 24-Stunden-Uhr. Der Wert der `hourCycle`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `hc` Schlüssel des Gebietsschema-Identifiers oder durch die `hourCycle`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Stundenzyklustypen siehe [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der set-Accessor von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann der Stundenzyklustyp dem {{jsxref("Intl.Locale")}} Objekt über den Gebietsschema-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Stundenzyklus über den Gebietsschema-String

In der [Unicode-Gebietsschema-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Stundenzyklustypen Gebietsschema-Schlüssel „Erweiterungs-Subtags“. Diese Subtags fügen zusätzliche Daten über das Gebietsschema hinzu und werden zu Gebietsschema-Identifiers hinzugefügt, indem die `-u` Erweiterung verwendet wird. Somit kann der Stundenzyklustyp dem initialen Gebietsschema-Identifikator-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Stundenzyklustyp hinzuzufügen, fügen Sie zunächst den `-u` Erweiterungsschlüssel zum String hinzu. Fügen Sie dann die `-hc` Erweiterung hinzu, um anzugeben, dass Sie einen Stundenzyklus hinzufügen. Schließlich fügen Sie den Stundenzyklustyp dem String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Hinzufügen eines Stundenzyklus über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine von mehreren Erweiterungstypen, einschließlich Stundenzyklustypen, enthalten kann. Setzen Sie die `hourCycle`-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundenzyklustyp und übergeben Sie sie dann an den Konstruktor.

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
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Gebietsschema-Daten-Markup-Sprache-Spezifikation
