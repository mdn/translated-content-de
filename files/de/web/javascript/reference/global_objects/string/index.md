---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Zeichenfolge darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu halten, die in Textform dargestellt werden können. Einige der am häufigsten verwendeten Operationen mit Strings sind das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Zusammenfügen mit den [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf das Vorhandensein oder den Ort von Teilstrings mit der Methode {{jsxref("String/indexOf", "indexOf()")}} oder das Extrahieren von Teilstrings mit der Methode {{jsxref("String/substring", "substring()")}}.

### Strings erstellen

Strings können als Primitive, aus String-Literalen oder als Objekte unter Verwendung des {{jsxref("String/String", "String()")}}-Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitives und String-Objekte teilen viele Verhaltensweisen, aber es gibt wichtige Unterschiede und Vorbehalte. Siehe "[String-Primitives und String-Objekte](#string-primitives_und_string-objekte)" unten.

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form spezifiziert ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): Mit diesem Format können Sie Ausdrücke interpolieren. Für weitere Informationen zur Syntax von String-Literalen siehe [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichen-Zugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die {{jsxref("String/charAt", "charAt()")}}-Methode:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String wie ein Array-ähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Bei der Verwendung der Klammernotation für den Zeichen-Zugriff wird der Versuch, diese Eigenschaften zu löschen oder ihnen einen Wert zuzuweisen, nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder beschreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Strings vergleichen

Verwenden Sie die [kleiner als und größer als Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

```js
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
```

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings groß-/klein-schreibungssensitiv vergleichen. Eine gängige Methode zum groß-/klein-schreibungsunabhängigen Vergleich von Strings besteht darin, beide vor dem Vergleich in den gleichen Fall (Groß- oder Kleinbuchstaben) zu konvertieren.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, ob durch [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformiert wird, ist meist willkürlich, und keine der beiden ist vollständig robust, wenn sie über das lateinische Alphabet hinausgeht. Zum Beispiel wird der deutsche Kleinbuchstabe `ß` und `ss` beide durch `toUpperCase()` in `SS` umgewandelt, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` gemeldet wird, es sei denn, man verwendet speziell [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine sprach-, versandssensitivere und robuste Lösung zum Testen der groß-/klein-schreibungsunabhängigen Gleichheit ist die Verwendung der {{jsxref("Intl.Collator")}} API oder der `localeCompare()`-Methode des Strings – beide haben dasselbe Interface – mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity)-Option auf `"accent"` oder `"base"` gesetzt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()` Methode ermöglicht einen String-Vergleich in ähnlicher Weise wie `strcmp()` — sie erlaubt das Sortieren von Strings auf eine ortsspezifische Weise.

### String-Primitives und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven Stringwerten")}} unterscheidet. (Das Gleiche gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Zahlen")}}.)

String-Literale (markiert durch doppelte oder einfache Anführungszeichen) und Strings, die von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext zurückgegeben werden (d. h., ohne das Schlüsselwort {{jsxref("Operators/new", "new")}} verwendet zu haben), sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder ein Eigenschaftslookup durchgeführt werden soll, umschließt JavaScript automatisch den String-Primitive und ruft die Methode auf oder führt das Eigenschaftslookup auf dem Wrapper-Objekt durch.

```js
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> [!WARNING]
> Sie sollten selten `String` als Konstruktor verwenden.

String-Primitives und `String`-Objekte liefern auch unterschiedliche Ergebnisse beim Einsatz von {{jsxref("Global_Objects/eval", "eval()")}}. An `eval` übergebene Primitives werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem sie das Objekt zurückgeben. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code beim Auftreten von `String`-Objekten brechen, wenn er stattdessen einen primitiven String erwartet, obwohl Autoren im Allgemeinen den Unterschied nicht beachten müssen.

Ein `String`-Objekt kann immer mit der {{jsxref("String/valueOf", "valueOf()")}}-Methode in sein primitives Gegenstück umgewandelt werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele eingebaute Operationen, die Strings erwarten, bringen ihre Argumente zuerst in Strings um (was größtenteils der Grund ist, warum `String`-Objekte sich ähnlich wie String-Primitives verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit demselben Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit demselben Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zunächst [in ein Primitive umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) durch Aufruf ihrer [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()`-Methoden, in dieser Reihenfolge. Das resultierende Primitive wird dann in einen String konvertiert.

Es gibt mehrere Möglichkeiten, nahezu denselben Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die im obigen Abschnitt beschriebenen Schritte der String-Konvertierung für den eingebetteten Ausdruck aus.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Die Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seinen Operand zu einem _primitiven_ Wert anstelle eines _Strings_ und hat für einige Objekte völlig unterschiedliche Verhaltensweisen gegenüber der normalen String-Konvertierung. Siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Abhängig von Ihrem Anwendungsfall möchten Sie möglicherweise `` `${x}` `` (zur Nachahmung des eingebauten Verhaltens) oder `String(x)` (zur Behandlung von Symbolwerten ohne Fehlermeldung) verwenden, aber Sie sollten `"" + x` nicht verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphemschreibgruppen

Strings werden im Wesentlichen als Sequenzen von [UTF-16-Einheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. Bei der UTF-16-Codierung ist jede Einheit genau 16 Bit lang. Dies bedeutet, dass maximal 2<sup>16</sup>, oder 65536 mögliche Zeichen als einzelne UTF-16-Einheiten darstellbar sind. Diese Zeichensatz wird als [Basic Multilingual Plane (BMP)](<https://de.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die am häufigsten verwendeten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Einheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Allerdings ist der gesamte Unicode-Zeichensatz viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, bei denen es sich um Paare von 16-Bit-Einheiten handelt, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um Zeichen mit einer einzigen Codeeinheit zu codieren. (Genauer sind führende Surrogate, auch als hochsurrogierte Codeeinheiten bekannt, haben Werte zwischen `0xD800` und `0xDBFF`, während nachfolgende Surrogate, auch als tiefsurrogierte Codeeinheiten bekannt, Werte zwischen `0xDC00` und `0xDFFF` haben. Jede Unicode-Zeichen, bestehend aus einer oder zwei UTF-16-Einheiten, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1–6 Hexadezimalziffern repräsentiert.

Ein "verwaistes Surrogat" ist eine 16-Bit-Codeeinheit, die eine der unten beschriebenen Bedingungen erfüllt:

- Es befindet sich im Bereich `0xD800`–`0xDBFF`, inklusive (d.h. eine führende Surrogate), aber es ist die letzte Codeeinheit im String oder die nächste Codeeinheit ist keine tiefsurrogierte.
- Es befindet sich im Bereich `0xDC00`–`0xDFFF`, inklusive (d.h. eine tiefsurrogierte), aber es ist die erste Codeeinheit im String oder die vorherige Codeeinheit ist keine hochsurrogierte.

Verwaiste Surrogate stellen kein Unicode-Zeichen dar. Obwohl die meisten in JavaScript integrierten Methoden sie korrekt behandeln, weil sie alle auf UTF-16-Einheiten basieren, sind verwaiste Surrogate oft keine gültigen Werte bei der Interaktion mit anderen Systemen — zum Beispiel wirft [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) für verwaiste Surrogate einen {{jsxref("URIError")}}, weil die URI-Kodierung UTF-8-Codierung verwendet, die keine Kodierung für verwaiste Surrogate hat. Strings, die keine verwaisten Surrogate enthalten, werden als _wohlgeformt_ bezeichnet und sind sicher in Funktionen verwendet werden, die nicht mit UTF-16 umgehen (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können überprüfen, ob ein String wohlgeformt ist, mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}}, oder verwaiste Surrogate mit der Methode {{jsxref("String/toWellFormed", "toWellFormed()")}} sanieren.

Neben Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphemschreibgruppen_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Varianten haben, werden tatsächlich von mehreren Emojis gebildet, die gewöhnlich durch das Zeichen \<ZWJ> (`U+200D`) verbunden werden.

Sie müssen vorsichtig sein, auf welcher Ebene der Zeichen Sie iterieren. Beispielsweise wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Einheiten aufteilen und Surrogatpaare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Einheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) über Unicode-Codepunkte. Das Durchlaufen von Graphemschreibgruppen erfordert einige kundenspezifische Code.

```js
"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters
```

## Konstruktor

- {{jsxref("String/String", "String()")}}
  - : Erstellt `String`-Objekte. Wenn sie als Funktion aufgerufen wird, gibt sie primitive Werte des Typs String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der unter Verwendung der angegebenen Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der unter Verwendung der angegebenen Sequenz von Codepunkten erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem Roh-Template-String erstellt wurde.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Gibt die `Länge` des Strings an. Schreibgeschützt.

## Instanz-Methoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Einheit) am angegebenen `Index` zurück. Akzeptiert negative ganze Zahlen, die vom letzten Zeichen im String zurück zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Einheit) am angegebenen `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die dem UTF-16-Wert der Einheit am angegebenen `Index` entspricht.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die dem Codepunkt-Wert des UTF-16-codierten Zeichens entspricht, das beim angegebenen `pos` beginnt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der ersten Vorkommen von `searchValue` zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieser String [verwaiste Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der letzten Vorkommen von `searchValue` zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die anzeigt, ob der Referenz-String `compareString` vor, nach oder gleich dem angegebenen String in der Sortierreihenfolge liegt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` gegen einen String abzugleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden String-Werts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String von hinten mit einem angegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String von vorne mit einem angegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-mal wiederholt wurden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch Aufteilen des aufrufenden Strings bei Vorkommen des Substrings `sep` gefüllt ist.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Abschnitt des Strings zurück, beginnend beim angegebenen Index und sich für eine angegebene Anzahl von Zeichen erstreckend.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufrufenden Strings vom (oder zwischen dem) angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Spracheinstellung in Kleinbuchstaben umgewandelt.

    Für die meisten Sprachen gibt dies dasselbe zurück wie
    {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Spracheinstellung in Großbuchstaben umgewandelt.

    Für die meisten Sprachen gibt dies dasselbe zurück wie
    {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden String-Wert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden String-Wert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [verwaisten Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Schneidet Leerzeichen vom Anfang und Ende des Strings ab.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Schneidet Leerzeichen vom Ende des Strings ab.
- {{jsxref("String.prototype.trimStart()")}}
  - : Schneidet Leerzeichen vom Anfang des Strings ab.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode
    {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iteratorobjekt zurück, das über die Codepunkte eines String-Werts iteriert und jeden Codepunkt als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur eine Teilmenge der verfügbaren HTML-Tags und Attribute bereitstellen. Viele von ihnen erzeugen heute veralteten oder nicht standardisierten Markup. Darüber hinaus führen sie einfache String-Verkettung ohne Validierung oder Sanitation durch, was sie zu einem potenziellen Sicherheitsrisiko macht, wenn sie direkt in [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

- {{jsxref("String.prototype.anchor()")}} {{deprecated_inline}}
  - : [`<a name="name">`](/de/docs/Web/HTML/Element/a#name) (Hypertext-Ziel)
- {{jsxref("String.prototype.big()")}} {{deprecated_inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} {{deprecated_inline}}
  - : `<blink>`
- {{jsxref("String.prototype.bold()")}} {{deprecated_inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} {{deprecated_inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} {{deprecated_inline}}
  - : [`<font color="color">`](/de/docs/Web/HTML/Element/font#color)
- {{jsxref("String.prototype.fontsize()")}} {{deprecated_inline}}
  - : [`<font size="size">`](/de/docs/Web/HTML/Element/font#size)
- {{jsxref("String.prototype.italics()")}} {{deprecated_inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} {{deprecated_inline}}
  - : [`<a href="url">`](/de/docs/Web/HTML/Element/a#href) (Link zu URL)
- {{jsxref("String.prototype.small()")}} {{deprecated_inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{deprecated_inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{deprecated_inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{deprecated_inline}}
  - : {{HTMLElement("sup")}}

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, daher ist es möglich, ungültiges HTML zu erzeugen:

```js
"</b>".bold(); // <b></b></b>
```

Die einzige Entschärfung, die sie durchführen, ist das Ersetzen von `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}}, und {{jsxref("String/link", "link()")}}) durch `&quot;`.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Methode zur Umwandlung von Werten in Strings als der Aufruf der `toString()`-Methode des Werts, da die erstere auch bei [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} verwendet werden kann. Zum Beispiel:

```js
// You cannot access properties on null or undefined

const nullVar = null;
nullVar.toString(); // TypeError: Cannot read properties of null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: Cannot read properties of undefined
String(undefinedVar); // "undefined"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting) Leitfaden
- {{jsxref("RegExp")}}
