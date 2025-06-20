---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`calendar`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Kalendertyp für diesen Sprachraum zurück.

## Beschreibung

Obwohl der größte Teil der Welt den gregorianischen Kalender verwendet, gibt es mehrere regionale Kalenderarten, die weltweit genutzt werden. Der Wert der `calendar`-Eigenschaft wird bei der Erstellung gesetzt, entweder durch den `ca`-Schlüssel des Sprachraum-Identifikators oder durch die `calendar`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kalendertypen sehen Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

Der Set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Sprachraum-Subtags kann der Kalendertyp dem {{jsxref("Intl.Locale")}} Objekt über den Sprachraum-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Kalendertyps über den Sprachraum-String

In der [Unicode Sprachraum-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Kalenderarten Sprachraumschlüssel-"Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Daten über den Sprachraum hinzu und werden zu Sprachraum-Identifikatoren durch die Verwendung der `-u` Erweiterung hinzugefügt. So kann der Kalendertyp dem initialen Sprachraum-Identifikator-String hinzugefügt werden, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Kalendertyp hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung zum String hinzu. Fügen Sie dann die `-ca` Erweiterung hinzu, um anzugeben, dass Sie einen Kalendertyp hinzufügen. Schließlich fügen Sie den Kalenderartentyp dem String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Prints "buddhist"
```

### Hinzufügen eines Kalendertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen enthalten kann, einschließlich Kalendern. Setzen Sie die `calendar` Eigenschaft des Konfigurationsobjekts auf den gewünschten Kalenderarten-Typ und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode Sprachraum-Daten-Markup-Sprache-Spezifikation
