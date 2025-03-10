---
title: JavaScript-Sprachübersicht
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf den Sprachen Java und C — viele Strukturen aus diesen Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "erstklassige Objekte")}} sind, die über Ausdrücke leicht erstellt und wie jedes andere Objekt übergeben werden können.

Diese Seite dient als schnelle Übersicht über verschiedene JavaScript-Sprachfunktionen, geschrieben für Leser mit Hintergrundwissen in anderen Sprachen wie C oder Java.

## Datentypen

Lassen Sie uns mit den Bausteinen jeder Sprache beginnen: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type): Verwendet für alle Zahlenwerte (Ganzzahlen und Gleitkommazahlen), außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type): Verwendet für beliebig große Ganzzahlen.
- [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type): Verwendet um Text zu speichern.
- [Boolean](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type): `true` und `false` — normalerweise verwendet für bedingte Logik.
- [Symbol](/de/docs/Web/JavaScript/Guide/Data_structures#symbol_type): Verwendet zur Erstellung eindeutiger Identifikatoren, die nicht kollidieren werden.
- [Undefined](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type): Zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Guide/Data_structures#null_type): Zeigt einen beabsichtigten Nicht-Wert an.

Alles andere wird als [Objekt](/de/docs/Web/JavaScript/Guide/Data_structures#objects) bezeichnet. Häufige Objekttypen umfassen:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind keine besonderen Datenstrukturen in JavaScript — sie sind nur ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit-Doppelpräzisions-Gleitpunktwert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Verlust der Präzision dargestellt werden können, und Gleitkommazahlen bis zu [1.79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden können. Innerhalb der Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Integer_ ist in Wirklichkeit _implizit ein Float_. Aufgrund der IEEE 754-Codierung kann Gleitkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie Bit-Operationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis anzuzeigen (binär, oktal, dezimal oder hexadezimal) oder ein Exponentsuffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist eine Ganzzahl beliebiger Länge. Sein Verhalten ist ähnlich wie bei C's Ganzzahltypen (z.B. wird bei Division auf Null abgeschnitten), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix spezifiziert.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht vermischt werden.

Das {{jsxref("Math")}}-Objekt bietet standardmäßige mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, eine Zeichenkette in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das die Zeichenkette als Ganzzahl analysiert.
- {{jsxref("parseFloat()")}}, das die Zeichenkette als Gleitkommazahl analysiert.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die eine Zeichenkette so analysiert, als ob sie ein Zahlenliteral wäre und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte umfassen auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück — zum Beispiel, wenn versucht wird, eine nicht numerische Zeichenkette zu analysieren, oder wenn [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) auf einem negativen Wert verwendet wird. Division durch Null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operanden für eine mathematische Operation bereitstellen, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (gemäß IEEE 754-Spezifikation).

### Zeichenketten

Zeichenketten in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte für jeden, der mit Internationalisierung zu tun hatte, eine willkommene Nachricht sein. Genauer gesagt, sie sind [UTF-16 codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Zeichenketten können mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript unterscheidet nicht zwischen Zeichen und Zeichenketten. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach eine Zeichenkette, die aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge einer Zeichenkette (in {{Glossary("Code_unit", "Codeeinheiten")}}) zu finden, greifen Sie auf ihre [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Zeichenketten haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um die Zeichenkette zu manipulieren und Informationen über die Zeichenkette zu erhalten. Weil alle Primitivwerte von Design her unveränderlich sind, geben diese Methoden neue Zeichenketten zurück.

Der `+`-Operator ist für Zeichenketten überladen: Wenn einer der Operanden eine Zeichenkette ist, führt er eine Zeichenkettenverkettung statt einer numerischen Addition durch. Eine spezielle [Vorlagenliteral](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax ermöglicht es Ihnen, Zeichenketten mit eingebetteten Ausdrücken prägnanter zu schreiben. Anders als bei Pythons f-strings oder C#'s interpolierten Zeichenketten verwenden Vorlagenliterale Backticks (nicht einzelne oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen beabsichtigten Nicht-Wert anzeigt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen eines Wertes anzeigt. Es gibt viele Möglichkeiten, um `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.

JavaScript hat einen Boole-Typ, mit möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Booleschen Wert umgewandelt werden:

1. `false`, `0`, leere Zeichenketten (`""`), `NaN`, `null` und `undefined` werden alle `false`.
2. Alle anderen Werte werden `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Konvertierung stillschweigend durchführt, wenn es einen Booleschen Wert erwartet, wie beispielsweise in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", was bedeutet, dass Werte in booleschen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird häufig verwendet, um eindeutige Identifikatoren zu erstellen. Jedes mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellte Symbol ist garantiert eindeutig. Darüber hinaus gibt es registrierte Symbole, die gemeinsame Konstanten sind, und bekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Weitere Informationen finden Sie im [Symbole-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` erlaubt es, block-level Variablen zu deklarieren. Die deklarierte Variable ist aus dem _Block_ zugänglich, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` erlaubt es, Variablen zu deklarieren, deren Werte nie geändert werden sollen. Die Variable ist in dem _Block_ verfügbar, in dem sie deklariert wurde.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern nicht die _Änderungen_ des Wertes der Variable, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen haben (zum Beispiel sind sie nicht block-gescoped), und sie werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierung deklarieren, da Sie sie später ohnehin nicht ändern können.

`let`- und `const`-deklarierte Variablen nehmen den gesamten Bereich ein, in dem sie definiert sind, und befinden sich in einem Bereich, der als [temporale Toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bezeichnet wird, bevor die eigentliche Deklarationszeile erfolgt. Dies hat einige interessante Wechselwirkungen mit Variablenüberschattung, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da vor der `const x = 2`-Zeile `x` immer noch auf den Parameter `x` im oberen Bereich verweisen sollte. In JavaScript, weil jede Deklaration den gesamten Bereich einnimmt, würde dies bei dem ersten `console.log` einen Fehler auslösen: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, aber nicht mit Variablen verbunden. Für `let`-deklarierte Variablen können Sie ihren Typ durch Neuvergabe jederzeit ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponenzierung). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuweisungsgegenstück wie `+=` und `-=`, die sich zu `x = x operator y` erweitern.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` zum Inkrementieren bzw. Dekrementieren verwenden. Diese können als Präfix- oder Postfixoperatoren verwendet werden.

Der [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Zeichenkettenverkettung durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl (oder einem anderen Wert) hinzufügen, wird alles zuerst in eine Zeichenkette umgewandelt. Dies könnte Sie manchmal in die Irre führen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenkette zu etwas ist eine nützliche Methode, es selbst in eine Zeichenkette umzuwandeln.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl für Zeichenketten als auch für Zahlen funktionieren. Für Gleichheit führt der [Doppel-Gleich-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typkoersion durch, wenn Sie ihm verschiedene Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Dreifach-Gleich-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typkoersion und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppel-Gleich- und Dreifach-Gleich-Operator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Insbesondere funktionieren logische Operatoren nicht nur mit booleschen Werten — sie funktionieren anhand der "Wahrheitsmäßigkeit" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&` und `||` Operatoren verwenden Kurzschlusslogik, was bedeutet, dass die Ausführung ihres zweiten Operandens von dem ersten abhängt. Dies ist nützlich zum Überprüfen auf Nullobjekte, bevor deren Attribute zugegriffen werden:

```js
const name = o && o.getName();
```

Oder zum Cachen von Werten (wenn falsy-Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren, siehe die [Leitfadenseite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operatorprecedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der der C-Familie sehr ähnlich. Es gibt einige Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, aber sie dürfen nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Strichpunkte sind in JavaScript optional — die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wenn nötig. Allerdings gibt es bestimmte Vorbehalte, die zu beachten sind, da im Gegensatz zu Python Strichpunkte immer noch Teil der Syntax sind.

Für einen ausführlichen Blick auf die JavaScript-Grammatik, siehe die [Referenzseite für lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Menge an Kontrollstrukturen wie andere Sprachen in der C-Familie. Bedingte Aussagen werden von [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie miteinander verketten:

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

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist nützlich für grundlegendes Schleifen; die zweite ist für Schleifen, bei denen der Schleifenrumpf mindestens einmal ausgeführt werden soll:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie in C und Java: Sie ermöglicht es, die Kontrollinformationen für Ihre Schleife in einer einzigen Zeile anzugeben.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei weitere prominente for-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerable](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)-Eigenschaften eines Objekts besucht.

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

Ähnlich wie in C sind Case-Klauseln konzeptionell die gleichen wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), daher wird die Ausführung auf die nächstuntere Ebene "durchfallen", wenn Sie keine `break`-Anweisung hinzufügen. Sie sind jedoch keine tatsächlichen Sprungtabellen — jeder Ausdruck kann Bestandteil der `case`-Klausel sein, nicht nur Zeichenketten- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis einer gleich dem Wert ist, der verglichen wird. Der Vergleich erfolgt zwischen den beiden mittels des `===` Operators.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Aussagen, was bedeutet, dass Sie sie nicht einem Wert zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

Fehler in JavaScript werden mit der [try...catch]-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [throw]-Anweisung ausgelöst werden. Viele eingebauten Operationen können ebenfalls auslösen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht feststellen, da alles von einer `throw`-Anweisung ausgelöst werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine Instanz von [`Error`] handelt, wie im obigen Beispiel. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`] und [`RangeError`], die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt kein bedingtes Fangen in JavaScript — wenn Sie nur einen bestimmten Fehlertyp abfangen möchten, müssen Sie alles abfangen, den Typ des Fehlers mit [`instanceof`] prüfen und dann die anderen Fälle erneut auslösen.

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

Für eine umfassende Liste von Kontrollflussanweisungen siehe den [Referenzabschnitt].

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. Insofern ähneln sie:

- Wörterbüchern in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen — Eigenschaften können jederzeit hinzugefügt, gelöscht, umgeordnet, geändert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Strings] oder [Symbole] — selbst Array-Indizes, die eigentlich Ganzzahlen sind, sind intern Zeichenketten.

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

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [zugegriffen werden]. Wenn die Punktnotation verwendet wird, muss der Schlüssel ein gültiger [Bezeichner] sein. Eckige Klammern hingegen erlauben es, das Objekt mit einem dynamischen Schlüsselwert zu indizieren.

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

Eigenschaftszugriff kann verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, daher sind Änderungen an einem Objekt sichtbar, es sei denn, etwas kopiert das Objekt explizit.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Das bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sind, da sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen auf dasselbe Objekt halten, wäre das Ändern eines Objekts durch das andere sichtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Weitere Informationen zu Objekten und Prototypen finden Sie auf der [`Object`-Referenzseite]. Weitere Informationen zur Objekterstellersyntax finden Sie auf der [Referenzseite].

Diese Seite hat alle Details zu Objektprototypen und Vererbung weggelassen, da Sie normalerweise die Vererbung mit [Klassen] ohne Berührung des zugrunde liegenden Mechanismus (den Sie möglicherweise als abstrus gehört haben) erreichen können. Um mehr darüber zu erfahren, lesen Sie [Vererbung und die Prototypenkette].

## Arrays

Arrays in JavaScript sind eigentlich eine besondere Art von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlicherweise nur mit der `[]`-Syntax zugegriffen werden), aber sie haben eine magische Eigenschaft namens `length`. Dies ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich beliebiger Zahlenindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das obige Array wird als [_sparse array_] bezeichnet, da es unbewohnte Slots in der Mitte gibt, die die Engine dazu veranlassen, es von einem Array in eine Hashtabelle zu deoptimieren. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Indexierung außerhalb der Grenzen wirft keinen Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente haben und beliebig wachsen oder schrumpfen.

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

Oder, da Arrays iterable sind, können Sie die [`for...of`] Schleife verwenden, die synonym zu C++/Java's `for (int x : arr)` Syntax ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays bieten eine Vielzahl von [Array-Methoden]. Viele von ihnen würden das Array iterieren — zum Beispiel würde [`map()`] einen Rückruf auf jedes Array-Element anwenden und ein neues Array zurückgeben:

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

Eine JavaScript-Funktion kann 0 oder mehr Parameter haben. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann seine eigenen Variablen deklarieren, die lokal zu dieser Funktion sind. Die [`return`]-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückkehr-Anweisung verwendet wird (oder einer leeren Rückkehr ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern als erwartet aufgerufen werden. Wenn Sie eine Funktion ohne Übergabe der erwarteten Parameter aufrufen, werden diese auf `undefined` gesetzt. Wenn Sie mehr Parameter als erwartet übergeben, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parametergroßen verfügbar. Zum Beispiel ermöglicht die [Restparameter-Syntax] das Sammeln aller zusätzlichen vom Aufrufer übergebenen Parameter in einem Array, ähnlich wie Pythons `*args`. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es kein `**kwargs`.)

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

Im obigen Code speichert die Variable `args` alle Werte, die in die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ seiner Deklaration, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten in die Funktion übergebenen Wert in der Variable `firstValue` und die verbleibenden Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array haben, können Sie die [Spread-Syntax] im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _entfalten_. Beispielsweise: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objektdestrukturierung] zu implementieren, was es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_]-Syntax, die es ermöglicht, dass ausgelassene Parameter (oder diese, die als `undefined` übergeben werden) einen Standardwert haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript ermöglicht es Ihnen, anonyme Funktionen — das heißt, Funktionen ohne Namen — zu erstellen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, sofort einer Variablen zugewiesen, die zum Aufrufen der Funktion verwendet werden kann oder von einer anderen Funktion zurückgegeben werden.

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

Dadurch wird die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten angerufen wird — das heißt, sie ist semantisch äquivalent zur Deklaration der Funktion mit der `function avg() {}`-Deklarationssyntax.

Es gibt eine weitere Möglichkeit, anonymen Funktionen — using an [arrow function expression] — zu definieren.

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

Pfeilfunktionen sind nicht semantisch gleichwertig zu Funktion-Ausdrücken — weitere Informationen finden Sie auf der [Referenzseite].

Es gibt eine andere Möglichkeit, wie anonyme Funktionen nützlich sein können: sie können gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, genannt [Immediate Invoked Function Expression (IIFE)].

```js
(function () {
  // …
})();
```

Für die Anwendungsfälle von IIFEs können Sie [Emulierung privater Methoden mit Closures] lesen.

### Rekursive Funktionen

JavaScript ermöglicht es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich, um mit Baumstrukturen umzugehen, wie sie im Browser-DOM gefunden werden können.

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

Funktion-Ausdrücke können ebenfalls benannt werden, was es ihnen ermöglicht, rekursiv zu sein.

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

Der fuction name, der in einem Funktionsausdruck wie oben angegeben ist, ist nur für den eigenen Bereich der Funktion verfügbar. Dies ermöglicht mehr Optimierungen durch die Engine und führt zu lesbarerem Code. Der Name erscheint auch im Debugger und in einigen Stack-Traces, was Ihnen beim Debuggen Zeit sparen kann.

Wenn Sie funktionaler Programmierung gewohnt sind, seien Sie sich der Leistungsimplikationen der Rekursion in JavaScript bewusst. Obwohl die Sprachspezifikation [Tail-Call-Optimierung] spezifiziert, hat nur JavaScriptCore (verwendet von Safari) sie implementiert, aufgrund der Schwierigkeit, Stack-Traces und Debugging-Werkzeuge zu erholen. Für tiefe Rekursion sollten Sie stattdessen eine Iteration verwenden, um einen Stapelüberlauf zu vermeiden.

### Funktionen sind erstklassige Objekte

JavaScript-Funktionen sind erstklassige Objekte. Das bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures] von Haus aus, ohne explizites Erfassen, was es Ihnen bequem ermöglicht, funktionale Programmierstile anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und Sie können Eigenschaften an ihnen hinzufügen oder ändern, genauso wie wir es zuvor im Abschnitt Objekte gesehen haben.

### Interne Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von geschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Bereich ihrer übergeordneten Funktionen zugreifen können:

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

Dies bietet eine große Menge an Nutzen beim Schreiben von wartbarem Code. Wenn eine aufgerufene Funktion von ein oder zwei anderen Funktionen abhängt, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen darin verschachteln. Dadurch wird die Anzahl der im globalen Bereich vorhandenen Funktionen reduziert.

Dies ist auch ein großartiges Mittel gegen die Verlockung von globalen Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Geschachtelte Funktionen können Variablen in ihrem übergeordneten Bereich teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zusammenzukuppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [class]-Syntax, die Sprachen wie Java sehr ähnlich ist.

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

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`]-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die von der Klasse spezifizierten Methoden und Eigenschaften enthält. Klassen erzwingen keine Codeorganisation — zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie zufällig die Erstellung einer Klasse sein kann: Es ist nur ein Ausdruck, der aus einem Pfeilfunktion zurückgegeben wird. Dieses Muster wird [mixin] genannt.

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

Statische Eigenschaften werden durch `static` erstellt. Private Eigenschaften werden durch ein hash `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Eigenschaftenamens. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb der Klassenkörper zu lesen — nicht einmal in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu verschiedenen Klassenmerkmalen können Sie die [Leitfadenseite] lesen.

## Asynchrones Programmieren

JavaScript ist von Natur aus einspurig. Es gibt keine [Parallelisierung]; nur [Nebenläufigkeit]. Asynchronisches Programmieren wird von einer [Ereignisschleife] angetrieben, die es einem Satz von Aufgaben ermöglicht, in die Warteschlange gestellt und auf Fertigstellung überprüft zu werden.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Rückrufbasiert (wie [`setTimeout()`])
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, das eine syntaktische Zuckermenge für Versprechen ist

Zum Beispiel könnte so ein Datei-Ladevorgang in JavaScript aussehen:

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

Die Kernsprache spezifiziert keine asynchronen Programmiermerkmale, aber es ist entscheidend, wenn man mit der externen Umgebung interagiert — von [Benutzererlaubnisanfragen], über [Datenabruf], bis hin zum [Lesen von Dateien]. Das Halten der möglicherweise lang andauernden Operationen asynchron stellt sicher, dass andere Prozesse weiterhin laufen können, während diese auf Antwort warten — zum Beispiel wird der Browser nicht einfrieren, während er auf den Benutzer wartet, um eine Schaltfläche zu klicken, um die Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Wenn Sie zum Beispiel ein Versprechen haben, können Sie nur über die [`then()`]-Methode auf das endgültige Ergebnis zugreifen. Ähnlich kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, was typischerweise eine asynchrone Funktion oder ein Modul ist. Versprechen sind _niemals blockierend_ — nur die Logik, die von dem Versprechensergebnis abhängt, wird verschoben; alles andere wird in der Zwischenzeit weiterhin ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie Versprechen möglicherweise als [Monaden] an, die mit `then()` abgebildet werden können (sie sind jedoch keine _richtigen_ Monaden, da sie automatisch flachen; d.h. Sie können kein `Promise<Promise<T>>` haben).

Tatsächlich hat das einspurige Modell Node.js zu einer beliebten Wahl für die serverseitige Programmierung gemacht, aufgrund seines nicht-blockierenden IO, was das Handling einer großen Anzahl von Datenbank- oder Dateisystemanforderungen sehr performant macht. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, blockieren jedoch weiterhin den Hauptthread. Um echtes Parallelisieren zu erreichen, müssen Sie möglicherweise [worker] verwenden.

Um mehr über asynchrones Programmieren zu erfahren, können Sie über [Versprechensverwendung] lesen oder dem [asynchronen JavaScript] Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder ihre URL identifiziert wird. Sie können die {{jsxref("Statements/import", "import")}}- und {{jsxref("Statements/export", "export")}}-Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Anders als Haskell, Python, Java usw., basiert die Modulauflösung in JavaScript vollständig auf dem Host — sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls sind, anstatt zu einem Projektstammpfad.

Die JavaScript-Sprache bietet jedoch keine Standardbibliotheksmodule — alle Kernfunktionalitäten werden durch globale Variablen wie [`Math`] und [`Intl`] bereitgestellt. Dies liegt an der langen Geschichte von JavaScript, das kein Modulsystem hatte, und der Tatsache, dass das Einrichten in das Modulsystem einige Änderungen an der Laufzeitumgebung erfordert.

Unterschiedliche Laufzeiten können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js] den Paketmanager [npm] und ist größtenteils dateibasierend, während [Deno] und Browser vollständig URL-basiert sind und Module von HTTP-URLs auflösen können.

