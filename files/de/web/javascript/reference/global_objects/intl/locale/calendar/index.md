---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`calendar`**-Eigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt den Kalendertyp für diese Lokalisierung zurück.

## Beschreibung

Obwohl der Großteil der Welt den gregorianischen Kalender verwendet, gibt es mehrere regionale Kalender, die weltweit genutzt werden. Der Wert der `calendar`-Eigenschaft wird während der Konstruktion festgelegt, entweder über den `ca`-Schlüssel des Locale-Identifiers oder über die `calendar`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; ist keiner vorhanden, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kalendertypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

Der Set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Tags kann der Kalendertyp dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Kalendertyps über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Kalendertypen "Erweiterungssubtags" des Locale-Schlüssels. Diese Subtags fügen zusätzliche Daten über die Lokalisierung hinzu und werden zu Locale-Identifikatoren hinzugefügt, indem die `-u`-Erweiterung verwendet wird. So kann der Kalendertyp zum initialen Locale-Identifier-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Kalendertyp hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung zum String hinzu. Fügen Sie dann die `-ca` Erweiterung hinzu, um anzuzeigen, dass Sie einen Kalendertyp hinzufügen. Schließlich fügen Sie den Typ des Kalenders zum String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Prints "buddhist"
```

### Hinzufügen eines Kalendertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das jede von mehreren Erweiterungstypen enthalten kann, einschließlich Kalendern. Setzen Sie die `calendar`-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Kalender, und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("fr-FR", { calendar: "buddhist" });
console.log(locale.calendar); // "buddhist"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars)
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode-Locale-Daten-Markup-Sprache-Spezifikation
