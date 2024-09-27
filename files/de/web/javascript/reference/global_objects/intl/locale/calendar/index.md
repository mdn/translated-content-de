---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{JSRef}}

Die Zugriffs-Property **`calendar`** von {{jsxref("Intl.Locale")}}-Instanzen gibt den Kalender-Typ für dieses Locale zurück.

## Beschreibung

Während der größte Teil der Welt den gregorianischen Kalender verwendet, gibt es weltweit mehrere regionale Kalender-Ären. Der Wert der `calendar`-Eigenschaft wird zur Zeit der Konstruktion festgelegt, entweder durch den `ca`-Schlüssel des Locale-Bezeichners oder durch die `calendar`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzterer hat Priorität, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Eine Liste der unterstützten Kalender-Typen finden Sie unter [`Intl.Locale.prototype.getCalendars()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCalendars#supported_calendar_types).

Der set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Kalender-Typ über den Locale-String oder ein Konfigurationsobjekt-Argument zum Konstruktor dem {{jsxref("Intl.Locale")}}-Objekt hinzugefügt werden.

### Hinzufügen eines Kalender-Typs über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Kalender-Ären-Typen Locale-Schlüssel-"Erweiterungs-Subtags". Diese Subtags fügen zusätzliche Daten über das Locale hinzu und werden zu Locale-Bezeichnern durch Verwendung der `-u` Erweiterung hinzugefügt. Somit kann der Kalender-Ären-Typ zu dem anfänglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Um den Kalender-Typ hinzuzufügen, fügen Sie zuerst die `-u` Erweiterung zum String hinzu. Fügen Sie als nächstes die `-ca` Erweiterung hinzu, um anzuzeigen, dass Sie einen Kalender-Typ hinzufügen. Schließlich fügen Sie den Kalender-Ären-Typ zum String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Prints "buddhist"
```

### Hinzufügen eines Kalender-Typs über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen enthalten kann, einschließlich Kalender. Setzen Sie die `calendar`-Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Kalender-Ära und übergeben Sie sie dann an den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode Locale Data Markup Language-Spezifikation
