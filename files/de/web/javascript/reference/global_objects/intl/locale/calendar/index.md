---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`calendar`** Accessor-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Kalender-Typ für diesen Locale zurück.

## Beschreibung

Obwohl der Großteil der Welt den gregorianischen Kalender verwendet, gibt es weltweit mehrere regionale Kalender-Epochen. Für eine Liste der unterstützten Kalender-Typen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

Der Wert der `calendar`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `ca` Schlüssel des Locale-Identifiers oder durch die `calendar`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Kalender-Typ dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Kalender-Typs über den Locale-String

In der [Unicode Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) ist `calendar` ein "Erweiterungs-Subtag". Diese Subtags fügen zusätzliche Daten über den Locale hinzu und werden zu Locale-Identifikatoren unter Verwendung des `-u` Erweiterungsschlüssels hinzugefügt. Um den Kalender-Typ zum initialen Locale-Identifier-String hinzuzufügen, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird, fügen Sie zuerst den `-u` Erweiterungsschlüssel hinzu, falls er nicht existiert. Fügen Sie dann die `-ca` Erweiterung hinzu, um anzuzeigen, dass Sie einen Kalender-Typ hinzufügen. Schließlich fügen Sie den Kalender-Epochen-Typ hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist"
```

### Hinzufügen eines Kalender-Typs über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen enthalten kann, einschließlich Kalendern. Setzen Sie die `calendar`-Eigenschaft des Konfigurationsobjekts auf Ihre gewünschte Kalender-Epoche und übergeben Sie sie dann an den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode Locale Data Markup Language Spezifikation
