---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 479380f6646995feb0939327fcac978847bcf61a
---

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß- und kleinschreibungsempfindlich** und verwendet das **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh (was auf Deutsch "früh" bedeutet) als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Allerdings ist die Variable `früh` nicht identisch mit `Früh`, da JavaScript groß- und kleinschreibungsempfindlich ist.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht erforderlich, wenn sie auf einer eigenen Zeile steht. Wenn jedoch mehr als eine Anweisung auf einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln zur automatischen Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe das ausführliche Referenzdokument zu JavaScripts [lexikalischer Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar).)

Es wird jedoch als Best Practice angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, selbst wenn es nicht zwingend erforderlich ist. Diese Praxis verringert die Wahrscheinlichkeit, dass Fehler in den Code gelangen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenendezeichen_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabs und Zeilenumbrüche werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist die gleiche wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Sie können Blockkommentare nicht verschachteln. Dies passiert häufig, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar einfügen, was den Kommentar beenden wird.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster aufbrechen, zum Beispiel durch das Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Möglicherweise sehen Sie auch eine dritte Kommentar-Syntax am Anfang einiger JavaScript-Dateien, die folgendermaßen aussieht: `#!/usr/bin/env node`.
>
> Dies wird **Hashbang-Kommentar**-Syntax genannt und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine spezifiziert, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für mehr Details.

## Deklarationen

JavaScript verfügt über drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, optional initialisiert mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-scoped lokale Variable, optional initialisiert mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-scoped, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, die als {{Glossary("Identifier", "Identifiers")}} bezeichnet werden, müssen bestimmten Regeln entsprechen.

