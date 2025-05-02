---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: c01b393fbb6939f88cc98ac2a34df1a54be1edfd
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript leiht sich den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß- und kleinschreibungssensitiv** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript groß- und kleinschreibungssensitiv ist.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht notwendig, wenn es in einer eigenen Zeile steht. Aber wenn mehr als eine Anweisung in einer Zeile gewünscht ist, müssen sie durch Semikolons getrennt sein.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für mehr Informationen siehe den detaillierten Verweis über die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als Best Practice angesehen, nach einer Anweisung immer ein Semikolon zu schreiben, selbst wenn es nicht unbedingt erforderlich ist. Diese Praxis reduziert die Chancen, dass Fehler in den Code gelangen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Sequenz von Eingabeelementen konvertiert, die _Tokens_, _Steuerzeichen_, _Zeilenendezeichen_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabs und Neue-Zeilen-Zeichen werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und in vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können keine Blockkommentare schachteln. Dies geschieht oft, wenn Sie versehentlich eine `*/`-Folge in Ihren Kommentar aufnehmen, wodurch der Kommentar beendet wird.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster aufbrechen. Zum Beispiel, indem Sie einen Backslash einfügen:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Möglicherweise sehen Sie auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien, die so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentar**-Syntax bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, die optional mit einem Wert initialisiert wird.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine blockgebundene, lokale Variable, die optional mit einem Wert initialisiert wird.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine blockgebundene, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen der Variablen, genannt {{Glossary("Identifier", "Identifikatoren")}}, entsprechen bestimmten Regeln.

Ein JavaScript-Identifikator beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß- und kleinschreibungssensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifikatoren verwenden. (Für weitere Details siehe den [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) Verweis.) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifikatoren darzustellen.

Einige Beispiele für gültige Namen sind `Number_hits`, `temp99`, `$credit`, und `_name`.

### Deklarieren von Variablen

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Stichwort {{jsxref("Statements/var", "var")}}. Zum Beispiel, `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Stichwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel, `let y = 13`. Diese Syntax kann verwendet werden, um eine blockgebundene lokale Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax zu entpacken. Zum Beispiel, `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem Schlüssel mit demselben Namen aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher die Zuweisung zu nicht deklarierten Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42`, wird der Teil `let x` als _Deklaration_ bezeichnet und der Teil `= 42` als _Initialisierer_. Die Deklaration erlaubt es, auf die Variable später im Code zuzugreifen, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variable einen Wert zuweist. In `var` und `let` Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, erhält sie den Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` gleichbedeutend mit `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jede Art von Zuweisung nach der Deklaration verbieten, und eine implizite Initialisierung mit `undefined` wahrscheinlich ein Programmiererfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Bereiche")}} gehören:

- Globaler Bereich: Der Standardbereich für alle im Skriptmodus laufenden Code.
- Modulbereich: Der Bereich für Code, der im Modulmodus läuft.
- Funktionsbereich: Der Bereich, der mit einer {{Glossary("function", "Funktion")}} erstellt wurde.

Darüber hinaus können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, zu einem zusätzlichen Bereich gehören:

- Blockbereich: Der Bereich, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wurde.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie jedem anderen Code im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf die [Blockanweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) begrenzt sein, in der sie deklariert wurden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Allerdings sind Variablen, die mit `var` erstellt wurden, nicht blockgebunden, sondern nur lokal für die _Funktion (oder den globalen Bereich)_, in dem sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

`var`-deklarierte Variablen werden {{Glossary("Hoisting", "gehoben")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Bereich zugreifen können, selbst wenn ihre Deklaration noch nicht erreicht ist. Sie können sich `var`-Deklarationen als an die Spitze ihres Funktions- oder globalen Bereichs "gehoben" vorstellen. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert ist, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und die _Standardinitialisierung (mit `undefined`)_ gehoben wird, nicht aber ihre _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden genauso interpretiert wie:

```js
var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();
```

Aufgrund des Hoisting sollten alle `var`-Anweisungen in einer Funktion so nahe wie möglich an die Spitze der Funktion platziert werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Definitionsfrage. Der Verweis auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da sich die Variable in einer "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Anders als bei `var`-Deklarationen, bei denen nur die Deklaration, aber nicht ihr Wert gehoben wird, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben – Sie können die Funktion überall in ihrem Bereich sicher aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}} Glossarbeitrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), daher können Sie globale Variablen mit der `window.variable`-Syntax lesen und festlegen. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und festzulegen. Dies dient dazu, ein konsistentes Interface zwischen verschiedenen JavaScript-Laufzeiten bereitzustellen.

Folglich können Sie auf global deklarierte Variablen in einem Fenster oder Frame von einem anderen Fenster oder Frame zugreifen, indem Sie den Namen des `window` oder des `frame` angeben. Zum Beispiel, wenn eine Variable namens `phoneNumber` in einem Dokument deklariert wird, können Sie auf diese Variable von einem `iframe` als `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Stichwort erstellen. Die Syntax eines Konstantenidentifikators ist die gleiche wie bei jedem Variablenidentifikator: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann während der Ausführung des Skripts ihren Wert nicht durch Zuweisung ändern oder neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Bereichsregeln für Konstanten sind dieselben wie für `let` blockgebundene Variablen.

