---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.PluralRules`**-Objekt ermöglicht formatsensitives Pluralisieren und pluralbezogene Sprachregeln.

## Beschreibung

Sprachen verwenden unterschiedliche Muster, um sowohl Pluralzahlen von Objekten (Kardinalzahlen) als auch die Reihenfolge von Objekten (Ordinalzahlen) auszudrücken.
Englisch hat zwei Formen zur Darstellung von Kardinalzahlen: eine für das Singular "item" (1 Stunde, 1 Hund, 1 Fisch) und eine andere für null oder jede andere Anzahl von "items" (0 Stunden, 2 Lemminge, 100000.5 Fische), während Chinesisch nur eine Form hat und Arabisch sechs!
Ähnlich hat Englisch vier Formen für Ordinalzahlen: "th", "st", "nd", "rd", die die Sequenz ergeben: 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th und so weiter, während sowohl Chinesisch als auch Arabisch nur eine Form für Ordinalzahlen haben.

Mit einer bestimmten Sprache und einer Reihe von Formatierungsoptionen geben die Methoden [`Intl.PluralRules.prototype.select()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select) und [`Intl.PluralRules.prototype.selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) ein _Tag_ zurück, das die Pluralform einer einzelnen oder einer Reihe von Zahlen, kardinal oder ordinal, darstellt.
Der Code kann die zurückgegebenen Tags verwenden, um Zahlen entsprechend der gegebenen Sprache darzustellen.
Der vollständige Satz von Tags, die zurückgegeben werden könnten, sind: `zero`, `one`, `two`, `few`, `many` und `other` (die "allgemeine" Pluralform, die auch verwendet wird, wenn die Sprache nur eine Form hat).

Da Englisch nur zwei Formen für Kardinalzahlen hat, gibt die `select()`-Methode nur zwei Tags zurück: `"one"` für den Singularfall und `"other"` für alle anderen Kardinalzahlen.
Dies ermöglicht den Aufbau von Sätzen, die in Englisch für jeden Fall sinnvoll sind, wie: "1 dog is happy; do you want to play with it?" und "10 dogs are happy; do you want to play with them?".

Die Konstruktion geeigneter Sätze für jede Form hängt von der Sprache ab und kann auch im Englischen nicht so einfach sein, wie nur ein "s" an ein Substantiv anzuhängen, um die Pluralform zu bilden.
Im obigen Beispiel sehen wir, dass die Form beeinflussen kann:

- **Substantive**: 1 Hund/2 Hunde (aber nicht "fish" oder "sheep", die dieselbe Singular- und Pluralform haben).
- **Verben**: 1 Hund _is_ happy, 2 Hunde _are_ happy
- **Pronomen** (und andere Referenzen): Möchten Sie mit _it_ / _them_ spielen.

Andere Sprachen haben mehr Formen, und die Auswahl geeigneter Sätze kann noch komplexer sein.

`select()` kann für Ordinalzahlen im Englischen eines von vier Tags zurückgeben, die jede der zulässigen Formen darstellen: `one` für "st"-Zahlen (1, 21, 31, ...), `two` für "nd"-Zahlen (2, 22, 32, ...), `few` für "rd"-Zahlen (3, 33, 43, ...) und `other` für "th"-Zahlen (0, 4-20, usw.).
Erneut ermöglichen die zurückgegebenen Tags die angemessene Formatierung von Zeichenfolgen, die eine Ordinalzahl beschreiben.

Für weitere Informationen über die Regeln und wie sie verwendet werden, siehe [Plural Rules](https://cldr.unicode.org/index/cldr-spec/plural-rules).
Für eine Liste der Regeln und wie sie für verschiedene Sprachen angewendet werden, siehe die [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Konstruktor

- {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : Erstellt ein neues `Intl.PluralRules`-Objekt.

## Statische Methoden

- {{jsxref("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Gibt ein Array mit denjenigen der bereitgestellten Lokalen zurück, die ohne Rückgriff auf das Standard-Locale des Laufzeitsystems unterstützt werden.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.PluralRules.prototype` definiert und werden von allen `Intl.PluralRules`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.PluralRules.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.PluralRules`-Instanzen ist der Anfangswert der {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules")}}-Konstruktor.
- `Intl.PluralRules.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Intl.PluralRules"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die das Locale und die Kollationsoptionen widerspiegeln, die während der Initialisierung des Objekts berechnet wurden.
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : Gibt eine Zeichenkette zurück, die anzeigt, welche Pluralregel für lokalisierungsbewusste Formatierung zu verwenden ist.
- {{jsxref("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : Diese Methode nimmt zwei Werte entgegen und gibt eine Zeichenkette zurück, die anzeigt, welche Pluralregel für lokalisierungsbewusste Formatierung zu verwenden ist.

## Beispiele

### Verwendung von Lokalen

Dieses Beispiel zeigt einige der Variationen in lokalisierten Pluralregeln für Kardinalzahlen.

Um das Format für die in der Benutzeroberfläche Ihrer Anwendung verwendete Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) über das [Konstruktor-`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#locales) Argument angeben:

```js
// US-Englisch
const enCardinalRules = new Intl.PluralRules("en-US");
console.log(enCardinalRules.select(0)); // "other"
console.log(enCardinalRules.select(1)); // "one"
console.log(enCardinalRules.select(2)); // "other"
console.log(enCardinalRules.select(3)); // "other"

// Arabisch
const arCardinalRules = new Intl.PluralRules("ar-EG");
console.log(arCardinalRules.select(0)); // "zero"
console.log(arCardinalRules.select(1)); // "one"
console.log(arCardinalRules.select(2)); // "two"
console.log(arCardinalRules.select(6)); // "few"
console.log(arCardinalRules.select(18)); // "many"
```

### Verwendung von Optionen

Die Pluralform der angegebenen Zahl kann auch von [Konstruktor-`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options) abhängen, z. B. wie die Zahl gerundet wird und ob sie kardinal oder ordinal ist.

Dieses Beispiel zeigt, wie Sie den Regeltyp auf "ordinal" setzen können und wie sich dies auf die Form einiger Zahlen im US-Englischen auswirkt.

```js
// US-Englisch - ordinal
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
console.log(enOrdinalRules.select(0)); // "other" (0th)
console.log(enOrdinalRules.select(1)); // "one"   (1st)
console.log(enOrdinalRules.select(2)); // "two"   (2nd)
console.log(enOrdinalRules.select(3)); // "few"   (3rd)
console.log(enOrdinalRules.select(4)); // "other" (4th)
console.log(enOrdinalRules.select(21)); // "one"  (21st)
```

### Formatierung von Text mit dem zurückgegebenen Tag

Der folgende Code erweitert das vorherige Beispiel und zeigt, wie Sie das für eine Ordinalzahl zurückgegebene Tag verwenden könnten, um Text in Englisch zu formatieren.

```js
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = enOrdinalRules.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.PluralRules` in FormatJS](https://formatjs.io/docs/polyfills/intl-pluralrules/)
- {{jsxref("Intl")}}