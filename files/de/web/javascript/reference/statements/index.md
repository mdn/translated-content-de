---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

JavaScript-Code besteht aus Anweisungen und Deklarationen, die Ausdrücke enthalten können. Diese Referenz gruppiert die Konstrukte, mit denen sich die Ausführung steuern und Bindungen deklarieren lassen. Eine Anweisung kann sich über mehrere Zeilen erstrecken, und eine Zeile kann mehrere Anweisungen enthalten.

## Anweisungen und Deklarationen nach Kategorie

Eine alphabetische Auflistung finden Sie in der Seitenleiste links.

### Kontrollfluss

- {{jsxref("Statements/return", "return")}}
  - : Gibt den Wert an, den eine Funktion zurückgeben soll.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleife, `switch`-Anweisung oder Anweisung mit einem Label und setzt die Programmausführung mit der darauffolgenden Anweisung fort.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet die Ausführung der Anweisungen in der aktuellen Iteration der aktuellen Schleife oder einer Schleife mit einem Label und setzt die Schleife mit der nächsten Iteration fort.
- {{jsxref("Statements/throw", "throw")}}
  - : Löst eine benutzerdefinierte Ausnahme aus.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus, wenn eine bestimmte Bedingung wahr ist. Ist die Bedingung falsch, kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Wertet einen Ausdruck aus, gleicht dessen Wert mit einer `case`-Klausel ab und führt die zugehörigen Anweisungen aus.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Kennzeichnet einen Block von Anweisungen, deren Ausführung versucht werden soll, und legt fest, wie auf eine ausgelöste Ausnahme reagiert wird.

### Variablen deklarieren

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Variable mit Block-Gültigkeitsbereich und initialisiert sie optional mit einem Wert.
- {{jsxref("Statements/const", "const")}}
  - : Deklariert eine Variable mit Block-Gültigkeitsbereich, der kein neuer Wert zugewiesen werden kann und die bei der Deklaration initialisiert werden muss.
- {{jsxref("Statements/using", "using")}}
  - : Deklariert eine Variable wie `const`, deren Ressourcen _synchron freigegeben_ werden.
- {{jsxref("Statements/await_using", "await using")}}
  - : Deklariert eine Variable wie `const`, deren Ressourcen _asynchron freigegeben_ werden.

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
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, bis die Prüfbedingung falsch ist. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, sodass die Anweisung mindestens einmal ausgeführt wird.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine Schleife, die aus drei optionalen, in Klammern eingeschlossenen und durch Semikolons getrennten Ausdrücken sowie einer anschließend angegebenen Anweisung besteht, die in der Schleife ausgeführt wird.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Iteriert über die aufzählbaren Eigenschaften eines Objekts. Für jede einzelne Eigenschaft können Anweisungen ausgeführt werden.
- {{jsxref("Statements/for...of", "for...of")}}
  - : Iteriert über iterierbare Objekte (einschließlich {{jsxref("Array", "arrays", "", 1)}}, [Iteratoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) und [Generatoren](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator)) und ruft dabei einen benutzerdefinierten Iterations-Hook auf, um für jeden gelieferten Wert Anweisungen auszuführen.
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : Iteriert über asynchron oder synchron iterierbare Objekte und ruft dabei einen benutzerdefinierten Iterations-Hook auf, um für jeden gelieferten Wert Anweisungen auszuführen.
- {{jsxref("Statements/while", "while")}}
  - : Erstellt eine Schleife, die eine bestimmte Anweisung ausführt, solange die Prüfbedingung wahr ist. Die Bedingung wird vor der Ausführung der Anweisung ausgewertet.

### Sonstige

- {{jsxref("Statements/Empty", "Empty", "", 1)}}
  - : Eine leere Anweisung wird verwendet, wenn die JavaScript-Syntax eine Anweisung erwartet, aber keine Aktion ausgeführt werden soll.
- {{jsxref("Statements/block", "Block", "", 1)}}
  - : Eine Blockanweisung fasst null oder mehr Anweisungen zusammen. Der Block wird durch ein Paar geschweifter Klammern begrenzt.
- {{jsxref("Statements/Expression_statement", "Expression statement", "", 1)}}
  - : Eine Ausdrucksanweisung wertet einen Ausdruck aus und verwirft dessen Ergebnis. Der Ausdruck kann dabei Seiteneffekte auslösen, beispielsweise eine Funktion ausführen oder eine Variable aktualisieren.
- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft eine verfügbare Debugging-Funktionalität auf. Ist keine vorhanden, hat diese Anweisung keine Wirkung.
- {{jsxref("Statements/export", "export")}}
  - : Exportiert Funktionen, damit sie in externe Module und andere Skripte importiert werden können.
- {{jsxref("Statements/import", "import")}}
  - : Importiert Funktionen, die aus einem externen Modul oder einem anderen Skript exportiert wurden.
- {{jsxref("Statements/import/defer", "import defer")}}
  - : Lädt ein Modul als Namespace und verschiebt die synchrone Auswertung, bis auf Eigenschaften des zurückgegebenen Namespace zugegriffen wird.
- {{jsxref("Statements/import/source", "import source")}}
  - : Liefert ein Objekt, das den kompilierten Quellcode des Moduls repräsentiert, ohne dessen Abhängigkeiten zu laden, das Modul zu verknüpfen oder es auszuwerten.
- {{jsxref("Statements/label", "label", "", 1)}}
  - : Versieht eine Anweisung mit einem Bezeichner, auf den Sie mit einer `break`- oder `continue`-Anweisung verweisen können.
