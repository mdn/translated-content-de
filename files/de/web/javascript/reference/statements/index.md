---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: f693fdeb65be430fdf3b7fc5cdf44a10a13f2bbf
---

JavaScript-Code besteht aus Anweisungen und Deklarationen, die Ausdrücke enthalten können. Diese Referenz gruppiert die Konstrukte, die zur Steuerung der Ausführung und zum Deklarieren von Bindungen verwendet werden. Eine Anweisung kann sich über mehrere Zeilen erstrecken, und eine Zeile kann mehrere Anweisungen enthalten.

## Anweisungen und Deklarationen nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, `switch`- oder Label-Anweisung und übergibt die Programmkontrolle an die Anweisung, die auf die beendete Anweisung folgt.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder beschrifteten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Löst eine benutzerdefinierte Ausnahme aus.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine angegebene Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Wertet einen Ausdruck aus, gleicht den Wert des Ausdrucks mit einer `case`-Klausel ab und führt Anweisungen aus, die diesem Fall zugeordnet sind.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Markiert einen Block von Anweisungen, der versucht werden soll, und gibt eine Reaktion an, falls eine Ausnahme ausgelöst wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine blockbereichsgebundene Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine blockbereichsgebundene Variable, die nicht erneut zugewiesen werden kann und bei der Deklaration initialisiert werden muss.
- {{jsxref("Statements/using", "using")}}
  - : Deklariert eine Variable wie `const`, die _synchron freigegeben_ wird.
- {{jsxref("Statements/await_using", "await using")}}
  - : Deklariert eine Variable wie `const`, die _asynchron freigegeben_ wird.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generatorfunktionen erleichtern das Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generatorfunktionen erleichtern das Schreiben von asynchronen [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, bis die Testbedingung zu `false` ausgewertet wird. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, wodurch die angegebene Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert in beliebiger Reihenfolge über die aufzählbaren Eigenschaften eines Objekts. Für jede unterschiedliche Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterierbare Objekte (einschließlich {{jsxref("Array", "Arrays", "", 1)}}, array-ähnlicher Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), wobei ein benutzerdefinierter Iterations-Hook mit Anweisungen aufgerufen wird, die für den Wert jeder unterschiedlichen Eigenschaft ausgeführt werden.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchron iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), wobei ein benutzerdefinierter Iterations-Hook mit Anweisungen aufgerufen wird, die für den Wert jeder unterschiedlichen Eigenschaft ausgeführt werden.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung zu `true` ausgewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

### Sonstiges

