---
title: JavaScript-Sprachübersicht
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Sprachen Java und C – viele Strukturen dieser Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Sie unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "First-Class")}} Objekte sind, die einfach über Ausdrücke erstellt und wie andere Objekte weitergegeben werden können.

Diese Seite dient als kurze Übersicht über verschiedene JavaScript-Sprachmerkmale, geschrieben für Leser mit Hintergrund in anderen Sprachen, wie C oder Java.

## Datentypen

Beginnen wir damit, uns die Bausteine einer jeden Sprache anzusehen: die Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): verwendet für alle Zahlenwerte (Ganzzahlig und Gleitkomma) außer _sehr_ großen Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): verwendet für beliebig große Ganzzahlen.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): verwendet zur Speicherung von Text.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` – üblicherweise verwendet für konditionale Logik.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): verwendet zur Erstellung eindeutiger Bezeichner, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): Kennzeichnung, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): Kennzeichnung eines beabsichtigten Nicht-Werts.

Alles andere ist als [Object](/de/docs/Web/JavaScript/Data_structures#objects) bekannt. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen – sie sind nur ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit-Gleitkomma-Wert mit doppelter Genauigkeit](https://de.wikipedia.org/wiki/IEEE_754), was bedeutet, dass Ganzzahlen sicher dargestellt werden können zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Präzisionsverlust, und Gleitkommazahlen können bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. Innerhalb der Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Ganzzahlwert_ ist also tatsächlich _implizit ein Gleitkommawert_. Aufgrund der IEEE 754-Codierung kann Gleitkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie Bitoperationen, wird die Zahl zu einer 32-Bit-Ganzzahl konvertiert.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis (binär, oktal, dezimal oder hexadezimal) anzugeben, oder ein Exponentensuffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist ein Ganzzahltyp mit beliebiger Länge. Sein Verhalten ähnelt C-Ganzzahltypen (z.B. wird Division auf Null gekürzt), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die standardmäßigen [arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können nicht in arithmetischen Operationen gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet standardmäßige mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, einen String in eine Zahl zu konvertieren:

- {{jsxref("parseInt()")}}, das den String nach einer Ganzzahl parst.
- {{jsxref("parseFloat()")}}, das den String nach einer Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die einen String parst, als wäre es ein Zahlenliteral und verschiedene Zahlendarstellungen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen führen zu `NaN` — zum Beispiel, wenn versucht wird, einen nicht numerischen String zu parsen, oder [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) mit einem negativen Wert zu verwenden. Division durch Null produziert `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: wenn Sie es als Operanden für eine mathematische Operation verwenden, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (gemäß der IEEE 754-Spezifikation).

### Strings

