---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`switch`**-Anweisung wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) aus, vergleicht den Wert des Ausdrucks mit einer Serie von `case`-Anweisungen und führt [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) ab der ersten `case`-Anweisung mit einem übereinstimmenden Wert aus, bis eine `break`-Anweisung erreicht wird. Die `default`-Anweisung einer `switch`-Anweisung wird ausgeführt, wenn keine `case`-Anweisung mit dem Wert des Ausdrucks übereinstimmt.

{{InteractiveExample("JavaScript Demo: Statement - Switch", "taller")}}

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
  - : Ein Ausdruck, dessen Ergebnis mit jeder `case`-Anweisung verglichen wird.
- `caseExpressionN` {{optional_inline}}
  - : Eine `case`-Anweisung, die verwendet wird, um mit `expression` abgeglichen zu werden. Wenn der Wert von `expression` mit dem Wert eines `caseExpressionN` übereinstimmt, beginnt die Ausführung ab der ersten Anweisung nach dieser `case`-Anweisung bis entweder zum Ende der `switch`-Anweisung oder bis zur ersten `break`-Anweisung.
- `default` {{optional_inline}}
  - : Eine `default`-Anweisung, die ausgeführt wird, falls der Wert von `expression` mit keiner der `case`-Anweisungen übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Anweisung enthalten.

## Beschreibung

Eine `switch`-Anweisung wertet zunächst ihren Ausdruck aus. Anschließend sucht sie die erste `case`-Anweisung, deren Ausdruck denselben Wert wie das Ergebnis des Eingabeausdrucks hat (unter Verwendung des [strict equality](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)-Vergleichs) und übergibt die Steuerung an diese Anweisung, indem alle nachfolgenden Anweisungen ausgeführt werden.

