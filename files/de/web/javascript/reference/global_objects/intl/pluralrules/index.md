---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Intl.PluralRules`**-Objekt ermöglicht eine pluralempfindliche Formatierung und pluralbezogene Sprachregeln.

## Beschreibung

Sprachen verwenden unterschiedliche Muster, um sowohl Mehrzahl von Gegenständen (kardinale Zahlen) als auch die Reihenfolge von Gegenständen (ordinale Zahlen) auszudrücken.
Englisch hat zwei Formen zur Darstellung von kardinalen Zahlen: eine für das Singular "item" (1 hour, 1 dog, 1 fish) und eine andere für null oder jede andere Anzahl von "items" (0 hours, 2 lemmings, 100000.5 fish), während Chinesisch nur eine Form hat und Arabisch sechs!
Ähnlich hat Englisch vier Formen für ordinale Zahlen: "th", "st", "nd", "rd", was die Reihenfolge ergibt: 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th usw., während sowohl Chinesisch als auch Arabisch nur eine Form für ordinale Zahlen haben.

Für eine bestimmte Sprache und eine Reihe von Formatierungsoptionen geben die Methoden [`Intl.PluralRules.prototype.select()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select) und [`Intl.PluralRules.prototype.selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) einen _Tag_ zurück, der die Pluralform einer einzelnen oder einer Reihe von Zahlen darstellt, kardinal oder ordinal.
Der Code kann die zurückgegebenen Tags verwenden, um Zahlen für die gegebene Sprache angemessen darzustellen.
Der vollständige Satz von Tags, der möglicherweise zurückgegeben wird, umfasst: `zero`, `one`, `two`, `few`, `many`, und `other` (die "allgemeine" Pluralform, die auch verwendet wird, wenn die Sprache nur eine Form hat).

Da Englisch nur zwei Formen für kardinale Zahlen hat, gibt die Methode `select()` nur zwei Tags zurück: `"one"` für den Singularfall und `"other"` für alle anderen kardinalen Zahlen.
Dies ermöglicht den Aufbau von Sätzen, die im Englischen in jedem Fall Sinn ergeben, wie zum Beispiel: "1 dog is happy; do you want to play with it?" und "10 dogs are happy; do you want to play with them?".

Das Erstellen geeigneter Sätze für jede Form hängt von der Sprache ab und kann selbst im Englischen nicht so einfach sein, wie einfach nur ein "s" an ein Substantiv anzufügen, um die Pluralform zu bilden.
Anhand des obigen Beispiels sehen wir, dass die Form beeinflussen kann:

- **Substantive**: 1 dog/2 dogs (aber nicht "fish" oder "sheep", die dieselbe Singular- und Pluralform haben).
- **Verben**: 1 dog _is_ happy, 2 dogs _are_ happy
- **Pronomen** (und andere Bezüge): Möchten Sie mit _it_ / _them_ spielen.

Andere Sprachen haben mehr Formen, und die Auswahl geeigneter Sätze kann noch komplexer sein.

`select()` kann für ordinale Zahlen im Englischen eines von vier Tags zurückgeben, die jeweils eine der zugelassenen Formen darstellen: `one` für "st"-Zahlen (1, 21, 31, ...), `two` für "nd"-Zahlen (2, 22, 32, ...), `few` für "rd"-Zahlen (3, 33, 43, ...) und `other` für "th"-Zahlen (0, 4-20, usw.).
Auch hier ermöglichen die zurückgegebenen Tags eine angemessene Formatierung von Zeichenfolgen, die eine ordinale Zahl beschreiben.

Für weitere Informationen zu den Regeln und deren Verwendung siehe [Pluralregeln](https://cldr.unicode.org/index/cldr-spec/plural-rules).
Für eine Liste der Regeln und deren Anwendung auf verschiedene Sprachen siehe die [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Konstruktor

- {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : Erstellt ein neues `Intl.PluralRules`-Objekt.

## Statische Methoden

- {{jsxref("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die unterstützt werden, ohne auf die standardmäßige Locale des Laufzeitsystems zurückzugreifen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.PluralRules.prototype` definiert und werden von allen `Intl.PluralRules`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.PluralRules.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Intl.PluralRules`-Instanzen ist der Anfangswert der {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules")}}-Konstruktor.
- `Intl.PluralRules.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.PluralRules"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Locale und Kollationsoptionen widerspiegeln, die während der Initialisierung des Objekts berechnet wurden.
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : Gibt einen String zurück, der angibt, welche Pluralregel für localesensibles Formatieren zu verwenden ist.
- {{jsxref("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : Diese Methode empfängt zwei Werte und gibt einen String zurück, der angibt, welche Pluralregel für localesensibles Formatieren zu verwenden ist.

## Beispiele

### Verwendung von Locales

Dieses Beispiel zeigt einige der Variationen in lokalisierten Pluralregeln für kardinale Zahlen.

Um das Format für die Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, sollten Sie sicherstellen, dass Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem [Konstruktor `locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#locales)-Argument angeben:

```js
// US English
const enCardinalRules = new Intl.PluralRules("en-US");
console.log(enCardinalRules.select(0)); // "other"
console.log(enCardinalRules.select(1)); // "one"
console.log(enCardinalRules.select(2)); // "other"
console.log(enCardinalRules.select(3)); // "other"

// Arabic
const arCardinalRules = new Intl.PluralRules("ar-EG");
console.log(arCardinalRules.select(0)); // "zero"
console.log(arCardinalRules.select(1)); // "one"
console.log(arCardinalRules.select(2)); // "two"
console.log(arCardinalRules.select(6)); // "few"
console.log(arCardinalRules.select(18)); // "many"
```

### Verwendung von Optionen

Die Pluralform der angegebenen Zahl kann auch von [Konstruktor-`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options) abhängen, wie z.B. davon, wie die Zahl gerundet wird und ob sie kardinal oder ordinal ist.

Dieses Beispiel zeigt, wie Sie den Regeltyp auf "ordinal" setzen können und wie dies die Form für einige Zahlen im amerikanischen Englisch beeinflusst.

```js
// US English - ordinal
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });
console.log(enOrdinalRules.select(0)); // "other" (0th)
console.log(enOrdinalRules.select(1)); // "one"   (1st)
console.log(enOrdinalRules.select(2)); // "two"   (2nd)
console.log(enOrdinalRules.select(3)); // "few"   (3rd)
console.log(enOrdinalRules.select(4)); // "other" (4th)
console.log(enOrdinalRules.select(21)); // "one"  (21st)
```

### Formatieren von Text unter Verwendung des zurückgegebenen Tags

Der untenstehende Code erweitert das vorherige Beispiel und zeigt, wie Sie das zurückgegebene Tag für eine ordinale Zahl verwenden könnten, um Text im Englischen zu formatieren.

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
