---
title: Intl.Locale.prototype.numberingSystem
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`numberingSystem`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}} Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für diese Lokalisierung zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Eine Liste unterstützter Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

Der Wert der `numberingSystem`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `nu`-Schlüssel des Lokalisierungsbezeichners oder durch die `numberingSystem`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktors. Wenn beide vorhanden sind, hat Letzteres Vorrang; sind beide nicht vorhanden, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `numberingSystem` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Lokalisierungs-Subtags kann der Zahlensystemtyp dem {{jsxref("Intl.Locale")}}-Objekt über den Lokalisierungsstring oder ein Konfigurationsobjekt-Argument für den Konstruktor hinzugefügt werden.

### Hinzufügen eines Zahlensystems über den Lokalisierungsstring

Im [Unicode-Lokalisierungsstring-Spezifikationen](https://www.unicode.org/reports/tr35/) ist `numberingSystem` ein "Erweiterungssubtag". Diese Subtags fügen zusätzliche Daten über die Lokalisierung hinzu und werden den Lokalisierungsbezeichnern unter Verwendung des `-u` Erweiterungsschlüssels hinzugefügt. Um den Zahlensystemtyp dem anfänglichen Lokalisierungsbezeichnerstring hinzuzufügen, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor übergeben wird, fügen Sie zuerst den `-u` Erweiterungsschlüssel hinzu, wenn er nicht existiert. Fügen Sie dann die `-nu` Erweiterung hinzu, um anzugeben, dass Sie ein Zahlensystem hinzufügen. Fügen Sie schließlich den Zahlensystemtyp hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Hinzufügen eines Zahlensystems über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen, einschließlich Zahlensystemtypen, enthalten kann. Setzen Sie die `numberingSystem`-Eigenschaft des Konfigurationsobjekts auf den gewünschten Zahlensystemtyp und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { numberingSystem: "latn" });
console.log(locale.numberingSystem); // "latn"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getNumberingSystems()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems)
- [Details zu den standardisierten Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
