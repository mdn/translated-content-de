---
title: Grammatik und Typen
slug: Web/JavaScript/Guide/Grammar_and_types
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

In diesem Kapitel werden die grundlegende Grammatik von JavaScript, Variablendeklarationen, Datentypen und Literale besprochen.

## Grundlagen

JavaScript übernimmt den größten Teil seiner Syntax von Java, C und C++, wurde aber auch von Awk, Perl und Python beeinflusst.

JavaScript ist **groß- und kleinschreibungsempfindlich** und verwendet den **Unicode**-Zeichensatz. Zum Beispiel könnte das Wort Früh als Variablenname verwendet werden.

```js
const Früh = "foobar";
```

Aber die Variable `früh` ist nicht dasselbe wie `Früh`, da JavaScript groß- und kleinschreibungsempfindlich ist.

In JavaScript werden Anweisungen {{Glossary("Statement", "statements")}} genannt und durch Semikolons (;) getrennt.

Ein Semikolon ist nach einer Anweisung nicht erforderlich, wenn sie in einer eigenen Zeile steht. Wenn jedoch mehrere Anweisungen in einer Zeile stehen sollen, _müssen_ sie durch Semikolons getrennt werden.

> [!NOTE]
> ECMAScript hat auch Regeln für die automatische Einfügung von Semikolons ([ASI](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)), um Anweisungen zu beenden. (Für weitere Informationen siehe die ausführliche Referenz zur [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar) von JavaScript.)

Es wird jedoch als Best Practice angesehen, immer ein Semikolon nach einer Anweisung zu schreiben, selbst wenn es nicht zwingend erforderlich ist. Diese Praxis reduziert die Wahrscheinlichkeit, dass sich Fehler im Code einschleichen.

Der Quelltext eines JavaScript-Skripts wird von links nach rechts gescannt und in eine Sequenz von Eingabeelementen umgewandelt, die _Token_, _Steuerzeichen_, _Zeilenendzeichen_, _Kommentare_ oder {{Glossary("whitespace")}} sind. (Leerzeichen, Tabs und Zeilenumbrüche werden als Leerzeichen angesehen.)

## Kommentare

Die Syntax von **Kommentaren** ist dieselbe wie in C++ und vielen anderen Sprachen:

```js
// ein einzeiliger Kommentar

/* dies ist ein längerer,
 * mehrzeiliger Kommentar
 */
```

Sie können Blockkommentare nicht verschachteln. Dies geschieht oft, wenn Sie versehentlich eine `*/`-Sequenz in Ihren Kommentar aufnehmen, die den Kommentar beendet.

```js-nolint example-bad
/* Sie können jedoch keine /* Kommentare verschachteln */ SyntaxError */
```

In diesem Fall müssen Sie das `*/`-Muster unterbrechen. Zum Beispiel, indem Sie einen Rückwärtsschrägstrich einfügen:

```js
/* Sie können /* Kommentare verschachteln *\/ durch Escapen der Schrägstriche */
```

Kommentare verhalten sich wie Leerzeichen und werden während der Skriptausführung ignoriert.

> [!NOTE]
> Sie können auch eine dritte Art von Kommentarsyntax am Anfang einiger JavaScript-Dateien sehen, die etwa so aussieht: `#!/usr/bin/env node`.
>
> Dies wird als **Hashbang-Kommentarsyntax** bezeichnet und ist ein spezieller Kommentar, der den Pfad zu einer bestimmten JavaScript-Engine angibt, die das Skript ausführen soll. Weitere Informationen finden Sie unter [Hashbang-Kommentare](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments).

## Deklarationen

JavaScript hat drei Arten von Variablendeklarationen.

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-lokale Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-lokale, schreibgeschützte benannte Konstante.

### Variablen

Sie verwenden Variablen als symbolische Namen für Werte in Ihrer Anwendung. Die Namen von Variablen, sogenannte {{Glossary("Identifier", "identifiers")}}, müssen bestimmten Regeln entsprechen.

Ein JavaScript-Identifier beginnt normalerweise mit einem Buchstaben, Unterstrich (`_`) oder Dollarzeichen (`$`). Nachfolgende Zeichen können auch Ziffern (`0` – `9`) sein. Da JavaScript groß- und kleinschreibungsempfindlich ist, umfassen Buchstaben die Zeichen `A` bis `Z` (Großbuchstaben) sowie `a` bis `z` (Kleinbuchstaben).

Sie können die meisten Unicode-Buchstaben wie `å` und `ü` in Bezeichnern verwenden. (Weitere Informationen finden Sie im Referenzhandbuch der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers).) Sie können auch [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) verwenden, um Zeichen in Bezeichnern darzustellen.

