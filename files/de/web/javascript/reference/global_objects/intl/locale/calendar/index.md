---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`calendar`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Kalendertyp für dieses Gebietsschema zurück.

## Beschreibung

Obwohl der Großteil der Welt den gregorianischen Kalender verwendet, gibt es weltweit mehrere regionale Kalenderzeitalter. Der Wert der `calendar`-Eigenschaft wird zur Konstruktion festgelegt, entweder über den `ca`-Schlüssel des Gebietsschema-Identifiers oder über die `calendar`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzteres hat Vorrang, wenn beide vorhanden sind; und wenn keines vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kalendertypen siehe [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types).

Der Set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Sprachgebietsschema-Untertags kann der Kalendertyp dem {{jsxref("Intl.Locale")}}-Objekt über den Sprachstring oder ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Kalendertyps über den Sprachstring

In der [Unicode-Spezifikation für Sprachstrings](https://www.unicode.org/reports/tr35/) sind Kalendertypen als "Erweiterungs-Untertags" des Sprachschlüssels angegeben. Diese Untertags fügen zusätzliche Daten über das Gebietsschema hinzu und werden zu Sprachenthält durch die Verwendung der `-u`-Erweiterung hinzugefügt. So kann der Kalendertyp zum ersten Gebietsschema-Identifier-String, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird, hinzugefügt werden. Um den Kalendertyp hinzuzufügen, fügen Sie zunächst die `-u`-Erweiterung zum String hinzu. Fügen Sie dann die `-ca`-Erweiterung hinzu, um anzugeben, dass Sie einen Kalendertyp hinzufügen. Schließlich fügen Sie den Kalendertyp zur Zeitalter zum String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Prints "buddhist"
```

### Hinzufügen eines Kalendertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor verfügt über ein optionales Konfigurationsobjekt-Argument, das verschiedene Erweiterungstypen, einschließlich Kalender, enthalten kann. Setzen Sie die `calendar`-Eigenschaft des Konfigurationsobjekts auf Ihr gewünschtes Kalenderzeitalter und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode-Spezifikation für Sprachbereichsdaten-Markup-Sprache
