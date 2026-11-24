---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Das **`String`**-Objekt wird verwendet, um eine Folge von Zeichen darzustellen und zu bearbeiten.

## Beschreibung

Strings eignen sich für Daten, die sich als Text darstellen lassen. Zu den häufigsten Operationen mit Strings gehören das Abfragen ihrer {{jsxref("String/length", "length")}}, das Zusammensetzen und Verketten mit den [String-Operatoren `+` und `+=`](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators), das Suchen nach Teilstrings und deren Position mit der Methode {{jsxref("String/indexOf", "indexOf()")}} sowie das Extrahieren von Teilstrings mit der Methode {{jsxref("String/substring", "substring()")}}.

### Strings erstellen

Strings können als primitive Werte aus String-Literalen oder als Objekte mit dem Konstruktor {{jsxref("String/String", "String()")}} erstellt werden:

```js-nolint
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

```js
const string4 = new String("A String object");
```

Primitive String-Werte und String-Objekte verhalten sich in vielerlei Hinsicht gleich, weisen aber auch wichtige Unterschiede und Besonderheiten auf. Weitere Informationen finden Sie unten unter „[Primitive String-Werte und String-Objekte](#primitive_string-werte_und_string-objekte)“.

String-Literale können in einfache oder doppelte Anführungszeichen eingeschlossen werden; beide Varianten werden gleich behandelt. Alternativ können Sie das Backtick-Zeichen <kbd>`</kbd> verwenden. Diese letzte Form bezeichnet ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals), in das sich Ausdrücke einfügen lassen. Weitere Informationen zur Syntax von String-Literalen finden Sie unter [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals).

### Auf Zeichen zugreifen

Es gibt zwei Möglichkeiten, auf ein einzelnes Zeichen in einem String zuzugreifen. Die erste ist die Methode {{jsxref("String/charAt", "charAt()")}}:

```js
"cat".charAt(1); // gives value "a"
```

Alternativ können Sie den String wie ein Array-ähnliches Objekt behandeln, bei dem einzelne Zeichen einem numerischen Index entsprechen:

```js
"cat"[1]; // gives value "a"
```

Wenn Sie mit der Klammernotation auf Zeichen zugreifen, können Sie den entsprechenden Eigenschaften weder einen Wert zuweisen noch sie löschen. Diese Eigenschaften sind weder beschreibbar noch konfigurierbar. (Weitere Informationen finden Sie unter {{jsxref("Object.defineProperty()")}}.)

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

Beachten Sie, dass alle Vergleichsoperatoren, einschließlich [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) und [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), bei Strings zwischen Groß- und Kleinschreibung unterscheiden. Eine gängige Möglichkeit für einen Vergleich ohne Berücksichtigung der Groß- und Kleinschreibung besteht darin, beide Strings vor dem Vergleich in dieselbe Schreibweise umzuwandeln (Groß- oder Kleinbuchstaben).

```js
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
```

Ob Sie dafür [`toUpperCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) oder [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) verwenden, ist weitgehend beliebig. Keine der beiden Methoden ist jedoch für Zeichen außerhalb des lateinischen Alphabets vollständig zuverlässig. Beispielsweise wandelt `toUpperCase()` sowohl den deutschen Kleinbuchstaben `ß` als auch `ss` in `SS` um. Bei Verwendung von `toLowerCase()` würde dagegen der türkische Buchstabe `ı` fälschlicherweise als ungleich `I` gelten, sofern nicht ausdrücklich [`toLocaleLowerCase("tr")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase) verwendet wird.

```js
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true
```

