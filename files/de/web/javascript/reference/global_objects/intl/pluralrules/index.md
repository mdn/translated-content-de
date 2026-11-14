---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
l10n:
  sourceCommit: d6148909942b2cb6e43760db183c2b3815f4387a
---

Das Objekt **`Intl.PluralRules`** ermöglicht die Formatierung unter Berücksichtigung von Pluralformen und die Anwendung sprachspezifischer Pluralregeln.

## Beschreibung

Sprachen verwenden unterschiedliche Muster, um Anzahlen von Dingen (Kardinalzahlen) und die Reihenfolge von Dingen (Ordinalzahlen) auszudrücken.
Im Englischen gibt es zwei Formen für Kardinalzahlen: eine für „item“ im Singular (1 hour, 1 dog, 1 fish) und eine für null oder jede andere Anzahl von „items“ (0 hours, 2 lemmings, 100000.5 fish). Im Chinesischen gibt es dagegen nur eine Form, im Arabischen sogar sechs!
Für Ordinalzahlen gibt es im Englischen vier Formen: „th“, „st“, „nd“ und „rd“. Daraus ergibt sich die Folge 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th und so weiter. Im Chinesischen und Arabischen gibt es dagegen jeweils nur eine Form für Ordinalzahlen.

Für eine bestimmte Sprache und eine Reihe von Formatierungsoptionen geben die Methoden [`Intl.PluralRules.prototype.select()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select) und [`Intl.PluralRules.prototype.selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) einen _Tag_ zurück, der die Pluralform einer einzelnen Zahl beziehungsweise eines Zahlenbereichs repräsentiert – sowohl für Kardinal- als auch für Ordinalzahlen.
Code kann die zurückgegebenen Tags verwenden, um Zahlen für die jeweilige Sprache passend darzustellen.
Die vollständige Menge der möglichen Tags lautet: `zero`, `one`, `two`, `few`, `many` und `other` (die „allgemeine“ Pluralform, die auch verwendet wird, wenn die Sprache nur eine Form hat).

Da es im Englischen nur zwei Formen für Kardinalzahlen gibt, gibt die Methode `select()` nur zwei Tags zurück: `"one"` für den Singular und `"other"` für alle anderen Kardinalzahlen.
So lassen sich für beide Fälle sinnvolle englische Sätze bilden, etwa „1 dog is happy; do you want to play with it?“ und „10 dogs are happy; do you want to play with them?“.

Welche Sätze für die einzelnen Formen geeignet sind, hängt von der Sprache ab. Selbst im Englischen reicht es möglicherweise nicht aus, für den Plural einfach ein „s“ an ein Substantiv anzuhängen.
Das obige Beispiel zeigt, dass sich die Form auf Folgendes auswirken kann:

- **Substantive**: 1 dog, 2 dogs (anders als bei „fish“ oder „sheep“, deren Singular- und Pluralform identisch sind).
- **Verben**: 1 dog _is_ happy, 2 dogs _are_ happy.
- **Pronomen** (und andere Bezugsausdrücke): Do you want to play with _it_ / _them_.

Andere Sprachen haben mehr Formen, und die Wahl passender Sätze kann noch komplexer sein.

Für Ordinalzahlen im Englischen kann `select()` jeden von vier Tags zurückgeben, die jeweils eine der möglichen Formen repräsentieren: `one` für Zahlen mit „st“ (1, 21, 31, ...), `two` für Zahlen mit „nd“ (2, 22, 32, ...), `few` für Zahlen mit „rd“ (3, 33, 43, ...) und `other` für Zahlen mit „th“ (0, 4-20 usw.).
Auch hier ermöglichen die zurückgegebenen Tags eine passende Formatierung von Zeichenfolgen, die eine Ordinalzahl beschreiben.

Weitere Informationen zu den Regeln und ihrer Verwendung finden Sie unter [Pluralregeln](https://cldr.unicode.org/index/cldr-spec/plural-rules).
Eine Liste der Regeln und ihrer Anwendung in verschiedenen Sprachen finden Sie unter [LDML-Sprachregeln für Pluralformen](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Konstruktor

- {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : Erstellt ein neues `Intl.PluralRules`-Objekt.

## Statische Methoden

- {{jsxref("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Gibt ein Array mit den übergebenen Locales zurück, die unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.PluralRules.prototype` definiert und werden von allen `Intl.PluralRules`-Instanzen gemeinsam verwendet.

- {{jsxref("Object/constructor", "Intl.PluralRules.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `Intl.PluralRules`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules")}}.
- `Intl.PluralRules.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist die Zeichenfolge `"Intl.PluralRules"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Initialisierung des Objekts ermittelten Optionen für Locale und Pluralformen widerspiegeln.
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : Gibt eine Zeichenfolge zurück, die angibt, welche Pluralregel für die localeabhängige Formatierung verwendet werden soll.
- {{jsxref("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : Diese Methode nimmt zwei Werte entgegen und gibt eine Zeichenfolge zurück, die angibt, welche Pluralregel für die localeabhängige Formatierung verwendet werden soll.

## Beispiele

### Locales verwenden

Dieses Beispiel zeigt einige Unterschiede zwischen den lokalisierten Pluralregeln für Kardinalzahlen.

Damit Sie die Formatierung für die Sprache der Benutzeroberfläche Ihrer Anwendung erhalten, geben Sie diese Sprache (und gegebenenfalls einige Ausweichsprachen) über das Argument [Konstruktorargument `locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#locales) an:

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

### Optionen verwenden

Die Pluralform der angegebenen Zahl kann auch von den [Konstruktoroptionen `options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options) abhängen, beispielsweise davon, wie die Zahl gerundet wird und ob es sich um eine Kardinal- oder Ordinalzahl handelt.

Dieses Beispiel zeigt, wie Sie den Regeltyp auf „ordinal“ setzen können und wie sich dies bei einigen Zahlen im US-Englischen auf die Form auswirkt.

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

### Text mit dem zurückgegebenen Tag formatieren

Der folgende Code erweitert das vorherige Beispiel und zeigt, wie Sie den für eine Ordinalzahl zurückgegebenen Tag verwenden können, um englischen Text zu formatieren.

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

- [Polyfill für `Intl.PluralRules` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-pluralrules/)
- {{jsxref("Intl")}}