Sie können keine Konstante mit demselben Namen wie eine Funktion oder Variable im selben Bereich deklarieren. Zum Beispiel:

```js-nolint example-bad
// THIS WILL CAUSE AN ERROR
function f() {}
const f = 5;

// THIS WILL CAUSE AN ERROR TOO
function f() {
  const g = 5;
  var g;
}
```

`const` verhindert jedoch nur _Neu-Zuweisungen_, aber nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Auch der Inhalt eines Arrays ist nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## Datenstrukturen und Typen

### Datentypen

Der aktuellste ECMAScript-Standard definiert acht Datentypen:

- Sieben Datentypen, die {{Glossary("Primitive", "Primitiven")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript groß- und kleinschreibungssensitiv ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine Ganzzahl oder Fließkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Präzision. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenig sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen fundamentalen Elemente der Sprache. Während Funktionen technisch eine Art von Objekt sind, können Sie sich Objekte als benannte Container für Werte vorstellen und Funktionen als Verfahren, die Ihr Skript ausführen kann.

### Datentyp-Umwandlung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie den Datentyp einer Variablen nicht angeben müssen, wenn Sie sie deklarieren. Es bedeutet auch, dass Datentypen während der Skriptausführung nach Bedarf automatisch konvertiert werden.

So können Sie beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variable einen Zeichenfolgenwert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Weil JavaScript dynamisch typisiert ist, führt diese Zuweisung nicht zu einer Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und Zeichenfolgenwerte mit dem `+`-Operator enthalten, konvertiert JavaScript numerische Werte in Zeichenfolgen. Zum Beispiel, betrachten Sie die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript numerische Werte _nicht_ in Zeichenfolgen. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertieren von Zeichenfolgen in Zahlen

Falls ein Wert, der eine Zahl darstellt, als Zeichenfolge im Speicher vorliegt, gibt es Methoden zur Umwandlung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Verwendung für Dezimalzahlen eingeschränkt.

> [!NOTE]
> Eine Best Practice bei `parseInt` ist es, immer den _Radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einer Zeichenfolge zu erhalten, ist der `+` (unärer Plus)-Operator. Dies führt implizit eine [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die denselben Prozess wie die {{jsxref("Number()")}}-Funktion ist.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte – keine Variablen –, die Sie _buchstäblich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Typen von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [Zeichenfolgenliterale](#zeichenfolgenliterale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckigen Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert und seine `length` wird auf die Anzahl der angegebenen Argumente festgelegt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal, wenn das Literal ausgewertet wird, ein neues Array-Objekt. Zum Beispiel wird ein Array, das im globalen Bereich mit einem Literal definiert ist, einmal erstellt, wenn das Skript geladen wird. Wenn das Array-Literal jedoch innerhalb einer Funktion ist, wird jedes Mal, wenn diese Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie zwei Kommas hintereinander in einem Array-Literal setzen, lässt das Array einen leeren Platz für das unbestimmte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe wie der tatsächliche `undefined`-Wert ist. Wenn Sie array-durchlaufende Methoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, werden leere Slots übersprungen. Der Zugriff auf den Index `fish[1]` ergibt jedoch immer noch `undefined`.

Wenn Sie am Ende der Liste der Elemente ein abschließendes Komma einfügen, wird das Komma ignoriert.

Im folgenden Beispiel ist die `length` des Arrays drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommas in der Liste weisen auf ein neues Element hin.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel ist die `length` des Arrays vier, und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel ist die `length` des Arrays vier, und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> **Beachten Sie:** [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen, git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements am Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht verändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verstehen des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf das Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei literale Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie die primitiven Boolean-Werte `true` und `false` nicht mit den true- und false-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist eine Hülle um den primitiven Boolean-Datentyp. Siehe {{jsxref("Boolean")}} für mehr Informationen.

### Numerische Literale

JavaScript-Zahlenliterale umfassen Ganzzahlliterale in verschiedenen Basen sowie Gleitkommaliterale in Basis-10.

Beachten Sie, dass die Sprachspezifikation verlangt, dass Zahlenliterale unsigned sind. Nichtsdestotrotz sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-`-Operator interpretiert werden, der auf das Zahlenliteral `123.4` angewendet wird.

#### Ganzzahlliterale

Ganzzahl- und {{jsxref("BigInt")}}-Literale können in Dezimal (Basis 10), Hexadezimal (Basis 16), Oktal (Basis 8) und Binär (Basis 2) geschrieben werden.

- Ein _dezimal_ Ganzzahlliteral ist eine Sequenz von Ziffern ohne führende `0` (null).
- Eine führende `0` (null) auf einem Ganzzahlliteral oder eine führende `0o` (oder `0O`) zeigt, dass es sich um _oktal_ handelt. Oktal-Ganzzahlliterale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahlliteral an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- oder Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahlliteral an. Binäre Ganzzahlliterale können nur die Ziffern `0` und `1` enthalten.
- Ein angehängtes `n`-Suffix an einem Ganzzahlliteral zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass die Oktalsyntax mit führender Null, wie `0123n`, nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahlliterale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für mehr Informationen siehe [Numerische Literale im Lexikalische Grammatik-Verweis](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkommaliterale

Ein Gleitkomma-Literal kann die folgenden Teile haben:

- Eine unsignierte Dezimalganzzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponentteil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die auch signiert sein kann (vorangehend mit `+` oder `-`). Ein Gleitkommaliteral muss mindestens eine Ziffer und entweder einen Dezimalpunkt oder `e` (oder `E`) haben.

Kürzer gesagt ist die Syntax:

```plain
[digits].[digits][(E|e)[(+|-)]digits]
```

Zum Beispiel:

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### Objekt-Literale

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweiften Klammern (`{}`).

> [!WARNING]
> Verwenden Sie ein Objekt-Literal nicht am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Der erste Wert des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr eine neue Zeichenkette zu, `"Saturn"`; der zweite Wert, die `getCar`-Eigenschaft, wird sofort das Ergebnis der Funktion `(carTypes("Honda"))` zugewiesen; der dritte Wert, die `special`-Eigenschaft, verwendet eine bestehende Variable (`sales`).

```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

Zusätzlich können Sie einen numerischen oder Zeichenfolgen-Literal für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können beliebige Zeichenfolgen sein, einschließlich der leeren Zeichenfolge. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "Identifikator")}} oder -Zahl wäre, muss er in Anführungszeichen eingefasst werden.

Eigenschaftsnamen, die keine gültigen Identifikatoren sind, können nicht als Punkt (`.`)-Eigenschaft aufgerufen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernotation (`[]`) aufgerufen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Verbesserte Objekt-Literale

Objekt-Literale unterstützen eine Reihe von Kurzschreibweisen, die das Setzen des Prototyps bei der Konstruktion, Kurzschreibweisen für `foo: foo`-Zuweisungen, das Definieren von Methoden, das Erstellen von `super`-Aufrufen und das Berechnen von Eigenschaftsnamen mit Ausdrücken beinhalten.

Zusammen bringen diese auch Objektliterale und Klassendeklarationen näher zusammen und ermöglichen es dem objektbasierten Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return "d " + super.toString();
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

### RegExp-Literale

Ein Regex-Literal (das im Detail [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) definiert wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### Zeichenfolgenliterale

Ein Zeichenfolgenliteral ist null oder mehr Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind. Eine Zeichenfolge muss durch Anführungszeichen desselben Typs abgegrenzt werden (d.h. entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für Zeichenfolgenliterale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Zeichenfolgenliterale verwenden, es sei denn, Sie müssen ausdrücklich ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können jede der Methoden des {{jsxref("String")}}-Objekts auf einem Zeichenfolgenliteralwert aufrufen. JavaScript konvertiert das Zeichenfolgenliteral automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können die `length`-Eigenschaft auch mit einem Zeichenfolgenliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Vorlagenliterale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Vorlagenliterale werden durch das Backtick-Zeichen (`` ` ``) ([Gravis-Akzent](https://en.wikipedia.org/wiki/Grave_accent)) anstelle von doppelten oder einfachen Anführungszeichen begrenzt.

Vorlagenliterale bieten syntaktischen Zucker zum Erstellen von Zeichenfolgen. (Dies ähnelt den String-Interpolations-Funktionen in Perl, Python und mehr.)

```js-nolint
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`

// String interpolation
const name = 'Lev', time = 'today';
`Hello ${name}, how are you ${time}?`
```

[Getaggte Vorlagen](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Vorlagenliteral zusammen mit einem Aufruf einer "Tag"-Funktion für das Parsen anzugeben. Ein getaggtes Template ist nur eine prägnantere und Semantische Möglichkeit, eine Funktion aufzurufen, die eine Zeichenfolge und eine Reihe relevanter Werte verarbeitet. Der Name der Vorlagen-Tag-Funktion steht vor dem Vorlagenliteral — wie im folgenden Beispiel, wo die Vorlagen-Tag-Funktion `print` genannt wird. Die `print`-Funktion interpoliert die Argumente und serialisiert alle Objekte oder Arrays, die auftreten können, und vermeidet so das lästige `[object Object]`.

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}
```

Da getaggte Vorlagenliterale nur syntaktischer Zucker für Funktionsaufrufe sind, können Sie das obige auch als gleichwertigen Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies erinnert möglicherweise an die `console.log`-Stil-Interpolation:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das getaggte Template natürlicher liest als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwenden von Sonderzeichen in Zeichenfolgen

Zusätzlich zu normalen Zeichen können Sie auch Sonderzeichen in Zeichenfolgen einschließen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

In der folgenden Tabelle sind die Sonderzeichen aufgelistet, die Sie in JavaScript-Zeichenfolgen verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                                        |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                      |
| `\f`        | Formularvorschub                                                                                                                                                                                                                                                 |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                       |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                    |
| `\t`        | Tabulator                                                                                                                                                                                                                                                        |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                             |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                       |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                      |
| `\\`        | Rückwärts-Schrägstrich                                                                                                                                                                                                                                           |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben ist. Beispielsweise ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                   |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF` angegeben ist. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                          |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben ist. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` das gleiche wie die Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                      |

#### Escapen von Zeichen

Für Zeichen, die nicht in der Tabelle aufgeführt sind, wird ein führender Rückwärtsschrägstrich ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen in eine Zeichenfolge einfügen, indem Sie ihm einen Rückwärtsschrägstrich voranstellen. Dies wird als _Escaping_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen buchstäblichen Rückwärtsschrägstrich in eine Zeichenfolge einzufügen, müssen Sie das Rückwärtsschrägstrich-Zeichen escapen. Zum Beispiel, um den Dateipfad `c:\temp` in eine Zeichenfolge zuzuweisen, verwenden Sie folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche escapen, indem Sie ihnen einen Rückwärtsschrägstrich voranstellen. Der Rückwärtsschrägstrich und der Zeilenumbruch werden beide aus dem Wert der Zeichenfolge entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Mehr Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax von Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, siehe auch die folgenden Kapitel in diesem Leitfaden:

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns die Kontrollflusskonstrukte und die Fehlerbehandlung ansehen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
