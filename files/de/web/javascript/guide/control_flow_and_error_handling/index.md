---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Menge von Anweisungen, insbesondere Kontrollflussanweisungen, die Sie verwenden können, um interaktive Elemente in Ihre Anwendung zu integrieren. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Das [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference/Statements) enthält ausführliche Details zu den Anweisungen in diesem Kapitel. Das Semikolon (`;`) wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Weitere Informationen zu Ausdrücken finden Sie unter [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators).

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

> **Hinweis:** [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variablen sind nicht blockweise, sondern im enthaltenden Funktions- oder Skriptbereich vorhanden, und die Auswirkungen ihrer Setzung bleiben über den Block hinaus bestehen. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, weil die `var x`-Anweisung im Block im selben Gültigkeitsbereich liegt wie die `var x`-Anweisung vor dem Block. (In C oder Java würde der entsprechende Code `1` ausgeben.)
>
> Dieser Gültigkeitsbereichseffekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemildert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist eine Reihe von Befehlen, die ausgeführt werden, wenn eine bestimmte Bedingung wahr ist. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und `switch`.

### if...else-Anweisung

Verwenden Sie die `if`-Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung `wahr` ist. Verwenden Sie die optionale `else`-Klausel, um eine Anweisung auszuführen, wenn die Bedingung `falsch` ist.

Eine `if`-Anweisung sieht so aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hier kann die `Bedingung` jeder Ausdruck sein, der zu `wahr` oder `falsch` ausgewertet wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung, was zu `wahr` und `falsch` ausgewertet wird.)

Wenn die `Bedingung` zu `wahr` ausgewertet wird, wird `Anweisung_1` ausgeführt. Andernfalls wird `Anweisung_2` ausgeführt. `Anweisung_1` und `Anweisung_2` können beliebige Anweisungen sein, einschließlich weiterer verschachtelter `if`-Anweisungen.

Sie können die Anweisungen auch mit `else if` verbinden, um mehrere Bedingungen in einer Sequenz zu testen, wie folgt:

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

Im Falle mehrerer Bedingungen wird nur die erste logische Bedingung, die zu `wahr` ausgewertet wird, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie sie in einer Blockanweisung (`{ /* … */ }`).

#### Beste Praxis

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden—_besonders_ wenn `if`-Anweisungen verschachtelt sind:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

Im Allgemeinen ist es eine gute Praxis, kein `if...else` mit einer Zuweisung wie `x = y` als Bedingung zu verwenden:

```js-nolint example-bad
if (x = y) {
  // statements here
}
```

