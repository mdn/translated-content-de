---
title: Überblick über die JavaScript-Sprache
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Java- und C-Sprachen - viele Strukturen aus diesen Sprachen gelten auch für JavaScript. JavaScript unterstützt die objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "first-class")}} Objekte sind, die leicht über Ausdrücke erstellt und wie jedes andere Objekt weitergereicht werden können.

Diese Seite dient als schneller Überblick über verschiedene Funktionen der JavaScript-Sprache, geschrieben für Leser mit Vorkenntnissen in anderen Sprachen, wie C oder Java.

## Datentypen

Lassen Sie uns mit den Bausteinen jeder Sprache beginnen: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type): Wird für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen) verwendet, außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type): Wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type): Wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type): `true` und `false` – wird normalerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Guide/Data_structures#symbol_type): Wird zur Erstellung eindeutiger Bezeichner verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type): Gibt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Guide/Data_structures#null_type): Gibt einen absichtlichen Nicht-Wert an.

Alles andere wird als [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) bezeichnet. Häufige Objekttypen umfassen:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind keine speziellen Datenstrukturen in JavaScript – sie sind einfach ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Gleitkommawert mit Doppelpräzision](https://de.wikipedia.org/wiki/Doppelte_Präzision), was bedeutet, dass Ganzzahlen sicher im Bereich von [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) bis [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Genauigkeitsverlust dargestellt werden können, und Gleitkommazahlen bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden können. Innerhalb von Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

So ist eine _scheinbare Ganzzahl_ in Wirklichkeit _implizit eine Fließkommazahl_. Aufgrund der IEEE 754-Codierung kann die Fließkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie Bitoperationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis (binär, oktal, dezimal oder hexadezimal) anzugeben, oder ein Exponentsuffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist ein ganzzahliger Typ beliebiger Länge. Sein Verhalten ähnelt den Ganzzahltypen in C (z.B. wird bei der Division auf Null abgeschnitten), mit der Ausnahme, dass er unendlich wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die standardmäßigen [arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt stellt standardmäßige mathematische Funktionen und Konstanten bereit.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, einen String in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das den String als Ganzzahl parst.
- {{jsxref("parseFloat()")}}, das den String als Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die einen String parst, als wäre es ein Zahlenliteral, und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Pluszeichen `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (Kurzform für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück – zum Beispiel bei dem Versuch, einen nicht-numerischen String zu parsen, oder bei der Verwendung von [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einen negativen Wert. Division durch Null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operand an eine mathematische Operation übergeben, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (laut IEEE 754-Spezifikation).

### Strings

Strings in JavaScript sind Folgen von Unicode-Zeichen. Dies sollte eine erfreuliche Nachricht für alle sein, die sich mit Internationalisierung beschäftigen müssen. Genauer gesagt sind sie [UTF-16 kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können mit einfachen oder doppelten Anführungszeichen geschrieben werden – JavaScript unterscheidet nicht zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach einen String, der aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings (in {{Glossary("Code_unit", "Code-Einheiten")}}) zu ermitteln, greifen Sie auf seine [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) zur Manipulation des Strings und zum Abrufen von Informationen über den String. Da alle primitiven Typen aus Designgründen unveränderlich sind, geben diese Methoden neue Strings zurück.

Der `+`-Operator ist für Strings überlastet: Wenn einer der Operanden ein String ist, führt er eine String-Konkatenation anstelle einer Zahlenaddition durch. Eine spezielle [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax ermöglicht es Ihnen, Strings mit eingebetteten Ausdrücken prägnanter zu schreiben. Im Gegensatz zu den f-Strings in Python oder den interpolierten Strings in C# verwenden Template-Literale Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert anzeigt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit auf `undefined`.

JavaScript hat einen booleschen Typ, mit den möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in ein Boolean umgewandelt werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null` und `undefined` werden alle `false`.
2. Alle anderen Werte werden `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Umwandlung stillschweigend durchführt, wenn es ein Boolean erwartet, wie in einer `if`-Anweisung (siehe [Steuerstrukturen](#steuerstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was Werte bedeutet, die in booleschen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird oft verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Funktion erstellt wird, ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, die geteilte Konstanten sind, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Sie können mehr über sie im [Symbol-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` erlaubt es Ihnen, Block-Variablen zu deklarieren. Die deklarierte Variable ist im _Block_ verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` erlaubt es Ihnen, Variablen zu deklarieren, deren Werte nie geändert werden sollen. Die Variable ist im _Block_ verfügbar, in dem sie deklariert wird.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern nicht _Mutationen_ des Variablenwerts, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen aufweisen (zum Beispiel sind sie nicht block-scope), und sie werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, hat sie den Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, da Sie sie später nicht mehr ändern können.

Mit `let` und `const` deklarierte Variablen beanspruchen immer noch den gesamten Geltungsbereich, in dem sie definiert sind, und befinden sich in einem Bereich, der als [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) vor der tatsächlichen Deklarationszeile bezeichnet wird. Dies hat einige interessante Interaktionen mit Variablenschatten, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da vor der `const x = 2`-Zeile `x` immer noch auf den Parameter `x` im oberen Geltungsbereich verweisen sollte. In JavaScript würde dies aufgrund des gesamten Geltungsbereichs der Deklaration einen Fehler bei der ersten `console.log`-Anweisung auslösen: "Cannot access 'x' before initialization". Für weitere Informationen siehe die Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt beschrieben](#datentypen)) sind nur mit Werten, aber nicht mit Variablen verknüpft. Bei mit `let` deklarierten Variablen können Sie ihren Typ immer durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

Die numerischen Operatoren von JavaScript umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponentiation). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuweisungsgegenstück wie `+=` und `-=`, das auf `x = x operator y` erweitert wird.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um inkrementell bzw. dekrementell zu agieren. Diese können als Präfix- oder Postfix-Betreiber verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine String-Konkatenation aus:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl hinzufügen (oder einen anderen Wert), wird alles zuerst in eine Zeichenkette umgewandelt. Dies könnte Sie in die Irre führen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen eines leeren Strings zu etwas ist eine nützliche Methode, um es in eine Zeichenkette selbst umzuwandeln.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` gemacht werden, die sowohl für Zeichenketten als auch für Zahlen funktionieren. Für Gleichheit führt der [Doppel-Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typkonvertierung durch, wenn Sie ihm unterschiedliche Typen geben, was manchmal interessante Ergebnisse liefert. Andererseits versucht der [Dreifach-Gleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typkonvertierung und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Doppelgleichheits- und Dreifachgleichheitszeichen haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitoperatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren logische Operatoren nicht nur mit booleschen Werten – sie arbeiten in Abhängigkeit von der "Wahrhaftigkeit" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&` und `||` Operatoren verwenden Short-Circuit-Logik, was bedeutet, dass die Ausführung des zweiten Operanden von dem ersten abhängig ist. Dies ist nützlich, um Null-Objekte zu überprüfen, bevor Sie auf ihre Attribute zugreifen:

```js
const name = o && o.getName();
```

Oder um Werte zu cachen (wenn falsy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren, siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzbereich](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operator-Vorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ähnelt sehr der C-Familie. Es gibt einige Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen enthalten, aber sie können keine der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional – die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Es gibt jedoch einige Vorbehalte, auf die Sie achten sollten, da im Gegensatz zu Python Semikolons immer noch Teil der Syntax sind.

Für einen tieferen Einblick in die JavaScript-Grammatik lesen Sie die [Referenzseite zur lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Steuerstrukturen

JavaScript verfügt über einen ähnlichen Satz von Steuerstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie miteinander verketten:

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

JavaScript hat kein `elif`, und `else if` ist in Wirklichkeit nur ein `else`-Zweig, der aus einer einzelnen `if`-Anweisung besteht.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist gut für grundlegendes Schleifen; die zweite ist für Schleifen, bei denen sichergestellt werden soll, dass der Schleifenrumpf mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

Die [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) von JavaScript entspricht der in C und Java: Sie können die Steuerinformationen für Ihre Schleife in einer einzigen Zeile angeben.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), das über [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, vor allem Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), das alle [enumerable](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts durchgeht.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch`-Anweisung kann für mehrere Verzweigungen basierend auf Gleichheitsüberprüfung verwendet werden.

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

Ähnlich wie in C sind "case"-Klauseln konzeptionell denselben wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass, wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung auf die nächste Ebene "durchfallen" würde. Sie sind jedoch tatsächlich keine Sprungtabellen - jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur Zeichenfolgen- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis einer gleich dem Wert ist, der abgeglichen wird. Der Vergleich erfolgt zwischen den beiden unter Verwendung des `===` Operators.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie z.B. `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung ausgelöst werden. Viele integrierte Operationen können ebenfalls Fehler auslösen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade gefangen haben, nicht erkennen, da alles aus einer `throw`-Anweisung ausgelöst werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt kein bedingtes Catch in JavaScript – wenn Sie nur einen bestimmten Fehlertyp behandeln möchten, müssen Sie alles abfangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle neu auslösen.

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

Wenn ein Fehler von keinem `try...catch` im Aufrufstapel abgefangen wird, wird das Programm beendet.

Für eine umfassende Liste der Kontrollflussanweisungen, siehe den [Referenzbereich](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. In gewisser Weise ähneln sie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen – Eigenschaften können jederzeit hinzugefügt, gelöscht, umgeordnet, verändert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) – selbst Array-Indizes, die kanonisch Ganzzahlen sind, sind unter der Haube tatsächlich Zeichenketten.

Objekte werden normalerweise mit der Literalsyntax erstellt:

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

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [zugegriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Bei Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

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

Der Eigenschaftszugriff kann miteinander verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, also sind Mutationen eines Objekts sichtbar, es sei denn, etwas kopiert das Objekt explizit.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Das bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sein werden, da sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen auf dasselbe Objekt haben, wäre eine Mutation durch die andere sichtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr über Objekte und Prototypen, siehe die [`Objekt`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen zur Objekinitializer-Syntax, siehe ihre [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung weggelassen, weil Sie Vererbung in der Regel mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (von dem Sie vielleicht gehört haben, dass er schwierig ist). Um mehr darüber zu erfahren, siehe [Inheritance and the prototype chain](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind tatsächlich ein spezieller Objekttyp. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mit der `[]`-Syntax zugegriffen werden), jedoch haben sie eine besondere Eigenschaft namens `length`. Diese ist immer um eins größer als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte - Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich willkürlicher Nummernindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erhaltene Array wird als [_sparse array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, da in der Mitte unbesetzte Plätze vorhanden sind und die Engine dazu veranlassen wird, es von einem Array zu einer Hashtabelle zu deoptimieren. Stellen Sie sicher, dass Ihr Array dicht besetzt ist!

Out-of-Bounds-Indizierung wirft keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente haben und können beliebig wachsen oder schrumpfen.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der `for`-Schleife durchlaufen werden, wie in anderen C-ähnlichen Sprachen:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die dem `for (int x : arr)` Syntax in C++/Java gleichbedeutend ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays verfügen über eine Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array durchlaufen - zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Rückruffunktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen die Kernkomponente für das Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter annehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann eigene Variablen deklarieren, die lokal für diese Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann jederzeit verwendet werden, um einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine return-Anweisung verwendet wird (oder ein leeres return ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie angeben. Wenn Sie eine Funktion aufrufen, ohne die erwarteten Parameter zu übergeben, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter als erwartet übergeben, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parametersyntaxen, die verfügbar sind. Zum Beispiel erlaubt die [rest parameter syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller zusätzlichen Parameter, die vom Aufrufer übergeben werden, in einem Array, ähnlich wie `*args` in Python. (Da JS keine benannten Parameter auf Sprachebene hat, gibt es kein `**kwargs`.)

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

Im obigen Code enthält die Variable `args` alle Werte, die in die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ dem Punkt, an dem er deklariert wurde, aber nicht vorher. In anderen Worten, `function avg(firstValue, ...args)` wird den ersten Wert, der in die Funktion übergeben wird, in die Variable `firstValue` speichern und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array halten, können Sie die [spread syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als eine Liste von Elementen zu _streuen_. Zum Beispiel: `avg(...numbers)`.

Wir erwähnten, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie durch [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zu implementieren, das es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Default-Parameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)-Syntax, die es ermöglicht, ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert zuweisen.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt es Ihnen, anonyme Funktionen - das heißt, Funktionen ohne Namen - zu erstellen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, sofort einer Variablen zugewiesen, die zur Aufrufung der Funktion verwendet werden kann, oder von einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion durch den Aufruf von `avg()` mit einigen Argumenten aufrufbar - das heißt, sie ist semantisch gleichbedeutend mit der Deklaration der Funktion mit der `function avg() {}`-Deklarationssyntax.

Es gibt eine andere Möglichkeit, anonyme Funktionen zu definieren - unter Verwendung eines [Pfeilfunktionsausdrucks](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Pfeilfunktionen sind nicht semantisch äquivalent zu Funktionsausdrücken - für mehr Informationen siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine weitere Möglichkeit, bei der anonyme Funktionen nützlich sein können: Sie kann gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, was als {{Glossary("IIFE", "sofort aufgerufener Funktionsausdruck (IIFE)")}} bezeichnet wird:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie [Emulieren privater Methoden mit Verschlüssen](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich für die Arbeit mit Baumstrukturen, wie sie im Browser-DOM zu finden sind.

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

Funktionsausdrücke können ebenfalls benannt werden, was es ihnen ermöglicht, rekursiv zu sein.

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

Der Name, der einem Funktionsausdruck wie oben gegeben wird, ist nur im Gültigkeitsbereich der Funktion selbst verfügbar. Dies ermöglicht mehr Optimierungen durch die Engine und führt zu besser lesbarem Code. Der Name wird auch im Debugger und in einigen Stack-Traces angezeigt, was Ihnen Zeit bei der Fehlersuche ersparen kann.

Wenn Sie an funktionale Programmierung gewöhnt sind, sollten Sie sich der Leistungsauswirkungen der Rekursion in JavaScript bewusst sein. Obwohl die Sprachspezifikation [tail-call-Optimierung](https://de.wikipedia.org/wiki/Tail_Call) spezifiziert, ist sie nur in JavaScriptCore (verwendet in Safari) implementiert, aufgrund der Schwierigkeit, Stack-Traces wiederherzustellen und die Debug-Fähigkeit zu gewährleisten. Für tiefe Rekursion ziehen Sie in Betracht, stattdessen Iterationen zu verwenden, um einen Stack-Overflow zu vermeiden.

### Funktionen sind First-Class-Objekte

JavaScript-Funktionen sind First-Class-Objekte. Das bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript von Haus aus [Verschlüsse](/de/docs/Web/JavaScript/Guide/Closures) ohne explizite Erfassung, was es ermöglicht, funktionale Programmierstile bequem anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Es sei darauf hingewiesen, dass JavaScript-Funktionen selbst Objekte sind - wie alles andere in JavaScript - und Sie können ihnen Eigenschaften hinzufügen oder ändern, genau wie wir es zuvor im Abschnitt Objekte gesehen haben.

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

Dies bietet eine Menge Nutzen beim Schreiben wartbarerem Code. Wenn eine aufgerufene Funktion von einer oder zwei anderen Funktionen abhängt, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen in sie einbetten. Dies hält die Anzahl der Funktionen, die sich im globalen Gültigkeitsbereich befinden, niedrig.

Dies ist auch eine großartige Lösung gegen die Verlockung globaler Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu Code führt, der schwer zu warten ist. Verschachtelte Funktionen können Variablen in ihrem übergeordneten Gültigkeitsbereich teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zusammenzukoppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [Klassen](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die der von Sprachen wie Java sehr ähnlich ist.

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

JavaScript-Klassen sind einfach Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die Methoden und Eigenschaften enthält, die die Klasse spezifiziert hat. Klassen erzwingen keine Code-Organisation - zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie spontan die Erstellung einer Klasse sein kann: Es ist einfach ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Felder und Methoden werden durch Voranstellen eines Hashes `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Namens des Elements und unterscheidet es von einer regulären String-zugeordneten Eigenschaft. (Denken Sie an `#` wie `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, ein privates Element außerhalb des Klassenkörpers zu lesen - nicht einmal in abgeleiteten Klassen.

Für eine detaillierte Anleitung zu verschiedenen Klassenfunktionen können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrones Programmieren

JavaScript ist von Natur aus einspurig. Es gibt kein [Parallelisieren](https://de.wikipedia.org/wiki/Parallelverarbeitung); nur [Nebenläufigkeit](https://de.wikipedia.org/wiki/Nebenläufigkeit). Asynchrones Programmieren wird durch eine [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) ermöglicht, die es einem Satz von Aufgaben ermöglicht, in die Warteschlange gestellt und auf Fertigstellung geprüft zu werden.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, welches ein syntaktischer Zucker für Promises ist

Zum Beispiel, hier ist, wie eine Datei-Leseoperation in JavaScript aussehen könnte:

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

Die Kernsprache spezifiziert keine asynchronen Programmierfunktionen, aber es ist entscheidend beim Interagieren mit der externen Umgebung - vom [Anfragen von Benutzerrechten](/de/docs/Web/API/Permissions_API), bis zum [Abrufen von Daten](/de/docs/Web/API/Fetch_API/Using_Fetch), bis zum [Lesen von Dateien](https://nodejs.org/api/fs.html). Das Halten der potenziell langwierigen Operationen async stellt sicher, dass andere Prozesse noch ausgeführt werden können, während dieser wartet - zum Beispiel wird der Browser nicht einfrieren, während er darauf wartet, dass der Benutzer auf eine Schaltfläche klickt, um eine Erlaubnis zu erteilen.

Wenn Sie einen Async-Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Zum Beispiel, wenn Sie ein Promise haben, können Sie nur mit der [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode auf das Endergebnis zugreifen. Ebenso kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, der normalerweise eine async Funktion oder ein Modul ist. Promises sind _niemals blockierend_ - nur die Logik, die vom Ergebnis des Promises abhängt, wird verschoben; alles andere wird in der Zwischenzeit weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, können Sie Promises als [Monaden](<https://de.wikipedia.org/wiki/Monade_(Funktionale_Programmierung)>) erkennen, die mit `then()` abgebildet werden können (sie sind jedoch keine _richtigen_ Monaden, da sie automatisch abflachen; d.h. Sie können kein `Promise<Promise<T>>` haben).

Tatsächlich hat das Einspurenmodell Node.js zu einer beliebten Wahl für serverseitiges Programmieren gemacht, dank seines nicht-blockierenden IOs, was die Verarbeitung einer großen Anzahl an Datenbank- oder Dateisystemanforderungen sehr leistungsfähig macht. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, werden jedoch weiterhin den Hauptfaden blockieren. Um echtes Parallelisieren zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrones Programmieren zu erfahren, können Sie über [die Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder das [asynchrone JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) Tutorial verfolgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder URL identifiziert wird. Sie können die {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java etc., ist die Modulauflösung in JavaScript vollständig host-definiert - sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls sind, anstatt zu einem Projekthauptpfad.

Jedoch bietet die JavaScript-Sprache keine standardmäßigen Bibliotheksmodule - alle Kernfunktionen werden stattdessen durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies liegt an der langen Geschichte von JavaScript, das lange Zeit kein Modulsystem hatte, und der Tatsache, dass das Einbinden in das Modulsystem einige Änderungen am Laufzeitsystem erfordert.

Verschiedene Laufzeiten können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js](https://nodejs.org/de/) den Paketmanager [npm](https://www.npmjs.com/) und basiert hauptsächlich auf dem Dateisystem, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Für weitere Informationen siehe die [Modul-Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Funktionen auf _Sprachebene_ sind, während andere auf _Laufzeitebene_ sind.

JavaScript ist eine universelle Skriptsprache. Die [Kernsprachen-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine berechn

erische Logik. Sie befasst sich nicht mit Ein-/Ausgaben - tatsächlich ist das Verhalten eines JavaScript-Programms ohne zusätzliche APIs auf Laufzeitebene (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)) vollständig nicht beobachtbar.

Eine Laufzeit oder ein Host ist etwas, das Daten an die JavaScript-Engine (den Interpreter) liefert, zusätzliche globale Eigenschaften bereitstellt und Hooks bereitstellt, damit die Engine mit der Außenwelt interagieren kann. Modulauflösung, Datenlesen, Nachrichten drucken, Netzwerkanforderungen senden usw. sind alles Laufzeitebenen-Operationen. Seit ihrer Einführung wurde JavaScript in verschiedenen Umgebungen übernommen, wie Browser (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellt) usw. JavaScript wurde erfolgreich in das Web (was sein primärer Zweck war), mobile Apps, Desktop-Apps, serverseitige Apps, servieerlos, eingebettete Systeme und mehr integriert. Während Sie über die Kernfunktionen von JavaScript lernen, ist es auch wichtig, host-provided features zu verstehen, um das Wissen in die Praxis umzusetzen. Zum Beispiel können Sie über alle [Webplattform-APIs](/de/docs/Web/API) lesen, die von Browsern und manchmal auch von Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie sich verschiedene JavaScript-Funktionen mit anderen Sprachen vergleichen. Wenn Sie mehr über die Sprache selbst und die Feinheiten jedes Features lernen möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aus Platz- und Komplexitätsgründen ausgelassen haben, aber sie können Sie selbst erkunden:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Verschlüsse](/de/docs/Web/JavaScript/Guide/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
