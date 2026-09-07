---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: 5c2f37be306da020cd8b3a08f23a28a2bf6111a9
---

JavaScript-Code besteht aus Anweisungen und Deklarationen, die Ausdrücke enthalten können. Diese Referenz gruppiert die Konstruktionen, die zur Steuerung der Ausführung und Deklaration von Bindungen verwendet werden. Eine Anweisung kann sich über mehrere Zeilen erstrecken, und eine Zeile kann mehrere Anweisungen enthalten.

## Anweisungen und Deklarationen nach Kategorie

Für eine alphabetische Auflistung sehen Sie bitte in der Seitenleiste auf der linken Seite nach.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, den Schalter oder die beschriftete Anweisung und überträgt die Programmkontrolle auf die Anweisung, die der beendeten Anweisung folgt.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder beschrifteten Schleife und setzt die Ausführung mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Wirft eine benutzerdefinierte Ausnahme.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine bestimmte Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Wertet einen Ausdruck aus, ordnet den Wert des Ausdrucks einer Fallklausel zu und führt die mit diesem Fall verbundenen Anweisungen aus.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Markiert einen Anweisungsblock zum Ausprobieren und gibt eine Antwort an, falls eine Ausnahme ausgegeben werden soll.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine block-skopierte Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine block-skopierte Variable, die nicht neu zugewiesen werden kann und muss bei der Deklaration initialisiert werden.
- {{jsxref("Statements/using", "using")}}
  - : Deklariert eine Variable wie `const`, die _synchron freigegeben_ wird.
- {{jsxref("Statements/await_using", "await using")}}
  - : Deklariert eine Variable wie `const`, die _asynchron freigegeben_ wird.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generator-Funktionen ermöglichen das Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf einfachere Weise.
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generator-Funktionen ermöglichen das Schreiben von asynchronen [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) auf einfachere Weise.
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, bis die Testbedingung als falsch ausgewertet wird. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, wodurch die spezifizierte Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert über die aufzählbaren Eigenschaften eines Objekts in willkürlicher Reihenfolge. Für jede eindeutige Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterierbare Objekte (einschließlich {{jsxref("Array", "arrays", "", 1)}}, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)) und ruft einen benutzerdefinierten Iterations-Hook auf, um Anweisungen für den Wert jeder eindeutigen Eigenschaft auszuführen.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchrone iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und ruft einen benutzerdefinierten Iterations-Hook auf, um Anweisungen für den Wert jeder eindeutigen Eigenschaft auszuführen.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Testbedingung als wahr ausgewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

### Sonstige

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwarten würde.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Block-Anweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Ausdrucksanweisung", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft ihr Ergebnis. Sie ermöglicht es dem Ausdruck, Nebeneffekte hervorzurufen, wie z.B. eine Funktion auszuführen oder eine Variable zu aktualisieren.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft alle verfügbaren Debugging-Funktionen auf. Wenn keine Debugging-Funktion verfügbar ist, hat diese Anweisung keine Auswirkung.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren, damit sie in externen Modulen und anderen Skripten importiert werden können.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die aus einem externen Modul, einem anderen Skript exportiert wurden.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Versehen Sie eine Anweisung mit einem Identifikator, den Sie mit einer `break`- oder `continue`-Anweisung referenzieren können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Scope-Kette für eine Anweisung.

## Was sind Anweisungen, Deklarationen und Ausdrücke?

Alle JavaScript-Programme bestehen aus einer Sequenz von Top-Level-Konstruktionen, die eine der oben aufgeführten Syntaxe verwenden. Diese sind bekannt als [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). In den MDN-Dokumenten sprechen wir oft umgangssprachlich von beiden als _Anweisungen_, aber sie sind technisch gesehen zwei disjunkte Mengen von Grammatiken.

Die folgenden sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: es kann nur auf der Top-Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)
- {{jsxref("Statements/import", "import")}} (Hinweis: es kann nur auf der Top-Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben eine präzise Bedeutung in der formalen Syntax von JavaScript, die beeinflusst, wo sie im Code platziert werden können. Zum Beispiel akzeptieren in den meisten Kontrollflussstrukturen nur die Körper Anweisungen — wie die beiden Arme eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie eine Deklaration anstelle einer Anweisung verwenden, würde dies zu einem {{jsxref("SyntaxError")}} führen. Zum Beispiel ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung, Sie können sie also nicht in ihrer nackten Form als den Körper einer `if`-Anweisung verwenden.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Auf der anderen Seite ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung, also können Sie sie eigenständig als `if`-Körper verwenden.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen sehen als "{{Glossary("binding", "Bindung")}} von Bezeichnern an Werte" und Anweisungen als "Durchführung von Aktionen". Die Tatsache, dass `var` eine Anweisung und keine Deklaration ist, ist ein Sonderfall, da sie nicht den normalen lexikalischen Bereichsregeln folgt und Nebenwirkungen verursachen kann — in Form von Erstellen globaler Variablen, Ändern bestehender `var`-definierter Variablen und Definieren von Variablen, die außerhalb ihres Blocks sichtbar sind (da `var`-definierte Variablen nicht block-skopiert sind).

Als weiteres Beispiel können [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) nur an Anweisungen angehängt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt eine veraltete Grammatik, die es erlaubt, [Funktionendeklarationen Labels zuzuweisen](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), aber sie ist nur für die Kompatibilität mit der Realität des Webs standardisiert.

Um dies zu umgehen, können Sie die Deklaration in geschweifte Klammern setzen — dies macht sie zu einem Bestandteil einer [Block-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

In JavaScript erzeugen Anweisungen und Deklarationen Werte, aber diese Werte sind fast nie beobachtbar (außer durch {{jsxref("Global_Objects/eval", "eval()")}}). Ihr Zweck ist es, die umgebende Umgebung zu manipulieren und Nebeneffekte zu erzeugen — variable Bindungen zu erstellen, Dinge auszugeben, Variablenwerte zu ändern usw. Die Werte, die sie verwenden, stammen aus der Auswertung von [_Ausdrücken_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-Expression).

Ausdrücke sind keine Top-Level-Konstrukte; sie können nur in spezifischen Slots innerhalb von Anweisungen und Deklarationen verwendet werden, wie `if (Ausdruck)`, `const x = Ausdruck` usw. Die [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)-Syntax erlaubt es den meisten Ausdrücken, als Anweisungen verwendet zu werden, aber das ist nur eine Anweisung mit einem einzigen Ausdrucks-Slot.

Sie können JavaScript-Syntaxstrukturen nur mit Anweisungen, Deklarationen und Ausdrücken abbilden:

- Anweisungen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `if (expression) statement` und Block-Anweisungen `{ statement; declaration }`)
- Deklarationen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `function x() { statement; declaration }` und `const x = expression`)
- Ausdrücke können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `() => { statement; declaration }` und `console.log(expression)`)

In der Referenzdokumentation für jedes Syntaxelement beschreiben wir alle seine "Slots" und geben an, ob jeder Slot eine Anweisung, Deklaration oder ein Ausdruck ist.

_Operatoren_ sind ein weiteres wichtiges Konzept in der JavaScript-Grammatik, aber sie funktionieren nicht wie Bausteine. Lesen Sie [Was sind Operatoren?](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
