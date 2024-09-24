---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jsSidebar("Statements")}}

Die **`switch`**-Anweisung wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) aus, vergleicht den Wert des Ausdrucks mit einer Reihe von `case`-Klauseln und führt [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) nach der ersten `case`-Klausel mit übereinstimmendem Wert aus, bis eine `break`-Anweisung gefunden wird. Die `default`-Klausel einer `switch`-Anweisung wird ausgeführt, wenn keine `case` den Wert des Ausdrucks trifft.

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
  - : Eine `case`-Klausel, die zur Übereinstimmung mit `expression` verwendet wird. Wenn der Wert von `expression` dem Wert einer beliebigen `caseExpressionN` entspricht, beginnt die Ausführung mit der ersten Anweisung nach dieser `case`-Klausel bis entweder zum Ende der `switch`-Anweisung oder der ersten gefundenen `break`.
- `default` {{optional_inline}}
  - : Eine `default`-Klausel; wenn vorhanden, wird diese Klausel ausgeführt, wenn der Wert von `expression` mit keiner der `case`-Klauseln übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Klausel haben.

## Beschreibung

Eine `switch`-Anweisung wertet zuerst ihren Ausdruck aus. Dann sucht sie nach der ersten `case`-Klausel, deren Ausdruck zum gleichen Wert wie das Ergebnis des Eingangsausdrucks ausgewertet wird (unter Verwendung des [strikten Gleichheitsvergleichs](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)) und überträgt die Kontrolle an diese Klausel, wobei alle darauf folgenden Anweisungen ausgeführt werden.

