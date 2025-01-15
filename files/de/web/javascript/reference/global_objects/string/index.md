---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Zeichenfolge darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu speichern, die in Textform dargestellt werden können. Zu den am häufigsten verwendeten Operationen an Strings gehören das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verbinden mit den [`+` und `+=` Zeichenoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), die Überprüfung auf das Vorhandensein oder die Position von Teilstrings mit der Methode {{jsxref("String/indexOf", "indexOf()")}}, oder das Extrahieren von Teilstrings mit der Methode {{jsxref("String/substring", "substring()")}}.

### Erstellen von Strings

Strings können als Primitive, aus String-Literalen, oder als Objekte unter Verwendung des {{jsxref("String/String", "String()")}}-Konstruktors erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, weisen jedoch andere wichtige Unterschiede und Vorbehalte auf. Siehe "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)" unten.

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die gleich behandelt werden, oder unter Verwendung des Backticks <kbd>`</kbd>. Diese letzte Form spezifiziert ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichen-Zugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die {{jsxref("String/charAt", "charAt()")}}-Methode:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als array-ähnliches Objekt zu behandeln, wobei einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Wenn Sie die Klammernotation für den Zeichen-Zugriff verwenden, wird es nicht gelingen, diesen Eigenschaften einen Wert zu löschen oder zuzuweisen. Die beteiligten Eigenschaften sind weder beschreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Vergleichen von Strings

Verwenden Sie die [Größer- und Kleiner-als-Operatoren](/de/docs/Web/JavaScript/Reference/Operators), um Strings zu vergleichen:

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings case-sensitiv vergleichen. Eine übliche Methode, um Strings case-insensitiv zu vergleichen, besteht darin, beide vor dem Vergleich in denselben Fall (groß oder klein) zu konvertieren.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Entscheidung, ob `toUpperCase()` oder `toLowerCase()` verwendet werden soll, ist weitgehend willkürlich, da keine vollständig robust ist, wenn man über das lateinische Alphabet hinausgeht. Zum Beispiel wird der deutsche Kleinbuchstabe `ß` und `ss` von `toUpperCase()` in `SS` umgewandelt, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` von `toLowerCase()` gemeldet würde, es sei denn, es wird speziell `toLocaleLowerCase("tr")` verwendet.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine locale-bewusste und robuste Lösung zum Testen auf case-insensitive Gleichheit ist die Verwendung der {{jsxref("Intl.Collator")}}-API oder der `localeCompare()`-Methode des Strings — sie teilen dieselbe Schnittstelle — mit der Option [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity), die auf `"accent"` oder `"base"` gesetzt ist.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht den Zeichenfolgenvergleich ähnlich wie `strcmp()` — sie erlaubt das Sortieren von Strings in einer lokalisierungsbewussten Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven String")}}-Werten unterscheidet. (Das Gleiche gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Zahlen")}}.)

String-Literale (gekennzeichnet durch doppelte oder einfache Anführungszeichen) und Strings, die von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext (d. h. ohne Verwendung des {{jsxref("Operators/new", "new")}}-Schlüsselworts) zurückgegeben werden, sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder ein Eigenschaftslookup durchgeführt werden soll, wird JavaScript automatisch den String-Primitiven umwickeln und die Methode auf dem Wrapper-Objekt aufrufen oder das Eigenschaftslookup dort durchführen.

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

String-Primitiven und `String`-Objekte liefern auch unterschiedliche Ergebnisse bei der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}. Primitive, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code brechen, wenn er `String`-Objekte antrifft, wenn er stattdessen einen primitiven String erwartet, obwohl die Entwickler im Allgemeinen nicht über den Unterschied besorgt sein müssen.

Ein `String`-Objekt kann immer mit der Methode {{jsxref("String/valueOf", "valueOf()")}} in sein primitives Gegenstück konvertiert werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele eingebaute Operationen, die Strings erwarten, zwingen zuerst ihre Argumente zu Strings (was größtenteils der Grund ist, warum `String`-Objekte ähnlich wie String-Primitiven verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) umgewandelt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) umgewandelt.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives Element umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem ihre Methoden `[Symbol.toPrimitive]()` (mit `"string"` als Hinweis), `toString()` und `valueOf()` in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in einen String umgewandelt.

