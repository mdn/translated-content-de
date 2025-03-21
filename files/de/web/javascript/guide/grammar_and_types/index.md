---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 0616d9055d560a80cf3fadc0cae7ec70f670f390
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß- und kleinschreibungssensitiv** und verwendet das **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (was "früh" auf Deutsch bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript groß- und kleinschreibungssensitiv ist.

In JavaScript werden Anweisungen als {{Glossary("Statement", "statements")}} bezeichnet und mit einem Semikolon (;) getrennt.

Ein Semikolon ist nicht notwendig nach einer Anweisung, wenn sie in einer eigenen Zeile steht. Wenn jedoch mehrere Anweisungen in einer Zeile gewünscht sind, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)) zum Beenden von Anweisungen. (Für weitere Informationen siehe die detaillierte Referenz zur [lexikalischen Grammatik von JavaScript](/de/docs/Web/JavaScript/Reference/Lexical_grammar).)

Es gilt jedoch als beste Praxis, immer ein Semikolon nach einer Anweisung zu schreiben, auch wenn es nicht strikt notwendig ist. Diese Praxis verringert die Wahrscheinlichkeit, dass sich Fehler in den Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenendungen_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabs und Zeilenumbrüche werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Blockkommentare können nicht geschachtelt werden. Dies passiert oft, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar einfügen, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall sollten Sie das Muster `*/` aufbrechen. Zum Beispiel durch das Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Möglicherweise sehen Sie auch eine dritte Art von Kommentarsyntax am Beginn einiger JavaScript-Dateien, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentarsyntax** bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Weitere Details finden Sie unter [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments).

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-spezifische lokale Variablen und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-spezifische, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, genannt {{Glossary("Identifier", "Identifikatoren")}}, müssen bestimmten Regeln entsprechen.

Ein JavaScript-Identifikator beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß- und kleinschreibungssensitiv ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifikatoren verwenden. (Weitere Details finden Sie in der Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifikatoren darzustellen.

Einige Beispiele für legale Namen sind: `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel, `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel, `let y = 13`. Diese Syntax kann verwendet werden, um eine block-spezifische lokale Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mittels der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) zu entpacken. Zum Beispiel, `const { bar } = foo`. Dies wird eine Variable namens `bar` erstellen und ihr den Wert zuweisen, der dem Schlüssel gleichen Namens aus unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher die Zuweisung zu nicht deklarierten Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` als _Initialisierer_. Die Deklaration erlaubt es, später im Code auf die Variable zuzugreifen, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variable einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` äquivalent zu `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jede Art der Zuweisung nach der Deklaration verbieten, und implizites Initialisieren mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Bereiche")}} gehören:

- Globaler Bereich: Der Standardbereich für alle im Skriptmodus ausgeführten Codes.
- Modulbereich: Der Bereich für im Modulmodus ausgeführte Codes.
- Funktionsbereich: Der Bereich, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Darüber hinaus können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden, zu einem zusätzlichen Bereich gehören:

- Blockbereich: Der durch ein Paar geschweifter Klammern (ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellte Bereich.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie jedem anderen Code im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf die [Blockanweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt werden, in der sie deklariert wurden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Variablen, die jedoch mit `var` erstellt wurden, sind nicht auf Blocks beschränkt, sondern lokal zu der _Funktion (oder dem globalen Bereich)_, in dem sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Bereich von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

Mit `var` deklarierte Variablen werden {{Glossary("Hoisting", "gehoisted")}}, was bedeutet, dass Sie die Variable überall in ihrem Bereich referenzieren können, selbst wenn ihre Deklaration noch nicht erreicht wurde. Sie können `var`-Deklarationen als an die Spitze ihres Funktions- oder globalen Bereichs "gezogen" betrachten. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert wird, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoisted wird, nicht jedoch ihre _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "local value";
})();
```

Die obigen Beispiele werden interpretiert als:

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

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion so weit oben wie möglich platziert werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoisted werden, ist eine Definitionsfrage. Referenzieren Sie die Variable im Block vor der Variablendeklaration, führt immer zu einer {{jsxref("ReferenceError")}}, da sich die Variable in einer "[temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Anders als `var`-Deklarationen, die nur die Deklaration, aber nicht ihren Wert hoisten, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoisted — Sie können die Funktion sicher überall in ihrem Bereich aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}}-Glossareintrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind tatsächlich Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bieten.

Folglich können Sie auf globale Variablen zugreifen, die in einem Fenster oder Frame deklariert wurden, indem Sie den Namen des `window` oder `frame` angeben. Wenn beispielsweise eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie von einem `iframe` aus auf diese Variable als `parent.phoneNumber` zugreifen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem {{jsxref("Statements/const", "const")}}-Keyword erstellen. Die Syntax eines Konstantenidentifikators ist dieselbe wie die eines Variablenidentifikators: er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert nicht durch Zuweisung ändern oder während der Skriptausführung neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Bereichsregeln für Konstanten sind dieselben wie für `let` Blockbereichs-Variablen.

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

Jedoch verhindert `const` nur _Neuzuordnungen_, aber nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

