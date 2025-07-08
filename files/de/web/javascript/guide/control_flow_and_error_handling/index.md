---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Menge von Anweisungen, insbesondere Kontrollflussanweisungen, die Sie nutzen können, um eine hohe Interaktivität in Ihrer Anwendung zu integrieren. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Das [JavaScript-Referenzdokument](/de/docs/Web/JavaScript/Reference/Statements) enthält umfassende Informationen über die in diesem Kapitel behandelten Anweisungen. Das Semikolon (`;`) wird verwendet, um Anweisungen in JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) für vollständige Informationen über Ausdrücke.

## Blockanweisung

Die grundlegendste Anweisung ist eine _Blockanweisung_, die verwendet wird, um Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Blockanweisungen werden häufig mit Kontrollflussanweisungen (`if`, `for`, `while`) verwendet.

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Blockanweisung.

> [!NOTE]
> In `var`-deklarierte Variablen sind nicht blockgebunden, sondern sind innerhalb der umschließenden Funktion oder des Skripts gebunden, und die Auswirkungen ihrer Festlegung bestehen über den Block hinaus. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, weil die `var x`-Anweisung innerhalb des Blocks im gleichen Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block liegt. (In C oder Java würde der äquivalente Code `1` ausgeben.)
>
> Dieser Geltungsbereicheffekt kann gemildert werden, indem man {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} verwendet.

## Bedingungsanweisungen

Eine Bedingungsanweisung ist eine Gruppe von Befehlen, die ausgeführt werden, wenn eine angegebene Bedingung wahr ist. JavaScript unterstützt zwei Bedingungsanweisungen: `if...else` und `switch`.

### if...else-Anweisung

Verwenden Sie die `if`-Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung `true` ist. Verwenden Sie die optionale `else`-Klausel, um eine Anweisung auszuführen, wenn die Bedingung `false` ist.

Eine `if`-Anweisung sieht folgendermaßen aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hier kann die `Bedingung` ein beliebiger Ausdruck sein, der zu `true` oder `false` auswertet. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung dessen, was zu `true` und `false` ausgewertet wird.)

Wenn die `Bedingung` zu `true` ausgewertet wird, wird `Anweisung1` ausgeführt. Andernfalls wird `Anweisung2` ausgeführt. `Anweisung1` und `Anweisung2` können beliebige Anweisungen sein, einschließlich weiterer geschachtelter `if`-Anweisungen.

Sie können auch die Anweisungen mit `else if` kombinieren, um mehrere Bedingungen hintereinander zu testen, wie folgt:

```js
if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}
```

Im Falle mehrerer Bedingungen wird nur die erste logische Bedingung, die zu `true` ausgewertet wird, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie diese innerhalb einer Blockanweisung (`{ /* … */ }`).

#### Gute Praxis

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden—_insbesondere_ beim Schachteln von `if`-Anweisungen:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

Im Allgemeinen ist es eine gute Praxis, keine `if...else`-Anweisung mit einer Zuweisung wie `x = y` als Bedingung zu haben:

```js-nolint example-bad
if (x = y) {
  // statements here
}
```

