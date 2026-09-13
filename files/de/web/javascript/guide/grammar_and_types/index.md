---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 5c2f37be306da020cd8b3a08f23a28a2bf6111a9
---

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Dieses Kapitel behandelt die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale.

## Grundlagen

JavaScript übernimmt den Großteil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **schreibungsabhängig** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript schreibungsabhängig ist.

In JavaScript werden Anweisungen {{Glossary("Statement", "Anweisungen")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht erforderlich, wenn sie in einer eigenen Zeile steht. Wenn jedoch mehr als eine Anweisung in einer Zeile gewünscht ist, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die detaillierte Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es gilt jedoch als beste Praxis, immer ein Semikolon nach einer Anweisung zu schreiben, auch wenn es nicht unbedingt erforderlich ist. Diese Praxis reduziert die Wahrscheinlichkeit, dass Fehler in den Code gelangen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Folge von Eingabeelementen umgewandelt, die _Tokens_, _Steuerzeichen_, _Zeilenendzeichen_, _Kommentare_ oder {{Glossary("whitespace", "Leerzeichen")}} sind. (Leerzeichen, Tabulatoren und Zeilenendzeichen werden als Leerzeichen betrachtet.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

Blockkommentare können nicht verschachtelt werden. Dies passiert häufig, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar aufnehmen, die den Kommentar beendet.

```js-nolint example-bad
/* You can't, however, /* nest comments */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster unterbrechen. Zum Beispiel durch das Einfügen eines Backslashes:

```js
/* You can /* nest comments *\/ by escaping slashes */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung verworfen.

> [!NOTE]
> Sie können möglicherweise eine dritte Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentar**-Syntax bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angeben soll, die das Skript ausführen soll. Siehe [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) für weitere Details.

## Deklarationen

JavaScript hat fünf Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-sichtbare Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-sichtbare Variable, die nicht neu zugewiesen werden kann, und die bei der Deklaration initialisiert werden muss.
- {{jsxref("Statements/using", "using")}}
  - : Deklariert eine Variable wie `const`, die _synchron entsorgt_ wird.
- {{jsxref("Statements/await_using", "await using")}}
  - : Deklariert eine Variable wie `const`, die _asynchron entsorgt_ wird.

Wir werden in diesem Artikel nur über die ersten drei sprechen: `var`, `let` und `const`. Die Deklarationen `using` und `await using` werden in [Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management) eingeführt.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, sogenannte {{Glossary("Identifier", "Bezeichner")}}, müssen bestimmten Regeln entsprechen.

Ein JavaScript-Bezeichner beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript schreibungsabhängig ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Bezeichnern verwenden. (Für weitere Details siehe die [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)-Referenz.) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Bezeichnern darzustellen.

Einige Beispiele für zulässige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Variablen deklarieren

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine block-sichtbare lokale Variable zu deklarieren. (Siehe [Variablensichtbarkeit](#variablensichtbarkeit) unten.)

Sie können Variablen deklarieren, um Werte mit der [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring)-Syntax zu entpacken. Zum Beispiel `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem Schlüssel mit demselben Namen in unserem Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte früher die Zuweisung zu nicht deklarierten Variablen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erstellt. Dies ist ein Fehler im [strengen Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) und sollte vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` wird als _Initialisierer_ bezeichnet. Die Deklaration ermöglicht es, später im Code auf die Variable zuzugreifen, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer der Variable einen Wert zuweist. In `var`- und `let`-Deklarationen ist der Initialisierer optional. Wenn eine Variable ohne Initialisierer deklariert wird, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // logs "undefined"
```

Im Wesentlichen entspricht `let x = 42` der Anweisung `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie jede Art von Zuweisung nach der Deklaration verbieten und das implizite Initialisieren mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Missing initializer in const declaration
```

### Variablensichtbarkeit

Eine Variable kann zu einem der folgenden {{Glossary("Scope", "Sichtbarkeiten")}} gehören:

- Globale Sichtbarkeit: Die Standardsichtbarkeit für alle im Skriptmodus ausgeführten Codes.
- Modulsichtbarkeit: Die Sichtbarkeit für im Modulmodus ausgeführten Code.
- Funktionssichtbarkeit: Die Sichtbarkeit, die mit einer {{Glossary("function", "Funktion")}} erstellt wird.

Darüber hinaus können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert wurden, zu einer zusätzlichen Sichtbarkeit gehören:

- Block-Sichtbarkeit: Die durch ein Paar geschweifter Klammern (einen [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellte Sichtbarkeit.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, da sie anderen Codes im aktuellen Dokument zur Verfügung steht. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, da sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf die [Block-Anweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in der sie deklariert sind.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

Jedoch sind Variablen, die mit `var` erstellt wurden, nicht block-sichtbar, sondern nur lokal zur _Funktion (oder globalen Sichtbarkeit)_, in der sich der Block befindet.

Zum Beispiel wird der folgende Code `5` protokollieren, da die Sichtbarkeit von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Die Sichtbarkeit von `x` ist nicht auf den unmittelbaren `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```

### Variablen-Hoisting

Mit `var`-deklarierte Variablen werden {{Glossary("Hoisting", "gehoben")}}, was bedeutet, dass Sie auf die Variable überall in ihrem Sichtbarkeitsbereich verweisen können, selbst wenn ihre Deklaration noch nicht erreicht ist. Sie können `var`-Deklarationen so betrachten, dass sie an den Anfang ihres Funktions- oder globalen Sichtbarkeitsbereichs "gehoben" werden. Allerdings, wenn Sie auf eine Variable zugreifen, bevor sie deklariert wird, ist der Wert immer `undefined`, da nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoben, nicht aber ihre _Wertzuweisung_.

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

Aufgrund des Hoistings sollten alle `var`-Anweisungen in einer Funktion so nahe am Anfang der Funktion wie möglich platziert werden. Diese beste Praxis erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Definitionsfrage. Das Verweisen auf die Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, weil die Variable in einer "[zeitlichen Todeszone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" von Beginn des Blocks bis zur Verarbeitung der Deklaration ist.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht deren Wert hoisten, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben - Sie können die Funktion sicher überall in ihrem Geltungsbereich aufrufen. Siehe den {{Glossary("Hoisting", "Hoisting")}} Glossareintrag für weitere Diskussionen.

### Globale Variablen

Globale Variablen sind in der Tat Eigenschaften des _globalen Objekts_.

Auf Webseiten ist das globale Objekt [`window`](/de/docs/Web/API/Window), sodass Sie globale Variablen mit der Syntax `window.variable` lesen und setzen können. In allen Umgebungen kann die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies soll eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten bieten.

Folglich können Sie auf globale Variablen, die in einem Fenster oder Rahmen deklariert wurden, von einem anderen Fenster oder Rahmen zugreifen, indem Sie den Namen des `window` oder `frame` angeben. Zum Beispiel, wenn eine Variable namens `phoneNumber` in einem Dokument deklariert wird, können Sie in einem `iframe` auf diese Variable als `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax eines Konstantenbezeichners entspricht jedem Variablenbezeichner: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrichzeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert durch Zuweisung nicht ändern oder während der Ausführung des Skripts neu deklariert werden. Sie muss mit einem Wert initialisiert werden. Die Geltungsbereichsregeln für Konstanten sind dieselben wie für `let`-block-sichtbare Variablen.

Sie können eine Konstante nicht mit demselben Namen wie eine Funktion oder Variable im selben Geltungsbereich deklarieren. Zum Beispiel:

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

Allerdings verhindert `const` nur _Neu-Zuweisungen_, aber nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

- Sieben Datentypen sind {{Glossary("Primitive", "Primitive")}}:
  1. {{Glossary("Boolean", "Boolean")}}. `true` und `false`.
  2. {{Glossary("null", "null")}}. Ein spezielles Schlüsselwort, das einen Nullwert kennzeichnet. (Da JavaScript schreibungsabhängig ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder irgendeine andere Variante.)
  3. {{Glossary("undefined", "undefined")}}. Eine Top-Level-Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number", "Number")}}. Eine Ganzzahl oder eine Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt", "BigInt")}}. Eine Ganzzahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String", "String")}}. Eine Zeichenkette, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object", "Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Während Funktionen technisch gesehen eine Art Objekt sind, können Sie sich Objekte als benannte Container für Werte vorstellen und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Konvertierung von Datentypen

JavaScript ist eine _dynamisch getypte_ Sprache. Das bedeutet, dass Sie den Datentyp einer Variablen nicht angeben müssen, wenn Sie sie deklarieren. Es bedeutet auch, dass Datentypen während der Skriptausführung nach Bedarf automatisch konvertiert werden.

So könnten Sie beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie derselben Variablen einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch getypt ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und Zeichenkettenwerte mit dem `+`-Operator enthalten, konvertiert JavaScript numerische Werte in Zeichenfolgen. Betrachten Sie zum Beispiel die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

Bei allen anderen Operatoren konvertiert JavaScript _nicht_ numerische Werte in Zeichenfolgen. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Zeichenfolgen in Zahlen umwandeln

Falls ein Wert, der eine Zahl darstellt, im Speicher als Zeichenfolge vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}
- {{jsxref("Number()")}}

`parseInt` liefert nur ganze Zahlen zurück, daher ist sein Nutzen für Dezimalzahlen eingeschränkt.

> [!NOTE]
> Zusätzlich ist es eine bewährte Praxis für `parseInt`, immer den _Radix_-Parameter einzuschließen. Der Radix-Parameter wird verwendet, um anzugeben, welches Zahlensystem verwendet werden soll.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einer Zeichenkette zu erhalten, ist der `+` (unäre Plus) Operator. Dies führt implizit eine [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) durch, die derselbe Prozess ist wie die {{jsxref("Number()")}}-Funktion.

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Note: the parentheses are added for clarity, not required.
```

## Literale

_Literale_ stellen Werte in JavaScript dar. Dies sind feste Werte - keine Variablen -, die Sie _buchstäblich_ in Ihr Skript aufnehmen. Dieser Abschnitt beschreibt die folgenden Typen von Literalen:

- [Array-Literale](#array-literale)
- [Boolesche Literale](#boolesche_literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [Zeichenketten-Literale](#zeichenketten-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als Elemente initialisiert, und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal, wenn das Literal ausgewertet wird, ein neues Array-Objekt. Zum Beispiel wird ein Array, das mit einem Literal im globalen Geltungsbereich definiert wird, einmal erstellt, wenn das Skript geladen wird. Wenn das Array-Literal jedoch innerhalb einer Funktion ist, wird jedes Mal, wenn diese Funktion aufgerufen wird, ein neues Array instanziiert.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Siehe {{jsxref("Array")}} und [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) für Details zu `Array`-Objekten.

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie zwei Kommas in einer Reihe in einem Array-Literal platzieren, lässt das Array einen leeren Slot für das nicht spezifizierte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, werden Sie sehen:

```js
console.log(fish);
// [ 'Lion', <1 empty item>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie der tatsächliche `undefined`-Wert. Wenn Sie Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, werden leere Slots übersprungen. Das Indexzugreifen `fish[1]` gibt jedoch immer noch `undefined` zurück.

Wenn Sie ein abschließendes Komma am Ende der Liste der Elemente einschließen, wird das Komma ignoriert.

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

> [!NOTE]
> [Nachlaufende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen dabei, git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements an das Ende nur eine Zeile hinzufügt, aber die vorherige Zeile nicht ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente ausdrücklich als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf ihr Fehlen hinzuweisen. Dies erhöht die Klarheit und Wartbarkeit Ihres Codes.

```js-nolint
const myList = ["home", /* empty */, "school", /* empty */, ];
```

### Boolesche Literale

Der Boolesche Typ hat zwei literale Werte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie die primitiven Booleschen Werte `true` und `false` nicht mit den true- und false-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Booleschen Datentyp. Siehe {{jsxref("Boolean")}} für weitere Informationen.

### Numerische Literale

JavaScript-Numerikliterale umfassen Ganzzahlliterale in verschiedenen Basen sowie Gleitkommaliterale in Basis-10.

Beachten Sie, dass die Sprachspezifikation erfordert, dass numerische Literale nicht signiert sind. Dennoch sind Codefragmente wie `-123.4` in Ordnung, da sie als unäre `-`-Operator auf das numerische Literal `123.4` angewendet interpretiert werden.

#### Ganzzahlliterale

Ganzzahlen und {{jsxref("BigInt")}}-Literale können in Dezimal (Basis 10), Hexadezimal (Basis 16), Oktal (Basis 8) und Binär (Basis 2) geschrieben werden.

- Ein _dezimaler_ Ganzzahlliteral ist eine Folge von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) auf einem Ganzzahlliteral, oder eine führende `0o` (oder `0O`) weist darauf hin, dass es sich um eine _oktal_ handelt. Oktale Ganzzahlliterale können nur die Ziffern `0` – `7` enthalten.
- Eine führende `0x` (oder `0X`) weist auf ein _hexadezimalen_ Ganzzahlliteral hin. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` und `A` – `F` enthalten. (Die Groß-/Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Eine führende `0b` (oder `0B`) zeigt auf ein _binäres_ Ganzzahlliteral hin. Binäre Ganzzahlliterale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix auf einem Ganzzahlliteral weist auf ein {{jsxref("BigInt")}}-Literal hin. Das {{jsxref("BigInt")}}-Literal kann jede der oben genannten Basen verwenden. Beachten Sie, dass eine Syntax mit führenden Nullen wie `0123n` nicht erlaubt ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahlliterale sind:

```plain
0, 117, 123456789123456789n             (decimal, base 10)
015, 0001, 0o777777777777n              (octal, base 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)
```

Für weitere Informationen siehe [Numerische Literale in der Lexikalische Grammatik Referenz](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkommaliterale

Ein Gleitkommaliteral kann die folgenden Teile haben:

- Eine unsignierte Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E`, gefolgt von einer Ganzzahl, die positiv oder negativ sein kann (mit `+` oder `-` vorangestellt). Ein Gleitkommaliteral muss mindestens eine Ziffer und entweder einen Dezimalpunkt oder ein `e` (oder `E`) haben.

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

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweiften Klammern (`{}`).

> [!WARNING]
> Verwenden Sie kein Objekt-Literal am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich nicht wie erwartet), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr eine neue Zeichenkette, `"Saturn"`, zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort mit dem Ergebnis des Aufrufs der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

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

