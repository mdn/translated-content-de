---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: 08d55156ba73587da8c20d882dea32ccba85dc0d
---

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt einen kompakten Satz von Anweisungen, insbesondere Kontrollflussanweisungen, die Sie verwenden können, um eine große Menge an Interaktivität in Ihrer Anwendung zu integrieren. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Statements) enthält umfassende Informationen über die Anweisungen in diesem Kapitel. Das Semikolon (`;`) wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) für vollständige Informationen über Ausdrücke.

## Block-Anweisung

Die grundlegendste Anweisung ist eine _Block-Anweisung_, die dazu verwendet wird, Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern begrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Block-Anweisungen werden häufig mit Kontrollflussanweisungen (`if`, `for`, `while`) verwendet.

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Block-Anweisung.

> [!NOTE]
> [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-Deklarierte Variablen sind nicht block-übergreifend, sondern gelten für die umgebende Funktion oder das Skript, und ihre Auswirkungen bestehen über den Block hinaus. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, da die `var x`-Anweisung innerhalb des Blocks im gleichen Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block liegt. (In C oder Java hätte der äquivalente Code `1` ausgegeben.)
>
> Dieser Geltungsbereichseffekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemildert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist eine Reihe von Befehlen, die ausgeführt werden, wenn eine festgelegte Bedingung zutrifft. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und `switch`.

### if...else-Anweisung

Verwenden Sie die `if`-Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung `true` ist. Verwenden Sie die optionale `else`-Klausel, um eine Anweisung auszuführen, wenn die Bedingung `false` ist.

Eine `if`-Anweisung sieht so aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hier kann die `condition` jeder Ausdruck sein, der zu `true` oder `false` ausgewertet wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung, was zu `true` und `false` ausgewertet wird.)

Wenn `condition` zu `true` ausgewertet wird, wird `statement1` ausgeführt. Andernfalls wird `statement2` ausgeführt. `statement1` und `statement2` können jede Anweisung sein, einschließlich weiterer geschachtelter `if`-Anweisungen.

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

Bei mehreren Bedingungen wird nur die erste logische Bedingung ausgeführt, die zu `true` ausgewertet wird. Um mehrere Anweisungen auszuführen, gruppieren Sie sie in einer Block-Anweisung (`{ /* … */ }`).

#### Beste Praxis

Im Allgemeinen ist es eine gute Praxis, immer Block-Anweisungen zu verwenden, _insbesondere_ wenn `if`-Anweisungen geschachtelt werden:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

Im Allgemeinen ist es eine gute Praxis, kein `if...else` mit einer Zuweisung wie `x = y` als Bedingung zu haben:

```js-nolint example-bad
if (x = y) {
  // statements here
}
```

