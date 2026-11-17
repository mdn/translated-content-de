---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`switch`**-Anweisung wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) aus, vergleicht dessen Wert mit einer Reihe von `case`-Klauseln und führt die [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) ab der ersten `case`-Klausel mit einem übereinstimmenden Wert aus, bis eine `break`-Anweisung erreicht wird. Zur `default`-Klausel einer `switch`-Anweisung wird gesprungen, wenn keine `case`-Klausel mit dem Wert des Ausdrucks übereinstimmt.

{{InteractiveExample("JavaScript Demo: switch statement", "taller")}}

```js interactive-example
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
```

## Syntax

```js-nolint
switch (expression) {
  case caseExpression1:
    statements
  case caseExpression2:
    statements
  // …
  case caseExpressionN:
    statements
  default:
    statements
}
```

- `expression`
  - : Ein Ausdruck, dessen Ergebnis mit jeder `case`-Klausel verglichen wird.
- `caseExpressionN` {{optional_inline}}
  - : Eine `case`-Klausel, die mit `expression` verglichen wird. Wenn der Wert von `expression` mit dem Wert einer `caseExpressionN` übereinstimmt, beginnt die Ausführung bei der ersten Anweisung nach dieser `case`-Klausel und läuft bis zum Ende der `switch`-Anweisung oder bis zur ersten erreichten `break`-Anweisung.
- `default` {{optional_inline}}
  - : Eine `default`-Klausel. Falls vorhanden, wird sie ausgeführt, wenn der Wert von `expression` mit keiner der `case`-Klauseln übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Klausel enthalten.

## Beschreibung

Eine `switch`-Anweisung wertet zuerst ihren Ausdruck aus. Anschließend sucht sie nach der ersten `case`-Klausel, deren Ausdruck denselben Wert ergibt wie der ursprüngliche Ausdruck (gemäß dem Vergleich mit [strikter Gleichheit](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)). Die Ausführung wird zu dieser Klausel übertragen und alle darauf folgenden Anweisungen werden ausgeführt.

