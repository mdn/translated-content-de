---
title: Statements und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{jsSidebar("Statements")}}

JavaScript-Anwendungen bestehen aus Anweisungen mit einer entsprechenden Syntax. Eine einzelne Anweisung kann sich über mehrere Zeilen erstrecken. Mehrere Anweisungen können in einer einzigen Zeile auftreten, wenn jede Anweisung durch ein Semikolon getrennt ist. Dies ist kein Schlüsselwort, sondern eine Gruppe von Schlüsselwörtern.

## Anweisungen und Deklarationen nach Kategorie

Für ein alphabetisches Verzeichnis siehe die Seitenleiste links.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, den `switch` oder die markierte Anweisung und überträgt die Programmkontrolle auf die Anweisung, die der beendeten Anweisung folgt.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder markierten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Wirft eine benutzerdefinierte Ausnahme.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine angegebene Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Bewertet einen Ausdruck, vergleicht den Wert des Ausdrucks mit einer `case`-Klausel und führt die mit diesem Fall verbundenen Anweisungen aus.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Markiert einen Block von Anweisungen zum Ausprobieren und gibt eine Antwort an, falls eine Ausnahme ausgelöst wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Block-Scope-Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine schreibgeschützte benannte Konstante.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/function*", "function*")}}
  - : Generatorfunktionen ermöglichen es, [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) einfacher zu schreiben.
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generatorfunktionen ermöglichen es, asynchrone [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols) einfacher zu schreiben.
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, bis die Testbedingung falsch ist. Die Bedingung wird nach Ausführung der Anweisung ausgewertet, was dazu führt, dass die angegebene Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert über die aufzählbaren Eigenschaften eines Objekts in beliebiger Reihenfolge. Für jede eindeutige Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterierbare Objekte (einschließlich {{jsxref("Array", "Arrays", "", 1)}}, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), indem ein benutzerdefinierter Iterationshaken aufgerufen wird, mit Anweisungen, die für den Wert jeder eindeutigen Eigenschaft ausgeführt werden.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchrone iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators), indem ein benutzerdefinierter Iterationshaken aufgerufen wird, mit Anweisungen, die für den Wert jeder eindeutigen Eigenschaft ausgeführt werden.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung wahr ist. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

### Andere

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwartet.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft dessen Ergebnis. Sie erlaubt dem Ausdruck, Seiteneffekte zu erzeugen, wie das Ausführen einer Funktion oder das Aktualisieren einer Variablen.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft eine verfügbare Debugging-Funktionalität auf. Wenn keine Debugging-Funktionalität verfügbar ist, hat diese Anweisung keine Wirkung.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren, damit sie für Importe in externen Modulen und anderen Skripten verfügbar sind.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die aus einem externen Modul, einem anderen Skript, exportiert wurden.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Bietet einer Anweisung eine Kennung, auf die Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweiterte die Scope-Kette für eine Anweisung.

## Unterschied zwischen Anweisungen und Deklarationen

In diesem Abschnitt werden wir zwei Arten von Konstrukten mischen: [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration). Sie sind zwei disjunkte Mengen von Grammatiken. Die folgenden sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: es kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)
- {{jsxref("Statements/import", "import")}} (Hinweis: es kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben in der formalen Syntax von JavaScript eine präzise Bedeutung, die beeinflusst, wo sie im Code platziert werden können. Beispielsweise akzeptiert der Körper in den meisten Kontrollflussstrukturen nur Anweisungen—wie die beiden Arme eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn man eine Deklaration anstelle einer Anweisung verwendet, wäre dies ein {{jsxref("SyntaxError")}}. Zum Beispiel ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung, daher kann sie nicht in ihrer reinen Form als Körper einer `if`-Anweisung verwendet werden.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung, sodass man sie alleine als `if`-Körper verwenden kann.

```js-nolint example-good
if (condition)
  var i = 0;
```

Man kann Deklarationen als "Identifikatoren an Werte {{Glossary("binding", "binden")}}" sehen und Anweisungen als "Aktionen ausführen". Die Tatsache, dass `var` eine Anweisung anstelle einer Deklaration ist, ist ein besonderer Fall, da es den normalen lexikalischen Scoping-Regeln nicht folgt und Seiteneffekte erzeugen kann—in Form der Erstellung von globalen Variablen, der Veränderung bereits definierter `var`-Variablen und der Definition von Variablen, die außerhalb ihres Blocks sichtbar sind (da `var`-Variablen nicht block-scope-spezifisch sind).

Als weiteres Beispiel: [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) können nur an Anweisungen angehängt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt eine veraltete Grammatik, die es erlaubt, [Funktionsdeklarationen mit Labels](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations) zu versehen, aber sie ist nur aus Gründen der Kompatibilität mit der Web-Realität standardisiert.

Um dies zu umgehen, kann man die Deklaration in geschweifte Klammern einschließen—dies macht sie zu einem Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

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
