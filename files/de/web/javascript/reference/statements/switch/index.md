---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`switch`**-Anweisung wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) aus, vergleicht den Wert des Ausdrucks mit einer Reihe von `case`-Klauseln und führt [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) nach der ersten `case`-Klausel mit passendem Wert aus, bis eine `break`-Anweisung erreicht wird. Die `default`-Klausel einer `switch`-Anweisung wird angesprungen, wenn keine `case`-Klausel den Wert des Ausdrucks trifft.

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
  - : Eine `case`-Klausel, die verwendet wird, um gegen den `expression` zu vergleichen. Wenn der Wert von `expression` mit dem Wert eines `caseExpressionN` übereinstimmt, beginnt die Ausführung ab der ersten Anweisung nach dieser `case`-Klausel bis entweder zum Ende der `switch`-Anweisung oder der ersten `break`, die auftritt.
- `default` {{optional_inline}}
  - : Eine `default`-Klausel; wenn vorhanden, wird diese Klausel ausgeführt, wenn der Wert von `expression` mit keiner der `case`-Klauseln übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Klausel haben.

## Beschreibung

Eine `switch`-Anweisung wertet zunächst ihren Ausdruck aus. Dann sucht sie die erste `case`-Klausel, deren Ausdruck denselben Wert wie das Ergebnis des Eingabeausdrucks hat (unter Verwendung des [strikten Gleichheitsvergleichs](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)) und überträgt die Kontrolle auf diese Klausel, wobei alle Anweisungen nach dieser Klausel ausgeführt werden.

Die Klauselausdrücke werden nur bei Bedarf ausgewertet — wenn bereits eine Übereinstimmung gefunden wurde, werden nachfolgende `case`-Klauselausdrücke nicht ausgewertet, selbst wenn sie durch [fall-through](#breaking_und_fall-through) besucht werden.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

Wenn keine passende `case`-Klausel gefunden wird, sucht das Programm nach der optionalen `default`-Klausel und überträgt, falls gefunden, die Kontrolle auf diese Klausel und führt die Anweisungen nach dieser Klausel aus. Wird keine `default`-Klausel gefunden, fährt das Programm mit der Ausführung an der Anweisung nach dem Ende von `switch` fort. Üblicherweise ist die `default`-Klausel die letzte Klausel, aber das muss nicht so sein. Eine `switch`-Anweisung darf nur eine `default`-Klausel haben; mehrere `default`-Klauseln führen zu einem {{jsxref("SyntaxError")}}.

### Breaking und fall-through

Sie können die [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung innerhalb einer `switch`-Anweisungsgruppe verwenden, um frühzeitig auszubrechen, oft wenn alle Anweisungen zwischen zwei `case`-Klauseln ausgeführt wurden. Die Ausführung erfolgt bei der ersten Anweisung nach `switch`.

Wenn `break` weggelassen wird, wird die Ausführung zur nächsten `case`-Klausel fortgesetzt, sogar zur `default`-Klausel, unabhängig davon, ob der Wert des Ausdrucks dieser Klausel entspricht. Dieses Verhalten wird "fall-through" genannt.

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

In einem passenden Kontext haben auch andere Steuerflussanweisungen die Wirkung, aus der `switch`-Anweisung auszubrechen. Zum Beispiel, wenn die `switch`-Anweisung in einer Funktion enthalten ist, beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung die Ausführung des Funktionskörpers und damit die `switch`-Anweisung. Wenn die `switch`-Anweisung in einer Schleife enthalten ist, stoppt eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung die `switch`-Anweisung und springt zur nächsten Iteration der Schleife.

### Lexikalische Bereichsregelung

Die `case`- und `default`-Klauseln sind wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label): Sie kennzeichnen mögliche Stellen, zu denen der Kontrollfluss springen kann. Sie erzeugen jedoch keine lexikalischen {{Glossary("Scope", "Bereiche")}} selbst (sie brechen auch nicht automatisch ab — wie oben gezeigt). Zum Beispiel:

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

Dieses Beispiel wird den Fehler "Uncaught SyntaxError: Identifier 'message' has already been declared" ausgeben, weil die erste `const message = 'hello';` mit der zweiten `const message = 'hi';` Deklaration in Konflikt steht, auch wenn sie sich in ihren eigenen separaten `case`-Klauseln befinden. Letztendlich liegt das daran, dass beide `const`-Deklarationen innerhalb desselben Blockbereichs stehen, der durch den `switch`-Körper erzeugt wird.

Um dies zu beheben, wickeln Sie die `let`- oder `const`-Deklarationen in einer `case`-Klausel in einen Block ein.

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

Dieser Code wird nun `hello` in der Konsole ausgeben, wie es sollte, ohne Fehler.

## Beispiele

### Verwendung von switch

Im folgenden Beispiel, wenn `expr` zu `Bananas` ausgewertet wird, vergleicht das Programm den Wert mit der `case 'Bananas'` und führt die zugehörige Anweisung aus. Wenn `break` erreicht wird, bricht das Programm aus dem `switch` aus und führt die Anweisung nach `switch` aus. Wenn `break` weggelassen würde, würde auch die Anweisung für `case 'Cherries'` ausgeführt werden.

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

### Die default-Klausel zwischen zwei case-Klauseln setzen

Wenn keine Übereinstimmung gefunden wird, beginnt die Ausführung bei der `default`-Klausel und führt alle Anweisungen danach aus.

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

Es funktioniert auch, wenn Sie `default` vor allen anderen `case`-Klauseln setzen.

### Ausnutzung von Fall-through

Diese Methode nutzt die Tatsache aus, dass, wenn unter einer `case`-Klausel kein `break` steht, die Ausführung zur nächsten `case`-Klausel fortgesetzt wird, unabhängig davon, ob diese `case` die Kriterien erfüllt.

Das Folgende ist ein Beispiel für eine Einzeloperation sequenzieller `case`-Anweisung, bei der vier verschiedene Werte genau dasselbe tun.

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

Das Folgende ist ein Beispiel für eine Mehrfachoperation sequenzielle `case`-Klausel, bei der, abhängig von der bereitgestellten Ganzzahl, unterschiedliche Ausgaben erfolgen. Dies zeigt Ihnen, dass es in der Reihenfolge durchlaufen wird, in der Sie die `case`-Klauseln setzen, und dass es nicht numerisch sequentiell sein muss. In JavaScript können Sie sogar String-Definitionen in diese `case`-Anweisungen mischen.

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

| Wert                                                         | Logtext                                 |
| ------------------------------------------------------------ | --------------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5`, oder `0` | Bitte wählen Sie eine Zahl von 0 bis 5! |
| `0`                                                          | Ausgabe: So What Is Your Name?          |
| `1`                                                          | Ausgabe: What Is Your Name?             |
| `2`                                                          | Ausgabe: Your Name?                     |
| `3`                                                          | Ausgabe: Name?                          |
| `4`                                                          | Ausgabe: ?                              |
| `5`                                                          | Ausgabe: !                              |

### Eine Alternative zu if...else-Ketten

Sie finden sich oft in einer Reihe von [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Vergleichen wieder.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

Dieses Muster führt keine Sequenz von `===`-Vergleichen durch, kann aber dennoch in eine `switch`-Konstruktion umgewandelt werden.

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

Das `switch (true)`-Muster als Alternative zu `if...else` ist besonders nützlich, wenn Sie das Fall-through-Verhalten nutzen möchten.

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
