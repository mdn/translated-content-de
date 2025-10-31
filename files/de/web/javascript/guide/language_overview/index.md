---
title: Überblick über die JavaScript-Sprache
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßig eingebauten Objekten und Methoden. Seine Syntax basiert auf den Sprachen Java und C – viele Strukturen dieser Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "first-class")}} Objekte sind, die einfach über Ausdrücke erstellt und wie jedes andere Objekt übergeben werden können.

Diese Seite dient als schneller Überblick über verschiedene JavaScript-Sprachfunktionen und richtet sich an Leser mit Vorkenntnissen in anderen Sprachen wie C oder Java.

## Datentypen

Beginnen wir mit den Bausteinen jeder Sprache: den Typen. JavaScript-Programme manipulieren Werte, und all diese Werte gehören einem Typ an. JavaScript bietet sieben _Primitivtypen_:

- [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type): wird für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen) verwendet, außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type): wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type): wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type): `true` und `false` — normalerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Guide/Data_structures#symbol_type): wird zur Erstellung eindeutiger Identifikatoren verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type): zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Guide/Data_structures#null_type): deutet auf einen vorsätzlichen Nicht-Wert hin.

Alles andere wird als ein [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) bezeichnet. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen - sie sind nur eine spezielle Art von Objekten, die aufgerufen werden können.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit-Doppelgenauigkeits-Gleitkommawert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass ganze Zahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Präzisionsverlust dargestellt werden können, und Gleitkommazahlen können bis zu [1.79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. Innerhalb von Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _offensichtlicher Ganzzahl_ ist also in Wirklichkeit _implizit eine Gleitkommazahl_. Aufgrund der IEEE 754-Codierung kann die Gleitkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Bei Operationen, die Ganzzahlen erwarten, wie z.B. bitweise Operationen, wird die Zahl in eine 32-Bit-Ganzzahl konvertiert.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis (binär, oktal, dezimal oder hexadezimal) anzugeben, oder ein Exponenten-Suffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist ein Ganzzahl mit beliebiger Länge. Sein Verhalten ist ähnlich wie bei C-Ganzzahltypen (z.B. wird die Division auf null abgeschnitten), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die standardmäßigen [arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik, usw. BigInts und Nummern können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet standardmäßige mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, eine Zeichenkette in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das die Zeichenkette für eine Ganzzahl analysiert.
- {{jsxref("parseFloat()")}}, das die Zeichenkette für eine Gleitkommazahl analysiert.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die eine Zeichenkette so analysiert, als wäre sie ein Zahlenliteral und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte umfassen auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen werden `NaN` zurückgeben - zum Beispiel, wenn versucht wird, eine nicht-numerische Zeichenkette zu parsen, oder bei der Verwendung von [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einem negativen Wert. Die Division durch null erzeugt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie ihn als Operanden für irgendeine mathematische Operation bereitstellen, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (laut IEEE 754-Spezifikation).

### Zeichenketten

Zeichenketten in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte eine gute Nachricht für jeden sein, der mit Internationalisierung zu tun hatte. Genauer gesagt sind sie [UTF-16 kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Zeichenketten können mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript unterscheidet nicht zwischen Zeichen und Zeichenketten. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach eine Zeichenkette, die aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge einer Zeichenkette (in {{Glossary("Code_unit", "Code-Einheiten")}}) zu finden, greifen Sie auf ihre [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Zeichenketten haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um die Zeichenkette zu manipulieren und Informationen über die Zeichenkette zu erhalten. Da alle Primitiven von Design aus unveränderlich sind, geben diese Methoden neue Zeichenketten zurück.

Der `+` Operator ist für Zeichenketten überladen: Wenn einer der Operanden eine Zeichenkette ist, führt er eine Zeichenkettenverkettung statt einer Zahlenaddition durch. Eine spezielle [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax ermöglicht es, Zeichenketten mit eingebetteten Ausdrücken knapper zu schreiben. Im Gegensatz zu Pythons f-strings oder C#'s interpolierten Zeichenketten verwenden Template Literale Backticks (keine einfachen oder doppelten Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert anzeigt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.

JavaScript hat einen Boolean-Typ, mit möglichen Werten `true` und `false`, die beide Schlüsselworte sind. Jeder Wert kann basierend auf den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Zeichenketten (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Umwandlung automatisch durchführt, wenn es einen Boolean erwartet, z.B. in einer `if`-Anweisung (siehe [Steuerstrukturen](#steuerstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was Werte bedeutet, die in booleschen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird oft verwendet, um eindeutige Identifikatoren zu erstellen. Jedes mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellte Symbol ist garantiert eindeutig. Außerdem gibt es registrierte Symbole, die gemeinsam genutzte Konstanten sind, und bekannte Symbole, die von der Sprache als „Protokolle“ für bestimmte Operationen verwendet werden. Mehr darüber erfahren Sie im [Symbolreferenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

## Variablen

Variablen in JavaScript werden mit einem der drei Schlüsselwörter deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, Block-Level-Variablen zu deklarieren. Die deklarierte Variable ist ab dem _Block_ verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte sich niemals ändern sollen. Die Variable ist ab dem _Block_ verfügbar, in dem sie deklariert ist.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern nicht _Änderungen_ des Variablenwerts, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen aufweisen (zum Beispiel sind sie nicht blocklokal) und werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne einen Initialisierer deklarieren, da Sie sie später ohnehin nicht ändern können.

`let`- und `const`-deklarierte Variablen besetzen immer noch den gesamten Umfang, in dem sie definiert sind, und befinden sich in einem Bereich, der als [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bezeichnet wird, vor der tatsächlichen Deklarationszeile. Dies hat einige interessante Wechselwirkungen mit der Variablenschattung, die in anderen Sprachen nicht vorkommen.

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

In den meisten anderen Sprachen würde dies "1" und "2" protokollieren, da vor der Zeile `const x = 2` `x` immer noch auf den Parameter `x` im äußeren Gültigkeitsbereich verweisen sollte. In JavaScript, da jede Deklaration den gesamten Gültigkeitsbereich besetzt, würde dies einen Fehler bei der ersten `console.log`-Anweisung auslösen: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie in [dem vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, aber nicht mit Variablen assoziiert. Bei `let`-deklarierten Variablen können Sie ihren Typ immer durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Restwert) und `**` (Potenzierung). Werte werden mittels `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuweisungsäquivalent wie `+=` und `-=`, die sich zu `x = x operator y` erweitern.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um zu inkrementieren bzw. zu dekrementieren. Diese können als Präfix- oder Postfixoperatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Zeichenkettenverkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie einer Zahl (oder einem anderen Wert) eine Zeichenkette hinzufügen, wird alles zuerst in eine Zeichenkette konvertiert. Dies könnte Sie überraschen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenkette zu etwas ist eine nützliche Möglichkeit, es selbst in eine Zeichenkette zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl für Zeichenketten als auch für Zahlen funktionieren. Für die Gleichheit führt der [doppelgleich Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm verschiedene Typen übergeben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [dreifachgleich Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der doppelgleich und dreifachgleich-Operator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswert ist, dass logische Operatoren nicht nur mit booleschen Werten arbeiten — sie arbeiten nach der „Wahrhaftigkeit“ des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die Operatoren `&&` und `||` verwenden Kurzschlusslogik, was bedeutet, dass die Ausführung ihres zweiten Operanden von ihrem ersten abhängt. Dies ist nützlich, um null Objekte zu überprüfen, bevor auf deren Attribute zugegriffen wird:

```js
const name = o && o.getName();
```

Oder um Werte zwischenzuspeichern (wenn falsy-Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der C-Familie sehr ähnlich. Es gibt einige Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie dürfen keine der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional - die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Es gibt jedoch bestimmte Vorsichtsmaßnahmen, auf die Sie achten sollten, da Semikolons im Gegensatz zu Python immer noch Teil der Syntax sind.

Für einen detaillierten Blick auf die JavaScript-Grammatik siehe die [Referenzseite für lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Steuerstrukturen

JavaScript hat eine ähnliche Menge an Steuerstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden von [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie verkettet verwenden:

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

JavaScript verfügt über [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist gut für grundlegende Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

Die [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) von JavaScript ist die gleiche wie in C und Java: Sie ermöglicht es Ihnen, die Steuerungsinformationen für Ihre Schleife in einer einzigen Zeile anzugeben.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Elemente, insbesondere Arrays, iteriert, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerable](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

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

Ähnlich wie in C sind Case-Klauseln konzeptionell die gleichen wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass, wenn Sie eine `break`-Anweisung nicht hinzufügen, die Ausführung auf die nächste Ebene "fällt". Sie sind jedoch keine tatsächlichen Sprungtabellen — jeder Ausdruck kann Teil der Case-Klausel sein, nicht nur Zeichen- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis einer dem Wert entspricht, der abgeglichen wird. Der Vergleich erfolgt zwischen den beiden mit dem `===`-Operator.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mithilfe der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung ausgelöst werden. Viele eingebaute Operationen können ebenfalls Fehler auslösen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht erkennen, da alles von einer `throw`-Anweisung geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt keine bedingte Ausnahmebehandlung in JavaScript — wenn Sie nur eine Art von Fehler behandeln möchten, müssen Sie alles erfassen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle neu auslösen.

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

Wenn ein Fehler von keinem `try...catch` im Aufrufstapel abgefangen wurde, wird das Programm beendet.

Für eine umfassende Liste von Steuerflussanweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte kann man sich als Sammlungen von Schlüssel-Wert-Paaren vorstellen. Als solche sind sie ähnlich:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hash-Tabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen - Eigenschaften können jederzeit hinzugefügt, gelöscht, umgeordnet, geändert oder dynamisch abgefragt werden. Objekt-Schlüssel sind immer [Zeichenketten](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) - auch Array-Indizes, die kanonisch Ganzzahlen sind, sind tatsächlich intern Zeichenketten.

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

Objekteigenschaften können [zugänglich](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) gemacht werden, indem man den Punkt (`.`) oder eckige Klammern (`[]`) verwendet. Wenn man die Punktnotation verwendet, muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

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

Eigenschaftszugriffe können verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, sodass, es sei denn, etwas kopiert das Objekt explizit, Änderungen an einem Objekt von außen sichtbar sind.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sind, weil sie unterschiedliche Referenzen darstellen. Wenn Sie zwei Referenzen auf dasselbe Objekt halten, würde eine Veränderung an einem durch das andere beobachtbar sein.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Weitere Informationen zu Objekten und Prototypen finden Sie auf der [`Object`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Weitere Informationen zur Initialisierungssyntax für Objekte finden Sie auf der [entsprechenden Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung weggelassen, weil Sie Vererbung normalerweise mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (von dem Sie vielleicht gehört haben, dass er schwer verständlich ist). Um mehr darüber zu lernen, siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich eine spezielle Art von Objekt. Sie funktionieren sehr wie normale Objekte (numerische Eigenschaften können natürlich nur mit der `[]`-Syntax zugegriffen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer um eins höher als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich willkürlicher Zahlenindizes. Der einzige "Magie" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erhaltene Array wird als [_Sparses Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, da es nicht besetzte Slots in der Mitte gibt, was dazu führt, dass die Engine es von einem Array in eine Hash-Tabelle deoptimiert. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Indizierung außerhalb der Grenzen wirft keinen Fehler. Wenn Sie einen nicht vorhandenen Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente enthalten und können nach Belieben wachsen oder schrumpfen.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der `for`-Schleife durchlaufen werden, wie es in anderen C-ähnlichen Sprachen möglich ist:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterable sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die gleichbedeutend mit C++/Java's `for (int x : arr)`-Syntax ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays verfügen über eine Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array durchlaufen — zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einen Callback auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen die Kernkomponenten zum Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter übernehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann eigene Variablen deklarieren, die auf diese Funktion lokal beschränkt sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabeanweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie erwartet. Wenn Sie eine Funktion aufrufen, ohne die erwarteten Parameter zu übergeben, werden diese auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt mehrere andere Parametersyntaxen. Zum Beispiel erlaubt die [Rest-Parameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller durch den Aufrufer übergebenen zusätzlichen Parameter in einem Array, ähnlich wie Python's `*args`. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es kein `**kwargs`.)

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

Im obigen Code enthält die Variable `args` alle Werte, die an die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nachdem_, wo er erklärt wird, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten Wert, der in die Funktion übergeben wird, in der Variable `firstValue` und die verbleibenden Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array haben, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _streuen_. Beispiel: `avg(...numbers)`.

Wir erwähnten, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objettdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zu implementieren, das es erlaubt, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparametersyntax_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), die es ermöglicht, dass ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript lässt Sie anonyme Funktionen erstellen — das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen in der Regel als Argumente zu anderen Funktionen verwendet, sofort einer Variable zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten aufgerufen wird — das heißt, es ist semantisch gleichbedeutend mit der Deklaration der Funktion mit der `function avg() {}`-Deklarationssyntax.

Es gibt eine andere Möglichkeit, anonyme Funktionen zu definieren — durch Verwendung eines [Pfeilfunktausdrucks](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Pfeilfunktionen sind nicht semantisch gleichwertig zu Funktionsausdrücken — für weitere Informationen siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine weitere Möglichkeit, wie anonyme Funktionen nützlich sein können: Sie können gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, der als {{Glossary("IIFE", "Sofort aufgerufener Funktionsausdruck (IIFE)")}} bezeichnet wird:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie mehr über das [Emulieren privater Methoden mit Closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich beim Umgang mit Baumstrukturen, wie sie im DOM des Browsers zu finden sind.

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

Funktionsausdrücke können auch benannt werden, was es ihnen ermöglicht, rekursiv zu sein.

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

Der Name, der einem Funktionsausdruck wie oben angegeben wird, ist nur im eigenen Geltungsbereich der Funktion verfügbar. Dies ermöglicht mehr Optimierungen durch die Engine und führt zu lesbarerem Code. Der Name erscheint auch im Debugger und in einigen Stack-Traces, was Ihnen Zeit bei der Fehlersuche sparen kann.

Wenn Sie funktionale Programmierung gewohnt sind, beachten Sie die Leistungsimplikationen der Rekursion in JavaScript. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, hat nur JavaScriptCore (verwendet von Safari) sie implementiert, aufgrund der Schwierigkeit, Stack-Traces wiederherzustellen und der Debuggierbarkeit. Bei tiefer Rekursion ziehen Sie in Erwägung, stattdessen Iteration zu verwenden, um Stapelüberläufe zu vermeiden.

### Funktionen sind first-class-Objekte

JavaScript-Funktionen sind first-class-Objekte. Dies bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Guide/Closures) ohne explizite Erfassung, was Ihnen erlaubt, bequem funktionale Programmierstile anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind - wie alles andere in JavaScript - und Sie können Eigenschaften zu ihnen hinzufügen oder ändern, wie wir es früher in dem Abschnitt über Objekte gesehen haben.

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

Dies bietet eine große Menge an Nutzen beim Schreiben von wartbarem Code. Wenn eine aufgerufene Funktion sich auf eine oder zwei weitere Funktionen stützt, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen innerhalb dieser Funktion verschachteln. Dies hält die Anzahl der Funktionen, die sich im globalen Gültigkeitsbereich befinden, gering.

Dies ist auch ein großartiges Gegenmittel zur Versuchung, globale Variablen zu verwenden. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen in ihrem Elternteil teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen miteinander zu verknüpfen, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die der in Sprachen wie Java sehr ähnlich ist.

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

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die von der Klasse spezifizierten Methoden und Eigenschaften enthält. Klassen erzwingen keine Code-Organisation - zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie ad hoc die Erstellung einer Klasse sein kann: es ist nur ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Felder und Methoden werden durch Voranstellen eines Hash-Zeichens `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Elementnamens und unterscheidet ihn von einer normalen, mit einem String beschrifteten Eigenschaft. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keinen Weg, ein privates Element außerhalb des Klassenkörpers zu lesen - nicht einmal in abgeleiteten Klassen.

Für eine detaillierte Anleitung zu verschiedenen Klassenfeatures können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrone Programmierung

JavaScript ist von Natur aus einsträngig. Es gibt keine [Parallelisierung](https://en.wikipedia.org/wiki/Parallel_computing); nur [Nebenläufigkeit](https://en.wikipedia.org/wiki/Concurrent_computing). Asynchrone Programmierung wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) angetrieben, die es ermöglicht, eine Reihe von Aufgaben in die Warteschlange zu stellen und auf deren Abschluss zu warten.

Es gibt drei idiomatische Wege, asynchrone Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, was ein syntaktischer Zucker für Promises ist

Beispielsweise könnte eine Datei-Leseoperation in JavaScript folgendermaßen aussehen:

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

Die Kernsprache spezifiziert keine asynchronen Programmierfunktionen, aber es ist entscheidend, wenn man mit der externen Umgebung interagiert — von [Benutzerberechtigungen anfordern](/de/docs/Web/API/Permissions_API) bis [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch) bis hin zum [Lesen von Dateien](https://nodejs.org/api/fs.html). Wenn möglicherweise lang laufende Operationen asynchron sind, stellt dies sicher, dass andere Prozesse weiterlaufen können, während auf den Abschluss dieser Operation gewartet wird — zum Beispiel wird der Browser nicht einfrieren, während auf das Klicken des Benutzers auf eine Schaltfläche gewartet wird, um eine Berechtigung zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Wenn Sie beispielsweise ein Promise haben, können Sie nur über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode auf das eventuelle Ergebnis zugreifen. Ähnlich kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, was typischerweise eine asynchrone Funktion oder ein Modul ist. Promises blockieren _niemals_ — nur die Logik, die vom Ergebnis des Promises abhängt, wird verschoben; alles andere wird währenddessen weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie vielleicht Promises als [Monaden](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) an, die mit `then()` abgebildet werden können (sie sind jedoch keine _richtigen_ Monaden, da sie sich selbst abflachen; d.h. Sie können nicht `Promise<Promise<T>>` haben).

Tatsächlich hat das einsträngige Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht, aufgrund seiner nicht-blockierenden IO, die den Umgang mit einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr leistungsfähig macht. Rechenintensive Aufgaben, die reines JavaScript sind, blockieren jedoch weiterhin den Hauptthread. Um eine echte Parallelisierung zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrone Programmierung zu erfahren, können Sie über die [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder das [asynchrone JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS)-Tutorial befolgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeitumgebungen unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder ihre URL identifiziert wird. Sie können die {{jsxref("Statements/import", "import")}}- und {{jsxref("Statements/export", "export")}}-Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java usw. ist die Auflösung von JavaScript-Modulen vollständig durch den Host definiert — sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls anstatt zu einem Projekthauptverzeichnis sind.

Die JavaScript-Sprache bietet jedoch keine Standardbibliotheksmodule — alle Kernfunktionalitäten werden durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies ist auf die lange Geschichte von JavaScript zurückzuführen, das kein Modulsystem hatte, und auf die Tatsache, dass das Opt-in in das Modulsystem einige Änderungen an der Laufzeiteinrichtung erfordert.

Verschiedene Laufzeitumgebungen können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und basiert hauptsächlich auf Dateisystemen, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs abgerufen werden können.

Weitere Informationen finden Sie auf der [Leitfaden-Seite zu Modulen](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir immer wieder erwähnt, dass bestimmte Funktionen _sprachebene_ und andere _laufzeitebene_ sind.

JavaScript ist eine universelle Skriptsprache. Die [Kernsprachspezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Berechnungslogik. Sie behandelt keinen Input/Output — tatsächlich ist das Verhalten eines JavaScript-Programms ohne zusätzliche laufzeitebene APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)) vollständig unbeobachtbar.

Eine Laufzeit oder ein Host ist etwas, das Daten an die JavaScript-Engine (den Interpreter) übermittelt, zusätzliche globale Eigenschaften bereitstellt und Hooks bereitstellt, damit die Engine mit der Außenwelt interagieren kann. Modullösung, Datenlesen, Nachrichten drucken, Netzwerkanfragen senden usw. sind alles laufzeitebene Operationen. Seit seiner Einführung wurde JavaScript in verschiedenen Umgebungen angenommen, wie Browsern (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellt), usw. JavaScript wurde erfolgreich in Webanwendungen (was sein primärer Zweck war), mobilen Apps, Desktop-Apps, serverseitigen Apps, serverlosen Anwendungen, eingebetteten Systemen und mehr integriert. Während Sie die Kernfunktionen von JavaScript lernen, ist es auch wichtig, hostbereitgestellte Funktionen zu verstehen, um das Wissen nutzen zu können. Zum Beispiel können Sie über alle [Webplattform-APIs](/de/docs/Web/API) lesen, die von Browsern und manchmal auch von Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick darin, wie verschiedene JavaScript-Funktionen im Vergleich zu anderen Sprachen stehen. Wenn Sie mehr über die Sprache selbst und die Feinheiten jeder Funktion erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Platz und Komplexität weggelassen haben, die Sie jedoch selbst erkunden können:

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
