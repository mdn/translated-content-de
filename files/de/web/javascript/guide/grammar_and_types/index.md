---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den größten Teil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **case-sensitiv** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (was auf Deutsch "früh" bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript zwischen Groß- und Kleinschreibung unterscheidet.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und mit Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht notwendig, wenn sie in einer eigenen Zeile steht. Wenn jedoch mehr als eine Anweisung in einer Zeile gewünscht ist, müssen sie _mit_ Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Weitere Informationen finden Sie im detaillierten Referenzdokument zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als beste Praxis angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, selbst wenn es nicht zwingend erforderlich ist. Diese Praxis verringert die Wahrscheinlichkeit, dass sich Bugs in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenabschlüsse_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabs und Newline-Zeichen gelten als Leerzeichen.)

## Kommentare

Die Syntax von **Kommentaren** ist die gleiche wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Man kann Block-Kommentare nicht verschachteln. Dies geschieht oft, wenn man versehentlich eine `*/`-Sequenz in den Kommentar aufnimmt, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall muss das Muster `*/` aufgebrochen werden. Beispielsweise, indem man einen Backslash einfügt:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie könnten auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als Syntax eines **Hashbang-Kommentars** bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript bietet drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-skopierte, lokale Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-skopierte, schreibgeschützte benannte Konstante.

### Variablen

Variablen werden als symbolische Namen für Werte in Ihrer Anwendung verwendet. Die Namen von Variablen, sogenannte {{Glossary("Identifier", "Identifikatoren")}}, unterliegen bestimmten Regeln.

Ein JavaScript-Identifikator beginnt üblicherweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` - `9`) sein. Da JavaScript case-sensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifikatoren verwenden. (Weitere Details finden Sie in der Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifikatoren darzustellen.

Einige Beispiele für legale Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann sowohl für die Deklaration von **lokalen** als auch **globalen** Variablen verwendet werden, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann zur Deklaration einer block-skopierten lokalen Variable verwendet werden. (Siehe [Variablenscope](#variablenscope) weiter unten.)

Sie können Variablen für das Entpacken von Werten mit der Syntax der [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) deklarieren. Zum Beispiel `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem Schlüssel mit demselben Namen aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher die Zuweisung an nicht deklarierte Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte vollständig vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initialisierer_. Die Deklaration ermöglicht den späteren Zugriff auf die Variable im Code, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variablen einen Wert zuweist. Bei `var`- und `let`-Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` gleichbedeutend mit `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jegliche Art von Zuweisung nach der Deklaration verbieten und eine implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenscope

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Scopes")}} gehören:

- Globaler Scope: Der Standardscope für all den Code, der im Skriptmodus ausgeführt wird.
- Modul-Scope: Der Scope für Code, der im Modus "Modul" ausgeführt wird.
- Funktionsscope: Der Scope, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Darüber hinaus können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden, zu einem zusätzlichen Scope gehören:

