---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Sequenz von Zeichen darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich zum Speichern von Daten, die in Textform dargestellt werden können. Einige der meistgenutzten Operationen mit Strings sind das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verbinden mit den [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf das Vorhandensein oder den Standort von Teilstrings mit der Methode {{jsxref("String/indexOf", "indexOf()")}} oder das Extrahieren von Teilstrings mit der Methode {{jsxref("String/substring", "substring()")}}.

### Erstellen von Strings

Strings können als Primitive, aus String-Literalen oder als Objekte unter Verwendung des {{jsxref("String/String", "String()")}}-Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen sich viele Verhaltensweisen, weisen aber auch wichtige Unterschiede und Fallstricke auf. Siehe "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)" unten.

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form spezifiziert ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichen-Zugriff

Es gibt zwei Möglichkeiten, auf ein individuelles Zeichen in einem String zuzugreifen. Die erste ist die Methode {{jsxref("String/charAt", "charAt()")}},

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als array-ähnliches Objekt zu behandeln, bei dem einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Bei der Verwendung der Klammernotation für den Zeichen-Zugriff wird der Versuch, diese Eigenschaften zu löschen oder ihnen einen Wert zuzuweisen, nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder beschreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Vergleichen von Strings

Verwenden Sie die [Kleiner-als und Größer-als Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings groß-/kleinschreibungssensitiv vergleichen. Eine übliche Methode, um Strings ohne Berücksichtigung der Groß-/Kleinschreibung zu vergleichen, ist, beide in denselben Fall (groß oder klein) zu konvertieren, bevor sie verglichen werden.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, ob [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) verwendet wird, ist meist willkürlich, und keine ist vollständig robust, wenn sie über das lateinische Alphabet hinaus erweitert wird. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide zu `SS` durch `toUpperCase()` transformiert, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` durch `toLowerCase()` gemeldet würde, es sei denn, er verwendet speziell [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokale und robuste Lösung für das Testen auf Groß-/Kleinschreibungs-Unabhängigkeit ist, die {{jsxref("Intl.Collator")}} API oder die Methode [`localeCompare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) des Strings zu verwenden – beide teilen die gleiche Schnittstelle – mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) Option auf `"accent"` oder `"base"` gesetzt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die Methode `localeCompare()` ermöglicht den String-Vergleich in ähnlicher Weise wie `strcmp()` - sie ermöglicht das Sortieren von Strings in einer lokalen Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven Strings")}} unterscheidet. (Dasselbe gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}})

String-Literale (bezeichnet durch doppelte oder einfache Anführungszeichen) und Strings, die von `String`-Aufrufen in einem non-konstruktiven Kontext zurückgegeben werden (also ohne Verwendung des {{jsxref("Operators/new", "new")}} Schlüsselworts), sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder ein Eigenschaftslookup ausgeführt werden soll, wird JavaScript den String-Primitiven automatisch umhüllen und die Methode auf dem Wrapper-Objekt aufrufen oder den Eigenschaftslookup darauf ausführen.

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

String-Primitiven und `String`-Objekte geben auch verschiedene Ergebnisse bei der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}. Primitiven, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte hingegen werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code fehlschlagen, wenn er auf `String`-Objekte trifft, wenn er stattdessen einen primitiven String erwartet, obwohl sich Autoren im Allgemeinen keine Sorgen über die Unterscheidung machen müssen.

