---
title: Steuerfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Reihe von Anweisungen, insbesondere Steuerflussanweisungen, die Sie verwenden können, um Ihrem Anwendung eine große Menge an Interaktivität hinzuzufügen. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Statements) enthält umfassende Details über die in diesem Kapitel genannten Anweisungen. Das Semikolon (`;`) wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Weitere Informationen zu Ausdrücken finden Sie unter [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators).

## Block-Anweisung

Die grundlegendste Anweisung ist eine _Block-Anweisung_, die verwendet wird, um Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifte Klammern abgegrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Block-Anweisungen werden häufig mit Steuerflussanweisungen (`if`, `for`, `while`) verwendet.

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Block-Anweisung.

> **Hinweis:** In [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variablen sind nicht blockbezogen, sondern gelten für die umgebende Funktion oder das Skript, und die Effekte ihrer Zuweisung bleiben über den Block hinaus erhalten. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, da die `var x`-Anweisung innerhalb des Blocks im selben Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block liegt. (In C oder Java würde der entsprechende Code `1` ausgeben.)
>
> Dieser Scoping-Effekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemildert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist ein Satz von Befehlen, der ausgeführt wird, wenn eine bestimmte Bedingung wahr ist. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und `switch`.

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

Hier kann `condition` jeder Ausdruck sein, der zu `true` oder `false` ausgewertet wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung, was zu `true` und `false` ausgewertet wird.)

Wenn `condition` zu `true` ausgewertet wird, wird `statement_1` ausgeführt. Andernfalls wird `statement_2` ausgeführt. `statement_1` und `statement_2` können jede Anweisung sein, einschließlich weiterer verschachtelter `if`-Anweisungen.

Sie können die Anweisungen auch mit `else if` zusammensetzen, um mehrere Bedingungen nacheinander zu prüfen, wie folgt:

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

Bei mehreren Bedingungen wird nur die erste logische Bedingung, die als `true` ausgewertet wird, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie diese innerhalb einer Block-Anweisung (`{ /* … */ }`).

#### Beste Praktiken

Im Allgemeinen ist es eine gute Praxis, immer Block-Anweisungen zu verwenden—_besonders_ beim Verschachteln von `if`-Anweisungen:

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