Für weitere Informationen siehe die [Modulleitfadenseite].

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Merkmale _sprachebenen-_- sind, während andere _laufzeitmäßig_ sind.

JavaScript ist eine allgemeine Skriptsprache. Die [Kernelement-Spezifikation] konzentriert sich auf reine Berechnungslogik. Sie befasst sich nicht mit Ein-/Ausgabe — ohne zusätzliche laufzeitmäße APIs (insbesondere [`console.log()`]), ist das Verhalten eines JavaScript-Programms vollständig nicht beobachtbar.

Eine Laufzeit, oder ein Host, ist etwas, das dem JavaScript-Engine (dem Interpreter) Daten zuführt, zusätzliche globale Eigenschaften bereitstellt und Haken für den Engine bereitstellt, um mit der Außenwelt zu interagieren. Modulauflösung, Lesen von Daten, Drucken von Nachrichten, Senden von Netzwerkabrufen usw. sind alle laufzeitmäßige Operationen. Seit seiner Einführung wurde JavaScript in verschiedenen Umgebungen, wie Browsern (die APIs wie [DOM] bereitstellen), Node.js (das APIs wie [Zugriff auf das Dateisystem] bereitstellt) usw., übernommen. JavaScript wurde erfolgreich in Web (was sein Hauptzweck war), mobilen Anwendungen, Desktop-Anwendungen, serverseitigen Anwendungen, serverlosen Anwendungen, eingebetteten Systemen und mehr integriert. Während Sie über JavaScript-Kernfunktionen lernen, ist es auch wichtig, hostbereitgestellte Funktionen zu verstehen, um das Wissen nutzen zu können. Beispielsweise können Sie mehr über alle [Webplattform-APIs] lesen, die von Browsern und manchmal auch Nicht-Browsern implementiert werden.

## Weitere Erkundungen

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Funktionen mit anderen Sprachen vergleichbar sind. Wenn Sie mehr über die Sprache selbst und die Nuancen jedes Merkmals erfahren möchten, können Sie den [JavaScript-Leitfaden] und die [JavaScript-Referenz] lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aus Platz- und Komplexitätsgründen weggelassen haben, aber Sie können diese selbst erkunden:

- [Vererbung und die Prototypenkette]
- [Closures]
- [Reguläre Ausdrücke]
- [Iteration]
