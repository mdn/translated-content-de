---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{jsSidebar("Statements")}}

Die **`switch`**-Anweisung wertet einen [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) aus, vergleicht den Wert des Ausdrucks mit einer Reihe von `case`-Klauseln und führt [Anweisungen](/de/docs/Web/JavaScript/Reference/Statements) nach der ersten `case`-Klausel mit einem passenden Wert aus, bis eine `break`-Anweisung angetroffen wird. Die `default`-Klausel einer `switch`-Anweisung wird angesprungen, wenn keine `case`-Klausel mit dem Wert des Ausdrucks übereinstimmt.

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
  - : Eine `case`-Klausel, die mit `expression` verglichen wird. Wenn der Wert von `expression` mit dem Wert von irgendeinem `caseExpressionN` übereinstimmt, beginnt die Ausführung ab der ersten Anweisung nach dieser `case`-Klausel, bis entweder das Ende der `switch`-Anweisung oder das erste angetroffene `break`.
- `default` {{optional_inline}}
  - : Eine `default`-Klausel; wenn vorhanden, wird diese Klausel ausgeführt, wenn der Wert von `expression` mit keiner der `case`-Klauseln übereinstimmt. Eine `switch`-Anweisung kann nur eine `default`-Klausel haben.

## Beschreibung

Eine `switch`-Anweisung wertet zuerst ihren Ausdruck aus. Danach sucht sie nach der ersten `case`-Klausel, deren Ausdruck denselben Wert wie das Ergebnis des Eingabeausdrucks ergibt (unter Verwendung des [strikten Gleichheitsvergleichs](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality)) und überträgt die Kontrolle an diese Klausel, um alle nachfolgenden Anweisungen auszuführen.

