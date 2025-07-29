---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

JavaScript-Anwendungen bestehen aus Anweisungen mit einer geeigneten Syntax. Eine einzelne Anweisung kann mehrere Zeilen umfassen. Mehrere Anweisungen können in einer einzigen Zeile vorkommen, wenn jede Anweisung durch ein Semikolon getrennt ist. Dies ist kein Schlüsselwort, sondern eine Gruppe von Schlüsselwörtern.

## Anweisungen und Deklarationen nach Kategorie

Für eine alphabetische Auflistung siehe die Seitenleiste links.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, die Switch- oder Label-Anweisung und überträgt die Programmkontrolle zur Anweisung nach der beendeten Anweisung.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder gelabelten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Wirft eine benutzerdefinierte Ausnahme.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine angegebene Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Bewertet einen Ausdruck, der den Wert des Ausdrucks mit einer Fallklausel vergleicht und führt die mit diesem Fall verbundenen Anweisungen aus.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Markiert einen Block von Anweisungen zum Ausprobieren und gibt eine Antwort an, falls eine Ausnahme geworfen wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine lokale Variable mit Blockscope und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine schreibgeschützte benannte Konstante.
- {{jsxref("Statements/using", "using")}}
  - : Deklariert lokale Variablen, die _synchron entsorgt_ werden.
- {{jsxref("Statements/await_using", "await using")}}
  - : Deklariert lokale Variablen, die _asynchron entsorgt_ werden.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generatorfunktionen ermöglichen das leichteren Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generatorfunktionen erleichtern das Schreiben von asynchronen [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung so lange ausführt, bis die Testbedingung zu falsch evaluiert wird. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, wodurch die angegebene Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, welche in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer in der Schleife ausgeführten Anweisung.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert über die aufzählbaren Eigenschaften eines Objekts in beliebiger Reihenfolge. Für jede unterschiedliche Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterierbare Objekte (einschließlich {{jsxref("Array", "Arrays", "", 1)}}, array-ähnlichen Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)) und ruft einen benutzerdefinierten Iterationshaken mit Anweisungen auf, die für den Wert jeder einzelnen Eigenschaft ausgeführt werden sollen.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchrone iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und ruft einen benutzerdefinierten Iterationshaken mit Anweisungen auf, die für den Wert jeder einzelnen Eigenschaft ausgeführt werden sollen.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Testbedingung zu wahr evaluiert wird. Die Bedingung wird vor der Ausführung der Anweisung bewertet.

### Andere

- {{jsxref("Statements/Empty", "Leer", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwarten würde.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern abgegrenzt.
- {{jsxref("Statements/Expression_statement", "Ausdrucksanweisung", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft dessen Ergebnis. Sie ermöglicht es dem Ausdruck, Nebeneffekte wie die Ausführung einer Funktion oder das Aktualisieren einer Variablen zu erzeugen.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft alle verfügbaren Debugging-Funktionen auf. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Auswirkungen.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren, um sie in externen Modulen und anderen Skripten verfügbar zu machen.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die aus einem externen Modul oder einem anderen Skript exportiert wurden.
- {{jsxref("Statements/label", "Label", "", 1)}}
  - : Bietet einer Anweisung eine Kennung, auf die Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Scope-Kette für eine Anweisung.

## Unterschied zwischen Anweisungen und Deklarationen

In diesem Abschnitt mischen wir zwei Arten von Konstrukten: [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). Sie sind zwei disjunkte Mengen von Grammatiken. Die folgenden sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: kann nur auf der Top-Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)
- {{jsxref("Statements/import", "import")}} (Hinweis: kann nur auf der Top-Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben eine präzise Bedeutung in der formalen Syntax von JavaScript, die beeinflusst, wo sie im Code platziert werden dürfen. Zum Beispiel akzeptieren in den meisten Kontrollflussstrukturen die Körper nur Anweisungen — wie die zwei Arme eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie eine Deklaration anstelle einer Anweisung verwenden, wäre es ein {{jsxref("SyntaxError")}}. Zum Beispiel ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung, daher können Sie sie nicht in ihrer nackten Form als Körper einer `if`-Anweisung verwenden.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung, daher können Sie sie alleinstehend als `if`-Körper verwenden.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als "Bindungen von {{Glossary("binding", "Bezeichnern")}} an Werte" und Anweisungen als "Durchführung von Aktionen" ansehen. Die Tatsache, dass `var` eine Anweisung und keine Deklaration ist, ist ein Sonderfall, da sie nicht den normalen lexikalischen Umgebungsregeln folgt und Nebenwirkungen erzeugen kann – in Form von globalen Variablen, Mutationen bestehender `var`-definierten Variablen und Definitionen von Variablen, die außerhalb ihres Blocks sichtbar sind (da `var`-definierte Variablen nicht block-beschränkt sind).

Ein weiteres Beispiel: [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) können nur an Anweisungen angehängt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt eine veraltete Grammatik, die [Funktionsdeklarationen Labels erlaubt](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), aber sie ist nur zur Kompatibilität mit der Web-Realität standardisiert.

Um dies zu umgehen, können Sie die Deklaration in geschweifte Klammern einschließen – dies macht sie zu einem Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