- Sieben Datentypen, die {{Glossary("Primitive", "Primitives")}} sind:

  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen null-Wert darstellt. (Da JavaScript groß- und kleinschreibungssensitiv ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine Ganzzahl oder Fließkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenkette, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen fundamentalen Elemente der Sprache. Während Funktionen technisch gesehen eine Art von Objekt sind, können Sie Objekte als benannte Container für Werte betrachten und Funktionen als Verfahren, die Ihr Skript ausführen kann.

### Typkonversion

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie bei der Deklaration einer Variable den Datentyp nicht angeben müssen. Es bedeutet auch, dass Datentypen während der Skriptausführung bei Bedarf automatisch konvertiert werden.

So könnten Sie beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen Zeichenkettenwert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, führt diese Zuweisung nicht zu einer Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und string-Werte mit dem `+` Operator enthalten, konvertiert JavaScript numerische Werte zu Strings. Betrachten Sie zum Beispiel die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript numerische Werte _nicht_ zu Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertieren von Strings zu Zahlen

Falls ein Wert, der eine Zahl repräsentiert, als String im Speicher ist, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur ganze Zahlen zurück, daher ist seine Nutzung für Dezimalzahlen eingeschränkt.

> [!NOTE]
> Eine bewährte Praxis für `parseInt` ist es, immer den _Radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um das numerische System anzugeben, das verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, eine Zahl aus einem String zu erhalten, ist der `+` (einfacher Plus) Operator:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte — keine Variablen — die Sie _wörtlich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als Elemente initialisiert und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das Array `coffees` mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal, wenn das Literal ausgewertet wird, ein neues Array-Objekt. Zum Beispiel wird ein Array, das mit einem Literal im globalen Bereich definiert ist, einmal beim Laden des Skripts erstellt. Wenn sich jedoch das Array-Literal in einer Funktion befindet, wird jedes Mal, wenn die Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indexed collections](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie in einem Array-Literal zwei Kommas hintereinander setzen, lässt das Array einen leeren Platz für das nicht spezifizierte Element. Das folgende Beispiel erstellt das Array `fish`:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, wird Folgendes angezeigt:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der tatsächliche `undefined`-Wert. Beim Verwenden von Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Plätze übersprungen. Jedoch gibt das Indexzugriff `fish[1]` weiterhin `undefined` zurück.

Wenn Sie ein nachgestelltes Komma am Ende der Elementliste einfügen, wird das Komma ignoriert.

Im folgenden Beispiel beträgt die `length` des Arrays drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommas in der Liste zeigen ein neues Element an.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel beträgt die `length` des Arrays vier, und `myList[0]` und `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

Im folgenden Beispiel beträgt die `length` des Arrays vier, und `myList[1]` und `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> **Hinweis:** [Nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen dabei, `git` Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements an das Ende nur eine Zeile hinzufügt, jedoch die vorherige Zeile nicht verändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis für das Verhalten zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar hinzufügen, um deren Abwesenheit hervorzuheben. Dadurch wird die Klarheit und Wartbarkeit Ihres Codes erhöht.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei literal Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den Wahrheits- und Falschheitswerten des {{jsxref("Boolean")}} Objekts.
>
> Das Boolean-Objekt ist eine Hülle um den primitiven Boolean-Datentyp. Weitere Informationen finden Sie unter {{jsxref("Boolean")}}.

### Numerische Literale

JavaScript numerische Literale umfassen Ganzzahlen-Literale in verschiedenen Basen sowie Fließkomma-Literale in Basis-10.

Beachten Sie, dass die Sprachspezifikation numerische Literale erfordert, unsigniert zu sein. Nichtsdestotrotz sind Codefragmente wie `-123.4` in Ordnung, da sie als ein einstelliger `-` Operator interpretiert werden, der auf das numerische Literal `123.4` angewendet wird.

#### Ganzzahlen-Literale

Ganzzahlen- und {{jsxref("BigInt")}}-Literale können in Dezimalform (Basis 10), Hexadezimal (Basis 16), Oktal (Basis 8) und Binär (Basis 2) geschrieben werden.

- Ein _Dezimal_-Ganzzahlen-Literal ist eine Folge von Ziffern ohne führende `0` (null).
- Eine führende `0` (null) auf einem Ganzzahlen-Literal oder eine führende `0o` (oder `0O`) zeigt an, dass es sich um Oktal handelt. Oktalzahlen können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _Hexadezimal_-Ganzzahlen-Literal an. Hexadezimalzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß- und Kleinschreibung eines Zeichens ändert nicht seinen Wert. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _Binär_-Ganzzahlen-Literal an. Binärzahlen können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix auf einem Ganzzahlen-Literal zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass Oktalsyntax mit führender Null wie `0123n` nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahlen-Literale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale in der Lexikalischen Grammatikreferenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Fließkomma-Literale

Ein Fließkomma-Literal kann die folgenden Teile haben:

- Eine unsignierte Dezimaleingabe,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine andere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E` gefolgt von einer Ganzzahl, die signiert sein kann (eingeleitet durch `+` oder `-`). Ein Fließkomma-Literal muss mindestens eine Ziffer haben und entweder einen Dezimalpunkt oder `e` (oder `E`) enthalten.

Prägnanter ausgedrückt lautet die Syntax:

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
> Verwenden Sie kein Objektliteral am Anfang einer Anweisung! Dies wird zu einem Fehler führen (oder sich nicht so verhalten, wie Sie es erwarten), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr eine neue Zeichenkette, `"Saturn"`, zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort mit dem Ergebnis des Funktionsaufrufs `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine bestehende Variable (`sales`).

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

Zusätzlich können Sie eine numerische oder string-Literal für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes verschachteln. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können jede Zeichenkette sein, einschließlich der leeren Zeichenkette. Wenn der Eigenschaftsname kein gültiger JavaScript {{Glossary("Identifier", "Identifikator")}} oder keine Zahl wäre, muss er in Anführungszeichen gesetzt werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Punkt (`.`)-Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernotation (`[]`) zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objekt-Literale

Objekt-Literale unterstützen eine Reihe von Abkürzungssyntaxen, die das Setzen des Prototyps bei der Erstellung einschließen, Abkürzungen für `foo: foo`-Zuweisungen, das Definieren von Methoden, das Machen von `super`-Aufrufen und das Berechnen von Eigenschaftsnamen mit Ausdrücken.

Zusammen bringen diese auch Objekt-Literale und Klassen-Deklarationen näher zusammen und ermöglichen es dem objektbasierten Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

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

Ein String-Literal ist null oder mehr Zeichen eingeschlossen in doppelte (`"`) oder einfache (`'`) Anführungszeichen. Ein String muss durch Anführungszeichen des gleichen Typs umschlossen sein (das heißt, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Zeichenkettenliterale verwenden, es sei denn, Sie müssen speziell ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können eine beliebige der Methoden des {{jsxref("String")}}-Objekts auf einen Stringliteralwert aufrufen. JavaScript konvertiert das Stringliteral automatisch in ein temporäres Stringobjekt, ruft die Methode auf und verwirft dann das temporäre Stringobjekt. Sie können auch die `length`-Eigenschaft mit einem String-Literal verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template literals](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale sind durch das back-tick (`` ` ``) ([Gravis-Akzent](https://en.wikipedia.org/wiki/Grave_accent)) Zeichen statt durch doppelte oder einfache Anführungszeichen eingeschlossen.

Template-Literale bieten syntaktischen Zucker zum Konstruieren von Strings. (Dies ist ähnlich den String-Interpolation-Funktionen in Perl, Python und mehr.)

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

[Tagged templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax zum Angeben eines Template-Literals zusammen mit einem Aufruf einer "Tag"-Funktion, um es zu analysieren. Ein Tagged Template ist einfach eine prägnantere und semantische Art, eine Funktion aufzurufen, die eine Zeichenkette und eine Menge relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literal — wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` heißt. Die `print`-Funktion wird die Argumente interpolieren und Objekte oder Arrays, die möglicherweise auftreten, serialisieren, wobei das nervige `[object Object]` vermieden wird.

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

Da tagged Template-Literale nur Zucker für Funktionsaufrufe sind, können Sie das obige als gleichwertigen Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies mag an die `console.log`-Stil-Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das tagged Template natürlicher liest als eine traditionelle "Formatter"-Funktion, bei der Variablen und das Template selbst separat deklariert werden müssen.

#### Verwenden von Sonderzeichen in Strings

Zusätzlich zu gewöhnlichen Zeichen können Sie auch Sonderzeichen in Strings einfügen, wie im folgenden Beispiel gezeigt wird.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                                         |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                       |
| `\f`        | Seitenvorschub                                                                                                                                                                                                                                                    |
| `\n`        | Zeilenumbruch                                                                                                                                                                                                                                                     |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                     |
| `\t`        | Tabulator                                                                                                                                                                                                                                                         |
| `\v`        | Vertikaler Tabulator                                                                                                                                                                                                                                              |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                        |
| `\"`        | Doppeltes Anführungszeichen                                                                                                                                                                                                                                       |
| `\\`        | Backslash-Zeichen                                                                                                                                                                                                                                                 |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben wird. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch die zwei hexadezimalen Ziffern `XX` zwischen `00` und `FF` angegeben wird. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                            |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben wird. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie die Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                          |

#### Zeichen escapen

Für Zeichen, die nicht in der Tabelle aufgeführt sind, wird ein vorangestellter Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb eines Strings einfügen, indem Sie ihm einen Backslash voranstellen. Dies wird als _Escapen_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen tatsächlichen Backslash innerhalb eines Strings einzufügen, müssen Sie das Backslash-Zeichen escapen. Zum Beispiel, um den Dateipfad `c:\temp` in einer Zeichenkette zuzuweisen, verwenden Sie Folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche escapen, indem Sie ihnen einen Backslash voranstellen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert der Zeichenkette entfernt.

```js
const str =
  "this string \
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.
```

## Mehr Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, siehe auch die folgenden Kapitel in diesem Leitfaden:

- [Steuerung des Flusses und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns mit Steuerflusskonstrukten und Fehlerbehandlung beschäftigen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