Zusätzlich können Sie eine numerische oder Zeichenkettenliterale für den Namen einer Eigenschaft verwenden oder ein Objekt in ein anderes einbetten. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können beliebige Zeichenketten sein, einschließlich der leeren Zeichenkette. Wenn der Eigenschaftenname kein gültiger JavaScript-{{Glossary("Identifier", "Bezeichner")}} oder keine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Punkt (`.`)-Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !
```

Stattdessen müssen sie mit der Klammernotation (`[]`) zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

#### Erweiterte Objektliterale

Objekt-Literale unterstützen eine Reihe von Kurzschreibweisen, die das Festlegen des Prototyps bei der Erstellung, die Kurzschreibweise für `foo: foo`-Zuweisungen, das Definieren von Methoden, das Aufrufen von `super` und das Berechnen von Eigenschaftsnamen mit Ausdrücken umfassen.

Zusammen bringen diese auch Objektliterale und Klassendeklarationen näher zusammen und ermöglichen objekbasierter Designansätzen einige derselben Annehmlichkeiten zu profitieren.

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

Ein Regex-Literal (das ausführlich [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regex-Literal.

```js
const re = /ab+c/;
```

### Zeichenketten-Literale

Ein Zeichenkettenliteral besteht aus null oder mehr Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind. Eine Zeichenkette muss durch Anführungszeichen des gleichen Typs begrenzt werden (entweder beide einfache oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für Zeichenkettenliterale:

```js-nolint
'foo'
"bar"
'1234'
'one line \n another line'
"Joyo's cat"
```

Sie sollten Zeichenkettenliterale verwenden, es sei denn, Sie müssen speziell ein `String`-Objekt verwenden. Siehe {{jsxref("String")}} für weitere Details zu `String`-Objekten.

Sie können jede der Methoden des {{jsxref("String")}}-Objekts auf einem Zeichenkettenliteralwert aufrufen. JavaScript konvertiert das Zeichenkettenliteral automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem Zeichenkettenliteral verwenden:

```js
// Will print the number of symbols in the string including whitespace.
console.log("Joyo's cat".length); // In this case, 10.
```

[Template-Literals](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale sind in ein Backtick (`` ` ``) ([Gravis](https://en.wikipedia.org/wiki/Grave_accent))-Zeichen anstelle von doppelten oder einfachen Anführungszeichen eingeschlossen.

Template-Literale bieten Zuckersyntax für die Erstellung von Zeichenketten. (Dies ähnelt den String-Interpolationseigenschaften in Perl, Python und mehr.)

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

[Getaggte Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax, um ein Template-Literal zusammen mit einem Aufruf einer "Tag"-Funktion zu spezifizieren, um es zu parsen. Ein getaggtes Template ist nur eine prägnantere und semantischere Möglichkeit, eine Funktion aufzurufen, die eine Zeichenkette und eine Reihe relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literal - wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion wird die Argumente interpolieren und alle Objekte oder Arrays serialisieren, die auftreten können, um das lästige `[object Object]` zu vermeiden.

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

Da getaggte Template-Literale nur Zucker für Funktionsaufrufe sind, können Sie das obige als äquivalenten Funktionsaufruf umschreiben:

```js
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
```

Dies könnte an die `console.log`-Art der Interpolation erinnern:

```js
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);
```

Man kann sehen, wie das getaggte Template natürlicher ist als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwenden spezieller Zeichen in Zeichenketten

Zusätzlich zu normalen Zeichen können Sie auch Sonderzeichen in Zeichenketten einfügen, wie im folgenden Beispiel gezeigt.

```js
"one line \n another line";
```

Die folgende Tabelle listet die Sonderzeichen auf, die Sie in JavaScript-Zeichenketten verwenden können.

| Zeichen     | Bedeutung                                                                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Nullbyte                                                                                                                                                                                                                                                      |
| `\b`        | Rücktaste                                                                                                                                                                                                                                                     |
| `\f`        | Formularvorschub                                                                                                                                                                                                                                              |
| `\n`        | Neue Zeile                                                                                                                                                                                                                                                    |
| `\r`        | Wagenrücklauf                                                                                                                                                                                                                                                 |
| `\t`        | Tabulator                                                                                                                                                                                                                                                     |
| `\v`        | Vertikaltab                                                                                                                                                                                                                                                   |
| `\'`        | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                                    |
| `\"`        | Doppelte Anführungszeichen                                                                                                                                                                                                                                    |
| `\\`        | Backslash-Zeichen                                                                                                                                                                                                                                             |
| `\XXX`      | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei Oktalziffern `XXX` zwischen `0` und `377` angegeben ist. Zum Beispiel ist `\251` die Oktalsequenz für das Copyright-Symbol.                                                                      |
| `\xXX`      | Das Zeichen mit der Latin-1-Codierung, die durch die zwei Hexadezimalziffern `XX` zwischen `00` und `FF` angegeben ist. Zum Beispiel ist `\xA9` die Hexadezimalsequenz für das Copyright-Symbol.                                                              |
| `\uXXXX`    | Das Unicode-Zeichen, das durch die vier Hexadezimalziffern `XXXX` angegeben ist. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}` | Unicode-Codepunkt-Escapes. Zum Beispiel entspricht `\u{2F804}` den Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                                            |

#### Zeichen entziehen

Für Zeichen, die in der Tabelle nicht aufgeführt sind, wird ein vorangestellter Backslash ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb einer Zeichenkette einfügen, indem Sie ihm einen Backslash voranstellen. Dies ist als _Escaping_ des Anführungszeichens bekannt. Zum Beispiel:

```js-nolint
const quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);
```

Das Ergebnis davon wäre:

```plain
He read "The Cremation of Sam McGee" by R.W. Service.
```

Um einen wörtlichen Backslash innerhalb einer Zeichenkette einzuschließen, müssen Sie das Backslash-Zeichen entziehen. Zum Beispiel, um den Dateipfad `c:\temp` einer Zeichenkette zuzuweisen, verwenden Sie folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche durch Voranstellen mit Backslash entziehen. Der Backslash und der Zeilenumbruch werden beide aus dem Wert der Zeichenkette entfernt.

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

- [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns mit Kontrollflusskonstrukten und Fehlerbehandlung befassen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
