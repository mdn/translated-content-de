---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die **`calendar`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Kalendertyp für diese Lokalisierung zurück.

## Beschreibung

Obwohl der Großteil der Welt den Gregorianischen Kalender verwendet, gibt es weltweit mehrere regionale Kalenderaera. Der Wert der `calendar` Eigenschaft wird zur Zeit der Konstruktion gesetzt, entweder über den `ca` Schlüssel des Lokalisierungskennzeichens oder über die `calendar` Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kalendertypen siehe [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types).

Der Set-Zugriff von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Lokalisierungs-Subtags kann der Kalendertyp dem {{jsxref("Intl.Locale")}} Objekt über den Lokalisierungsstring oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Kalendertyps über den Lokalisierungsstring

Im [Unicode Locale String Spec](https://www.unicode.org/reports/tr35/) sind Kalenderaera-Typen Lokalschlüssel-„Erweiterungs-Subtags“. Diese Subtags fügen zusätzliche Daten über die Lokalisierung hinzu und werden mithilfe der `-u` Erweiterung zu Lokalisierungskennungen hinzugefügt. Daher kann der Kalenderaera-Typ dem anfänglichen Lokalisierungskennzeichnungsstring hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird. Um den Kalendertyp hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung dem String hinzu. Fügen Sie als nächstes die `-ca` Erweiterung hinzu, um anzuzeigen, dass Sie einen Kalendertyp hinzufügen. Fügen Sie schließlich den Kalenderaera-Typ dem String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Gibt "buddhist" aus
```

### Hinzufügen eines Kalendertyps über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine beliebige Anzahl von Erweiterungstypen enthalten kann, einschließlich Kalender. Legen Sie die `calendar` Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Kalenderaera fest und übergeben Sie es dann an den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode-Lokalisierungsdaten-Auszeichnungssprache-Spezifikation