- {{jsxref("Statements/with", "with")}} {{deprecated_inline}}
  - : Erweitert die Gültigkeitsbereichskette für eine Anweisung.

## Was sind Anweisungen, Deklarationen und Ausdrücke?

Alle JavaScript-Programme bestehen aus einer Folge von Konstrukten auf oberster Ebene, die eine der oben aufgeführten Syntaxformen verwenden. Diese werden als [_Anweisungen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Statement) und [_Deklarationen_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-Declaration) bezeichnet. In der MDN-Dokumentation bezeichnen wir umgangssprachlich häufig beide als _Anweisungen_; technisch gesehen handelt es sich jedoch um zwei voneinander getrennte Mengen grammatischer Konstrukte.

Folgendes sind Deklarationen:

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} (Hinweis: Dies kann nur auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) vorkommen.)
- {{jsxref("Statements/import", "import")}} (Hinweis: Dies kann nur auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) vorkommen.)

Alles andere in der [obigen Liste](#anweisungen_und_deklarationen_nach_kategorie) ist eine Anweisung.

Die Begriffe „Anweisung“ und „Deklaration“ haben in der formalen JavaScript-Syntax eine präzise Bedeutung, die bestimmt, an welchen Stellen sie im Code stehen dürfen. Beispielsweise sind im Anweisungsteil der meisten Kontrollflusskonstrukte nur Anweisungen zulässig – etwa in den beiden Zweigen einer [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Anweisung:

```js-nolint
if (condition)
  statement1;
else
  statement2;
```

Wenn Sie statt einer Anweisung eine Deklaration verwenden, entsteht ein {{jsxref("SyntaxError")}}. Eine [`let`](/de/docs/Web/JavaScript/Reference/Statements/let)-Deklaration ist beispielsweise keine Anweisung. Daher können Sie sie nicht ohne umschließenden Block als Anweisungsteil einer `if`-Anweisung verwenden.

```js-nolint example-bad
if (condition)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

[`var`](/de/docs/Web/JavaScript/Reference/Statements/var) ist dagegen eine Anweisung und kann daher allein den Anweisungsteil einer `if`-Anweisung bilden.

```js-nolint example-good
if (condition)
  var i = 0;
```

Sie können Deklarationen als „{{Glossary("binding", "Binden")}} von Bezeichnern an Werte“ und Anweisungen als „Ausführen von Aktionen“ betrachten. Dass `var` eine Anweisung statt einer Deklaration ist, stellt einen Sonderfall dar: Es folgt nicht den üblichen Regeln des lexikalischen Gültigkeitsbereichs und kann Seiteneffekte haben – etwa globale Variablen erzeugen, vorhandene mit `var` definierte Variablen verändern und Variablen definieren, die außerhalb ihres Blocks sichtbar sind (weil mit `var` definierte Variablen keinen Block-Gültigkeitsbereich haben).

Ein weiteres Beispiel: [Labels](/de/docs/Web/JavaScript/Reference/Statements/label) können nur Anweisungen vorangestellt werden.

```js-nolint example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> Eine ältere Grammatik erlaubt es, [Funktionsdeklarationen mit Labels zu versehen](/de/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations). Sie ist jedoch nur standardisiert, um die Kompatibilität mit bestehendem Webcode zu gewährleisten.

Um diese Einschränkung zu umgehen, können Sie die Deklaration in geschweifte Klammern einschließen. Dadurch wird sie Teil einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block).

```js example-good
label: {
  const a = 1;
}

if (condition) {
  let i = 0;
}
```

In JavaScript erzeugen Anweisungen und Deklarationen Werte, die jedoch fast nie beobachtbar sind (außer über {{jsxref("Global_Objects/eval", "eval()")}}). Ihr Zweck besteht darin, die umgebende Umgebung zu verändern und Seiteneffekte hervorzurufen – etwa Variablenbindungen zu erzeugen, etwas auszugeben oder Variablenwerte zu ändern. Die dabei verwendeten Werte stammen aus der Auswertung von [_Ausdrücken_](https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#prod-Expression).

Ausdrücke sind keine Konstrukte auf oberster Ebene. Sie können nur an bestimmten Stellen innerhalb von Anweisungen und Deklarationen verwendet werden, beispielsweise in `if (expression)` oder `const x = expression`. Die Syntax der [Ausdrucksanweisung](/de/docs/Web/JavaScript/Reference/Statements/Expression_statement) ermöglicht es, die meisten Ausdrücke als Anweisungen zu verwenden. Dabei handelt es sich aber lediglich um eine Anweisung mit einer Stelle für einen einzelnen Ausdruck.

Die Syntaxstrukturen von JavaScript lassen sich allein anhand von Anweisungen, Deklarationen und Ausdrücken beschreiben:

- Anweisungen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `if (expression) statement` und Blockanweisungen der Form `{ statement; declaration }`).
- Deklarationen können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `function x() { statement; declaration }` und `const x = expression`).
- Ausdrücke können Anweisungen, Deklarationen und Ausdrücke enthalten (wie `() => { statement; declaration }` und `console.log(expression)`).

In der Referenzdokumentation zu jeder Syntaxform beschreiben wir alle Stellen, an denen weitere Konstrukte stehen können, und geben an, ob dort jeweils eine Anweisung, eine Deklaration oder ein Ausdruck erwartet wird.

_Operatoren_ sind ein weiteres wichtiges Konzept der JavaScript-Grammatik, funktionieren aber nicht wie Bausteine. Weitere Informationen finden Sie unter [Was sind Operatoren?](/de/docs/Web/JavaScript/Reference/Operators#what_are_operators).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators)