Eine robuste, gebietsschemabewusste Lösung zum Prüfen der Gleichheit ohne Berücksichtigung der Groß- und Kleinschreibung ist die API {{jsxref("Intl.Collator")}} oder die String-Methode [`localeCompare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare). Beide verwenden dieselbe Schnittstelle. Setzen Sie dabei die Option [`sensitivity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#sensitivity) auf `"accent"` oder `"base"`.

```js
const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

areEqual("ß", "ss", "de"); // false
areEqual("ı", "I", "tr"); // true
```

Die Methode `localeCompare()` ermöglicht einen String-Vergleich ähnlich wie `strcmp()` und erlaubt es, Strings gebietsschemabewusst zu sortieren.

### Primitive String-Werte und String-Objekte

Beachten Sie, dass JavaScript zwischen `String`-Objekten und {{Glossary("Primitive", "primitiven String-Werten")}} unterscheidet. (Dasselbe gilt für {{jsxref("Boolean")}} und {{jsxref("Number", "Numbers")}}.)

String-Literale (in doppelten oder einfachen Anführungszeichen) und Strings, die von einem `String`-Aufruf ohne Konstruktorfunktion zurückgegeben werden (also ohne das Schlüsselwort {{jsxref("new")}}), sind primitive String-Werte. Wenn eine Methode auf einem primitiven String-Wert aufgerufen oder eine Eigenschaft abgefragt wird, umhüllt JavaScript den primitiven Wert automatisch und führt den Methodenaufruf beziehungsweise die Eigenschaftsabfrage stattdessen auf dem umhüllenden Objekt aus.

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
> Sie sollten `String` nur selten als Konstruktor verwenden.

Primitive String-Werte und `String`-Objekte liefern auch bei Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} unterschiedliche Ergebnisse. Primitive Werte, die an `eval` übergeben werden, werden als Quellcode behandelt. `String`-Objekte werden wie andere Objekte behandelt: Das Objekt wird zurückgegeben. Zum Beispiel:

```js
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
```

Aus diesen Gründen kann Code fehlschlagen, wenn er ein `String`-Objekt erhält, obwohl er einen primitiven String-Wert erwartet. Im Allgemeinen müssen Sie sich um diesen Unterschied jedoch keine Gedanken machen.

Ein `String`-Objekt lässt sich mit der Methode {{jsxref("String/valueOf", "valueOf()")}} jederzeit in den entsprechenden primitiven Wert umwandeln.

```js
console.log(eval(s2.valueOf())); // returns the number 4
```

### String-Konvertierung

Viele integrierte Operationen, die Strings erwarten, wandeln ihre Argumente zunächst in Strings um. Das ist ein wesentlicher Grund dafür, dass sich `String`-Objekte ähnlich wie primitive String-Werte verhalten. [Diese Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tostring) lässt sich wie folgt zusammenfassen:

