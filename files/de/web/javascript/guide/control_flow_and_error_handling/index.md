---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Anzahl von Anweisungen, insbesondere Kontrollflussanweisungen, die Sie verwenden können, um Ihrem Anwendung eine hohe Interaktivität zu verleihen. Dieses Kapitel gibt einen Überblick über diese Anweisungen.

Der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Statements) enthält umfangreiche Details zu den Anweisungen in diesem Kapitel. Das Semikolon (`;`) wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) für vollständige Informationen über Ausdrücke.

## Blockanweisung

Die grundlegendste Anweisung ist eine _Blockanweisung_, die dazu verwendet wird, Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Blockanweisungen werden häufig mit Kontrollflussanweisungen verwendet (`if`, `for`, `while`).

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Blockanweisung.

> **Note:** [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierten Variablen sind nicht blockbasiert, sondern auf die umgebende Funktion oder das Skript begrenzt, und die Auswirkungen ihrer Festlegung bestehen über den Block hinaus fort. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, da die `var x`-Anweisung innerhalb des Blocks in demselben Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block liegt. (In C oder Java würde der entsprechende Code `1` ausgeben.)
>
> Dieser Gültigkeitsbereichseffekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemindert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist eine Reihe von Befehlen, die ausgeführt werden, wenn eine bestimmte Bedingung wahr ist. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und `switch`.

### if...else Anweisung

Verwenden Sie die `if`-Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung `true` ist. Verwenden Sie die optionale `else`-Klausel, um eine Anweisung auszuführen, wenn die Bedingung `false` ist.

Eine `if`-Anweisung sieht so aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hier kann die `condition` ein beliebiger Ausdruck sein, der zu `true` oder `false` ausgewertet wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung, was zu `true` und `false` ausgewertet wird.)

Wenn `condition` zu `true` ausgewertet wird, wird `statement1` ausgeführt. Andernfalls wird `statement2` ausgeführt. `statement1` und `statement2` können beliebige Anweisungen sein, einschließlich weiterer verschachtelter `if`-Anweisungen.

Sie können die Anweisungen auch mit `else if` kombinieren, um mehrere Bedingungen in Folge zu testen, wie folgt:

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

Im Falle mehrerer Bedingungen wird nur die erste logische Bedingung, die zu `true` ausgewertet wird, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie sie in einer Blockanweisung (`{ /* … */ }`).

#### Best Practice

Im Allgemeinen ist es gute Praxis, immer Blockanweisungen zu verwenden—_insbesondere_ beim Verschachteln von `if`-Anweisungen:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

Im Allgemeinen ist es gute Praxis, kein `if...else` mit einer Zuweisung wie `x = y` als Bedingung zu haben:

```js-nolint example-bad
if (x = y) {
  // statements here
}
```

