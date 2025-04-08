---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den größten Teil seiner Syntax von Java, C und C++, wurde jedoch auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß-/kleinschreibungssensitiv** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (was auf Deutsch "früh" bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Jedoch ist die Variable `früh` nicht dasselbe wie `Früh`, da JavaScript groß-/kleinschreibungssensitiv ist.

In JavaScript werden Anweisungen als {{Glossary("Statement", "Statements")}} bezeichnet und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht notwendig, wenn sie in einer eigenen Zeile steht. Aber wenn mehr als eine Anweisung in einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen sehen Sie sich die detaillierte Referenz über JavaScripts [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) an.)

Es wird jedoch als beste Praxis angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, auch wenn es nicht unbedingt notwendig ist. Diese Praxis verringert die Möglichkeit von Fehlern im Code.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Sequenz von Eingabeelementen umgewandelt, die _Token_, _Steuerzeichen_, _Zeilenabschlusszeichen_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabulatoren und Zeilenumbrüche werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können Blockkommentare nicht verschachteln. Dies passiert oft, wenn Sie versehentlich eine `*/`-Sequenz in Ihrem Kommentar einschließen, was den Kommentar beenden wird.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster unterbrechen. Zum Beispiel durch das Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie könnten auch eine dritte Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentarsyntax** bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, die optional auf einen Wert initialisiert wird.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-skopierte, lokale Variable, die optional auf einen Wert initialisiert wird.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-skopierte, nur lesbare benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, genannt {{Glossary("Identifier", "Identifiers")}}, unterliegen bestimmten Regeln.