- Strings werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) wird zu `"undefined"`.
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) wird zu `"null"`.
- `true` wird zu `"true"`; `false` wird zu `"false"`.
- Zahlen werden mit demselben Algorithmus wie bei [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) umgewandelt.
- [BigInts](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) werden mit demselben Algorithmus wie bei [`toString(10)`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) umgewandelt.
- [Symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lösen einen {{jsxref("TypeError")}} aus.
- Objekte werden zunächst [in einen primitiven Wert umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Dazu werden ihre Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"string"` als Hinweis), `toString()` und `valueOf()` in dieser Reihenfolge aufgerufen. Anschließend wird der resultierende primitive Wert in einen String umgewandelt.

In JavaScript gibt es mehrere Möglichkeiten, nahezu dasselbe Ergebnis zu erzielen:

- [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals): `` `${x}` `` führt für den eingebetteten Ausdruck genau die oben beschriebenen Schritte der String-Konvertierung aus.
- Die Funktion [`String()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/String): `String(x)` verwendet denselben Algorithmus, um `x` umzuwandeln. [Symbols](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lösen dabei jedoch keinen {{jsxref("TypeError")}} aus, sondern ergeben `"Symbol(description)"`, wobei `description` die [Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description) des Symbols ist.
- Verwendung des [Operators `+`](/de/docs/Web/JavaScript/Reference/Operators/Addition): `"" + x` wandelt seinen Operanden in einen _primitiven Wert_ statt in einen _String_ um und verhält sich bei manchen Objekten völlig anders als die normale String-Konvertierung. Weitere Informationen finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Addition).

Je nach Anwendungsfall können Sie `` `${x}` `` verwenden (um das Verhalten integrierter Operationen nachzubilden) oder `String(x)` (um Symbol-Werte ohne Fehler zu verarbeiten). `"" + x` sollten Sie hingegen nicht verwenden.

### UTF-16-Zeichen, Unicode-Codepoints und Graphemcluster

Strings werden grundsätzlich als Folgen von [UTF-16-Codeeinheiten](https://en.wikipedia.org/wiki/UTF-16) dargestellt. Bei der UTF-16-Kodierung ist jede Codeeinheit genau 16 Bit lang. Das bedeutet, dass sich höchstens 2<sup>16</sup>, also 65536 verschiedene Zeichen, durch jeweils eine einzelne UTF-16-Codeeinheit darstellen lassen. Dieser Zeichenbereich wird als [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) bezeichnet. Er umfasst die gebräuchlichsten Zeichen, etwa die des lateinischen, griechischen und kyrillischen Alphabets sowie viele ostasiatische Zeichen. Jede Codeeinheit kann in einem String durch `\u` gefolgt von genau vier Hexadezimalziffern geschrieben werden.

Der gesamte Unicode-Zeichenbereich ist jedoch sehr viel größer als 65536 Zeichen. Die zusätzlichen Zeichen werden in UTF-16 als _Surrogatpaare_ gespeichert: Paare aus zwei 16-Bit-Codeeinheiten, die gemeinsam ein einzelnes Zeichen darstellen. Um Mehrdeutigkeiten zu vermeiden, müssen die beiden Teile des Paars im Bereich von `0xD800` bis `0xDFFF` liegen; diese Codeeinheiten werden nicht zur Kodierung von Zeichen verwendet, die aus nur einer Codeeinheit bestehen. (Genauer gesagt liegen führende Surrogate, auch High-Surrogate-Codeeinheiten genannt, einschließlich der Grenzwerte zwischen `0xD800` und `0xDBFF`. Nachfolgende Surrogate, auch Low-Surrogate-Codeeinheiten genannt, liegen einschließlich der Grenzwerte zwischen `0xDC00` und `0xDFFF`.) Jedes Unicode-Zeichen, das aus einer oder zwei UTF-16-Codeeinheiten besteht, wird auch als _Unicode-Codepoint_ bezeichnet. Jeder Unicode-Codepoint kann in einem String als `\u{xxxxxx}` geschrieben werden, wobei `xxxxxx` für 1 bis 6 Hexadezimalziffern steht.

Ein „isoliertes Surrogat“ ist eine 16-Bit-Codeeinheit, auf die eine der folgenden Beschreibungen zutrifft:

- Sie liegt einschließlich der Grenzwerte im Bereich `0xD800`–`0xDBFF` (ist also ein führendes Surrogat), steht aber am Ende des Strings oder die nächste Codeeinheit ist kein nachfolgendes Surrogat.
- Sie liegt einschließlich der Grenzwerte im Bereich `0xDC00`–`0xDFFF` (ist also ein nachfolgendes Surrogat), steht aber am Anfang des Strings oder die vorherige Codeeinheit ist kein führendes Surrogat.

Isolierte Surrogate stellen kein Unicode-Zeichen dar. Obwohl die meisten integrierten JavaScript-Methoden sie korrekt verarbeiten, weil sie auf UTF-16-Codeeinheiten basieren, sind isolierte Surrogate bei der Interaktion mit anderen Systemen häufig keine gültigen Werte. Beispielsweise löst [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) bei isolierten Surrogaten einen {{jsxref("URIError")}} aus, da die URI-Kodierung UTF-8 verwendet und UTF-8 keine Kodierung für isolierte Surrogate bietet. Strings ohne isolierte Surrogate heißen _wohlgeformte_ Strings. Sie können sicher mit Funktionen verwendet werden, die nicht mit UTF-16 arbeiten, etwa `encodeURI()` oder [`TextEncoder`](/de/docs/Web/API/TextEncoder). Mit der Methode {{jsxref("String/isWellFormed", "isWellFormed()")}} können Sie prüfen, ob ein String wohlgeformt ist; mit {{jsxref("String/toWellFormed", "toWellFormed()")}} können Sie isolierte Surrogate ersetzen.

Über einzelne Unicode-Zeichen hinaus gibt es bestimmte Folgen von Unicode-Zeichen, die als eine visuelle Einheit behandelt werden sollten. Sie werden _Graphemcluster_ genannt. Das häufigste Beispiel sind Emojis: Viele Emojis mit unterschiedlichen Varianten bestehen tatsächlich aus mehreren Emojis, die üblicherweise durch das Zeichen \<ZWJ> (`U+200D`) verbunden sind.

Achten Sie darauf, auf welcher Zeichenebene Sie iterieren. Beispielsweise teilt [`split("")`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) einen String nach UTF-16-Codeeinheiten auf und trennt dabei Surrogatpaare. Auch String-Indizes beziehen sich jeweils auf eine UTF-16-Codeeinheit. Dagegen iteriert [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) über Unicode-Codepoints. Für die Iteration über Graphemcluster ist eigener Code erforderlich.

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

### Das String.prototype-Objekt

Aus historischen Gründen ist `String.prototype` ein `String`-Objekt, das den Wert `""` umhüllt. Seine Eigenschaft {{jsxref("String/length", "length")}} hat den Wert `0`.

```js
console.log(String.prototype.valueOf()); // "" (expected to throw error)
console.log(String(String.prototype)); // "" (expected [object Object] for plain objects)
console.log(String.prototype.length); // 0
```

## Konstruktor

- {{jsxref("String/String", "String()")}}
  - : Erstellt `String`-Objekte. Wird der Konstruktor als Funktion aufgerufen, gibt er primitive Werte vom Typ String zurück.

## Statische Methoden

- {{jsxref("String.fromCharCode()")}}
  - : Gibt einen String zurück, der aus der angegebenen Folge von Unicode-Werten erstellt wurde.
- {{jsxref("String.fromCodePoint()")}}
  - : Gibt einen String zurück, der aus der angegebenen Folge von Codepoints erstellt wurde.
- {{jsxref("String.raw()")}}
  - : Gibt einen String zurück, der aus einem unverarbeiteten Template-String erstellt wurde.

## Instanzeigenschaften

Diese Eigenschaften sind auf `String.prototype` definiert und werden von allen `String`-Instanzen gemeinsam verwendet.

- {{jsxref("Object/constructor", "String.prototype.constructor")}}
  - : Die Konstruktorfunktion, mit der das Instanzobjekt erstellt wurde. Bei `String`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("String/String", "String")}}.