In dem seltenen Fall, dass Sie etwas Derartiges tun möchten, hat die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Dokumentation einen Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit Anleitungen zu einer allgemeinen Best-Practice-Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte werden zu `false` ausgewertet (auch bekannt als {{Glossary("Falsy", "Falsy")}} Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden zu `true` ausgewertet, wenn sie an eine bedingte Anweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte
> `true` und `false` mit den wahrheitsgemäßen und falschen Werten des
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

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text`-Objekt drei beträgt. Andernfalls wird eine Meldung angezeigt und es wird `false` zurückgegeben.

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

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck zu evaluieren und zu versuchen, den Wert des Ausdrucks mit einem `case`-Label abzugleichen. Wenn eine Übereinstimmung gefunden wird, führt das Programm die zugehörige Anweisung aus.

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

JavaScript wertet die obige `switch`-Anweisung wie folgt aus:

- Das Programm sucht zuerst nach einer `case`-Klausel mit einem Label, das mit dem Wert von `expression` übereinstimmt, und überträgt dann die Kontrolle auf diese Klausel, wobei die zugehörigen Anweisungen ausgeführt werden.
- Wenn kein übereinstimmendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:
  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle auf diese Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der Anweisung nach dem Ende von `switch` fort.
  - (Konventionell wird die `default`-Klausel als letzte Klausel geschrieben, sie muss jedoch nicht so sein.)

#### break-Anweisungen

Die optionale `break`-Anweisung, die jeder `case`-Klausel zugeordnet ist, stellt sicher, dass das Programm aus `switch` ausschert, sobald die übereinstimmende Anweisung ausgeführt wurde, und dann die Ausführung bei der Anweisung nach `switch` fortsetzt. Wenn `break` weggelassen wird, setzt das Programm die Ausführung innerhalb der `switch`-Anweisung fort (und wird die Anweisungen unter dem nächsten `case` und so weiter ausführen).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` mit `"Bananas"` übereinstimmt, wird das Programm den Wert mit `case "Bananas"` abgleichen und die zugehörige Anweisung ausführen. Wenn `break` angetroffen wird, verlässt das Programm die `switch` und setzt die Ausführung ab der Anweisung nach `switch` fort. Wenn `break` weggelassen würde, würde die Anweisung für `case "Cherries"` ebenfalls ausgeführt.

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

Sie können Ausnahmen mit der `throw`-Anweisung auslösen und sie mit den `try...catch`-Anweisungen behandeln.

- [`throw`-Anweisung](#throw-anweisung)
- [`try...catch`-Anweisung](#try...catch-anweisung)

### Ausnahmetypen

Fast jedes Objekt kann in JavaScript geworfen werden. Dennoch sind nicht alle geworfenen Objekte gleich. Während es üblich ist, Zahlen oder Zeichenfolgen als Fehler zu werfen, ist es häufig effektiver, eine der speziell für diesen Zweck erstellten Ausnahmetypen zu verwenden:

- [ECMAScript-Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme auszulösen. Eine `throw`-Anweisung gibt den zu werfenden Wert an:

```js
throw expression;
```

Sie können jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende Code wirft mehrere Ausnahmen verschiedener Typen:

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

Die `try...catch`-Anweisung markiert einen Block von Anweisungen zum Ausprobieren und gibt eine oder mehrere Antworten an, falls eine Ausnahme ausgelöst wird. Wenn eine Ausnahme ausgelöst wird, fängt die `try...catch`-Anweisung sie ab.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, sowie einem `catch`-Block, der Anweisungen enthält, die angeben, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—wenn er jedoch nicht erfolgreich ist, möchten Sie, dass die Kontrolle auf den `catch`-Block übergeht. Wenn im `try`-Block (oder in einer Funktion, die aus dem `try`-Block aufgerufen wird) eine Ausnahme ausgelöst wird, wechselt die Kontrolle _sofort_ in den `catch`-Block. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird nach den `try`- und `catch`-Blöcken, jedoch vor den Anweisungen nach der `try...catch`-Anweisung ausgeführt.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem übergebenen Wert abruft. Wenn der Wert keiner Monatsnummer (`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert `'Ungültiger Monatscode'` ausgelöst, und die Anweisungen im `catch`-Block setzen die `monthName`-Variable auf `'unbekannt'`.

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

Sie können einen `catch`-Block verwenden, um alle Ausnahmen zu behandeln, die möglicherweise im `try`-Block generiert werden.

```js-nolint
catch (exception) {
  statements
}
```

Der `catch`-Block gibt einen Bezeichner an (`exception` im vorhergehenden Beispiel), der den vom `throw`-Statement angegebenen Wert hält. Sie können diesen Bezeichner verwenden, um Informationen über die geworfene Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der Bezeichner existiert nur für die Dauer des `catch`-Blocks. Wenn der `catch`-Block die Ausführung beendet hat, existiert der Bezeichner nicht mehr.

Zum Beispiel wirft der folgende Code eine Ausnahme. Wenn die Ausnahme auftritt, wechselt die Kontrolle in den `catch`-Block.

```js
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```

> [!NOTE]
> Beim Protokollieren von Fehlern in die Konsole innerhalb
> eines `catch`-Blocks wird empfohlen, `console.error()` statt
> `console.log()` zu verwenden. Es formatiert die Nachricht als Fehler
> und fügt sie der Liste von Fehlermeldungen hinzu, die von der Seite generiert werden.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ den `try`- und `catch`-Blöcken ausgeführt werden. Zusätzlich wird der `finally`-Block _vor_ dem Code ausgeführt, der der `try...catch...finally`-Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally`-Block _unabhängig davon_, ob eine Ausnahme ausgelöst wird, ausgeführt wird. Wenn eine Ausnahme ausgelöst wird, werden die Anweisungen im `finally`-Block dennoch ausgeführt, selbst wenn kein `catch`-Block die ausgelöste Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um Ihr Skript bei Auftreten einer Ausnahme sanft fehlschlagen zu lassen. Beispielsweise müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript gebunden hat.

Im folgenden Beispiel wird eine Datei geöffnet und dann werden Anweisungen ausgeführt, die die Datei verwenden. (Serverseitiges JavaScript erlaubt Ihnen den Zugriff auf Dateien.) Wenn während der Datei geöffnet ist, eine Ausnahme ausgelöst wird, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Die Verwendung von `finally` stellt hier _sicher_, dass die Datei niemals offen bleibt, selbst wenn ein Fehler auftritt.

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

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try...catch...finally`-Produktion, unabhängig von `return`-Anweisungen in den `try`- und `catch`-Blöcken:

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
    // `f` exits here
    console.log(4); // not reachable
  }
  console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false
```

Das Überschreiben von Rückgabewerten durch den `finally`-Block gilt auch für Ausnahmen, die im `catch`-Block ausgelöst oder erneut ausgelöst werden:

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
    // `f` exits here
  }
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

#### Verschachtelung von try...catch-Anweisungen

Sie können eine oder mehrere `try...catch`-Anweisungen verschachteln.

Wenn ein innerer `try`-Block _keinen_ entsprechenden `catch`-Block hat:

1. muss er _einen_ `finally`-Block enthalten, und
2. der `catch`-Block der umgebenden `try...catch`-Anweisung wird
   auf eine Übereinstimmung geprüft.

Für weitere Informationen siehe [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks) auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Referenzseite.

### Nutzung von Error-Objekten

Abhängig von der Art des Fehlers können Sie möglicherweise die `name`- und `message`-Eigenschaften verwenden, um eine genauere Nachricht zu erhalten.

Die `name`-Eigenschaft gibt die allgemeine Klasse des `Error` an (wie `DOMException` oder `Error`), während `message` normalerweise eine kürzere Nachricht bietet als die, die man erhält, indem man das Error-Objekt in einen String konvertiert.

Wenn Sie Ihre eigenen Ausnahmen werfen, um diese Eigenschaften zu nutzen (zum Beispiel, wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und Systemausnahmen unterscheidet), können Sie den `Error`-Konstruktor verwenden.

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
