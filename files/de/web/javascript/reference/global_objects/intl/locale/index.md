---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.Locale`**-Objekt ist eine standardmäßige eingebaute Eigenschaft des Intl-Objekts, die einen Unicode-Locale-Identifier darstellt.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Beschreibung

Das **`Intl.Locale`**-Objekt wurde entwickelt, um die Handhabung von Unicode-Locale zu erleichtern. Unicode repräsentiert Locales mit einem String, genannt _Locale-Identifier_. Der Locale-Identifier besteht aus einem _Sprach-Identifier_ und _Erweiterungstags_. Sprach-Identifier sind der Kern des Locale und bestehen aus _Sprache_, _Schrift_ und _Region-Subtags_. Zusätzliche Informationen über das Locale werden in den optionalen _Erweiterungstags_ gespeichert. Erweiterungstags enthalten Informationen über Aspekte des Locale wie Kalendertyp, Uhrentyp und Nummernsystemtyp.

Traditionell verwendete die Intl-API Strings, um Locales darzustellen, genau wie Unicode es tut. Dies ist eine einfache und ressourcenschonende Lösung, die gut funktioniert. Das Hinzufügen einer Locale-Klasse erleichtert jedoch das Parsen und Manipulieren der Sprache, Schrift und Region sowie der Erweiterungstags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Subtags eines Unicode-Locale-Identifiers:

| Eigenschaft                                                   | Entsprechendes Subtag        |
| ------------------------------------------------------------- | ---------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}                | `language` (erster Teil)     |
| {{jsxref("Intl/Locale/script", "script")}}                    | `script` (zweiter Teil)      |
| {{jsxref("Intl/Locale/region", "region")}}                    | `region` (zweiter/dritter Teil) |
| {{jsxref("Intl/Locale/calendar", "calendar")}}                | `ca` (Erweiterung)           |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}              | `kf` (Erweiterung)           |
| {{jsxref("Intl/Locale/collation", "collation")}}              | `co` (Erweiterung)           |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}              | `hc` (Erweiterung)           |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}  | `nu` (Erweiterung)           |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                  | `kn` (Erweiterung)           |

Die oben genannten Informationen werden exakt so bereitgestellt, wie sie beim Erstellen des `Locale`-Objekts angegeben werden, ohne eine externe Datenbank zu konsultieren. Das `Intl.Locale`-Objekt bietet zusätzlich einige Methoden, die Informationen über die reale Welt des Locales zurückgeben, wie verfügbare Kalender, Kollationen und Nummerierungssysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen geteilt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt grundlegende, zentrale Informationen über das `Locale` in Form eines Unterstrings der vollständigen Datenkette zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalenderära des Locale angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob die Groß-/Kleinschreibung bei den Kollationsregeln des Locale berücksichtigt wird.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp für das `Locale` zurück, der verwendet wird, um Strings entsprechend den Regeln des Locale zu sortieren.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Locale`-Instanzen ist der Initialwert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}}-Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformat-Konventionssystem zurück, das vom Locale verwendet wird.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die Sprache zurück, die mit dem Locale assoziiert ist.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das Zahlensystem zurück, das vom Locale verwendet wird.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob das Locale eine spezielle Kollationsbehandlung für numerische Zeichen hat.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Region der Welt (normalerweise ein Land) zurück, die mit dem Locale assoziiert ist.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt die Schrift zurück, die für das Schreiben der spezifischen Sprache verwendet wird, die im Locale verwendet wird.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der Initialwert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} von verfügbaren Kalender-Identifikatoren entsprechend den Regeln des Locale zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Kollationstypen für das `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Stundenzyklus-Identifikatoren zurück, die entweder die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das ungenutzte Format "h24" anzeigen.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} von Nummerierungssystem-Identifikatoren zurück, die gemäß den Regeln des Locale verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Anordnung der Zeichen `ltr` (links-nach-rechts) oder `rtl` (rechts-nach-links) angibt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeitzonen-Identifikatoren zurück, die mit dem `Locale` assoziiert sind.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Locale-Regeln zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ruft die wahrscheinlichsten Werte für die Sprache, Schrift und Region des Locale basierend auf bestehenden Werten ab.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über das Locale zu entfernen, die durch Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt die vollständige Locale-Identifier-Zeichenkette des Locale zurück.

## Beispiele

### Grundlegende Nutzung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor einen Locale-Identifier-String als Argument:

```js
const us = new Intl.Locale("en-US");
```

### Verwendung des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt-Argument, das mehrere Erweiterungstypen enthalten kann. Zum Beispiel können Sie die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf Ihren gewünschten Stundenzugtyp setzen und dann in den Konstruktor übergeben:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Gibt "h12" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Kanonische Unicode-Locale-Identifier](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markup-Sprachspezifikation
