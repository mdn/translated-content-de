---
title: Überblick über die JavaScript-Sprache
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, Standard-Objekten und Methoden. Die Syntax basiert auf den Sprachen Java und C — viele Strukturen aus diesen Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "First-Class")}} Objekte sind, die einfach über Ausdrücke erstellt und wie jedes andere Objekt übergeben werden können.

Diese Seite bietet einen schnellen Überblick über verschiedene JavaScript-Sprachmerkmale, geschrieben für Leser mit Hintergrund in anderen Sprachen wie C oder Java.

## Datentypen

Lassen Sie uns mit den Bausteinen jeder Sprache beginnen: den Typen. JavaScript-Programme manipulieren Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type): wird für alle Zahlenwerte (Ganzzahlen und Fließkomma) außer für _sehr_ große Ganzzahlen verwendet.
- [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type): wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type): wird zur Speicherung von Text verwendet.
- [Boolean](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type): `true` und `false` — wird üblicherweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Guide/Data_structures#symbol_type): wird zur Erstellung eindeutiger Identifikatoren verwendet, die nicht kollidieren.
- [Undefined](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type): zeigt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Guide/Data_structures#null_type): zeigt einen absichtlichen Nichtwert an.

Alles andere ist als ein [Object](/de/docs/Web/JavaScript/Guide/Data_structures#objects) bekannt. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen — sie sind nur ein spezieller Objekttyp, der aufgerufen werden kann.

### Zahlen

JavaScript hat zwei eingebaute Zahlentypen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit-Doppelpräzisions-Gleitkommawert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) dargestellt werden können, ohne dass Präzision verloren geht, und Gleitkommazahlen können bis hin zu [1.79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. Innerhalb von Zahlen unterscheidet JavaScript nicht zwischen Gleitkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _sichtbarer Integer_ ist also in Wirklichkeit _implizit ein Float_. Aufgrund der IEEE 754-Codierung kann die Gleitkommaarithmetik manchmal ungenau sein.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Für Operationen, die Ganzzahlen erwarten, wie Bitoperationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis (binär, oktal, dezimal oder hexadezimal) anzugeben, oder ein Exponenten-Suffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)-Typ ist eine Ganzzahl beliebiger Länge. Sein Verhalten ähnelt den Ganzzahltypen in C (z.B. wird die Division auf Null gekürzt), außer dass es unbegrenzt wachsen kann. BigInts werden mit einem Zahlenliteral und einem `n`-Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Restarithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet Standard-Mathematikfunktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, eine Zeichenkette in eine Zahl zu konvertieren:

- {{jsxref("parseInt()")}}, welches die Zeichenkette als Ganzzahl parst.
- {{jsxref("parseFloat()")}}, welches die Zeichenkette als Gleitkommazahl parst.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion, die eine Zeichenkette parst, als wäre sie ein Zahlenliteral und unterstützt viele verschiedene Zahlenrepräsentationen.