Strings in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte eine willkommene Nachricht für jeden sein, der mit Internationalisierung zu tun hatte. Genauer gesagt, sie sind [UTF-16-kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können sowohl mit einfachen als auch mit doppelten Anführungszeichen geschrieben werden — JavaScript unterscheidet nicht zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach einen String, der aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings (in {{Glossary("Code_unit", "Code-Einheiten")}}) zu finden, greifen Sie auf seine [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um den String zu manipulieren und Informationen darüber zu erhalten. Da alle Primitiven entworfen sind, unveränderlich zu sein, geben diese Methoden neue Strings zurück.

Der `+`-Operator ist für Strings überladen: Wenn einer der Operanden ein String ist, führt er eine String-Verkettung anstelle einer Zahladdition durch. Eine spezielle [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax erlaubt es Ihnen, Strings mit eingebetteten Ausdrücken prägnanter zu schreiben. Anders als Pythons f-Strings oder C#s interpolierte Strings verwenden Template-Literale Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen bewussten Nicht-Wert darstellt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen eines Werts anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Boolean-Typ, mit den möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann nach den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion vornehmen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten erforderlich, da JavaScript diese Umwandlung stillschweigend vornimmt, wenn es einen Boolean erwartet, wie in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was Werte bedeutet, die in boole'schen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisch _und_), `||` (logisch _oder_) und `!` (logisch _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symbol-Typ wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellt wird, ist garantiert eindeutig. Darüber hinaus gibt es registrierte Symbole, die geteilte Konstanten sind, und bekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen genutzt werden. Sie können mehr darüber im [Symbol-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` erlaubt es Ihnen, Blockvariablen zu deklarieren. Die deklarierte Variable ist von dem _Block_ aus verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` erlaubt es, Variablen zu deklarieren, deren Werte nie geändert werden sollen. Die Variable ist von dem _Block_ aus verfügbar, in dem sie deklariert ist.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ – sie verhindern keine _Änderungen_ des Werts der Variablen, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen haben (zum Beispiel sind sie nicht block-skopiert) und werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, da Sie sie später sowieso nicht ändern können.

Mit `let` und `const` deklarierte Variablen belegen immer noch den gesamten Bereich, in dem sie definiert sind, und befinden sich vor der tatsächlichen Deklarationszeile in einem Bereich, der als [Temporale Toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist. Dies hat einige interessante Wechselwirkungen mit Variablenüberschattierung, die in anderen Sprachen nicht vorkommen.

```js
function foo(x, condition) {
  if (condition) {
    console.log(x);
    const x = 2;
    console.log(x);
  }
}

foo(1, true);
```

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da `x` vor der Zeile `const x = 2` immer noch auf den Parameter `x` im übergeordneten Bereich verweisen sollte. In JavaScript würde dies jedoch einen Fehler bei der ersten `console.log`-Anweisung werfen: "Kann nicht auf 'x' zugreifen, bevor es initialisiert wurde". Für weitere Informationen sehen Sie die Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie in [dem vorhergehenden Abschnitt](#datentypen) beschrieben) sind nur mit Werten verbunden, aber nicht mit Variablen. Für `let`-deklarierte Variablen können Sie ihren Typ durch Neuzuweisung jederzeit ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest), und `**` (Exponentiation). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein kombiniertes Zuweisungspendant wie `+=` und `-=`, das zu `x = x operator y` erweitert wird.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` zum Inkrementieren bzw. Dekrementieren verwenden. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch String-Verkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenfolge zu einer Zahl (oder einem anderen Wert) hinzufügen, wird zuerst alles in eine Zeichenfolge umgewandelt. Das könnte Sie verwirren:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Ein leerer String zu etwas hinzuzufügen, ist eine nützliche Methode, um es in eine Zeichenfolge umzuwandeln.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl für Strings als auch für Zahlen funktionieren. Für Gleichheit führt der [Doppelgleichheits-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Dreifach-Gleichheits-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird in der Regel bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppelgleichheits- und der Dreifach-Gleichheits-Operator haben auch ihre Ungleichheits-Pendants: `!=` und `!==`.

JavaScript hat auch [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren logische Operatoren nicht nur mit booleschen Werten – sie funktionieren nach der "Wahrheitswertigkeit" des Werts.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&` und `||` Operatoren verwenden Kurzschlusslogik, was bedeutet, ob sie ihren zweiten Operanden ausführen, hängt vom ersten ab. Dies ist nützlich, um auf null-Objekte zu prüfen, bevor ihre Attribute zugänglich gemacht werden:

```js
const name = o && o.getName();
```

Oder um Werte zu cachen (wenn falsy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren sehen Sie sich die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators) an. Sie könnten besonders an der [Operatoren-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der aus der C-Familie sehr ähnlich. Es gibt ein paar erwähnenswerte Punkte:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie können nicht eines der [Reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional – die Sprache [fügt sie automatisch hinzu](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Allerdings gibt es bestimmte Vorbehalte, auf die geachtet werden sollte, da im Gegensatz zu Python Semikolons immer noch Teil der Syntax sind.

Für einen ausführlichen Blick auf die JavaScript-Grammatik, sehen Sie die [Referenzseite für lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Reihe von Kontrollstrukturen wie andere Sprachen der C-Familie. Konditionale Anweisungen werden durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie miteinander verketten:

```js
let name = "kittens";
if (name === "puppies") {
  name += " woof";
} else if (name === "kittens") {
  name += " meow";
} else {
  name += "!";
}
name === "kittens meow";
```

JavaScript hat kein `elif`, und `else if` ist wirklich nur ein `else`-Zweig, der aus einer einzelnen `if`-Anweisung besteht.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist gut für grundlegendes Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie in C und Java: Sie ermöglicht es Ihnen, die Kontrollinformationen für Ihre Schleife in einer einzigen Zeile bereitzustellen.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, besonders über Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [Aufzählbaren](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch`-Anweisung kann für mehrere Verzweigungen basierend auf Gleichheitsprüfungen verwendet werden.

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

Ähnlich wie in C sind Fallklauseln konzeptionell dasselbe wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung bis zur nächsten Ebene "durchfällt". Sie sind jedoch eigentlich keine Sprungtabellen – jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur String- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis einer den zu vergleichenden Wert gleich ist. Der Vergleich erfolgt mit dem `===`-Operator.

Anders als in einigen Sprachen wie Rust sind Kontrollflussstrukturen `Anweisungen` in JavaScript, was bedeutet, dass Sie ihnen keine Variable zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung geworfen werden. Viele eingebaute Operationen können ebenfalls Fehler werfen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht bestimmen, da alles von einer `throw`-Anweisung geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz handelt, wie im obigen Beispiel. Es gibt einige eingebaute Fehler-Unterklassen, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler zu liefern. Es gibt kein bedingtes Fangen in JavaScript – wenn Sie nur einen Fehlertyp behandeln möchten, müssen Sie alles fangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) bestimmen und dann die anderen Fälle erneut werfen.

```js
try {
  buildMySite("./website");
} catch (e) {
  if (e instanceof RangeError) {
    console.error("Seems like a parameter is out of range:", e);
    console.log("Retrying...");
    buildMySite("./website");
  } else {
    // Don't know how to handle other error types; throw them so
    // something else up in the call stack may catch and handle it
    throw e;
  }
}
```

Wenn ein Fehler von keiner `try...catch`-Anweisung im Aufruf-Stack abgefangen wird, wird das Programm beendet.

Für eine umfassende Liste der Kontrollflussanweisungen, siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Insofern ähneln sie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hash-Tabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen – Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, verändert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) – sogar Array-Indizes, die kanonisch Ganzzahlen sind, sind tatsächlich Zeichenfolgen unter der Haube.

Objekte werden üblicherweise mit der Literalsyntax erstellt:

```js
const obj = {
  name: "Carrot",
  for: "Max",
  details: {
    color: "orange",
    size: 12,
  },
};
```

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [abgerufen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Bei Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Mit eckigen Klammern hingegen kann das Objekt mit einem dynamischen Schlüsselwert indiziert werden.

```js
// Dot notation
obj.name = "Simon";
const name = obj.name;

// Bracket notation
obj["name"] = "Simon";
const name = obj["name"];

// Can use a variable to define a key
const userName = prompt("what is your key?");
obj[userName] = prompt("what is its value?");
```

Der Zugriff auf Eigenschaften kann miteinander verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, es sei denn, etwas kopiert das Objekt explizit, Änderungen an einem Objekt wären von außen sichtbar.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Das bedeutet auch, dass zwei separat erstellte Objekte nie gleich (`!==`) sein werden, denn sie sind unterschiedliche Referenzen. Wenn Sie zwei Referenzen desselben Objekts halten, ist eine Änderung über die andere sichtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr Informationen über Objekte und Prototypen, sehen Sie die [`Objekt`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen zur Objektdesignersyntax, sehen Sie die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung ausgelassen, weil Sie normalerweise Vererbung mit [Klassen](#klassen) erreichen können, ohne den zugrundeliegenden Mechanismus berühren zu müssen (der allgemein als schwer fassbar gilt). Um mehr darüber zu erfahren, siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich ein spezieller Objekttyp. Sie funktionieren ähnlich wie normale Objekte (nummerische Eigenschaften können natürlich nur mit der `[]`-Syntax abgerufen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden üblicherweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte – Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich beliebiger Zahlenindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das obige Array wird als [_spärliches Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, da in der Mitte unbewohnte Slots vorhanden sind, und wird die Engine dazu bringen, es von einem Array in eine Hash-Tabelle umzuwandeln. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Out-of-Bounds-Indizierung wirft keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie den Wert `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente enthalten und können sich beliebig vergrößern oder verkleinern.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der `for`-Schleife iteriert werden, wie in anderen C-ähnlichen Sprachen:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die synonym zu C++/Java's `for (int x : arr)`-Syntax ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays kommen mit einer Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array iterieren – zum Beispiel, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) würde einen Rückruf auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen die Kernkomponente zum Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter annehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann eigene Variablen deklarieren, die lokal zu dieser Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine return-Anweisung verwendet wird (oder ein leerer return ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie spezifizieren. Wenn Sie eine Funktion ohne die erwarteten Parameter aufrufen, werden diese auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parametersyntaxen. Zum Beispiel erlaubt die [Restparameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), alle zusätzlichen, vom Aufrufer übergebenen Parameter in ein Array zu sammeln, ähnlich wie Python's `*args`. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es kein `**kwargs`.)

```js
function avg(...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

Im obigen Code hält die Variable `args` alle Werte, die in die Funktion übergeben wurden.

Der Restparameter wird alle Argumente _nachdem_ er deklariert wird, speichern, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` wird den ersten Wert, der in die Funktion übergeben wurde, in der Variablen `firstValue` speichern und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array halten, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _verbreiten_. Zum Beispiel: `avg(...numbers)`.

Wir erwähnten, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, was es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)-Syntax, die es ermöglicht, ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert zu setzen.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt es Ihnen, anonyme Funktionen zu erstellen – also Funktionen ohne Namen. In der Praxis werden anonyme Funktionen in der Regel als Argumente für andere Funktionen verwendet, sofort einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

```js
// Note that there's no function name before the parentheses
const avg = function (...args) {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};
```

Das macht die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten aufgerufen wird – das bedeutet, dass sie semantisch gleichwertig ist mit der Funktionsdeklaration `function avg() {}`.

Es gibt eine andere Möglichkeit, anonyme Funktionen zu definieren – indem ein [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwendet wird.

```js
// Note that there's no function name before the parentheses
const avg = (...args) => {
  let sum = 0;
  for (const item of args) {
    sum += item;
  }
  return sum / args.length;
};

// You can omit the `return` when simply returning an expression
const sum = (a, b, c) => a + b + c;
```

Pfeilfunktionen sind nicht semantisch identisch mit Funktionsausdrücken – für weitere Informationen sehen Sie die [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine weitere Möglichkeit, wie anonyme Funktionen nützlich sein können: Sie können gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, was als {{Glossary("IIFE", "Sofort aufgerufener Funktionsausdruck (IIFE)")}} bezeichnet wird:

```js
(function () {
  // …
})();
```

Für Anwendungszwecke von IIFEs können Sie das [Emulieren privater Methoden mit Closures](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich beim Umgang mit Baumstrukturen, wie sie im Browser DOM zu finden sind.

```js
function countChars(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

Funktionsausdrücke können ebenfalls benannt werden, was ihnen erlaubt, rekursiv zu sein.

```js
const charsInBody = (function counter(elm) {
  if (elm.nodeType === 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  let count = 0;
  for (let i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

Der Name, der einem Funktionsausdruck wie oben angegeben wird, ist nur im eigenen Gültigkeitsbereich der Funktion verfügbar. Dies erlaubt es der Engine, mehr Optimierungen vorzunehmen und führt zu besser lesbarem Code. Der Name erscheint auch im Debugger und in einigen Stacktraces, was Ihnen Zeit beim Debuggen sparen kann.

Wenn Sie an funktionale Programmierung gewöhnt sind, beachten Sie die Leistungsimplikationen von Rekursion in JavaScript. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://de.wikipedia.org/wiki/Tail_Call) spezifiziert, wurde sie nur in JavaScriptCore (verwendet von Safari) implementiert, aufgrund der Schwierigkeit, Stacktraces wiederherzustellen und der Debuggierbarkeit. Für tiefe Rekursion Erwägen Sie stattdessen Iteration, um Stapelüberläufe zu vermeiden.

### Funktionen sind First-Class-Objekte

JavaScript-Funktionen sind First-Class-Objekte. Das bedeutet, dass sie Variablen zugewiesen, als Argumente zu anderen Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Closures) von Haus aus ohne explizites Erfassen, was es Ihnen ermöglicht, bequem im funktionalen Programmierstil zu arbeiten.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind – wie alles andere in JavaScript – und Sie Eigenschaften auf ihnen hinzufügen oder ändern können, genau wie wir es vorher im Abschnitt Objekte gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Gültigkeitsbereich ihrer übergeordneten Funktion zugreifen können:

```js
function parentFunc() {
  const a = 1;

  function nestedFunc() {
    const b = 4; // parentFunc can't use this
    return a + b;
  }
  return nestedFunc(); // 5
}
```

Dies bietet eine Menge Nutzen beim Schreiben von wartbarerem Code. Wenn eine aufgerufene Funktion von ein oder zwei anderen Funktionen abhängt, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen darin verschachteln. Dies hält die Anzahl der Funktionen, die sich im globalen Gültigkeitsbereich befinden, niedrig.

Dies ist auch ein großartiger Gegenpunkt zur Versuchung globaler Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen in ihrem übergeordneten Bereich teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zu koppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die sehr ähnlich ist wie in Sprachen wie Java.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Person("Maria");
console.log(p.sayHello());
```

JavaScript-Klassen sind einfach Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die Methoden und Eigenschaften enthält, die die Klasse spezifiziert hat. Klassen erzwingen keine Code-Organisation – zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie ad hoc die Erstellung einer Klasse sein kann: Es ist einfach ein Ausdruck, der aus einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

```js
const withAuthentication = (cls) =>
  class extends cls {
    authenticate() {
      // …
    }
  };

class Admin extends withAuthentication(Person) {
  // …
}
```

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Eigenschaften werden durch Voranstellen eines Hashes `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Eigenschaftsnamens. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen – nicht einmal in abgeleiteten Klassen.

Für eine detaillierte Anleitung zu den verschiedenen Klasseneigenschaften können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrone Programmierung

JavaScript ist von Natur aus ein Single-Thread. Es gibt keine [Parallelisierung](https://de.wikipedia.org/wiki/Parallelverarbeitung); nur [Nebenläufigkeit](https://de.wikipedia.org/wiki/Nebenläufigkeit). Asynchrone Programmierung wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) unterstützt, die es ermöglicht, eine Reihe von Aufgaben in die Warteschlange zu stellen und auf ihre Fertigstellung zu warten.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/setTimeout))
- [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basiert
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), das syntaktischer Zucker für Promises ist

Zum Beispiel könnte eine Datei-Leseoperation in JavaScript folgendermaßen aussehen:

```js
// Callback-based
fs.readFile(filename, (err, content) => {
  // This callback is invoked when the file is read, which could be after a while
  if (err) {
    throw err;
  }
  console.log(content);
});
// Code here will be executed while the file is waiting to be read

// Promise-based
fs.readFile(filename)
  .then((content) => {
    // What to do when the file is read
    console.log(content);
  })
  .catch((err) => {
    throw err;
  });
// Code here will be executed while the file is waiting to be read

// Async/await
async function readFile(filename) {
  const content = await fs.readFile(filename);
  console.log(content);
}
```

Die Kernsprache spezifiziert keine asynchronen Programmierfeatures, aber es ist entscheidend, wenn man mit der externen Umgebung interagiert – vom [Anfordern von Benutzerberechtigungen](/de/docs/Web/API/Permissions_API) über [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch) bis hin zum [Lesen von Dateien](https://nodejs.org/api/fs.html). Das Halten von potenziell lang laufenden Operationen asynchron stellt sicher, dass andere Prozesse weiterhin laufen können, während dieser wartet – zum Beispiel wird der Browser nicht einfrieren, während er auf den Benutzer wartet, um auf eine Schaltfläche zu klicken, um eine Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Zum Beispiel, wenn Sie ein Promise haben, können Sie nur auf das endgültige Ergebnis über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode zugreifen. Ähnlich kann [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) nur in einem asynchronen Kontext verwendet werden, der in der Regel eine asynchrone Funktion oder ein Modul ist. Promises sind _niemals blockierend_ – nur die Logik, die vom Ergebnis des Promises abhängt, wird verschoben; alles andere wird derweil weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, könnten Sie Promises als [Monaden](<https://de.wikipedia.org/wiki/Monad_(Funktionale_Programmierung)>) erkennen, die mit `then()` abgebildet werden können (jedoch sind sie keine _eigentlichen_ Monaden, da sie automatisch abflachen; d.h. Sie können kein `Promise<Promise<T>>` haben).

Tatsächlich hat das Ein-Thread-Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht, dank seines nicht blockierenden IO, das die Bearbeitung einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr leistungsfähig macht. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, blockieren jedoch weiterhin den Haupt-Thread. Um echte Parallelisierung zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrone Programmierung zu erfahren, können Sie über das [Verwenden von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem Tutorial über [asynchrones JavaScript](/de/docs/Learn/JavaScript/Asynchronous) folgen.

## Module

JavaScript speichert auch ein Modulsystem, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist in der Regel eine Datei, die durch ihren Dateipfad oder ihre URL identifiziert wird. Sie können die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)- und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java usw. ist die Modulauflösung in JavaScript vollständig hostdefiniert – normalerweise basierend auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum aktuellen Modulpfad anstelle eines Projektstammverzeichnispfads sind.

Allerdings bietet die JavaScript-Sprache keine Standardbibliotheksmodule – alle Kernfunktionen werden durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies liegt an der langen Geschichte von JavaScript, das kein Modulsystem hatte, und der Tatsache, dass die Wahl des Modulsystems einige Änderungen an der Laufzeiteinrichtung erfordert.

Verschiedene Laufzeiten können unterschiedliche Modulsysteme verwenden. Beispielsweise verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und ist größtenteils dateibasiert, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Für mehr Informationen, siehe die [Module-Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Funktionen _auf Sprachniveau_ sind, während andere _auf Laufzeitebene_ sind.

JavaScript ist eine allgemeine Skriptsprache. Die [Kernsprachenspezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Rechenlogik. Sie befasst sich nicht mit Ein- oder Ausgabe – tatsächlich ist das Verhalten eines JavaScript-Programms ohne zusätzliche laufzeitspezifische APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)) völlig nicht beobachtbar.

Eine Laufzeit oder ein Host ist etwas, das Daten an die JavaScript-Engine (den Interpreter) übermittelt, zusätzliche globale Eigenschaften bereitstellt und Haken bereitstellt, damit die Engine mit der Außenwelt interagieren kann. Modulauflösung, Dateneinlesung, Nachrichten drucken, Netzwerk-Anfragen senden usw. sind alle Laufzeitebene-Operationen. Seit ihrer Einführung wurde JavaScript in verschiedenen Umgebungen übernommen, wie Browser (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (die APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellen) usw. JavaScript wurde erfolgreich in das Web (was ihr primärer Zweck war), mobile Apps, Desktop-Apps, serverseitige Apps, serverlose, eingebettete Systeme und mehr integriert. Während Sie über JavaScript-Kernmerkmale lernen, ist es auch wichtig, von Host bereitgestellte Features zu verstehen, um das Wissen anzuwenden. Zum Beispiel können Sie alle [Webplattform-APIs](/de/docs/Web/API), die von Browsern und manchmal auch von Nicht-Browsern implementiert werden, lesen.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Merkmale mit anderen Sprachen verglichen werden. Wenn Sie mehr über die Sprache selbst und die Nuancen jedes Merkmals erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Raum und Komplexität weggelassen haben, die Sie jedoch selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