In den seltenen Fällen, in denen Sie so etwas tun möchten, finden Sie in der Dokumentation zur [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife einen Abschnitt über die [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit Hinweisen zu einem allgemeinen Best-Practice-Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte werden zu `falsch` ausgewertet (auch bekannt als [Falsy](/de/docs/Glossary/Falsy) Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden zu `wahr` ausgewertet, wenn sie an eine bedingte Anweisung übergeben werden.

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
>   // diese Bedingung wird zu true ausgewertet
> }
> if (b == true) {
>   // diese Bedingung wird zu false ausgewertet
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text`-Objekt drei ist. Andernfalls wird eine Warnung angezeigt und `false` zurückgegeben.

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

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck zu bewerten und zu versuchen, den Wert des Ausdrucks mit einem `case`-Label abzugleichen. Wenn ein Treffer gefunden wird, führt das Programm die zugehörige Anweisung aus.

Eine `switch`-Anweisung sieht wie folgt aus:

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

- Das Programm sucht zuerst nach einer `case`-Klausel mit einem Label, das mit dem Wert des Ausdrucks übereinstimmt, und überträgt dann die Kontrolle an diese Klausel, indem es die zugehörigen Anweisungen ausführt.
- Wenn kein übereinstimmendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:
  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle an diese Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung mit der Anweisung, die auf das Ende von `switch` folgt, fort.
  - (Üblicherweise wird die `default`-Klausel als letzte Klausel geschrieben, sie muss jedoch nicht so sein.)

#### break-Anweisungen

Die optionale `break`-Anweisung, die mit jeder `case`-Klausel verknüpft ist, stellt sicher, dass das Programm aus dem `switch`-Block ausbricht, sobald die übereinstimmende Anweisung ausgeführt wird, und dann die Ausführung mit der Anweisung nach dem `switch` fortsetzt. Wenn `break` weggelassen wird, wird die Ausführung des Programms innerhalb der `switch`-Anweisung fortgesetzt (und es werden die Anweisungen unter dem nächsten `case` ausgeführt, und so weiter).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` zu `'Bananas'` ausgewertet wird, stimmt das Programm den Wert mit dem `case 'Bananas'` ab und führt die zugehörige Anweisung aus. Wenn `break` erreicht wird, verlässt das Programm die `switch`-Anweisung und setzt die Ausführung mit der Anweisung, die auf den `switch` folgt, fort. Wenn `break` weggelassen würde, würde die Anweisung für `case 'Cherries'` ebenfalls ausgeführt.

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
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");
```

## Ausnahmebehandlungsanweisungen

Sie können Ausnahmen mit der `throw`-Anweisung werfen und sie mit den `try...catch`-Anweisungen behandeln.

- [`throw` Anweisung](#throw-anweisung)
- [`try...catch` Anweisung](#try...catch_statement)

### Ausnahmetypen

Praktisch jedes Objekt kann in JavaScript geworfen werden. Dennoch sind nicht alle geworfenen Objekte gleich. Obwohl es üblich ist, Zahlen oder Strings als Fehler zu werfen, ist es häufig effektiver, einen der speziell für diesen Zweck erstellten Ausnahmetypen zu verwenden:

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

### `try...catch`-Anweisung

Die `try...catch`-Anweisung markiert einen Block von Anweisungen, die ausprobiert werden sollen, und gibt eine oder mehrere Reaktionen an, falls eine Ausnahme geworfen wird. Wenn eine Ausnahme geworfen wird, fängt die `try...catch`-Anweisung sie ein.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen enthält, die angeben, was zu tun ist, wenn im `try`-Block eine Ausnahme geworfen wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn das nicht der Fall ist, soll die Kontrolle an den `catch`-Block übergehen. Wenn in einer der Anweisungen innerhalb des `try`-Blocks (oder in einer Funktion, die vom `try`-Block aus aufgerufen wird) eine Ausnahme geworfen wird, wechselt die Kontrolle _sofort_ zum `catch`-Block. Wenn im `try`-Block keine Ausnahme geworfen wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird nach den `try`- und `catch`-Blöcken ausgeführt, aber vor den Anweisungen, die auf die `try...catch`-Anweisung folgen.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem an die Funktion übergebenen Wert abruft. Wenn der Wert keiner Monatsnummer entspricht (`1` – `12`), wird eine Ausnahme mit dem Wert `'InvalidMonthNo'` geworfen, und die Anweisungen im `catch`-Block setzen die Variable `monthName` auf `'unknown'`.

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

Der `catch`-Block gibt einen Bezeichner (`exception` in der vorangehenden Syntax) an, der den vom `throw`-Befehl angegebenen Wert hält. Sie können diesen Bezeichner verwenden, um Informationen über die geworfene Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der Bezeichner existiert nur für die Dauer des `catch`-Blocks. Sobald der `catch`-Block ausgeführt wurde, existiert der Bezeichner nicht mehr.

Beispielsweise wirft der folgende Code eine Ausnahme. Wenn die Ausnahme auftritt, wird die Kontrolle an den `catch`-Block übertragen.

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
> eines `catch`-Blocks wird empfohlen, `console.error()` anstelle von
> `console.log()` zu verwenden, um Fehler zu debuggen. Es formatiert die Nachricht als
> Fehler und fügt sie der Liste der Fehlernachrichten hinzu, die von der Seite generiert wurden.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ der Ausführung der `try`- und `catch`-Blöcke ausgeführt werden. Zusätzlich wird der `finally`-Block _vor_ dem Code ausgeführt, der auf die `try...catch...finally`-Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally`-Block ausgeführt wird, _egal ob_ eine Ausnahme geworfen wird oder nicht. Wird jedoch eine Ausnahme geworfen, werden die Anweisungen im `finally`-Block ausgeführt, selbst wenn kein `catch`-Block die geworfene Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um Ihr Skript beim Auftreten einer Ausnahme reibungslos auszuführen. Zum Beispiel müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript belegt hat.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden. (Serverseitiges JavaScript ermöglicht den Zugriff auf Dateien.) Wenn während der Dateiöffnung eine Ausnahme geworfen wird, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Die Verwendung von `finally` hier _stellt sicher_, dass die Datei niemals offen bleibt, auch wenn ein Fehler auftritt.

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

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try...catch...finally`-Produktion, unabhängig von irgendwelchen `return`-Anweisungen in den `try`- und `catch`-Blöcken:

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

#### Verschachtelte try...catch-Anweisungen

Sie können eine oder mehrere `try...catch`-Anweisungen verschachteln.

Wenn ein innerer `try`-Block _keinen_ entsprechenden `catch`-Block hat:

1. muss er _einen_ `finally`-Block enthalten, und
2. wird der `catch`-Block der umschließenden `try...catch`-Anweisung
   auf eine Übereinstimmung überprüft.

Weitere Informationen finden Sie in den [verschachtelten try-Blöcken](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks)
auf der Referenzseite von [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch).

### Verwendung von Error-Objekten

Abhängig von der Art des Fehlers können Sie möglicherweise die Eigenschaften `name` und `message` verwenden, um eine verfeinerte Nachricht zu erhalten.

Die Eigenschaft `name` gibt die allgemeine Klasse des `Error` an (wie `DOMException` oder `Error`), während `message` im Allgemeinen eine prägnantere Nachricht liefert, als man durch das Konvertieren des Fehlerobjekts in einen String erhalten würde.

Wenn Sie Ihre eigenen Ausnahmen werfen, können Sie zur Nutzung dieser Eigenschaften (z. B. wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und Systemausnahmen unterscheidet) den `Error`-Konstruktor verwenden.

Beispiel:

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
