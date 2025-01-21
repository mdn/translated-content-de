---
title: Überblick über die JavaScript-Sprache
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Seine Syntax basiert auf den Sprachen Java und C - viele Strukturen dieser Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch die funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "First-Class")}} Objekte sind, die leicht durch Ausdrücke erstellt und wie jedes andere Objekt weitergegeben werden können.

Diese Seite dient als schneller Überblick über verschiedene JavaScript-Sprachfunktionen, geschrieben für Leser mit Hintergrund in anderen Sprachen, wie C oder Java.

## Datentypen

Beginnen wir mit den Bausteinen jeder Sprache: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): Wird für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen) verwendet, außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): Wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): Wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` - wird normalerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): Wird zur Erstellung eindeutiger Bezeichner verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): Zeigt an, dass einer Variable kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): Zeigt einen absichtlichen Nicht-Wert an.

Alles andere ist als ein [Object](/de/docs/Web/JavaScript/Data_structures#objects) bekannt. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine besonderen Datenstrukturen — sie sind nur eine spezielle Art von Objekten, die aufgerufen werden können.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Doppelter-Gleitkommawert](https://de.wikipedia.org/wiki/Doppelter_Gleitkommawert), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Verlust an Präzision dargestellt werden können und Gleitkommazahlen bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden können. Innerhalb der Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Ganzzahlwert_ ist in der Tat _implizit ein Float_. Aufgrund der IEEE 754-Codierung kann manchmal die Gleitkommaarithmetik ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Bei Operationen, die Ganzzahlen erwarten, wie Bitoperationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis anzugeben (binär, oktal, dezimal oder hexadezimal), oder ein Exponentensuffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ ist ein Ganzzahlwert mit beliebiger Länge. Sein Verhalten ist ähnlich wie bei den Ganzzahltypen in C (z. B. wird die Division auf Null gekürzt), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n` Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[Arithmetik-Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}} Objekt bietet standardmäßige mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, um einen String in eine Zahl zu konvertieren:

- {{jsxref("parseInt()")}}, das den String auf eine Ganzzahl analysiert.
- {{jsxref("parseFloat()")}}, das den String auf eine Gleitkommazahl analysiert.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion, die einen String so analysiert, als wäre er ein Zahlenliteral, und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück — zum Beispiel, wenn versucht wird, einen nicht-numerischen String zu analysieren oder [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einen negativen Wert anzuwenden. Die Division durch Null erzeugt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: wenn Sie es als Operand für eine mathematische Operation verwenden, ist das Ergebnis ebenfalls `NaN`. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (gemäß der IEEE 754-Spezifikation).

### Strings

Strings in JavaScript sind Sequenzen von Unicode-Zeichen. Dies ist für alle willkommen, die sich mit Internationalisierung beschäftigen mussten. Genauer gesagt, sie sind [UTF-16 codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können entweder mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript hat keinen Unterschied zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach einen String, der aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings (in {{Glossary("Code_unit", "Codeeinheiten")}}) zu finden, greifen Sie auf dessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) Eigenschaft zu.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods) zum Manipulieren des Strings und zum Zugreifen auf Informationen über den String. Da alle Primitiven von Design aus unveränderlich sind, geben diese Methoden neue Strings zurück.