Ein `String`-Objekt kann immer mit der Methode {{jsxref("String/valueOf", "valueOf()")}} in sein primitives Gegenstück konvertiert werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele eingebaute Operationen, die Strings erwarten, zwingen zuerst ihre Argumente zu Strings (was weitgehend der Grund dafür ist, dass `String`-Objekte sich ähnlich wie String-Primitiven verhalten). [Der Vorgang](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives Objekt umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem seine Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()` in dieser Reihenfolge aufgerufen werden. Das resultierende primitive Objekt wird dann in einen String konvertiert.

Es gibt mehrere Möglichkeiten, fast denselben Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die oben erklärten String-Konvertierungsschritte für den eingebetteten Ausdruck aus.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion: `String(x)` verwendet den gleichen Algorithmus zur Konvertierung von `x`, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"`, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Die Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seinen Operanden in ein _primitives_ statt eines _Strings_, und hat für einige Objekte völlig andere Verhaltensweisen als die normale String-Konvertierung. Weitere Einzelheiten finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition).

Abhängig von Ihrem Anwendungsfall möchten Sie möglicherweise `` `${x}` `` (um das eingebaute Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte zu behandeln, ohne dass ein Fehler auftritt) verwenden, aber Sie sollten nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster

Strings werden grundsätzlich als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. In der UTF-16-Codierung ist jede Code-Einheit exakt 16 Bits lang. Das bedeutet, dass maximal 2<sup>16</sup>, also 65536 mögliche Zeichen als einzelne UTF-16-Codeeinheiten darstellbar sind. Diese Zeichenmenge wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codierungseinheit kann in einem String mit `\u` gefolgt von genau vier Hex-Ziffern geschrieben werden.

Jedoch ist der gesamte Unicode-Zeichensatz viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogate-Paare_ gespeichert, bei denen es sich um Paare von 16-Bit-Codierungseinheiten handelt, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht zum Codieren von Einzelcodeeinheit-Zeichen verwendet. (Genauer gesagt, haben führende Surrogate, auch High-Surrogate-Codeeinheiten genannt, Werte zwischen `0xD800` und `0xDBFF`, während nachfolgende Surrogate, auch Low-Surrogate-Codeeinheiten genannt, Werte zwischen `0xDC00` und `0xDFFF` aufweisen.) Jedes Unicode-Zeichen, das aus einer oder zwei UTF-16-Codierungseinheiten besteht, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1–6 Hex-Ziffern darstellt.

Ein "einsames Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Es liegt im Bereich `0xD800`–`0xDBFF`, aber es ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Es liegt im Bereich `0xDC00`–`0xDFFF`, aber es ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führendes Surrogat.

Einsame Surrogate stellen kein Unicode-Zeichen dar. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt behandeln, da sie alle auf UTF-16-Codierungseinheiten basieren, sind alleinstehende Surrogate oft keine gültigen Werte, wenn sie mit anderen Systemen interagieren - zum Beispiel wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) einen {{jsxref("URIError")}} für einsame Surrogate auslösen, da bei der URI-Codierung UTF-8-Codierung verwendet wird, die keine Codierung für einsame Surrogate hat. Strings, die keine einsamen Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und sind sicher mit Funktionen zu verwenden, die nicht mit UTF-16 arbeiten (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können überprüfen, ob ein String wohlgeformt ist mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}}, oder einsame Surrogate mit der Methode {{jsxref("String/toWellFormed", "toWellFormed()")}} bereinigen.

Neben Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen aufweisen, werden tatsächlich durch mehrere Emojis gebildet, üblicherweise verbunden durch das \<ZWJ> (`U+200D`)-Zeichen.

Sie müssen vorsichtig sein, auf welcher Ebene von Zeichen Sie iterieren. Zum Beispiel wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codierungseinheiten aufteilen und Surrogat-Paare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codierungseinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Das Iterieren durch Graphem-Cluster erfordert etwas benutzerdefinierten Code.

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
  - : Erstellt `String`-Objekte. Wenn als Funktion aufgerufen, gibt es primitive Werte des Typs String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der aus der angegebenen Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der aus der angegebenen Sequenz von Codepunkten erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem rohen Template-String erstellt wurde.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Gibt die `Länge` des Strings wieder. Schreibgeschützt.

