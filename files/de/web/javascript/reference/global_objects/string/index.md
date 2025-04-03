---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Sequenz von Zeichen darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu halten, die in Textform dargestellt werden können. Einige der am häufigsten verwendeten Operationen mit Strings sind das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verketten mit den [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf die Existenz oder den Ort von Teilstrings mit der {{jsxref("String/indexOf", "indexOf()")}}-Methode oder das Extrahieren von Teilstrings mit der {{jsxref("String/substring", "substring()")}}-Methode.

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

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, haben aber auch wichtige Unterschiede und Vorsichtsmaßnahmen. Siehe unten "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)".

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form gibt ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) an: Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie im [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichenzugriff

Es gibt zwei Möglichkeiten, um in einem String auf ein einzelnes Zeichen zuzugreifen. Die erste ist die {{jsxref("String/charAt", "charAt()")}}-Methode:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als array-ähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Wenn Sie die Klammernotation für den Zeichenzugriff verwenden, wird der Versuch, diese Eigenschaften zu löschen oder ihnen einen Wert zuzuweisen, nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder schreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Vergleichen von Strings

Verwenden Sie die [Operatoren Kleiner als und Größer als](/de/docs/Web/JavaScript/Reference/Operators) zum Vergleichen von Strings:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings in groß/klein geschrieben vergleichen. Ein gängiger Weg, um Strings ohne Berücksichtigung der Groß-/Kleinschreibung zu vergleichen, besteht darin, beide in denselben Fall (Groß- oder Kleinschreibung) zu konvertieren, bevor sie verglichen werden.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl zwischen [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) ist größtenteils willkürlich, und keiner von beiden ist beim Dehnen über das lateinische Alphabet vollständig robust. Zum Beispiel wird der deutsche Kleinbuchstabe `ß` und `ss` von `toUpperCase()` in `SS` umgewandelt, während der türkische Buchstabe `ı` von `toLowerCase()` fälschlicherweise als ungleich `I` gemeldet würde, es sei denn, es wird ausdrücklich [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) verwendet.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokalisierte und robuste Lösung zum Testen der fallunempfindlichen Gleichheit ist die Verwendung der {{jsxref("Intl.Collator")}}-API oder der `localeCompare()`-Methode des Strings — sie teilen dieselbe Schnittstelle — mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity)-Option auf `"accent"` oder `"base"` eingestellt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht den Stringvergleich in ähnlicher Weise wie `strcmp()` — sie erlaubt das Sortieren von Strings auf eine lokalisierte Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "Primitiv-String")}}-Werten unterscheidet. (Das Gleiche gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Zahlen")}}.)

String-Literale (angegeben durch doppelte oder einfache Anführungszeichen) und Strings, die von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext zurückgegeben werden (d.h. ohne das {{jsxref("Operators/new", "new")}}-Schlüsselwort aufgerufen), sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen wird oder ein Eigenschaftsnachschlagen durchgeführt wird, wird JavaScript den primitiven String automatisch verpacken und die Methode auf dem Verpackungsobjekt aufrufen oder das Nachschlagen durchführen.

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

String-Primitiven und `String`-Objekte liefern auch unterschiedliche Ergebnisse, wenn {{jsxref("Global_Objects/eval", "eval()")}} verwendet wird. An `eval` übergebene Primitiven werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code brechen, wenn er auf `String`-Objekte trifft, während er stattdessen einen primitiven String erwartet, obwohl Autoren im Allgemeinen nicht über den Unterschied besorgt sein müssen.

Ein `String`-Objekt kann immer mit der {{jsxref("String/valueOf", "valueOf()")}}-Methode in sein primitives Gegenstück umgewandelt werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### Stringumwandlung

Viele eingebaute Operationen, die Strings erwarten, zwingen zuerst ihre Argumente zu Strings (was größtenteils der Grund ist, warum `String`-Objekte sich ähnlich wie string primitives verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann folgendermaßen zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit demselben Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit demselben Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives Objekt umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()`, und `valueOf()`-Methoden in dieser Reihenfolge aufgerufen werden. Das resultierende primitive Objekt wird dann in einen String umgewandelt.

Es gibt mehrere Möglichkeiten, in JavaScript fast denselben Effekt zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die oben beschriebenen Stringumwandlungsschritte für den eingebetteten Ausdruck aus.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seinen Operanden zu einem _primitiven_ anstelle eines _Strings_, und für einige Objekte hat dies ganz andere Verhaltensweisen als die normale Stringumwandlung. Weitere Details finden Sie auf seiner [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition).

Je nach Anwendungsfall möchten Sie vielleicht `` `${x}` `` verwenden (um das eingebaute Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte ohne Fehlerbehandlung zu verarbeiten), aber Sie sollten `"" + x` nicht verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster

Strings werden grundsätzlich als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. Im UTF-16-Encoding ist jede Codeeinheit genau 16 Bit lang. Das bedeutet, dass es maximal 2<sup>16</sup> oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten darstellbar sind. Dieses Zeichenset wird die [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) genannt und umfasst die häufigsten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalstellen geschrieben werden.

Allerdings ist das gesamte Unicode-Zeichenset viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, die aus Paaren von 16-Bit-Codeeinheiten bestehen, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um einzelne Codeeinheitszeichen zu kodieren. (Genauer gesagt, führende Surrogate, auch als High-Surrogate-Codeeinheiten bezeichnet, haben Werte zwischen `0xD800` und `0xDBFF`, inklusive, während nachfolgende Surrogate, auch als Low-Surrogate-Codeeinheiten bezeichnet, Werte zwischen `0xDC00` und `0xDFFF`, inklusive haben.) Jedes Unicode-Zeichen, das aus einer oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1–6 Hexadezimalziffern darstellt.

Ein "einsames Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Sie liegt im Bereich von `0xD800`–`0xDBFF`, inklusive (d.h. ist ein führendes Surrogat), aber es ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Sie liegt im Bereich von `0xDC00`–`0xDFFF`, inklusive (d.h. ist ein nachfolgendes Surrogat), aber es ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führendes Surrogat.

Einsame Surrogate repräsentieren keine Unicode-Zeichen. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt behandeln, weil sie alle auf UTF-16-Codeeinheiten basieren, sind einsame Surrogate oft keine gültigen Werte, wenn sie mit anderen Systemen interagieren - zum Beispiel wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) eine {{jsxref("URIError")}} für einsame Surrogate auslösen, da die URI-Kodierung UTF-8-Kodierung verwendet, die keine Kodierung für einsame Surrogate hat. Strings, die keine einsamen Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und sind sicher mit Funktionen zu verwenden, die nicht mit UTF-16 umgehen (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können überprüfen, ob ein String wohlgeformt ist, mit der {{jsxref("String/isWellFormed", "isWellFormed()")}}-Methode, oder einsame Surrogate mit der {{jsxref("String/toWellFormed", "toWellFormed()")}}-Methode bereinigen.

Neben Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die in der Regel durch das \<ZWJ> (`U+200D`) Zeichen verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene von Zeichen Sie iterieren. Zum Beispiel wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten trennen und Surrogatpaare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Durch Graphem-Cluster zu iterieren, erfordert einige benutzerdefinierte Codes.

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
  - : Erstellt `String`-Objekte. Wenn als Funktion aufgerufen, gibt sie primitive Werte des Typs String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der unter Verwendung der angegebenen Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der unter Verwendung der angegebenen Sequenz von Codepunkten erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem Roh-Template-String erstellt wurde.

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Initialwert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Spiegelt die `Länge` des Strings wider. Schreibgeschützt.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) an dem angegebenen `Index` zurück. Akzeptiert negative Ganzzahlen, die von dem letzten Zeichen des Strings zurück zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) an dem angegebenen `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den UTF-16-Codeeinheitswert an dem gegebenen `Index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative ganze Zahl zurück, die den Codepunktwert des UTF-16-kodierten Codepunkts, der an der angegebenen `Position` beginnt, darstellt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index des ersten Vorkommens von `searchValue` in diesem String zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieser String [einsame Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index des letzten Vorkommens von `searchValue` in diesem String zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Referenzstring `compareString` vor, nach oder gleich dem angegebenen String in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` gegen einen String abzugleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden stringwertes zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String vom Ende mit einem gegebenen String auf und gibt einen neuen String mit der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String von Anfang an mit einem gegebenen String auf und gibt einen neuen String mit der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Dient zum Ersetzen von Vorkommen von `searchFor` durch `replaceWith`. `searchFor` kann eine Zeichenkette oder ein regulärer Ausdruck sein, und `replaceWith` kann eine Zeichenkette oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Dient zum Ersetzen aller Vorkommen von `searchFor` durch `replaceWith`. `searchFor` kann eine Zeichenkette oder ein regulärer Ausdruck sein, und `replaceWith` kann eine Zeichenkette oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch das Teilen des aufrufenden Strings an Vorkommen des Substrings `sep` gefüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, beginnend am angegebenen Index und fortlaufend über eine bestimmte Anzahl von Zeichen.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der die Zeichen des aufrufenden Strings von (oder zwischen) dem angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Locale in Kleinbuchstaben umgewandelt.

    Für die meisten Sprachen wird dies dasselbe zurückgeben wie
    {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Locale in Großbuchstaben umgewandelt.

    Für die meisten Sprachen wird dies dasselbe zurückgeben wie
    {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden Stringwert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die
    {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden Stringwert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Kürzt Leerzeichen vom Beginn und Ende des Strings.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Kürzt Leerzeichen vom Ende des Strings.
- {{jsxref("String.prototype.trimStart()")}}
  - : Kürzt Leerzeichen vom Beginn des Strings.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines Stringwerts iteriert und jeden Codepunkt als Stringwert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der aktuell verfügbaren HTML-Tags und -Attribute bieten. Viele von ihnen erzeugen veraltetes oder nicht standardisiertes Markup. Darüber hinaus führen sie die Stringverkettung ohne Validierung oder Bereinigung durch, was sie zu einem potenziellen Sicherheitsrisiko macht, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

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
  - : [`<a href="url">`](/de/docs/Web/HTML/Element/a#href) (Link zur URL)
- {{jsxref("String.prototype.small()")}} {{deprecated_inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{deprecated_inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{deprecated_inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{deprecated_inline}}
  - : {{HTMLElement("sup")}}

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, so dass es möglich ist, ungültiges HTML zu erstellen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, das sie durchführen, besteht darin, `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) durch `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### Zeichenkettumwandlung

Die `String()`-Funktion ist ein zuverlässigerer Weg, um Werte in Strings umzuwandeln, als die `toString()`-Methode des Werts aufzurufen, da die ersteren auch funktionieren, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} angewendet werden. Zum Beispiel:

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
