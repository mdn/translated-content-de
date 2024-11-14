---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Folge von Zeichen darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu halten, die in Textform dargestellt werden können. Zu den am häufigsten verwendeten Operationen an Strings gehören das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verketten mit den [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf das Vorhandensein oder den Standort von Teilstrings mit der Methode {{jsxref("String/indexOf", "indexOf()")}}, oder das Extrahieren von Teilstrings mit der Methode {{jsxref("String/substring", "substring()")}}.

### Strings erstellen

Strings können als primitive Daten, aus String-Literalen oder als Objekte mit dem {{jsxref("String/String", "String()")}}-Konstruktor erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, weisen jedoch auch andere wichtige Unterschiede und Einschränkungen auf. Weitere Informationen finden Sie unten unter "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)".

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Rückwärtsakzent-Zeichen <kbd>`</kbd>. Diese letzte Form spezifiziert eine [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals): Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie im [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zugriff auf Zeichen

Es gibt zwei Möglichkeiten, um auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die Methode {{jsxref("String/charAt", "charAt()")}}:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als arrayähnliches Objekt zu behandeln, wobei einzelne Zeichen einer numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Beim Verwenden der Klammernotation für den Zeichenzugriff wird der Versuch, einen Wert diesen Eigenschaften zu löschen oder zuzuweisen, nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder schreibbar noch konfigurierbar. (Siehe {{jsxref("Object.defineProperty()")}} für weitere Informationen.)

### Strings vergleichen

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings case-sensitiv vergleichen. Eine übliche Methode, um Strings case-insensitiv zu vergleichen, besteht darin, beide in denselben Fall (Groß- oder Kleinschreibung) zu konvertieren, bevor sie verglichen werden.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, ob mit [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformiert werden soll, ist weitgehend willkürlich, und keine ist vollständig robust, wenn sie über das lateinische Alphabet hinaus ausgeweitet wird. Beispielsweise werden der deutsche Kleinbuchstabe `ß` und `ss` beide von `toUpperCase()` in `SS` umgewandelt, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` gemeldet wird, es sei denn, man verwendet speziell [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokalisierte und robuste Lösung zur Prüfung auf case-insensitive Gleichheit besteht darin, die API {{jsxref("Intl.Collator")}} oder die `localeCompare()`-Methode des Strings zu verwenden — sie teilen dieselbe Schnittstelle — mit der Option [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity), die auf `"accent"` oder `"base"` gesetzt ist.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht den String-Vergleich in ähnlicher Weise wie `strcmp()` — sie erlaubt das Sortieren von Strings auf eine lokalisierte Art.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven String")}} Werten unterscheidet. (Gleiches gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}}.)

String-Literale (gekennzeichnet durch doppelte oder einfache Anführungszeichen) und Strings, die von `String`-Aufrufen in einem Nicht-Konstruktor-Kontext zurückgegeben werden (d. h. ohne das Verwenden des {{jsxref("Operators/new", "new")}}-Schlüsselwortes), sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder eine Eigenschaftensuche durchgeführt wird, wird JavaScript automatisch den String-Primitive einhüllen und die Methode aufrufen oder die Eigenschaftensuche stattdessen auf dem Wrapper-Objekt durchführen.

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

String-Primitiven und `String`-Objekte geben auch unterschiedliche Ergebnisse bei der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zurück. Primitiven, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code brechen, wenn er auf `String`-Objekte stößt, während er stattdessen einen primitiven String erwartet, obwohl Autoren im Allgemeinen keine Bedenken bezüglich des Unterschieds haben müssen.

Ein `String`-Objekt kann immer mit der Methode {{jsxref("String/valueOf", "valueOf()")}} in sein primitives Gegenstück umgewandelt werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele eingebettete Operationen, die Strings erwarten, erzwingen zunächst ihre Argumente zu Strings, was weitgehend der Grund dafür ist, dass sich `String`-Objekte ähnlich wie String-Primitiven verhalten. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit demselben Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives Objekt konvertiert](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem es dessen `[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()`-Methoden in dieser Reihenfolge aufruft. Das resultierende primitive Objekt wird dann in einen String konvertiert.

Es gibt mehrere Möglichkeiten, nahezu das gleiche Ergebnis in JavaScript zu erzielen.

- [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die String-Konvertierungsschritte durch, die oben für den eingebetteten Ausdruck erklärt wurden.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwenden des [`+`-Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` erzwingt seinen Operand in ein _primitives_ statt eines _Strings_, und hat für einige Objekte völlig andere Verhaltensweisen als die normale String-Konvertierung. Siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Je nach Ihrem Anwendungsfall möchten Sie vielleicht `` `${x}` `` (um das eingebaute Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte zu behandeln, ohne einen Fehler auszulösen) verwenden, aber Sie sollten nicht `"" + x` verwenden.

### UTF-16 Zeichen, Unicode-Codepunkte und Grapheme-Cluster

Strings werden im Wesentlichen als Folgen von [UTF-16-Codierungseinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. In UTF-16-Codierung hat jede Codierungseinheit eine Länge von genau 16 Bit. Dies bedeutet, dass maximal 2<sup>16</sup>, oder 65536 Zeichen als einzelne UTF-16-Codierungseinheiten darstellbar sind. Diese Zeichenmenge wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codierungseinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Allerdings ist der gesamte Unicode-Zeichensatz viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, bei denen es sich um Paare von 16-Bit-Codierungseinheiten handelt, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codierungseinheiten werden nicht zur Kodierung von Einzel-Code-Einheiten verwendet. (Genauer gesagt haben führende Surrogate, auch hohe Surrogat-Codierungseinheiten genannt, Werte zwischen `0xD800` und `0xDBFF`, während nachfolgende Surrogate, auch niedrige Surrogat-Codierungseinheiten genannt, Werte zwischen `0xDC00` und `0xDFFF`, einschließlich.) Jedes Unicode-Zeichen, bestehend aus einer oder zwei UTF-16-Codierungseinheiten, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1–6 Hexadezimalziffern darstellt.

Ein "einsamer Surrogat" ist eine 16-Bit-Codierungseinheit, die eine der folgenden Bedingungen erfüllt:

- Sie liegt im Bereich `0xD800`–`0xDBFF` (d. h., sie ist ein führendes Surrogat), ist aber die letzte Codierungseinheit im String oder die nächste Codierungseinheit ist kein nachfolgendes Surrogat.
- Sie liegt im Bereich `0xDC00`–`0xDFFF` (d. h., sie ist ein nachfolgendes Surrogat), ist aber die erste Codierungseinheit im String oder die vorherige Codierungseinheit ist kein führendes Surrogat.

Einsame Surrogate repräsentieren kein Unicode-Zeichen. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt behandeln, da sie alle auf Basis von UTF-16-Codierungseinheiten arbeiten, sind einsame Surrogate oft keine gültigen Werte, wenn sie mit anderen Systemen interagieren — beispielsweise wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) einen {{jsxref("URIError")}} für einsame Surrogate werfen, da die URI-Kodierung UTF-8-Codierung verwendet, die keine Kodierung für einsame Surrogate hat. Strings, die keine einsamen Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und sind sicher, um mit Funktionen verwendet zu werden, die sich nicht mit UTF-16 befassen (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können überprüfen, ob ein String wohlgeformt ist, mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}}, oder einsame Surrogate mit der Methode {{jsxref("String/toWellFormed", "toWellFormed()")}} bereinigen.

Über Unicode-Zeichen hinaus gibt es bestimmte Folgen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Grapheme-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die in der Regel durch das \<ZWJ> (`U+200D`) Zeichen verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene der Zeichen Sie iterieren. Beispiel: [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) wird nach UTF-16-Codierungseinheiten aufteilen und Surrogatpaare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codierungseinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) durch Unicode-Codepunkte. Das Iterieren durch Grapheme-Cluster erfordert einige benutzerdefinierte Codezeilen.

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
  - : Erstellt `String`-Objekte. Wenn als Funktion aufgerufen, gibt es primitive Werte vom Typ String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der durch die Verwendung der angegebenen Sequenz von Unicode-Werten erstellt wird.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der durch die Verwendung der angegebenen Sequenz von Codepunkten erstellt wird.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem rohen Template-String erstellt wird.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Gibt die `Länge` des Strings wieder. Nur lesbar.

## Instanz-Methoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codierungseinheit) an der angegebenen `index` zurück. Akzeptiert negative Ganzzahlen, die vom letzten Zeichen des Strings rückwärts zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codierungseinheit) an der angegebenen `index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den UTF-16-Codierungseinheitswert an dem angegebenen `index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative Ganzzahl zurück, die den Codepunktwert des UTF-16-codierten Codepunktes ab der angegebenen `pos` darstellt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufgerufene String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der ersten Vorkommen von `searchValue` oder `-1` zurück, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt ein boolesches Ergebnis zurück, das angibt, ob dieser String [einsame Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieses Strings des letzten Vorkommens von `searchValue` oder `-1` zurück, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Referenzstring `compareString` vorher, nachher oder gleich der angegebenen String in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Verwendet, um den regulären Ausdruck `regexp` mit einem String abzugleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller Übereinstimmungen von `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufgerufenen String-Wertes zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Fügt den aktuellen String von Ende her mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Fügt den aktuellen String vom Anfang her mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count`-mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Verwendet zur Ersetzung von Vorkommen von `searchFor` unter Verwendung `replaceWith`. `searchFor` kann ein String oder regulärer Ausdruck sein, und `replaceWith` kann ein String oder Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Verwendet zur Ersetzung aller Vorkommen von `searchFor` unter Verwendung von `replaceWith`. `searchFor` kann ein String oder regulärer Ausdruck sein, und `replaceWith` kann ein String oder Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Suche nach einer Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufgerufenen String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch Aufteilen des aufgerufenen Strings bei Vorkommen des Teilstrings `sep` gefüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufgerufene String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der ab dem angegebenen Index beginnt und sich über eine bestimmte Anzahl von Zeichen danach erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufgerufenen Strings ab dem (oder zwischen) angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}

  - : Die Zeichen innerhalb eines Strings werden in Kleinbuchstaben konvertiert, während die aktuelle Lokalisierung respektiert wird.

    Für die meisten Sprachen wird dies das gleiche Ergebnis zurückgeben wie {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}

  - : Die Zeichen innerhalb eines Strings werden in Großbuchstaben konvertiert, während die aktuelle Lokalisierung respektiert wird.

    Für die meisten Sprachen wird dies das gleiche Ergebnis zurückgeben wie {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufgerufenen String-Wert in Kleinbuchstaben zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufgerufenen String-Wert in Großbuchstaben zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einsamen Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt sind.
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
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der derzeit verfügbaren HTML-Tags und -Attribute bieten. Viele von ihnen erzeugen heute veraltete oder nicht standardmäßige Markups. Darüber hinaus führen sie String-Verkettungen ohne jegliche Validierung oder Desinfektion aus, was sie zu einem potenziellen Sicherheitsrisiko macht, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

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

Das einzige Escaping, das sie durchführen, besteht darin, `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) mit `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Möglichkeit, Werte in Strings zu konvertieren, als die `toString()`-Methode des Wertes aufzurufen, da die erstere funktioniert, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} angewendet wird. Zum Beispiel:

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
