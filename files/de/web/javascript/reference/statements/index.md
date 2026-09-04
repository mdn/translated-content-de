---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

JavaScript-Code besteht aus Anweisungen und Deklarationen, die Ausdrücke enthalten können. Dieses Referenzdokument gruppiert die Konstrukte, die zur Steuerung der Ausführung und zur Deklaration von Bindungen verwendet werden. Eine Anweisung kann sich über mehrere Zeilen erstrecken und eine Zeile kann mehrere Anweisungen enthalten.

## Anweisungen und Deklarationen nach Kategorie

Für ein alphabetisches Verzeichnis siehe die Seitenleiste links.

### Steuerungsfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, der von einer Funktion zurückgegeben werden soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, das aktuelle switch oder die aktuelle label-Anweisung und überträgt die Programmausführung auf die Anweisung nach der beendeten Anweisung.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen oder benannten Schleife und setzt die Ausführung der Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Löst eine benutzerdefinierte Ausnahme aus.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine bestimmte Bedingung wahr ist. Wenn die Bedingung falsch ist, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Bewertet einen Ausdruck, ordnet den Wert des Ausdrucks einer case-Klausel zu und führt die mit diesem Fall verbundenen Anweisungen aus.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Kennzeichnet einen Block von Anweisungen, die ausprobiert werden sollen, und gibt an, wie darauf reagiert werden soll, falls eine Ausnahme ausgelöst wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine lokale Blockscope-Variable und initialisiert sie optional mit einem Wert.
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
  - : Generatorfunktionen erleichtern das Schreiben von [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit den angegebenen Parametern.
- {{jsxref("Statements/async_function*", "async function*")}}
  - : Asynchrone Generatorfunktionen erleichtern das Schreiben asynchroner [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols).
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Iterationen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, bis die Testbedingung als falsch bewertet wird. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, wodurch die spezifizierte Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen Ausdrücken besteht, die in Klammern eingeschlossen und durch Semikolons getrennt sind, gefolgt von einer Anweisung, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Durchläuft die aufzählbaren Eigenschaften eines Objekts in beliebiger Reihenfolge. Für jede eindeutige Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Durchläuft iterierbare Objekte (einschließlich {{jsxref("Array", "Arrays", "", 1)}}, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)), wobei ein benutzerdefinierter Iterations-Hook mit Anweisungen aufgerufen wird, die für den Wert jeder einzelnen Eigenschaft ausgeführt werden sollen.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Durchläuft asynchrone iterierbare Objekte, array-ähnliche Objekte, [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators), wobei ein benutzerdefinierter Iterations-Hook mit Anweisungen aufgerufen wird, die für den Wert jeder einzelnen Eigenschaft ausgeführt werden sollen.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung als wahr bewertet wird. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

### Sonstige

- {{jsxref("Statements/Empty", "Leere Anweisung", "", 1)}}
  - : Eine leere Anweisung wird verwendet, um keine Anweisung bereitzustellen, obwohl die JavaScript-Syntax eine erwartet.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung wird verwendet, um null oder mehr Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Ausdrucks-Anweisung", "", 1)}}
  - : Eine Ausdrucks-Anweisung wertet einen Ausdruck aus und verwirft dessen Ergebnis. Sie erlaubt dem Ausdruck, Seiteneffekte zu bewirken, wie z. B. das Ausführen einer Funktion oder das Aktualisieren einer Variablen.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft alle verfügbaren Debugging-Funktionen auf. Wenn keine Debugging-Funktion verfügbar ist, hat diese Anweisung keine Wirkung.
- {{jsxref("Statements/export", "export")}}
  - : Wird verwendet, um Funktionen zu exportieren, damit sie in externen Modulen und anderen Skripten importiert werden können.
- {{jsxref("Statements/import", "import")}}
  - : Wird verwendet, um Funktionen zu importieren, die von einem externen Modul oder einem anderen Skript exportiert wurden.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Versieht eine Anweisung mit einem Bezeichner, auf den Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Gültigkeitsbereichskette für eine Anweisung.

