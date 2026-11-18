---
title: Intl.Locale.prototype.hourCycle
short-title: hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`hourCycle`** von {{jsxref("Intl.Locale")}}-Instanzen gibt den Stundenzählungstyp für dieses Gebietsschema zurück.

## Beschreibung

Weltweit werden hauptsächlich zwei Arten der Zeitanzeige verwendet: das 12-Stunden-Format und das 24-Stunden-Format. Eine Liste der unterstützten Stundenzählungstypen finden Sie unter [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles#supported_hour_cycle_types).

Der Wert der Eigenschaft `hourCycle` wird beim Erstellen der Instanz festgelegt: entweder durch den Schlüssel `hc` im Gebietsschemabezeichner oder durch die Option `hourCycle` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Sind beide vorhanden, hat die Option Vorrang. Ist keiner von beiden vorhanden, hat die Eigenschaft den Wert `undefined`.

Der Setter-Accessor von `hourCycle` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Teilkennungen eines Gebietsschemas kann der Stundenzählungstyp dem {{jsxref("Intl.Locale")}}-Objekt über die Gebietsschema-Zeichenfolge oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Stundenzählungstyp über die Gebietsschema-Zeichenfolge hinzufügen

Gemäß der [Spezifikation für Unicode-Gebietsschema-Zeichenfolgen](https://www.unicode.org/reports/tr35/) ist `hourCycle` eine „Erweiterungs-Teilkennung“. Solche Teilkennungen enthalten zusätzliche Informationen zum Gebietsschema und werden Gebietsschemabezeichnern mithilfe des Erweiterungsschlüssels `-u` hinzugefügt. Um der anfänglichen Gebietsschema-Zeichenfolge, die an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird, einen Stundenzählungstyp hinzuzufügen, fügen Sie zunächst den Erweiterungsschlüssel `-u` hinzu, falls er noch nicht vorhanden ist. Fügen Sie anschließend die Erweiterung `-hc` hinzu, um anzugeben, dass Sie einen Stundenzählungstyp hinzufügen. Geben Sie zuletzt den Stundenzählungstyp an.

```js
const locale = new Intl.Locale("fr-FR-u-hc-h23");
console.log(locale.hourCycle); // "h23"
```

### Stundenzählungstyp über ein Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert ein optionales Konfigurationsobjekt als Argument. Dieses kann verschiedene Erweiterungstypen enthalten, darunter Stundenzählungstypen. Setzen Sie die Eigenschaft `hourCycle` des Konfigurationsobjekts auf den gewünschten Stundenzählungstyp und übergeben Sie das Objekt anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(locale.hourCycle); // "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getHourCycles()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles)
- [Unicode Hour Cycle Identifier](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier) in der Spezifikation der Unicode Locale Data Markup Language