Die Klauselausdrücke werden nur bei Bedarf ausgewertet — wenn eine Übereinstimmung bereits gefunden wurde, werden nachfolgende `case`-Klauselausdrücke nicht ausgewertet, auch wenn sie durch [Fall-Through](#unterbrechen_und_fall-through) besucht werden.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Protokolliert nur 1
```

Wenn keine übereinstimmende `case`-Klausel gefunden wird, sucht das Programm nach der optionalen `default`-Klausel und, falls gefunden, überträgt die Kontrolle an diese Klausel, wobei Anweisungen nach dieser Klausel ausgeführt werden. Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der Anweisung nach dem Ende von `switch` fort. Der Konvention nach ist die `default`-Klausel die letzte Klausel, aber das muss nicht so sein. Eine `switch`-Anweisung darf nur eine `default`-Klausel haben; mehrere `default`-Klauseln führen zu einem {{jsxref("SyntaxError")}}.

### Unterbrechen und Fall-Through

Sie können die [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung innerhalb des Körpers einer `switch`-Anweisung verwenden, um frühzeitig zu unterbrechen, häufig wenn alle Anweisungen zwischen zwei `case`-Klauseln ausgeführt worden sind. Die Ausführung wird bei der ersten Anweisung nach `switch` fortgesetzt.

Wenn `break` weggelassen wird, wird die Ausführung zur nächsten `case`-Klausel fortgesetzt, selbst zur `default`-Klausel, unabhängig davon, ob der Wert des Ausdrucks dieser Klausel übereinstimmt. Dieses Verhalten wird als "Fall-Through" bezeichnet.

```js
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Der Wert von foo entspricht diesem Kriterium; die Ausführung beginnt hier
    console.log(0);
  // Vergessenes Break! Die Ausführung geht weiter
  case 1: // Kein Break in 'case 0:' daher wird auch diese Klausel ausgeführt
    console.log(1);
    break; // Break gefunden; geht nicht weiter in 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Protokolliert 0 und 1
```

Im geeigneten Kontext haben andere Kontrollflussanweisungen ebenfalls die Wirkung, die `switch`-Anweisung zu verlassen. Zum Beispiel, wenn die `switch`-Anweisung in einer Funktion eingeschlossen ist, dann beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung die Ausführung des Funktionskörpers und somit die `switch`-Anweisung. Wenn die `switch`-Anweisung in einer Schleife eingeschlossen ist, stoppt eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung die `switch`-Anweisung und springt zur nächsten Iteration der Schleife.

### Lexikalische Bereich

Die `case`- und `default`-Klauseln sind wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label): sie kennzeichnen mögliche Stellen, zu denen der Kontrollfluss springen kann. Sie schaffen jedoch keine lexikalischen [Bereiche](/de/docs/Glossary/Scope) für sich selbst (ebenso wenig brechen sie automatisch aus, wie oben gezeigt). Zum Beispiel:

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

Dieses Beispiel wird den Fehler "Uncaught SyntaxError: Identifier 'message' has already been declared" ausgeben, weil die erste `const message = 'hello';` mit der zweiten `const message = 'hi';`-Deklaration in Konflikt steht, selbst wenn sie in separaten `case`-Klauseln sind. Letztendlich liegt dies daran, dass beide `const`-Deklarationen im gleichen Blockbereich, der durch den `switch`-Körper erstellt wurde, liegen.

Um dies zu beheben, umgeben Sie die `let`- oder `const`-Deklarationen in einer `case`-Klausel immer mit einem Block, wann immer Sie sie verwenden müssen.

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

Dieser Code wird jetzt korrekt `hello` in der Konsole ausgeben, ohne Fehler.

## Beispiele

### Verwendung der switch-Anweisung

Im folgenden Beispiel, wenn `expr` auf `Bananas` ausgewertet wird, vergleicht das Programm den Wert mit `case 'Bananas'` und führt die zugehörige Anweisung aus. Wenn `break` erreicht wird, verlässt das Programm die `switch`-Anweisung und führt die Anweisung nach `switch` aus. Wenn `break` weggelassen würde, würde auch die Anweisung für `case 'Cherries'` ausgeführt.

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

### Platzieren der Default-Klausel zwischen zwei Case-Klauseln

Wenn keine Übereinstimmung gefunden wird, beginnt die Ausführung bei der `default`-Klausel und führt alle darauf folgenden Anweisungen aus.

```js
const foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // es trifft auf dieses Break und wird nicht in 'default:' fortfahren
  default:
    console.log("default");
  // Fall-Through
  case 1:
    console.log("1");
}
```

Es funktioniert auch, wenn Sie `default` vor allen anderen `case`-Klauseln setzen.

### Nutzen des Fall-Throughs

Diese Methode nutzt die Tatsache aus, dass, wenn unterhalb einer `case`-Klausel kein `break` vorhanden ist, die Ausführung zur nächsten `case`-Klausel fortgesetzt wird, unabhängig davon, ob diese `case` das Kriterium erfüllt.

Das folgende ist ein Beispiel für eine Einzeloperation sequenzieller `case`-Anweisung, bei der vier verschiedene Werte genau dasselbe bewirken.

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

Das folgende ist ein Beispiel für eine Mehrfachoperation sequenzieller `case`-Klausel, bei der Sie je nach übergebener Ganzzahl unterschiedliche Ausgaben erhalten können. Dies zeigt, dass es in der Reihenfolge, in der Sie die `case`-Klauseln angeben, durchlaufen wird und numerisch nicht sequenziell sein muss. In JavaScript können Sie auch Zeichenketten in diese `case`-Anweisungen mischen.

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

Die Ausgabe aus diesem Beispiel:

| Wert                                                 | Protokolltext                     |
| ---------------------------------------------------- | --------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5` oder `0` | Please pick a number from 0 to 5! |
| `0`                                                  | Output: So What Is Your Name?     |
| `1`                                                  | Output: What Is Your Name?        |
| `2`                                                  | Output: Your Name?                |
| `3`                                                  | Output: Name?                     |
| `4`                                                  | Output: ?                         |
| `5`                                                  | Output: !                         |

### Eine Alternative zu if...else-Ketten

Sie finden sich möglicherweise oft in der Situation, eine Reihe von [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Vergleichen durchzuführen.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

Dieses Muster führt keine Abfolge von `===`-Vergleichen durch, aber Sie können es dennoch in eine `switch`-Konstruktion umwandeln.

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

Das `switch (true)`-Muster als Alternative zu `if...else` ist besonders nützlich, wenn Sie das Fall-Through-Verhalten nutzen möchten.

```js
switch (true) {
  case isSquare(shape):
    console.log("This shape is a square.");
  // Fall-Through, da ein Quadrat auch ein Rechteck ist!
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
