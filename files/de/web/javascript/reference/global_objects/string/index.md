---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Sequenz von Zeichen darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu halten, die in Textform dargestellt werden können. Zu den am häufigsten verwendeten Operationen mit Strings gehört das Prüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Konkatenieren mit den [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Prüfen auf das Vorhandensein oder den Ort von Substrings mit der {{jsxref("String/indexOf", "indexOf()")}}-Methode oder das Extrahieren von Substrings mit der {{jsxref("String/substring", "substring()")}}-Methode.

### Erstellen von Strings

Strings können als Primitive, aus Zeichenfolgenliteralen oder als Objekte mithilfe des {{jsxref("String/String", "String()")}}-Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, weisen jedoch auch wichtige Unterschiede und Einschränkungen auf. Siehe "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)" unten.

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form spezifiziert ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichenzugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die {{jsxref("String/charAt", "charAt()")}}-Methode:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String wie ein array-ähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Beim Verwenden der Klammern-Schreibweise für den Zeichenzugriff wird das Löschen oder Zuweisen eines Wertes zu diesen Eigenschaften nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder schreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Vergleich von Strings

Verwenden Sie die [Kleiner-als- und Größer-als-Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings groß- und kleinschreibungssensitiv vergleichen. Eine übliche Methode, um Strings ohne Berücksichtigung der Groß- und Kleinschreibung zu vergleichen, besteht darin, beide in denselben Fall (Großbuchstaben oder Kleinbuchstaben) zu konvertieren, bevor sie verglichen werden.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Entscheidung, ob mit [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformiert wird, ist größtenteils willkürlich, und keine der beiden ist vollständig robust, wenn sie über das lateinische Alphabet hinausgeht. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide zu `SS` durch `toUpperCase()` transformiert, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` durch `toLowerCase()` gemeldet würde, es sei denn, es wird ausdrücklich [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) verwendet.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokalisierungsbewusste und robuste Lösung zum Testen der Gleichheit ohne Berücksichtigung der Groß- und Kleinschreibung ist die Verwendung der {{jsxref("Intl.Collator")}} API oder der [`localeCompare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)-Methode der Zeichenfolge — sie haben dieselbe Schnittstelle — mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity)-Option auf `"accent"` oder `"base"` gesetzt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht den Zeichenfolgenvergleich in ähnlicher Weise wie `strcmp()` — sie ermöglicht das Sortieren von Zeichenfolgen auf eine lokalisierungsbewusste Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und [primitiven String](/de/docs/Glossary/Primitive)-Werten unterscheidet. (Dasselbe gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Zahlen")}}.)

String-Literale (durch doppelte oder einfache Anführungszeichen gekennzeichnet) und zurückgegebene Strings von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext (das heißt, ohne Verwendung des {{jsxref("Operators/new", "new")}}-Schlüsselworts aufgerufen) sind primitive Strings. In Kontexten, in denen eine Methode für einen primitiven String aufgerufen oder ein Eigenschaftsnachschlagevorgang durchgeführt wird, wird JavaScript den String-Primitiven automatisch umhüllen und die Methode auf dem Wrapper-Objekt aufrufen oder den Eigenschaftsnachschlagevorgang durchführen.

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
> Sie sollten `String` selten als Konstruktor verwenden.

String-Primitiven und `String`-Objekte liefern auch unterschiedliche Ergebnisse bei der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}. Primitiven, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code fehlschlagen, wenn er auf `String`-Objekte trifft, wenn er stattdessen einen primitiven String erwartet, obwohl sich Autoren im Allgemeinen keine Sorgen über den Unterschied machen müssen.

Ein `String`-Objekt kann immer mit der {{jsxref("String/valueOf", "valueOf()")}}-Methode in sein primitives Gegenstück konvertiert werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele eingebauten Operationen, die Strings erwarten, konvertieren zunächst ihre Argumente in Strings (was größtenteils der Grund dafür ist, dass sich `String`-Objekte ähnlich wie String-Primitiven verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen eine {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem sie dessen [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()`-Methoden aufrufen, in dieser Reihenfolge. Das resultierende Primitive wird dann in einen String umgewandelt.

Es gibt mehrere Möglichkeiten, fast den gleichen Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die oben erklärten String-Konvertierungsschritte für den eingebetteten Ausdruck aus.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keine {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwendung des [`+`-Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` erzwingt das Operand in ein _primitives_ statt in einen _String_ zu konvertieren und hat, bei einigen Objekten, völlig unterschiedliche Verhaltensweisen als die normale String-Konvertierung. Siehe seine [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für mehr Details.

Je nach Anwendungsfall möchten Sie möglicherweise `` `${x}` `` (um das eingebaute Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte zu behandeln, ohne einen Fehler auszulösen) verwenden, aber Sie sollten nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster

Strings werden grundlegend als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. Im UTF-16-Encoding hat jede Codeeinheit exakt 16 Bit. Dies bedeutet, dass es maximal 2<sup>16</sup> oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten darstellbar sind. Diese Zeichensatz wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Das gesamte Unicode-Zeichenset ist jedoch viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, das sind Paare von 16-Bit-Codeeinheiten, die ein einzelnes Zeichen darstellen. Um Zweideutigkeit zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um Einzel-Code-Einheits-Zeichen zu codieren. (Genauer gesagt haben führende Surrogate, auch als High-Surrogate-Codeeinheiten bezeichnet, Werte zwischen `0xD800` und `0xDBFF` einschließlich, während nachfolgende Surrogate, auch als Low-Surrogate-Codeeinheiten bezeichnet, Werte zwischen `0xDC00` und `0xDFFF` einschließlich haben.) Jedes Unicode-Zeichen, das aus einer oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1-6 Hexadezimalziffern darstellt.

Ein "einsames Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Es liegt im Bereich `0xD800`–`0xDBFF` einschließlich (d.h. ist ein führendes Surrogat), aber es ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Es liegt im Bereich `0xDC00`–`0xDFFF` einschließlich (d.h. ist ein nachfolgendes Surrogat), aber es ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führendes Surrogat.

Einsame Surrogate stellen kein Unicode-Zeichen dar. Obwohl die meisten in JavaScript eingebauten Methoden sie korrekt behandeln, da sie alle basierend auf UTF-16-Codeeinheiten arbeiten, sind einsame Surrogate oft keine gültigen Werte bei der Interaktion mit anderen Systemen — zum Beispiel wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) eine {{jsxref("URIError")}} für einsame Surrogate auslösen, da die URI-Kodierung UTF-8-Kodierung verwendet, die keine Kodierung für einsame Surrogate hat. Zeichenfolgen, die keine einsamen Surrogate enthalten, werden als _wohlgeformt_ bezeichnet und können sicher mit Funktionen verwendet werden, die nicht mit UTF-16 umgehen (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können überprüfen, ob ein String wohlgeformt ist, mit der {{jsxref("String/isWellFormed", "isWellFormed()")}}-Methode, oder einsame Surrogate mit der {{jsxref("String/toWellFormed", "toWellFormed()")}}-Methode bereinigen.

Zusätzlich zu Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die normalerweise durch das \<ZWJ> (`U+200D`) Zeichen verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene der Zeichen Sie iterieren. Zum Beispiel wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten aufteilen und Surrogatpaare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Die Iteration durch Graphem-Cluster erfordert einige benutzerdefinierte Codes.

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
  - : Gibt einen String zurück, der aus der angegebenen Sequenz von Unicode-Werten erstellt wird.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der aus der angegebenen Sequenz von Codepunkten erstellt wird.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem Roh-Template-String erstellt wird.

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der anfängliche Wert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind Eigentum jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Spiegelt die `Länge` des Strings wider. Nur-Lese-Zugriff.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück. Akzeptiert negative Ganzzahlen, die vom letzten Zeichen des Strings zurückzählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den UTF-16-Codeeinheitswert am gegebenen `Index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die den Codepunktwert des UTF-16-codierten Codepunkts darstellt, der an der angegebenen Position `pos` beginnt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index des ersten Auftretens von `searchValue` in diesem String zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieser String [einsame Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index des letzten Auftretens von `searchValue` in diesem String zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die anzeigt, ob die Referenzzeichenfolge `compareString` vor, nach oder gleich der angegebenen Zeichenfolge in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` gegen einen String zu prüfen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator von allen Übereinstimmungen des `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden Zeichenfolgenwerts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String vom Ende mit einem gegebenen String auf und gibt einen neuen String mit der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String vom Anfang mit einem gegebenen String auf und gibt einen neuen String mit der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch Aufteilen des aufrufenden Strings bei Vorkommen des Substrings `sep` gefüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen von String `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der an dem angegebenen Index beginnt und sich für eine bestimmte Anzahl von Zeichen danach erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufrufenden Strings von (oder zwischen) dem angegebenen Index (oder den Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Spracheinstellungen in Kleinbuchstaben umgewandelt.

    Für die meisten Sprachen wird dies dasselbe zurückgeben wie
    {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Spracheinstellungen in Großbuchstaben umgewandelt.

    Für die meisten Sprachen wird dies dasselbe zurückgeben wie
    {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden Zeichenfolgenwert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die
    {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden Zeichenfolgenwert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Entfernt Leerzeichen vom Beginn und Ende des Strings.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Entfernt Leerzeichen vom Ende des Strings.
- {{jsxref("String.prototype.trimStart()")}}
  - : Entfernt Leerzeichen vom Beginn des Strings.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die
    {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Werts iteriert und jeden Codepunkt als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen kleinen Teil der heute verfügbaren HTML-Tags und Attribute bieten. Viele von ihnen erzeugen heute veraltete oder nicht-standardisierte Markierungen. Darüber hinaus führen sie einfache String-Konkatenationen ohne jegliche Validierung oder Reinigung durch, was sie zu einem potenziellen Sicherheitsrisiko macht, wenn sie direkt über [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) stattdessen.

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

Das einzige Escaping, das sie durchführen, besteht darin, `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}}, und {{jsxref("String/link", "link()")}}) mit `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Möglichkeit, Werte in Strings zu konvertieren, als die `toString()`-Methode des Werts aufzurufen, da erstere auch bei `null` und {{jsxref("undefined")}} funktioniert. Zum Beispiel:

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

- [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting)-Leitfaden
- {{jsxref("RegExp")}}
