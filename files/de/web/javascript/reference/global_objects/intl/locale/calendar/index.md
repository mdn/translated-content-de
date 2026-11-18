---
title: Intl.Locale.prototype.calendar
short-title: calendar
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`calendar`** von {{jsxref("Intl.Locale")}}-Instanzen gibt den Kalendertyp für dieses Gebietsschema zurück.

## Beschreibung

Obwohl der Großteil der Welt den gregorianischen Kalender verwendet, gibt es weltweit verschiedene regionale Kalendertypen. Eine Liste der unterstützten Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types).

Der Wert der Eigenschaft `calendar` wird bei der Erstellung festgelegt, entweder über den Schlüssel `ca` im Gebietsschemabezeichner oder über die Option `calendar` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Wenn beide angegeben sind, hat die Option Vorrang. Ist keiner von beiden angegeben, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `calendar` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Untertags eines Gebietsschemas kann der Kalendertyp dem {{jsxref("Intl.Locale")}}-Objekt entweder über die Gebietsschema-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Einen Kalendertyp über die Gebietsschema-Zeichenfolge hinzufügen

Gemäß der [Spezifikation für Unicode-Gebietsschema-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `calendar` ein „Erweiterungs-Untertag“. Diese Untertags liefern zusätzliche Informationen über das Gebietsschema und werden Gebietsschemabezeichnern mithilfe des Erweiterungsschlüssels `-u` hinzugefügt. Um der ursprünglichen Gebietsschema-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, einen Kalendertyp hinzuzufügen, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-ca` hinzu, um anzugeben, dass ein Kalendertyp folgt. Fügen Sie schließlich den Kalendertyp hinzu.

```js
const locale = new Intl.Locale("fr-FR-u-ca-buddhist");
console.log(locale.calendar); // "buddhist"
```

### Einen Kalendertyp über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungstypen enthalten, darunter Kalendertypen. Setzen Sie die Eigenschaft `calendar` des Konfigurationsobjekts auf den gewünschten Kalendertyp und übergeben Sie das Objekt anschließend an den Konstruktor.

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
- [Unicode-Kalenderbezeichner](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier) in der Spezifikation der Unicode-Gebietsschemadaten-Auszeichnungssprache
