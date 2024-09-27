---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{jsSidebar("Statements")}}

JavaScript-Anwendungen bestehen aus Anweisungen mit einer geeigneten Syntax. Eine einzelne Anweisung kann sich über mehrere Zeilen erstrecken. Mehrere Anweisungen können in einer einzigen Zeile vorkommen, wenn jede Anweisung durch ein Semikolon getrennt ist. Dies ist kein Schlüsselwort, sondern eine Gruppe von Schlüsselwörtern.

## Anweisungen und Deklarationen nach Kategorie

Für eine alphabetische Auflistung siehe die Seitenleiste links.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, das switch oder die Label-Anweisung und überträgt die Programmausführung auf die Anweisung, die der beendeten Anweisung folgt.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder gekennzeichneten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Löst eine benutzerdefinierte Ausnahme aus.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine angegebene Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Bewertet einen Ausdruck, vergleicht den Wert des Ausdrucks mit einer Fallklausel und führt Anweisungen aus, die mit diesem Fall verbunden sind.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Kennzeichnet einen Block von Anweisungen, die getestet werden sollen, und definiert eine Reaktion, falls eine Ausnahme ausgelöst wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, die optional mit einem Wert initialisiert werden kann.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Blockbereich-Variable, optional mit einem Wert initialisiert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine schreibgeschützte benannte Konstante.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generator-Funktionen ermöglichen das einfachere Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generator-Funktionen ermöglichen das einfachere Schreiben asynchroner [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, bis die Testbedingung falsch ist. Die Bedingung wird nach der Ausführung der Anweisung geprüft, wodurch die angegebene Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, eingeschlossen in Klammern und durch Semikolon getrennt, gefolgt von einer Anweisung, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Führt eine Iteration über die aufzählbaren Eigenschaften eines Objekts in beliebiger Reihenfolge aus. Für jede unterschiedliche Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Durchläuft iterierbare Objekte (einschließlich {{jsxref("Array", "Arrays", "", 1)}}, arrayähnlicher Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), wobei ein benutzerdefinierter Iterationshaken mit Anweisungen zum Ausführen für den Wert jeder einzelnen Eigenschaft aufgerufen wird.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Durchläuft asynchrone iterierbare Objekte, arrayähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators), wobei ein benutzerdefinierter Iterationshaken mit Anweisungen zum Ausführen für den Wert jeder einzelnen Eigenschaft aufgerufen wird.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung wahr ist. Die Bedingung wird vor der Ausführung der Anweisung geprüft.

### Andere

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwartet.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
  - : Eine Ausdrucksanweisung bewertet einen Ausdruck und verwirft dessen Ergebnis. Sie ermöglicht dem Ausdruck, Nebenwirkungen zu erzeugen, beispielsweise durch das Ausführen einer Funktion oder das Aktualisieren einer Variablen.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft alle verfügbaren Debugging-Funktionen auf. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Wirkung.
- {{jsxref("Statements/export", "export")}}
  - : Dient dazu, Funktionen zu exportieren, um sie für Importe in externen Modulen und anderen Skripten verfügbar zu machen.
- {{jsxref("Statements/import", "import")}}
  - : Dient dazu, Funktionen zu importieren, die aus einem externen Modul oder einem anderen Script exportiert werden.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Versieht eine Anweisung mit einem Bezeichner, auf den Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Bereichskette für eine Anweisung.

## Unterschied zwischen Anweisungen und Deklarationen

In diesem Abschnitt werden wir zwei Arten von Konstrukten mischen: [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). Es handelt sich um zwei voneinander getrennte Grammatikmengen. Die folgenden sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: kann nur auf Top-Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)
- {{jsxref("Statements/import", "import")}} (Hinweis: kann nur auf Top-Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben in der formalen Syntax von JavaScript eine präzise Bedeutung, die beeinflusst, wo sie im Code platziert werden dürfen. Zum Beispiel akzeptiert der Körper der meisten Kontrollflussstrukturen nur Anweisungen — wie in den beiden Armen einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie eine Deklaration anstelle einer Anweisung verwenden, würde dies zu einem {{jsxref("SyntaxError")}} führen. Ein Beispiel hierfür ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration, die keine Anweisung ist, sodass Sie sie in ihrer bloßen Form nicht als `if`-Körper verwenden können.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung, sodass Sie sie alleine als `if`-Körper verwenden können.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als "Binden von [Bezeichnern](/de/docs/Glossary/binding) an Werte" und Anweisungen als "Durchführung von Aktionen" sehen. Die Tatsache, dass `var` eine Anweisung und keine Deklaration ist, ist ein Sonderfall, da es den normalen Regeln für den lexical Scope nicht folgt und Nebenwirkungen verursachen kann — in Form der Erstellung von globalen Variablen, der Mutation von bereits mit `var` definierten Variablen und der Definition von Variablen, die außerhalb ihres Blocks sichtbar sind (weil `var`-definierte Variablen nicht blockiert sind).

Ein weiteres Beispiel ist, dass [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) nur an Anweisungen angeheftet werden können.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt ein veraltetes Grammatikmodell, das es erlaubt, [Funktionsdeklarationen Labels zu geben](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), es ist jedoch nur zum Zwecke der Kompatibilität mit der Web-Realität standardisiert.

Um dies zu umgehen, können Sie die Deklaration in geschweifte Klammern einschließen — das macht sie zu einem Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

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
