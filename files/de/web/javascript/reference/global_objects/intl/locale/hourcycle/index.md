---
title: Intl.Locale.prototype.hourCycle
short-title: hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`hourCycle`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Typ des Stundenzyklus für diese Locale zurück.

## Beschreibung

Es gibt zwei Haupttypen von Zeitmessungs-Konventionen (Uhren), die weltweit verwendet werden: die 12-Stunden-Uhr und die 24-Stunden-Uhr. Für eine Liste der unterstützten Stundenzyklustypen siehe [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der Wert der `hourCycle` Eigenschaft wird zum Zeitpunkt der Konstruktion festgelegt, entweder über den `hc` Schlüssel des Locale-Bezeichners oder über die `hourCycle` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der set Accessor von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Stundenzyklustyp dem {{jsxref("Intl.Locale")}} Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Stundenzyklus über den Locale-String

In der [Unicode Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) ist `hourCycle` ein "Erweiterungs-Subtag". Diese Subtags fügen zusätzliche Daten über die Locale hinzu und werden zu Locale-Bezeichnern unter Verwendung des `-u` Erweiterungsschlüssels hinzugefügt. Um den Stundenzyklustyp dem initialen Locale-Bezeichner-String hinzuzufügen, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird, fügen Sie zuerst den `-u` Erweiterungsschlüssel hinzu, falls er nicht vorhanden ist. Fügen Sie als nächstes die `-hc` Erweiterung hinzu, um anzugeben, dass Sie einen Stundenzyklus hinzufügen. Fügen Sie schließlich den Stundenzyklustyp hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Hinzufügen eines Stundenzyklus über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor verfügt über ein optionales Konfigurationsobjekt-Argument, das eine von mehreren Erweiterungstypen enthalten kann, einschließlich Stundenzyklustypen. Setzen Sie die `hourCycle` Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundenzyklustyp, und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Unicode Locale-Daten-Markup-Sprachspezifikation
