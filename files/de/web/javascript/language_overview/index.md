---
title: JavaScript-Sprachübersicht
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar}}

JavaScript ist eine Multi-Paradigma, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Sprachen Java und C - viele Strukturen dieser Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objekt-Prototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "first-class")}} Objekte sind, die leicht über Ausdrücke erstellt und wie jedes andere Objekt weitergegeben werden können.

Diese Seite dient als eine schnelle Übersicht über verschiedene JavaScript Sprachmerkmale, geschrieben für Leser mit Vorkenntnissen in anderen Sprachen, wie C oder Java.

## Datentypen

Lassen Sie uns mit den Bausteinen jeder Sprache beginnen: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primäre Typen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): Wird für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen) verwendet, mit Ausnahme von _sehr_ großen Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): Wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): Wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` - normalerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): Wird zur Erstellung eindeutiger Identifikatoren verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): Zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): Zeigt einen absichtlichen Nichtwert an.

Alles andere wird als ein [Object](/de/docs/Web/JavaScript/Data_structures#objects) betrachtet. Häufige Objekttypen beinhalten:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen - sie sind nur ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Doppelpräzisions-Gleitpunktwert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) dargestellt werden können, ohne Präzisionsverlust, und Gleitkommazahlen bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden können. Innerhalb von Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

So ist eine _scheinbare Ganzzahl_ in der Tat _implizit ein Float_. Wegen der IEEE 754 Kodierung kann manchmal die Gleitkomma-Arithmetik ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie etwa Bitoperationen, wird die Zahl in eine 32-Bit-Ganzzahl konvertiert.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis anzuzeigen (binär, oktal, dezimal oder hexadezimal), oder ein Exponentensuffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ ist eine Ganzzahl beliebiger Länge. Sein Verhalten ist ähnlich wie die Ganzzahltypen in C (z.B. wird bei der Division auf null gekürzt), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n` Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die Standard [arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}} Objekt liefert Standard-Mathematikfunktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, einen String in eine Zahl zu konvertieren:

- {{jsxref("parseInt()")}}, das den String nach einer Ganzzahl parst.
- {{jsxref("parseFloat()")}}, das den String nach einer Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion, die einen String als Zahlenliteral parst und viele verschiedene Zahlendarstellungen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Kurzform für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige Mathematik"-Operationen geben `NaN` zurück - zum Beispiel beim Versuch, einen nicht-numerischen String zu parsen oder beim Benutzen von [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einen negativen Wert. Division durch null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operand zu einer mathematischen Operation bereitstellen, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (laut IEEE 754 Spezifikation).

### Strings