Einige Beispiele für zulässige Namen sind `Number_hits`, `temp99`, `$credit` und `_name`.

### Deklaration von Variablen

Sie können eine Variable auf zwei Arten deklarieren:

- Mit dem Schlüsselwort {{jsxref("Statements/var", "var")}}. Zum Beispiel `var x = 42`. Diese Syntax kann verwendet werden, um sowohl **lokale** als auch **globale** Variablen zu deklarieren, abhängig vom _Ausführungskontext_.
- Mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} oder {{jsxref("Statements/let", "let")}}. Zum Beispiel `let y = 13`. Diese Syntax kann verwendet werden, um eine blockbezogene lokale Variable zu deklarieren. (Siehe [Variablenbereich](#variablenbereich) unten.)

Sie können Variablen deklarieren, um Werte mit der Syntax der [Destructuring-Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) zu entpacken. Zum Beispiel `const { bar } = foo`. Dies erstellt eine Variable namens `bar` und weist ihr den Wert zu, der dem Schlüssel desselben Namens im Objekt `foo` entspricht.

Variablen sollten immer deklariert werden, bevor sie verwendet werden. JavaScript erlaubte es früher, nicht deklarierte Variablen zuzuweisen, was eine **[nicht deklarierte globale](/de/docs/Web/JavaScript/Reference/Statements/var#description)** Variable erzeugt. Dies ist im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode#assigning_to_undeclared_variables) ein Fehler und sollte vollständig vermieden werden.

### Deklaration und Initialisierung

In einer Anweisung wie `let x = 42` wird der Teil `let x` als _Deklaration_ bezeichnet, und der Teil `= 42` wird als _Initialisierung_ bezeichnet. Die Deklaration ermöglicht es, später im Code auf die Variable zuzugreifen, ohne einen {{jsxref("ReferenceError")}} auszulösen, während der Initialisierer einen Wert an die Variable zuweist. Bei `var`- und `let`-Deklarationen ist der Initialisierer optional. Wird eine Variable ohne Initialisierer deklariert, wird ihr der Wert [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) zugewiesen.

```js
let x;
console.log(x); // protokolliert "undefined"
```

Im Wesentlichen entspricht `let x = 42` der Deklaration `let x; x = 42`.

`const`-Deklarationen benötigen immer einen Initialisierer, da sie keine Art von Zuweisung nach der Deklaration zulassen und ihre implizite Initialisierung mit `undefined` wahrscheinlich ein Programmierfehler ist.

```js-nolint example-bad
const x; // SyntaxError: Fehlender Initialisierer in const-Deklaration
```

### Variablenbereich

Eine Variable kann einem der folgenden [Bereiche](/de/docs/Glossary/Scope) angehören:

- Globaler Bereich: Der Standardbereich für sämtlichen im Skriptmodus laufenden Code.
- Modul-Bereich: Der Bereich für Code im Modulmodus.
- Funktionsbereich: Der durch eine {{Glossary("function")}}-Deklaration erstellte Bereich.

Zusätzlich können Variablen, die mit [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) deklariert werden, einem zusätzlichen Bereich angehören:

- Blockbereicht: Der durch ein Paar geschweifter Klammern (ein [Block](/de/docs/Web/JavaScript/Reference/Statements/block)) erstellte Bereich.

Wenn Sie eine Variable außerhalb einer Funktion deklarieren, wird sie als _globale_ Variable bezeichnet, weil sie in jedem anderen Code im aktuellen Dokument verfügbar ist. Wenn Sie eine Variable innerhalb einer Funktion deklarieren, wird sie als _lokale_ Variable bezeichnet, weil sie nur innerhalb dieser Funktion verfügbar ist.

`let`- und `const`-Deklarationen können auch auf den [Blockanweisung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement) beschränkt sein, in der sie deklariert werden.

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y ist nicht definiert
```

Allerdings sind mit `var` erstellte Variablen nicht blockbezogen, sondern nur lokal zum _Funktions- (oder globalen Bereich)_, in dem sich der Block befindet.

Beispielsweise wird der folgende Code `5` protokollieren, da der Bereich von `x` der globale Kontext (oder der Funktionskontext, wenn der Code Teil einer Funktion ist) ist. Der Bereich von `x` ist nicht auf den unmittelbar `if`-Anweisungsblock beschränkt.

```js
if (true) {
  var x = 5;
}
console.log(x); // x ist 5
```

### Variablen-Hoisting

`var`-Deklarationen werden [gehoben](/de/docs/Glossary/Hoisting), was bedeutet, dass Sie innerhalb ihres Bereichs auf die Variable verweisen können, selbst wenn ihre Deklaration noch nicht erreicht wurde. Sie können sich `var`-Deklarationen als "nach oben gehoben" denken, zu ihrem Funktions- oder globalen Bereich. Wenn Sie jedoch auf eine Variable zugreifen, bevor sie deklariert ist, ist der Wert immer `undefined`, weil nur ihre _Deklaration_ und _Standardinitialisierung (mit `undefined`)_ gehoben wird, nicht aber ihre _Wertzuweisung_.

```js
console.log(x === undefined); // true
var x = 3;

(function () {
  console.log(x); // undefined
  var x = "lokaler Wert";
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
  x = "lokaler Wert";
})();
```

Aufgrund von Hoisting sollten alle `var`-Anweisungen in einer Funktion möglichst nah an den Anfang der Funktion gestellt werden. Diese Best Practice erhöht die Klarheit des Codes.

Ob `let` und `const` gehoben werden, ist eine Definitionsfrage. Das Referenzieren der Variable im Block vor der Variablendeklaration führt immer zu einem {{jsxref("ReferenceError")}}, weil sich die Variable ab dem Beginn des Blocks bis zur Deklarationsverarbeitung in einer "[zeitlich toten Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)" befindet.

```js
console.log(x); // ReferenceError
const x = 3;

console.log(y); // ReferenceError
let y = 3;
```

Im Gegensatz zu `var`-Deklarationen, die nur die Deklaration, aber nicht deren Wert heben, werden [Funktionsdeklarationen](/de/docs/Web/JavaScript/Guide/Functions#function_hoisting) vollständig gehoben — Sie können die Funktion sicher überall innerhalb ihres Bereichs aufrufen. Weitere Diskussionen dazu finden Sie unter [Hoisting](/de/docs/Glossary/Hoisting).

### Globale Variablen

Globale Variablen sind tatsächlich Eigenschaften des _globalen Objekts_.

Auf Webseiten ist das globale Objekt {{domxref("window")}}, daher können Sie globale Variablen mit der `window.variable`-Syntax lesen und setzen. In allen Umgebungen kann die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable (die selbst eine globale Variable ist) verwendet werden, um globale Variablen zu lesen und zu setzen. Dies dient dazu, eine konsistente Schnittstelle zwischen verschiedenen JavaScript-Laufzeiten zu bieten.

Folglich können Sie in einem Dokument deklarierte globale Variablen von einem `iframe` aus mit dem Namen des übergeordneten Fensters oder Rahmens ansprechen. Zum Beispiel, wenn eine Variable namens `phoneNumber` in einem Dokument deklariert ist, können Sie von einem `iframe` aus auf diese Variable als `parent.phoneNumber` verweisen.

### Konstanten

Sie können eine schreibgeschützte, benannte Konstante mit dem Schlüsselwort {{jsxref("Statements/const", "const")}} erstellen. Die Syntax eines Konstanten-Identifiers ist die gleiche wie bei einem Variablen-Identifier: Er muss mit einem Buchstaben, Unterstrich oder Dollarzeichen (`$`) beginnen und kann alphabetische, numerische oder Unterstrich-Zeichen enthalten.

```js
const PI = 3.14;
```

Eine Konstante kann ihren Wert durch Zuweisung oder Neudeklaration nicht ändern, während das Skript ausgeführt wird. Sie muss mit einem Wert initialisiert werden. Die Bereichsregeln für Konstanten sind die gleichen wie für `let`-Blockbereichsvariablen.

Sie können eine Konstante nicht mit dem gleichen Namen wie eine Funktion oder Variable im selben Bereich deklarieren. Zum Beispiel:

```js-nolint example-bad
// DAS WIRD EINEN FEHLER VERURSACHEN
function f() {}
const f = 5;

// DAS WIRD AUCH EINEN FEHLER VERURSACHEN
function f() {
  const g = 5;
  var g;
}
```

`const` verhindert jedoch nur _Neuzuweisungen_, nicht _Mutationen_. Die Eigenschaften von Objekten, die Konstanten zugewiesen sind, sind nicht geschützt, sodass die folgende Anweisung ohne Probleme ausgeführt wird.

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

## Datenstrukturen und Datentypen

### Datentypen

Der neueste ECMAScript-Standard definiert acht Datentypen:

- Sieben Datentypen sind {{Glossary("Primitive", "primitives")}}:

  1. {{Glossary("Boolean")}}. `true` und `false`.
  2. {{Glossary("null")}}. Ein spezielles Schlüsselwort, das einen Nullwert bezeichnet. (Da JavaScript groß- und kleinschreibungsempfindlich ist, ist `null` nicht dasselbe wie `Null`, `NULL` oder eine andere Variante.)
  3. {{Glossary("undefined")}}. Eine oberste Eigenschaft, deren Wert nicht definiert ist.
  4. {{Glossary("Number")}}. Eine ganze Zahl oder eine Gleitkommazahl. Zum Beispiel: `42` oder `3.14159`.
  5. {{Glossary("BigInt")}}. Eine ganze Zahl mit beliebiger Genauigkeit. Zum Beispiel: `9007199254740992n`.
  6. {{Glossary("String")}}. Eine Zeichenkette, die einen Textwert darstellt. Zum Beispiel: `"Howdy"`.
  7. [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Ein Datentyp, dessen Instanzen einzigartig und unveränderlich sind.

- und {{Glossary("Object")}}

Obwohl diese Datentypen relativ wenige sind, ermöglichen sie es Ihnen, nützliche Operationen mit Ihren Anwendungen durchzuführen. [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) sind die anderen grundlegenden Elemente der Sprache. Technisch gesehen sind Funktionen eine Art von Objekt, Sie können jedoch Objekte als benannte Container für Werte betrachten und Funktionen als Prozeduren, die Ihr Skript ausführen kann.

### Datentypkonvertierung

JavaScript ist eine _dynamisch typisierte_ Sprache. Das bedeutet, dass Sie den Datentyp einer Variablen bei deren Deklaration nicht angeben müssen. Es bedeutet auch, dass Datentypen während der Skriptausführung bei Bedarf automatisch konvertiert werden.

So könnten Sie beispielsweise eine Variable wie folgt definieren:

```js
let answer = 42;
```

Und später könnten Sie der gleichen Variable einen String-Wert zuweisen, zum Beispiel:

```js
answer = "Thanks for all the fish!";
```

Da JavaScript dynamisch typisiert ist, verursacht diese Zuweisung keine Fehlermeldung.

### Zahlen und der '+' Operator

In Ausdrücken, die numerische und String-Werte mit dem `+`-Operator beinhalten, konvertiert JavaScript numerische Werte in Strings. Zum Beispiel, betrachten Sie die folgenden Anweisungen:

```js
x = "The answer is " + 42; // "Die Antwort ist 42"
y = 42 + " ist die Antwort"; // "42 ist die Antwort"
z = "37" + 7; // "377"
```

Mit allen anderen Operatoren konvertiert JavaScript numerische Werte _nicht_ zu Strings. Zum Beispiel:

```js
"37" - 7; // 30
"37" * 7; // 259
```

### Konvertierung von Strings zu Zahlen

Falls ein Wert, der eine Zahl darstellt, im Speicher als String vorliegt, gibt es Methoden zur Konvertierung.

- {{jsxref("parseInt()")}}
- {{jsxref("parseFloat()")}}

`parseInt` gibt nur Ganzzahlen zurück, daher ist seine Verwendung bei Dezimalzahlen eingeschränkt.

> [!NOTE]
> Eine Best Practice für `parseInt` ist es, immer den _Radix_ Parameter anzugeben. Der Radix-Parameter wird verwendet, um das zu verwendende Zahlensystem anzugeben.

```js
parseInt("101", 2); // 5
```

Eine alternative Methode, um eine Zahl aus einem String zu erhalten, ist der `+` (unärer Plus) Operator:

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Hinweis: Die Klammern dienen der Klarheit und sind nicht erforderlich.
```

## Literale

_Literale_ repräsentieren Werte in JavaScript. Dies sind feste Werte, keine Variablen, die Sie _buchstäblich_ in Ihrem Skript angeben. Dieser Abschnitt beschreibt die folgenden Arten von Literalen:

- [Array-Literale](#array-literale)
- [Boolean-Literale](#boolean-literale)
- [Numerische Literale](#numerische_literale)
- [Objekt-Literale](#objekt-literale)
- [RegExp-Literale](#regexp-literale)
- [String-Literale](#string-literale)

### Array-Literale

Ein Array-Literal ist eine Liste von null oder mehr Ausdrücken, von denen jedes ein Array-Element darstellt, eingeschlossen in eckige Klammern (`[]`). Wenn Sie ein Array mit einem Array-Literal erstellen, wird es mit den angegebenen Werten als seine Elemente initialisiert und seine `length` wird auf die Anzahl der angegebenen Argumente gesetzt.

Das folgende Beispiel erstellt das `coffees`-Array mit drei Elementen und einer `length` von drei:

```js
const coffees = ["French Roast", "Colombian", "Kona"];
```

Ein Array-Literal erstellt jedes Mal ein neues Array-Objekt, wenn das Literal ausgewertet wird. Beispielsweise wird ein im globalen Bereich definiertes Array einmal erstellt, wenn das Skript geladen wird. Befindet sich das Array-Literal jedoch innerhalb einer Funktion, wird jedes Mal ein neues Array instanziiert, wenn diese Funktion aufgerufen wird.

> [!NOTE]
> Array-Literale erstellen `Array`-Objekte. Weitere Informationen zu `Array`-Objekten finden Sie in {{jsxref("Array")}} und in der Referenz zu [Indizierten Kollektionen](/de/docs/Web/JavaScript/Guide/Indexed_collections).

#### Zusätzliche Kommas in Array-Literalen

Wenn Sie in einem Array-Literal zwei Kommas hintereinander setzen, bleibt im Array ein leerer Slot für das nicht spezifizierte Element. Das folgende Beispiel erstellt das `fish`-Array:

```js
const fish = ["Lion", , "Angel"];
```

Wenn Sie dieses Array protokollieren, sehen Sie:

```js
console.log(fish);
// [ 'Lion', <1 leeres Element>, 'Angel' ]
```

Beachten Sie, dass das zweite Element "leer" ist, was nicht genau dasselbe ist wie das tatsächliche `undefined`-Wert. Wenn Sie Array-Durchlaufmethoden wie [`Array.prototype.map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, werden leere Stellen übersprungen. Der Indexzugriff `fish[1]` gibt jedoch immer noch `undefined` zurück.

Wenn Sie ein abschließendes Komma am Ende der Liste der Elemente hinzufügen, wird das Komma ignoriert.

Im folgenden Beispiel beträgt die `length` des Arrays drei. Es gibt kein `myList[3]`. Alle anderen Kommas in der Liste geben ein neues Element an.

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

> **Hinweis:** [Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) helfen dabei, git-Diffs sauber zu halten, wenn Sie ein mehrzeiliges Array haben, da das Anhängen eines Elements ans Ende nur eine Zeile hinzufügt, aber nicht die vorherige Zeile ändert.
>
> ```diff
> const myList = [
>   "home",
>   "school",
> + "hospital",
> ];
> ```

Das Verständnis des Verhaltens zusätzlicher Kommas ist wichtig, um JavaScript als Sprache zu verstehen.

Wenn Sie jedoch Ihren eigenen Code schreiben, sollten Sie die fehlenden Elemente explizit als `undefined` deklarieren oder zumindest einen Kommentar einfügen, um auf dessen Abwesenheit hinzuweisen. Dadurch wird die Klarheit und Wartbarkeit Ihres Codes erhöht.

```js-nolint
const myList = ["home", /* leer */, "school", /* leer */, ];
```

### Boolean-Literale

Der Boolean-Typ hat zwei Literalwerte: `true` und `false`.

> [!NOTE]
> Verwechseln Sie die primitiven Boolean-Werte `true` und `false` nicht mit den wahr- und falsch-Werten des {{jsxref("Boolean")}}-Objekts.
>
> Das Boolean-Objekt ist ein Wrapper um den primitiven Boolean-Datentyp. Weitere Informationen finden Sie unter {{jsxref("Boolean")}}.

### Numerische Literale

JavaScript nummerische Literale umfassen Ganzzahl-Literale in verschiedenen Basen sowie Gleitkomma-Literale in Basis-10.

Beachten Sie, dass die Sprachspezifikation fordert, dass nummerische Literale unsigniert sind. Dennoch sind Codefragmente wie `-123.4` in Ordnung, da sie als unärer `-`-Operator angewendet auf das nummerische Literal `123.4` interpretiert werden.

#### Ganzzahl-Literale

Ganzzahl- und {{jsxref("BigInt")}}-Literale können in Dezimal- (Basis 10), Hexadezimal- (Basis 16), Oktal- (Basis 8) und Binär- (Basis 2) geschrieben werden.

- Ein _dezimales_ Ganzzahl-Literale ist eine Sequenz von Ziffern ohne führende `0` (Null).
- Eine führende `0` (Null) bei einem Ganzzahl-Literale, oder ein führendes `0o` (oder `0O`) gibt an, dass es sich um _Oktal_ handelt. Oktal-Ganzzahl-Literale können nur die Ziffern `0` – `7` enthalten.
- Ein führendes `0x` (oder `0X`) gibt ein _hexadezimales_ Ganzzahl-Literale an. Hexadezimale Ganzzahlen können Ziffern (`0` – `9`) und die Buchstaben `a` – `f` sowie `A` – `F` enthalten. (Die Groß-/Kleinschreibung eines Zeichens ändert seinen Wert nicht. Daher gilt: `0xa` = `0xA` = `10` und `0xf` = `0xF` = `15`.)
- Ein führendes `0b` (oder `0B`) gibt ein _binäres_ Ganzzahl-Literale an. Binäre Ganzzahl-Literale können nur die Ziffern `0` und `1` enthalten.
- Ein nachgestelltes `n`-Suffix bei einem Ganzzahl-Literale zeigt ein {{jsxref("BigInt")}}-Literale an. Das {{jsxref("BigInt")}}-Literale kann jede der oben genannten Basen verwenden. Beachten Sie, dass lead-zero oktale Syntax wie `0123n` nicht zulässig ist, aber `0o123n` ist in Ordnung.

Einige Beispiele für Ganzzahl-Literale sind:

```plain
0, 117, 123456789123456789n             (dezimal, Basis 10)
015, 0001, 0o777777777777n              (oktal, Basis 8)
0x1123, 0x00111, 0x123456789ABCDEFn     (hexadezimal, Hex oder Basis 16)
0b11, 0b0011, 0b11101001010101010101n   (binär, Basis 2)
```

Für weitere Informationen siehe [Numerische Literale in der Referenz zur lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals).

#### Gleitkomma-Literale

Ein Gleitkomma-Literale kann die folgenden Teile haben:

- Eine unsignierte ganze Dezimalzahl,
- Ein Dezimalpunkt (`.`),
- Ein Bruch (eine weitere Dezimalzahl),
- Ein Exponent.

Der Exponententeil ist ein `e` oder `E` gefolgt von einer ganzen Zahl, die unterschrieben sein kann (vorangestellt mit `+` oder `-`). Ein Gleitkomma-Literale muss mindestens eine Ziffer und entweder einen Dezimalpunkt oder `e` (oder `E`) haben.

Kurz gefasst lautet die Syntax:

```plain
[Ziffern].[Ziffern][(E|e)[(+|-)]Ziffern]
```

Zum Beispiel:

```js-nolint
3.1415926
.123456789
3.1E+12
.1e-23
```

### Objekt-Literale

Ein Objekt-Literale ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

> [!WARNING]
> Verwenden Sie keine Objektliterale am Anfang einer Anweisung! Dies führt zu einem Fehler (oder verhält sich anders als erwartet), da das `{` als Beginn eines Blocks interpretiert wird.

Das folgende ist ein Beispiel für ein Objekt-Literale. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String zu, `"Saturn"`; das zweite Element, die `getCar`-Eigenschaft, wird sofort mit dem Ergebnis des Aufrufs der Funktion `(carTypes("Honda"))` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine vorhandene Variable (`sales`).

```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Tut mir leid, wir verkaufen kein ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

Darüber hinaus können Sie ein numerisches oder String-Literale für den Namen einer Eigenschaft verwenden oder ein Objekt innerhalb eines anderen einbetten. Das folgende Beispiel verwendet diese Optionen.

```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Objekteigenschaftsnamen können beliebige Zeichenfolgen sein, einschließlich der leeren Zeichenfolge. Wenn der Eigenschaftsname kein gültiger JavaScript-{{Glossary("Identifier", "identifier")}} oder eine Zahl wäre, muss er in Anführungszeichen eingeschlossen werden.

Eigenschaftsnamen, die keine gültigen Bezeichner sind, können nicht als Punkt (`.`) Eigenschaft zugegriffen werden.

```js-nolint example-bad
const unusualPropertyNames = {
  '': 'Eine leere Zeichenfolge',
  '!': 'Knall!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unerwartete Zeichenfolge
console.log(unusualPropertyNames.!);    // SyntaxError: Unerwartetes Zeichen !
```

Stattdessen müssen sie über die eckige Klammer-Notation (`[]`) zugegriffen werden.

```js example-good
console.log(unusualPropertyNames[""]); // Eine leere Zeichenfolge
console.log(unusualPropertyNames["!"]); // Knall!
```

#### Erweitert objekte Literale

Objekt-Literale unterstützen eine Reihe von Kurzsyntaxen, die das Festlegen des Prototyps bei der Konstruktion, Kurzformen für `foo: foo`-Zuweisungen, das Definieren von Methoden, das Aufrufen von `super`-Methoden und das Berechnen von Eigenschaftsnamen mit Ausdrücken beinhalten.

Zusammen bringen diese auch Objekt-Literale und Klassendeklarationen näher zusammen und ermöglichen es dem objektbasierten Design, von einigen der gleichen Annehmlichkeiten zu profitieren.

```js
const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Kurzform für 'handler: handler'
  handler,
  // Methoden
  toString() {
    // Super-Aufrufe
    return "d " + super.toString();
  },
  // Berechnete (dynamische) Eigenschaftsnamen
  ["prop_" + (() => 42)()]: 42,
};
```

### RegExp-Literale

Ein Regex-Literale (das [später](/de/docs/Web/JavaScript/Guide/Regular_expressions) näher beschrieben wird) ist ein Muster, das zwischen Schrägstrichen eingeschlossen ist. Das folgende ist ein Beispiel für ein Regex-Literale.

```js
const re = /ab+c/;
```

### String-Literale

Ein String-Literale ist null oder mehr Zeichen, die in doppelte (`"`) oder einfache (`'`) Anführungszeichen eingeschlossen sind. Ein String muss durch Anführungszeichen desselben Typs begrenzt werden (das bedeutet, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js-nolint
'foo'
"bar"
'1234'
'eine Zeile \n eine andere Zeile'
"Joyos Katze"
```

Sie sollten String-Literale verwenden, es sei denn Sie müssen speziell ein `String`-Objekt verwenden. Weitere Informationen finden Sie in {{jsxref("String")}}.

Sie können jede der Methoden des {{jsxref("String")}}-Objekts auf einem String-Literale aufrufen. JavaScript konvertiert das String-Literale automatisch in ein temporäres String-Objekt, ruft die Methode auf und verwirft dann das temporäre String-Objekt. Sie können auch die `length`-Eigenschaft mit einem String-Literale verwenden:

```js
// Gibt die Anzahl der Symbole im String inklusive Leerzeichen aus.
console.log("Joyos Katze".length); // In diesem Fall 10.
```

[Template-Literale](/de/docs/Web/JavaScript/Reference/Template_literals) sind ebenfalls verfügbar. Template-Literale werden durch das Rückwärtsakzentzeichen (`` ` ``) (Gravis) statt durch doppelte oder einfache Anführungszeichen eingeschlossen.

Template-Literale bieten syntaktischen Zucker für die Konstruktion von Strings. (Dies ist ähnlich zu String-Interpolation-Features in Perl, Python und mehr.)

```js-nolint
// Grundlegende Erstellung von String-Literalen
`In JavaScript ist '\n' ein Zeilenumbruch.`

// Mehrzeilige Strings
`In JavaScript können Template-Strings
 über mehrere Zeilen laufen, aber doppelte
 und einfache Anführungszeichen nicht.`

// String-Interpolation
const name = 'Lev', time = 'heute';
`Hallo ${name}, wie geht es Ihnen ${time}?`
```

[Getaggte Templates](/de/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) sind eine kompakte Syntax zur Angabe eines Template-Literale zusammen mit einem Aufruf einer "Tag"-Funktion zu dessen Verarbeitung. Ein getaggtes Template ist nur eine kürzere und semantische Möglichkeit, eine Funktion aufzurufen, die einen String und eine Menge relevanter Werte verarbeitet. Der Name der Template-Tag-Funktion steht vor dem Template-Literale — wie im folgenden Beispiel, in dem die Template-Tag-Funktion `print` genannt wird. Die `print`-Funktion wird die Argumente interpolieren und alle Objekte oder Arrays serialisieren, die vorkommen könnten, um das lästige `[object Object]` zu vermeiden.

```js
const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Printet eine Aufzählungszeichenliste
    return arg.map((part) => `- ${part}`).join("\n");
  }
  if (arg.toString === Object.prototype.toString) {
    // Dieses Objekt wird zu "[object Object]" serialisiert.
    // Lassen Sie uns etwas Netteres ausgeben.
    return JSON.stringify(arg);
  }
  return arg;
};

const print = (segments, ...args) => {
  // Für jedes gut geformte Template-Literale gibt es immer N Argumente und
  // (N+1) String-Segmente.
  let message = segments[0];
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  });
  console.log(message);
};

const todos = [
  "JavaScript lernen",
  "Web-APIs lernen",
  "Meine Website einrichten",
  "Profitieren!",
];

const progress = { javascript: 20, html: 50, css: 10 };

print`Ich muss noch tun:
${todos}
Mein aktueller Fortschritt ist: ${progress}
`;

// Ich muss noch tun:
// - JavaScript lernen
// - Web-APIs lernen
// - Meine Website einrichten
// - Profitieren!
// Mein aktueller Fortschritt ist: {"javascript":20,"html":50,"css":10}
```

Da getaggte Template-Literale nur Zucker von Funktionsaufrufen sind, können Sie das oben Genannte als äquivalenten Funktionsaufruf umschreiben:

```js
print(["Ich muss noch tun:\n", "\nMein aktueller Fortschritt ist: ", "\n"], todos, progress);
```

Dies mag an die Interpolation vom Typ `console.log` erinnern:

```js
console.log("Ich muss noch tun:\n%o\nMein aktueller Fortschritt ist: %o\n", todos, progress);
```

Sie können sehen, wie das getaggte Template natürlicher aussieht als eine traditionelle "Formatter"-Funktion, bei der die Variablen und das Template selbst separat deklariert werden müssen.

#### Verwenden spezieller Zeichen in Strings

Zusätzlich zu normalen Zeichen können Sie auch spezielle Zeichen in Strings einfügen, wie im folgenden Beispiel gezeigt.

```js
"eine Zeile \n eine andere Zeile";
```

Die folgende Tabelle listet die speziellen Zeichen auf, die Sie in JavaScript-Strings verwenden können.

| Zeichen    | Bedeutung                                                                                                                                                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `\0`       | Null-Byte                                                                                                                                                                                                                                              |
| `\b`       | Rückschritt                                                                                                                                                                                                                                            |
| `\f`       | Formularvorschub                                                                                                                                                                                                                                       |
| `\n`       | Neue Zeile                                                                                                                                                                                                                                             |
| `\r`       | Wagenrücklauf                                                                                                                                                                                                                                          |
| `\t`       | Tabulator                                                                                                                                                                                                                                              |
| `\v`       | Vertikaler Tab                                                                                                                                                                                                                                         |
| `\'`       | Apostroph oder einfaches Anführungszeichen                                                                                                                                                                                                             |
| `\"`       | Doppeltes Anführungszeichen                                                                                                                                                                                                                            |
| `\\`       | Rückwärtsschrägstrich                                                                                                                                                                                                                                  |
| `\XXX`     | Das Zeichen mit der Latin-1-Codierung, die durch bis zu drei oktale Ziffern `XXX` zwischen `0` und `377` spezifiziert wird. Zum Beispiel ist `\251` die oktale Sequenz für das Copyright-Symbol.                                                        |
| `\xXX`     | Das Zeichen mit der Latin-1-Codierung, die durch die beiden hexadezimalen Ziffern `XX` zwischen `00` und `FF` spezifiziert wird. Zum Beispiel ist `\xA9` die hexadezimale Sequenz für das Copyright-Symbol.                                             |
| `\uXXXX`   | Das Unicode-Zeichen, das durch die vier hexadezimalen Ziffern `XXXX` spezifiziert wird. Zum Beispiel ist `\u00A9` die Unicode-Sequenz für das Copyright-Symbol. Siehe [Unicode-Escape-Sequenzen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals). |
| `\u{XXXXX}`| Unicode-Codepunkt-Escapes. Zum Beispiel ist `\u{2F804}` das gleiche wie die einfachen Unicode-Escapes `\uD87E\uDC04`.                                                                                                                                  |

#### Zeichen escapen

Bei Zeichen, die nicht in der Tabelle aufgeführt sind, wird ein vorangestellter Rückwärtsschrägstrich ignoriert, aber diese Verwendung ist veraltet und sollte vermieden werden.

Sie können ein Anführungszeichen innerhalb eines Strings einfügen, indem Sie ihm einen Rückwärtsschrägstrich voranstellen. Dies wird als _Escapen_ des Anführungszeichens bezeichnet. Zum Beispiel:

```js-nolint
const quote = "Er las \"The Cremation of Sam McGee\" von R.W. Service.";
console.log(quote);
```

Das Ergebnis wäre:

```plain
Er las "The Cremation of Sam McGee" von R.W. Service.
```

Um einen wörtlichen Rückwärtsschrägstrich innerhalb eines Strings einzufügen, müssen Sie das Rückwärtsschrägstrichzeichen escapen. Um den Dateipfad `c:\temp` einem String zuzuweisen, verwenden Sie beispielsweise Folgendes:

```js
const home = "c:\\temp";
```

Sie können auch Zeilenumbrüche escapen, indem Sie ihnen einen Rückwärtsschrägstrich voranstellen. Der Rückwärtsschrägstrich und der Zeilenumbruch werden beide aus dem Wert des Strings entfernt.

```js
const str =
  "dieser String \
ist gebrochen \
über mehrere \
Zeilen.";
console.log(str); // dieser String ist gebrochen über mehrere Zeilen.
```

## Weitere Informationen

Dieses Kapitel konzentriert sich auf die grundlegende Syntax für Deklarationen und Typen. Um mehr über die Sprachkonstrukte von JavaScript zu erfahren, lesen Sie auch die folgenden Kapitel in diesem Leitfaden:

- [Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) Leitfaden
- [Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) Leitfaden

Im nächsten Kapitel werden wir uns mit Steuerflusskonstrukten und Fehlerbehandlung befassen.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