Falls Sie sich in dem seltenen Fall befinden, dass Sie so etwas tun möchten, enthält die Dokumentation zur [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Anweisung einen Abschnitt über [Verwenden einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit einer allgemein empfohlenen Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte werden als `false` bewertet (auch bekannt als {{Glossary("Falsy", "Falsy")}}-Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden als `true` ausgewertet, wenn sie einer bedingten Anweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte `true` und `false` mit den true- und false-Werten des {{jsxref("Boolean")}}-Objekts!
>
> Zum Beispiel:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // diese Bedingung wird als true ausgewertet
> }
> if (b == true) {
>   // diese Bedingung wird als false ausgewertet
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, wenn die Anzahl der Zeichen in einem `Text`-Objekt drei beträgt. Andernfalls zeigt es eine Warnung an und gibt `false` zurück.

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

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck auszuwerten und zu versuchen, den Wert des Ausdrucks mit einem `case`-Label abzugleichen. Wenn eine Übereinstimmung gefunden wird, führt das Programm die zugehörige Anweisung aus.

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

JavaScript wertet die oben stehende Switch-Anweisung wie folgt aus:

- Das Programm sucht zuerst nach einer `case`-Klausel mit einem Label, das dem Wert des Ausdrucks entspricht, und überträgt die Kontrolle an diese Klausel, wobei die zugehörigen Anweisungen ausgeführt werden.
- Wenn kein passendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:
  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle an diese Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der Anweisung fort, die dem Ende des `switch` folgt.
  - (Nach Konvention wird die `default`-Klausel als letzte Klausel geschrieben, es muss jedoch nicht so sein.)

#### break-Anweisungen

Die optionale `break`-Anweisung, die mit jeder `case`-Klausel verbunden ist, sorgt dafür, dass das Programm den `switch` verlässt, sobald die übereinstimmende Anweisung ausgeführt wird, und dann die Ausführung bei der Anweisung fortsetzt, die dem `switch` folgt. Wenn `break` weggelassen wird, setzt das Programm die Ausführung innerhalb der `switch`-Anweisung fort (und führt die Anweisungen unter dem nächsten `case` und so weiter aus).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` zu `'Bananas'` ausgewertet wird, stimmt das Programm den Wert mit dem Fall `'Bananas'` ab und führt die zugehörige Anweisung aus. Wenn `break` angetroffen wird, verlässt das Programm den `switch` und setzt die Ausführung von der Anweisung fort, die dem `switch` folgt. Wenn `break` weggelassen würde, würde die Anweisung für `case 'Cherries'` ebenfalls ausgeführt.

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

## Fehlerbehandlungsanweisungen

Sie können Ausnahmen mit der `throw`-Anweisung werfen und sie mit den `try...catch`-Anweisungen behandeln.

- [`throw`-Anweisung](#throw-anweisung)
- [`try...catch`-Anweisung](#try...catch_statement)

### Fehlertypen

In JavaScript kann so gut wie jedes Objekt geworfen werden. Dennoch sind nicht alle geworfenen Objekte gleich. Während es üblich ist, Zahlen oder Zeichenfolgen als Fehler zu werfen, ist es häufig effektiver, einen der speziell für diesen Zweck geschaffenen Ausnahmetypen zu verwenden:

- [ECMAScript-Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme zu werfen. Eine `throw`-Anweisung gibt den zu werfenden Wert an:

```js
throw expression;
```

Sie können jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende Code wirft mehrere Ausnahmen unterschiedlichen Typs:

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

Die `try...catch`-Anweisung markiert einen Block mit Anweisungen zum Ausprobieren und gibt eine oder mehrere Antworten an, falls eine Ausnahme geworfen wird. Wenn eine Ausnahme geworfen wird, fängt die `try...catch`-Anweisung sie auf.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen enthält, die angeben, was zu tun ist, wenn eine Ausnahme im `try`-Block geworfen wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn dies nicht der Fall ist, sollte die Kontrolle an den `catch`-Block übergeben werden. Wenn eine Anweisung innerhalb des `try`-Blocks (oder in einer aus dem `try`-Block aufgerufenen Funktion) eine Ausnahme wirft, wird die Kontrolle _sofort_ an den `catch`-Block übergeben. Wenn keine Ausnahme im `try`-Block geworfen wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird nach den `try`- und `catch`-Blöcken ausgeführt, jedoch bevor die Anweisungen nach der `try...catch`-Anweisung ausgeführt werden.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Im Beispiel wird eine Funktion aufgerufen, die einen Monatsnamen aus einem Array basierend auf dem an die Funktion übergebenen Wert abruft. Wenn der Wert keiner Monatsnummer (`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert `'InvalidMonthNo'` geworfen, und die Anweisungen im `catch`-Block setzen die `monthName`-Variable auf `'unknown'`.

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

#### Der Catch-Block

Sie können einen `catch`-Block verwenden, um alle Ausnahmen zu behandeln, die im `try`-Block generiert werden können.

```js-nolint
catch (exception) {
  statements
}
```

Der `catch`-Block gibt einen Bezeichner an (`exception` in der vorherigen Syntax), der den von der `throw`-Anweisung angegebenen Wert hält. Sie können diesen Bezeichner verwenden, um Informationen über die geworfene Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der Bezeichner besteht nur für die Dauer des `catch`-Blocks. Sobald der `catch`-Block die Ausführung beendet, existiert der Bezeichner nicht mehr.

Zum Beispiel wirft der folgende Code eine Ausnahme. Wenn die Ausnahme auftritt, wird die Kontrolle an den `catch`-Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (err) {
  // statements to handle any exceptions
  logMyErrors(err); // pass exception object to error handler
}
```

> [!NOTE]
> Beim Protokollieren von Fehlern in der Konsole innerhalb eines `catch`-Blocks wird empfohlen, `console.error()` anstelle von `console.log()` zu verwenden, um das Debuggen zu erleichtern. Es formatiert die Nachricht als Fehler und fügt sie zu der Liste der von der Seite generierten Fehlermeldungen hinzu.

#### Der Finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ den `try`- und `catch`-Blöcken ausgeführt werden. Zusätzlich wird der `finally`-Block _vor_ dem Code ausgeführt, der der `try…catch…finally`-Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally`-Block ausgeführt wird, _unabhängig davon_, ob eine Ausnahme geworfen wird. Wenn jedoch eine Ausnahme geworfen wird, werden die Anweisungen im `finally`-Block auch dann ausgeführt, wenn kein `catch`-Block die geworfene Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um sicherzustellen, dass Ihr Skript bei Auftreten einer Ausnahme sauber fehlschlägt. Zum Beispiel müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript in Anspruch genommen hat.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden. (Serverseitiges JavaScript ermöglicht den Zugriff auf Dateien.) Wenn während des Öffnens der Datei eine Ausnahme geworfen wird, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Durch die Verwendung von `finally` wird _sichergestellt_, dass die Datei niemals offen bleibt, selbst wenn ein Fehler auftritt.

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

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try…catch…finally`-Produktion, unabhängig von `return`-Anweisungen in den `try`- und `catch`-Blöcken:

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
2. der umgebende `try...catch`-Block wird auf ein zu behandelndes Muster überprüft.

Weitere Informationen finden Sie unter [Verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks) auf der Referenzseite zur [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung.

### Verwenden von Error-Objekten

Je nach Fehlertyp können Sie möglicherweise die Eigenschaften `name` und `message` verwenden, um eine genauere Nachricht zu erhalten.

Die Eigenschaft `name` bietet die allgemeine Klasse von `Error` (wie `DOMException` oder `Error`), während `message` im Allgemeinen eine prägnantere Nachricht liefert, als man durch Umwandlung des Fehlerobjekts in eine Zeichenfolge erhalten würde.

Wenn Sie Ihre eigenen Ausnahmen werfen, um diese Eigenschaften zu nutzen (zum Beispiel, wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und Systemausnahmen unterscheidet), können Sie den `Error`-Konstruktor verwenden.

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
