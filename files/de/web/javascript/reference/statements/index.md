---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{jsSidebar("Statements")}}

JavaScript-Anwendungen bestehen aus Anweisungen mit einer entsprechenden Syntax. Eine einzelne Anweisung kann sich über mehrere Zeilen erstrecken. Mehrere Anweisungen können in einer einzelnen Zeile vorkommen, wenn jede Anweisung durch ein Semikolon getrennt ist. Dies ist kein Schlüsselwort, sondern eine Gruppe von Schlüsselwörtern.

## Anweisungen und Deklarationen nach Kategorie

Für eine alphabetische Auflistung siehe die Seitenleiste links.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, den aktuellen Switch oder das aktuelle Label und überträgt die Programmausführung auf die Anweisung, die der beendeten Anweisung folgt.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung von Anweisungen in der aktuellen Iteration der aktuellen oder gelabelten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Wirft eine benutzerdefinierte Ausnahme.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine bestimmte Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Wertet einen Ausdruck aus, vergleicht den Wert des Ausdrucks mit einem Fall-Klausel und führt die Anweisungen aus, die mit diesem Fall verbunden sind.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Markiert einen Block von Anweisungen zum Testen und gibt eine Antwort an, falls eine Ausnahme ausgelöst wird.

### Deklaration von Variablen

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable, optional mit einer Initialisierung.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Block-scope lokale Variable, optional mit einer Initialisierung.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine unveränderliche benannte Konstante.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generatorfunktionen ermöglichen ein einfacheres Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generatorfunktionen ermöglichen ein einfacheres Schreiben von asynchronen [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, bis die Testbedingung als falsch beurteilt wird. Die Bedingung wird erst nach der Ausführung der Anweisung ausgewertet, was dazu führt, dass die angegebene Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikola getrennt sind, gefolgt von einer Anweisung, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert über die aufzählbaren Eigenschaften eines Objekts in beliebiger Reihenfolge. Für jede unterschiedliche Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterierbare Objekte (einschließlich {{jsxref("Array", "arrays", "", 1)}}, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), indem ein benutzerdefinierter Iterationshaken mit Anweisungen aufgerufen wird, die für den Wert jeder unterschiedlichen Eigenschaft ausgeführt werden sollen.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchrone iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators), indem ein benutzerdefinierter Iterationshaken mit Anweisungen aufgerufen wird, die für den Wert jeder unterschiedlichen Eigenschaft ausgeführt werden sollen.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Testbedingung als wahr beurteilt wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

### Andere

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung zu liefern, obwohl die Syntax von JavaScript eine erwartet.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern abgegrenzt.
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft das Ergebnis. Sie ermöglicht dem Ausdruck, Seiteneffekte auszuführen, wie z.B. das Ausführen einer Funktion oder das Aktualisieren einer Variablen.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft jede verfügbare Debugging-Funktionalität auf. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Auswirkung.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren, um sie in externen Modulen und anderen Skripten für Importe verfügbar zu machen.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die aus einem externen Modul exportiert wurden, ein anderes Skript.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Bietet einer Anweisung einen Bezeichner, auf den Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Gültigkeitsbereichskette für eine Anweisung.

## Unterschied zwischen Anweisungen und Deklarationen

In diesem Abschnitt werden wir zwei Arten von Konstrukten mischen: [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). Sie sind zwei disjunkte Mengen von Grammatiken. Die folgenden sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: Es kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen.)
- {{jsxref("Statements/import", "import")}} (Hinweis: Es kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen.)

Alles andere in der [Liste oben](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben eine genaue Bedeutung in der formalen Syntax von JavaScript, die beeinflusst, wo sie im Code platziert werden dürfen. Zum Beispiel akzeptieren die meisten Kontrollstrukturen im Körper nur Anweisungen — wie die beiden Arme eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie eine Deklaration anstelle einer Anweisung verwenden, wäre es ein {{jsxref("SyntaxError")}}. Zum Beispiel ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung und kann daher nicht in ihrer bloßen Form als Körper einer `if`-Anweisung verwendet werden.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung und kann daher allein als `if`-Körper verwendet werden.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als "{{Glossary("binding")}} von Bezeichnern auf Werte" betrachten und Anweisungen als "Durchführung von Aktionen". Die Tatsache, dass `var` eine Anweisung statt einer Deklaration ist, ist ein Sonderfall, da es nicht den normalen lexikalischen Umgebungssubingentlichket kostet und Seiteneffekte verursachen kann - in Form von globalen Variablen, die mutiert werden, von `var`-definierten Variablen, und von Variablen, die außerhalb ihres Blocks sichtbar sind (weil `var`-definierte Variablen nicht block-begrenzt sind).

Als weiteres Beispiel können [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) nur an Anweisungen angehängt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt eine veraltete Grammatik, die es erlaubt, [Funktionsdeklarationen mit Labels zu versehen](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), aber sie ist nur standardisiert, um die Kompatibilität mit der Web-Realität zu garantieren.

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
