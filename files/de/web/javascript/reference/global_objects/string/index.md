---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`String`**-Objekt wird verwendet, um eine Zeichenfolge darzustellen und zu manipulieren.

## Beschreibung

Strings sind nützlich, um Daten zu speichern, die in Textform dargestellt werden können. Zu den am häufigsten verwendeten Operationen mit Strings gehören das Überprüfen ihrer {{jsxref("String/length", "Länge")}}, das Erstellen und Verketten mit den [`+` und `+=` String-Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Überprüfen auf das Vorhandensein oder die Position von Teilstrings mit der {{jsxref("String/indexOf", "indexOf()")}}-Methode oder das Extrahieren von Teilstrings mit der {{jsxref("String/substring", "substring()")}}-Methode.

### Erstellen von Strings

Strings können als Primitiven, aus String-Literalen oder als Objekte mit dem {{jsxref("String/String", "String()")}}-Konstruktor erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

String-Primitiven und String-Objekte teilen viele Verhaltensweisen, weisen jedoch andere wichtige Unterschiede und Vorbehalte auf. Siehe unten "[String-Primitiven und String-Objekte](#string-primitiven_und_string-objekte)".

String-Literale können mit einfachen oder doppelten Anführungszeichen angegeben werden, die identisch behandelt werden, oder mit dem Backtick-Zeichen <kbd>`</kbd>. Diese letzte Form bezeichnet ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals): Mit dieser Form können Sie Ausdrücke interpolieren. Weitere Informationen zur Syntax von String-Literalen finden Sie im [lexikalischen Grammatiker](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Zeichenzugriff

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die Methode {{jsxref("String/charAt", "charAt()")}}:

```js
"cat".charAt(1); // gibt den Wert "a"
```

Die andere Möglichkeit besteht darin, den String als array-ähnliches Objekt zu behandeln, bei dem einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gibt den Wert "a"
```

Bei der Verwendung der Klammernotation für den Zeichenzugriff wird versucht, diese Eigenschaften zu löschen oder ihnen einen Wert zuzuweisen, was nicht erfolgreich sein wird. Die beteiligten Eigenschaften sind weder beschreibbar noch konfigurierbar. (Weitere Informationen finden Sie unter {{jsxref("Object.defineProperty()")}}.)

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), Strings zwischen Groß- und Kleinschreibung vergleichen. Eine übliche Methode zum case-insensitiven Vergleich von Strings besteht darin, beide in denselben Fall (groß oder klein) zu konvertieren, bevor man sie vergleicht.

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Die Wahl, ob durch [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) transformiert wird, ist weitgehend willkürlich, und keine der beiden ist vollständig robust, wenn über das lateinische Alphabet hinaus erweitert wird. Zum Beispiel werden der deutsche Kleinbuchstabe `ß` und `ss` beide durch `toUpperCase()` in `SS` umgewandelt, während der türkische Buchstabe `ı` fälschlicherweise durch `toLowerCase()` ungleich zu `I` gemeldet würde, es sei denn, es wird spezifisch [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) verwendet.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; sollte false sein
areEqualInLowerCase("ı", "I"); // false; sollte true sein
```

Eine lokalisierte und robuste Lösung zum Testen von case-insensitiver Gleichheit ist die Verwendung der {{jsxref("Intl.Collator")}} API oder der [`localeCompare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)-Methode des Strings – sie teilen sich die gleiche Schnittstelle – mit der [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity)-Option, die auf `"accent"` oder `"base"` gesetzt ist.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die `localeCompare()`-Methode ermöglicht String-Vergleiche in ähnlicher Weise wie `strcmp()` – sie ermöglicht das Sortieren von Strings auf eine lokalisierte Weise.

### String-Primitiven und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven Strings")}} unterscheidet. (Das Gleiche gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Zahlen")}}.)

String-Literale (durch doppelte oder einfache Anführungszeichen gekennzeichnet) und Strings, die aus `String`-Aufrufen in einem nicht-konstruktiven Kontext zurückgegeben werden (d. h. ohne Verwendung des {{jsxref("Operators/new", "new")}}-Schlüsselworts aufgerufen), sind primitive Strings. In Kontexten, in denen eine Methode auf einem primitiven String aufgerufen werden soll oder eine Eigenschaftsabfrage stattfindet, umschließt JavaScript automatisch den String-Primitiv und ruft die Methode auf oder führt die Eigenschaftsabfrage am Wrapper-Objekt durch.