In dem seltenen Fall, dass Sie etwas in dieser Art tun möchten, bietet die Dokumentation zu [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) unter [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) eine Sektion mit Anleitung zu einem allgemeinen Best-Practice-Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte werden als `false` ausgewertet (auch bekannt als {{Glossary("Falsy", "Falsy")}} Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden als `true` ausgewertet, wenn sie an eine Bedingungsanweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte `true` und `false` mit den true- und false-Werten des {{jsxref("Boolean")}}-Objekts!
>
> Zum Beispiel:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // diese Bedingung wertet zu true aus
> }
> if (b == true) {
>   // diese Bedingung wertet zu false aus
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text`-Objekt drei beträgt. Andernfalls zeigt es eine Warnung an und gibt `false` zurück.

```js
function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  }
  alert(
    `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
  );
  return false;
}
```

### switch-Anweisung

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck auszuwerten und zu versuchen, den Wert des Ausdrucks mit einem `case`-Label abzugleichen. Wenn ein Treffer gefunden wird, führt das Programm die zugehörige Anweisung aus.

Eine `switch`-Anweisung sieht folgendermaßen aus:

```js
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}
```

JavaScript wertet die oben stehende switch-Anweisung wie folgt aus:

- Das Programm sucht zuerst nach einer `case`-Klausel mit einem Label, das dem Wert des Ausdrucks entspricht, und überträgt dann die Kontrolle auf diese Klausel, indem es die zugehörigen Anweisungen ausführt.
- Wenn kein entsprechendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:
  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle auf diese Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der Anweisung nach dem Ende von `switch` fort.
  - (Der Konvention nach wird die `default`-Klausel als letzte Klausel geschrieben, dies ist jedoch nicht zwingend notwendig.)

#### break-Anweisungen

Die optionale `break`-Anweisung, die mit jeder `case`-Klausel verbunden ist, stellt sicher, dass das Programm die `switch`-Anweisung nach der Ausführung der übereinstimmenden Anweisung verlässt und dann die Ausführung bei der Anweisung nach dem `switch` fortsetzt. Wenn `break` weggelassen wird, setzt das Programm die Ausführung innerhalb der `switch`-Anweisung fort (und wird die Anweisungen unter dem nächsten `case` wie auch die nachfolgenden ausführen).

##### Beispiel

Im folgenden Beispiel wird, wenn `fruitType` zu `"Bananas"` ausgewertet wird, der Wert mit `case "Bananas"` abgeglichen und die zugehörige Anweisung ausgeführt. Wenn `break` auftritt, verlässt das Programm die `switch` und setzt die Ausführung bei der Anweisung nach `switch` fort. Wenn `break` weggelassen würde, würde auch die Anweisung für `case "Cherries"` ausgeführt.

```js
switch (fruitType) {
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
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");
```

## Anweisungen zur Ausnahmebehandlung

Sie können Ausnahmen mit der `throw`-Anweisung werfen und diese mit den `try...catch`-Anweisungen behandeln.

- [`throw`-Anweisung](#throw-anweisung)
- [`try...catch`-Anweisung](#try...catch-anweisung)

### Typen von Ausnahmen

In JavaScript kann nahezu jedes Objekt geworfen werden. Dennoch sind nicht alle geworfenen Objekte gleich. Während es üblich ist, Zahlen oder Strings als Fehler zu werfen, ist es oft effektiver, einen der speziell für diesen Zweck entwickelten Ausnahmetypen zu verwenden:

- [ECMAScript-Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme zu werfen. Eine `throw`-Anweisung gibt den zu werfenden Wert an:

```js
throw expression;
```

Sie können jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende Code wirft mehrere Ausnahmen unterschiedlicher Typen:

```js
throw "Error2"; // String type
throw 42; // Number type
throw true; // Boolean type
throw {
  toString() {
    return "I'm an object!";
  },
};
```

### try...catch-Anweisung

Die `try...catch`-Anweisung kennzeichnet einen Anweisungsblock, der versucht wird, und gibt eine oder mehrere Antworten an, falls eine Ausnahme geworfen wird. Wenn eine Ausnahme geworfen wird, fängt die `try...catch`-Anweisung diese ab.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen enthält, die angeben, was zu tun ist, falls eine Ausnahme im `try`-Block geworfen wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn er das nicht ist, möchten Sie, dass die Kontrolle an den `catch`-Block übergeben wird. Wenn eine Anweisung innerhalb des `try`-Blocks (oder in einer Funktion, die innerhalb des `try`-Blocks aufgerufen wird) eine Ausnahme wirft, verschiebt sich die Kontrolle _sofort_ auf den `catch`-Block. Wenn keine Ausnahme im `try`-Block geworfen wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird nach Ausführung der `try`- und `catch`-Blöcke, aber vor den Anweisungen nach der `try...catch`-Anweisung ausgeführt.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem an die Funktion übergebenen Wert abruft. Wenn der Wert keiner Monatszahl (`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert `'InvalidMonthNo'` geworfen und die Anweisungen im `catch`-Block setzen die Variable `monthName` auf `'unknown'`.

```js
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  // prettier-ignore
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); // throw keyword is used here
  }
  return months[mo];
}

try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
```

#### Der catch-Block

Sie können einen `catch`-Block verwenden, um alle Ausnahmen zu behandeln, die im `try`-Block generiert werden können.

```js-nolint
catch (exception) {
  statements
}
```

Der `catch`-Block spezifiziert einen Bezeichner (`exception` im vorherigen Syntaxbeispiel), der den Wert enthält, der durch die `throw`-Anweisung angegeben wird. Sie können diesen Bezeichner verwenden, um Informationen über die geworfene Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der Bezeichner existiert nur für die Dauer des `catch`-Blocks. Sobald der `catch`-Block die Ausführung abgeschlossen hat, existiert der Bezeichner nicht mehr.

Zum Beispiel wirft der folgende Code eine Ausnahme. Wenn die Ausnahme auftritt, wird die Kontrolle auf den `catch`-Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```

> [!NOTE]
> Beim Protokollieren von Fehlern in der Konsole innerhalb eines `catch`-Blocks wird empfohlen, `console.error()` anstatt `console.log()` zu verwenden, um zu debuggen. Es formatiert die Nachricht als Fehler und fügt sie zur Liste der von der Seite generierten Fehlermeldungen hinzu.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ der Ausführung der `try`- und `catch`-Blöcke ausgeführt werden. Darüber hinaus wird der `finally`-Block _vor_ dem Code ausgeführt, der auf die `try…catch…finally`-Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally`-Block ausgeführt wird, _unabhängig davon_, ob eine Ausnahme geworfen wird oder nicht. Wenn jedoch eine Ausnahme geworfen wird, werden die Anweisungen im `finally`-Block selbst dann ausgeführt, wenn kein `catch`-Block die geworfene Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um Ihr Skript bei Auftreten einer Ausnahme elegant fehlschlagen zu lassen. Zum Beispiel müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript belegt hat.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die die Datei nutzen. (Serverseitiges JavaScript ermöglicht den Zugriff auf Dateien.) Wenn während des geöffneten Zustands der Datei eine Ausnahme geworfen wird, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Die Verwendung von `finally` hier _gewährleistet_, dass die Datei nie offen bleibt, selbst wenn ein Fehler auftritt.

```js
openMyFile();
try {
  writeMyFile(theData); // This may throw an error
} catch (e) {
  handleError(e); // If an error occurred, handle it
} finally {
  closeMyFile(); // Always close the resource
}
```

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try…catch…finally`-Produktion, unabhängig von jeglichen `return`-Anweisungen in den `try`- und `catch`-Blöcken:

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // This return statement is suspended
    // until finally block has completed
    return true;
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false
```

Das Überschreiben von Rückgabewerten durch den `finally`-Block gilt auch für Ausnahmen, die innerhalb des `catch`-Blocks geworfen oder erneut geworfen werden:

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    // This throw statement is suspended until
    // finally block has completed
    throw e;
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  console.log(f());
} catch (e) {
  // this is never reached!
  // while f() executes, the `finally` block returns false,
  // which overwrites the `throw` inside the above `catch`
  console.log('caught outer "bogus"');
}

// Logs:
// caught inner "bogus"
// false
```

#### Verschachteln von try...catch-Anweisungen

Sie können eine oder mehrere `try...catch`-Anweisungen verschachteln.

Wenn ein innerer `try`-Block _nicht_ über einen entsprechenden `catch`-Block verfügt:

1. muss er _einen_ `finally`-Block enthalten, und
2. wird der `catch`-Block der umschließenden `try...catch`-Anweisung auf ein passendes Element überprüft.

Weitere Informationen finden Sie unter [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks) auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Referenzseite.

### Nutzung von Error-Objekten

Abhängig vom Fehlertyp können Sie die Eigenschaften `name` und `message` verwenden, um eine genauere Nachricht zu erhalten.

Die Eigenschaft `name` liefert die allgemeine Klasse des `Error` (wie `DOMException` oder `Error`), während `message` im Allgemeinen eine prägnantere Nachricht liefert, als man durch die Umwandlung des Fehlerobjekts in einen String erhalten würde.

Wenn Sie Ihre eigenen Ausnahmen werfen, um diese Eigenschaften nutzen zu können (wie zum Beispiel, wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und Systemausnahmen differenziert), können Sie den `Error`-Konstruktor verwenden.

Zum Beispiel:

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  }
  doSomethingToGetAJavaScriptError();
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
