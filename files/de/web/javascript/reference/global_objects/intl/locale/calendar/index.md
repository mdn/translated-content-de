---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Die Accessor-Eigenschaft **`calendar`** von {{jsxref("Intl.Locale")}}-Instanzen gibt den Kalendertyp für dieses Gebietsschema zurück.

## Beschreibung

Obwohl der größte Teil der Welt den gregorianischen Kalender verwendet, gibt es weltweit verschiedene regionale Kalendertypen. Eine Liste der unterstützten Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

Der Wert der Eigenschaft `calendar` wird bei der Erstellung festgelegt, entweder über den Schlüssel `ca` des Gebietsschemabezeichners oder über die Option `calendar` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Die Option hat Vorrang, wenn beide angegeben sind. Ist keiner von beiden angegeben, hat die Eigenschaft den Wert `undefined`.

Der set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Gebietsschema-Subtags kann der Kalendertyp dem {{jsxref("Intl.Locale")}}-Objekt über die Gebietsschema-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Kalendertyp über die Gebietsschema-Zeichenfolge hinzufügen

In der [Spezifikation für Unicode-Gebietsschema-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `calendar` ein „Erweiterungs-Subtag“. Diese Subtags ergänzen weitere Angaben zum Gebietsschema und werden Gebietsschemabezeichnern mithilfe des Erweiterungsschlüssels `-u` hinzugefügt. Um der anfänglichen Gebietsschema-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, einen Kalendertyp hinzuzufügen, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-ca` hinzu, um anzugeben, dass ein Kalendertyp folgt. Fügen Sie zum Schluss den Kalendertyp hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist"
```

### Kalendertyp über ein Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt, das verschiedene Erweiterungstypen enthalten kann, darunter Kalender. Setzen Sie die Eigenschaft `calendar` des Konfigurationsobjekts auf den gewünschten Kalendertyp und übergeben Sie das Objekt anschließend an den Konstruktor.

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
- [Unicode Calendar Identifier](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Spezifikation der Unicode Locale Data Markup Language