Ein JavaScript-Identifikator beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß- und kleinschreibungsempfindlich ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Identifizierern verwenden. (Für weitere Details siehe die Referenz zu [lexikalischer Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Identifizierern darzustellen.

Einige Beispiele für rechtmäßige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel: `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit den Schlüsselwörtern {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel: `let y = 13`. Diese Syntax kann verwendet werden, um eine block-scope lokale Variable zu deklarieren. (Siehe [Variable scope](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte unter Verwendung der [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax zu entpacken. Zum Beispiel: `const { bar } = foo`. Dies wird eine Variable mit dem Namen `bar` erzeugen und ihr den Wert zuweisen, der dem gleichnamigen Schlüssel unseres Objekts `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher die Zuweisung an nicht deklarierte Variablen, was eine **[undeclared global](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte insgesamt vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` wird als _Initializer_ bezeichnet. Die Deklaration ermöglicht es, später im Code auf die Variable zuzugreifen, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initializer der Variablen einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initializer optional. Wenn eine Variable ohne Initializer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen ist `let x = 42` gleichbedeutend mit `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initializer, da sie jede Art von Zuweisung nach der Deklaration verbieten und eine implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablenbereich

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Scopes")}} gehören:

- Globaler Scope: Der Standard-Scope für alle in Skript-Modus laufenden Codes.
- Modul-Scope: Der Scope für Codes, die im Modul-Modus laufen.
- Funktionsscope: Der Scope, der mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, zu einem zusätzlichen Scope gehören:

- Blockscope: Der Scope, der mit einem Paar geschweifter Klammern (ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellt wird.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, weil sie jedem anderen Code im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, weil sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf den [Block-Statement](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in dem sie deklariert werden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Jedoch sind mit `var` erstellte Variablen nicht blockgebunden, sondern nur lokal zum _Funktions- (oder globalen Scope)_, in dem sich der Block befindet.

Zum Beispiel wird der folgende Code `5` ausgeben, weil der Scope von `x` der globale Kontext ist (oder der Funktionskontext, wenn der Code Teil einer Funktion ist). Der Scope von `x` ist nicht auf den unmittelbaren `if`-Block beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

Mit `var` deklarierte Variablen werden {{Glossary("Hoisting", "gehoben")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Scope verweisen können, auch wenn ihre Deklaration noch nicht erreicht wurde. Sie können sich `var`-Deklarationen als "an die Spitze" ihrer Funktions- oder globalen Scope "gehoben" vorstellen. Jedoch, wenn Sie auf eine Variable zugreifen, bevor sie deklariert wird, ist der Wert immer `undefined`, weil nur die _Deklaration_ und die _Standardinitialisierung (mit `undefined`)_ gehoben werden, nicht aber die _Wertzuweisung_.

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

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion so nah wie möglich an den Anfang der Funktion gestellt werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Frage der Definitionsdebatte. Der Versuch, auf die Variable im Block vor der Variablendeklaration zuzugreifen, führt immer zu einem {{jsxref("ReferenceError")}}, weil sich die Variable in einer "[zeitlichen Todeszone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Verarbeitung der Deklaration befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht ihren Wert anheben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig angehoben — Sie können die Funktion sicher überall in ihrem Scope aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}}-Glossarbeitrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

In Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bieten.

Folglich können Sie auf globale Variablen, die in einem Fenster oder Frame deklariert sind, von einem anderen Fenster oder Frame zugreifen, indem Sie den `window`- oder `frame`-Namen angeben. Zum Beispiel, wenn eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie auf diese Variable aus einem `iframe` wie folgt zugreifen: `parent.phoneNumber`.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax eines Konstanten-Identifikators ist die gleiche wie bei jedem anderen Variablen-Identifikator: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrichzeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann während der Skriptausführung weder durch Zuweisung einen neuen Wert erhalten noch neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Scope-Regeln für Konstanten sind dieselben wie für `let`-Blockbereichsvariablen.

Sie können keine Konstante mit dem gleichen Namen wie eine Funktion oder Variable im gleichen Scope deklarieren. Zum Beispiel:

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

Allerdings verhindert `const` nur _Neu-Zuweisungen_, nicht aber _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung problemlos ausgeführt wird.

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

- Sieben Datentypen, die {{Glossary("Primitive", "primitive")}} sind:
  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript groß- und kleinschreibungsempfindlich ist, ist `null` nicht das gleiche wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine oberste Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine ganze Zahl oder eine Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine ganze Zahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenfolge, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen auszuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch eine Art von Objekt sind, können Sie sich Objekte als benannte Container für Werte vorstellen und Funktionen als Verfahren, die Ihr Skript ausführen kann.

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

Da JavaScript dynamisch typisiert ist, führt diese Zuweisung nicht zu einer Fehlermeldung.

### Zahlen und der '+'-Operator

In Ausdrücken mit numerischen und String-Werten, die den `+`-Operator verwenden, konvertiert JavaScript numerische Werte zu Strings. Zum Beispiel, beachten Sie die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Bei allen anderen Operatoren konvertiert JavaScript _nicht_ numerische Werte zu Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertierung von Strings zu Zahlen

Wenn ein Wert, der eine Zahl darstellt, im Speicher als String vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` gibt nur ganze Zahlen zurück, sodass seine Verwendung bei Dezimalzahlen eingeschränkt ist.

> [!NOTE]
> Eine bewährte Vorgehensweise bei `parseInt` ist, immer den _radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einem String zu erhalten, ist mit dem `+` (unären Plus) Operator. Dies führt implizit eine [Zahlkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die dem gleichen Prozess wie die {{jsxref("Number()")}}-Funktion entspricht.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte — keine Variablen —, die Sie in Ihr Skript _wörtlich_ eingeben. In diesem Abschnitt werden folgende Typen von Literalen beschrieben:

- [Array-Literale](#array-literale)
- [Boolesche Literale](#boolesche_literale)
- [Numerische Literale](#numerische_literale)
- [Objektliterale](#objektliterale)
- [RegExp-Literale](#regexp-literale)
- [Stringliterale](#stringliterale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckigen Klammern (`[]`). Wenn Sie ein Array mithilfe eines Array-Literals erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert, und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt bei jeder Auswertung des Literals ein neues Array-Objekt. Zum Beispiel, ein Array, das mit einem Literal im globalen Scope definiert ist, wird einmal erstellt, wenn das Skript geladen wird. Befindet sich jedoch das Array-Literal in einer Funktion, wird bei jedem Aufruf der Funktion ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie zwei Kommas in einem Array-Literal hintereinander setzen, lässt das Array einen leeren Platz für das nicht spezifizierte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der tatsächliche `undefined`-Wert. Bei der Verwendung von Array-Durchsuchungsmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) werden leere Felder übersprungen. Der Indexzugriff `fish[1]` gibt jedoch immer noch `undefined` zurück.

Wenn Sie ein abschließendes Komma am Ende der Liste der Elemente einfügen, wird das Komma ignoriert.

Im folgenden Beispiel beträgt die `length` des Arrays drei. Es gibt kein `myList[3]` und `myList[1]` ist leer. Alle anderen Kommas in der Liste kennzeichnen ein neues Element.

```js
const myList = ["home", , "school"];
```

Im folgenden Beispiel beträgt die `length` des Arrays vier und `myList[0]` sowie `myList[2]` fehlen.

```js
const myList = [, "home", , "school"];
```

In dem folgenden Beispiel beträgt die `length` des Arrays vier und `myList[1]` sowie `myList[3]` fehlen. **Nur das letzte Komma wird ignoriert.**

```js
const myList = ["home", , "school", ,];
```

> [!NOTE]
> [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) tragen dazu bei, git-diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements am Ende nur eine Zeile hinzufügt, die vorherige Zeile jedoch nicht verändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie Ihren eigenen Code schreiben, sollten Sie fehlende Elemente jedoch explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf das Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolesche Literale

Der Boolean-Typ hat zwei Literalwerte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie nicht die primitiven Boolean-Werte `true` und `false` mit den true- und false-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist eine Hülle um den primitiven Boolean-Datentyp. Siehe {{jsxref("Boolean")}} für mehr Informationen.

### Numerische Literale

JavaScript-numerische Literale schließen ganze Zahlen in verschiedenen Basen sowie Gleitkommaliterale in Basis-10 ein.

Beachten Sie, dass die Sprachspezifikation verlangt, dass numerische Literale unsigniert sind. Dennoch sind Codefragmente wie `-123.4` in Ordnung und werden als unärer `-` Operator interpretiert, der auf das numerische Literal `123.4` angewendet wird.

#### Ganze Zahlen-Literale

Ganzzahlen- und {{jsxref("BigInt")}}-Literale können in Dezimal (Basis 10), Hexadezimal (Basis 16), Oktal (Basis 8) und Binär (Basis 2) geschrieben werden.

- Ein _dezimales_ Ganzzahlliteral ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahlliteral oder eine führende `0o` (oder `0O`) zeigt an, dass es sich um _oktale_ Zahlen handelt. Oktale Ganzzahlliterale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) zeigt ein _hexadezimales_ Ganzzahlliteral an. Hexadezimale Zahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß-/Kleinschreibung eines Zeichens ändert dessen Wert nicht. Daher: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt ein _binäres_ Ganzzahlliteral an. Binäre Ganzzahlliterale können nur die Ziffern `0` und `1` enthalten.
- Ein suffix `n` bei einem Ganzzahlliteral zeigt ein {{jsxref("BigInt")}}-Literal an. Das {{jsxref("BigInt")}}-Literal kann alle oben genannten Basen verwenden. Beachten Sie, dass das führende Null-Oktalsyntax wie `0123n` nicht erlaubt ist, aber `0o123n` in Ordnung ist.

Einige Beispiele für Ganzzahl-Literale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für mehr Informationen siehe [Numerische Literale in der lexikalischen Grammatikreferenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitpunkt-Literale

Ein Gleitpunkt-Literal kann die folgenden Teile haben:

- Eine unvorzeichenbehaftete Dezimalganzzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die vorzeichenbehaftet sein kann (eingeleitet durch `+` oder `-`). Ein Gleitpunkt-Literal muss mindestens eine Ziffer und entweder einen Dezimalpunkt oder `e` (oder `E`) enthalten.

Kürzer beschrieben ist die Syntax:

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

### Objektliterale

Ein Objektliteral ist eine Liste mit null oder mehr Paaren von Eigenschaftsnamen und zugeordneten Werten eines Objekts, eingeschlossen in geschweiften Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objektliteral am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objektliteral. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String zu, `"Saturn"`; das zweite Element, die `getCar`-Eigenschaft, wird sofort mit dem Ergebnis des Aufrufs der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine bestehende Variable (`sales`).

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

Darüber hinaus können Sie einen numerischen oder string Literal für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes verschachteln. Das folgende Beispiel nutzt diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Eigenschaftsnamen von Objekten können beliebige Strings sein, einschließlich des leeren Strings. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "Identifikator")}} oder keine Zahl ist, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Identifikatoren sind, können nicht als Punkt (`.`)-Eigenschaften aufgerufen werden.

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

#### Verbesserte Objektliterale

Objektliterale unterstützen eine Reihe von Kurznotierungen, die das Festlegen des Prototyps bei der Konstruktion, Kurzformen für `foo: foo`-Zuweisungen, die Definition von Methoden, das Aufrufen von `super`-Methoden und die Berechnung von Eigenschaftsnamen mit Ausdrücken umfassen.

Diese bringen Objektliterale und Klassendeklarationen näher zusammen und ermöglichen es objektbasierten Designs, von den gleichen Annehmlichkeiten zu profitieren.

```js
const theProtoObj = {};
const handler = {};
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return `d ${super.toString()}`;
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};
```

### RegExp-Literale

Ein Regex-Literal (das im Detail [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) definiert wird) ist ein Muster zwischen Schrägstrichen eingeschlossen. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### Stringliterale

Ein Stringliteral ist null oder mehr Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind. Ein String muss durch Anführungszeichen des gleichen Typs begrenzt werden (das heißt, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für Stringliterale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Stringliterale verwenden, es sei denn, Sie müssen ausdrücklich ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für Details zu `String`-Objekten.

Sie können alle Methoden des {{jsxref("String")}}-Objekts auf einen Stringliteral-Wert aufrufen. JavaScript wandelt den Stringliteral automatisch in ein temporäres String-Objekt um, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem Stringliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden durch das Back-Tick-Zeichen (`` ` ``) ([Gravis](https://en.wikipedia.org/wiki/Grave_accent)) anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Template-Literale bieten syntaktische Zucker für die Konstruktion von Strings. (Dies ähnelt den String-Interpolationsfunktionen in Perl, Python und mehr.)

```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`;

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const name = "Lev",
  time = "today";
`Hello ${name}, how are you ${time}?`;
```

[Tagged Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Template-Literal zusammen mit einem Aufruf einer "Tag"-Funktion zum Parsen zu spezifizieren. Ein Tag-Template ist nur eine knappe und semantische Möglichkeit, eine Funktion aufzurufen, die einen String und eine Menge relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion geht dem Template-Literal voraus — wie im folgenden Beispiel, bei dem die Template-Tag-Funktion `print` heißt. Die `print`-Funktion wird die Argumente interpolieren und Objekte oder Arrays, die auftreten können, serialisieren, wodurch das lästige `[object Object]` vermieden wird.

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

Da Tag-Template-Literale nur Zucker für Funktionsaufrufe sind, können Sie das obige als einen äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies kann an die `console.log`-Art der Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Sie können sehen, wie das Tag-Template natürlicher gelesen wird als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwendung von Sonderzeichen in Strings

Zusätzlich zu normalen Zeichen können Sie auch Sonderzeichen in Strings einschließen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Null-Byte                                                                                                                                                                                                                                                         |
| `\b`        | Rückschritt                                                                                                                                                                                                                                                       |
| `\f`        | Form Feed                                                                                                                                                                                                                                                         |
| `\n`        | Zeilenumbruch                                                                                                                                                                                                                                                     |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                     |
| `\t`        | Tab                                                                                                                                                                                                                                                               |
| `\v`        | Vertikaltabulator                                                                                                                                                                                                                                                 |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                        |
| `\"`        | Doppelte Anführungszeichen                                                                                                                                                                                                                                        |
| `\\`        | Rückwärtsstrichzeichen                                                                                                                                                                                                                                            |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` angegeben wird. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                                     |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF` angegeben wird. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                                          |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` angegeben wird. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` dasselbe wie die Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                          |

#### Zeichen entkommen

Für Zeichen, die nicht in der Tabelle aufgelistet sind, wird ein vorausgehender Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb eines Strings einfügen, indem Sie es mit einem Backslash versehen. Dies wird als _Escaping_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen literalen Rückwärtsschrägstrich innerhalb eines Strings einzuschließen, müssen Sie das Rückwärtsschrägstrichzeichen escapen. Zum Beispiel, um den Dateipfad `c:\temp` einer Zeichenfolge zuzuweisen, verwenden Sie Folgendes:

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

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, lesen Sie auch die folgenden Kapitel in diesem Leitfaden:

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werfen wir einen Blick auf Kontrollflusskonstrukte und Fehlerbehandlung.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