Der `+` Operator ist für Strings überladen: Wenn einer der Operanden ein String ist, führt er eine Zeichenkettenkonkatenation anstelle einer Zahlenaddition durch. Eine spezielle [template literal](/de/docs/Web/JavaScript/Reference/Template_literals) Syntax erlaubt es Ihnen, Strings mit eingebetteten Ausdrücken kürzer zu schreiben. Im Gegensatz zu Python's F-Strings oder C#'s interpolierten Strings verwenden Template Literale Backticks (nicht einzelne oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert anzeigt (und nur über das `null` Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, was das Fehlen eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Das Zugreifen auf eine nicht existierende [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Boolean-Typ mit möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null`, und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten erforderlich, da JavaScript diese Umwandlung stillschweigend vornimmt, wenn es einen Boolean erwartet, wie in einer `if` Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was bedeutet, dass sie in Boolean-Kontexten `true` bzw. `false` werden.

| Boolean-Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Funktion erstellt wird, ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, die gemeinsame Konstanten sind, und bekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen genutzt werden. Sie können mehr darüber auf der [Symbol-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem der drei Schlüsselwörter deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` erlaubt die Deklaration von Block-variablen. Die deklarierte Variable ist aus dem _Block_ verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` erlaubt die Deklaration von Variablen, deren Wert nicht beabsichtigt ist, sich zu ändern. Die Variable ist aus dem _Block_ verfügbar, in dem sie deklariert wird.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const` Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern nicht _Veränderungen_ des Variablenwerts, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var` Deklarationen können überraschendes Verhalten haben (zum Beispiel sind sie nicht block-scope-geschützt) und werden im modernen JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable ohne die Zuweisung eines Wertes deklarieren, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, da Sie sie sowieso später nicht ändern können.

`let` und `const` deklarierte Variablen besetzen immer noch den gesamten Bereich, in dem sie definiert sind, und befinden sich in einem Bereich, der als [temporale Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist, bevor die tatsächliche Deklarationszeile erreicht wird. Dies hat einige interessante Wechselwirkungen mit der Variablenüberschattung, die in anderen Sprachen nicht vorkommen.

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

In den meisten anderen Sprachen würde dies "1" und "2" protokollieren, da `x` vor der Zeile `const x = 2` immer noch auf den Parameter `x` im höheren Bereich verweisen sollte. In JavaScript würde dies aufgrund der Tatsache, dass jede Deklaration den gesamten Gültigkeitsbereich besetzt, beim ersten `console.log` einen Fehler auslösen: "Kann `x` vor der Initialisierung nicht aufrufen". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie in [dem vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, nicht mit Variablen verbunden. Für mit `let`-deklarierten Variablen können Sie ihren Typ jederzeit durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

Zu den numerischen Operatoren von JavaScript gehören `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Potenzierung). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein Zusammensetzungsgegenstück wie `+=` und `-=`, die sich zu `x = x operator y` ausweiten.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um Inkremente bzw. Dekremente auszuführen. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Zeichenkettenverkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie einer Zahl (oder einem anderen Wert) eine Zeichenkette hinzufügen, wird zuerst alles in eine Zeichenkette konvertiert. Dies könnte Sie überlisten:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Wenn Sie etwas in eine Zeichenkette selbst umwandeln möchten, ist es von Vorteil, eine leere Zeichenkette hinzuzufügen.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` vorgenommen werden. Diese funktionieren sowohl für Zeichenfolgen als auch für Nummern. Für Gleichheit führt der [Doppelgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Dreifachgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Die Doppelgleichheit und Dreifachgleichheit haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitoperatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise arbeiten logische Operatoren nicht nur mit Boolean-Werten — sie arbeiten nach der "Wahrheitsmäßigkeit" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die Operatoren `&&` und `||` verwenden eine Kurzschlusslogik, was bedeutet, dass sie entscheiden, ob sie ihren zweiten Operand ausführen oder nicht, abhängig vom ersten. Dies ist nützlich, um null-Objekte zu überprüfen, bevor Sie ihre Attribute aufrufen:

```js
const name = o && o.getName();
```

Oder um Werte zwischenzuspeichern (wenn falsy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Syntax ist der von C ähnlichen Sprachen sehr ähnlich. Es gibt einige erwähnenswerte Punkte:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie dürfen keine der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind normalerweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional - die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn sie benötigt werden. Es gibt jedoch bestimmte Vorsichtsmaßnahmen, auf die man achten sollte, da im Gegensatz zu Python Semikolons immer noch Teil der Syntax sind.

Für einen detaillierten Blick auf die JavaScript-Syntax siehe die [Referenzseite für die lexikalische Syntax](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Reihe von Kontrollstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden von [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie aneinanderreihen:

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

JavaScript hat kein `elif`, und `else if` ist wirklich nur ein `else`-Zweig, der aus einer einzigen `if`-Anweisung besteht.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleifen. Die erste eignet sich gut für grundlegende Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript's [`for` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie die in C und Java: sie ermöglicht es Ihnen, die Steuerinformationen für Ihre Schleife in einer einzigen Zeile bereitzustellen.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere herausragende for-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), besonders Arrays, iteriert, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerable](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts durchläuft.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch` Anweisung kann für mehrere Zweige basierend auf Gleichheitsprüfungen verwendet werden.

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

Ähnlich wie in C sind Fall-Klauseln konzeptionell die gleichen wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass, wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung zur nächsten Ebene "durchfällt". Sie sind jedoch keine Sprungtabellen - jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur string- oder zahlenbasierte Literale, und sie würden nacheinander ausgewertet, bis eines gleich dem zu vergleichenden Wert ist. Der Vergleich erfolgt zwischen den beiden mit dem `===` Operator.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, das bedeutet, dass Sie sie keinem Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung bearbeitet.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung ausgelöst werden. Viele eingebaute Operationen können ebenfalls ausgelöst werden.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade gefangen haben, nicht feststellen, da alles aus einer `throw`-Anweisung geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler zu geben. Es gibt keinen bedingten Fang in JavaScript - wenn Sie nur einen Fehlertyp bearbeiten möchten, müssen Sie alles fangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

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

Wenn ein Fehler von keiner `try...catch` in der Aufrufkette abgefangen wird, wird das Programm beendet.

Für eine umfassende Liste der Kontrollflussanweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paare betrachtet werden. Als solche ähneln sie:

- Wörterbüchern in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben JavaScript-Objekte keine festen Formen - Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, verändert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) - sogar Array-Indizes, die kanonisch Ganzzahlen sind, sind unter der Haube tatsächlich Strings.

Objekte werden normalerweise mit der Literal-Syntax erstellt:

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

Objekteigenschaften können mit einem Punkt (`.`) oder eckigen Klammern (`[]`) [zugegriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Bei der Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

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

Objekte sind immer Referenzen, sodass außer etwas explizit das Objekt kopiert, Veränderungen an einem Objekt von außen sichtbar sind.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sein werden, da sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen für dasselbe Objekt halten, wäre eine Veränderung an einer Stelle durch eine andere beobachtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr über Objekte und Prototypen siehe die [`Object`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für weitere Informationen zur Objektinitialisierungssyntax, siehe die entsprechende [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details zu Objektprototypen und Vererbung weggelassen, da Sie normalerweise Vererbung mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (von dem Sie vielleicht gehört haben, dass er kompliziert ist). Um mehr darüber zu erfahren, lesen Sie [Vererbung und Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich eine spezielle Art von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mit `[]` Syntax zugegriffen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer um eins größer als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich beliebiger Nummernindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das Array, das wir oben erhalten haben, wird als ein [_dünn besiedeltes Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es unbewohnte Slots in der Mitte gibt, und wird die Engine deoptimieren, indem es von einem Array in eine Hashtabelle umgewandelt wird. Stellen Sie sicher, dass Ihr Array dicht bepflanzt ist!

Indizes außerhalb des Bereichs (out-of-bounds) werfen keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen Wert von `undefined` im Rückgabewert:

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

Arrays können wie in anderen C-ähnlichen Sprachen mit der `for` Schleife durchlaufen werden:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterable sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwenden, die gleichbedeutend mit C++/Java's `for (int x : arr)` Syntax ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays verfügen über eine Fülle von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array iterieren — zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Rückruffunktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten bilden Funktionen die Kernkomponente zum Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter annehmen. Der Funktionskörper kann so viele Anweisungen wie gewünscht enthalten und kann eigene Variablen deklarieren, die lokal für diese Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabeanweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden als sie angeben. Wenn Sie eine Funktion ohne die von ihr erwarteten Parameter aufrufen, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parametersyntaxen. Zum Beispiel erlaubt die [Rest-Parameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller zusätzlichen Parameter, die vom Aufrufer als Array übergeben wurden, ähnlich wie in Python's `*args`. (Da JS keine benannten Parameter auf Sprachebene hat, gibt es kein `**kwargs`.)

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

Im obigen Code enthält die Variable `args` all die Werte, die in die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nachdem_ er deklariert wurde, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten Wert, der in die Funktion übergeben wurde, in der `firstValue`-Variablen und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array besitzen, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _verbreiten_. Zum Beispiel: `avg(...numbers)`.

Wir erwähnten, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, die es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) Syntax, die es erlaubt, ausgelassene Parameter (oder als `undefined` übergebene) Standardwerte zu haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt Ihnen, anonyme Funktionen zu erstellen — das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, sofort einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten aufgerufen wird — das heißt, sie ist semantisch äquivalent zur Deklaration der Funktion mit der `function avg()` Deklarationssyntax.

Es gibt eine weitere Möglichkeit, anonyme Funktionen zu definieren — durch Verwendung eines [Pfeilfunktionsausdrucks](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Pfeilfunktionen sind nicht semantisch äquivalent zu Funktionsausdrücken — für weitere Informationen siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt noch eine andere Verwendungsmöglichkeit für anonyme Funktionen: sie können gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, genannt {{Glossary("IIFE", "Sofort aufgerufener Funktionsausdruck (IIFE)")}}:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie [Emulation privater Methoden mit Closures](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript ermöglicht es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich beim Umgang mit Baumstrukturen, wie sie im Browser-DOM zu finden sind.

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

Der Name, der einem Funktionsausdruck wie oben bereitgestellt wird, ist nur im eigenen Gültigkeitsbereich der Funktion verfügbar. Dies ermöglicht es der Engine, mehr Optimierungen durchzuführen, und führt zu lesbarerem Code. Der Name erscheint auch im Debugger und in einigen Stack-Traces, was Zeit bei der Fehlersuche sparen kann.

Wenn Sie an funktionales Programmieren gewöhnt sind, seien Sie sich der Leistungsimplikationen der Rekursion in JavaScript bewusst. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://de.wikipedia.org/wiki/Tail-Call-Optimierung) vorsieht, hat sie nur JavaScriptCore (verwendet von Safari) implementiert, aufgrund der Schwierigkeit, Stack-Traces wiederherzustellen und Debugbarkeit. Bei tiefgehender Rekursion sollten Sie stattdessen Iteration verwenden, um Stacküberläufe zu vermeiden.

### Funktionen sind First-Class-Objekte

JavaScript-Funktionen sind First-Class-Objekte. Dies bedeutet, dass sie Variablen zugewiesen werden können, als Argumente an andere Funktionen übergeben werden können und von anderen Funktionen zurückgegeben werden können. Zusätzlich unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Closures) ohne explizite Erfassung, was Ihnen ermöglicht, bequem funktionale Programmierstile anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und Sie können ihnen Eigenschaften hinzufügen oder ändern, genau wie wir es zuvor im Abschnitt Objekte gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind in anderen Funktionen erlaubt. Ein wichtiger Punkt von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Gültigkeitsbereich ihrer Elternfunktion zugreifen können:

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

Dies bietet viel Nutzen beim Schreiben gewartbarer Codes. Wenn eine aufgerufene Funktion auf eine oder zwei andere Funktionen angewiesen ist, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen darin verschachteln. Dies hält die Anzahl der Funktionen, die im globalen Gültigkeitsbereich enthalten sind, gering.

Dies ist auch ein guter Gegenmittel gegen die Versuchung, globale Variablen zu verwenden. Beim Schreiben komplexer Codes ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu einem schwer wartbaren Code führt. Verschachtelte Funktionen können Variablen in ihrem Eltern teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zu koppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax, die Java und anderen Sprachen sehr ähnlich ist.

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

JavaScript-Klassen sind einfach Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die Methoden und Eigenschaften enthält, die die Klasse spezifiziert hat. Klassen erzwingen keine Code-Organisation — zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel, wie ad hoc die Erstellung einer Klasse sein kann: es ist einfach ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch Hinzufügen von `static` erstellt. Private Eigenschaften werden durch Hinzufügen eines Hash `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Eigenschaftennamens. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb der Klassenkörper zu lesen — nicht einmal in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu den verschiedenen Klassenmerkmalen können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrones Programmieren

JavaScript ist von Natur aus single-threaded. Es gibt keine [Parallelisierung](https://de.wikipedia.org/wiki/Parallelverarbeitung); nur [Konkurrenz] (https://de.wikipedia.org/wiki/Konkurrente_Datenverarbeitung). Asynchrones Programmieren wird durch eine [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) betrieben, die es ermöglicht, eine Reihe von Aufgaben in die Warteschlange zu stellen und nach ihrer Fertigstellung abzufragen.

Es gibt drei idiomatische Wege, um asynchronen Code in JavaScript zu schreiben:

- Rückruf-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, das ist eine syntaktische Vereinfachung für Promises

Zum Beispiel, hier ist, wie ein Dateilesleseoperation in JavaScript aussehen könnte:

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

Das Kern-Sprache spezifiziert keine asynchronen Programmierfeatures, aber es ist entscheidend, wenn man mit der externen Umgebung interagiert — von [Benutzerberechtigungen fragen](/de/docs/Web/API/Permissions_API), über [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch), bis [Dateien lesen](https://nodejs.org/api/fs.html). Sicherstellen, dass die potenziell langlaufenden Operationen async sind, stellt sicher, dass andere Prozesse weiterhin laufen können, während dieser wartet — zum Beispiel wird der Browser nicht einfrieren, während er auf den Benutzer wartet, um eine Schaltfläche zu klicken, um die Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Zum Beispiel, wenn Sie ein Versprechen haben, können Sie nur über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode auf das eventuale Ergebnis zugreifen. Ebenso kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, der normalerweise eine asynchrone Funktion oder ein Modul ist. Promises sind _niemals blockierend_ — nur die Logik, die vom Ergebnis des Versprechens abhängt, wird verzögert; alles andere wird in der Zwischenzeit weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie möglicherweise Versprechen als [Monaden](<https://de.wikipedia.org/wiki/Monade_(Informatik)>) die mit `then()` abgebildet werden können (sie sind jedoch keine _richtigen_ Monaden, da sie sich selbst auto-flach drücken; d.h. es kann kein `Promise<Promise<T>>` geben).

In der Tat hat das Single-Threaded-Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht aufgrund seines nicht-blockierenden IO, das die Behandlung einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr performant macht. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, werden jedoch weiterhin den Haupt-Thread blockieren. Um echte Parallelität zu erreichen, müssen Sie möglicherweise [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrones Programmieren zu erfahren, können Sie mehr über [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem [asynchronen JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Ausführungsumgebungen unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder ihre URL identifiziert wird. Sie können die {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java usw. ist die Modulauflösung in JavaScript vollständig host-spezifisch — sie basiert normalerweise auf URLs oder Dateipfaden, also funktionieren relative Dateipfade "einfach" und sind relativ zum Pfad des aktuellen Moduls anstelle eines Projektswurzelpfads.

Allerdings bietet die JavaScript-Sprache keine Standardbibliotheksmodule — alle Kernfunktionen werden durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies ist auf die lange Geschichte zurückzuführen, dass JavaScript kein Modulsystem hatte, und die Tatsache, dass die Entscheidung für das Modulsystem einige Änderungen am Ausführungssetup mit sich bringt.

Verschiedene Ausführungsumgebungen können unterschiedliche Modulsysteme verwenden. Beispielsweise verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und ist meist Dateisystem-basiert, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module aus HTTP-URLs aufgelöst werden können.

Für weitere Informationen siehe die [Leitfaden-Seite zu Modulen](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig darauf hingewiesen, dass bestimmte Funktionen _sprachbasiert_ sind, während andere _laufzeitbasiert_ sind.

JavaScript ist eine allgemeine Skriptsprache. Die [Kernsprachen-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Rechenlogik. Sie beschäftigt sich nicht mit Ein-/Ausgabe — in der Tat, ohne zusätzliche laufzeitspezifische APIs (am bemerkenswerten [`console.log()`](/de/docs/Web/API/console/log_static)), wäre das Verhalten eines JavaScript-Programms vollständig unbeeobachtbar.

Eine Laufzeit oder ein Host ist etwas, das Daten an die JavaScript-Engine (den Interpreter) übergibt, zusätzliche globale Eigenschaften bereitstellt und Hooks für die Engine bereitstellt, um mit der Außenwelt zu interagieren. Modulauflösung, das Lesen von Daten, das Drucken von Nachrichten, das Senden von Netzwerk-Anfragen usw. sind alles laufzeitbezogene Operationen. Seit ihrer Einführung wurde JavaScript in verschiedenen Umgebungen angenommen, wie Browser (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Zugang zum Dateisystem](https://nodejs.org/api/fs.html) bereitstellt), usw. JavaScript wurde erfolgreich im Web (welches sein Hauptzweck war), mobilen Apps, Desktop-Apps, serverbasierten Apps, serverlosen Diensten, eingebetteten Systemen und mehr integriert. Während Sie über JavaScript-Kernfunktionen lernen, ist es auch wichtig, hostbereitgestellte Funktionen zu verstehen, um das Wissen anzuwenden. Zum Beispiel können Sie über alle [Webplattform-APIs](/de/docs/Web/API) lesen, die von Browsern implementiert werden und manchmal von Nicht-Browsern.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie sich verschiedene JavaScript-Funktionen mit anderen Sprachen vergleichen. Wenn Sie mehr über die Sprache selbst und die Nuancen jeder Funktion erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Platz- und Komplexitätsgründen weggelassen haben, aber die Sie selbst erkunden können:

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
