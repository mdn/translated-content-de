---
title: Intl.Locale.prototype.hourCycle
short-title: hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`hourCycle`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt den Stundenzyklustyp für diese Lokalisierung zurück.

## Beschreibung

Es gibt zwei Haupttypen von Zeitmessungskonventionen (Uhren), die weltweit verwendet werden: die 12-Stunden-Uhr und die 24-Stunden-Uhr. Der Wert der `hourCycle`-Eigenschaft wird zum Zeitpunkt der Erstellung festgelegt, entweder über den `hc`-Schlüssel des Lokalisierungsbezeichners oder über die `hourCycle`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Stundenzyklustypen siehe [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der Set-Accessor von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Stundenzyklustyp dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor hinzugefügt werden.

### Hinzufügen eines Stundenzyklus über den Locale-String

In der [Unicode Locale String Spezifikation](https://www.unicode.org/reports/tr35/) sind Stundenzyklustypen Locale-Key-"Extension-Subtags". Diese Subtags fügen zusätzliche Daten über die Lokalisierung hinzu und werden durch die Verwendung der `-u`-Erweiterung den Locale-Bezeichnern hinzugefügt. Somit kann der Stundenzyklustyp dem anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Um den Stundenzyklustyp hinzuzufügen, fügen Sie zuerst den `-u`-Erweiterungsschlüssel zum String hinzu. Fügen Sie als nächstes die `-hc`-Erweiterung hinzu, um anzugeben, dass Sie einen Stundenzyklus hinzufügen. Schließlich fügen Sie den Stundenzyklustyp zum String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Hinzufügen eines Stundenzyklus über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen enthalten kann, einschließlich Stundenzyklustypen. Legen Sie die `hourCycle`-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundenzyklustyp fest und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode-Lokalisierungsdaten-Auszeichnungssprachen-Spezifikation
