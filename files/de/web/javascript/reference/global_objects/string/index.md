---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Zeichenkette darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu halten, die in Textform dargestellt werden können. Einige der am häufigsten verwendeten Operationen an Strings sind das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Konkatenieren von ihnen mithilfe der [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf das Vorhandensein oder den Standort von Teilstrings mit der {{jsxref("String/indexOf", "indexOf()")}}-Methode oder das Extrahieren von Teilstrings mit der {{jsxref("String/substring", "substring()")}}-Methode.

### Erstellen von Strings

Strings können als Primitiven, aus String-Literalen oder als Objekte mithilfe des {{jsxref("String/String", "String()")}} Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, haben jedoch andere wichtige Unterschiede und Vorbehalte. Siehe "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)" unten.

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form spezifiziert ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichenzugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die {{jsxref("String/charAt", "charAt()")}}-Methode:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als array-ähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Beim Verwenden von Klammernotation für den Zeichenzugriff wird der Versuch, diesen Eigenschaften einen Wert zu löschen oder zuzuweisen, nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder beschreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Vergleichen von Strings

Verwenden Sie die [kleiner-als und größer-als Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings streng fallsensitiv vergleichen. Eine übliche Methode, um Strings ohne Berücksichtigung der Groß- und Kleinschreibung zu vergleichen, besteht darin, beide vorher in den gleichen Fall (Groß- oder Kleinschreibung) zu konvertieren.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Entscheidung, ob mit [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformiert wird, ist meist willkürlich, und keine der beiden ist vollständig robust, wenn sie über das lateinische Alphabet hinaus erweitert wird. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide zu `SS` durch `toUpperCase()` transformiert, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` durch `toLowerCase()` berichtet würde, es sei denn, er wird speziell mit [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) verwendet.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokalsensible und robuste Lösung für den test auf Fallinsensitive Gleichheit bietet die {{jsxref("Intl.Collator")}} API oder die `localeCompare()` Methode des Strings – beide teilen das gleiche Interface – mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) Option auf `"accent"` oder `"base"` gesetzt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht den Stringvergleich ähnlich wie `strcmp()` – sie erlaubt das Sortieren von Strings in einer lokalsensiblen Art und Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven Strings")}} unterscheidet. (Dasselbe gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}}.)

String-Literale (gekennzeichnet durch doppelte oder einfache Anführungszeichen) und Strings, die von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext zurückgegeben werden (also aufgerufen, ohne das {{jsxref("Operators/new", "new")}} Schlüsselwort zu verwenden), sind primitive Strings. In Kontexten, in denen eine Methode aufgerufen oder eine Eigenschaftsabfrage für einen primitiven String durchgeführt werden soll, wird JavaScript automatisch das String-Primitiv umwickeln und die Methode aufrufen oder die Eigenschaftsabfrage am Wrapper-Objekt durchführen.

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

String-Primitiven und `String`-Objekte liefern auch unterschiedliche Ergebnisse bei der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}. Primitive, die an `eval()` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code brechen, wenn `String`-Objekte auf {primitive} Strings treffen sollen, auch wenn Autoren im Allgemeinen nicht auf die Unterscheidung achten müssen.

Ein `String`-Objekt kann immer mit der {{jsxref("String/valueOf", "valueOf()")}}-Methode in sein primitives Gegenstück konvertiert werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String Coercion

Viele eingebaute Operationen, die Strings erwarten, zwingen ihre Argumente zunächst zu Strings (was weitgehend der Grund dafür ist, dass `String`-Objekte ähnlich wie String-Primitiven funktionieren). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zunächst [in ein Primärwert konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()` Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende Primärwert wird dann in einen String konvertiert.

Es gibt mehrere Möglichkeiten, fast den gleichen Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` macht genau die oben erklärten String-Coercion-Schritte für den eingebetteten Ausdruck.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet den gleichen Algorithmus zur Konvertierung von `x`, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seine Operanden auf ein _Primärwert_ anstatt auf einen _String_, und hat für einige Objekte ein völlig anderes Verhalten als die normale String-Coercion. Siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Abhängig von Ihrem Anwendungsfall möchten Sie vielleicht `` `${x}` `` (um das eingebaute Verhalten nachzuahmen) oder `String(x)` verwenden (um Symbolwerte ohne Fehlerbehandlung zu verarbeiten), sollten aber nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster

Strings werden im Wesentlichen als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. In der UTF-16-Codierung ist jede Codeeinheit genau 16 Bit lang. Dies bedeutet, dass es maximal 2<sup>16</sup>, oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten darstellbar sind. Dieses Zeichensatz wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen und kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalen angegeben werden.

Das gesamte Unicode-Zeichensatz ist jedoch viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogat-Paare_ gespeichert, bei denen es sich um Paare von 16-Bit-Codeeinheiten handelt, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht zur Kodierung einzelner Codeeinheiten verwendet. (Genauer gesagt haben führende Surrogate, auch Hochsurrogate genannt, Werte zwischen `0xD800` und `0xDBFF`, einschließlich, während nachfolgende Surrogate, auch Niedrigsurrogate genannt, Werte zwischen `0xDC00` und `0xDFFF`, einschließlich, haben.) Jedes Unicode-Zeichen, das aus ein oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` angegeben werden, wobei `xxxxxx` 1–6 Hexadezimalwerte darstellt.

Ein "einsames Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Voraussetzungen erfüllt:

- Sie liegt im Bereich `0xD800`–`0xDBFF`, einschließlich (d.h. ist ein führendes Surrogat), aber sie ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Sie liegt im Bereich `0xDC00`–`0xDFFF`, einschließlich (d.h. ist ein nachfolgendes Surrogat), aber sie ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führendes Surrogat.

Einsame Surrogate repräsentieren kein Unicode-Zeichen. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt handhaben, da sie alle auf UTF-16-Codeeinheiten basieren, sind einsame Surrogate oft keine gültigen Werte beim Interagieren mit anderen Systemen – zum Beispiel wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) einen {{jsxref("URIError")}} für einsame Surrogate auslösen, da die URI-Kodierung die UTF-8-Codierung verwendet, die keine Kodierung für einsame Surrogate hat. Strings, die keine einsamen Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und können sicher mit Funktionen verwendet werden, die nicht mit UTF-16 umgehen (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können überprüfen, ob ein String wohlgeformt ist, mit der {{jsxref("String/isWellFormed", "isWellFormed()")}}-Methode oder einsame Surrogate mit der {{jsxref("String/toWellFormed", "toWellFormed()")}}-Methode bereinigen.

Zusätzlich zu Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit betrachtet werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die normalerweise durch das \<ZWJ> (`U+200D`) Zeichen verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene Sie Zeichen iterieren. Zum Beispiel wird `[split("")](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split`) nach UTF-16-Codeeinheiten splitten und Surrogat-Paare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Das Iterieren durch Graphem-Cluster erfordert einige benutzerdefinierte Codes.

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
  - : Erstellt `String`-Objekte. Wird es als Funktion aufgerufen, gibt es primitive Werte des Typs String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der mit der angegebenen Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der mit der angegebenen Sequenz von Code-Punkten erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einer rohen Template-Zeichenkette erstellt wurde.

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Gibt die `Länge` des Strings wieder. Nur lesbar.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück. Akzeptiert negative ganze Zahlen, die vom letzten Zeichen des Strings zurück zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den Wert der UTF-16-Codeeinheit am angegebenen `index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine Nicht-negativ-Ganzzahl zurück, die den Codepunktwert des UTF-16-kodierten Codepunkts darstellt, der an der angegebenen `pos` beginnt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index des ersten Vorkommens von `searchValue` innerhalb dieses Strings zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen Boolean zurück, der anzeigt, ob dieser String [einsame Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index des letzten Vorkommens von `searchValue` innerhalb dieses Strings zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die anzeigt, ob der Vergleichsstring `compareString` in der Sortierreihenfolge vor, nach oder gleich dem gegebenen String kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um regulären Ausdruck `regexp` gegen einen String zu vergleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalform des aufrufenden String-Werts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String von Ende mit einem gegebenen String und gibt einen neuen String von der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String von Anfang mit einem gegebenen String und gibt einen neuen String von der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-mal wiederholt wurden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das entsteht, indem der aufrufende String an den Vorkommen des Substrings `sep` aufgeteilt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der am angegebenen Index beginnt und eine gegebene Anzahl von Zeichen danach umfasst.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufrufenden Strings von (oder zwischen) angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung des aktuellen Gebietsschemas in Kleinbuchstaben konvertiert.

  Für die meisten Sprachen wird dies dasselbe zurückgeben wie {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung des aktuellen Gebietsschemas in Großbuchstaben konvertiert.

  Für die meisten Sprachen wird dies dasselbe zurückgeben wie {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden String-Wert, umgewandelt in Kleinbuchstaben, zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden String-Wert, umgewandelt in Großbuchstaben, zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings mit dem Unicode-Ersatzzeichen U+FFFD ersetzt wurden.
- {{jsxref("String.prototype.trim()")}}
  - : Schneidet Leerzeichen vom Beginn und Ende des Strings ab.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Schneidet Leerzeichen vom Ende des Strings ab.
- {{jsxref("String.prototype.trimStart()")}}
  - : Schneidet Leerzeichen vom Beginn des Strings ab.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primären Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Wertes iteriert und jeden Codepunkt als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der derzeit verfügbaren HTML-Tags und -Attribute bieten. Viele von ihnen erzeugen heute veraltetes oder nicht standardisiertes Markup. Darüber hinaus führen sie String-Konkatenationen ohne jegliche Validierung oder Sanitär durch, was sie zu einer potenziellen Sicherheitsbedrohung macht, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) stattdessen.

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

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erzeugen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, was sie durchführen, ist das Ersetzen von `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}}, und {{jsxref("String/link", "link()")}}) mit `&quot;`.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Methode, um Werte in Strings zu konvertieren, als die `toString()`-Methode des Wertes zu verwenden, da erstere auch für [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} funktioniert. Zum Beispiel:

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

- [Zahlen und Zeichenketten](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("RegExp")}}
