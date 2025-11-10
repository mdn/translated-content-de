---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`String`**-Objekt wird verwendet, um eine Sequenz von Zeichen darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu speichern, die in Textform dargestellt werden können. Einige der am häufigsten verwendeten Operationen mit Strings sind das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verketten mit den [`+` und `+=` string operators](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf Vorhandensein oder Position von Teilzeichenfolgen mit der Methode {{jsxref("String/indexOf", "indexOf()")}} oder das Extrahieren von Teilzeichenfolgen mit der Methode {{jsxref("String/substring", "substring()")}}.

### Erstellen von Strings

Strings können als Primitive, aus String-Literalen oder als Objekte über den {{jsxref("String/String", "String()")}}-Konstruktor erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitive und String-Objekte teilen viele Verhaltensweisen, haben aber auch wichtige Unterschiede und Besonderheiten. Siehe "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)" unten.

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form gibt ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) an: Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie im [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zugriff auf einzelne Zeichen

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die Methode {{jsxref("String/charAt", "charAt()")}}:

```js
"cat".charAt(1); // gives value "a"
```

Die andere Möglichkeit besteht darin, den String als array-ähnliches Objekt zu behandeln, in dem einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Beim Verwenden der Klammernotation für den Zeichenzugriff wird der Versuch, diese Eigenschaften zu löschen oder ihnen einen Wert zuzuweisen, nicht erfolgreich sein. Die beteiligten Eigenschaften sind weder beschreibbar noch konfigurierbar. (Weitere Informationen finden Sie in {{jsxref("Object.defineProperty()")}}.)

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings fallunempfindlich vergleichen. Eine übliche Methode, um Strings fallunabhängig zu vergleichen, besteht darin, beide vor dem Vergleich in denselben Fall (groß oder klein) umzuwandeln.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, zwischen [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) zu transformieren, ist meistens willkürlich, und keine der beiden ist vollständig robust, wenn man über das lateinische Alphabet hinausgeht. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide durch `toUpperCase()` zu `SS` transformiert, während der türkische Buchstabe `ı` fälschlicherweise als ungleich zu `I` gemeldet wird, es sei denn, man verwendet ausdrücklich [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase).

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine lokalisierte und robuste Lösung zum Testen der fallunabhängigen Gleichheit ist die Verwendung der {{jsxref("Intl.Collator")}} API oder der Methode [`localeCompare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) des Strings — sie teilen dasselbe Interface — mit der Option [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) auf `"accent"` oder `"base"` gesetzt.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die Methode `localeCompare()` ermöglicht den String-Vergleich ähnlich wie `strcmp()` — sie erlaubt das Sortieren von Strings auf lokalisierte Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven String")}}-Werten unterscheidet. (Dies gilt auch für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}}.)

String-Literale (die durch doppelte oder einfache Anführungszeichen dargestellt werden) und Strings, die durch `String`-Aufrufe in einem Nicht-Konstruktor-Kontext (das heißt, aufgerufen ohne das Schlüsselwort {{jsxref("Operators/new", "new")}} zu verwenden) zurückgegeben werden, sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen oder ein Eigenschaftslookup durchgeführt wird, wird JavaScript den String-Primitiv automatisch umwickeln und die Methode auf dem Wrapper-Objekt aufrufen oder den Eigenschaftslookup darauf durchführen.

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

String-Primitiven und `String`-Objekte geben auch unterschiedliche Ergebnisse bei der Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}. Primitive, die an `eval` übergeben werden, werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem das Objekt zurückgegeben wird. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann der Code fehlerhaft werden, wenn er `String`-Objekte gegen eine ursprüngliche String erwartet, obwohl sich Autoren im Allgemeinen nicht um den Unterschied kümmern müssen.

Ein `String`-Objekt kann immer mit der Methode {{jsxref("String/valueOf", "valueOf()")}} in sein primitives Gegenstück umgewandelt werden.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele eingebaute Operationen, die Strings erwarten, konvertieren zuerst ihre Argumente in Strings (was größtenteils der Grund ist, warum `String`-Objekte ähnlich wie String-Primitiven funktionieren). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird in `"undefined"` umgewandelt.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird in `"null"` umgewandelt.
- `true` wird in `"true"` umgewandelt; `false` wird in `"false"` umgewandelt.
- Zahlen werden mit demselben Algorithmus konvertiert wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit demselben Algorithmus konvertiert wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString).
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein primitives umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), indem seine Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()` in dieser Reihenfolge aufgerufen werden. Das resultierende Primitive wird dann in einen String umgewandelt.

Es gibt mehrere Möglichkeiten, in JavaScript fast denselben Effekt zu erzielen.

- [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt genau die oben erklärten String-Konvertierungsschritte für den eingebetteten Ausdruck aus.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String) Funktion: `String(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Die Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` erzwingt seine Operanden in ein _primitives_ anstelle eines _Strings_ und hat, für einige Objekte, völlig unterschiedliche Verhaltensweisen von der normalen String-Konvertierung. Weitere Details finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition).

Abhängig von Ihrem Anwendungsfall möchten Sie möglicherweise `` `${x}` `` verwenden (um das eingebaute Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte ohne Fehlerbehandlung zu verarbeiten), aber Sie sollten nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Grapheme-Cluster

Strings werden grundsätzlich als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. Im UTF-16-Encoding beträgt jede Codeeinheit exakt 16 Bits. Dies bedeutet, dass es maximal 2<sup>16</sup> oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten darstellbar sind. Dieses Zeichen-Set wird als [basic multilingual plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen und kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Das gesamte Unicode-Zeichen-Set ist jedoch weitaus größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogate-Paare_ gespeichert, das sind Paare von 16-Bit-Codeeinheiten, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um Ein-Code-Einheiten-Zeichen zu kodieren. (Genauer gesagt haben führende Surrogats, auch als High-Surrogat-Codeeinheiten bezeichnet, Werte zwischen `0xD800` und `0xDBFF` einschließlich, während nachfolgende Surrogats, auch als Low-Surrogat-Codeeinheiten bezeichnet, Werte zwischen `0xDC00` und `0xDFFF` einschließlich haben.) Jedes Unicode-Zeichen, bestehend aus einem oder zwei UTF-16-Codeeinheiten, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` 1–6 Hexadezimalziffern darstellt.

Ein "einsames Surrogat" ist eine 16-Bit-Codeeinheit, die eine der folgenden Beschreibungen erfüllt:

- Sie liegt im Bereich `0xD800`–`0xDBFF`, einschließlich (d.h. ist ein führendes Surrogat), aber es ist die letzte Codeeinheit im String, oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Sie liegt im Bereich `0xDC00`–`0xDFFF`, einschließlich (d.h. ist ein nachfolgendes Surrogat), aber es ist die erste Codeeinheit im String, oder die vorherige Codeeinheit ist kein führendes Surrogat.

Einsame Surrogate stellen kein Unicode-Zeichen dar. Obwohl die meisten eingebauten JavaScript-Methoden sie korrekt handhaben, da sie alle auf UTF-16-Codeeinheiten basieren, sind einsame Surrogate oft keine gültigen Werte beim Interagieren mit anderen Systemen — zum Beispiel wird [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) einen {{jsxref("URIError")}} für einsame Surrogate auslösen, da die URI-Kodierung UTF-8-Kodierung verwendet, die keine Kodierung für einsame Surrogate hat. Strings, die keine einsamen Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und sind sicher in Funktionen zu verwenden, die nicht mit UTF-16 arbeiten (wie `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder)). Sie können mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}} überprüfen, ob ein String wohlgeformt ist, oder einsame Surrogate mit der Methode {{jsxref("String/toWellFormed", "toWellFormed()")}} bereinigen.