Die Ausdrücke der Klauseln werden nur bei Bedarf ausgewertet: Wurde bereits eine Übereinstimmung gefunden, werden die Ausdrücke nachfolgender `case`-Klauseln nicht ausgewertet, selbst wenn die Ausführung diese Klauseln durch [Fall-through](#beenden_und_fall-through) erreicht.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

Wird keine übereinstimmende `case`-Klausel gefunden, sucht das Programm nach der optionalen `default`-Klausel. Falls sie vorhanden ist, wird die Ausführung zu ihr übertragen und die darauf folgenden Anweisungen werden ausgeführt. Ist keine `default`-Klausel vorhanden, setzt das Programm die Ausführung bei der Anweisung nach der `switch`-Anweisung fort. Üblicherweise steht die `default`-Klausel an letzter Stelle, das ist jedoch nicht erforderlich. Eine `switch`-Anweisung darf nur eine `default`-Klausel enthalten; mehrere `default`-Klauseln führen zu einem {{jsxref("SyntaxError")}}.

### Beenden und Fall-through

Mit der [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung können Sie den Rumpf einer `switch`-Anweisung vorzeitig verlassen, häufig nachdem alle Anweisungen zwischen zwei `case`-Klauseln ausgeführt wurden. Die Ausführung wird bei der ersten Anweisung nach `switch` fortgesetzt.

Wird `break` weggelassen, läuft die Ausführung bei der nächsten `case`-Klausel weiter – gegebenenfalls auch bei der `default`-Klausel –, unabhängig davon, ob der Wert des Ausdrucks dieser Klausel übereinstimmt. Dieses Verhalten wird als „Fall-through“ bezeichnet.

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criterion; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1
```

Im passenden Kontext können auch andere Anweisungen zur Steuerung des Programmablaufs bewirken, dass die `switch`-Anweisung verlassen wird. Befindet sich die `switch`-Anweisung beispielsweise in einer Funktion, beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung die Ausführung des Funktionsrumpfs und damit auch der `switch`-Anweisung. Befindet sich die `switch`-Anweisung in einer Schleife, beendet eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung die `switch`-Anweisung und springt zur nächsten Iteration der Schleife.

### Lexikalischer Gültigkeitsbereich

Die `case`- und `default`-Klauseln ähneln [Labels](/de/docs/Web/JavaScript/Reference/Statements/label): Sie kennzeichnen mögliche Stellen, zu denen der Programmablauf springen kann. Sie erzeugen jedoch selbst keine lexikalischen {{Glossary("Scope", "Gültigkeitsbereiche")}} (und bewirken auch kein automatisches Verlassen der `switch`-Anweisung, wie oben gezeigt). Zum Beispiel:

```js-nolint example-bad
const action = "say_hello";
switch (action) {
  case "say_hello":
    const message = "hello";
    console.log(message);
    break;
  case "say_hi":
    const message = "hi";
    console.log(message);
    break;
  default:
    console.log("Empty action received.");
}
```

Dieses Beispiel gibt den Fehler „Uncaught SyntaxError: Identifier 'message' has already been declared“ aus, weil die erste Deklaration `const message = 'hello';` mit der zweiten Deklaration `const message = 'hi';` in Konflikt steht, obwohl sie sich in unterschiedlichen `case`-Klauseln befinden. Der Grund dafür ist, dass beide `const`-Deklarationen im selben Blockgültigkeitsbereich liegen, den der Rumpf der `switch`-Anweisung bildet.

Um dies zu beheben, schließen Sie eine `case`-Klausel in einen Block ein, wenn Sie darin `let`- oder `const`-Deklarationen verwenden müssen.

```js
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
```

Dieser Code gibt nun wie erwartet `hello` ohne Fehler in der Konsole aus.

## Beispiele

### switch verwenden

Wenn im folgenden Beispiel `expr` den Wert `Bananas` ergibt, vergleicht das Programm diesen Wert mit `case 'Bananas'` und führt die zugehörige Anweisung aus. Sobald `break` erreicht wird, verlässt das Programm die `switch`-Anweisung und führt die darauf folgende Anweisung aus. Würde `break` weggelassen, würde auch die Anweisung für `case 'Cherries'` ausgeführt.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

console.log("Is there anything else you'd like?");
```

### Die default-Klausel zwischen zwei case-Klauseln platzieren

Wenn keine Übereinstimmung gefunden wird, beginnt die Ausführung bei der `default`-Klausel und führt alle darauf folgenden Anweisungen aus.

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}
```

Das funktioniert auch, wenn `default` vor allen anderen `case`-Klauseln steht.

### Fall-through nutzen

Diese Methode nutzt aus, dass die Ausführung bei der nächsten `case`-Klausel fortgesetzt wird, wenn auf eine `case`-Klausel kein `break` folgt – unabhängig davon, ob diese `case`-Klausel die Bedingung erfüllt.

Das folgende Beispiel zeigt mehrere aufeinanderfolgende `case`-Klauseln mit einer einzigen Operation, bei denen vier verschiedene Werte genau dasselbe bewirken.

```js
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
```

Das folgende Beispiel zeigt aufeinanderfolgende `case`-Klauseln mit mehreren Operationen. Je nach übergebener Ganzzahl erhalten Sie unterschiedliche Ausgaben. Es verdeutlicht, dass die `case`-Klauseln in der Reihenfolge durchlaufen werden, in der Sie sie anordnen; sie müssen nicht in numerischer Reihenfolge stehen. In JavaScript können Sie in diesen `case`-Anweisungen auch Zeichenfolgen verwenden.

```js
const foo = 1;
let output = "Output: ";
switch (foo) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```

Die Ausgabe dieses Beispiels:

| Wert                                                        | Protokolltext                     |
| ----------------------------------------------------------- | --------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5` oder `0` | Please pick a number from 0 to 5! |
| `0`                                                         | Output: So What Is Your Name?     |
| `1`                                                         | Output: What Is Your Name?        |
| `2`                                                         | Output: Your Name?                |
| `3`                                                         | Output: Name?                     |
| `4`                                                         | Output: ?                         |
| `5`                                                         | Output: !                         |

### Eine Alternative zu if...else-Ketten

Häufig werden mehrere Bedingungen mit [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) geprüft.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

Dieses Muster führt zwar keine Folge von `===`-Vergleichen aus, lässt sich aber dennoch in eine `switch`-Anweisung umwandeln.

```js
switch (true) {
  case "fetch" in globalThis:
    // Fetch a resource with fetch
    break;
  case "XMLHttpRequest" in globalThis:
    // Fetch a resource with XMLHttpRequest
    break;
  default:
    // Fetch a resource with some custom AJAX logic
    break;
}
```

Das Muster `switch (true)` ist als Alternative zu `if...else` besonders nützlich, wenn Sie das Fall-through-Verhalten nutzen möchten.

```js
switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // Fall-through, since a square is a rectangle as well!
  case isRectangle(shape):
    console.log("This shape is a rectangle.");
  case isQuadrilateral(shape):
    console.log("This shape is a quadrilateral.");
    break;
  case isCircle(shape):
    console.log("This shape is a circle.");
    break;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/if...else", "if...else")}}
