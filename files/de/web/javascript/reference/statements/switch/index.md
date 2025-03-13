---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`switch`**-Anweisung wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) aus, vergleicht den Wert des Ausdrucks mit einer Reihe von `case`-Klauseln und führt die [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) nach der ersten passenden `case`-Klausel aus, bis eine `break`-Anweisung aufgerufen wird. Die `default`-Klausel einer `switch`-Anweisung wird angesprungen, wenn keine `case` den Ausdruckswert findet.

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
  - : Eine `case`-Klausel, die zum Vergleich gegen `expression` genutzt wird. Wenn der Wert von `expression` mit dem Wert einer `caseExpressionN` übereinstimmt, beginnt die Ausführung bei der ersten Anweisung nach dieser `case`-Klausel und läuft bis zum Ende der `switch`-Anweisung oder bis zur ersten `break`.
- `default` {{optional_inline}}
  - : Eine `default`-Klausel; wenn vorhanden, wird diese Klausel ausgeführt, wenn der Wert von `expression` mit keiner der `case`-Klauseln übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Klausel enthalten.

## Beschreibung

Eine `switch`-Anweisung wertet zuerst ihren Ausdruck aus. Dann sucht sie nach der ersten `case`-Klausel, deren Ausdruck denselben Wert wie das Ergebnis des Eingabeausdrucks liefert (unter Verwendung des [strikten Gleichheitsvergleichs](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)) und überträgt die Kontrolle zu dieser Klausel, indem alle Anweisungen nach dieser Klausel ausgeführt werden.

Die Klauselausdrücke werden nur bei Bedarf ausgewertet – wenn bereits eine Übereinstimmung gefunden wurde, werden nachfolgende `case`-Klauselausdrücke nicht ausgewertet, selbst wenn sie durch [Fall-through](#unterbrechen_und_fall-through) besucht werden.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

Wenn keine passende `case`-Klausel gefunden wird, sucht das Programm nach der optionalen `default`-Klausel und wenn sie gefunden wird, überträgt es die Kontrolle auf diese Klausel, indem die darauf folgenden Anweisungen ausgeführt werden. Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung mit der Anweisung nach dem Ende von `switch` fort. Aus Konvention ist die `default`-Klausel die letzte Klausel, aber sie muss es nicht sein. Eine `switch`-Anweisung darf nur eine `default`-Klausel enthalten; mehrere `default`-Klauseln führen zu einem {{jsxref("SyntaxError")}}.

### Unterbrechen und Fall-through

Sie können die [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung innerhalb des Körpers einer `switch`-Anweisung verwenden, um frühzeitig abzubrechen, oft wenn alle Anweisungen zwischen zwei `case`-Klauseln ausgeführt wurden. Die Ausführung wird mit der ersten Anweisung nach `switch` fortgesetzt.

Wenn `break` weggelassen wird, wird die Ausführung zur nächsten `case`-Klausel fortgesetzt, selbst zur `default`-Klausel, unabhängig davon, ob der Wert des Ausdrucks dieser Klausel übereinstimmt. Dieses Verhalten wird als "Fall-through" bezeichnet.

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

In einem geeigneten Kontext bewirken auch andere Kontrollfluss-Anweisungen das Verlassen der `switch`-Anweisung. Wenn beispielsweise die `switch`-Anweisung in eine Funktion eingebettet ist, beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung die Ausführung des Funktionskörpers und daher der `switch`-Anweisung. Wenn die `switch`-Anweisung in einer Schleife enthalten ist, stoppt eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung die `switch`-Anweisung und springt zur nächsten Iteration der Schleife.

### Lexikalische Umgebungen

Die `case`- und `default`-Klauseln sind wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label): sie geben mögliche Orte an, zu denen der Kontrollfluss springen kann. Sie erzeugen jedoch keine lexikalischen {{Glossary("Scope", "Umgebungen")}} für sich selbst (und brechen nicht automatisch wie oben gezeigt aus). Zum Beispiel:

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

Dieses Beispiel wird den Fehler "Uncaught SyntaxError: Identifier 'message' has already been declared" ausgeben, da die erste `const message = 'hello';`-Deklaration mit der zweiten `const message = 'hi';`-Deklaration in Konflikt steht, selbst wenn sie sich in ihren eigenen separaten case-Klauseln befinden. Letztendlich liegt dies daran, dass beide `const`-Deklarationen sich im selben Block befinden, der durch den `switch`-Körper erstellt wurde.

Um dies zu beheben, sollten Sie, wann immer Sie `let` oder `const` Deklarationen in einer `case`-Klausel verwenden möchten, diese in einen Block einschließen.

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

Dieser Code wird nun `hello` in die Konsole ausgeben, wie es sollte, ohne Fehler.

## Beispiele

### Verwendung von switch

Im folgenden Beispiel, wenn `expr` den Wert `Bananas` hat, vergleicht das Programm den Wert mit dem Fall `case 'Bananas'` und führt die zugehörige Anweisung aus. Wenn `break` aufgerufen wird, bricht das Programm aus `switch` aus und führt die Anweisung nach `switch` aus. Wenn `break` weggelassen würde, würde auch die Anweisung für den `case 'Cherries'` ausgeführt.

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

Wenn keine Übereinstimmung gefunden wird, startet die Ausführung ab der `default`-Klausel und führt alle nachfolgenden Anweisungen aus.

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

Es funktioniert auch, wenn Sie `default` vor allen anderen `case`-Klauseln platzieren.

### Nutzung von Fall-through

Diese Methode nutzt die Tatsache aus, dass, wenn es unter einer `case`-Klausel kein `break` gibt, die Ausführung zur nächsten `case`-Klausel weitergeht, unabhängig davon, ob diese `case` die Kriterien erfüllt.

Das folgende ist ein Beispiel für eine einzelne operationale sequenzielle `case`-Anweisung, bei der vier verschiedene Werte genau das Gleiche ausführen.

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

Das folgende ist ein Beispiel für eine mehrstufige sequenzielle `case`-Klausel, bei der Sie, abhängig von der bereitgestellten ganzen Zahl, unterschiedliche Ausgaben erhalten können. Dies zeigt Ihnen, dass es in der Reihenfolge durchlaufen wird, in der Sie die `case`-Klauseln setzen, und es muss nicht numerisch sequenziell sein. In JavaScript können Sie sogar Definitionen von Zeichenketten in diese `case`-Anweisungen einmischen.

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

| Wert                                                         | Log-Text                                |
| ------------------------------------------------------------ | --------------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5`, oder `0` | Bitte wählen Sie eine Zahl von 0 bis 5! |
| `0`                                                          | Ausgabe: So What Is Your Name?          |
| `1`                                                          | Ausgabe: What Is Your Name?             |
| `2`                                                          | Ausgabe: Your Name?                     |
| `3`                                                          | Ausgabe: Name?                          |
| `4`                                                          | Ausgabe: ?                              |
| `5`                                                          | Ausgabe: !                              |

### Eine Alternative zu if...else-Ketten

Oft wird man eine Reihe von [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Vergleichen machen.

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
