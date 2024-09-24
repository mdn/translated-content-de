---
title: JavaScript-Sprachübersicht
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Sprachen Java und C — viele Strukturen dieser Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "first-class")}} Objekte sind, die leicht über Ausdrücke erstellt und wie jedes andere Objekt weitergegeben werden können.

Diese Seite dient als schnelle Übersicht über verschiedene JavaScript-Sprachfunktionen, geschrieben für Leser mit Vorkenntnissen in anderen Sprachen wie C oder Java.

## Datentypen

Beginnen wir mit den Bausteinen jeder Sprache: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): verwendet für alle Zahlwerte (Ganzzahlen und Gleitkommazahlen), außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): verwendet für arbiträr große Ganzzahlen.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): wird verwendet, um Text zu speichern.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` — wird üblicherweise für Bedingungslogik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): verwendet, um eindeutige Bezeichner zu erstellen, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): zeigt einen absichtlichen Nicht-Wert an.

Alles andere ist als [Object](/de/docs/Web/JavaScript/Data_structures#objects) bekannt. Häufige Objekttypen umfassen:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen — sie sind nur ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit Doppelgenauigkeits-Gleitkommawert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) dargestellt werden können, ohne an Genauigkeit zu verlieren, und Gleitkommazahlen können bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. Innerhalb von Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Ganzzahl_ ist in der Tat _implizit eine Fließkommazahl_. Aufgrund der IEEE 754-Codierung kann die Fließkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie z.B. bitweise Operationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis anzugeben (binär, oktal, dezimal oder hexadezimal) oder ein Exponenten-Suffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ ist ein Ganzzahltyp mit beliebiger Länge. Sein Verhalten ist ähnlich dem der integer-Typen in C (z.B. wird bei der Division auf Null gekürzt), außer dass er unendlich groß werden kann. BigInts werden mit einem Zahlenliteral und einem `n` Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die standardmäßigen [arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet standardmäßige mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, einen String in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, welches den String auf eine Ganzzahl parst.
- {{jsxref("parseFloat()")}}, welches den String auf eine Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion, die einen String parst, als ob es ein Zahlenliteral wäre, und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Kurzform für `Number()` verwenden.

Zahlenwerte umfassen auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück — zum Beispiel, wenn versucht wird, einen nicht-numerischen String zu parsen, oder wenn [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einen negativen Wert angewendet wird. Division durch Null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operanden in einer mathematischen Operation verwenden, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht zu sich selbst gleich ist (gemäß der IEEE 754-Spezifikation).

### Strings

Strings in JavaScript sind Folgen von Unicode-Zeichen. Dies sollte eine willkommene Nachricht für alle sein, die mit der Internationalisierung zu kämpfen hatten. Genauer gesagt, sie sind [UTF-16-codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können sowohl mit einfachen als auch mit doppelten Anführungszeichen geschrieben werden — JavaScript unterscheidet nicht zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach einen String, der aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings (in {{Glossary("Code_unit", "Codeeinheiten")}}) zu finden, greifen Sie auf seine [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) Eigenschaft zu.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um den String zu manipulieren und Informationen über den String abzurufen. Da alle primitiven Typen von Design aus unveränderlich sind, geben diese Methoden neue Strings zurück.

Der `+` Operator ist für Strings überladen: Wenn einer der Operanden ein String ist, führt er eine String-Verkettung anstelle einer Zahlenaddition durch. Eine spezielle [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) Syntax ermöglicht es Ihnen, Strings mit eingebetteten Ausdrücken prägnanter zu schreiben. Im Gegensatz zu Python-F-Strings oder C#-Interpolationsstrings verwenden Template-Literals Rückwärtzeichen (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), was einen absichtlichen Nicht-Wert anzeigt (und nur über das `null` Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, was eine Abwesenheit von Wert anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Booleanschen Typ, mit möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann entsprechend den folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Konvertierung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Konvertierung stillschweigend vornimmt, wenn ein Boolean erwartet wird, wie z.B. in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was Werte bedeutet, die in einem booleschen Kontext zu `true` bzw. `false` werden.

Booleansche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Funktion erstellt wird, ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, die gemeinsame Konstanten sind, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Mehr dazu können Sie im [Symbolreferenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) nachlesen.

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, Blocklevel-Variablen zu deklarieren. Die deklarierte Variable ist vom umschlossenen _Block_ aus verfügbar.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte nie geändert werden sollen. Die Variable ist von dem _Block_ aus verfügbar, in dem sie deklariert wurde.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern keine _Mutationen_ des Werts der Variablen, wenn sie ein Objekt ist.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen haben (zum Beispiel sind sie nicht blocklokal) und werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, weil Sie sie später ohnehin nicht ändern können.

Mit `let` und `const` deklarierte Variablen belegen immer noch den gesamten Bereich, in dem sie definiert sind, und befinden sich in einer Region, die als [zeitliche tote Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist, bevor die eigentliche Deklarationszeile erreicht wird. Dies hat einige interessante Wechselwirkungen mit der Variablenschattenbildung, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da `x` vor der Zeile `const x = 2` weiterhin Referenz auf den Parameter `x` im oberen Bereich sein sollte. In JavaScript wäre dies jedoch ein Fehler bei der ersten `console.log`: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, nicht aber mit Variablen assoziiert. Bei mit `let` deklarierten Variablen können Sie den Typ durch Neuzuweisung immer ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponentiation). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch einen kombinierten Zuweisungsoperator wie `+=` und `-=`, die sich zu `x = x operator y` erweitern.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um zu inkrementieren bzw. zu dekrementieren. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch String-Verkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie einem String eine Zahl (oder einen anderen Wert) hinzufügen, wird zuerst alles in einen String konvertiert. Dies könnte Sie in Verlegenheit bringen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Etwas ohne Inhalt hinzuzufügen, ist eine nützliche Methode, es in einen String selbst zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl mit Strings als auch mit Zahlen funktionieren. Für die Gleichheit führt der [Doppelgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen übergeben, was manchmal interessante Ergebnisse liefert. Auf der anderen Seite versucht der [Dreifachgleichheitsoperator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird in der Regel bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppelgleichheitsoperator und der Dreifachgleichheitsoperator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren logische Operatoren nicht nur mit Booleschen Werten — sie funktionieren nach der "Wahrheitswert"-Logik des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&` und `||` Operatoren verwenden Kurzschlusslogik, was bedeutet, dass ihr zweiter Operand von dem ersten abhängt. Dies ist nützlich, um null Objekte zu überprüfen, bevor deren Attribute abgerufen werden:

