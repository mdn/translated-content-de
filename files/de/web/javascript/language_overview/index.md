---
title: JavaScript-Sprachübersicht
slug: Web/JavaScript/Language_overview
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar}}

JavaScript ist eine mehrparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Ihre Syntax basiert auf Java und C — viele Strukturen aus diesen Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen [First-Class](/de/docs/Glossary/First-class_Function) Objekte sind, die einfach durch Ausdrücke erstellt und wie jedes andere Objekt herumgereicht werden können.

Diese Seite dient als schnelle Übersicht über verschiedene JavaScript-Sprachfunktionen, verfasst für Leser mit Hintergrund in anderen Sprachen wie C oder Java.

## Datentypen

Beginnen wir mit den Bausteinen jeder Sprache: den Datentypen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle einem Typ an. JavaScript bietet sieben _primitive Datentypen_:

- [Number](/de/docs/Web/JavaScript/Data_structures#number_type): Wird für alle Zahlenwerte (Integer und Gleitkomma) außer für _sehr_ große ganze Zahlen verwendet.
- [BigInt](/de/docs/Web/JavaScript/Data_structures#bigint_type): Wird für beliebig große ganze Zahlen verwendet.
- [String](/de/docs/Web/JavaScript/Data_structures#string_type): Wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Data_structures#boolean_type): `true` und `false` — üblicherweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Data_structures#symbol_type): Wird zur Erstellung eindeutiger Bezeichner verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Data_structures#undefined_type): Weist darauf hin, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Data_structures#null_type): Weist auf einen absichtlichen Nicht-Wert hin.

Alles andere ist als ein [Object](/de/docs/Web/JavaScript/Data_structures#objects) bekannt. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Date")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind keine speziellen Datenstrukturen in JavaScript — sie sind einfach ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit-Doppelpräzisions-Gleitkommawert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass ganze Zahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ohne Verlust an Präzision dargestellt werden können, und Gleitkommazahlen bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden können. Innerhalb der Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und ganzen Zahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Integer_ ist daher in Wirklichkeit _implizit ein Float_. Aufgrund der IEEE 754-Codierung kann manchmal die Gleitkomma-Arithmetik ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die ganze Zahlen erwarten, wie Bitweisenoperationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe zur Angabe der Basis (binär, oktal, dezimal oder hexadezimal) oder ein Exponentensuffix haben.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist ein Ganzzahltyp von beliebiger Länge. Sein Verhalten ist ähnlich wie bei C's Ganzzahltypen (z.B. wird die Division auf Null gekürzt), außer dass er unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix spezifiziert.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Rest-Arithmetik etc. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet Standard-Mathematikfunktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, eine Zeichenkette in eine Zahl zu konvertieren:

- {{jsxref("parseInt()")}}, die die Zeichenkette für eine Ganzzahl analysiert.
- {{jsxref("parseFloat()")}}, die die Zeichenkette für eine Gleitkommazahl analysiert.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Funktion, die eine Zeichenkette als Zahlenliteral analysiert und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (steht für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültigen Mathe"-Operationen werden `NaN` zurückgeben — zum Beispiel, wenn versucht wird, eine nicht-numerische Zeichenkette zu analysieren, oder die [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log)-Funktion auf einem negativen Wert zu verwenden. Die Division durch Null führt zu `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operanden für eine mathematische Operation angeben, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (gemäß der IEEE 754-Spezifikation).

### Strings

Strings in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte für jeden eine gute Nachricht sein, der sich mit Internationalisierung befasst hat. Genauer gesagt, sie sind [UTF-16-enkodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript hat keine Unterscheidung zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach einen String, der aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings (in [Codeeinheiten](/de/docs/Glossary/Code_unit)) zu ermitteln, greifen Sie auf dessen [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um den String zu manipulieren und Informationen über den String zu erhalten. Da alle Primitiven von Design aus unveränderlich sind, geben diese Methoden neue Strings zurück.

Der `+`-Operator ist für Strings überladen: Wenn einer der Operanden ein String ist, führt er eine String-Konkatenation statt einer Zahlenaddition durch. Ein spezieller [Vorlagenliteral-](/de/docs/Web/JavaScript/Reference/Template_literals) Syntax ermöglicht es Ihnen, Strings mit eingebetteten Ausdrücken prägnanter zu schreiben. Anders als Pythons f-Strings oder C#'s interpolierte Strings verwenden Vorlagenliterale Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert angibt (und nur über das `null`-Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das die Abwesenheit eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt-](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablen-Deklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Boolean-Typ, mit möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann entsprechend den folgenden Regeln in einen Boolean konvertiert werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null` und `undefined` werden alle `false`.
2. Alle anderen Werte werden `true`.

Sie können diese Konvertierung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Konvertierung stillschweigend vornimmt, wenn es einen Boolean erwartet, wie zum Beispiel in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "[truthy](/de/docs/Glossary/Truthy)" und "[falsy](/de/docs/Glossary/Falsy)", d.h. Werte, die in booleschen Kontexten `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symbol-Typ wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellt wird, ist garantiert eindeutig. Darüber hinaus gibt es registrierte Symbole, die gemeinsame Konstanten sind, und bekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen genutzt werden. Sie können mehr darüber im [Symbol-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) lesen.

## Variablen

Variablen in JavaScript werden mit einem der drei Schlüsselwörter deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` erlaubt Ihnen, blockbasierte Variablen zu deklarieren. Die deklarierte Variable ist ab dem _Block_ verfügbar, in dem sie enthalten ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` erlaubt Ihnen, Variablen zu deklarieren, deren Werte nicht geändert werden sollen. Die Variable ist ab dem _Block_ verfügbar, in dem sie deklariert wurde.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuweisungen_ — sie verhindern nicht _Änderungen_ des Werts der Variable, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen haben (zum Beispiel sind sie nicht block-basiert), und sie werden in modernem JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable ohne Zuweisung eines Wertes deklarieren, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, da Sie sie später ohnehin nicht ändern können.

`let`- und `const`-deklarierte Variablen belegen immer noch den gesamten Bereich, in dem sie definiert sind, und befinden sich in einer Region, die als [temporale Todeszone (TDZ)](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist, vor der tatsächlichen Deklarationszeile. Dies hat einige interessante Wechselwirkungen mit der Variablenschattenbildung, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da vor der Zeile `const x = 2` `x` immer noch auf den Parameter `x` im oberen Bereich verweisen sollte. In JavaScript würde dies jedoch beim ersten `console.log` einen Fehler auslösen: "Cannot access 'x' before initialization". Für weitere Informationen siehe die Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorhergehenden Abschnitt](#datentypen) beschrieben) sind nur mit Werten, aber nicht mit Variablen verbunden. Für `let`-deklarierte Variablen können Sie ihren Typ immer durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Potenzierung). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein Koppelungsgegenstück wie `+=` und `-=`, das auf `x = x operator y` ausgeweitet wird.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um jeweils zu inkrementieren und zu dekrementieren. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine String-Konkatenation durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl (oder einem anderen Wert) hinzufügen, wird zunächst alles in eine Zeichenkette umgewandelt. Das könnte Sie überraschen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenkette zu etwas ist eine nützliche Möglichkeit, es in eine Zeichenkette selbst zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` gemacht werden, die sowohl mit Zeichenketten als auch mit Zahlen funktionieren. Für Gleichheit führt der [Doppel-Gleichheits-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm verschiedene Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Triple-Gleichheits-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung, und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppel-Gleichheits- und der Triple-Gleichheits-Operator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitweise-](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren die logischen Operatoren nicht nur mit booleschen Werten — sie arbeiten nach der "Wahrheit" des Werts.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die Operatoren `&&` und `||` verwenden eine Kurzschlusslogik, was bedeutet, dass das Ausführen des zweiten Operanden von dem ersten abhängt. Dies ist nützlich, um null-Objekte zu überprüfen, bevor auf ihre Attribute zugegriffen wird:

```js
const name = o && o.getName();
```

Oder um Werte zu zwischenspeichern (wenn falsy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren, siehe die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

JavaScript-Grammatik ist der C-Familie sehr ähnlich. Es gibt einige Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen enthalten, aber sie dürfen nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional — die Sprache [fügt sie automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn nötig. Es gibt jedoch bestimmte Vorsichtsmaßnahmen, da Semikolons im Gegensatz zu Python immer noch Teil der Syntax sind.

Für einen ausführlichen Einblick in die JavaScript-Grammatik, siehe die [Referenzseite für die lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript hat eine ähnliche Reihe von Kontrollstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden von [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie verketten:

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

JavaScript hat kein `elif`, und `else if` ist tatsächlich nur ein `else`-Zweig, der aus einer einzigen `if`-Anweisung besteht.

JavaScript hat [`while-`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleifen und [`do...while-`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleifen. Die erste ist gut für grundlegendes Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie in C und Java: sie lässt Sie die Kontrollinformationen für Ihre Schleife in einer einzigen Zeile angeben.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente for-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerierbaren](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts durchläuft.

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

Ähnlich wie in C sind Fall-Absätze konzeptionell dasselbe wie [Bezeichner](/de/docs/Web/JavaScript/Reference/Statements/label), sodass, wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung zum nächsten Level "durchfällt". Sie sind jedoch keine echten Sprungtabellen — jeder Ausdruck kann Teil des `case`-Abschnitts sein, nicht nur Zeichen oder Zahlenliterale, und sie werden eins zu eins ausgewertet, bis eines dem zu vergleichenden Wert entspricht. Der Vergleich erfolgt zwischen den beiden mit dem `===`-Operator.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Anweisungen, was bedeutet, dass Sie sie nicht an eine Variable zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung ausgelöst werden. Viele eingebaute Operationen können ebenfalls fehlerhaft sein.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie nicht sagen, welchen Fehler Sie gerade abgefangen haben, da alles von einer `throw`-Anweisung ausgelöst werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Instanz handelt, wie oben im Beispiel gezeigt. Es gibt einige eingebaute Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler zu bieten. Es gibt keinen bedingten Fang in JavaScript — wenn Sie nur eine Art von Fehler behandeln möchten, müssen Sie alles abfangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut auslösen.

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

Wird ein Fehler von keinem `try...catch` im Aufrufstapel abgefangen, beendet sich das Programm.

Für eine umfassende Liste von Kontrollflussanweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. In dieser Hinsicht ähneln sie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMap in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen — Eigenschaftenkönnen jederzeit hinzugefügt, gelöscht, neu geordnet, geändert oder dynamisch abgefragt werden. Die Schlüssel von Objekten sind immer [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — selbst Array-Indizes, die kanonisch Ganzzahlen sind, sind tatsächlich String unter der Haube.

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

Objekteigenschaften können [zugegriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden, indem Punkt (`.`) oder eckige Klammern (`[]`) verwendet werden. Wenn Sie die Punktnotation verwenden, muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen das Indizieren des Objekts mit einem dynamischen Schlüsselwert.

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

Der Zugriff auf Eigenschaften kann verkettet werden:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

Objekte sind immer Referenzen, sodass, es sei denn, etwas kopiert explizit das Objekt, Änderungen an einem Objekt nach außen sichtbar sind.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sein werden, da sie verschiedene Referenzen sind. Wenn Sie zwei Referenzen des gleichen Objekts halten, wäre eine Mutation an einem durch die andere beobachtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr zu Objekten und Prototypen, siehe die [`Objekt`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für mehr Informationen zur Objektsyntax, siehe ihre [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung weggelassen, da Sie normalerweise mit [Klassen](#klassen) Vererbung erreichen können, ohne den zugrundeliegenden Mechanismus (den Sie möglicherweise als umständlich gehört haben) zu berühren. Um mehr darüber zu erfahren, siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind tatsächlich eine spezielle Art von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mit der `[]`-Syntax aufgerufen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich willkürlicher Nummernindizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erhaltene Array wird als [_spars Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es unbesetzte Löcher in der Mitte hat und die Engine dazu bringt, es von einem Array in eine Hashtabelle zu deoptimieren. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Eine Indizierung außerhalb der Grenzen löst keinen Fehler aus. Wenn Sie einen nicht vorhandenen Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

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

Arrays können mit der `for`-Schleife durchlaufen werden, ebenso wie in anderen C-ähnlichen Sprachen:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die der Syntax `for (int x : arr)` in C++/Java gleichbedeutend ist:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays kommen mit einer Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele von ihnen würden das Array iterieren — zum Beispiel, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) würde eine Callback-Funktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Zusammen mit Objekten sind Funktionen der Kernbestandteil beim Verständnis von JavaScript. Die einfachste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter nehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten und kann seine eigenen Variablen deklarieren, die auf diese Funktion beschränkt sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann verwendet werden, um jederzeit einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabewert verwendet wird (oder eine leere Rückgabewert ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie erwarten. Wenn Sie eine Funktion aufrufen, ohne die von ihr erwarteten Parameter zu übergeben, werden diese auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als sie erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parameter-Syntaxen. Zum Beispiel erlaubt die [Rest-Parameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller zusätzlichen Parameter, die vom Aufrufer übergeben werden, in einem Array, ähnlich wie Pythons `*args`. (Da JS keine benannten Parameter auf Sprachebene hat, gibt es keine `**kwargs`.)

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

In dem obigen Code hält die Variable `args` alle Werte, die in die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ seiner Deklaration, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` wird den ersten Wert, der in die Funktion übergeben wird, in der Variablen `firstValue` speichern und die restlichen Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array haben, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen _auszubreiten_. Zum Beispiel: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie durch [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, die es Objekten ermöglicht, bequem gepackt und entpackt zu werden.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters)-Syntax, die es ermöglicht, ausgelassene Parameter (oder solche, die als `undefined` übergeben werden) einen Standardwert zuzuweisen.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt es Ihnen, anonyme Funktionen zu erstellen — das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, sofort einer Variablen zugeordnet, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten aufgerufen wird — das heißt, sie ist semantisch äquivalent zur Deklaration der Funktion mit der `function avg() {}`-Deklarationssyntax.

Es gibt eine andere Möglichkeit, anonyme Funktionen zu definieren — durch die Verwendung eines [Arrow Function Expression](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Arrow-Funktionen sind nicht semantisch äquivalent zu Funktionsausdrücken — für mehr Informationen siehe ihre [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine weitere Möglichkeit, dass anonyme Funktionen nützlich sein können: Sie können gleichzeitig deklariert und in einem einzigen Ausdruck aufgerufen werden, was als [Sofort aufgerufener Funktionsausdruck (IIFE)](/de/docs/Glossary/IIFE) bezeichnet wird:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFE können Sie [die Emulierung privater Methoden mit Closures](/de/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv zu nennen. Dies ist besonders nützlich für den Umgang mit Baumstrukturen, wie sie im Browser-DOM zu finden sind.

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

Der einem Funktionsausdruck gegebene Name ist nur im Gültigkeitsbereich der Funktion selbst verfügbar. Dies ermöglicht es, dass mehr Optimierungen durch die Engine durchgeführt werden können und führt zu einem lesbareren Code. Der Name wird auch im Debugger und einigen Stack-Traces angezeigt, was Ihnen Zeit beim Debuggen sparen kann.

Wenn Sie an funktionale Programmierung gewöhnt sind, beachten Sie die Leistungsauswirkungen der Rekursion in JavaScript. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, hat es nur JavaScriptCore (verwendet von Safari) implementiert, aufgrund der Schwierigkeit, Stack-Traces zurückzugewinnen und debuggen zu können. Für tiefe Rekursion erwägen Sie, Iteration zu verwenden, um einen Stack-Overflow zu vermeiden.

### Funktionen sind First-Class-Objekte

JavaScript-Funktionen sind First-Class-Objekte. Das bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Closures) direkt ohne explizite Erfassung, was es Ihnen ermöglicht, funktionale Programmierstile bequem anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und Sie können ihnen Eigenschaften hinzufügen oder ändern, genau wie wir es zuvor im Abschnitt über Objekte gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Umfang ihrer übergeordneten Funktion zugreifen können:

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

Dies bietet einen hohen Grad an Nutzen beim Schreiben von wartbarem Code. Wenn eine aufgerufene Funktion auf eine oder zwei andere Funktionen angewiesen ist, die für alle anderen Teile Ihres Codes nicht nützlich sind, können Sie diese Hilfsfunktionen in diese verschachteln. Dies reduziert die Anzahl der Funktionen, die sich im globalen Umfang befinden.

Dies ist auch ein großartiges Gegengewicht zur Verführung durch globale Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen in ihrem übergeordneten Bereich teilen, so dass Sie diesen Mechanismus nutzen können, um Funktionen miteinander zu verbinden, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [Klassen](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die der Syntax anderer Sprachen wie Java sehr ähnlich ist.

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

JavaScript-Klassen sind einfach Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die von der Klasse spezifizierten Methoden und Eigenschaften enthält. Klassen erzwingen keine Codeorganisation — zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel dafür, wie ad hoc die Erstellung einer Klasse sein kann: Sie ist einfach ein Ausdruck, der von einer Arrow-Funktions zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch das Voranstellen von `static` erstellt. Private Eigenschaften werden durch das Voranstellen von einem Hash `#` erstellt (nicht `private`). Der Hash ist ein integraler Bestandteil des Eigenschaftsnamens. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen — nicht einmal in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu verschiedenen Klassenfunktionen, können Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrones Programmieren

JavaScript ist von Natur aus einspurig. Es gibt keine [Parallelität](https://en.wikipedia.org/wiki/Parallel_computing), nur [Nebenläufigkeit](https://en.wikipedia.org/wiki/Concurrent_computing). Asynchrones Programmieren wird von einem [Ereignisschleife](/de/docs/Web/JavaScript/Event_loop) angetrieben, die eine Reihe von Aufgaben zur Warteschlange stellt und deren Abschluss abfragt.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/setTimeout))
- [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-basiert
- [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/de/docs/Web/JavaScript/Reference/Operators/await), was eine syntaktische Zuckerguss für Promises ist

Zum Beispiel, so könnte ein Datei-Lesevorgang in JavaScript aussehen:

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

Die Kernsprache spezifiziert keine asynchronen Programmiermerkmale, aber es ist entscheidend, wenn man mit der Außenwelt interagiert — von [Benutzerberechtigungen abfragen](/de/docs/Web/API/Permissions_API), über [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch), bis hin zu [Dateien lesen](https://nodejs.org/api/fs.html). Die potentiell langfristigen Operationen asynchron zu halten, stellt sicher, dass andere Prozesse weiterhin ausgeführt werden können, während dieser wartet — zum Beispiel wird der Browser nicht einfrieren, während auf den Klick eines Benutzers gewartet wird, um eine Erlaubnis zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Zum Beispiel, wenn Sie ein Promise haben, können Sie nur auf das endgültige Ergebnis über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode zugreifen. Ebenso kann [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) nur in einem asynchronen Kontext verwendet werden, der normalerweise eine asynchrone Funktion oder ein Modul ist. Promises sind _niemals blockierend_ — nur die auf das Ergebnis des Promises abhängige Logik wird verschoben; alles andere wird in der Zwischenzeit weiterhin ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie Promises möglicherweise als [Monaden](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) die mit `then()` gemappt werden können (sie sind jedoch keine _eigentlichen_ Monaden, da sie sich selbst automatisch flachen; d.h. Sie können kein `Promise<Promise<T>>` haben).

Tatsächlich hat das einspurige Modell Node.js zu einer beliebten Wahl für serverseitiges Programmieren gemacht, aufgrund seiner nicht-blockierenden IO, was das Handling einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr leistungsfähig macht. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, blockieren jedoch immer noch den Hauptthread. Um echte Parallelität zu erreichen, benötigen Sie möglicherweise [Arbeiter](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

Um mehr über asynchrones Programmieren zu lernen, können Sie über [die Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder das [asynchrone JavaScript](/de/docs/Learn/JavaScript/Asynchronous) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeiten unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder ihre URL identifiziert wird. Sie können die [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)- und [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java usw. ist die Modulauflösung von JavaScript vollständig vom Host definiert — sie basiert üblicherweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls sind, anstatt von einem Projektstammverzeichnis.

Die JavaScript-Sprache bietet jedoch keine Standardbibliotheksmodule — alle Kernfunktionalitäten werden durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) angetrieben. Dies ist auf die lange Geschichte von JavaScript zurückzuführen, die kein Modulsystem hatte, und der Tatsache, dass die Opt-in in das Modulsystem einige Änderungen an der Laufzeitkonfiguration erfordert.

Unterschiedliche Laufzeiten können unterschiedliche Modulsysteme verwenden. Beispielsweise verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und ist hauptsächlich dateisystembasiert, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Für weitere Informationen siehe die [Leitfaden-Seite zu den Modulen](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Funktionen _Sprachniveau_ sind, während andere _Laufzeitebene_ sind.

JavaScript ist eine allgemeine Skriptsprache. Die [Kernsprache-Spezifikation](/de/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Berechnungslogik. Sie behandelt keine Eingabe/Ausgabe — tatsächlich ist ohne zusätzliche Laufzeitebene-APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)) das Verhalten eines JavaScript-Programms völlig unobservable.

Eine Laufzeit oder ein Host ist etwas, das dem JavaScript-Motor (dem Interpreter) Daten zuführt, zusätzliche globale Eigenschaften bereitstellt und Hooks bereitstellt, damit der Motor mit der Außenwelt interagieren kann. Modulauflösung, Dateneingabe, Nachrichtenausgabe, Netzwerkanfragen senden usw. sind alle laufzeitbasierte Operationen. Seit seiner Einführung wurde JavaScript in verschiedenen Umgebungen wie Browsern (die APIs wie [DOM](/de/docs/Web/XML/Document_Object_Model)), Node.js (das APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellt), usw. angeboten. JavaScript wurde erfolgreich in das Web (was sein Hauptzweck war), mobile Apps, Desktop-Apps, serverseitige Apps, serverlose, eingebettete Systeme und mehr integriert. Während Sie die Kernmerkmale von JavaScript lernen, ist es auch wichtig, die von Host bereitgestellten Funktionen zu verstehen, um das Wissen in die Praxis umzusetzen. Beispielsweise können Sie sich über alle [Web-Plattform-APIs](/de/docs/Web/API) informieren, die von Browsern und manchmal nicht Browsern implementiert werden.

## Weiteres Erkunden

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Funktionen mit anderen Sprachen verglichen werden. Wenn Sie mehr über die Sprache selbst und die Nuancen jeder Funktion erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aufgrund von Platz und Komplexität weggelassen haben, aber die Sie selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