Es gibt mehrere Möglichkeiten, nahezu den gleichen Effekt in JavaScript zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die String-Konvertierungsschritte aus, die oben für den eingebetteten Ausdruck erklärt wurden.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion: `String(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwenden Sie den [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seinen Operanden zu einem _primitiven_ statt zu einem _String_, und hat für einige Objekte ganz andere Verhaltensweisen als die normale String-Konvertierung. Siehe seine [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Je nach Anwendungsfall möchten Sie möglicherweise `` `${x}` `` verwenden (um das eingebaute Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte ohne Fehlermeldung zu verarbeiten), aber Sie sollten `"" + x` nicht verwenden.

### UTF-16-Zeichen, Unicode-Codierungen und Graphem-Cluster

Strings werden grundsätzlich als Sequenzen von [UTF-16-Codeeinheiten](https://de.wikipedia.org/wiki/UTF-16) dargestellt. Bei der UTF-16-Codierung ist jede Codeeinheit genau 16 Bit lang. Das bedeutet, dass maximal 2<sup>16</sup> oder 65536 mögliche Zeichen als einzelne UTF-16-Codeeinheiten darstellbar sind. Diese Zeichenmenge wird [Basic Multilingual Plane (BMP)](<https://de.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) genannt und umfasst die gebräuchlichsten Zeichen wie das lateinische, griechische und kyrillische Alphabet sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Das gesamte Unicode-Zeichenset ist jedoch viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, bei denen es sich um Paare von 16-Bit-Codeeinheiten handelt, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeit zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht zur Codierung von Einzelcodeeinheiten verwendet. (Genauer gesagt, führende Surrogate, auch hohe Surrogate genannt, haben Werte zwischen `0xD800` und `0xDBFF`, einschließlich, während nachfolgende Surrogate, auch niedrige Surrogate genannt, Werte zwischen `0xDC00` und `0xDFFF`, einschließlich, haben.) Jedes Unicode-Zeichen, das aus einer oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codierung_ bezeichnet. Jede Unicode-Codierung kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1–6 Hexadezimalziffern darstellt.

Ein "einzelnes Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Es liegt im Bereich `0xD800`–`0xDBFF`, einschließlich (d. h. es ist ein führendes Surrogat), aber es ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Es liegt im Bereich `0xDC00`–`0xDFFF`, einschließlich (d. h. es ist ein nachfolgendes Surrogat), aber es ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führendes Surrogat.

Einzelne Surrogate repräsentieren kein Unicode-Zeichen. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt behandeln, weil sie alle auf UTF-16-Codeeinheiten arbeiten, sind einzelne Surrogate oft keine gültigen Werte, wenn sie mit anderen Systemen interagieren — zum Beispiel wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) für einzelne Surrogate einen {{jsxref("URIError")}} auslösen, weil die URI-Codierung UTF-8-Codierung verwendet, die keine Codierung für einzelne Surrogate hat. Strings, die keine einzelnen Surrogate enthalten, werden _wohlgeformte_ Strings genannt und sind sicher bei Funktionen zu verwenden, die nicht mit UTF-16 arbeiten (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}} prüfen, ob ein String wohlgeformt ist, oder einzelne Surrogate mit der Methode {{jsxref("String/toWellFormed", "toWellFormed()")}} sanieren.

Zusätzlich zu Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Vielzahl von Variationen haben, bestehen tatsächlich aus mehreren Emojis, die normalerweise durch das Zeichen \<ZWJ> (`U+200D`) verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene der Zeichen Sie iterieren. Zum Beispiel wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten aufteilen und Surrogatpaare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codierungen. Das Iterieren durch Graphem-Cluster erfordert einige benutzerdefinierte Code.

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
  - : Gibt einen String zurück, der mithilfe der angegebenen Sequenz von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der mithilfe der angegebenen Sequenz von Codierungen erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem rohen Template-String erstellt wurde.

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Gibt die `Länge` des Strings wieder. Nur lesbar.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück. Akzeptiert negative Ganzzahlen, die rückwärts vom letzten Zeichen des Strings zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die der Wert der UTF-16-Codeeinheit am angegebenen `Index` ist.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative Ganzzahl zurück, die der Codierung des UTF-16-codierten Zeichens entspricht, das an der angegebenen `Pos` startet.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index des ersten Vorkommens von `searchValue` innerhalb dieses Strings zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieser String irgendwelche [einzelnen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index des letzten Vorkommens von `searchValue` innerhalb dieses Strings zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Referenzstring `compareString` vor, nach oder gleich dem gegebenen String in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` mit einem String abzugleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator für alle Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden Stringwertes zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String von hinten mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String von vorne mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count` Mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` durch `replaceWith` zu ersetzen. `searchFor` kann ein String oder regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` durch `replaceWith` zu ersetzen. `searchFor` kann ein String oder regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch das Aufteilen des aufrufenden Strings bei Vorkommen des Substrings `sep` gefüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der am angegebenen Index beginnt und sich über eine bestimmte Anzahl von Zeichen erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der die Zeichen des aufrufenden Strings von (oder zwischen) den angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden in Kleinbuchstaben umgewandelt, wobei die aktuelle Lokale berücksichtigt wird.

    Für die meisten Sprachen wird dies dasselbe wie {{jsxref("String/toLowerCase", "toLowerCase()")}} zurückgeben.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden in Großbuchstaben umgewandelt, wobei die aktuelle Lokale berücksichtigt wird.

    Für die meisten Sprachen wird dies dasselbe wie {{jsxref("String/toUpperCase", "toUpperCase()")}} zurückgeben.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden Stringwert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden Stringwert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einzelnen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt werden.
- {{jsxref("String.prototype.trim()")}}
  - : Trimmt Leerzeichen vom Anfang und Ende des Strings.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Trimmt Leerzeichen vom Ende des Strings.
- {{jsxref("String.prototype.trimStart()")}}
  - : Trimmt Leerzeichen vom Anfang des Strings.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codierungen eines String-Wertes iteriert und jede Codierung als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der derzeit verfügbaren HTML-Tags und Attribute bereitstellen. Viele von ihnen erstellen heute veraltete oder nicht standardmäßige Markups. Außerdem führen sie String-Konkatenationen ohne Validierung oder Sanierung durch, was sie zu einer potenziellen Sicherheitsbedrohung macht, wenn sie direkt über [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

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

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erstellen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, das sie durchführen, ist das Ersetzen von `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}}, und {{jsxref("String/link", "link()")}}) durch `&quot;`.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Methode, um Werte in Strings zu konvertieren, als das Aufrufen der `toString()`-Methode des Wertes, da die erstgenannte auch funktioniert, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} verwendet wird. Zum Beispiel:

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
