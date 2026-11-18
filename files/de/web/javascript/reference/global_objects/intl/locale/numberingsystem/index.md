---
title: Intl.Locale.prototype.numberingSystem
short-title: numberingSystem
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`numberingSystem`** von {{jsxref("Intl.Locale")}}-Instanzen gibt das [Zahlensystem](https://en.wikipedia.org/wiki/Numeral_system) für diese Locale zurück.

## Beschreibung

Ein Zahlensystem ist ein System zur Darstellung von Zahlen. Eine Liste der unterstützten Zahlensystemtypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_numbering_system_types).

Der Wert der Eigenschaft `numberingSystem` wird beim Erstellen der Instanz festgelegt: entweder über den Schlüssel `nu` im Locale-Bezeichner oder über die Option `numberingSystem` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Wenn beide vorhanden sind, hat die Option Vorrang. Ist keiner von beiden vorhanden, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `numberingSystem` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der Zahlensystemtyp dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Ein Zahlensystem über den Locale-String hinzufügen

Gemäß der [Unicode-Spezifikation für Locale-Strings](https://www.unicode.org/reports/tr35/) ist `numberingSystem` ein „Erweiterungs-Subtag“. Solche Subtags liefern zusätzliche Informationen über die Locale und werden Locale-Bezeichnern mit dem Erweiterungsschlüssel `-u` hinzugefügt. Um den Zahlensystemtyp dem ursprünglichen Locale-Bezeichner hinzuzufügen, der an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-nu` hinzu, um anzugeben, dass Sie ein Zahlensystem hinzufügen. Fügen Sie zuletzt den Zahlensystemtyp hinzu.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-nu-mong");
console.log(locale.numberingSystem); // "mong"
```

### Ein Zahlensystem über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt. Dieses kann verschiedene Erweiterungstypen enthalten, darunter Zahlensystemtypen. Setzen Sie die Eigenschaft `numberingSystem` des Konfigurationsobjekts auf den gewünschten Zahlensystemtyp und übergeben Sie das Objekt dann an den Konstruktor.

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