Sie können auch das [unäre Pluszeichen `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) als Abkürzung für `Number()` verwenden.

Zahlenwerte umfassen auch {{jsxref("NaN")}} ("Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen geben `NaN` zurück — zum Beispiel beim Versuch, eine nicht-numerische Zeichenkette zu parsen oder beim Verwenden von [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) für einen negativen Wert. Eine Division durch Null ergibt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operand an eine mathematische Operation übergeben, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (gemäß der IEEE 754-Spezifikation).

### Strings

Zeichenketten in JavaScript sind Sequenzen von Unicode-Zeichen. Dies sollte eine willkommene Nachricht für jeden sein, der sich mit Internationalisierung befassen musste. Genauer gesagt sind sie [UTF-16 codiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Zeichenketten können entweder mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript macht keinen Unterschied zwischen Zeichen und Zeichenketten. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach eine Zeichenkette, die aus diesem Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge einer Zeichenkette (in {{Glossary("Code_unit", "Codeeinheiten")}}) zu ermitteln, greifen Sie auf deren [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length)-Eigenschaft zu.

Zeichenketten haben [Nutzmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um die Zeichenkette zu bearbeiten und Informationen über die Zeichenkette abzurufen. Da alle Primitivwerte von Design her unveränderlich sind, geben diese Methoden neue Zeichenketten zurück.

Der `+`-Operator ist für Zeichenketten überladen: Wenn einer der Operanden eine Zeichenkette ist, führt er eine Zeichenfolgenverkettung anstelle einer Zahlenaddition durch. Eine spezielle [Vorlageliteral](/de/docs/Web/JavaScript/Reference/Template_literals)-Syntax ermöglicht es Ihnen, Zeichenketten mit eingebetteten Ausdrücken prägnanter zu schreiben. Im Gegensatz zu Pythons f-Strings oder C#-Interpolationszeichenfolgen verwenden Vorlageliterale Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nichtwert anzeigt (und nur über das `null` Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das das Fehlen eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.

JavaScript hat einen booleschen Typ, mit möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann gemäß den folgenden Regeln in einen Booleschen Wert umgewandelt werden:

1. `false`, `0`, leere Zeichenketten (`""`), `NaN`, `null` und `undefined` werden alle zu `false`.
2. Alle anderen Werte werden zu `true`.

Sie können diese Umwandlung explizit mit der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean)-Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten nötig, da JavaScript diese Umwandlung stillschweigend vornimmt, wenn es einen Booleschen Wert erwartet, wie z.B. in einer `if`-Anweisung (siehe [Steuerstrukturen](#steuerungsstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}" Werten, also Werten, die in booleschen Kontexten zu `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symbol-Typ wird oft verwendet, um eindeutige Identifikatoren zu erstellen. Jedes mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)-Funktion erstellte Symbol ist garantiert eindeutig. Zusätzlich gibt es registrierte Symbole, die geteilte Konstanten sind, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen genutzt werden. Mehr darüber können Sie im [Symbol-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) nachlesen.

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, blockbezogene Variablen zu deklarieren. Die deklarierte Variable ist ab dem _Block_ verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte nie beabsichtigt sind sich zu ändern. Die Variable ist ab dem _Block_ verfügbar, in dem sie deklariert ist.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const`-Deklarationen verhindern nur _Neuzuordnungen_ — sie verhindern keine _Mutationen_ des Variablenwerts, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var`-Deklarationen können überraschende Verhaltensweisen haben (z.B. sind sie nicht blockbezogen) und werden im modernen JavaScript-Code entmutigt.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierer deklarieren, da Sie sie später ohnehin nicht ändern können.

`let`- und `const`-deklarierten Variablen besetzen weiterhin den gesamten Bereich, in dem sie definiert sind, und befinden sich in einem Bereich, der als der [temporale Zwischenbereich](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) bekannt ist, vor der tatsächlichen Deklarationszeile. Dies hat einige interessante Wechselwirkungen mit der Variablenüberdeckung, die in anderen Sprachen nicht auftreten.

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

In den meisten anderen Sprachen würde dies "1" und "2" ausgeben, da vor der Zeile `const x = 2` `x` weiterhin auf den Parameter `x` im oberen Bereich verweisen sollte. In JavaScript, da jede Deklaration den gesamten Bereich belegt, würde dies beim ersten `console.log` einen Fehler auslösen: "Cannot access 'x' before initialization". Weitere Informationen finden Sie auf der Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, aber nicht mit Variablen assoziiert. Bei `let`-deklarierten Variablen können Sie ihren Typ durch Umzuweisung immer ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