```js
const name = o && o.getName();
```

Oder um Werte zwischenspeichern (wenn falsche Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste der Operatoren siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten insbesondere an der [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

JavaScript-Grammatik ähnelt sehr der C-Familie. Es gibt ein paar Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie können nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional — die Sprache fügt sie [automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn erforderlich. Es gibt jedoch bestimmte Dinge zu beachten, da im Gegensatz zu Python Semikolons immer noch Teil der Syntax sind.

Für einen vertieften Blick auf die JavaScript-Grammatik siehe die [Referenzseite für lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Menge an Kontrollstrukturen wie andere Sprachen in der C-Familie. Bedingte Anweisungen werden durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie miteinander verketten:

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

JavaScript hat kein `elif`, und `else if` ist wirklich nur ein `else` Zweig bestehend aus einer einzigen `if`-Anweisung.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleifen. Die erste ist gut für einfache Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Rumpf der Schleife mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist dieselbe wie die in C und Java: Sie lässt Sie die Steuerinformationen für Ihre Schleife in einer einzigen Zeile bereitstellen.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iterieren, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerable](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts durchläuft.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch` Anweisung kann für mehrere Zweige basierend auf Gleichheitsprüfung verwendet werden.

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

Ähnlich wie in C sind Koffersätze konzeptionell dasselbe wie [labels](/de/docs/Web/JavaScript/Reference/Statements/label), daher wird der Ablauf fortgesetzt, wenn Sie keinen `break`-Satz hinzufügen. Sie sind jedoch keine tatsächlichen Sprungtabellen — jeder Ausdruck kann Teil des `case` Klammerns sein, nicht nur String- oder Zahlenliterale, und sie würden eins nach dem anderen ausgewertet, bis eines den Wert entspricht, der geprüft wird. Der Vergleich erfolgt zwischen den beiden unter Verwendung des `===` Operators.

Anders als einige Sprachen wie Rust, sind Kontrollstromstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

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

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht feststellen, da alles aus einer `throw` Anweisung geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Instanz handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt keinen bedingten Catch in JavaScript — wenn Sie nur eine Art von Fehler behandeln möchten, müssen Sie alles abfangen, den Typ des Fehlers mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

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

Für eine umfassende Liste von Kontrollfluss-Anweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Daher sind sie ähnlich wie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hash-Tabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen — Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, verändert oder dynamisch abgefragt werden. Objekt-Schlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — sogar Array-Indizes, die kanonisch Ganzzahlen sind, sind tatsächlich Strings im Hintergrund.

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

Objekteigenschaften können zugänglich gemacht werden mit [dot (`.`) oder eckigen Klammern (`[]`)](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors). Wenn Sie die Punktnotation verwenden, muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen erlauben die Indizierung des Objekts mit einem dynamischen Schlüsselwert.

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

Eigenschaftszugriff kann aneinandergekettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, daher sind, es sei denn, etwas kopiert das Objekt explizit, Mutationen an einem Objekt für das Außen sichtbar.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sein werden, weil sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen auf dasselbe Objekt haben, würde das Mutieren eines Objekts durch die andere Referenz beobachtbar sein.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr Informationen über Objekte und Prototypen siehe die [`Object` Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen über die Objekterstellungen finden Sie in der [Referenzseite zur Objekterstellungssyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung weggelassen, weil Sie Vererbung normalerweise mit [Klassen](#classes) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (über den Sie gehört haben mögen, dass er schwer zu verstehen ist). Um mehr darüber zu lernen, siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich ein besonderer Typ von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können naturgemäß nur mit `[]`-Syntax zugegriffen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich willkürlicher Zahlenindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben hervorgebrachte Array wird als [_dünn besetztes Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es nicht bewohnte Schlitze in der Mitte gibt und die Engine dazu veranlasst wird, es von einem Array in eine Hashtabelle zu ändern. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Indexierung außerhalb der Grenzen verursacht keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie den Wert `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente haben und können frei wachsen oder schrumpfen.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können wie in anderen C-ähnlichen Sprachen mit der `for`-Schleife durchlaufen werden:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterable sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwenden, die synonym zu C++/Java's `for (int x : arr)` Syntax ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays verfügen über eine Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array durchlaufen — zum Beispiel würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Callback-Funktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen das Kernstück zum Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter haben. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann seine eigenen Variablen deklarieren, die lokal zu dieser Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung kann jederzeit verwendet werden, um einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Return-Anweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie angeben. Wenn Sie eine Funktion ohne Angabe der erwarteten Parameter aufrufen, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als sie erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parameter-Syntaxen. Zum Beispiel erlaubt die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)-Syntax das Erfassen aller zusätzlichen Parameter, die vom Aufrufer in ein Array übergeben werden, ähnlich zu Python's `*args`. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es kein `**kwargs`.)

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

Der Restparameter speichert alle Argumente _nach_ dem Punkt, an dem er deklariert ist, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` wird den ersten Wert, der in die Funktion übergeben wird, in der `firstValue`-Variable speichern und die verbleibenden Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten annimmt und Sie sie bereits in einem Array haben, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _spreizen_. Zum Beispiel: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objektdestructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, das es ermöglicht, Objekte bequemer zu packen und entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) Syntax, die es ermöglicht, dass ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript lässt Sie anonyme Funktionen erstellen — das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente zu anderen Funktionen verwendet, einer Variablen zugewiesen, die verwendet