```js
const strPrim = "foo"; // Ein Literal ist ein String-Primitiv
const strPrim2 = String(1); // In das String-Primitiv "1" umgewandelt
const strPrim3 = String(true); // In das String-Primitiv "true" umgewandelt
const strObj = new String(strPrim); // String mit new gibt ein String-Wrapper-Objekt zurück.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
```

> [!WARNING]
> Sie sollten selten `String` als Konstruktor verwenden.

String-Primitiven und `String`-Objekte geben auch unterschiedliche Ergebnisse beim Verwenden von {{jsxref("Global_Objects/eval", "eval()")}}. An `eval` übergebene Primitiven werden als Quellcode behandelt; `String`-Objekte werden wie alle anderen Objekte behandelt, indem sie das Objekt zurückgeben. Zum Beispiel:

```js
const s1 = "2 + 2"; // erzeugt ein String-Primitiv
const s2 = new String("2 + 2"); // erzeugt ein String-Objekt
console.log(eval(s1)); // gibt die Zahl 4 zurück
console.log(eval(s2)); // gibt den String "2 + 2" zurück
```

Aus diesen Gründen kann der Code brechen, wenn er auf `String`-Objekte stößt, wenn er stattdessen ein primitives String erwartet, obwohl Autoren sich im Allgemeinen nicht um die Unterscheidung kümmern müssen.

Ein `String`-Objekt kann immer mit der {{jsxref("String/valueOf", "valueOf()")}}-Methode in sein primitives Gegenstück umgewandelt werden.

```js
console.log(eval(s2.valueOf())); // gibt die Zahl 4 zurück
```

### String-Umwandlung