Die folgenden Eigenschaften gehören jeweils einer einzelnen `String`-Instanz.

- {{jsxref("String/length", "length")}}
  - : Gibt die `length` des Strings an. Schreibgeschützt.

## Instanzmethoden

- {{jsxref("String.prototype.at()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück. Akzeptiert negative Ganzzahlen, die vom letzten Zeichen des Strings aus rückwärts zählen.
- {{jsxref("String.prototype.charAt()")}}
  - : Gibt das Zeichen (genau eine UTF-16-Codeeinheit) am angegebenen `index` zurück.
- {{jsxref("String.prototype.charCodeAt()")}}
  - : Gibt eine Zahl zurück, die dem Wert der UTF-16-Codeeinheit am angegebenen `index` entspricht.
- {{jsxref("String.prototype.codePointAt()")}}
  - : Gibt eine nicht negative Ganzzahl vom Typ Number zurück, die dem Codepoint-Wert des UTF-16-kodierten Codepoints entspricht, der an der angegebenen Position `pos` beginnt.
- {{jsxref("String.prototype.concat()")}}
  - : Verknüpft den Text von zwei (oder mehr) Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.endsWith()")}}
  - : Ermittelt, ob ein String mit den Zeichen des Strings `searchString` endet.
- {{jsxref("String.prototype.includes()")}}
  - : Ermittelt, ob der aufrufende String `searchString` enthält.
- {{jsxref("String.prototype.indexOf()")}}
  - : Gibt den Index des ersten Vorkommens von `searchValue` in diesem String zurück oder `-1`, wenn der Wert nicht gefunden wird.
- {{jsxref("String.prototype.isWellFormed()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieser String [isolierte Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) enthält.
- {{jsxref("String.prototype.lastIndexOf()")}}
  - : Gibt den Index des letzten Vorkommens von `searchValue` in diesem String zurück oder `-1`, wenn der Wert nicht gefunden wird.
- {{jsxref("String.prototype.localeCompare()")}}
  - : Gibt eine Zahl zurück, die angibt, ob der Vergleichsstring `compareString` in der Sortierreihenfolge vor oder nach dem angegebenen String steht oder ihm gleichwertig ist.
- {{jsxref("String.prototype.match()")}}
  - : Gleicht den regulären Ausdruck `regexp` mit einem String ab.
- {{jsxref("String.prototype.matchAll()")}}
  - : Gibt einen Iterator über alle Übereinstimmungen mit `regexp` zurück.
- {{jsxref("String.prototype.normalize()")}}
  - : Gibt den Wert des aufrufenden Strings in einer Unicode-Normalisierungsform zurück.
- {{jsxref("String.prototype.padEnd()")}}
  - : Füllt den aktuellen String am Ende mit einem angegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.padStart()")}}
  - : Füllt den aktuellen String am Anfang mit einem angegebenen String auf und gibt einen neuen String der Länge `targetLength` zurück.
- {{jsxref("String.prototype.repeat()")}}
  - : Gibt einen String zurück, der aus den `count`-mal wiederholten Elementen des Objekts besteht.
- {{jsxref("String.prototype.replace()")}}
  - : Ersetzt Vorkommen von `searchFor` durch `replaceWith`. `searchFor` kann ein String oder ein regulärer Ausdruck sein; `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.replaceAll()")}}
  - : Ersetzt alle Vorkommen von `searchFor` durch `replaceWith`. `searchFor` kann ein String oder ein regulärer Ausdruck sein; `replaceWith` kann ein String oder eine Funktion sein.
- {{jsxref("String.prototype.search()")}}
  - : Sucht nach einer Übereinstimmung zwischen dem regulären Ausdruck `regexp` und dem aufrufenden String.
- {{jsxref("String.prototype.slice()")}}
  - : Extrahiert einen Abschnitt eines Strings und gibt einen neuen String zurück.
- {{jsxref("String.prototype.split()")}}
  - : Gibt ein Array von Strings zurück, das entsteht, indem der aufrufende String an den Vorkommen des Teilstrings `sep` aufgeteilt wird.
- {{jsxref("String.prototype.startsWith()")}}
  - : Ermittelt, ob der aufrufende String mit den Zeichen des Strings `searchString` beginnt.
- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
  - : Gibt einen Teil des Strings zurück, der am angegebenen Index beginnt und sich über die angegebene Anzahl nachfolgender Zeichen erstreckt.
- {{jsxref("String.prototype.substring()")}}
  - : Gibt einen neuen String zurück, der Zeichen des aufrufenden Strings ab dem angegebenen Index beziehungsweise zwischen den angegebenen Indizes enthält.
- {{jsxref("String.prototype.toLocaleLowerCase()")}}
  - : Wandelt die Zeichen eines Strings unter Berücksichtigung des aktuellen Gebietsschemas in Kleinbuchstaben um.

    Für die meisten Sprachen liefert dies dasselbe Ergebnis wie {{jsxref("String/toLowerCase", "toLowerCase()")}}.

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
  - : Wandelt die Zeichen eines Strings unter Berücksichtigung des aktuellen Gebietsschemas in Großbuchstaben um.

    Für die meisten Sprachen liefert dies dasselbe Ergebnis wie {{jsxref("String/toUpperCase", "toUpperCase()")}}.

- {{jsxref("String.prototype.toLowerCase()")}}
  - : Gibt den Wert des aufrufenden Strings in Kleinbuchstaben zurück.
- {{jsxref("String.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene Objekt darstellt. Überschreibt die Methode {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Gibt den Wert des aufrufenden Strings in Großbuchstaben zurück.
- {{jsxref("String.prototype.toWellFormed()")}}
  - : Gibt einen String zurück, in dem alle [isolierten Surrogate](#utf-16_characters_unicode_code_points_and_grapheme_clusters) dieses Strings durch das Unicode-Ersatzzeichen U+FFFD ersetzt wurden.
- {{jsxref("String.prototype.trim()")}}
  - : Entfernt Leerraum am Anfang und Ende des Strings.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Entfernt Leerraum am Ende des Strings.
- {{jsxref("String.prototype.trimStart()")}}
  - : Entfernt Leerraum am Anfang des Strings.
- {{jsxref("String.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück. Überschreibt die Methode {{jsxref("Object.prototype.valueOf()")}}.
- [`String.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
  - : Gibt ein neues Iterator-Objekt zurück, das über die Codepoints eines String-Werts iteriert und jeden Codepoint als String-Wert zurückgibt.

### HTML-Wrapper-Methoden

> [!WARNING]
> Veraltet. Vermeiden Sie diese Methoden.
>
> Ihr Nutzen ist begrenzt, da sie auf einem sehr alten HTML-Standard beruhen und nur einen Teil der heute verfügbaren HTML-Tags und -Attribute unterstützen. Viele von ihnen erzeugen heute veraltetes oder nicht standardkonformes Markup. Außerdem verketten sie Strings ohne Validierung oder Bereinigung. Dadurch können sie ein Sicherheitsrisiko darstellen, wenn das Ergebnis direkt mit [`innerHTML`](/de/docs/Web/API/Element/innerHTML) eingefügt wird. Verwenden Sie stattdessen [DOM-APIs](/de/docs/Web/API/Document_Object_Model) wie [`document.createElement()`](/de/docs/Web/API/Document/createElement).

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
  - : [`<a href="url">`](/de/docs/Web/HTML/Reference/Elements/a#href) (Link zu einer URL)
- {{jsxref("String.prototype.small()")}} {{deprecated_inline}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}} {{deprecated_inline}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}} {{deprecated_inline}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}} {{deprecated_inline}}
  - : {{HTMLElement("sup")}}

Beachten Sie, dass diese Methoden nicht prüfen, ob der String selbst HTML-Tags enthält. Daher können sie ungültiges HTML erzeugen:

```js
"</b>".bold(); // <b></b></b>
```

Die einzige Maskierung, die sie vornehmen, besteht darin, `"` in Attributwerten (bei {{jsxref("String/anchor", "anchor()")}}, {{jsxref("String/fontcolor", "fontcolor()")}}, {{jsxref("String/fontsize", "fontsize()")}} und {{jsxref("String/link", "link()")}}) durch `&quot;` zu ersetzen.

```js
"foo".anchor('"Hello"'); // <a name="&quot;Hello&quot;">foo</a>
```

## Beispiele

### String-Konvertierung

Die Funktion `String()` ist für die Umwandlung von Werten in Strings zuverlässiger als der Aufruf der Methode `toString()` auf dem jeweiligen Wert, da sie auch mit [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und {{jsxref("undefined")}} funktioniert. Zum Beispiel:

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

- Leitfaden zu [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- {{jsxref("RegExp")}}