Neben Unicode-Zeichen gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als ein _Grapheme-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die normalerweise durch das \<ZWJ> (`U+200D`) Zeichen verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene der Zeichen Sie iterieren. Zum Beispiel wird [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten aufteilen und dabei Surrogate-Paare trennen. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Durch Grapheme-Cluster zu iterieren erfordert etwas eigenen Code.

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

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind Eigenheitenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "Länge")}}
  - : Gibt die `length` des Strings wider. Nur lesbar.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück. Akzeptiert negative ganze Zahlen, die vom letzten String-Zeichen rückwärts zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den UTF-16-Codeeinheitenwert am angegebenen `index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nichtnegative Ganzzahl zurück, die den Codepunktwert des UTF-16-kodierten Codepunkts am angegebenen `pos` darstellt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen der Zeichenfolge `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der ersten Vorkommen von `searchValue` zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieser String [einsame Surrogates](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der letzten Vorkommen von `searchValue` zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob die Referenzzeichenkette `compareString` vor, nach oder gleich der gegebenen Zeichenfolge in Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um regulären Ausdruck `regexp` mit einem String zu vergleichen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller `regexp`-Übereinstimmungen zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufrufenden String-Werts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String von Ende mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String von Anfang an mit einem gegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, das `count`-mal wiederholt wird.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` durch `replaceWith` zu ersetzen. `searchFor` kann ein String oder regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` durch `replaceWith` zu ersetzen. `searchFor` kann ein String oder regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einem Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch Aufteilen des aufrufenden Strings bei Vorkommen des Trennzeichens `sep` gefüllt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen der Zeichenfolge `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, beginnend am angegebenen Index und erstreckt sich über eine gegebene Anzahl von Zeichen danach.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der die Zeichen des aufrufenden Strings von (oder zwischen) dem angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}
  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Gebietsschemata in Kleinbuchstaben konvertiert.

    Für die meisten Sprachen gibt dies dasselbe wie {{jsxref("String/toLowerCase", "toLowerCase()")}} zurück.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
  - : Die Zeichen innerhalb eines Strings werden unter Berücksichtigung der aktuellen Gebietsschemata in Großbuchstaben konvertiert.

    Für die meisten Sprachen gibt dies dasselbe wie {{jsxref("String/toUpperCase", "toUpperCase()")}} zurück.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufrufenden String-Wert in Kleinbuchstaben konvertiert zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das spezifizierte Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufrufenden String-Wert in Großbuchstaben konvertiert zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [einsamen Surrogates](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt sind.
- {{jsxref("String.prototype.trim()")}}
  - : Entfernt Leerzeichen vom Anfang und Ende des Strings.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Entfernt Leerzeichen vom Ende des Strings.
- {{jsxref("String.prototype.trimStart()")}}
  - : Entfernt Leerzeichen vom Anfang des Strings.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Werts iteriert und bei jedem Codepunkt einen String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur eine Teilmenge der derzeit verfügbaren HTML-Tags und -Attribute bieten. Viele von ihnen erzeugen heute veraltetes oder nicht standardmäßiges Markup. Darüber hinaus führen sie String-Verkettungen ohne Validierung oder Bereinigung durch, was sie zu einer potenziellen Sicherheitsgefahr macht, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement) stattdessen.

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

Beachten Sie, dass diese Methoden nicht prüfen, ob der String selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erstellen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escape-Verfahren, das sie durchführen, besteht darin, `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) durch `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Methode zur Konvertierung von Werten in Strings als der Aufruf der `toString()`-Methode des Werts, da die erstgenannte Methode auch funktioniert, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} angewendet wird. Zum Beispiel:

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

- [Numbers and strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("RegExp")}}
