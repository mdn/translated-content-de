---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Zeichenfolge darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu speichern, die in Textform dargestellt werden können. Einige der am häufigsten verwendeten Operationen mit Strings sind das Überprüfen ihrer {{jsxref("String/length", "length")}}, das Erstellen und Verketten von Strings mithilfe der [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf das Vorhandensein oder die Position von Unterstrings mit der Methode {{jsxref("String/indexOf", "indexOf()")}} oder das Extrahieren von Unterstrings mit der Methode {{jsxref("String/substring", "substring()")}}.

### Strings erstellen

Strings können als primitive Datentypen, aus Zeichenfolgenliteralen oder als Objekte mithilfe des {{jsxref("String/String", "String()")}}-Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, haben jedoch andere wichtige Unterschiede und Vorbehalte. Siehe "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)" unten.

Zeichenfolgenliterale können entweder mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form gibt ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) an: Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von Zeichenfolgenliteralen finden Sie im [lexikalischen Grammar](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichenzugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die Methode {{jsxref("String/charAt", "charAt()")}}:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String wie ein array-ähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Wenn Sie die Klammernotation für den Zeichenzugriff verwenden, schlägt der Versuch, einen Wert diesen Eigenschaften zu löschen oder zuzuweisen, fehl. Die betroffenen Eigenschaften sind weder schreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Strings vergleichen

Verwenden Sie die [Kleiner- und Größer-als-Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings unter Berücksichtigung der Groß- und Kleinschreibung vergleichen. Eine übliche Methode, Strings ohne Berücksichtigung der Groß- und Kleinschreibung zu vergleichen, besteht darin, beide in denselben Fall (groß oder klein) umzuwandeln, bevor sie verglichen werden.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, ob durch [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformiert wird, ist weitgehend willkürlich, und keine der beiden ist vollständig robust, wenn sie über das lateinische Alphabet hinausgeht. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide durch `toUpperCase()` in `SS` umgewandelt, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` gemeldet würde, es sei denn, man verwendet speziell [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokalbewusste und robuste Lösung zum Testen von Gleichheit ohne Berücksichtigung der Groß- und Kleinschreibung ist die Verwendung der {{jsxref("Intl.Collator")}} API oder der `localeCompare()`-Methode des Strings — sie haben dieselbe Schnittstelle — mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity)-Option, die auf `"accent"` oder `"base"` gesetzt ist.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()` Methode ermöglicht einen String-Vergleich in ähnlicher Weise wie `strcmp()` — sie ermöglicht das Sortieren von Strings in einem lokalbewussten Stil.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven String")}}-Werten unterscheidet. (Dasselbe gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}}.)

Zeichenfolgenliterale (angegeben durch doppelte oder einfache Anführungszeichen) und Zeichenfolgen, die von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext (das heißt, ohne das Schlüsselwort {{jsxref("Operators/new", "new")}} verwendet) zurückgegeben werden, sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder ein Lesezugriff auf eine Eigenschaft erfolgt, wird JavaScript den String-Primitive automatisch umhüllen und die Methode auf dem Wrapper-Objekt aufrufen oder den Zugriff auf die Eigenschaft durchführen.

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

String-Primitiven und `String`-Objekte geben auch unterschiedliche Ergebnisse, wenn {{jsxref("Global_Objects/eval", "eval()")}} verwendet wird. Primitive, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code brechen, wenn er auf `String`-Objekte trifft, wenn er stattdessen einen primitiven String erwartet, obwohl sich Autoren im Allgemeinen nicht um die Unterscheidung kümmern müssen.

Ein `String`-Objekt kann immer mit der Methode {{jsxref("String/valueOf", "valueOf()")}} in sein primitives Gegenstück umgewandelt werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Umwandlung

Viele eingebettete Operationen, die Strings erwarten, wandeln ihre Argumente zunächst in Strings um (was weitgehend der Grund ist, warum `String`-Objekte ähnlich wie String-Primitiven funktionieren). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) umgewandelt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) umgewandelt.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen eine {{jsxref("TypeError")}}.
- Objekte werden zuerst [in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()` in dieser Reihenfolge aufgerufen werden. Der resultierende primitive Wert wird dann in einen String umgewandelt.

Es gibt mehrere Möglichkeiten, fast denselben Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die oben beschriebenen String-Konvertierungsschritte für den eingebetteten Ausdruck durch.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keine {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Die Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt sein Operand zu einem _primitiven_ Wert anstelle eines _Strings_ zu werden, und hat für einige Objekte ein völlig anderes Verhalten als normale String-Umwandlung. Siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Abhängig von Ihrem Anwendungsfall möchten Sie möglicherweise `` `${x}` `` (um das eingebettete Verhalten nachzuahmen) oder `String(x)` (um Symbol-Werte ohne Fehler zu behandeln) verwenden, aber Sie sollten nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster

Strings werden grundsätzlich als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. In der UTF-16-Kodierung ist jede Code-Einheit genau 16 Bit lang. Dies bedeutet, dass es maximal 2<sup>16</sup>, oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten darstellbar sind. Diese Zeichenmenge wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen und kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Das gesamte Unicode-Zeichenset ist jedoch weitaus größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogate-Paare_ gespeichert, die Paare von 16-Bit-Codeeinheiten sind, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um einzelne Codeeinheiten-Zeichen zu codieren. (Genauer gesagt liegen führende Surrogate, auch Hoch-Surrogate genannt, zwischen `0xD800` und `0xDBFF` inklusive, während nachfolgende Surrogate, auch Nieder-Surrogate genannt, Werte zwischen `0xDC00` und `0xDFFF` inklusive haben.) Jedes Unicode-Zeichen, das aus einer oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1-6 Hexadezimalziffern darstellt.

Ein "einsamer Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Er liegt im Bereich `0xD800`–`0xDBFF` inklusive (d.h. er ist ein führender Surrogat), aber er ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgender Surrogat.
- Er liegt im Bereich `0xDC00`–`0xDFFF` inklusive (d.h. er ist ein nachfolgender Surrogat), aber er ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führender Surrogat.

Einsame Surrogate repräsentieren kein Unicode-Zeichen. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt behandeln, da sie alle auf UTF-16-Codeeinheiten basieren, sind einsame Surrogate oft keine gültigen Werte beim Interagieren mit anderen Systemen — zum Beispiel wirft [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) einen {{jsxref("URIError")}} für einsame Surrogate, da die URI-Kodierung UTF-8 verwendet, die keine Kodierung für einsame Surrogate hat. Strings, die keine einsamen Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und können sicher mit Funktionen verwendet werden, die nicht mit UTF-16 (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)) arbeiten. Sie können überprüfen, ob ein String wohlgeformt ist, mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}} oder einsame Surrogate mit der Methode {{jsxref("String/toWellFormed", "toWellFormed()")}} bereinigen.

Neben Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Vielzahl von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, normalerweise verbunden durch den \<ZWJ> (`U+200D`) Charakter.

Sie müssen vorsichtig sein, auf welcher Ebene von Zeichen Sie iterieren. Zum Beispiel trennt [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten und wird Surrogate-Paare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) auf Unicode-Codepunkten. Das Iterieren von Graphem-Cluster erfordert einige benutzerdefinierte Codes.

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
  - : Erstellt `String`-Objekte. Wenn sie als Funktion aufgerufen wird, gibt sie primitive Werte vom Typ String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der durch die Verwendung der angegebenen Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der durch die Verwendung der angegebenen Sequenz von Codepunkten erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem rohen Template-String erstellt wurde.

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktor-Funktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind Eigen-Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Entspricht der `length` des Strings. Nur lesen.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück. Akzeptiert negative ganze Zahlen, die vom letzten Zeichen der Zeichenfolge aus zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die dem Wert der UTF-16-Codeeinheit am angegebenen `index` entspricht.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative ganze Zahl zurück, die dem Wert des UTF-16-kodierten Codepunkts entspricht, der an der angegebenen `pos` beginnt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der ersten Vorkommen von `searchValue` oder `-1`, wenn nicht gefunden, zurück.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen Boolean zurück, der angibt, ob dieser String keine [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der letzten Vorkommen von `searchValue` oder `-1`, wenn nicht gefunden, zurück.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Referenzstring `compareString` vor, nach oder gleich dem gegebenen String in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` gegen einen String abzugleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden String-Werts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String von hinten mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String von vorne mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch das Teilen des aufrufenden Strings an Vorkommen des Unterstrings `sep` gefüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der am angegebenen Index beginnt und sich über eine bestimmte Anzahl von Zeichen danach erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der die Zeichen des aufrufenden Strings von (oder zwischen) dem angegebenen Index (oder den Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen in einem String werden unter Berücksichtigung der aktuellen lokalen Einstellungen in Kleinbuchstaben umgewandelt.

    Für die meisten Sprachen wird das gleiche zurückgegeben wie {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen in einem String werden unter Berücksichtigung der aktuellen lokalen Einstellungen in Großbuchstaben umgewandelt.

    Für die meisten Sprachen wird dasselbe zurückgegeben wie {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden String-Wert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden String-Wert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, in dem alle [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Schneidet Leerzeichen vom Anfang und Ende des Strings ab.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Schneidet Leerzeichen vom Ende des Strings ab.
- {{jsxref("String.prototype.trimStart()")}}
  - : Schneidet Leerzeichen vom Anfang des Strings ab.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Wertes iteriert und jeden Codepunkt als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der derzeit verfügbaren HTML-Tags und Attribute bieten. Viele von ihnen erzeugen heute veraltete oder nicht-standardmäßige Markup. Außerdem führen sie String-Konkatenation ohne jegliche Validierung oder Bereinigung durch, was sie zu einer potenziellen Sicherheitsbedrohung macht, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

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

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erstellen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, das sie vornehmen, ist das Ersetzen von `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) durch `&quot;`.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Umwandlung

Die Funktion `String()` ist eine zuverlässigere Methode zum Konvertieren von Werten in Strings als der Aufruf der `toString()`-Methode des Wertes, da die erstere funktioniert, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} angewendet wird. Zum Beispiel:

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

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("RegExp")}}