JavaScripts numerische Operatoren umfassen `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Potenzierung). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuweisungsgegenstück wie `+=` und `-=`, die sich zu `x = x operator y` erstrecken.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um zu inkrementieren und zu dekrementieren. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch String-Konkatenation durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl (oder einem anderen Wert) hinzufügen, wird alles zuerst in eine Zeichenkette umgewandelt. Dies könnte Sie stolpern lassen:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenkette zu etwas ist ein nützlicher Weg, um es selbst in eine Zeichenkette zu konvertieren.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` vorgenommen werden, die sowohl für Zeichenketten als auch für Zahlen funktionieren. Für Gleichheit führt der [Double-Equals-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Triple-Equals-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Double-Equals- und der Triple-Equals-Operator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise funktionieren logische Operatoren nicht nur mit booleschen Werten — sie arbeiten nach der "Wahrhaftigkeit" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&`- und `||`-Operatoren verwenden Kurzschlusslogik, was bedeutet, dass sie abhängig vom ersten Operand entscheiden, ob sie ihren zweiten Operand ausführen oder nicht. Dies ist nützlich, um null-Objekte zu prüfen, bevor Sie auf deren Attribute zugreifen:

```js
const name = o && o.getName();
```

Oder zum Zwischenspeichern von Werten (wenn falschy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren sehen Sie die [Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Sie könnten besonders an der [Operator-Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) interessiert sein.

## Grammatik

Die JavaScript-Grammatik ist der C-Familie sehr ähnlich. Es gibt ein paar Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen enthalten, aber sie dürfen nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional — die Sprache [fügt sie automatisch hinzu](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wenn sie benötigt werden. Es gibt jedoch bestimmte Vorsichtsmaßnahmen zu beachten, da im Gegensatz zu Python Semikolons weiterhin Teil der Syntax sind.

Für einen tiefgehenden Blick auf die JavaScript-Grammatik sehen Sie die [Referenzseite für lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Steuerungsstrukturen

JavaScript hat eine ähnliche Menge von Steuerstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden durch [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie zusammen verketten:

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

JavaScript hat kein `elif`, und `else if` ist wirklich nur ein `else` Zweig, der aus einer einzigen `if`-Anweisung besteht.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleifen. Die erste ist gut für grundlegendes Schleifen; die zweite ist für Schleifen, bei denen Sie sicherstellen möchten, dass der Körper der Schleife mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

JavaScripts [`for`-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) ist die gleiche wie die in C und Java: Sie lässt Sie die Steuerungsinformationen für Ihre Schleife auf einer einzigen Zeile bereitstellen.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols), insbesondere Arrays, iteriert, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), die alle [enumerierbaren](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

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

Ähnlich wie in C sind Fallklammern konzeptionell das gleiche wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), also wenn Sie keine `break`-Anweisung hinzufügen, wird die Ausführung auf die nächste Ebene "durchfallen". Tatsächlich sind sie jedoch keine Sprungtabellen — jeder Ausdruck kann Teil der `case`-Klammer sein, nicht nur Zeichenfolgen- oder Zahlenliterale, und sie würden nacheinander ausgewertet, bis eines den zu vergleichenden Wert ergibt. Der Vergleich erfolgt zwischen den beiden mit dem `===`-Operator.

Anders als in Sprachen wie Rust sind Steuerflussstrukturen in JavaScript Anweisungen, das bedeutet, Sie können sie nicht einer Variablen zuweisen, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung geworfen werden. Viele eingebaute Operationen können ebenfalls geworfen werden.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie nicht den Typ des Fehlers, den Sie gerade gefangen haben, erkennen, da von einer `throw`-Anweisung alles geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine Instanz von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) handelt, wie im obigen Beispiel gezeigt. Es gibt einige eingebettete Unterklassen von `Error`, wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um zusätzliche Semantik über den Fehler bereitzustellen. Es gibt kein bedingtes Catch in JavaScript — wenn Sie nur einen Fehler eines bestimmten Typs behandeln möchten, müssen Sie alles abfangen, den Typ des Fehlers mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

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

Für eine umfassende Liste von Steuerflussanweisungen sehen Sie den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren verstanden werden. Sie sind daher ähnlich wie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hash-Tabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Strukturen — Eigenschaften können jederzeit hinzugefügt, gelöscht, neu geordnet, mutiert oder dynamisch abgefragt werden. Objektschlüssel sind immer [Zeichenketten](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — sogar Array-Indizes, die kanonisch Ganzzahlen sind, sind unter der Haube tatsächlich Zeichenketten.

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

Eigenschaften von Objekten können mit Punkt (`.`) oder eckigen Klammern (`[]`) [zugegriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Bei der Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen die Indizierung des Objekts mit einem dynamischen Schlüsselwert.

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

Objekte sind immer Referenzen, sodass, es sei denn, etwas kopiert das Objekt explizit, Mutationen an einem Objekt von außerhalb sichtbar wären.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Dies bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sind, da sie unterschiedliche Referenzen sind. Wenn Sie zwei Referenzen desselben Objekts halten, wäre das Mutieren des einen durch das andere beobachtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Für mehr über Objekte und Prototypen, siehe die [`Objekt` Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Für weitere Informationen zur Objektinitialisierungssyntax siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details über Objektprototypen und Vererbung weggelassen, da Sie Vererbung in der Regel mit [Klassen](#klassen) erreichen können, ohne den zugrunde liegenden Mechanismus zu berühren (von dem Sie möglicherweise gehört haben, dass er abstrus ist). Um mehr darüber zu erfahren, sehen Sie [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich ein besonderer Objekttyp. Sie funktionieren sehr ähnlich wie normale Objekte (numerische Eigenschaften können nur mit der `[]`-Syntax aufgerufen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind dennoch Objekte — Sie können ihnen alle Eigenschaften zuweisen, einschließlich willkürlicher Zahlenindizes. Das einzige "Magische" daran ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erstellte Array wird als [_sparse array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es unbewohnte Slots in der Mitte gibt und den Motor dazu bringen wird, es von einem Array in eine Hashtabelle herunterzustufen. Stellen Sie sicher, dass Ihr Array dicht besiedelt ist!

Ein Index außerhalb des Bereichs löst keinen Fehler aus. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen Wert von `undefined` zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente haben und sich beliebig vergrößern oder verkleinern.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der `for`-Schleife iteriert werden, wie Sie es in anderen C-ähnlichen Sprachen können:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden, die dem `for (int x : arr)`-Syntax von C++/Java gleicht:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays haben eine Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Viele davon würden das Array iterieren — zum Beispiel, [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) würde ein Callback auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Neben Objekten sind Funktionen der Kernbestandteil im Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht folgendermaßen aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter nehmen. Der Funktionskörper kann so viele Anweisungen enthalten, wie Sie möchten, und kann seine eigenen Variablen deklarieren, die lokal für diese Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann zu jeder Zeit verwendet werden, um einen Wert zurückzugeben und die Funktion zu beenden. Wenn keine Rückgabe-Anweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie angeben. Wenn Sie eine Funktion aufrufen, ohne die erwarteten Parameter zu übergeben, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als sie erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es gibt eine Reihe anderer Parameter-Syntaxen. Beispielsweise ermöglicht die [Rest-Parameter-Syntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) die Sammlung aller zusätzlichen vom Aufrufer übergebenen Parameter in einem Array, ähnlich wie Pythons `*args`. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es keine `**kwargs`.)

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

Der Restparameter speichert alle Argumente _nach_ dem Punkt, wo er deklariert ist, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten in die Funktion übergebenen Wert in der Variablen `firstValue` und die verbleibenden Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten akzeptiert und Sie diese bereits in einem Array haben, können Sie die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) im Funktionsaufruf verwenden, um das Array als Liste von Elementen zu _verstreuen_. Zum Beispiel: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, diese mithilfe von [Objekt-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu implementieren, was es ermöglicht, Objekte bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter-Syntax_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), die es erlaubt, nicht übergebene Parameter (oder solche, die als `undefined` übergeben werden) mit einem Standardwert zu versehen.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript erlaubt Ihnen, anonyme Funktionen zu erstellen — das sind Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente an andere Funktionen übergeben, sofort einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder aus einer anderen Funktion zurückgegeben.

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

Das macht die anonyme Funktion aufrufbar durch den Aufruf von `avg()` mit einigen Argumenten — das heißt, sie ist semantisch äquivalent zur Funktionsdefinition mit der `function avg() {}` Deklarationssyntax.

Es gibt einen weiteren Weg, um anonyme Funktionen zu definieren — mit einem [Pfeilfunktionsausdruck](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Pfeilfunktionen sind nicht semantisch äquivalent zu Funktionsausdrücken — für weitere Informationen, siehe ihre [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt auch einen weiteren Weg, auf den anonyme Funktionen nützlich sein können: Sie können gleichzeitig in einem einzigen Ausdruck deklariert und aufgerufen werden, genannt ein {{Glossary("IIFE", "Sofort aufgerufener Funktionsausdruck (IIFE)")}}:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie [emulating private methods with closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich für die Arbeit mit Baumstrukturen, wie sie im Browser-DOM zu finden sind.

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

Der Name, der einem Funktionsausdruck wie oben gegeben wird, ist nur für den eigenen Gültigkeitsbereich der Funktion verfügbar. Dies ermöglicht es der Engine, mehr Optimierungen durchzuführen, und führt zu lesbarerem Code. Der Name erscheint auch im Debugger und einigen Stack-Traces, was Ihnen Zeit sparen kann, wenn Sie debuggen.

Wenn Sie an funktionale Programmierung gewöhnt sind, achten Sie auf die Leistungsimplikationen der Rekursion in JavaScript. Obwohl die Sprachspezifikation [Tail-Call-Optimierung](https://de.wikipedia.org/wiki/Tail_Call) spezifiziert, hat nur JavaScriptCore (verwendet von Safari) sie implementiert, aufgrund der Schwierigkeiten beim Wiederherstellen von Stack-Traces und der Debuggierbarkeit. Für tiefe Rekursion ziehen Sie in Betracht, statt dessen Iteration zu verwenden, um einen Stapelüberlauf zu vermeiden.

### Funktionen sind First-Class-Objekte

JavaScript-Funktionen sind First-Class-Objekte. Das bedeutet, dass sie Variablen zugewiesen, als Argumente zu anderen Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Closures](/de/docs/Web/JavaScript/Guide/Closures) von vornherein ohne explizites Erfassen, was es Ihnen ermöglicht, funktionale Programmierstile bequem anzuwenden.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und Sie Eigenschaften an ihnen hinzufügen oder ändern können, genau wie wir es zuvor im Objekte-Abschnitt gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiger Aspekt von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Gültigkeitsbereich ihrer übergeordneten Funktion zugreifen können:

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

Dies bietet eine große Menge an Nutzen beim Schreiben wartbarerer Code. Wenn eine aufgerufene Funktion auf eine oder zwei andere Funktionen angewiesen ist, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Utility-Funktionen innerhalb von ihr verschachteln. Dies hält die Anzahl von Funktionen, die im globalen Gültigkeitsbereich sind, niedrig.

Dies ist auch ein großartiger Konter zur Verlockung globaler Variablen. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen ihres Elterns teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen miteinander zu koppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [Klassen](/de/docs/Web/JavaScript/Reference/Classes)-Syntax, die sehr ähnlich ist wie in Sprachen wie Java.

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

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die Methoden und Eigenschaften enthält, die die Klasse spezifizierte. Klassen erzwingen keine Code-Organisation — zum Beispiel können Sie Funktionen haben, die Klassen zurückgeben, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel, wie ad hoc die Erstellung einer Klasse sein kann: Es handelt sich lediglich um einen Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch das Präfix `static` erstellt. Private Eigenschaften werden durch das Präfix `#` (nicht `private`) erstellt. Das Hash-Zeichen ist ein integraler Bestandteil des Eigenschaftsnamen. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keinen Weg, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen — nicht einmal in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu verschiedenen Klasseneigenschaften können Sie die [Leitfadenseite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrones Programmieren

JavaScript ist von Natur aus einspurig. Es gibt keine [Parallelisierung](https://de.wikipedia.org/wiki/Parallelverarbeitung); nur [Nebenläufigkeit](https://de.wikipedia.org/wiki/Nebenl%C3%A4ufige_Programmierung). Asynchrones Programmieren wird durch eine [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) angetrieben, die es erlaubt, eine Reihe von Aufgaben zu warten und auf ihre Fertigstellung zu überprüfen.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Rückruffunktionen (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, was eine syntaktische Zuckerung für Promises ist

Zum Beispiel könnte ein Datei-Lesevorgang in JavaScript folgendermaßen aussehen:

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

Die Kernsprache spezifiziert keine asynchronen Programmiermerkmale, aber es ist entscheidend beim Umgang mit der externen Umgebung — vom [Benutzerberechtigungen anfragen](/de/docs/Web/API/Permissions_API), über [Daten abrufen](/de/docs/Web/API/Fetch_API/Using_Fetch), bis hin zum [Dateien lesen](https://nodejs.org/api/fs.html). Wenn die potenziell lang laufenden Operationen asynchron sind, sorgt das dafür, dass andere Prozesse auch weiterhin laufen können, während diese wartet — zum Beispiel wird der Browser nicht einfrieren, während er auf den Benutzer wartet, um eine Erlaubnis zu gewähren, indem ein Button geklickt wird.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Wenn Sie zum Beispiel ein Promise haben, können Sie nur über die [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)-Methode auf das endgültige Ergebnis zugreifen. Ebenso kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, der normalerweise eine asynchrone Funktion oder ein Modul ist. Promises sind _niemals blockierend_ — nur die Logik, die vom Ergebnis des Promises abhängt, wird verzögert; alles andere wird in der Zwischenzeit weiter ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie vielleicht Promises als [Monaden](<https://de.wikipedia.org/wiki/Monad_(funktionale_Programmierung)>) an, die mit `then()` abgebildet werden können (sie sind jedoch keine _richtigen_ Monaden, da sie sich automatisch abflachen; d.h. ein `Promise<Promise<T>>` ist nicht möglich).

In der Tat hat das Einfädenmodell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht aufgrund seines nicht blockierenden IO, was die Handhabung einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr performant macht. CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, werden jedoch weiterhin den Hauptthread blockieren. Um eine echte Parallelisierung zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über asynchrone Programmierung zu erfahren, können Sie mehr über [den Umgang mit Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem [asynchronen JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modul-System, das von den meisten Laufzeitumgebungen unterstützt wird. Ein Modul ist normalerweise eine Datei, identifiziert durch ihren Dateipfad oder ihre URL. Sie können die {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java etc. ist die JavaScript-Modulauflösung vollständig hostdefiniert — sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum aktuellen Modulpfad sind statt zu einem Projekthauptpfad.

Allerdings bietet die JavaScript-Sprache keine Standardbibliotheksmodule — alle Kernfunktionalitäten werden stattdessen durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) betrieben. Dies liegt an der langen Geschichte von JavaScript, einem fehlenden Modulsystem und der Tatsache, dass das Opt-in in das Modulsystem einige Änderungen der Laufzeiteinrichtung mit sich bringt.

Unterschiedliche Laufzeitumgebungen können unterschiedliche Modulsysteme verwenden. Beispielsweise verwendet [Node.js](https://nodejs.org/en/) den Paket-Manager [npm](https://www.npmjs.com/) und ist größtenteils dateisystembasiert, während [Deno](https://deno.land/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs auflösen können.

Für weitere Informationen siehe die [Module-Leitfaden-Seite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Merkmale _auf Sprachebene_ sind, während andere _auf Laufzeitebene_ sind.

JavaScript ist eine universelle Skriptsprache. Die [Kernsprache-Spezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine Berechnungslogik. Sie befasst sich nicht mit Ein- oder Ausgaben — in der Tat ist das Verhalten eines JavaScript-Programms ohne zusätzliche Laufzeitebene-APIs (most notably [`console.log()`](/de/docs/Web/API/console/log_static)) völlig unbeobachtbar.

Eine Laufzeit, oder ein Host, ist etwas, das Daten an die JavaScript-Engine (den Interpreter) weiterleitet, zusätzliche globale Eigenschaften bereitstellt und der Engine Hooks bietet, um mit der Außenwelt zu interagieren. Modulauflösung, Lesen von Daten, Nachrichten übermitteln, Netzwerk-Anfragen senden, etc. sind alle Operationen auf Laufzeitebene. Seit ihrer Einführung wurde JavaScript in verschiedenen Umgebungen übernommen, wie zum Beispiel Browser (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Zugriff auf das Dateisystem](https://nodejs.org/api/fs.html) bereitstellt), etc. JavaScript wurde erfolgreich in Web (was sein ursprünglicher Zweck war), mobile Apps, Desktop-Apps, serverseitige Anwendungen, serverlose Systeme, eingebettete Systeme und mehr integriert. Während Sie über JavaScript-Kernmerkmale lernen, ist es auch wichtig, hostbereitgestellte Merkmale zu verstehen, um das Wissen anzuwenden. Zum Beispiel können Sie über alle [Web-Plattform-APIs](/de/docs/Web/API) lesen, die von Browsern implementiert werden, und manchmal von nicht-Browsern.

## Weiterführende Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie sich verschiedene JavaScript-Funktionalitäten mit anderen Sprachen vergleichen. Wenn Sie mehr über die Sprache selbst und die Nuancen der einzelnen Merkmale erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir wegen Platz und Komplexität ausgelassen haben, aber die Sie selbst erkunden können:

- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
