---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Das **`String`**-Objekt wird verwendet, um eine Zeichenfolge darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu halten, die in Textform dargestellt werden können. Zu den am häufigsten verwendeten Operationen mit Strings gehört das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verketten mit den [`+` und `+=` string operators](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen der Existenz oder der Position von Teilstrings mit der {{jsxref("String/indexOf", "indexOf()")}}-Methode oder das Extrahieren von Teilstrings mit der {{jsxref("String/substring", "substring()")}}-Methode.

### Erstellen von Strings

Strings können als Primitive, aus Zeichenfolgenliteralen oder als Objekte unter Verwendung des {{jsxref("String/String", "String()")}}-Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitive und String-Objekte teilen viele Verhaltensweisen, weisen jedoch auch wichtige Unterschiede und Einschränkungen auf. Siehe "[String-Primitive und String-Objekte](#string-primitive_und_string-objekte)" unten.

Zeichenfolgenliterale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Letztere Form gibt ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) an: Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von Zeichenfolgenliteralen finden Sie im [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichen-Zugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die {{jsxref("String/charAt", "charAt()")}}-Methode:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als ein arrayähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Wenn Sie die Klammer-Notation für den Zeichen-Zugriff verwenden, wird der Versuch, diese Eigenschaften zu löschen oder einen Wert zuzuweisen, nicht erfolgreich sein. Die betreffenden Eigenschaften sind weder beschreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Vergleichen von Strings

Verwenden Sie die [Kleiner- und Größer-Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings case-sensitiv vergleichen. Ein gebräuchlicher Weg, um Strings case-insensitiv zu vergleichen, besteht darin, beide in denselben Fall (groß oder klein) zu konvertieren, bevor Sie sie vergleichen.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, ob sie durch [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformieren, ist meist willkürlich, und keine davon ist vollständig robust, wenn sie über das lateinische Alphabet hinausgeht. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide zu `SS` durch `toUpperCase()` transformiert, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` durch `toLowerCase()` gemeldet werden würde, es sei denn, es wird speziell [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) verwendet.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine länderabhängige und robuste Lösung für die Prüfung der case-insensitiven Gleichheit besteht darin, die {{jsxref("Intl.Collator")}}-API oder die `localeCompare()`-Methode des Strings zu verwenden – sie teilen die gleiche Schnittstelle – mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity)-Option auf `"accent"` oder `"base"` gesetzt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht den Zeichenfolgenvergleich in ähnlicher Weise wie `strcmp()` — sie ermöglicht das Sortieren von Strings auf eine landesspezifische Weise.

### String-Primitive und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven Zeichenfolgen")}}-Werten unterscheidet. (Dasselbe gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}}).

Zeichenfolgenliterale (durch doppelte oder einfache Anführungszeichen definiert) und Strings, die aus `String`-Aufrufen in einem Nicht-Konstruktor-Kontext zurückgegeben werden (das heißt, ohne Verwendung des {{jsxref("new")}}-Schlüsselworts aufgerufen), sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder ein Eigenschafts-Lookup durchgeführt wird, wird JavaScript automatisch das String-Primitive umhüllen und die Methode aufrufen oder das Eigenschafts-Lookup am Wrapper-Objekt durchführen.

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

String-Primitive und `String`-Objekte geben auch unterschiedliche Ergebnisse zurück, wenn {{jsxref("Global_Objects/eval", "eval()")}} verwendet wird. Primitive, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code brechen, wenn er auf `String`-Objekte trifft, obwohl er stattdessen eine primitive Zeichenfolge erwartet, obwohl sich Autoren im Allgemeinen keine Sorgen über die Unterscheidung machen müssen.

Ein `String`-Objekt kann immer mit der {{jsxref("String/valueOf", "valueOf()")}}-Methode in sein primitives Gegenstück konvertiert werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Coercion

Viele eingebaute Operationen, die Strings erwarten, zwingen ihre Argumente erst zu Strings (was weitgehend der Grund ist, warum sich `String`-Objekte ähnlich wie String-Primitive verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in eine Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()`, und `valueOf()`-Methoden, in dieser Reihenfolge, aufgerufen werden. Die resultierende Primitive wird dann in einen String umgewandelt.

Es gibt mehrere Möglichkeiten, nahezu den gleichen Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die String-Coercion-Schritte für den eingebetteten Ausdruck aus, die oben erklärt wurden.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Die Verwendung des [`+` operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seine Operanden zu einer _Primitiven_ anstatt zu einem _String_ zu werden, und hat für einige Objekte völlig andere Verhaltensweisen als die normale String-Coercion. Siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Je nach Anwendungsfall möchten Sie möglicherweise `` `${x}` `` (um das eingebautes Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte ohne Fehlerbehandlung zu handhaben) verwenden, aber Sie sollten nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Clustern

Strings werden grundsätzlich als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. In der UTF-16-Codierung ist jede Code-Einheit genau 16 Bit lang. Das bedeutet, dass es maximal 2<sup>16</sup>, oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten darstellbar sind. Diese Zeichensatz wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Code-Einheit kann mit `\u` gefolgt von genau vier Hexadezimalzahlen in einem String geschrieben werden.

Das gesamte Unicode-Zeichenarsenal ist jedoch wesentlich größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, die Paare von 16-Bit-Codeeinheiten sind, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um Zeichen mit einer einzigen Codeeinheit zu kodieren. (Genauer gesagt, führende Surrogate, auch als High-Surrogate-Codes bezeichnet, haben Werte zwischen `0xD800` und `0xDBFF`, während abschließende Surrogate, auch als Low-Surrogate-Codes bezeichnet, Werte zwischen `0xDC00` und `0xDFFF` haben.) Jedes Unicode-Zeichen, bestehend aus einem oder zwei UTF-16-Codeeinheiten, wird ebenfalls als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann mit `\u{xxxxxx}` in einem String geschrieben werden, wobei `xxxxxx` 1–6 Hex-Ziffern repräsentiert.

Ein "alleiniges Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Es liegt im Bereich `0xD800`–`0xDBFF`, ist aber die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein abschließender Surrogat.
- Es liegt im Bereich `0xDC00`–`0xDFFF`, ist aber die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führender Surrogat.

Alleinstehende Surrogate stellen kein Unicode-Zeichen dar. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt behandeln, da sie alle basierend auf UTF-16-Codeeinheiten arbeiten, sind alleinstehende Surrogate meistens keine gültigen Werte, wenn sie mit anderen Systemen interagieren—zum Beispiel, [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) wird einen {{jsxref("URIError")}} für alleinstehende Surrogate werfen, da die URI-Codierung UTF-8-Codierung verwendet, die keine Codierung für alleinstehende Surrogate hat. Strings, die keine alleinstehenden Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und sind sicher, mit Funktionen verwendet zu werden, die nicht mit UTF-16 arbeiten (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können mit der {{jsxref("String/isWellFormed", "isWellFormed()")}}-Methode überprüfen, ob ein String wohlgeformt ist, oder alleinstehende Surrogate mit der {{jsxref("String/toWellFormed", "toWellFormed()")}}-Methode bereinigen.

Über die Unicode-Zeichen hinaus gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als ein _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die in der Regel durch das \<ZWJ> (`U+200D`) Zeichen verbunden werden.

Sie müssen darauf achten, auf welcher Ebene der Zeichen Sie iterieren. Zum Beispiel wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten aufteilen und Surrogatpaare trennen. Zeichenfolgenindizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Die Iteration durch Graphem-Cluster erfordert ein benutzerdefiniertes Skript.

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
  - : Erstellt `String`-Objekte. Wenn es als Funktion aufgerufen wird, gibt es primitive Werte vom Typ String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt eine Zeichenfolge zurück, die durch die angegebene Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt eine Zeichenfolge zurück, die durch die angegebene Sequenz von Codepunkten erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt eine Zeichenfolge zurück, die aus einem rohen Template-String erstellt wurde.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der anfängliche Wert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Reflektiert die `Länge` des Strings. Nur lesbar.

## Instanz-Methoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück. Akzeptiert negative Ganzzahlen, die vom letzten Zeichen der Zeichenfolge zurückzählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen
    `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den Wert der UTF-16-Codeeinheit an dem angegebenen
    `Index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative Ganzzahl zurück, die den Codepunktwert des UTF-16
    kodierten Codepunkts darstellt, beginnend an der angegebenen Position `pos`.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Zeichenfolgen und gibt eine neue Zeichenfolge zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob eine Zeichenfolge mit den Zeichen der Zeichenfolge
    `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob die aufrufende Zeichenfolge `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieser Zeichenfolge der ersten
    Vorkommen von `searchValue` zurück, oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen boolean-Wert zurück, der angibt, ob diese Zeichenfolge keine [alleinstehenden Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieser Zeichenfolge der letzten
    Vorkommen von `searchValue` zurück, oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob die Referenzzeichenfolge
    `compareString` vor, nach oder gleich der
    angegebenen Zeichenfolge in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` mit einer Zeichenfolge zu vergleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator für alle Treffer von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufgerufenen Zeichenfolgenwertes zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt die aktuelle Zeichenfolge vom Ende mit einer angegebenen Zeichenfolge auf und gibt eine neue Zeichenfolge der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt die aktuelle Zeichenfolge vom Anfang mit einer angegebenen Zeichenfolge auf und gibt eine neue Zeichenfolge
    der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt eine Zeichenfolge bestehend aus den Elementen des Objekts zurück, die
    `count` mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` durch
    `replaceWith` zu ersetzen. `searchFor` kann eine Zeichenfolge
    oder ein regulärer Ausdruck sein, und `replaceWith` kann eine Zeichenfolge oder
    Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` durch
    `replaceWith` zu ersetzen. `searchFor` kann eine Zeichenfolge
    oder ein regulärer Ausdruck sein, und `replaceWith` kann eine Zeichenfolge oder
    Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Suchen Sie nach einem Treffer zwischen einem regulären Ausdruck `regexp` und
    der aufgerufenen Zeichenfolge.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt einer Zeichenfolge und gibt eine neue Zeichenfolge zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Zeichenfolgen zurück, das durch das Trennen der aufgerufenen Zeichenfolge an Vorkommen der Teilzeichenfolge `sep` befüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob die aufgerufene Zeichenfolge mit den Zeichen der Zeichenfolge
    `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil der Zeichenfolge zurück, der am angegebenen Index beginnt und für eine bestimmte Anzahl von Zeichen danach fortgesetzt wird.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt eine neue Zeichenfolge zurück, die aus den Zeichen der aufgerufenen Zeichenfolge von (oder zwischen)
    dem angegebenen Index (oder Indizes) besteht.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}
  - : Die Zeichen innerhalb einer Zeichenfolge werden unter Berücksichtigung des aktuellen Gebietsschemas in Kleinbuchstaben umgewandelt.

    Für die meisten Sprachen entspricht dies der {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
  - : Die Zeichen innerhalb einer Zeichenfolge werden unter Berücksichtigung des aktuellen Gebietsschemas in Großbuchstaben umgewandelt.

    Für die meisten Sprachen entspricht dies der {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufgerufenen Zeichenfolgenwert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene Objekt darstellt. Überschreibt die
    {{jsxref("Object.prototype.toString()")}}-Methode.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufgerufenen Zeichenfolgenwert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt eine Zeichenfolge zurück, bei der alle [alleinstehenden Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) der aktuellen Zeichenfolge durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Entfernt Leerzeichen vom Anfang und Ende der Zeichenfolge.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Entfernt Leerzeichen vom Ende der Zeichenfolge.
- {{jsxref("String.prototype.trimStart()")}}
  - : Entfernt Leerzeichen vom Anfang der Zeichenfolge.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die
    {{jsxref("Object.prototype.valueOf()")}}-Methode.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Werts iteriert und jeden Codepunkt als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard beruhen und nur einen Teil der derzeit verfügbaren HTML-Tags und -Attribute bieten. Viele von ihnen erstellen heute veraltetes oder nicht standardmäßiges Markup. Darüber hinaus führen sie eine Zeichenfolgenverkettung ohne jegliche Validierung oder Bereinigung aus, was sie zu einer potenziellen Sicherheitsbedrohung macht, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) stattdessen.

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
  - : [`<a href="url">`](/de/docs/Web/HTML/Reference/Elements/a#href) (Link zur URL)
- {{jsxref("String.prototype.small()")}} {{deprecated_inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{deprecated_inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{deprecated_inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{deprecated_inline}}
  - : {{HTMLElement("sup")}}

Beachten Sie, dass diese Methoden nicht überprüfen, ob die Zeichenfolge selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erstellen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, das sie durchführen, besteht darin, `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) mit `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Methode, um Werte in Zeichenfolgen umzuwandeln, als die `toString()`-Methode des Werts aufzurufen, da erstere funktioniert, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} verwendet wird. Zum Beispiel:

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

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)-Leitfaden
- {{jsxref("RegExp")}}
