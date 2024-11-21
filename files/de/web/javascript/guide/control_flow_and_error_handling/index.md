---
title: Steuerfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: f0d7ee3bc3a398612c75063fe227a5dcc515f40b
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Menge an Anweisungen, insbesondere Steuerflussanweisungen, die Sie verwenden können, um Ihrem Anwendung ein hohes Maß an Interaktivität zu verleihen. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Statements) enthält ausführliche Details zu den Anweisungen in diesem Kapitel. Das Semikolon-Zeichen (`;`) wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) für vollständige Informationen über Ausdrücke.

## Blockanweisung

Die grundlegendste Anweisung ist eine _Blockanweisung_, die verwendet wird, um Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern begrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Blockanweisungen werden häufig mit Steuerflussanweisungen (`if`, `for`, `while`) verwendet.

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Blockanweisung.

> **Hinweis:** [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variablen sind nicht blockbereichsbezogen, sondern gelten für die enthaltende Funktion oder das Skript, und die Auswirkungen ihrer Festlegung bestehen über den Block hinaus fort. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, da die `var x`-Anweisung innerhalb des Blocks im gleichen Bereich liegt wie die `var x`-Anweisung vor dem Block. (In C oder Java würde der entsprechende Code `1` ausgeben.)
>
> Dieser Bereichseffekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemildert werden.

## Bedingungsanweisungen

Eine Bedingungsanweisung ist eine Reihe von Befehlen, die ausgeführt werden, wenn eine angegebene Bedingung wahr ist. JavaScript unterstützt zwei Bedingungsanweisungen: `if...else` und `switch`.

### if...else-Anweisung

Verwenden Sie die `if`-Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung wahr ist. Verwenden Sie die optionale `else`-Klausel, um eine Anweisung auszuführen, wenn die Bedingung falsch ist.

Eine `if`-Anweisung sieht folgendermaßen aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hier kann die `condition` jeder Ausdruck sein, der zu `true` oder `false` ausgewertet wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung, was zu `true` und `false` ausgewertet wird.)

Wenn `condition` zu `true` ausgewertet wird, wird `statement1` ausgeführt. Andernfalls wird `statement2` ausgeführt. `statement1` und `statement2` können jede Anweisung sein, einschließlich weiterer verschachtelter `if`-Anweisungen.

Sie können die Anweisungen auch mit `else if` kombinieren, um mehrere Bedingungen nacheinander zu testen, wie folgt:

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

Im Falle mehrerer Bedingungen wird nur die erste logische Bedingung, die zu `true` ausgewertet wird, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie sie innerhalb einer Blockanweisung (`{ /* … */ }`).

#### Beste Praxis

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden—_insbesondere_, wenn `if`-Anweisungen genestet werden:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

Generell wird empfohlen, keine `if...else`-Anweisung mit einer Zuweisung wie `x = y` als Bedingung zu verwenden:

```js-nolint example-bad
if (x = y) {
  // statements here
}
```

