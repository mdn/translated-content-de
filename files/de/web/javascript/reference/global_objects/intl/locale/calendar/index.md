---
title: Intl.Locale.prototype.calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Die **`calendar`** Zugriffs-Eigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt den Kalender-Typ für diese Locale zurück.

## Beschreibung

Während der größte Teil der Welt den gregorianischen Kalender verwendet, gibt es weltweit mehrere regionale Kalender-Epochen. Der Wert der `calendar`-Eigenschaft wird zur Zeit der Konstruktion entweder durch den `ca`-Schlüssel des Locale-Bezeichners oder durch die `calendar`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors festgelegt. Letztere hat Vorrang, wenn beide vorhanden sind; und wenn keine von beiden vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Für eine Liste der unterstützten Kalender-Typen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

Der Set-Zugriff von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Kalender-Typ zum {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument des Konstruktors hinzugefügt werden.

### Hinzufügen eines Kalender-Typs über den Locale-String

In der [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) sind Kalender-Epochen-Typen Locale-Schlüssel-„Erweiterungs-Subtags“. Diese Subtags fügen zusätzliche Daten zur Locale hinzu und werden zu Locale-Bezeichnern hinzugefügt, indem die `-u`-Erweiterung verwendet wird. So kann der Kalender-Epochen-Typ zum ursprünglichen Locale-Bezeichner-String hinzugefügt werden, der in den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird. Um den Kalender-Typ hinzuzufügen, fügen Sie zuerst die `-u`-Erweiterung zum String hinzu. Fügen Sie anschließend die `-ca`-Erweiterung hinzu, um anzugeben, dass Sie einen Kalender-Typ hinzufügen. Schließlich fügen Sie den Kalender-Epochen-Typ zum String hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // Prints "buddhist"
```

### Hinzufügen eines Kalender-Typs über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das eine der mehreren Erweiterungsarten, einschließlich Kalender, enthalten kann. Setzen Sie die `calendar`-Eigenschaft des Konfigurationsobjekts auf die gewünschte Kalender-Epoche und übergeben Sie sie dann in den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Unicode-Locale-Daten-Auszeichnungssprache-Spezifikation