- {{jsxref("Statements/Empty", "Leer", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwarten würde.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Ausdrucksanweisung", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft dessen Ergebnis. Sie ermöglicht dem Ausdruck, Nebeneffekte auszuführen, beispielsweise eine Funktion auszuführen oder eine Variable zu aktualisieren.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft jede verfügbare Debugging-Funktionalität auf. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Wirkung.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren und sie für Imports in externen Modulen und anderen Skripten verfügbar zu machen.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die aus einem externen Modul oder einem anderen Skript exportiert wurden.
- {{jsxref("Statements/import/defer", "import defer")}}
  - : Lädt ein Modul als Namespace und verschiebt die synchrone Auswertung, bis auf die Eigenschaften des zurückgegebenen Namespace zugegriffen wird.
- {{jsxref("Statements/import/source", "import source")}}
  - : Führt zu einem Objekt, das den kompilierten Quellcode des Moduls darstellt, ohne dessen Abhängigkeiten zu laden, es zu verknüpfen oder auszuwerten.
- {{jsxref("Statements/label", "Label", "", 1)}}
  - : Versieht eine Anweisung mit einem Bezeichner, auf den Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Scope-Kette für eine Anweisung.

## Was sind Anweisungen, Deklarationen und Ausdrücke?

Alle JavaScript-Programme bestehen aus einer Sequenz von Konstrukten der obersten Ebene, die eine der oben aufgeführten Syntaxen verwenden. Diese werden als [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration) bezeichnet. In der MDN-Dokumentation bezeichnen wir beide umgangssprachlich oft als _Anweisungen_, technisch gesehen sind sie jedoch zwei getrennte Mengen von Grammatiken.

Folgende sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: Es kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen.)
- {{jsxref("Statements/import", "import")}} (Hinweis: Es kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen.)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe „Anweisung“ und „Deklaration“ haben in der formalen Syntax von JavaScript eine präzise Bedeutung, die sich darauf auswirkt, wo sie im Code platziert werden dürfen. Beispielsweise akzeptiert der Rumpf in den meisten Kontrollflussstrukturen nur Anweisungen — wie die beiden Zweige eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie statt einer Anweisung eine Deklaration verwenden, wäre dies ein {{jsxref("SyntaxError")}}. Beispielsweise ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung, sodass Sie sie nicht in ihrer bloßen Form als Rumpf einer `if`-Anweisung verwenden können.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung, sodass Sie es allein als `if`-Rumpf verwenden können.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als „{{Glossary("binding", "Bindung")}} von Bezeichnern an Werte“ und Anweisungen als „Ausführen von Aktionen“ betrachten. Die Tatsache, dass `var` eine Anweisung und keine Deklaration ist, ist ein Sonderfall, da es nicht den normalen Regeln des lexikalischen Scope folgt und Nebeneffekte erzeugen kann — in Form der Erstellung globaler Variablen, der Veränderung bestehender durch `var` definierter Variablen und der Definition von Variablen, die außerhalb ihres Blocks sichtbar sind (da durch `var` definierte Variablen nicht blockbereichsgebunden sind).

Als weiteres Beispiel können [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) nur an Anweisungen angehängt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt eine Legacy-Grammatik, die [Funktionsdeklarationen mit Labels](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations) erlaubt, sie ist jedoch nur zur Kompatibilität mit der Realität des Webs standardisiert.

Um dies zu umgehen, können Sie die Deklaration in geschweifte Klammern einschließen — dadurch wird sie Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

In JavaScript erzeugen Anweisungen und Deklarationen Werte, aber diese Werte sind fast nie beobachtbar (außer bei {{jsxref("Global_Objects/eval", "eval()")}}). Ihr Zweck besteht darin, die umgebende Umgebung zu manipulieren und Nebeneffekte zu erzeugen — Variablenbindungen zu erstellen, Dinge auszugeben, Variablenwerte zu ändern usw. Die Werte, die sie verwenden, stammen aus der Auswertung von [_Ausdrücken_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-Expression).

Ausdrücke sind keine Konstrukte der obersten Ebene; sie können nur in bestimmten Positionen innerhalb von Anweisungen und Deklarationen verwendet werden, etwa `if (expression)`, `const x = expression` usw. Die Syntax der [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ermöglicht es, die meisten Ausdrücke als Anweisungen zu verwenden, aber dabei handelt es sich lediglich um eine Anweisung mit einem einzigen Ausdrucks-Slot.

Sie können die JavaScript-Syntaxstrukturen nur mit Anweisungen, Deklarationen und Ausdrücken abbilden:

- Anweisungen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `if (expression) statement` und Blockanweisungen `{ statement; declaration }`).
- Deklarationen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `function x() { statement; declaration }` und `const x = expression`).
- Ausdrücke können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `() => { statement; declaration }` und `console.log(expression)`).

In der Referenzdokumentation zu jedem Syntaxbestandteil beschreiben wir alle seine „Slots“ und geben an, ob jeder Slot eine Anweisung, Deklaration oder ein Ausdruck ist.

_Operatoren_ sind ein weiteres wichtiges Konzept in der JavaScript-Grammatik, aber sie funktionieren nicht wie Bausteine. Weitere Informationen finden Sie unter [Was sind Operatoren?](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