In dem seltenen Fall, dass Sie etwas in dieser Art tun möchten, enthält die Dokumentation zur [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife einen Abschnitt über [Die Verwendung einer Zuordnung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit Hinweisen zu einer allgemeinen Best-Practice-Syntax, die Sie kennen sollten und der Sie folgen sollten.

#### Falsy-Werte

Die folgenden Werte werden zu `false` ausgewertet (auch bekannt als {{Glossary("Falsy", "Falsy")}}-Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden zu `true` ausgewertet, wenn sie an eine bedingte Anweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte
> `true` und `false` mit den true- und false-Werten des
> {{jsxref("Boolean")}}-Objekts!
>
> Zum Beispiel:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // diese Bedingung wird zu true ausgewertet
> }
> if (b == true) {
>   // diese Bedingung wird zu false ausgewertet
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text`-Objekt drei beträgt. Andernfalls zeigt sie einen Alarm an und gibt `false` zurück.

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

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck zu bewerten und zu versuchen, den Wert des Ausdrucks mit einem `case`-Label zu vergleichen. Wenn eine Übereinstimmung gefunden wird, führt das Programm die zugehörige Anweisung aus.

Eine `switch`-Anweisung sieht so aus:

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

JavaScript bewertet die obige switch-Anweisung wie folgt:

- Das Programm sucht zunächst nach einer `case`-Klausel mit einem Label, das mit dem Wert des Ausdrucks übereinstimmt, und überträgt dann die Kontrolle an diese Klausel, indem es die zugehörigen Anweisungen ausführt.
- Wenn kein entsprechendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:

  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle an diese Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung mit der Anweisung nach dem Ende des `switch` fort.
  - (Üblicherweise wird die `default`-Klausel als letzte Klausel geschrieben, es muss aber nicht so sein.)

#### break-Anweisungen

Die optionale `break`-Anweisung, die mit jeder `case`-Klausel verbunden ist, stellt sicher, dass das Programm `switch` verlässt, sobald die übereinstimmende Anweisung ausgeführt wurde, und dann die Ausführung mit der Anweisung fortsetzt, die auf `switch` folgt. Wenn `break` weggelassen wird, wird die Ausführung des Programms innerhalb der `switch`-Anweisung fortgesetzt (und es werden die Anweisungen unter dem nächsten `case` ausgeführt, und so weiter).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` zu `"Bananas"` ausgewertet wird, vergleicht das Programm den Wert mit `case "Bananas"` und führt die zugehörige Anweisung aus. Wenn `break` auftritt, beendet das Programm `switch` und setzt die Ausführung mit der Anweisung nach `switch` fort. Wenn `break` weggelassen wird, wird auch die Anweisung für `case "Cherries"` ausgeführt.

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

Sie können Ausnahmen mit der `throw`-Anweisung auslösen und sie mit der `try...catch`-Anweisung behandeln.

- [`throw` Anweisung](#throw-anweisung)
- [`try...catch` Anweisung](#try...catch-anweisung)

### Ausnahmetypen

Grundsätzlich kann jedes Objekt in JavaScript ausgelöst werden. Dennoch sind nicht alle ausgelösten Objekte gleichwertig. Während es üblich ist, Zahlen oder Zeichenketten als Fehler auszulösen, ist es häufig effektiver, einen der speziell für diesen Zweck erstellten Ausnahmetypen zu verwenden:

- [ECMAScript Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme auszulösen. Eine `throw`-Anweisung gibt den zu werfenden Wert an:

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

Die `try...catch`-Anweisung markiert einen Block von Anweisungen, die versucht werden sollen, und gibt eine oder mehrere Antworten an, falls eine Ausnahme ausgelöst wird. Wenn eine Ausnahme ausgelöst wird, fängt die `try...catch`-Anweisung sie ab.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen enthält, die angeben, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn er das nicht ist, möchten Sie, dass die Kontrolle an den `catch`-Block übergeben wird. Wenn eine Anweisung innerhalb des `try`-Blocks (oder in einer Funktion, die aus dem `try`-Block aufgerufen wird) eine Ausnahme wirft, wechselt die Kontrolle _sofort_ zum `catch`-Block. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird nach dem Ausführen des `try`- und `catch`-Blocks, jedoch vor den Anweisungen, die auf die `try...catch`-Anweisung folgen, ausgeführt.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem Wert abruft, der an die Funktion übergeben wird. Wenn der Wert keiner Monatsnummer entspricht (`1` – `12`), wird eine Ausnahme mit dem Wert `'InvalidMonthNo'` ausgelöst und die Anweisungen im `catch`-Block setzen die Variable `monthName` auf `'unknown'`.

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

Der `catch`-Block gibt einen Bezeichner an (`exception` im vorhergehenden Syntax), der den Wert enthält, der von der `throw`-Anweisung angegeben wurde. Sie können diesen Bezeichner verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der Bezeichner existiert nur für die Dauer des `catch`-Blocks. Sobald der `catch`-Block die Ausführung beendet, existiert der Bezeichner nicht mehr.

Zum Beispiel, der folgende Code führt eine Ausnahme aus. Wenn die Ausnahme auftritt, wechselt die Kontrolle in den `catch`-Block.

```js
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```

> [!NOTE]
> Beim Protokollieren von Fehlern in der Konsole innerhalb
> eines `catch`-Blocks wird empfohlen, `console.error()` statt
> `console.log()` für das Debuggen zu verwenden. Es formatiert die Nachricht als
> Fehler und fügt sie der Liste der von der Seite generierten Fehlermeldungen hinzu.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ dem Ausführen des `try`- und `catch`-Blocks ausgeführt werden. Zusätzlich wird der `finally`-Block _vor_ dem Code ausgeführt, der auf die `try…catch…finally`-Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally`-Block _unabhängig davon_ ausgeführt wird, ob eine Ausnahme ausgelöst wird oder nicht. Wenn jedoch eine Ausnahme ausgelöst wird, werden die Anweisungen im `finally`-Block ausgeführt, selbst wenn kein `catch`-Block die ausgelöste Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um Ihr Skript reibungslos zu beenden, wenn eine Ausnahme auftritt. Beispielsweise müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript in Anspruch genommen hat.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden. (Serverseitiges JavaScript ermöglicht den Zugriff auf Dateien.) Wenn während das Öffnen eine Ausnahme ausgelöst wird, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Die Verwendung von `finally` stellt hier _sicher_, dass die Datei niemals offen bleibt, selbst wenn ein Fehler auftritt.

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

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert des gesamten `try…catch…finally`-Konstrukts, unabhängig von allen `return`-Anweisungen in den `try`- und `catch`-Blöcken:

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

Das Überschreiben von Rückgabewerten durch den `finally`-Block gilt auch für Ausnahmen, die im `catch`-Block geworfen oder erneut geworfen werden:

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

#### Verschachtelte try...catch-Anweisungen

Sie können eine oder mehrere `try...catch`-Anweisungen verschachteln.

Wenn ein innerer `try`-Block _keinen_ entsprechenden `catch`-Block hat:

1. muss er einen `finally`-Block enthalten, und
2. wird der `catch`-Block der umgebenden `try...catch`-Anweisung
   auf eine Übereinstimmung überprüft.

Weitere Informationen finden Sie unter [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks) auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Referenzseite.

### Verwendung von Error-Objekten

Abhängig vom Fehlertyp können Sie möglicherweise die Eigenschaften `name` und `message` verwenden, um eine genauere Nachricht zu erhalten.

Die `name`-Eigenschaft bietet die allgemeine Klasse des `Error` (wie etwa `DOMException` oder `Error`), während `message` im Allgemeinen eine prägnantere Nachricht bietet, als man durch das Konvertieren des Fehlerobjekts in einen String erhalten würde.

Wenn Sie Ihre eigenen Ausnahmen werfen, um von diesen Eigenschaften zu profitieren (z. B. wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und Systemausnahmen unterscheidet), können Sie den `Error`-Konstruktor verwenden.

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
