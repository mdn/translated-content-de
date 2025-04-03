---
title: Überblick über die JavaScript-Sprache
slug: Web/JavaScript/Guide/Language_overview
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar}}

JavaScript ist eine multiparadigmatische, dynamische Sprache mit Typen und Operatoren, standardmäßigen eingebauten Objekten und Methoden. Die Syntax basiert auf den Sprachen Java und C — viele Strukturen dieser Sprachen gelten auch für JavaScript. JavaScript unterstützt objektorientierte Programmierung mit [Objektprototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) und Klassen. Es unterstützt auch funktionale Programmierung, da Funktionen {{Glossary("First-class_Function", "erste Klasse")}} Objekte sind, die leicht durch Ausdrücke erstellt und wie andere Objekte weitergegeben werden können.

Diese Seite dient als kurzer Überblick über verschiedene JavaScript-Sprachfunktionen, verfasst für Leser mit Vorkenntnissen in anderen Sprachen wie C oder Java.

## Datentypen

Wir beginnen mit den Bausteinen jeder Sprache: den Typen. JavaScript-Programme bearbeiten Werte, und diese Werte gehören alle zu einem Typ. JavaScript bietet sieben _primitive Typen_:

- [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type): Wird für alle Zahlenwerte (Ganzzahlen und Fließkommazahlen) verwendet, außer für _sehr_ große Ganzzahlen.
- [BigInt](/de/docs/Web/JavaScript/Guide/Data_structures#bigint_type): Wird für beliebig große Ganzzahlen verwendet.
- [String](/de/docs/Web/JavaScript/Guide/Data_structures#string_type): Wird verwendet, um Text zu speichern.
- [Boolean](/de/docs/Web/JavaScript/Guide/Data_structures#boolean_type): `true` und `false` — typischerweise für bedingte Logik verwendet.
- [Symbol](/de/docs/Web/JavaScript/Guide/Data_structures#symbol_type): Dient zur Erstellung von eindeutigen Bezeichnern, die sich nicht überschneiden.
- [Undefined](/de/docs/Web/JavaScript/Guide/Data_structures#undefined_type): Gibt an, dass einer Variablen kein Wert zugewiesen wurde.
- [Null](/de/docs/Web/JavaScript/Guide/Data_structures#null_type): Gibt einen absichtlichen Nicht-Wert an.

Alles andere wird als [Object](/de/docs/Web/JavaScript/Guide/Data_structures#objects) bezeichnet. Häufige Objekttypen sind:

- {{jsxref("Function")}}
- {{jsxref("Array")}}
- {{jsxref("Map")}}
- {{jsxref("RegExp")}}
- {{jsxref("Error")}}

Funktionen sind in JavaScript keine speziellen Datenstrukturen — sie sind lediglich eine spezielle Art eines aufrufbaren Objekts.

### Zahlen

JavaScript hat zwei eingebaute numerische Typen: Number und BigInt.

Der Number-Typ ist ein [IEEE 754 64-Bit-Doppelpräzisions-Gleitpunktwert](https://en.wikipedia.org/wiki/Double_precision_floating-point_format), was bedeutet, dass Ganzzahlen sicher zwischen [-(2<sup>53</sup> − 1)](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) und [2<sup>53</sup> − 1](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) dargestellt werden können, ohne dass es zu Präzisionsverlusten kommt. Fließkommazahlen können bis zu [1,79 × 10<sup>308</sup>](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE) gespeichert werden. Innerhalb von Zahlen unterscheidet JavaScript nicht zwischen Fließkommazahlen und Ganzzahlen.

```js
console.log(3 / 2); // 1.5, not 1
```

Ein _scheinbarer Ganzzahlwert_ ist in Wirklichkeit _implizit eine Fließkommazahl_. Aufgrund der IEEE 754-Codierung kann es bei der Fließkomma-Arithmetik manchmal zu Ungenauigkeiten kommen.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

Bei Operationen, die Ganzzahlen erwarten, z.B. bei bitweisen Operationen, wird die Zahl in eine 32-Bit-Ganzzahl umgewandelt.

[Zahlenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals) können auch Präfixe haben, um die Basis (binär, oktal, dezimal oder hexadezimal) anzugeben, oder ein Exponenten-Suffix.

```js
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503
```

Der [BigInt](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt) Typ ist ein Ganzzahltyp beliebiger Länge. Sein Verhalten ähnelt den Ganzzahltypen in C (z.B. wird bei der Division auf Null gekürzt), außer dass er sich unbegrenzt vergrößern kann. BigInts werden mit einem Zahlenliteral und einem `n` Suffix angegeben.

```js
console.log(-3n / 2n); // -1n
```

Die Standard-[arithmetischen Operatoren](/de/docs/Web/JavaScript/Reference/Operators#arithmetic_operators) werden unterstützt, einschließlich Addition, Subtraktion, Rest-Arithmetik usw. BigInts und Zahlen können in arithmetischen Operationen nicht gemischt werden.

Das {{jsxref("Math")}}-Objekt bietet standardmäßige mathematische Funktionen und Konstanten.

```js
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
```

Es gibt drei Möglichkeiten, einen String in eine Zahl umzuwandeln:

- {{jsxref("parseInt()")}}, das den String in eine Ganzzahl umwandelt.
- {{jsxref("parseFloat()")}}, das den String in eine Fließkommazahl umwandelt.
- Die [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Funktion, die einen String analysiert, als ob er ein Zahlenliteral wäre, und viele verschiedene Zahlenrepräsentationen unterstützt.

Sie können auch das [unäre Plus `+`](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus) verwenden, um `Number()` abzukürzen.

Zahlenwerte beinhalten auch {{jsxref("NaN")}} (kurz für "Not a Number") und {{jsxref("Infinity")}}. Viele "ungültige mathematische" Operationen werden `NaN` zurückgeben — beispielsweise, wenn versucht wird, einen nicht-numerischen String zu analysieren, oder wenn [`Math.log()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/log) mit einem negativen Wert verwendet wird. Eine Division durch Null erzeugt `Infinity` (positiv oder negativ).

`NaN` ist ansteckend: Wenn Sie es als Operand an eine mathematische Operation übergeben, wird das Ergebnis ebenfalls `NaN` sein. `NaN` ist der einzige Wert in JavaScript, der nicht gleich sich selbst ist (laut IEEE 754-Spezifikation).

### Strings

Strings in JavaScript sind Folgen von Unicode-Zeichen. Dies sollte eine willkommene Nachricht für alle sein, die sich mit der Internationalisierung auseinandersetzen mussten. Genauer gesagt sind sie [UTF-16-kodiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

```js
console.log("Hello, world");
console.log("你好，世界！"); // Nearly all Unicode characters can be written literally in string literals
```

Strings können mit einfachen oder doppelten Anführungszeichen geschrieben werden — JavaScript unterscheidet nicht zwischen Zeichen und Strings. Wenn Sie ein einzelnes Zeichen darstellen möchten, verwenden Sie einfach einen String, der nur aus diesem einzelnen Zeichen besteht.

```js
console.log("Hello"[1] === "e"); // true
```

Um die Länge eines Strings zu ermitteln (in {{Glossary("Code_unit", "Code-Einheiten")}}), rufen Sie seine [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) Eigenschaft ab.

Strings haben [Hilfsmethoden](/de/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods), um den String zu manipulieren und Informationen über den String abzurufen. Da alle Primitiven aus Designgründen unveränderlich sind, geben diese Methoden neue Strings zurück.

Der `+` Operator ist für Strings überladen: Wenn einer der Operanden ein String ist, wird String-Konkatenation anstelle von Zahlenaddition durchgeführt. Eine spezielle [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) Syntax ermöglicht es Ihnen, Strings mit eingebetteten Ausdrücken prägnanter zu schreiben. Anders als in Python's f-Strings oder C#'s interpolierten Strings verwenden Template-Literale Backticks (nicht einfache oder doppelte Anführungszeichen).

```js
const age = 25;
console.log("I am " + age + " years old."); // String concatenation
console.log(`I am ${age} years old.`); // Template literal
```

### Andere Typen

JavaScript unterscheidet zwischen [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), das einen absichtlichen Nicht-Wert anzeigt (und nur über das `null` Schlüsselwort zugänglich ist), und {{jsxref("undefined")}}, das Abwesenheit eines Wertes anzeigt. Es gibt viele Möglichkeiten, `undefined` zu erhalten:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) wird die Variable implizit auf `undefined` initialisieren.

JavaScript hat einen Boolean-Typ mit den möglichen Werten `true` und `false` — beide sind Schlüsselwörter. Jeder Wert kann nach folgenden Regeln in einen Boolean umgewandelt werden:

1. `false`, `0`, leere Strings (`""`), `NaN`, `null`, und `undefined` werden alle `false`.
2. Alle anderen Werte werden `true`.

Sie können diese Konvertierung explizit mithilfe der [`Boolean()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean) Funktion durchführen:

```js
Boolean(""); // false
Boolean(234); // true
```

Dies ist jedoch selten notwendig, da JavaScript diese Konvertierung automatisch durchführt, wenn es einen Boolean erwartet, z.B. in einer `if`-Anweisung (siehe [Kontrollstrukturen](#kontrollstrukturen)). Aus diesem Grund sprechen wir manchmal von "{{Glossary("Truthy", "truthy")}}" und "{{Glossary("Falsy", "falsy")}}", d.h. Werte, die in booleschen Kontexten `true` bzw. `false` werden.

Boolesche Operationen wie `&&` (logisches _und_), `||` (logisches _oder_) und `!` (logisches _nicht_) werden unterstützt; siehe [Operatoren](#operatoren).

Der Symboltyp wird häufig verwendet, um eindeutige Bezeichner zu erstellen. Jedes Symbol, das mit der [`Symbol()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) Funktion erstellt wird, ist garantiert einzigartig. Darüber hinaus gibt es registrierte Symbole, bei denen es sich um gemeinsame Konstanten handelt, und wohlbekannte Symbole, die von der Sprache als "Protokolle" für bestimmte Operationen verwendet werden. Mehr dazu finden Sie in der [Symbolreferenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

## Variablen

Variablen in JavaScript werden mit einem von drei Schlüsselwörtern deklariert: [`let`](/de/docs/Web/JavaScript/Reference/Statements/let), [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) oder [`var`](/de/docs/Web/JavaScript/Reference/Statements/var).

`let` ermöglicht es Ihnen, Block-Level-Variablen zu deklarieren. Die deklarierte Variable ist von dem _Block_ aus verfügbar, in dem sie eingeschlossen ist.

```js
let a;
let name = "Simon";

// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

`const` ermöglicht es Ihnen, Variablen zu deklarieren, deren Werte nicht geändert werden sollen. Die Variable ist in dem _Block_ verfügbar, in dem sie deklariert wurde.

```js
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14
```

Eine mit `const` deklarierte Variable kann nicht neu zugewiesen werden.

```js-nolint example-bad
const Pi = 3.14;
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`const` Deklarationen verhindern nur _Neuzuordnungen_ — sie verhindern keine _Änderungen_ des Wertes der Variable, wenn es sich um ein Objekt handelt.

```js
const obj = {};
obj.a = 1; // no error
console.log(obj); // { a: 1 }
```

`var` Deklarationen können überraschende Verhaltensweisen aufweisen (z.B. sind sie nicht blockbezogen), und sie werden im modernen JavaScript-Code nicht empfohlen.

Wenn Sie eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, ist ihr Wert `undefined`. Sie können keine `const`-Variable ohne Initialisierungswert deklarieren, da Sie sie später sowieso nicht ändern können.

`let` und `const` deklarierte Variablen beanspruchen weiterhin den gesamten Bereich, in dem sie definiert sind, und befinden sich in einem Bereich, der als [zeitliche Sperrzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) vor der tatsächlichen Deklarationszeile bekannt ist. Dies hat einige interessante Wechselwirkungen mit der Variablenüberschattung, die in anderen Sprachen nicht vorkommen.

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

In den meisten anderen Sprachen würde dies "1" und "2" protokollieren, da `x` vor der `const x = 2` Zeile immer noch den Parameter `x` im oberen Bereich bezeichnen sollte. In JavaScript würde dies aufgrund der Tatsache, dass jede Deklaration den gesamten Bereich beansprucht, beim ersten `console.log` einen Fehler auslösen: "Cannot access 'x' before initialization". Für weitere Informationen siehe die Referenzseite von [`let`](/de/docs/Web/JavaScript/Reference/Statements/let).

JavaScript ist _dynamisch typisiert_. Typen (wie im [vorherigen Abschnitt](#datentypen) beschrieben) sind nur mit Werten, aber nicht mit Variablen verknüpft. Bei `let`-deklarierten Variablen können Sie ihren Typ jederzeit durch Neuzuweisung ändern.

```js
let a = 1;
a = "foo";
```

## Operatoren

Zu den numerischen Operatoren von JavaScript gehören `+`, `-`, `*`, `/`, `%` (Rest) und `**` (Exponenzierung). Werte werden mit `=` zugewiesen. Jeder binäre Operator hat auch ein zusammengesetztes Zuweisungsäquivalent wie `+=` und `-=`, das sich zu `x = x operator y` erweitert.

```js
x += 5;
x = x + 5;
```

Sie können `++` und `--` verwenden, um bzw. zu inkrementieren und zu dekrementieren. Diese können als Präfix- oder Postfix-Operatoren verwendet werden.

Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt auch eine Verkettung von Strings durch:

```js
"hello" + " world"; // "hello world"
```

Wenn Sie eine Zeichenkette zu einer Zahl (oder einem anderen Wert) hinzufügen, wird zuerst alles in eine Zeichenkette umgewandelt. Dies könnte Sie verwirren:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Das Hinzufügen einer leeren Zeichenkette zu etwas ist eine nützliche Möglichkeit, es in eine Zeichenkette selbst umzuwandeln.

[Vergleiche](/de/docs/Web/JavaScript/Reference/Operators#relational_operators) in JavaScript können mit `<`, `>`, `<=` und `>=` durchgeführt werden, die sowohl für Strings als auch für Zahlen funktionieren. Für Gleichheit führt der [Doppel-Elektions-Operator](/de/docs/Web/JavaScript/Reference/Operators/Equality) eine Typumwandlung durch, wenn Sie ihm unterschiedliche Typen geben, mit manchmal interessanten Ergebnissen. Andererseits versucht der [Triple-Elektions-Operator](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) keine Typumwandlung und wird normalerweise bevorzugt.

```js
123 == "123"; // true
1 == true; // true

123 === "123"; // false
1 === true; // false
```

Der Doppel-Elektionsoperator und der Triple-Elektionsoperator haben auch ihre Ungleichheitsgegenstücke: `!=` und `!==`.

JavaScript hat auch [Bitweise Operatoren](/de/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators) und [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators#binary_logical_operators). Bemerkenswerterweise arbeiten logische Operatoren nicht nur mit booleschen Werten — sie arbeiten durch die "Wahrheit" des Wertes.

```js
const a = 0 && "Hello"; // 0 because 0 is "falsy"
const b = "Hello" || "world"; // "Hello" because both "Hello" and "world" are "truthy"
```

Die `&&` und `||` Operatoren verwenden eine Kurzschlusslogik, d.h. es hängt vom ersten Operand ab, ob sie ihren zweiten Operand ausführen. Dies ist nützlich, um nicht vorhandene Objekte zu überprüfen, bevor man auf ihre Attribute zugreift:

```js
const name = o && o.getName();
```

Oder um Werte zwischenzuspeichern (wenn falsy Werte ungültig sind):

```js
const name = cachedName || (cachedName = getName());
```

Für eine umfassende Liste von Operatoren siehe die [Leitfadenseite](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) oder den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Operators). Besonders interessant könnte die [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence) sein.

## Grammatik

JavaScript-Grammatik ist der C-Familie sehr ähnlich. Es gibt einige Punkte, die erwähnenswert sind:

- [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) können Unicode-Zeichen haben, dürfen jedoch nicht eines der [reservierten Wörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) sein.
- [Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#comments) sind üblicherweise `//` oder `/* */`, während viele andere Skriptsprachen wie Perl, Python und Bash `#` verwenden.
- Semikolons sind in JavaScript optional — die Sprache [fügt sie bei Bedarf automatisch ein](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion). Es gibt jedoch gewisse Einschränkungen, auf die man achten sollte, da Semikolons im Gegensatz zu Python immer noch Teil der Syntax sind.

Für einen detaillierten Einblick in die JavaScript-Grammatik siehe die [Referenzseite für die lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).

## Kontrollstrukturen

JavaScript verfügt über eine ähnliche Reihe von Kontrollstrukturen wie andere Sprachen der C-Familie. Bedingte Anweisungen werden von [`if` und `else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) unterstützt; Sie können sie miteinander verketten:

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

JavaScript hat kein `elif`, und `else if` ist eigentlich nur ein `else`-Zweig aus einer einzelnen `if`-Anweisung.

JavaScript hat [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleifen und [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleifen. Die erste eignet sich gut für grundlegende Schleifen; die zweite ist für Schleifen gedacht, bei denen Sie sicherstellen möchten, dass der Schleifenkörper mindestens einmal ausgeführt wird:

```js
while (true) {
  // an infinite loop!
}

let input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

Die [`for` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for) von JavaScript ist die gleiche wie in C und Java: Sie ermöglicht es Ihnen, die Steuerinformationen für Ihre Schleife auf einer einzigen Zeile bereitzustellen.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript enthält auch zwei andere prominente For-Schleifen: [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of), die über [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols) iteriert, insbesondere Arrays, und [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in), das alle [enumerierbaren](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaften eines Objekts besucht.

```js
for (const value of array) {
  // do something with value
}

for (const property in object) {
  // do something with object property
}
```

Die `switch`-Anweisung kann für mehrere Verzweigungen basierend auf der Gleichheitsprüfung verwendet werden.

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

Ähnlich wie in C sind Fallklauseln konzeptionell dasselbe wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label), sodass, wenn Sie keine `break`-Anweisung hinzufügen, die Ausführung zum nächsten Level "weiterfällt". Sie sind jedoch tatsächlich keine Sprungtabellen — jeder Ausdruck kann Teil der `case`-Klausel sein, nicht nur Zeichen- oder Zahlenliterale, und sie würden nacheinander bewertet, bis eines dem übereinstimmenden Wert entspricht. Der Vergleich erfolgt zwischen den beiden mit dem `===` Operator.

Im Gegensatz zu einigen Sprachen wie Rust sind Kontrollflussstrukturen in JavaScript Aussagen, was bedeutet, dass Sie sie nicht einer Variablen zuweisen können, wie `const a = if (x) { 1 } else { 2 }`.

JavaScript-Fehler werden mit der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung behandelt.

```js
try {
  buildMySite("./website");
} catch (e) {
  console.error("Building site failed:", e);
}
```

Fehler können mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung geworfen werden. Auch viele eingebaute Operationen können einen Wurf verursachen.

```js
function buildMySite(siteDirectory) {
  if (!pathExists(siteDirectory)) {
    throw new Error("Site directory does not exist");
  }
}
```

Im Allgemeinen können Sie den Typ des Fehlers, den Sie gerade abgefangen haben, nicht erkennen, da von einer `throw`-Anweisung aus alles geworfen werden kann. Sie können jedoch normalerweise davon ausgehen, dass es sich um eine [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Instanz handelt, wie im obigen Beispiel. Es gibt einige eingebaute Fehler-Subklassen wie [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError) und [`RangeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/RangeError), die Sie verwenden können, um dem Fehler zusätzliche Semantik zu geben. In JavaScript gibt es keinen bedingten Catch — wenn Sie nur eine bestimmte Art von Fehler abfangen möchten, müssen Sie alles fangen, den Fehlertyp mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) identifizieren und dann die anderen Fälle erneut werfen.

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

Wenn ein Fehler von keinem `try...catch` im Aufrufstapel abgefangen wird, endet das Programm.

Für eine umfassende Liste der Kontrollflussanweisungen siehe den [Referenzabschnitt](/de/docs/Web/JavaScript/Reference/Statements).

## Objekte

JavaScript-Objekte können als Sammlungen von Schlüssel-Wert-Paaren betrachtet werden. So sind sie ähnlich wie:

- Dictionaries in Python.
- Hashes in Perl und Ruby.
- Hashtabellen in C und C++.
- HashMaps in Java.
- Assoziative Arrays in PHP.

JavaScript-Objekte sind Hashes. Im Gegensatz zu Objekten in statisch typisierten Sprachen haben Objekte in JavaScript keine festen Formen — Eigenschaften können jederzeit hinzugefügt, gelöscht, umgeordnet, geändert oder dynamisch abgefragt werden. Objekt-Schlüssel sind immer [Strings](/de/docs/Web/JavaScript/Reference/Global_Objects/String) oder [Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol) — selbst Array-Indizes, die kanonisch Ganzzahlen sind, sind eigentlich Strings im Hintergrund.

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

Objekteigenschaften können mit Punkt (`.`) oder eckigen Klammern (`[]`) [abgerufen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) werden. Bei der Verwendung der Punktnotation muss der Schlüssel ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein. Eckige Klammern hingegen ermöglichen die Indizierung des Objekts mit einem dynamischen Schlüsselwert.

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

Objekte sind immer Verweise, sodass, sofern nichts explizit das Objekt kopiert, Änderungen an einem Objekt von außen sichtbar wären.

```js
const obj = {};
function doSomething(o) {
  o.x = 1;
}
doSomething(obj);
console.log(obj.x); // 1
```

Das bedeutet auch, dass zwei separat erstellte Objekte niemals gleich (`!==`) sind, weil sie unterschiedliche Verweise sind. Wenn Sie zwei Verweise auf dasselbe Objekt besitzen, wäre eine Änderung an einem über den anderen sichtbar.

```js
const me = {};
const stillMe = me;
me.x = 1;
console.log(stillMe.x); // 1
```

Weitere Informationen zu Objekten und Prototypen finden Sie auf der [`Object`-Referenzseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Object). Weitere Informationen zur Objektinitialisierer-Syntax finden Sie auf der [Referenzseite](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer).

Diese Seite hat alle Details zu Objektprototypen und Vererbung weggelassen, da Sie normalerweise Vererbung mit [Klassen](#klassen) erreichen können, ohne das zugrunde liegende Mechanismus zu berühren (das Sie möglicherweise als abstrus wahrgenommen haben). Um mehr darüber zu erfahren, siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Arrays

Arrays in JavaScript sind eigentlich eine spezielle Art von Objekt. Sie funktionieren sehr ähnlich wie reguläre Objekte (numerische Eigenschaften können natürlich nur mit `[]`-Syntax abgerufen werden), aber sie haben eine magische Eigenschaft namens `length`. Diese ist immer eins mehr als der höchste Index im Array.

Arrays werden normalerweise mit Array-Literalen erstellt:

```js
const a = ["dog", "cat", "hen"];
a.length; // 3
```

JavaScript-Arrays sind immer noch Objekte — Sie können ihnen beliebige Eigenschaften zuweisen, einschließlich beliebiger nummerischer Indizes. Das einzige "Magische" ist, dass `length` automatisch aktualisiert wird, wenn Sie einen bestimmten Index setzen.

```js
const a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
console.log(a); // ['dog', 'cat', 'hen', empty × 97, 'fox']
```

Das oben erhaltene Array wird als [_dünnes Array_](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) bezeichnet, weil es nicht besetzte Slot in der Mitte gibt, und wird die Engine dazu bringen, es von einem Array in eine Hashtabelle zu deoptimieren. Stellen Sie sicher, dass Ihr Array dicht befüllt ist!

Indizierung außerhalb der Grenzen führt nicht zu einem Fehler. Wenn Sie einen nicht existierenden Array-Index abfragen, erhalten Sie einen `undefined` Wert zurück:

```js
const a = ["dog", "cat", "hen"];
console.log(typeof a[90]); // undefined
```

Arrays können beliebige Elemente enthalten und können beliebig wachsen oder schrumpfen.

```js
const arr = [1, "foo", true];
arr.push({});
// arr = [1, "foo", true, {}]
```

Arrays können mit der Schleife `for` durchlaufen werden, wie in anderen C-ähnlichen Sprachen:

```js
for (let i = 0; i < a.length; i++) {
  // Do something with a[i]
}
```

Oder, da Arrays iterierbar sind, können Sie die Schleife [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) verwenden, die der C++/Java Syntax `for (int x : arr)` entspricht:

```js
for (const currentValue of a) {
  // Do something with currentValue
}
```

Arrays werden mit einer Vielzahl von [Array-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) geliefert. Viele von ihnen würden das Array durchlaufen — beispielsweise würde [`map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) eine Rückruffunktion auf jedes Array-Element anwenden und ein neues Array zurückgeben:

```js
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
// babies = ['baby dog', 'baby cat', 'baby hen']
```

## Funktionen

Neben Objekten sind Funktionen die Kernelemente zum Verständnis von JavaScript. Die grundlegendste Funktionsdeklaration sieht so aus:

```js
function add(x, y) {
  const total = x + y;
  return total;
}
```

Eine JavaScript-Funktion kann 0 oder mehr Parameter aufnehmen. Der Funktionskörper kann beliebig viele Anweisungen enthalten und kann seine eigenen Variablen deklarieren, die lokal zu dieser Funktion sind. Die [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung kann jederzeit verwendet werden, um einen Wert zurückzugeben, und beendet somit die Funktion. Wenn keine Rückgabe-Anweisung verwendet wird (oder eine leere Rückgabe ohne Wert), gibt JavaScript `undefined` zurück.

Funktionen können mit mehr oder weniger Parametern aufgerufen werden, als sie spezifizieren. Wenn Sie eine Funktion aufrufen, ohne die erwarteten Parameter zu übergeben, werden sie auf `undefined` gesetzt. Wenn Sie mehr Parameter übergeben, als sie erwartet, ignoriert die Funktion die zusätzlichen Parameter.

```js
add(); // NaN
// Equivalent to add(undefined, undefined)

add(2, 3, 4); // 5
// added the first two; 4 was ignored
```

Es stehen eine Reihe anderer Parametersyntaxen zur Verfügung. Beispielsweise erlaubt die [Rest-Parametersyntax](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) das Sammeln aller zusätzlichen vom Aufrufer übergebenen Parameter in einem Array, ähnlich wie beim `*args` in Python. (Da JS auf Sprachebene keine benannten Parameter hat, gibt es kein `**kwargs`.)

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

In dem obigen Code enthält die Variable `args` alle Werte, die in die Funktion übergeben wurden.

Der Restparameter speichert alle Argumente _nach_ seiner Deklaration, aber nicht davor. Mit anderen Worten, `function avg(firstValue, ...args)` speichert den ersten Wert, der an die Funktion übergeben wurde, in der Variablen `firstValue` und die verbleibenden Argumente in `args`.

Wenn eine Funktion eine Liste von Argumenten annimmt und Sie diese bereits in einem Array haben, können Sie die [Verbreitungssyntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) beim Funktionsaufruf verwenden, um das Array als Liste von Elementen _zu verbreiten_. Zum Beispiel: `avg(...numbers)`.

Wir haben erwähnt, dass JavaScript keine benannten Parameter hat. Es ist jedoch möglich, sie mit [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zu implementieren, das es Objekten ermöglicht, bequem zu packen und zu entpacken.

```js
// Note the { } braces: this is destructuring an object
function area({ width, height }) {
  return width * height;
}

// The { } braces here create a new object
console.log(area({ width: 2, height: 3 }));
```

Es gibt auch die [_Standardparameter_](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) Syntax, die es ermöglicht, dass ausgelassene Parameter (oder diejenigen, die als `undefined` übergeben werden) einen Standardwert haben.

```js
function avg(firstValue, secondValue, thirdValue = 0) {
  return (firstValue + secondValue + thirdValue) / 3;
}

avg(1, 2); // 1, instead of NaN
```

### Anonyme Funktionen

JavaScript lässt Sie anonyme Funktionen erstellen — das heißt, Funktionen ohne Namen. In der Praxis werden anonyme Funktionen typischerweise als Argumente für andere Funktionen verwendet, sofort einer Variablen zugewiesen, die verwendet werden kann, um die Funktion aufzurufen, oder von einer anderen Funktion zurückgegeben.

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

Dies macht die anonyme Funktion aufrufbar, indem `avg()` mit einigen Argumenten aufgerufen wird — das heißt, es ist semantisch gleichwertig mit der Deklaration der Funktion mit der `function avg() {}` Deklarationssyntax.

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

Arrow-Funktionen sind nicht semantisch gleichwertig mit Funktionsausdrücken — für weitere Informationen siehe die [Referenzseite](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Es gibt eine weitere Möglichkeit, wie anonyme Funktionen nützlich sein können: Sie können gleichzeitig in einem einzigen Ausdruck deklariert und aufgerufen werden, das als {{Glossary("IIFE", "sofort aufgerufenes Funktionsausdruck (Immediately invoked function expression, IIFE)")}} bezeichnet wird:

```js
(function () {
  // …
})();
```

Für Anwendungsfälle von IIFEs können Sie [emulating private methods with closures](/de/docs/Web/JavaScript/Guide/Closures#emulating_private_methods_with_closures) lesen.

### Rekursive Funktionen

JavaScript erlaubt es Ihnen, Funktionen rekursiv aufzurufen. Dies ist besonders nützlich für die Bearbeitung von Baumstrukturen, wie sie im Browser DOM vorkommen.

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

Der der Funktionsexpression wie oben gegebene Name ist nur im Gültigkeitsbereich der Funktion selbst verfügbar. Dies ermöglicht es der Engine, mehr Optimierungen vorzunehmen, und führt zu lesbarerem Code. Der Name wird auch im Debugger und in einigen Stacktraces angezeigt, was Ihnen beim Debugging Zeit sparen kann.

Wenn Sie in funktionaler Programmierung erfahren sind, sollten Sie sich der Leistungsimplikationen von Rekursion in JavaScript bewusst sein. Obwohl die Sprachspezifikation [Schwanzrufoptimierung](https://en.wikipedia.org/wiki/Tail_call) spezifiziert, hat nur JavaScriptCore (von Safari verwendet) diese implementiert, aufgrund der Schwierigkeit, Stacktraces wiederherzustellen und Debugging zu betreiben. Für tiefe Rekursion sollten Sie in Betracht ziehen, Iteration anstelle von Rekursion zu verwenden, um Stacküberlauf zu vermeiden.

### Funktionen sind Objekte erster Klasse

JavaScript-Funktionen sind Objekte erster Klasse. Dies bedeutet, dass sie Variablen zugewiesen, als Argumente an andere Funktionen übergeben und von anderen Funktionen zurückgegeben werden können. Darüber hinaus unterstützt JavaScript [Schlüsse](/de/docs/Web/JavaScript/Guide/Closures) ohne explizite Erfassung, sodass Sie bequem funktionale Programmierstile anwenden können.

```js
// Function returning function
const add = (x) => (y) => x + y;
// Function accepting function
const babies = ["dog", "cat", "hen"].map((name) => `baby ${name}`);
```

Beachten Sie, dass JavaScript-Funktionen selbst Objekte sind — wie alles andere in JavaScript — und Sie können ihnen Eigenschaften hinzufügen oder ändern, genau wie wir es zuvor im Abschnitt Objekte gesehen haben.

### Innere Funktionen

JavaScript-Funktionsdeklarationen sind innerhalb anderer Funktionen erlaubt. Ein wichtiges Detail von verschachtelten Funktionen in JavaScript ist, dass sie auf Variablen im Gültigkeitsbereich ihrer Elternfunktion zugreifen können:

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

Dies bietet beträchtlichen Nutzen beim Schreiben von wartbarerem Code. Wenn eine aufgerufene Funktion auf eine oder zwei andere Funktionen angewiesen ist, die für keinen anderen Teil Ihres Codes nützlich sind, können Sie diese Hilfsfunktionen darin verschachteln. Dies hält die Anzahl der Funktionen im globalen Gültigkeitsbereich gering.

Dies ist auch eine gute Gegenmaßnahme gegen die Verlockung, globale Variablen zu verwenden. Beim Schreiben von komplexem Code ist es oft verlockend, globale Variablen zu verwenden, um Werte zwischen mehreren Funktionen zu teilen, was zu schwer wartbarem Code führt. Verschachtelte Funktionen können Variablen in ihrem übergeordneten Gültigkeitsbereich teilen, sodass Sie diesen Mechanismus verwenden können, um Funktionen zu koppeln, ohne Ihren globalen Namensraum zu verschmutzen.

## Klassen

JavaScript bietet die [Klassensyntax](/de/docs/Web/JavaScript/Reference/Classes), die Sprachen wie Java sehr ähnlich ist.

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

JavaScript-Klassen sind nur Funktionen, die mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator instanziiert werden müssen. Jedes Mal, wenn eine Klasse instanziiert wird, gibt sie ein Objekt zurück, das die von der Klasse spezifizierten Methoden und Eigenschaften enthält. Klassen erzwingen keine Codeorganisation — zum Beispiel können Sie Funktionen zurückgeben, die Klassen enthalten, oder Sie können mehrere Klassen pro Datei haben. Hier ist ein Beispiel für die ad-hoc Erstellung einer Klasse: es ist nur ein Ausdruck, der von einer Pfeilfunktion zurückgegeben wird. Dieses Muster wird als [Mixin](/de/docs/Web/JavaScript/Reference/Classes/extends#mix-ins) bezeichnet.

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

Statische Eigenschaften werden durch Voranstellen von `static` erstellt. Private Eigenschaften werden durch Voranstellen eines Hashs `#` (nicht `private`) erstellt. Der Hash ist ein integraler Bestandteil des Eigenschaftsnamens. (Denken Sie an `#` als `_` in Python.) Im Gegensatz zu den meisten anderen Sprachen gibt es absolut keine Möglichkeit, eine private Eigenschaft außerhalb des Klassenkörpers zu lesen — auch nicht in abgeleiteten Klassen.

Für einen detaillierten Leitfaden zu den verschiedenen Eigenschaften der Klasse können Sie die [Leitfadenseite](/de/docs/Web/JavaScript/Guide/Using_classes) lesen.

## Asynchrone Programmierung

JavaScript ist von Natur aus ein Single-Thread.Environment. Es gibt keine [Parallelität](https://de.wikipedia.org/wiki/Parallelrechnen); nur [Nebenläufigkeit](https://de.wikipedia.org/wiki/Nebenl%C3%A4ufigkeit). Asynchrone Programmierung wird durch eine [Ereignisschleife](/de/docs/Web/JavaScript/Reference/Execution_model) unterstützt, die es ermöglicht, einen Satz von Aufgaben in die Warteschlange zu stellen und auf ihre Fertigstellung hin zu überprüfen.

Es gibt drei idiomatische Möglichkeiten, asynchronen Code in JavaScript zu schreiben:

- Callback-basiert (wie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout))
- {{jsxref("Global_Objects/Promise", "Promise")}}-basiert
- {{jsxref("Statements/async_function", "async")}}/{{jsxref("Operators/await", "await")}}, was ein syntaktischer Zucker für Promises ist

Zum Beispiel könnte ein Datei-Lesevorgang in JavaScript so aussehen:

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

Die Kernsprache spezifiziert keine Funktionen für die asynchrone Programmierung, aber es ist wichtig, wenn es darum geht, mit der externen Umgebung zu interagieren — vom [Fragen nach Benutzerberechtigungen](/de/docs/Web/API/Permissions_API), über [Datenabfrage](/de/docs/Web/API/Fetch_API/Using_Fetch) bis hin zum [Lesen von Dateien](https://nodejs.org/api/fs.html). Das Beibehalten potenziell langlaufender Operationen in asynchronem Modus stellt sicher, dass andere Prozesse weiterhin laufen können, während dieser wartet — zum Beispiel wird der Browser nicht einfrieren, während er darauf wartet, dass der Benutzer auf eine Schaltfläche klickt, um eine Berechtigung zu erteilen.

Wenn Sie einen asynchronen Wert haben, ist es nicht möglich, seinen Wert synchron zu erhalten. Beispielsweise können Sie bei einem Promise nur auf das letztendliche Ergebnis über die Methode [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) zugreifen. Ebenso kann {{jsxref("Operators/await", "await")}} nur in einem asynchronen Kontext verwendet werden, was normalerweise eine asynchrone Funktion oder ein Modul ist. Promises sind _niemals blockierend_ — nur die Logik, die vom Ergebnis des Promises abhängt, wird aufgeschoben; alles andere wird in der Zwischenzeit weiterhin ausgeführt. Wenn Sie ein funktionaler Programmierer sind, erkennen Sie möglicherweise Promises als [Monaden](<https://de.wikipedia.org/wiki/Monad_(Funktionale_Programmierung)>) an, die mit `then()` abgebildet werden können (sie sind jedoch keine _echten_ Monaden, da sie automatisch abgeflacht werden; d.h. Sie können kein `Promise<Promise<T>>` haben).

In der Tat hat das Single-Thread-Modell Node.js zu einer beliebten Wahl für serverseitige Programmierung gemacht, da es nicht-blockierende IO bietet, was die Bearbeitung einer großen Anzahl von Datenbank- oder Dateisystemanfragen sehr leistungsstark macht. Allerdings blockieren CPU-gebundene (rechenintensive) Aufgaben, die reines JavaScript sind, immer noch den Haupt-Thread. Um echte Parallelität zu erreichen, müssen Sie möglicherweise [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verwenden.

Um mehr über Asynchrone Programmierung zu erfahren, können Sie über [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) lesen oder dem [asynchronen JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) Tutorial folgen.

## Module

JavaScript spezifiziert auch ein Modulsystem, das von den meisten Laufzeitumgebungen unterstützt wird. Ein Modul ist normalerweise eine Datei, die durch ihren Dateipfad oder ihre URL identifiziert wird. Sie können die {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} Anweisungen verwenden, um Daten zwischen Modulen auszutauschen:

```js
import { foo } from "./foo.js";

// Unexported variables are local to the module
const b = 2;

export const a = 1;
```

Im Gegensatz zu Haskell, Python, Java usw. ist die Modulauflösung in JavaScript vollständig host-definiert — sie basiert normalerweise auf URLs oder Dateipfaden, sodass relative Dateipfade "einfach funktionieren" und relativ zum Pfad des aktuellen Moduls sind, anstatt zu einem Projektstammverzeichnis.

Jedoch bietet die JavaScript-Sprache keine Standardbibliotheksmodule — alle Kernfunktionen werden stattdessen durch globale Variablen wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math) und [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) bereitgestellt. Dies liegt an der langen Geschichte von JavaScript, das anfangs kein Modulsystem hatte, und der Tatsache, dass der Beitritt zum Modulsystem einige Änderungen an der Laufzeiteinrichtung erfordern.

Unterschiedliche Laufzeiten können unterschiedliche Modulsysteme verwenden. Zum Beispiel verwendet [Node.js](https://nodejs.org/en/) den Paketmanager [npm](https://www.npmjs.com/) und ist hauptsächlich Dateisystem-basiert, während [Deno](https://deno.com/) und Browser vollständig URL-basiert sind und Module von HTTP-URLs aufgelöst werden können.

Für weitere Informationen siehe die [Modul-Leitfadenseite](/de/docs/Web/JavaScript/Guide/Modules).

## Sprache und Laufzeit

Auf dieser Seite haben wir ständig erwähnt, dass bestimmte Merkmale _sprachlich_ und andere _laufzeitlich_ sind.

JavaScript ist eine generelle Skriptsprache. Die [Kernsprachspezifikation](/de/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_the_core_language_ecmascript) konzentriert sich auf reine rechnerische Logik. Sie behandelt keine Eingabe/Ausgabe — in der Tat ist das Verhalten eines JavaScript-Programms ohne zusätzliche laufzeitliche APIs (insbesondere [`console.log()`](/de/docs/Web/API/console/log_static)) völlig unmerklich.

Eine Laufzeit, oder ein Host, ist etwas, das Daten an die JavaScript-Engine (den Interpreter) liefert, zusätzliche globale Eigenschaften zur Verfügung stellt und Hooks bietet, damit die Engine mit der Außenwelt interagieren kann. Modulauflösung, Dateneingabe, Nachrichtenübermittlung, Netzwerkaufrufe usw. sind alles laufzeitliche Operationen. Seit ihrer Entstehung wurde JavaScript in verschiedenen Umgebungen angenommen, wie z.B. Browser (die APIs wie [DOM](/de/docs/Web/API/Document_Object_Model) bereitstellen), Node.js (das APIs wie [Dateisystemzugriff](https://nodejs.org/api/fs.html) bereitstellt) usw. JavaScript wurde erfolgreich in Web (was ursprünglich sein Hauptzweck war), mobile Apps, Desktopapps, serverseitige Apps, serverlose, eingebettete Systeme und mehr integriert. Während Sie über die Kernfunktionen von JavaScript lernen, ist es auch wichtig, vom Host bereitgestellte Funktionen zu verstehen, um das Wissen nutzen zu können. Zum Beispiel können Sie über alle [Webplattform-APIs](/de/docs/Web/API) lesen, die von Browsern und gelegentlich Nicht-Browsern implementiert werden.

## Weitere Erkundung

Diese Seite bietet einen sehr grundlegenden Einblick, wie verschiedene JavaScript-Funktionen im Vergleich zu anderen Sprachen stehen. Wenn Sie mehr über die Sprache selbst und die Nuancen jeder Funktion erfahren möchten, können Sie den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide) und die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) lesen.

Es gibt einige wesentliche Teile der Sprache, die wir aus Platz- und Komplexitätsgründen weggelassen haben, aber Sie können diese selbstständig erkunden:

- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- [Iteration](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