Die Ausdrücke der `case`-Anweisungen werden nur bei Bedarf ausgewertet – wenn bereits eine Übereinstimmung gefunden wurde, werden nachfolgende `case`-Ausdrücke nicht ausgewertet, selbst wenn sie durch [Fall-Through](#breaking_und_fall-through) aufgerufen werden.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

Falls keine übereinstimmende `case`-Anweisung gefunden wird, durchsucht das Programm die optionale `default`-Anweisung. Falls sie gefunden wird, übergibt das Programm die Steuerung an diese Anweisung und führt die nachfolgenden Anweisungen aus. Falls keine `default`-Anweisung vorhanden ist, setzt das Programm die Ausführung ab der Anweisung nach dem Ende von `switch` fort. Üblicherweise ist die `default`-Anweisung die letzte Anweisung, dies ist jedoch nicht zwingend notwendig. Eine `switch`-Anweisung darf nur eine `default`-Anweisung haben; mehrere `default`-Anweisungen führen zu einem {{jsxref("SyntaxError")}}.

### Breaking und Fall-Through

Innerhalb des Körpers einer `switch`-Anweisung können Sie die [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden, um frühzeitig aus der `switch`-Anweisung auszusteigen, oft nachdem alle Anweisungen zwischen zwei `case`-Anweisungen ausgeführt wurden. Die Ausführung wird bei der ersten Anweisung nach `switch` fortgesetzt.

Falls `break` weggelassen wird, wird die Ausführung zur nächsten `case`-Anweisung fortgesetzt, auch zur `default`-Anweisung, unabhängig davon, ob der Ausdruck dieser Anweisung übereinstimmt. Dieses Verhalten wird "Fall-Through" genannt.

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
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

In einem entsprechenden Kontext haben auch andere Kontrollflussanweisungen die Wirkung, die `switch`-Anweisung zu verlassen. Zum Beispiel beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung, falls die `switch`-Anweisung in einer Funktion enthalten ist, die Ausführung des Funktionskörpers und somit der `switch`-Anweisung. Ist die `switch`-Anweisung in einer Schleife enthalten, bewirkt eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung, dass die Schleife zur nächsten Iteration springt und die `switch`-Anweisung verlassen wird.

### Lexikalisches Scoping

Die `case`- und `default`-Anweisungen sind wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label): Sie kennzeichnen mögliche Stellen, zu denen der Kontrollfluss springen kann. Sie erstellen jedoch keine eigenen lexikalischen {{Glossary("Scope", "Scopes")}} (und brechen auch nicht automatisch aus – wie oben demonstriert). Zum Beispiel:

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

Dieses Beispiel führt zum Fehler "Uncaught SyntaxError: Identifier 'message' has already been declared", da die erste Deklaration `const message = 'hello';` mit der zweiten Deklaration `const message = 'hi';` kollidiert, selbst wenn sie sich in ihren eigenen separaten `case`-Blöcken befinden. Letztendlich liegt dies daran, dass sich beide `const`-Deklarationen im selben Blockscope befinden, das durch den Körper der `switch`-Anweisung erstellt wird.

Um dieses Problem zu beheben, sollten Sie, wenn Sie `let` oder `const`-Deklarationen in einer `case`-Anweisung verwenden müssen, einen Block darum erstellen.

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

Dieser Code gibt jetzt wie erwartet `hello` in der Konsole aus, ohne irgendwelche Fehler.

## Beispiele

### Verwendung von switch

Im folgenden Beispiel, wenn `expr` den Wert `Bananas` ergibt, vergleicht das Programm den Wert mit der Anweisung `case 'Bananas'` und führt die zugehörige Anweisung aus. Sobald `break` erreicht wird, bricht das Programm aus der `switch`-Anweisung aus und führt die Anweisung nach `switch` aus. Wenn `break` weggelassen würde, würde auch die Anweisung für `case 'Cherries'` ausgeführt werden.

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

### Die Default-Anweisung zwischen zwei Case-Anweisungen setzen

Falls keine Übereinstimmung gefunden wird, beginnt die Ausführung ab der `default`-Anweisung und führt alle nachfolgenden Anweisungen aus.

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

Dies funktioniert auch, wenn `default` vor allen anderen `case`-Anweisungen platziert wird.

### Nutzung von Fall-Through

Diese Methode nutzt die Tatsache aus, dass, wenn unterhalb einer `case`-Anweisung kein `break` vorhanden ist, die Ausführung zur nächsten `case`-Anweisung fortgesetzt wird, unabhängig davon, ob diese die Bedingungen erfüllt.

Das Folgende ist ein Beispiel für eine sequentielle `case`-Anweisung mit einer einzigen Operation, bei der vier verschiedene Werte dieselbe Aktion ausführen.

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

Das Folgende ist ein Beispiel für eine mehrfache Operationssequentielle `case`-Anweisung, bei der Sie je nach der angegebenen Ganzzahl eine unterschiedliche Ausgabe erhalten können. Dies zeigt, dass die `case`-Anweisungen in der Reihenfolge durchlaufen werden, in der sie definiert sind, und nicht numerisch sequentiell sein müssen. In JavaScript können Sie sogar Definitionen von Strings in diese `case`-Anweisungen einmischen.

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

| Wert                                                         | Konsolenausgabe                         |
| ------------------------------------------------------------ | --------------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5`, oder `0` | Bitte wählen Sie eine Zahl von 0 bis 5! |
| `0`                                                          | Ausgabe: So What Is Your Name?          |
| `1`                                                          | Ausgabe: What Is Your Name?             |
| `2`                                                          | Ausgabe: Your Name?                     |
| `3`                                                          | Ausgabe: Name?                          |
| `4`                                                          | Ausgabe: ?                              |
| `5`                                                          | Ausgabe: !                              |

### Eine Alternative zu if...else-Ketten

Manchmal müssen Sie eine Serie von [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Vergleichen durchführen.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

Dieses Muster führt keine Sequenz von `===`-Vergleichen durch, kann jedoch dennoch in eine `switch`-Konstruktion umgewandelt werden.

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

Das Muster `switch (true)` als Alternative für `if...else` ist besonders nützlich, wenn Sie das Fall-Through-Verhalten nutzen möchten.

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
