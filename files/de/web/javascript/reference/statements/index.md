---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript-Anwendungen bestehen aus Anweisungen mit einer entsprechenden Syntax. Eine einzelne Anweisung kann sich über mehrere Zeilen erstrecken. Mehrere Anweisungen können in einer einzigen Zeile auftreten, wenn jede Anweisung durch ein Semikolon getrennt ist. Dies ist kein Schlüsselwort, sondern eine Gruppe von Schlüsselwörtern.

## Anweisungen und Deklarationen nach Kategorie

Für eine alphabetische Auflistung siehe die Seitenleiste auf der linken Seite.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, den aktuellen Switch oder die aktuelle Label-Anweisung und überträgt die Steuerung des Programms auf die Anweisung nach der beendeten Anweisung.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder beschrifteten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Wirft eine benutzerdefinierte Ausnahme.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine bestimmte Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Bewertet einen Ausdruck, stimmt den Wert des Ausdrucks mit einer Fallklausel überein und führt die mit diesem Fall verbundenen Anweisungen aus.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Markiert einen Block von Anweisungen zum Ausprobieren und gibt eine Antwort an, falls eine Ausnahme ausgelöst wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Block-scope-Lokalvariable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine schreibgeschützte benannte Konstante.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generatorfunktionen erleichtern das Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generatorfunktionen erleichtern das Schreiben asynchroner [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, bis die Testbedingung als falsch bewertet wird. Die Bedingung wird nach der Ausführung der Anweisung bewertet, was dazu führt, dass die angegebene Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer in der Schleife ausgeführten Anweisung.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert über die aufzählbaren Eigenschaften eines Objekts in beliebiger Reihenfolge. Für jede eindeutige Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterable Objekte (einschließlich {{jsxref("Array", "arrays", "", 1)}}, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), wobei ein benutzerdefinierter Iterations-Hook mit Anweisungen aufgerufen wird, die für den Wert jeder eindeutigen Eigenschaft auszuführen sind.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchrone iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators), wobei ein benutzerdefinierter Iterations-Hook mit Anweisungen aufgerufen wird, die für den Wert jeder eindeutigen Eigenschaft auszuführen sind.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Testbedingung als wahr bewertet wird. Die Bedingung wird vor der Ausführung der Anweisung bewertet.

### Andere

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwarten würde.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft sein Ergebnis. Sie ermöglicht es dem Ausdruck, Nebenwirkungen auszuführen, wie zum Beispiel eine Funktion auszuführen oder eine Variable zu aktualisieren.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft eine verfügbare Debugging-Funktionalität auf. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Auswirkung.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren und sie für Importe in externen Modulen und anderen Skripten verfügbar zu machen.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die aus einem externen Modul, einem anderen Skript exportiert wurden.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Bietet einer Anweisung einen Bezeichner, auf den Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Scope-Kette für eine Anweisung.

## Unterschied zwischen Anweisungen und Deklarationen

In diesem Abschnitt werden wir zwei Arten von Konstrukten mischen: [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). Sie sind zwei disjunkte Mengen von Grammatiken. Die folgenden sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: Es kann nur auf der oberen Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)
- {{jsxref("Statements/import", "import")}} (Hinweis: Es kann nur auf der oberen Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben im formalen Syntax von JavaScript eine präzise Bedeutung, die beeinflusst, wo sie im Code platziert werden dürfen. Zum Beispiel akzeptiert der Körper in den meisten Kontrollflussstrukturen nur Anweisungen — wie die beiden Zweige eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie eine Deklaration anstelle einer Anweisung verwenden, wäre es ein {{jsxref("SyntaxError")}}. Zum Beispiel ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung, sodass Sie sie nicht in ihrer nackten Form als Körper einer `if`-Anweisung verwenden können.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist `var` eine Anweisung, sodass Sie es eigenständig als `if`-Körper verwenden können.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als "Binden von {{Glossary("binding", "Identifiers")}} an Werte" und Anweisungen als "Durchführen von Aktionen" sehen. Die Tatsache, dass `var` eine Anweisung anstelle einer Deklaration ist, ist ein Sonderfall, da es nicht den normalen Regeln der lexikalischen Sichtbarkeit folgt und Nebenwirkungen haben kann — in Form von globalen Variablen, die es erstellt, sowie vorhandenen `var`-definierten Variablen, die es verändert, sowie Variablen, die es definiert und die außerhalb seines Blocks sichtbar sind (da `var`-definierte Variablen nicht Block-scope sind).

Als weiteres Beispiel können [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) nur an Anweisungen angehängt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt eine veraltete Syntax, die es erlaubt, [Funktionsdeklarationen Labels zuzuweisen](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), aber sie ist nur standardisiert, um mit der Web-Realität kompatibel zu sein.

Um dies zu umgehen, können Sie die Deklaration in geschweifte Klammern setzen — dies macht sie zu einem Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

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
