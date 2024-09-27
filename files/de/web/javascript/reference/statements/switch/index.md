---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jsSidebar("Statements")}}

Die **`switch`**-Anweisung bewertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators), vergleicht den Wert des Ausdrucks mit einer Reihe von `case`-Klauseln und führt die [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) nach der ersten `case`-Klausel mit einem passenden Wert aus, bis eine `break`-Anweisung erreicht wird. Die `default`-Klausel einer `switch`-Anweisung wird angesprungen, wenn keine `case`-Klauseln mit dem Wert des Ausdrucks übereinstimmen.

{{EmbedInteractiveExample("pages/js/statement-switch.html", "taller")}}

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
  - : Eine `case`-Klausel, die mit `expression` verglichen wird. Wenn der Wert von `expression` mit dem Wert von `caseExpressionN` übereinstimmt, beginnt die Ausführung ab der ersten Anweisung nach dieser `case`-Klausel bis entweder zum Ende der `switch`-Anweisung oder zum ersten `break`.
- `default` {{optional_inline}}
  - : Eine `default`-Klausel; falls vorhanden, wird diese Klausel ausgeführt, wenn der Wert von `expression` mit keiner der `case`-Klauseln übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Klausel haben.

## Beschreibung

Eine `switch`-Anweisung bewertet zunächst ihren Ausdruck. Sie sucht dann nach der ersten `case`-Klausel, deren Ausdruck den gleichen Wert ergibt wie das Ergebnis des Eingabeausdrucks (unter Verwendung des [strikten Gleichheitsvergleichs](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)) und überträgt die Kontrolle auf diese Klausel, wobei alle nachfolgenden Anweisungen dieser Klausel ausgeführt werden.

Die Klauselausdrücke werden nur bei Bedarf ausgewertet — wenn bereits eine Übereinstimmung gefunden wurde, werden nachfolgende Klauselausdrücke nicht ausgewertet, selbst wenn sie durch [Fall-through](#unterbrechung_und_fall-through) erreicht werden.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

Wenn keine passende `case`-Klausel gefunden wird, sucht das Programm nach der optionalen `default`-Klausel, und falls sie gefunden wird, wird die Kontrolle auf diese Klausel übertragen und deren nachfolgende Anweisungen ausgeführt. Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der Anweisung nach dem Ende des `switch` fort. Üblicherweise ist die `default`-Klausel die letzte Klausel, doch das muss nicht zwangsläufig so sein. Eine `switch`-Anweisung kann nur eine `default`-Klausel haben; mehrere `default`-Klauseln führen zu einem {{jsxref("SyntaxError")}}.

### Unterbrechung und Fall-through

Sie können die [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung innerhalb des Körpers einer `switch`-Anweisung verwenden, um frühzeitig zu unterbrechen, oft, wenn alle Anweisungen zwischen zwei `case`-Klauseln ausgeführt wurden. Die Ausführung wird bei der ersten Anweisung nach `switch` fortgesetzt.

Wenn `break` weggelassen wird, wird die Ausführung zur nächsten `case`-Klausel fortgesetzt, auch zur `default`-Klausel, unabhängig davon, ob der Wert des Ausdrucks dieser Klausel übereinstimmt. Dieses Verhalten wird als "Fall-through" bezeichnet.

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

In einem entsprechenden Kontext haben andere Kontrollfluss-Anweisungen ebenfalls den Effekt, die `switch`-Anweisung zu beenden. Beispielsweise, wenn die `switch`-Anweisung in einer Funktion enthalten ist, beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung die Ausführung des Funktionskörpers und somit der `switch`-Anweisung. Wenn die `switch`-Anweisung in einer Schleife enthalten ist, beendet eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung die `switch`-Anweisung und wechselt zur nächsten Schleifeniteration.

### Lexikalische Einbindung

Die `case`- und `default`-Klauseln ähneln [Marken](/de/docs/Web/JavaScript/Reference/Statements/label): Sie kennzeichnen mögliche Stellen, zu denen der Kontrollfluss springen kann. Jedoch erzeugen sie keine eigenen lexikalischen [Scopes](/de/docs/Glossary/Scope) (sie unterbrechen auch nicht automatisch - wie oben gezeigt). Zum Beispiel:

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

Dieses Beispiel wird den Fehler "Uncaught SyntaxError: Identifier 'message' has already been declared" ausgeben, da die erste `const message = 'hello';` mit der zweiten `const message = 'hi';` Deklaration in Konflikt steht, auch wenn sie in ihren eigenen separaten `case`-Klauseln sind. Letztendlich liegt dies daran, dass beide `const`-Deklarationen im selben Blockscope erstellt werden, das durch den `switch`-Körper definiert wird.

Um dies zu beheben, sollten Sie, wann immer Sie `let`- oder `const`-Deklarationen in einer `case`-Klausel verwenden müssen, diese in einen Block einfügen.

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

Dieses Codebeispiel gibt nun `hello` in der Konsole aus, wie es soll, ohne Fehler.

## Beispiele

### Verwenden von switch

Im folgenden Beispiel, wenn `expr` den Wert `Bananas` ergibt, stimmt das Programm den Wert mit `case 'Bananas'` ab und führt die zugehörige Anweisung aus. Wenn `break` erreicht wird, beendet das Programm `switch` und führt die Anweisung nach `switch` aus. Wenn `break` weggelassen worden wäre, würde auch die Anweisung für `case 'Cherries'` ausgeführt werden.

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

Wenn keine Übereinstimmung gefunden wird, beginnt die Ausführung bei der `default`-Klausel und führt alle nachfolgenden Anweisungen aus.

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

### Nutzung des Fall-throughs

Diese Methode nutzt aus, dass, wenn kein `break` unterhalb einer `case`-Klausel vorhanden ist, die Ausführung zur nächsten `case`-Klausel weitergeht, unabhängig davon, ob diese `case` die Kriterien erfüllt.

Das folgende ist ein Beispiel für eine einfache sequentielle `case`-Anweisung, bei der vier verschiedene Werte exakt dasselbe ausführen.

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

Das folgende ist ein Beispiel für eine multiple sequentielle `case`-Klausel, bei der abhängig von der angegebenen Nummer unterschiedliche Ausgaben erfolgen. Dies zeigt Ihnen, dass die Bearbeitung in der Reihenfolge erfolgt, in der Sie die `case`-Klauseln anordnen und dass diese nicht numerisch sein müssen. In JavaScript können Sie sogar Definitionen von Zeichenketten in diese `case`-Anweisungen einfügen.

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

| Wert                                                    | Konsolentext                                 |
| ------------------------------------------------------- | -------------------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5`, `0` | Bitte wählen Sie eine Zahl zwischen 0 bis 5! |
| `0`                                                     | Ausgabe: So What Is Your Name?               |
| `1`                                                     | Ausgabe: What Is Your Name?                  |
| `2`                                                     | Ausgabe: Your Name?                          |
| `3`                                                     | Ausgabe: Name?                               |
| `4`                                                     | Ausgabe: ?                                   |
| `5`                                                     | Ausgabe: !                                   |

### Eine Alternative zu if...else-Ketten

Sie werden sich oft dabei ertappen, eine Serie von [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Übereinstimmungen auszuführen.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

Dieses Muster führt keine Sequenz von `===`-Vergleichen durch, aber Sie können es trotzdem in eine `switch`-Konstruktion umwandeln.

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