## Was sind Anweisungen, Deklarationen und Ausdrücke?

Alle JavaScript-Programme bestehen aus einer Abfolge von obersten Konstrukten, die eine der oben genannten Syntaxen verwenden. Diese sind als [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration) bekannt. In den MDN-Dokumentationen beziehen wir uns häufig kolloquial auf beide als _Anweisungen_, aber technisch gesehen sind es zwei getrennte Mengen von Grammatiken.

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
- {{jsxref("Statements/export", "export")}} (Hinweis: kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)
- {{jsxref("Statements/import", "import")}} (Hinweis: kann nur auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) erscheinen)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe "Anweisung" und "Deklaration" haben eine genaue Bedeutung in der formalen Syntax von JavaScript, die beeinflusst, wo sie im Code platziert werden können. Zum Beispiel akzeptiert der Körper in den meisten Kontrollflussstrukturen nur Anweisungen — wie die beiden Arme eines [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else):

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie eine Deklaration anstelle einer Anweisung verwenden, würde dies zu einem {{jsxref("SyntaxError")}} führen. Zum Beispiel ist eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration keine Anweisung, daher können Sie sie nicht in ihrer reinen Form als Körper einer `if`-Anweisung verwenden.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

Andererseits ist [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) eine Anweisung, sodass Sie sie alleine als `if`-Körper verwenden können.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als "Binden von {{Glossary("binding", "Bezeichnern")}} an Werte" betrachten und Anweisungen als "Durchführen von Aktionen". Die Tatsache, dass `var` eine Anweisung und keine Deklaration ist, ist ein Sonderfall, da es nicht den normalen lexikalischen Gültigkeitsbereichsregeln folgt und Seiteneffekte erzeugen kann — in Form von globalen Variablen, die mit `var` definiert wurden, und Variablen, die außerhalb ihres Blocks sichtbar sind (weil mit `var` definierte Variablen nicht block-scope sind).

Ein weiteres Beispiel: [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) können nur an Anweisungen angefügt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Es gibt ein Legacy-Grammatik, das [Funktionsdeklarationen Labels zuweist](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations), aber es ist nur aus Gründen der Kompatibilität mit der Web-Realität standardisiert.

Um dies zu umgehen, können Sie die Deklaration in geschweifte Klammern setzen — das macht sie zu einem Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

In JavaScript erzeugen Anweisungen und Deklarationen Werte, aber diese Werte sind fast nie beobachtbar (außer bei {{jsxref("Global_Objects/eval", "eval()")}}). Ihr Zweck ist es, die Umgebung zu manipulieren und Seiteneffekte zu erzeugen—Variablenbindungen zu erstellen, Dinge auszugeben, Variablenwerte zu ändern, etc. Die Werte, die sie verwenden, stammen aus der Auswertung von [_Ausdrücken_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-Expression).

Ausdrücke sind keine obersten Konstrukte; sie können nur in bestimmten Slots innerhalb von Anweisungen und Deklarationen verwendet werden, wie z. B. `if (expression)`, `const x = expression`, etc. Die [Ausdrucks-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement)-Syntax erlaubt es, die meisten Ausdrücke als Anweisungen zu verwenden, aber das ist nur eine Anweisung mit einem einzigen Ausdrucksslot.

Sie können JavaScript-Syntaxstrukturen nur mit Anweisungen, Deklarationen und Ausdrücken abbilden:

- Anweisungen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `if (expression) statement` und Blockanweisungen `{ statement; declaration }`)
- Deklarationen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `function x() { statement; declaration }` und `const x = expression`)
- Ausdrücke können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `() => { statement; declaration }` und `console.log(expression)`)

In der Referenzdokumentation zu jedem Syntaxelement beschreiben wir alle seine "Slots" und sagen, ob jeder Slot eine Anweisung, eine Deklaration oder ein Ausdruck ist.

_Operators_ ist ein weiteres wichtiges Konzept in der JavaScript-Grammatik, aber sie funktionieren nicht wie Bausteine. Weitere Informationen finden Sie unter [Was sind Operatoren?](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