- Block-Scope: Der Scope, der mit einem Paar geschweifter Klammern (ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie jedem anderen Code im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let` und `const`-Deklarationen können auch auf den [block statement](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in dem sie deklariert werden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Wenn jedoch Variablen mit `var` erstellt werden, sind sie nicht block-skopiert, sondern nur lokal auf die _Funktion (oder den globalen Scope)_, in der der Block enthalten ist.

Zum Beispiel wird der folgende Code `5` ausgeben, da der Scope von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Scope von `x` ist nicht auf den unmittelbaren `if`-Block beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablenhebung

`var`-deklarierte Variablen werden {{Glossary("Hoisting", "gehoben")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Scope verweisen können, selbst wenn ihre Deklaration noch nicht erreicht wurde. Man kann `var`-Deklarationen als an die Spitze ihres Funktions- oder globalen Scopes "gehoben" betrachten. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert wird, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoben wird, jedoch nicht ihre _Wertzuteilung_.

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

Aufgrund der Hebung sollten alle `var`-Anweisungen in einer Funktion so nahe wie möglich am Anfang der Funktion platziert werden. Diese bewährte Praxis erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Frage der Definitionsdebatte. Ein Verweis auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da sich die Variable in einer "[zeitlichen Lücke](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht ihren Wert heben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben — Sie können die Funktion sicher überall in ihrem Scope aufrufen. Siehe den Glossareintrag zu {{Glossary("Hoisting", "Hoisting")}} für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind tatsächlich Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten gewährleisten.

Folglich können Sie von einem Fenster oder Rahmen aus auf globale Variablen zugreifen, die in einem anderen Fenster oder Rahmen deklariert sind, indem Sie den Namen des `window` oder `frame` angeben. Wenn beispielsweise eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie auf diese Variable von einem `iframe` aus mit `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Schlüsselwort erstellen. Die Syntax eines konstanten Identifikators ist die gleiche wie bei jedem Variablenidentifikator: Sie muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder unterstrichene Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert während der Skriptausführung nicht durch Zuweisung ändern oder neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Scope-Regeln für Konstanten sind die gleichen wie für `let`-block-skopierte Variablen.

Sie können eine Konstante nicht mit demselben Namen wie eine Funktion oder Variable im selben Scope deklarieren. Zum Beispiel:

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

Allerdings verhindert `const` nur _Neu-Zuweisungen_, ver

hindert jedoch keine _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Auch die Inhalte eines Arrays sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // ['HTML', 'CSS', 'JAVASCRIPT'];
```

## Datenstrukturen und Typen

### Datentypen

Der neueste ECMAScript-Standard definiert acht Datentypen:

- Sieben Datentypen, die als {{Glossary("Primitive", "primitives")}} bekannt sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript case-sensitiv ist, sind `null` nicht dasselbe wie `Null`, `NULL` oder andere Varianten.)
  3. {{Glossary("undefined", "undefined")}}. Eine Obereigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine ganze Zahl oder eine Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Präzision. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert repräsentiert. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie nützliche Operationen mit Ihren Anwendungen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch eine Art Objekt sind, können Sie sich Objekte als benannte Container für Werte vorstellen und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Datentypkonvertierung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie beim Deklarieren einer Variablen den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen bei Bedarf während der Skriptausführung automatisch konvertiert werden.

So könnten Sie zum Beispiel eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und String-Werte mit dem `+`-Operator enthalten, konvertiert JavaScript numerische Werte in Strings. Berücksichtigen Sie beispielsweise die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Bei allen anderen Operatoren konvertiert JavaScript _keine_ numerischen Werte in Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Umwandlung von Strings in Zahlen

Falls ein Wert, der eine Zahl darstellt, im Speicher als String vorliegt, gibt es Methoden zur Umwandlung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Verwendung bei Dezimalzahlen eingeschränkt.

> [!NOTE]
> Zusätzlich ist eine bewährte Praxis für `parseInt`, immer den _Radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einem String zu erhalten, ist die Verwendung des `+` (unäres Plus)-Operators:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dabei handelt es sich um feste Werte – nicht um Variablen –, die Sie _buchstäblich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Typen von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von Null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als Elementen initialisiert, und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Beispielsweise wird ein Array, das mit einem Literal im globalen Scope definiert ist, einmal erstellt, wenn das Skript geladen wird. Wenn jedoch das Array-Literal innerhalb einer Funktion liegt, wird jedes Mal, wenn diese Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommata in Array-Literalen

Wenn Sie zwei Kommas in einem Array-Literal hintereinander setzen, lässt das Array einen leeren Slot für das unbestimmte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array loggen, werden Sie sehen:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der tatsächlich `undefined`-Wert. Bei der Verwendung von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Slots übersprungen. Der Indexzugriff mit `fish[1]` gibt jedoch weiterhin `undefined` zurück.

Wenn Sie am Ende der Liste der Elemente ein abschließendes Komma einfügen, wird das Komma ignoriert.

Im folgenden Beispiel hat das Array eine `length` von drei. Es gibt kein `myList[3]`. Alle anderen Kommata in der Liste markieren ein neues Element.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel hat das Array eine `length` von vier, und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel hat das Array eine `length` von vier, und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> **Hinweis:** [Nachfolgende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) tragen dazu bei, dass Git-Diffs sauber bleiben, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements am Ende nur eine Zeile hinzufügt, die vorherige Zeile jedoch nicht verändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommata ist wichtig für das Verständnis von JavaScript als Sprache.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente ausdrücklich als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf dessen Fehlen hinzuweisen. Auf diese Weise erhöhen Sie die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei Literalwerte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie die primitiven Boolean-Werte `true` und `false` nicht mit den wahren und falschen Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Siehe {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

JavaScript numerische Literale umfassen ganzzahlige Literale in verschiedenen Basen sowie Gleitkomma-Literale in Basis 10.

Beachten Sie, dass die Sprachspezifikation erfordert, dass numerische Literale vorzeichenlos sind. Nichtsdestotrotz sind Codefragmente wie `-123.4` in Ordnung, denn sie werden als ein unä

rer `-`-Operator interpretiert, der auf das numerische Literal `123.4` angewandt wird.

#### Ganzzahlige Literale

Ganzzahl- und {{jsxref("BigInt")}}-Literale können in Dezimal (Basis 10), Hexadezimal (Basis 16), Oktal (Basis 8) und Binär (Basis 2) geschrieben werden.

- Ein _Dezimal_-Ganzzahlliteral ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem ganzzahligen Literal oder `0o` (oder `0O`) kennzeichnet, dass es sich um _Oktal_ handelt. Oktal-Ganzzahlliterale können nur die Ziffern `0` - `7` enthalten.
- Ein führendes `0x` (oder `0X`) kennzeichnet ein _Hexadezimal_-Ganzzahlliteral. Hexadezimale Zahlen können Ziffern (`0` - `9`) und die Buchstaben `a` - `f` und `A` - `F` enthalten. (Die Groß- oder Kleinschreibung ändert den Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Ein führendes `0b` (oder `0B`) kennzeichnet ein _Binär_-Ganzzahlliteral. Binäre Ganzzahlliterale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix bei einem ganzzahligen Literal kennzeichnet ein {{jsxref("BigInt")}}-Literal. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass führende Nulloktal-Syntax wie `0123n` nicht erlaubt ist, aber `0o123n` in Ordnung ist.

Einige Beispiele für ganzzahlige Literale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Weitere Informationen finden Sie unter [Numerische Literale in der lexikalischen Grammatikreferenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkommaliterale

Ein Gleitkommaliteral kann die folgenden Teile haben:

- Eine nicht signierte Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalnummer),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die (mit `+` oder `-`) signiert sein kann. Ein Gleitkommaliteral muss mindestens eine Ziffer haben und entweder einen Dezimalpunkt oder `e` (oder `E`).

Kurz gesagt, die Syntax lautet:

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

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objektliteral am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objektliteral. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr eine neue Zeichenfolge zu, `"Saturn"`; das zweite Element, die `getCar`-Eigenschaft, wird sofort dem Ergebnis der Ausführung der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Darüber hinaus können Sie für den Namen einer Eigenschaft ein numerisches oder Zeichenfolgenliteral verwenden oder ein Objekt in einem anderen verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können jeden String enthalten, einschließlich des leeren Strings. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "Identifikator")}} oder keine Nummer wäre, muss er in Anführungszeichen gesetzt werden.

Eigenschaftsnamen, die keine gültigen Identifikatoren sind, können nicht als Punkt (`.`) Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Stattdessen muss auf sie mit der Klammernotation (`[]`) zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objektliterale

Objektliterale unterstützen eine Reihe von Kurzschreibweisen, einschließlich der Einstellung des Prototyps bei der Konstruktion, Kurzschreibweise für `foo: foo` Zuweisungen, der Definition von Methoden, des Aufrufs von `super` und das Berechnen von Eigenschaftsnamen mit Ausdrücken.

Insgesamt bringen diese auch Objektliterale und Klassen-Deklarationen einander näher und ermöglichen es Designansätzen auf Basis von Objekten, von einigen der gleichen Annehmlichkeiten zu profitieren.

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

Ein regulärer Ausdrücksliteral (der [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) im Detail definiert wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein reguläres Ausdrücksliteral.

```js
const re = /ab+c/;
```

### String-Literale

Ein Stringliteral ist null oder mehr Zeichen, eingeschlossen in doppelte (`"`) oder einfache (`'`) Anführungszeichen. Ein String muss von Anführungszeichen gleichen Typs begrenzt werden (d. h. entweder beide einfache oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für Stringliterale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Stringliterale verwenden, es sei denn, Sie benötigen speziell ein `String`-Objekt. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können jede Methode des {{jsxref("String")}}-Objekts auf einem Stringliteralwert aufrufen. JavaScript konvertiert automatisch das Stringliteral in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem Stringliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale sind von dem Back-Tick (`` ` ``) ([Gravis](https://en.wikipedia.org/wiki/Grave_accent))-Zeichen eingeschlossen, anstelle von einfachen oder doppelten Anführungszeichen.

Template-Literale bieten syntaktischen Zucker zur Konstruktion von Strings. (Ähnlich wie die String-Interpolation in Perl, Python und mehr.)

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

[Getaggte Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax zur Spezifikation eines Template-Literals zusammen mit einem Aufruf zu einer "Tag"-Funktion, um es zu parsen. Ein getaggtes Template ist nur eine prägnantere und semantische Weise, eine Funktion für die Verarbeitung eines Strings und einer Reihe relevanter Werte aufzurufen. Der Name der Template-Tag-Funktion geht dem Template-Literal voran — wie im folgenden Beispiel, bei dem die Template-Tag-Funktion `print` heißt. Die Funktion `print` interpoliert die Argumente und serialisiert Objekte oder Arrays, die auftreten könnten, um das lästige `[object Object]` zu vermeiden.

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

Da getaggte Template-Literale nur Zucker von Funktionsaufrufen sind, können Sie obiges als äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies mag an die `console.log`-Stil-Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, dass das getaggte Template natürlicher als eine traditionelle "Formatter"-Funktion liest, bei der die Variablen und das Template selbst getrennt deklariert werden müssen.

#### Verwendung spezieller Zeichen in Strings

Neben normalen Zeichen können Sie auch spezielle Zeichen in Strings einfügen, wie im folgenden Beispiel gezeigt:

```js
"one line \n another line";
```

Die folgende Tabelle listet die speziellen Zeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Nullbyte                                                                                                                                                                                                                                                 |
| `\b`        | Backspace                                                                                                                                                                                                                                                |
| `\f`        | Form Feed                                                                                                                                                                                                                                                |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                               |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                            |
| `\t`        | Tab                                                                                                                                                                                                                                                      |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                     |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                               |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                              |
| `\\`        | Backslash-Charakter                                                                                                                                                                                                                                      |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, angegeben durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377`. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, angegeben durch die zwei hexadezimalen Ziffern `XX` zwischen `00` und `FF`. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                            |
| `\uXXXX`    | Das Unicode-Zeichen, angegeben durch die vier hexadezimalen Ziffern `XXXX`. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie das Unicode-Escape `\uD87E\uDC04`.                                                                                                                                                  |

#### Zeichen entziehen

Für Zeichen, die nicht in der Tabelle aufgeführt sind, wird ein vorangestellter Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb eines Strings durch einen vorangestellten Backslash einfügen. Dies wird als _Entzug_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen wörtlichen Backslash innerhalb eines Strings einzufügen, müssen Sie den Backslash-Charakter entziehen. Zum Beispiel, um den Dateipfad `c:\temp` einer Zeichenfolge zuzuweisen, verwenden Sie das folgende:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche entziehen, indem Sie ihnen einen Backslash voranstellen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert der Zeichenfolge entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, siehe auch die folgenden Kapitel in diesem Leitfaden:

- [Flusskontrolle und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns Konstrukte zur Flusssteuerung und zur Fehlerbehandlung ansehen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