Viele eingebaute Operationen, die Strings erwarten, zwingen zuerst ihre Argumente zu Strings (was weitgehend der Grund ist, warum `String`-Objekte ähnlich wie String-Primitiven verhalten). [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) kann wie folgt zusammengefasst werden:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) konvertiert.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit dem gleichen Algorithmus wie [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) konvertiert.
- [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) werfen einen {{jsxref("TypeError")}}.
- Objekte werden zuerst [in ein Primärwert umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), indem seine [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()`, und `valueOf()`-Methoden in dieser Reihenfolge aufgerufen werden. Der resultierende primitive Wert wird dann in einen String konvertiert.

Es gibt mehrere Möglichkeiten, nahezu den gleichen Effekt in JavaScript zu erzielen.

- [Template literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` macht genau die oben beschriebenen String-Umwandlungsschritte für den eingebetteten Ausdruck.
- Die [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String)-Funktion: `String(x)` verwendet den gleichen Algorithmus, um `x` zu konvertieren, außer dass [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) keinen {{jsxref("TypeError")}} werfen, sondern `"Symbol(description)"` zurückgeben, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwendung des [`+` Operators](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` zwingt seinen Operanden zu einem _primitiven Wert_, anstatt zu einem _String_, und hat bei einigen Objekten völlig unterschiedliche Verhaltensweisen als die normale String-Umwandlung. Siehe seine [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition) für weitere Details.

Je nach Anwendungsfall möchten Sie vielleicht `` `${x}` `` (um eingebautes Verhalten nachzuahmen) oder `String(x)` (um Symbolwerte zu handhaben, ohne einen Fehler zu werfen) verwenden, aber Sie sollten nicht `"" + x` verwenden.

### UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster

Strings werden grundlegend als Sequenzen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. In der UTF-16-Kodierung ist jede Codeeinheit exakt 16 Bit lang. Dies bedeutet, dass es maximal 2<sup>16</sup> oder 65536 mögliche Zeichen gibt, die als einzelne UTF-16-Codeeinheiten dargestellt werden können. Dieses Zeichenset wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet und umfasst die häufigsten Zeichen wie die lateinischen, griechischen, kyrillischen Alphabete sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String mit `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Das gesamte Unicode-Zeichenset ist jedoch viel, viel größer als 65536. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert, die Paare von 16-Bit-Codeeinheiten sind, die ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paares zwischen `0xD800` und `0xDFFF` liegen, und diese Codeeinheiten werden nicht verwendet, um Zeichen mit nur einer Codeeinheit zu kodieren. (Genauer gesagt haben führende Surrogates, auch High-Surrogat-Codeeinheiten genannt, Werte zwischen `0xD800` und `0xDBFF` inklusive, während nachgestellte Surrogates, auch Low-Surrogat-Codeeinheiten genannt, Werte zwischen `0xDC00` und `0xDFFF` inklusive haben.) Jedes Unicode-Zeichen, das aus ein oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codepunkt_ bezeichnet. Jeder Unicode-Codepunkt kann in einem String mit `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` für 1–6 Hexadezimalziffern steht.

Ein "alleinstehendes Surrogat" ist eine 16-Bit-Codeeinheit, die eine der unten beschriebenen Bedingungen erfüllt:

- Sie liegt im Bereich `0xD800`–`0xDBFF` inklusive (d. h. ist ein führendes Surrogat), ist jedoch die letzte Codeeinheit im String oder die nächste Codeeinheit ist kein nachgestelltes Surrogat.
- Sie liegt im Bereich `0xDC00`–`0xDFFF` inklusive (d. h. ist ein nachgestelltes Surrogat), ist jedoch die erste Codeeinheit im String oder die vorherige Codeeinheit ist kein führendes Surrogat.

Alleinstehende Surrogate stellen keine Unicode-Zeichen dar. Obwohl die meisten JavaScript-Bibliotheksmethoden sie korrekt behandeln, da sie alle auf UTF-16-Codeeinheiten basieren, sind alleinstehende Surrogate oft keine gültigen Werte, wenn sie mit anderen Systemen interagieren – zum Beispiel wirft [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) einen {{jsxref("URIError")}} für alleinstehende Surrogate, da URI-Kodierung UTF-8-Kodierung verwendet, die keine Kodierung für alleinstehende Surrogate hat. Strings, die keine alleinstehenden Surrogate enthalten, werden als _wohlgeformte_ Strings bezeichnet und können sicher mit Funktionen verwendet werden, die nicht mit UTF-16 arbeiten (wie `encodeURI()` oder {{domxref("TextEncoder")}}). Sie können mit der {{jsxref("String/isWellFormed", "isWellFormed()")}}-Methode überprüfen, ob ein String wohlgeformt ist, oder alleinstehende Surrogate mit der {{jsxref("String/toWellFormed", "toWellFormed()")}}-Methode bereinigen.

Über Unicode-Zeichen hinaus gibt es bestimmte Sequenzen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten, bekannt als _Graphem-Cluster_. Der häufigste Fall sind Emojis: Viele Emojis, die eine Reihe von Variationen haben, werden tatsächlich durch mehrere Emojis gebildet, die normalerweise durch das \<ZWJ> (`U+200D`) Zeichen verbunden sind.

Sie müssen vorsichtig sein, auf welcher Ebene von Zeichen Sie iterieren. Zum Beispiel teilt [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) nach UTF-16-Codeeinheiten und trennt Surrogatpaare. String-Indizes beziehen sich auch auf den Index jeder UTF-16-Codeeinheit. Andererseits iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) nach Unicode-Codepunkten. Das Iterieren durch Graphem-Cluster erfordert einige benutzerdefinierte Code.

```js
"😄".split(""); // ['\ud83d', '\ude04']; zerlegt in zwei alleinstehende Surrogate

// "Zeigefinger zeigt nach rechts: Dunkler Hauttyp"
[..."👉🏿"]; // ['👉', '🏿']
// zerlegt in das grundlegende "Zeigefinger zeigt nach rechts" Emoji und
// das "Dunkler Hauttyp" Emoji

// "Familie: Mann, Junge"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// zerlegt in das "Mann" und "Junge" Emoji, verbunden durch ein ZWJ

// Die Flagge der Vereinten Nationen
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// zerlegt in zwei "Regionsindikator"-Buchstaben "U" und "N".
// Alle Flaggen-Emojis werden durch das Verbinden von zwei Regionsindikator-Buchstaben gebildet
```

## Konstruktor

- {{jsxref("String/String", "String()")}}
  - : Erstellt `String`-Objekte. Wenn es als Funktion aufgerufen wird, gibt es primitive Werte des Typs String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der durch die Verwendung der angegebenen Unicode-Wertsequenz erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der durch die Verwendung der angegebenen Codepunktsequenz erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem rohen Template-String erstellt wurde.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen geteilt.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `String`-Instanzen ist der Anfangswert der {{jsxref("String/String", "String")}}-Konstruktor.

Diese Eigenschaften sind eigene Eigenschaften jeder `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Spiegelt die `Länge` des Strings wider. Schreibgeschützt.

## Instanz-Methoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück. Akzeptiert negative ganze Zahlen, die vom letzten String-Zeichen zurückzählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `Index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die den UTF-16-Codeeinheitswert am gegebenen `Index` darstellt.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die den Codepunktwert des UTF-16-kodierten Codepunkts am angegebenen `pos` darstellt.
- {{jsxref("String.prototype.concat()")}}
  - : Kombiniert den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Bestimmt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Bestimmt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der ersten Vorkommen von `searchValue` zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen Boolean zurück, der angibt, ob dieser String [alleinstehende Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index innerhalb dieses Strings der letzten Vorkommen von `searchValue` zurück oder `-1`, wenn nicht gefunden.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Referenzstring `compareString` vor, nach oder gleichwertig zum gegebenen String in der Sortierreihenfolge kommt.
- {{jsxref("String.prototype.match()")}}
  - : Wird verwendet, um den regulären Ausdruck `regexp` gegen einen String zu matchen.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator aller Treffer des `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt die Unicode-Normalisierungsform des aufgerufenen String-Werts zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String am Ende mit einem gegebenen String und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String am Anfang mit einem gegebenen String und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den Elementen des Objekts besteht, die `count` Mal wiederholt werden.
- {{jsxref("String.prototype.replace()")}}
  - : Wird verwendet, um Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Wird verwendet, um alle Vorkommen von `searchFor` mit `replaceWith` zu ersetzen. `searchFor` kann ein String oder ein regulärer Ausdruck sein, und `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einem Übereinstimmung zwischen einem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das durch das Aufteilen des aufrufenden Strings bei Vorkommen des Teilstrings `sep` gefüllt ist.
- {{jsxref("String.prototype.startsWith()")}}
  - : Bestimmt, ob der aufrufende String mit den Zeichen von String `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Abschnitt des Strings zurück, der beim angegebenen Index beginnt und sich über eine bestimmte Anzahl von Zeichen erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufrufenden Strings von (oder zwischen) dem angegebenen Index (oder Indizes) enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}
  - : Die Zeichen in einem String werden in Kleinbuchstaben umgewandelt, während die aktuelle Lokalisierung berücksichtigt wird.

    Für die meisten Sprachen wird dadurch das gleiche zurückgegeben wie bei {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
  - : Die Zeichen in einem String werden in Großbuchstaben umgewandelt, während die aktuelle Lokalisierung berücksichtigt wird.

    Für die meisten Sprachen wird dadurch das gleiche zurückgegeben wie bei {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den aufgerufenen String-Wert in Kleinbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt repräsentiert. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den aufgerufenen String-Wert in Großbuchstaben umgewandelt zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, bei dem alle [alleinstehenden Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt sind.
- {{jsxref("String.prototype.trim()")}}
  - : Schneidet Leerzeichen vom Anfang und Ende des Strings ab.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Schneidet Leerzeichen vom Ende des Strings ab.
- {{jsxref("String.prototype.trimStart()")}}
  - : Schneidet Leerzeichen vom Anfang des Strings ab.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepunkte eines String-Werts iteriert und jeden Codepunkt als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Sie sind von begrenztem Nutzen, da sie auf einem sehr alten HTML-Standard basieren und nur einen Teil der aktuell verfügbaren HTML-Tags und Attribute bieten. Viele von ihnen erstellen heute veraltetes oder nicht standardmäßiges Markup. Darüber hinaus führen sie eine einfache String-Verkettung ohne jegliche Validierung oder Sanierung durch, wodurch sie ein potenzielles Sicherheitsrisiko darstellen, wenn sie direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt werden. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

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

Beachten Sie, dass diese Methoden nicht überprüfen, ob der String selbst HTML-Tags enthält, sodass es möglich ist, ungültiges HTML zu erstellen:

```js
"</b>".bold(); // <b></b></b>
```

Das einzige Escaping, das sie durchführen, besteht darin, `"` im Attributwert (für {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) durch `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die `String()`-Funktion ist eine zuverlässigere Methode, um Werte in Strings umzuwandeln, als die `toString()`-Methode des Werts aufzurufen, da die erstere funktioniert, wenn sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} angewendet wird. Zum Beispiel:

```js
// Sie können nicht auf Eigenschaften von null oder undefined zugreifen

const nullVar = null;
nullVar.toString(); // TypeError: Eigenschaften von null können nicht gelesen werden
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: Eigenschaften von undefined können nicht gelesen werden
String(undefinedVar); // "undefined"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anleitung zur Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