Falls Sie sich jedoch in dem seltenen Fall befinden, etwas Derartiges tun zu wollen, enthält die Dokumentation zur [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) eine [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition)-Sektion mit einer allgemeinen best practice Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte werden zu `false` ausgewertet (auch bekannt als {{Glossary("Falsy", "Falsy")}}-Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden als `true` interpretiert, wenn sie einer Bedingungsanweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte
> `true` und `false` mit den wahr und falsch Werten des
> {{jsxref("Boolean")}} Objekts!
>
> Zum Beispiel:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // diese Bedingung wird als wahr ausgewertet
> }
> if (b == true) {
>   // diese Bedingung wird als falsch ausgewertet
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text`-Objekt drei beträgt. Andernfalls wird eine Warnung angezeigt und `false` zurückgegeben.

```js
function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  } else {
    alert(
      `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
    );
    return false;
  }
}
```

### switch-Anweisung

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck zu bewerten und zu versuchen, den Wert des Ausdrucks mit einem `case`-Label abzugleichen. Wenn eine Übereinstimmung gefunden wird, führt das Programm die zugehörige Anweisung aus.

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

JavaScript bewertet die obige switch-Anweisung wie folgt:

- Das Programm sucht zuerst nach einer `case`-Klausel mit einem Label, das dem Wert des Ausdrucks entspricht, und überträgt dann die Kontrolle zu dieser Klausel, wobei die zugehörigen Anweisungen ausgeführt werden.
- Wenn kein übereinstimmendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:
  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle zu dieser Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, nimmt das Programm die Ausführung der Anweisung nach dem Ende von `switch` wieder auf.
  - (Üblicherweise wird die `default`-Klausel als letzte Klausel geschrieben, dies muss aber nicht so sein.)

#### Break-Anweisungen

Die optionale `break`-Anweisung, die mit jeder `case`-Klausel verknüpft ist, stellt sicher, dass das Programm aus der `switch`-Anweisung ausbricht, sobald die übereinstimmende Anweisung ausgeführt wurde, und dann die Ausführung mit der Anweisung nach `switch` fortsetzt. Wenn `break` weggelassen wird, wird das Programm die Ausführung innerhalb der `switch`-Anweisung fortsetzen (und die Anweisungen unter der nächsten `case` ausführen, und so weiter).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` auf `"Bananen"` ausgewertet wird, stimmt das Programm den Wert mit `case "Bananas"` ab und führt die zugehörige Anweisung aus. Wenn `break` auftritt, verlässt das Programm `switch` und setzt die Ausführung von der Anweisung nach `switch` fort. Wenn `break` weggelassen wird, würde die Anweisung für `case "Cherries"` ebenfalls ausgeführt werden.

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

## Ausnahmebehandlungsanweisungen

Sie können Ausnahmen mit der `throw`-Anweisung auslösen und sie mit den `try...catch`-Anweisungen behandeln.

- [`throw`-Anweisung](#throw-anweisung)
- [`try...catch`-Anweisung](#try...catch-anweisung)

### Ausnahmearten

Nahezu jedes Objekt kann in JavaScript geworfen werden. Dennoch sind nicht alle geworfenen Objekte gleichwertig. Während es üblich ist, Zahlen oder Zeichenfolgen als Fehler zu werfen, ist es häufig effektiver, einen der speziell für diesen Zweck erstellten Ausnahmetypen zu verwenden:

- [ECMAScript-Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme auszulösen. Eine `throw`-Anweisung gibt den Wert an, der geworfen werden soll:

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

Die `try...catch`-Anweisung markiert einen Block von Anweisungen zum Ausprobieren und gibt eine oder mehrere Reaktionen an, falls eine Ausnahme ausgelöst wird. Wenn eine Ausnahme auftritt, wird die `try...catch`-Anweisung abgefangen.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen enthält, die angeben, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn nicht, möchten Sie, dass die Kontrolle auf den `catch`-Block übergeht. Wenn eine Ausnahme innerhalb des `try`-Blocks (oder in einer von innerhalb des `try`-Blocks aufgerufenen Funktion) geworfen wird, erfolgt die Kontrolle _sofort_ zum `catch`-Block. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird nach den `try`- und `catch`-Blöcken, aber vor den Anweisungen, die der `try...catch`-Anweisung folgen, ausgeführt.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem Wert abruft, der der Funktion übergeben wird. Wenn der Wert keiner Monatsnummer (`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert `'InvalidMonthNo'` ausgelöst und die Anweisungen im `catch`-Block setzen die Variable `monthName` auf `'unknown'`.

```js-nolint
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // throw keyword is used here
  }
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

Der `catch`-Block gibt einen Bezeichner an (`exception` im vorhergehenden Syntax), der den von der `throw`-Anweisung angegebenen Wert enthält. Sie können diesen Bezeichner verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der Bezeichner existiert nur während der Ausführung des `catch`-Blocks. Sobald der `catch`-Block die Ausführung beendet, existiert der Bezeichner nicht mehr.

Zum Beispiel wird in folgendem Code eine Ausnahme geworfen. Wenn die Ausnahme auftritt, wird die Kontrolle zum `catch`-Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```

> [!NOTE]
> Beim Protokollieren von Fehlern in die Konsole innerhalb eines
> `catch`-Blocks wird empfohlen, `console.error()` statt
> `console.log()` zu verwenden, um das Debuggen zu erleichtern. Es formatiert die Nachricht als Fehler und fügt sie der Liste der von der Seite generierten Fehlermeldungen hinzu.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ den `try`- und `catch`-Blöcken ausgeführt werden. Der `finally`-Block wird auch _vor_ dem Code, der der `try…catch…finally`-Anweisung folgt, ausgeführt.

Es ist auch wichtig zu beachten, dass der `finally`-Block _unabhängig davon_ ausgeführt wird, ob eine Ausnahme geworfen wird oder nicht. Wenn jedoch eine Ausnahme geworfen wird, werden die Anweisungen im `finally`-Block ausgeführt, auch wenn kein `catch`-Block die geworfene Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um Ihr Skript bei Auftreten eines Fehlers anzupassen. Zum Beispiel müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript belegt hat.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden. (Serverseitiges JavaScript ermöglicht den Zugriff auf Dateien.) Wenn eine Ausnahme auftritt, während die Datei geöffnet ist, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Die Verwendung von `finally` stellt _sicher_, dass die Datei niemals offen bleibt, auch wenn ein Fehler auftritt.

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

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try…catch…finally`-Produktion, unabhängig von allen `return`-Anweisungen in den `try`- und `catch`-Blöcken:

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

Die Überschreibung von Rückgabewerten durch den `finally`-Block gilt auch für Ausnahmen, die innerhalb des `catch`-Blocks geworfen oder erneut geworfen werden:

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

Sie können eine oder mehrere verschachtelte `try...catch`-Anweisungen verwenden.

Wenn ein innerer `try`-Block _keinen_ entsprechenden
`catch`-Block hat:

1. muss er _einen_ `finally`-Block enthalten, und
2. wird der `catch`-Block der umgebenden `try...catch`-Anweisung
   für einen Abgleich überprüft.

Weitere Informationen finden Sie unter [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks)
auf der Referenzseite zu [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch).

### Verwendung von Error-Objekten

Abhängig von der Art des Fehlers können Sie möglicherweise die Eigenschaften `name` und `message` verwenden, um eine genauere Nachricht zu erhalten.

Die `name`-Eigenschaft gibt die allgemeine Klasse des `Error` an (wie `DOMException` oder `Error`), während `message` im Allgemeinen eine knappere Nachricht liefert, als man erhalten würde, wenn man das Fehlerobjekt in einen String konvertiert.

Wenn Sie eigene Ausnahmen werfen, um diese Eigenschaften zu nutzen (zum Beispiel wenn Ihr `catch`-Block nicht zwischen Ihren eigenen und systemeigenen Ausnahmen unterscheidet), können Sie den `Error`-Konstruktor verwenden.

Zum Beispiel:

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  } else {
    doSomethingToGetAJavaScriptError();
  }
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