## Instanz-Methoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codierungseinheit) am angegebenen `Index` zurück. Akzeptiert negative Ganzzahlen, die vom letzten String-Zeichen zurückzählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codierungseinheit) an dem angegebenen `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den UTF-16-Codierungseinheit-Wert an dem gegebenen `Index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative Ganzzahlen-Zahl zurück, die den Codepunkt-Wert des UTF-16-codierten Codepunktes am angegebenen `pos` darstellt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der ersten Vorkommen von `searchValue` zurück, oder `-1` wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen Boolean zurück, der angibt, ob dieser String [einsame Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der letzten Vorkommen von `searchValue` zurück, oder `-1` wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Referenz-String `compareString` vor, nach oder äquivalent zu dem gegebenen String in Sortierreihenfolge steht.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um mit einem regulären Ausdruck `regexp` einen String abzugleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator für alle Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden Stringwerts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String vom Ende mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String vom Anfang mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-Mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` durch `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` durch `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Suche nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch Aufteilen des aufrufenden Strings an den Vorkommen des Teilstrings `sep` erzeugt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der am angegebenen Index beginnt und sich für eine angegebene Anzahl von Zeichen danach erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufrufenden Strings von (oder zwischen) dem angegebenen Index (oder den Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden respektvoll zur aktuellen Lokalisierung in Kleinbuchstaben umgewandelt.

    Für die meisten Sprachen wird dies dasselbe zurückgeben wie {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden respektvoll zur aktuellen Lokalisierung in Großbuchstaben umgewandelt.

    Für die meisten Sprachen wird dies dasselbe zurückgeben wie {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden Stringwert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden Stringwert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Entfernt Leerzeichen vom Anfang und Ende des Strings.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Entfernt Leerzeichen vom Ende des Strings.
- {{jsxref("String.prototype.trimStart()")}}
  - : Entfernt Leerzeichen vom Anfang des Strings.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Werts iteriert, wobei jeder Codepunkt als String-Wert zurückgegeben wird.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der derzeit verfügbaren HTML-Tags und Attribute bereitstellen. Viele von ihnen erzeugen heute veraltetes oder nicht standardisiertes Markup. Darüber hinaus führen sie eine String-Konzatenation ohne jegliche Validierung oder Sanierung durch, was sie zu einem potenziellen Sicherheitsrisiko macht, wenn sie direkt über [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

- {{jsxref("String.prototype.anchor()")}} {{deprecated_inline}}
  - : [`<a name="name">`](/de/docs/Web/HTML/Reference/Elements/a#name) (Hypertext-Ziel)
- {{jsxref("String.prototype.big()")}} {{deprecated_inline}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}} {{deprecated_inline}}
  - : `<blink>`
- {{jsxref("String.prototype.bold()")}} {{deprecated_inline}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}} {{deprecated_inline}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}} {{deprecated_inline}}
  - : [`<font color="color">`](/de/docs/Web/HTML/Reference/Elements/font#color)
- {{jsxref("String.prototype.fontsize()")}} {{deprecated_inline}}
  - : [`<font size="size">`](/de/docs/Web/HTML/Reference/Elements/font#size)
- {{jsxref("String.prototype.italics()")}} {{deprecated_inline}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}} {{deprecated_inline}}
  - : [`<a href="url">`](/de/docs/Web/HTML/Reference/Elements/a#href) (Link zu URL)
- {{jsxref("String.prototype.small()")}} {{deprecated_inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{deprecated_inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{deprecated_inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{deprecated_inline}}
  - : {{HTMLElement("sup")}}

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erzeugen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, das sie durchführen, ist das Ersetzen von `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}}, und {{jsxref("String/link", "link()")}}) durch `&quot;`.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()` Funktion ist eine zuverlässigere Methode zur Konvertierung von Werten in Strings als das Aufrufen der `toString()` Methode des Werts, da die erstere auch auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} funktioniert. Zum Beispiel:

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

- Leitfaden zu [Nummern und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- {{jsxref("RegExp")}}