Die Klauselausdrücke werden nur bei Bedarf ausgewertet — wenn ein Treffer bereits gefunden wurde, werden nachfolgende `case`-Klauselausdrücke nicht ausgewertet, selbst wenn sie durch [Durchfall](#brechen_und_durchfallen) besucht werden.

```js
switch (undefined) {
  case console.log(1):
  case console.log(2):
}
// Only logs 1
```

Wenn keine passende `case`-Klausel gefunden wird, sucht das Programm nach der optionalen `default`-Klausel und überträgt, wenn gefunden, die Kontrolle an diese Klausel, um die nachfolgenden Anweisungen auszuführen. Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der Anweisung nach dem Ende von `switch` fort. Konventionell ist die `default`-Klausel die letzte Klausel, muss es aber nicht sein. Eine `switch`-Anweisung darf nur eine `default`-Klausel haben; mehrere `default`-Klauseln führen zu einem {{jsxref("SyntaxError")}}.

### Brechen und Durchfallen

Sie können die [`break`](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung innerhalb des Körpers einer `switch`-Anweisung verwenden, um frühzeitig auszubrechen, oft nachdem alle Anweisungen zwischen zwei `case`-Klauseln ausgeführt wurden. Die Ausführung wird bei der ersten Anweisung nach `switch` fortgesetzt.

Wenn `break` weggelassen wird, wird die Ausführung zur nächsten `case`-Klausel fortgesetzt, sogar zur `default`-Klausel, unabhängig davon, ob der Wert des Ausdrucks dieser Klausel übereinstimmt. Dieses Verhalten wird als "Durchfallen" bezeichnet.

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

Im entsprechenden Kontext haben auch andere Kontrollflussanweisungen den Effekt, die `switch`-Anweisung zu durchbrechen. Beispielsweise, wenn die `switch`-Anweisung in einer Funktion enthalten ist, beendet eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung die Ausführung des Funktionskörpers und damit der `switch`-Anweisung. Wenn die `switch`-Anweisung in einer Schleife enthalten ist, dann beendet eine [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung die `switch`-Anweisung und springt zur nächsten Iteration der Schleife.

### Lexikalische Bereichsabgrenzung

Die `case`- und `default`-Klauseln sind wie [Labels](/de/docs/Web/JavaScript/Reference/Statements/label): Sie geben mögliche Stellen an, zu denen der Kontrollfluss springen kann. Sie erzeugen jedoch selbst keine lexikalischen [Bereiche](/de/docs/Glossary/Scope) (auch brechen sie nicht automatisch ab — wie oben gezeigt). Beispielsweise:

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

Dieses Beispiel gibt den Fehler "Uncaught SyntaxError: Identifier 'message' has already been declared" aus, weil die erste `const message = 'hello';`-Deklaration mit der zweiten `const message = 'hi';`-Deklaration in Konflikt steht, selbst wenn sie in ihren eigenen separaten `case`-Klauseln stehen. Letztendlich liegt das daran, dass beide `const`-Deklarationen im selben Block Scope stehen, der durch den `switch`-Körper erstellt wird.

Um dies zu beheben, kapseln Sie die `let` oder `const`-Deklarationen in einer `case`-Klausel in einen Block ein.

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

Dieser Code wird jetzt `hello` in der Konsole ausgeben, wie es sein sollte, ohne Fehler.

## Beispiele

### Verwendung von switch

Im folgenden Beispiel, wenn `expr` als `Bananas` ausgewertet wird, stimmt der Programmwert mit `case 'Bananas'` überein und führt die zugehörige Anweisung aus. Wenn `break` angetroffen wird, springt das Programm aus `switch` heraus und führt die Anweisung nach `switch` aus. Wäre `break` weggelassen worden, würde auch die Anweisung für `case 'Cherries'` ausgeführt werden.

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

### Setzen der default-Klausel zwischen zwei case-Klauseln

Wenn kein Treffer gefunden wird, beginnt die Ausführung bei der `default`-Klausel und führt alle nachfolgenden Anweisungen aus.

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

### Ausnutzen des Durchfalls

Diese Methode nutzt die Tatsache aus, dass, wenn es kein `break` unter einer `case`-Klausel gibt, die Ausführung zur nächsten `case`-Klausel fortgesetzt wird, unabhängig davon, ob diese `case` die Kriterien erfüllt.

Das Folgende ist ein Beispiel für eine einzelne operationelle sequenzielle `case`-Anweisung, bei der vier verschiedene Werte genau dasselbe ausführen.

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

Das folgende Beispiel zeigt eine Mehrfachoperation in einer sequenziellen `case`-Klausel, bei der Sie je nach übergebener Ganzzahl unterschiedliche Ausgaben erhalten können. Dies zeigt Ihnen, dass es in der Reihenfolge durchlaufen wird, in der Sie die `case`-Klauseln festlegen, und dass es nicht numerisch aufeinanderfolgend sein muss. In JavaScript können Sie sogar die Definitionen von Zeichenfolgen in diese `case`-Anweisungen mischen.

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

| Wert                                                 | Protokolltext                     |
| ---------------------------------------------------- | --------------------------------- |
| `foo` ist `NaN` oder nicht `1`, `2`, `3`, `4`, `5`, oder `0` | Bitte wählen Sie eine Zahl von 0 bis 5! |
| `0`                                                  | Ausgabe: Also Wie lautet Ihr Name?   |
| `1`                                                  | Ausgabe: Wie lautet Ihr Name?     |
| `2`                                                  | Ausgabe: Ihr Name?                |
| `3`                                                  | Ausgabe: Name?                     |
| `4`                                                  | Ausgabe: ?                         |
| `5`                                                  | Ausgabe: !                         |

### Eine Alternative zu if...else-Ketten

Sie finden sich möglicherweise häufig beim Ausführen einer Serie von [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)-Vergleichen.

```js
if ("fetch" in globalThis) {
  // Fetch a resource with fetch
} else if ("XMLHttpRequest" in globalThis) {
  // Fetch a resource with XMLHttpRequest
} else {
  // Fetch a resource with some custom AJAX logic
}
```

Dieses Muster führt keine Sequenz von `===`-Vergleichen aus, kann aber dennoch in eine `switch`-Konstruktion umgewandelt werden.

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

Das `switch (true)`-Muster als Alternative zu `if...else` ist besonders nützlich, wenn Sie das Durchfallverhalten nutzen möchten.

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
