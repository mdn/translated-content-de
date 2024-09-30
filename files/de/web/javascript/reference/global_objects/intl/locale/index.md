---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.Locale`**-Objekt ist eine standardmäßige eingebaute Eigenschaft des Intl-Objekts, die einen Unicode-Lokalisierungsbezeichner repräsentiert.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Beschreibung

Das **`Intl.Locale`**-Objekt wurde erstellt, um die Manipulation von Unicode-Lokalisierungen zu erleichtern. Unicode repräsentiert Lokalisierungen mit einem String, der als _locale identifier_ bezeichnet wird. Der Locale-Identifier besteht aus einem _language identifier_ und _extension tags_. Sprachkennungen sind der Kern der Lokalisierung und bestehen aus den Teilen _Sprache_, _Schrift_ und _Region_. Zusätzliche Informationen zur Lokalisierung werden in den optionalen _extension tags_ gespeichert. Erweiterungstags enthalten Informationen über Aspekte der Lokalisierung wie Kalendertyp, Uhrentyp und Arten des Nummerierungssystems.

Traditionell verwendete die Intl API Zeichenfolgen zur Darstellung von Lokalisierungen, genau wie Unicode. Dies ist eine einfache und leichte Lösung, die gut funktioniert. Die Hinzufügung einer Locale-Klasse erleichtert jedoch das Parsen und Manipulieren der Sprache, Schrift und Region sowie der Extension-Tags. Die folgenden Eigenschaften von `Intl.Locale` entsprechen den Untertags des Unicode-Lokalisierungsbezeichners:

| Eigenschaft                                                 | Entsprechendes Subtag         |
| ----------------------------------------------------------- | ----------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}              | `language` (erster Teil)      |
| {{jsxref("Intl/Locale/script", "script")}}                  | `script` (zweiter Teil)       |
| {{jsxref("Intl/Locale/region", "region")}}                  | `region` (zweiter/dritter Teil) |
| {{jsxref("Intl/Locale/calendar", "calendar")}}              | `ca` (Erweiterung)            |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}            | `kf` (Erweiterung)            |
| {{jsxref("Intl/Locale/collation", "collation")}}            | `co` (Erweiterung)            |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}            | `hc` (Erweiterung)            |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}}| `nu` (Erweiterung)            |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                | `kn` (Erweiterung)            |

Die obigen Informationen werden genau so bereitgestellt, wie sie sind, wenn das `Locale`-Objekt erstellt wird, ohne eine externe Datenbank zu konsultieren. Zusätzlich bietet das `Intl.Locale`-Objekt einige Methoden, die Informationen über die reale Welt der Lokalisierung zurückgeben, wie verfügbare Kalender, Kollationen und Nummerierungssysteme.

## Konstruktor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Erstellt ein neues `Locale`-Objekt.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Locale.prototype` definiert und werden von allen `Intl.Locale`-Instanzen gemeinsam genutzt.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Gibt Basisinformationen über das `Locale` in Form eines Substrings der vollständigen Datenzeichenfolge zurück.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Gibt den Teil des `Locale` zurück, der die Kalenderära der Lokalisierung angibt.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Gibt zurück, ob Großbuchstaben bei den Kollationsregeln der Lokalisierung berücksichtigt werden.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Gibt den Kollationstyp für das `Locale` zurück, der verwendet wird, um Zeichenfolgen gemäß den Regeln der Lokalisierung zu ordnen.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Locale`-Instanzen ist der Anfangswert der {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} Konstruktor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Gibt das Zeitformat (Uhrsystem) zurück, das von der Lokalisierung verwendet wird.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Gibt die mit der Lokalisierung assoziierte Sprache zurück.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Gibt das Numeralsystem zurück, das von der Lokalisierung verwendet wird.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Gibt zurück, ob die Lokalisierung eine spezielle Kollationsverarbeitung für numerische Zeichen bietet.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Gibt die Region der Welt (normalerweise ein Land) zurück, die mit der Lokalisierung assoziiert ist.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Gibt die Schrift zurück, die für die Sprache der Lokalisierung verwendet wird.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der Zeichenfolgentyp `"Intl.Locale"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Gibt ein {{jsxref("Array")}} der verfügbaren Kalenderbezeichner gemäß den Regeln der Lokalisierung zurück.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Gibt ein {{jsxref("Array")}} der Kollationstypen für das `Locale` zurück.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Gibt ein {{jsxref("Array")}} von Stundentaktkennungen zurück, die entweder die 12-Stunden-Uhr ("h12"), die japanische 12-Stunden-Uhr ("h11"), die 24-Stunden-Uhr ("h23") oder das ungenutzte Format "h24" anzeigen.
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Gibt ein {{jsxref("Array")}} der Nummerierungssystemkennungen zurück, die gemäß den Regeln der Lokalisierung verfügbar sind.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Gibt den Teil zurück, der die Anordnung der Zeichen `ltr` (von links nach rechts) oder `rtl` (von rechts nach links) angibt.
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Gibt ein {{jsxref("Array")}} der mit dem `Locale` assoziierten Zeitzonenkennungen zurück.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Gibt die [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) gemäß den Lokalisierungsregeln zurück.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Ruft die wahrscheinlichsten Werte für die Sprache, das Skript und die Region der Lokalisierung basierend auf vorhandenen Werten ab.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Versucht, Informationen über die Lokalisierung zu entfernen, die durch den Aufruf von {{jsxref("Intl/Locale/maximize", "maximize()")}} hinzugefügt würden.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Gibt die vollständige Locale-Identifikator-Zeichenfolge des `Locale` zurück.

## Beispiele

### Grundlegende Verwendung

Im einfachsten Fall nimmt der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor einen Locale-Identifier-String als Argument an:

```js
const us = new Intl.Locale("en-US");
```

### Verwenden des Locale-Konstruktors mit einem Optionsobjekt

Der Konstruktor nimmt auch ein optionales Konfigurationsobjekt als Argument, das eine der verschiedenen Erweiterungsarten enthalten kann. Beispielsweise setzen Sie die {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}-Eigenschaft des Konfigurationsobjekts auf den gewünschten Stundentyp und übergeben Sie sie dann an den Konstruktor:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Kanonische Unicode-Locale-Bezeichner](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in der Unicode-Locale-Daten-Markupsprache-Spezifikation