Ein JavaScript-Identifier beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Folgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß-/kleinschreibungssensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifiers verwenden. (Für mehr Details siehe die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifiers zu repräsentieren.

Einige Beispiele für gültige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl lokale als auch globale Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine block-skopierte lokale Variable zu deklarieren. (Siehe [Variablenscope](#variablenscope) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) Syntax zu entpacken. Zum Beispiel `const { bar } = foo`. Dies wird eine Variable namens `bar` erstellen und ihr den Wert zuweisen, der dem Schlüssel desselben Namens im Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher, nicht deklarierte Variablen zuzuweisen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte vollständig vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initializer_. Die Deklaration erlaubt es der Variable, später im Code ohne einen {{jsxref("ReferenceError")}} aufgerufen zu werden, während der Initializer der Variable einen Wert zuweist. In `var` und `let` Deklarationen ist der Initializer optional. Wenn eine Variable ohne Initializer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` gleichbedeutend mit `let x; x = 42`.

`const` Deklarationen benötigen immer einen Initializer, da sie jede Art von Zuweisung nach der Deklaration verbieten, und sie implizit mit `undefined` zu initialisieren, ist wahrscheinlich ein Programmfehler.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenscope

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Scopes")}} gehören:

- Globaler Scope: Der Standardscope für alle Code, die im Skriptmodus ausgeführt werden.
- Modulscope: Der Scope für Code, der im Modulmodus ausgeführt wird.
- Funktionsscope: Der Scope, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert sind, zu einem zusätzlichen Scope gehören:

- Blockscope: Der Scope, der mit einem Paar geschweifter Klammern (einem [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie für jeden anderen Code im aktuellen Dokument verfügbar ist. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let` und `const` Deklarationen können auch auf den [Block-Anweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in dem sie deklariert sind.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Variablen, die mit `var` erstellt wurden, sind jedoch nicht block-skopiert, sondern nur lokal für die _Funktion (oder den globalen Scope)_, in der sich der Block befindet.

Beispielsweise wird der folgende Code `5` protokollieren, da der Scope von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Scope von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

Mit `var` deklarierte Variablen sind {{Glossary("Hoisting", "gehoisted")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Scope verweisen können, selbst wenn ihre Deklaration noch nicht erreicht ist. Man kann sich `var`-Deklarationen als "zur Spitze ihrer Funktion oder des globalen Scopes gehoben" vorstellen. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert wird, ist ihr Wert immer `undefined`, da nur ihre _Deklaration_ und _Standard-Initialisierung (mit `undefined`)_ gehoben ist, nicht jedoch ihre _Zuweisung des Wertes_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden als gleich interpretieren:

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

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion möglichst nah an der Spitze der Funktion platziert werden. Diese beste Praxis erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Definitionssache. Das Beziehen auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, da sich die Variable in einer "[temporalen Todzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" vom Start des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, nicht aber ihren Wert heben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben — Sie können die Funktion sicher überall in ihrem Scope aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}} Glossar-Eintrag für mehr Diskussion.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Runtimes bieten.

Folglich können Sie auf globale Variablen zugreifen, die in einem Fenster oder Frame deklariert sind, von einem anderen Fenster oder Frame aus, indem Sie den Namen des `window` oder `frame` angeben. Zum Beispiel, wenn in einem Dokument eine Variable namens `phoneNumber` deklariert wird, können Sie von einem `iframe` auf diese Variable als `parent.phoneNumber` referenzieren.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Schlüsselwort erstellen. Die Syntax eines Konstantenidentifizierers ist dieselbe wie bei jedem Variablenidentifizierer: er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert durch Zuweisung nicht ändern oder während der Skriptausführung nicht neu deklariert werden. Sie muss auf einen Wert initialisiert werden. Die Scope-Regeln für Konstanten sind dieselben wie für `let`-block-skopierte Variablen.

Sie können keine Konstante mit demselben Namen wie eine Funktion oder Variable im gleichen Scope deklarieren. Zum Beispiel:

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

`const` verhindert jedoch nur _Neuzuweisungen_, schützt jedoch nicht vor _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

Der neueste ECMAScript-Standard definiert acht Datentypen:

- Sieben Datentypen, die {{Glossary("Primitive", "Primitive")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen null-Wert kennzeichnet. (Da JavaScript groß-/kleinschreibungssensitiv ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Eigenschaft der obersten Ebene, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine ganze Zahl oder eine Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}.

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch gesehen eine Art Objekt sind, können Sie sich Objekte als benannte Container für Werte und Funktionen als Prozeduren vorstellen, die Ihr Skript ausführen kann.

### Datentyp-Umwandlung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie beim Deklarieren einer Variable den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen bei Bedarf während der Skriptausführung automatisch umgewandelt werden.

So könnten Sie zum Beispiel eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variable einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, erzeugt diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und string-Werte mit dem `+` Operator beinhalten, konvertiert JavaScript numerische Werte zu Strings. Zum Beispiel betrachten Sie die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript _nicht_ numerische Werte zu Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Strings zu Zahlen konvertieren

Falls ein Wert, der eine Zahl repräsentiert, im Speicher als String vorliegt, gibt es Methoden zur Umwandlung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Verwendung für Dezimalzahlen begrenzt.

> [!NOTE]
> Eine bewährte Praxis für `parseInt` ist es, immer den _Radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einem String zu erhalten, ist der `+` (unäre Plus)-Operator:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte — keine Variablen — die Sie _wörtlich_ in Ihrem Skript bereitstellen. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Arrayelement repräsentiert, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees` Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Zum Beispiel wird ein Array, das mit einem Literal im globalen Scope definiert ist, einmal erstellt, wenn das Skript geladen wird. Befindet sich jedoch das Array-Literal innerhalb einer Funktion, wird jedes Mal, wenn die Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Extra-Kommas in Array-Literalen

Wenn Sie zwei Kommas hintereinander in einem Array-Literal verwenden, hinterlässt das Array einen leeren Platz für das nicht spezifizierte Element. Das folgende Beispiel erstellt das `fish` Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe wie der tatsächliche `undefined` Wert ist. Bei der Verwendung von array-durchlaufenden Methoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), werden leere Plätze übersprungen. Der Zugriff über den Index `fish[1]` gibt jedoch immer noch `undefined` zurück.

Wenn Sie ein abschließendes Komma am Ende der Liste von Elementen einfügen, wird das Komma ignoriert.

Im folgenden Beispiel hat das Array eine `length` von drei. Es gibt kein `myList[3]`, und `myList[1]` ist leer. Alle anderen Kommas in der Liste zeigen ein neues Element an.

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

> **Note:** [Nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sorgen dafür, dass Git-Diffs sauber bleiben, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements an das Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht verändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens von zusätzlichen Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf das Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei literale Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den true und false Werten des {{jsxref("Boolean")}} Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Siehe {{jsxref("Boolean")}} für mehr Informationen.

### Numerische Literale

JavaScript numerische Literale umfassen ganzzahlige Literale in verschiedenen Basen sowie Gleitkomma-Literale in Basis-10.

Beachten Sie, dass die Sprachspezifikation erfordert, dass numerische Literale vorzeichenlos sind. Nichtsdestotrotz sind Codefragmente wie `-123.4` in Ordnung, da sie als unäres `-` Operator auf das numerische Literal `123.4` angewendet ausgelegt werden.

#### Ganzzahl-Literale

Ganzzahl- und {{jsxref("BigInt")}}-Literale können in dezimal (Basis 10), hexadezimal (Basis 16), oktal (Basis 8) und binär (Basis 2) geschrieben werden.

- Ein _dezimaler_ Ganzzahl-Literal ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahl-Literal oder eine führende `0o` (oder `0O`) zeigt an, dass es sich um _oktal_ handelt. Oktale Ganzzahl-Literale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimal_ Ganzzahl-Literal an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) sowie die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß-/Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahl-Literal an. Binäre Ganzzahl-Literale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n` Suffix bei einem Ganzzahl-Literal zeigt ein {{jsxref("BigInt")}}-Literal an. Ein {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass die führende Null-Syntax wie `0123n` nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahl-Literale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale in der Lexikalische Grammatik-Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkomma-Literale

Ein Gleitkomma-Literal kann die folgenden Teile haben:

- Eine vorzeichenlose Dezimalganzzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die vorzeichenbehaftet sein kann (eingeleitet durch `+` oder `-`). Ein Gleitkomma-Literal muss mindestens eine Ziffer und entweder einen Dezimalpunkt oder `e` (oder `E`) haben.

Kurz gesagt, die Syntax ist:

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

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaften und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objekt-Literal am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car` Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String, `"Saturn"`, zu; das zweite Element, die `getCar` Eigenschaft, wird sofort das Ergebnis der Ausführung der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special` Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Zusätzlich können Sie eine numerische oder String-Literal für den Namen einer Eigenschaft verwenden oder ein Objekt innerhalb eines anderen verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können jede Art von String sein, einschließlich des leeren Strings. Wenn der Eigenschaftsname kein gültiger JavaScript {{Glossary("Identifier", "Identifier")}} oder Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Identifiers sind, können nicht als Punkt (`.`) Eigenschaft aufgerufen werden.

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

Objekt-Literale unterstützen eine Reihe von Kurznotationen, die das Setzen des Prototyps bei der Konstruktion, Kurznotation für `foo: foo` Zuweisungen, das Definieren von Methoden, `super` Aufrufe und das Berechnen von Eigenschaftsnamen mit Ausdrücken umfassen.

Zusammen bringen diese auch Objekt-Literale und Klassendeklarationen näher zusammen und erlauben dem objektbasierten Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

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

### String-Literale

Ein String-Literal ist null oder mehr Zeichen, die in doppelten (`"`) oder einfachen (`'`) Anführungszeichen eingeschlossen sind. Ein String muss von Anführungszeichen des gleichen Typs begrenzt werden (d.h. entweder beide einfachen Anführungszeichen, oder beide doppelten Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten String-Literale verwenden, es sei denn, Sie müssen speziell ein `String` Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String` Objekten.

Sie können die Methoden des {{jsxref("String")}}-Objekts auf einen String-Literal-Wert anwenden. JavaScript konvertiert das String-Literal automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden durch das Backtick-Zeichen (`` ` ``) ([Gravis](https://de.wikipedia.org/wiki/Gravis)) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Template-Literale bieten syntaktischen Zucker für die Konstruktion von Strings. (Dies ist ähnlich wie String-Interpolation in Perl, Python und mehr.)

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

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax für die Angabe eines Template-Literals zusammen mit einem Aufruf einer "Tag"-Funktion zu seiner Verarbeitung. Ein Tagged Template ist einfach ein kompakter und semantischer Weg, eine Funktion aufzurufen, die einen String und eine Menge relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion geht dem Template-Literal voraus — wie im folgenden Beispiel, wo die Template-Tag-Funktion `print` genannt wird. Die `print` Funktion wird die Argumente interpolieren und alle Objekte oder Arrays, die vorkommen, serialisieren, um das lästige `[object Object]` zu vermeiden.

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

Da Tagged Template-Literale nur Zucker für Funktionsaufrufe sind, können Sie das Obige als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies mag an die Interpolation im `console.log`-Stil erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, dass das Tagged Template natürlicher lesbar ist als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Spezielle Zeichen in Strings verwenden

Zusätzlich zu gewöhnlichen Zeichen können Sie auch spezielle Zeichen in Strings einfügen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die speziellen Zeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Nullbyte                                                                                                                                                                                                                                                          |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                       |
| `\f`        | Seitenvorschub                                                                                                                                                                                                                                                    |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                        |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                     |
| `\t`        | Tab                                                                                                                                                                                                                                                               |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                              |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                        |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                       |
| `\\`        | Backslash-Zeichen                                                                                                                                                                                                                                                 |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben wird. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF` angegeben wird. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                          |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben wird. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode Escape Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie die Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                          |

#### Zeichen entkommen

Für Zeichen, die nicht in der Tabelle aufgelistet sind, wird ein vorangestellter Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen in eine Zeichenfolge einfügen, indem Sie ihm einen Backslash voransetzen. Dies wird als _Entkommen_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um ein wörtliches Backslash-Zeichen in einer Zeichenfolge einzufügen, müssen Sie das Backslash-Zeichen entkommen. Zum Beispiel, um den Dateipfad `c:\temp` einer Zeichenfolge zuzuweisen, verwenden Sie das folgende:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche durch einen vorangestellten Backslash entkommen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert der Zeichenfolge entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Mehr Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über JavaScripts Sprachkonstrukte zu erfahren, sehen Sie sich auch die folgenden Kapitel in diesem Leitfaden an:

- [Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir die Steuerflusskonstrukte und die Fehlerbehandlung betrachten.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