Strings in JavaScript sind Sequenzen von Unicode-Zeichen. Das sollte gute Nachrichten für jeden sein, der sich mit Internationalisierung beschäftigt hat. Genauer gesagt, sie sind [UTF-16 kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können entweder mit einfachen oder doppelten Anführungszeichen geschrieben werden - JavaScript macht keinen Unterschied zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen wollen, verwenden Sie einfach einen String, der aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings (in {{Glossary("Code_unit", "Codeeinheiten")}}) zu finden, greifen Sie auf seine [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) Eigenschaft zu.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um den String zu manipulieren und Informationen über den String abzurufen. Da alle Primitiven von Natur aus unveränderlich sind, geben diese Methoden neue Strings zurück.

Der `+` Operator ist für Strings überladen: Wenn einer der Operanden ein String ist, führt er eine Stringkonkatenation statt einer Zahlenaddition durch. Eine spezielle [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) Syntax ermöglicht es Ihnen, Strings mit eingebetteten Ausdrücken prägnanter zu schreiben. Im Gegensatz zu Pythons f-Strings oder C#'s interpolierten Strings verwenden Template Literale Backticks (keine einfachen oder doppelten Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nichtwert anzeigt (und nur über das `null` Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das die Abwesenheit von Wert anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Boole'schen Typ, mit möglichen Werten `true` und `false` - beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null`, und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Umwandlung stillschweigend durchführt, wenn es einen Boolean erwartet, so wie in einer `if` Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", Werten, die in booleschen Kontexten `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_), und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird oft verwendet, um eindeutige Identifikatoren zu erstellen. Jedes mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Funktion erstellte Symbol ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, die geteilte Konstanten sind, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen genutzt werden. Sie können mehr darüber im [Symbolreferenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem der drei Schlüsselwörter deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const), oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, Block-Variablen zu deklarieren. Die deklarierte Variable steht ab dem _Block_ zur Verfügung, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte nie geändert werden sollen. Die Variable steht ab dem _Block_ zur Verfügung, in dem sie deklariert ist.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const` Deklarationen verhindern nur _Neuzuweisungen_ - sie verhindern keine _Änderungen_ des Wertes der Variable, wenn sie ein Objekt ist.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var` Deklarationen können überraschende Verhaltensweisen haben (zum Beispiel sind sie nicht block-gescoped) und werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const` Variable ohne Initialisierungswert deklarieren, da Sie sie später ohnehin nicht mehr ändern können.

`let` und `const` deklarierte Variablen besetzen immer noch den gesamten Bereich, in dem sie definiert sind, und befinden sich in einer Region, die als [temporäre tote Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist, vor der eigentlichen Deklarationszeile. Dies hat einige interessante Interaktionen mit Variablenüberdeckung, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" protokollieren, da vor der Zeile `const x = 2` `x` immer noch auf den Parameter `x` im oberen Bereich verweisen sollte. In JavaScript, da jede Deklaration den gesamten Bereich einnimmt, würde dies beim ersten `console.log` einen Fehler auslösen: "Cannot access 'x' before initialization". Für weitere Informationen siehe die Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten verknüpft, aber nicht mit Variablen. Für `let`-deklarierte Variablen können Sie ihren Typ immer durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScript's numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponentiation). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuordnungspendant wie `+=` und `-=`, welches sich auf `x = x Operator y` erstreckt.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` zum Inkrementieren bzw. Dekrementieren verwenden. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Stringkonkatenation durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl (oder anderen Wert) hinzufügen, wird zuerst alles in eine Zeichenkette umgewandelt. Dies könnte Sie überraschen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen eines leeren Strings zu etwas ist eine nützliche Methode, um es selbst in einen String zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` gemacht werden, welche sowohl für Zeichenfolgen als auch für Zahlen funktionieren. Für die Gleichheit führt der [Doppelgleich-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm verschiedene Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Dreifachgleich-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird gewöhnlich bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppelgleich- und Dreifachgleich-Operator haben auch ihre Ungleichheitsgegensätze: `!=` und `!==`.

JavaScript hat auch [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [Logikoperatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswert ist, dass logische Operatoren nicht nur mit booleschen Werten funktionieren - sie funktionieren aufgrund der "Wahrhaftigkeit" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die Operatoren `&&` und `||` verwenden Kurzschlusslogik, was bedeutet, dass sie ihren zweiten Operanden nur dann ausführen, wenn der erste dies nicht verhindert. Dies ist nützlich, um nach null-Objekten zu prüfen, bevor Sie auf ihre Attribute zugreifen:

```js
const name = o && o.getName();
```

Oder um Werte zwischenzuspeichern (wenn falsy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren, siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operatorenpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der der C-Familie sehr ähnlich. Es gibt ein paar Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie können nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional - die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Es gibt jedoch bestimmte Dinge, auf die Sie achten sollten, da Semikolons im Gegensatz zu Python immer noch Teil der Syntax sind.

Für einen tiefgehenden Blick auf die JavaScript-Grammatik, siehe die [Referenzseite für lexikale Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Menge von Kontrollstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden unterstützt durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else); Sie können sie miteinander verketten:

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

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist gut für grundlegende Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScript's [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie in C und Java: sie erlaubt es Ihnen, die Steuerinformationen für Ihre Schleife in einer einzigen Zeile bereitzustellen.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei weitere prominente for-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), das über [iterierbare](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Objekte iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), das alle [enumerierbaren](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch`-Anweisung kann für mehrere Zweige basierend auf Gleichheitsprüfungen verwendet werden.

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

Ähnlich wie in C sind Fall-Klauseln konzeptionell dasselbe wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass wenn Sie keine `break` Anweisung hinzufügen, der Ablauf auf die nächste Ebene "weiterfällt". Sie sind jedoch nicht wirklich Sprungtabellen - jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur Zeichenketten- oder Zahlenliterale, und sie würden einzeln bewertet, bis eines dem zu vergleichenden Wert entspricht. Der Vergleich erfolgt mit dem `===` Operator.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variable zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung geworfen werden. Viele eingebaute Operationen können auch werfen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht bestimmen, da alles von einer `throw`-Anweisung geworfen werden kann. Sie können jedoch normalerweise annehmen, dass es sich um eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Instanz handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt kein bedingtes Catch in JavaScript - wenn Sie nur einen bestimmten Fehlertyp behandeln möchten, müssen Sie alles abfangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

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

Wenn ein Fehler von keinem `try...catch` in der Aufrufkette abgefangen wird, wird das Programm beendet.

Für eine umfassende Liste der Kontrollflussanweisungen, siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Als solches sind sie ähnlich:

- Wörterbüchern in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziativen Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen - Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, mutiert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) - sogar Array-Indizes, die kanonisch Ganzzahlen sind, sind tatsächlich Strings unter der Haube.

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

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [aufgerufen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Bei der Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen erlauben das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

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

Eigenschaften können verkettet aufgerufen werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, sodass, es sei denn, etwas kopiert das Objekt explizit, Mutationen an einem Objekt für das Äußere sichtbar sind.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Das bedeutet auch, dass zwei separat erstellte Objekte niemals gleich sein werden (`!==`), da sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen des gleichen Objekts halten, würde die Mutation von einem durch das andere beobachtbar sein.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr Informationen über Objekte und Prototypen, siehe die [`Object` Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen über die Objektsyntax, siehe ihre [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details zu Objektprototypen und Vererbung weggelassen, da Sie normalerweise Vererbung mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (den Sie vielleicht für abstrus gehört haben). Um mehr darüber zu erfahren, sehen Sie sich [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) an.

## Arrays

Arrays in JavaScript sind tatsächlich ein spezieller Typ von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mit `[]` Syntax aufgerufen werden) aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte - Sie können ihnen jede Eigenschaft zuweisen, einschließlich willkürlicher Zahlenindizes. Das einzige "magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das obige Array wird als [_sparse array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es unbesetzte Slots in der Mitte hat, und dies führt dazu, dass die Engine es von einem Array in eine Hashtabelle deoptimiert. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Das Indizieren außerhalb der Grenzen löst keinen Fehler aus. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

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

Arrays können mit der `for`-Schleife durchlaufen werden, wie Sie es in anderen C-ähnlichen Sprachen können:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwenden, die synonym zu C++/Java's `for (int x : arr)` Syntax ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays kommen mit einer Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array durchlaufen - zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) einen Callback auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen der Kernbestandteil zum Verständnis von JavaScript. Die einfachste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter nehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann seine eigenen Variablen deklarieren, die lokal für diese Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabeanweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie spezifizieren. Wenn Sie eine Funktion aufrufen, ohne die erwarteten Parameter zu übergeben, werden diese auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als sie erwartet, ignoriert die Funktion die Extrawerte.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parametersyntaxen. Zum Beispiel erlaubt die [Restparameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller vom Aufrufer übergebenen Extra-Parameter in einem Array, ähnlich wie Pythons `*args`. (Da JS keine benannten Parameter auf Sprachebene hat, gibt es kein `**kwargs`.)

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

Der Restparameter speichert alle Argumente _nach_ seinem Deklarationsort, jedoch nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten in die Funktion eingespeisten Wert in der `firstValue` Variablen und die verbleibenden Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert, die Sie bereits in einem Array haben, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _verteilen_. Beispielsweise: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, das das komfortable Packen und Entpacken von Objekten ermöglicht.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) Syntax, die es erlaubt, ausgelassene Parameter (oder die als `undefined` übergebenen) einen Standardwert zu haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt Ihnen, anonyme Funktionen zu erstellen - das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen normalerweise als Argumente an andere Funktionen übergeben, sofort einer Variablen zugewiesen, die zum Aufrufen der Funktion verwendet werden kann, oder von einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion durch Aufruf von `avg()` mit einigen Argumenten aufrufbar - das heißt, sie ist semantisch äquivalent zur Deklaration der Funktion mit der `function avg() {}` Deklarationssyntax.

Es gibt auch eine andere Methode, um anonyme Funktionen zu definieren - die Verwendung eines [Pfeilfunktionsausdrucks](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Pfeilfunktionen sind semantisch nicht gleichwertig zu Funktionsausdrücken - für mehr Informationen siehe deren [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Anonyme Funktionen können auf eine andere Weise nützlich sein: Sie können gleichzeitig in einem einzigen Ausdruck deklariert und aufgerufen werden, genannt eine {{Glossary("IIFE", "Sofort aufgerufene Funktionsausdruck (IIFE)")}}:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie das Lesen von [private Methoden mit Closures emulieren](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) fortsetzen.

### Rekursive Funktionen

JavaScript erlaubt Ihnen, Funktionen rekursiv zu nennen. Dies ist besonders nützlich für den Umgang mit Baumstrukturen, wie sie im DOM des Browsers zu finden sind.

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

Funktionsausdrücke können auch benannt sein, was es ihnen ermöglicht, rekursiv zu sein.

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

Der in einem Funktionsausdruck wie oben angegebene Name ist nur im eigenen Bereich der Funktion verfügbar. Dies ermöglicht mehr Optimierungen durch die Engine und führt zu besser lesbarem Code. Der Name taucht auch im Debugger und in einigen Stack-Traces auf, was Ihnen Zeit beim Debuggen sparen kann.

Wenn Sie an funktionale Programmierung gewöhnt sind, beachten Sie die Leistungsimplikationen der Rekursion in JavaScript. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, wurde es nur von JavaScriptCore (verwendet von Safari) implementiert, aufgrund der Schwierigkeit, Stapeltraces wiederherzustellen und der Debuggierbarkeit. Für tiefe Rekursion ziehen Sie in Betracht, stattdessen Iteration zu verwenden, um Stapelüberlauf zu vermeiden.

### Funktionen sind First-Class Objekte

JavaScript-Funktionen sind First-Class Objekte. Das bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Closures) von Haus aus ohne explizite Erfassung, was Ihnen ermöglicht, funktionale Programmierstile bequem anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind - wie alles andere in JavaScript - und Sie können Eigenschaften auf ihnen hinzufügen oder ändern, genau wie wir es zuvor im Abschnitt Objekte gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Bereich ihrer Elternfunktion zugreifen können:

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

Dies bietet eine große Menge von Nützlichkeit zur Erstellung von wartbareren Code. Wenn eine aufgerufene Funktion auf ein oder zwei andere Funktionen angewiesen ist, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen innerhalb davon verschachteln. Dies hält die Anzahl der Funktionen, die im globalen Bereich sind, niedrig.

Dies ist auch ein großartiges Gegenmittel zur Versuchung von globalen Variablen. Wenn Sie komplexen Code schreiben, ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen in ihrem Elternteil teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zusammenzukoppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class](/de/docs/Web/JavaScript/Reference/Classes) Syntax, die sehr ähnlich wie Sprachen wie Java ist.

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

JavaScript Klassen sind einfach Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die von der Klasse spezifizierten Methoden und Eigenschaften enthält. Klassen erzwingen keine Codeorganisation - zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie ad hoc die Erstellung einer Klasse sein kann: sie ist nur ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Eigenschaften werden durch Voranstellen eines Rautensymbols `#` (nicht `private`) erstellt. Das Rautensymbol ist ein integraler Bestandteil des Eigenschaftennamens. (Denken Sie an `#` wie an `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen - nicht einmal in abgeleiteten Klassen.

Für eine detaillierte Anleitung zu verschiedenen Klassenfeatures können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrone Programmierung

JavaScript ist von Natur aus einläufig. Es gibt kein [Parallelisieren](https://en.wikipedia.org/wiki/Parallel_computing); nur [Nebenläufigkeit](https://en.wikipedia.org/wiki/Concurrent_computing). Asynchrone Programmierung wird von einer [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) angetrieben, die es ermöglicht, eine Reihe von Aufgaben zu warten und auf Abschluss zu prüfen.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, was syntaktischer Zucker für Promises ist

Zum Beispiel, so könnte eine Datei-Leseoperation in JavaScript aussehen:

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

Die Kernsprache spezifiziert keine asynchronen Programmiermerkmale, aber es ist entscheidend, wenn man mit der externen Umgebung interagiert - von [Benutzerberechtigungen erfragen](/de/docs/Web/API/Permissions_API), über [Daten abfragen](/de/docs/Web/API/Fetch_API/Using_Fetch), bis hin zum [Dateienlesen](https://nodejs.org/api/fs.html). Das Halten der potenziell lang laufenden Operationen asynchron stellt sicher, dass andere Prozesse still weiterlaufen können, während dieser eine wartet - zum Beispiel wird der Browser nicht einfrieren, während auf den Klick eines Benutzers gewartet wird, um Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu ermitteln. Wenn Sie beispielsweise ein Promise haben, können Sie nur auf das letztendliche Ergebnis über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) Methode zugreifen. Genauso kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwenden werden, der normalerweise eine asynchrone Funktion oder ein Modul ist. Promises sind _niemals blockierend_ - nur die Logik, die von dem Ergebnis des Promises abhängt, wird verschoben; alles andere wird unterdessen weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, könnten Sie Promises als [Monaden](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) erkennen, die mit `then()` abgebildet werden können (allerdings sind sie keine _richtigen_ Monaden, weil sie automatisch abgeflacht werden; d.h. Sie können kein `Promise<Promise<T>>` haben).

In der Tat hat das einläufige Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht, dank seiner nicht-blockierenden IO, die es ermöglicht, eine große Anzahl von Datenbank- oder Dateisystemanfragen sehr performant zu bearbeiten. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, werden den Hauptthread jedoch weiterhin blockieren. Um echtes Parallelisieren zu erreichen, müssen Sie möglicherweise [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrone Programmierung zu erfahren, können Sie über [das Verwenden von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem [asynchronen JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein modulares System, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist normalerweise eine Datei, identifiziert durch seinen Dateipfad oder URL. Sie können die {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java usw. wird die Modulauflösung in JavaScript vollständig vom Host definiert - sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls anstelle eines Projekt-Stammverzeichnisses sind.

Allerdings bietet die JavaScript-Sprache keine Standardbibliotheksmodule - alle Kernfunktionen werden von globalen Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies liegt an der langen Geschichte, dass JavaScript ein modulares System fehlte und daran, dass das Opt-in in das modulare System einige Änderungen in der Laufzeitumgebung beinhaltet.

Verschiedene Laufzeiten können unterschiedliche Modulsysteme verwenden. Zum Beispiel, [Node.js](https://nodejs.org/en/) verwendet den Paketmanager [npm](https://www.npmjs.com/) und basiert hauptsächlich auf dem Dateisystem, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Für mehr Informationen, siehe die [Module Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Im Verlauf dieser Seite haben wir ständig erwähnt, dass bestimmte Merkmale _sprachebene_ sind, während andere _laufezeit_-Ebene sind.

JavaScript ist eine allgemeine Skriptsprache. Die [Kernsprache-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Rechenlogik. Es behandelt keine Eingaben/Ausgaben - in der Tat, ohne zusätzliche run-time-Level APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)), ist das Verhalten eines JavaScript-Programms völlig unobservable.

Eine Laufzeit oder ein Host ist etwas, das Daten an die JavaScript-Engine (den Interpreter) füttert, zusätzliche globale Eigenschaften bereitstellt und Haken für die Engine bereitstellt, um mit der Außenwelt zu interagieren. Modulauflösung, Datenlesen, Nachrichten drucken, Netzwerkanforderungen senden usw. sind alle Laufzeit-Level-Operationen. Seit seiner Gründung wurde JavaScript in verschiedenen Umgebungen übernommen, wie etwa Browsern (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) zur Verfügung stellen), Node.js (das APIs wie [Dateisystemzugang](https://nodejs.org/api/fs.html) bereitstellt) usw. JavaScript wurde erfolgreich in Web (was sein primärer Zweck war), mobilen Apps, Desktop-Apps, serverseitigen Apps, serverlosen, eingebetteten Systemen und mehr integriert. Während Sie über JavaScript-Kernmerkmale lernen, ist es auch wichtig, hostbereitgestellte Merkmale zu verstehen, um das Wissen anzuwenden. Zum Beispiel können Sie über alle [Web-Plattform-APIs](/de/docs/Web/API) lesen, die von Browsern und manchmal Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Merkmale im Vergleich zu anderen Sprachen stehen. Wenn Sie mehr über die Sprache selbst und die Feinheiten jedes Merkmals erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Platz und Komplexität weggelassen haben, aber die Sie selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
