---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: 676000007120e0ed38f096e63f62426a052c59d6
---

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Menge von Anweisungen, speziell
Kontrollflussanweisungen, die Sie verwenden können, um eine hohe Interaktivität
in Ihre Anwendung einzubinden. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Das [JavaScript-Referenzdokument](/de/docs/Web/JavaScript/Reference/Statements)
enthält umfassende Details zu den Anweisungen in diesem Kapitel. Das Semikolon
(`;`) Zeichen wird verwendet, um Anweisungen in JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung.
Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)
für vollständige Informationen über Ausdrücke.

## Blockanweisung

Die grundlegendste Anweisung ist eine _Blockanweisung_, die verwendet wird, um
Anweisungen zu gruppieren. Der Block wird von einem Paar geschweifter Klammern begrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Blockanweisungen werden häufig mit Kontrollflussanweisungen (`if`,
`for`, `while`) verwendet.

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Blockanweisung.

> [!NOTE]
> [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variablen sind nicht blockweise, sondern innerhalb der enthaltenen Funktion oder des Skripts erfasst, und die Auswirkungen ihrer Setzung bleiben über den Block hinaus bestehen. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, weil die `var x`-Anweisung innerhalb des Blocks im selben Gültigkeitsbereich wie die `var x`-Anweisung vor dem Block ist. (In C oder Java würde der äquivalente Code `1` ausgeben.)
>
> Dieser Scoping-Effekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemildert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist eine Reihe von Befehlen, die ausgeführt werden, wenn eine angegebene Bedingung
wahr ist. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und
`switch`.

### if...else Anweisung

Verwenden Sie die `if` Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung
`wahr` ist. Verwenden Sie die optionale `else` Klausel, um eine Anweisung auszuführen, wenn
die Bedingung `falsch` ist.

Eine `if` Anweisung sieht folgendermaßen aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hier kann die `condition` jeder Ausdruck sein, der zu
`wahr` oder `falsch` auswertet. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description)
für eine Erklärung, was zu `wahr` und `falsch` auswertet.)

Wenn `condition` zu `wahr` auswertet,
wird `statement1` ausgeführt. Andernfalls wird
`statement2` ausgeführt. `statement1` und
`statement2` können beliebige Anweisungen sein, einschließlich weiterer verschachtelter
`if` Anweisungen.

Sie können die Anweisungen auch mit `else if` verkoppeln, um mehrere
Bedingungen nacheinander zu testen, wie folgt:

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

Im Falle mehrerer Bedingungen wird nur die erste logische Bedingung, die zu
`wahr` auswertet, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie sie innerhalb einer
Blockanweisung (`{ /* … */ }`).

#### Best Practice

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden—_besonders_ wenn
`if` Anweisungen verschachtelt sind:

```js
if (condition) {
  // Statements for when condition is true
  // …
} else {
  // Statements for when condition is false
  // …
}
```

Im Allgemeinen ist es eine gute Praxis, keine `if...else` mit einer Zuweisung wie `x = y` als Bedingung zu haben:

```js-nolint example-bad
if (x = y) {
  // statements here
}
```

Wenn Sie sich jedoch in dem seltenen Fall befinden, dass Sie etwas Derartiges tun möchten, hat die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Dokumentation einen Abschnitt [Using an assignment as a condition](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit Anweisungen zur allgemeinen Best-Practice-Syntax, über die Sie Bescheid wissen und die Sie befolgen sollten.

#### Falsy Werte

Die folgenden Werte werten zu `falsch` aus (auch bekannt als {{Glossary("Falsy", "Falsy")}} Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werten zu `wahr` aus, wenn sie einer
bedingten Anweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte
> `true` und `false` mit den wahren und falschen Werten des
> {{jsxref("Boolean")}} Objekts!
>
> Zum Beispiel:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // diese Bedingung wertet zu wahr aus
> }
> if (b == true) {
>   // diese Bedingung wertet zu falsch aus
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück,
wenn die Anzahl der Zeichen in einem `Text` Objekt drei beträgt. Andernfalls wird
eine Warnung angezeigt und es wird `false` zurückgegeben.

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

### switch Anweisung

Eine `switch` Anweisung ermöglicht es einem Programm, einen Ausdruck zu evaluieren und zu versuchen,
den Wert des Ausdrucks mit einem `case` Label abzugleichen. Wenn ein Treffer gefunden wird, wird
die zugehörige Anweisung ausgeführt.

Eine `switch` Anweisung sieht folgendermaßen aus:

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

JavaScript wertet die obige switch Anweisung wie folgt aus:

- Das Programm sucht zunächst nach einer `case` Klausel mit einem Label, das dem
  Wert des Ausdrucks entspricht, und überträgt dann die Kontrolle auf diese Klausel, indem es die
  zugehörigen Anweisungen ausführt.
- Wird kein passendes Label gefunden, sucht das Programm nach der optionalen
  `default` Klausel:
  - Wenn eine `default` Klausel gefunden wird, überträgt das Programm die Kontrolle auf diese
    Klausel und führt die zugehörigen Anweisungen aus.
  - Wird keine `default` Klausel gefunden, wird die Programmausführung bei der
    Anweisung nach dem Ende von `switch` fortgesetzt.
  - (Konventionell wird die `default` Klausel als letzte Klausel geschrieben,
    aber das muss nicht unbedingt so sein.)

#### break Anweisungen

Die optionale `break` Anweisung, die mit jeder `case` Klausel
verbunden ist, sorgt dafür, dass das Programm bei `switch` abbricht, sobald die übereinstimmende Anweisung
ausgeführt wurde, und dann die Ausführung bei der Anweisung nach `switch` fortsetzt.
Wird `break` weggelassen, wird die Ausführung des Programms innerhalb der
`switch` Anweisung fortgesetzt (und es werden Anweisungen unter dem nächsten `case` ausgeführt, und so weiter).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` zu
`"Bananas"` auswertet, vergleicht das Programm den Wert mit `case "Bananas"`
und führt die zugehörige Anweisung aus. Wenn `break` auftritt, verlässt das
Programm die `switch` und setzt die Ausführung bei der Anweisung nach
`switch` fort. Wenn `break` weggelassen würde, würde auch die Anweisung für
`case "Cherries"` ausgeführt werden.

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

## Fehlerbehandlungsanweisungen

Sie können Ausnahmen mit der `throw` Anweisung auslösen und diese mit
den `try...catch` Anweisungen behandeln.

- [`throw` Anweisung](#throw_anweisung)
- [`try...catch` Anweisung](#try...catch_anweisung)

### Ausnahmearten

Im Grunde kann jedes Objekt in JavaScript geworfen werden. Es ist jedoch nicht jede erzeugte Ausnahme
gleichwertig. Während es üblich ist, Zahlen oder Zeichenketten als Fehler zu werfen, ist es
häufig effektiver, eine der speziell für diesen Zweck erstellten Ausnahmearten zu verwenden:

- [ECMAScript Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw Anweisung

Verwenden Sie die `throw` Anweisung, um eine Ausnahme auszulösen. Eine `throw`
Anweisung spezifiziert den zu werfenden Wert:

```js
throw expression;
```

Sie können jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende
Code wirft mehrere Ausnahmen unterschiedlicher Typen:

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

### try...catch Anweisung

Die `try...catch` Anweisung markiert einen Block von Anweisungen, die versucht werden sollen, und
spezifiziert eine oder mehrere Reaktionen, falls eine Ausnahme ausgelöst wird. Wenn eine Ausnahme
ausgelöst wird, fängt die `try...catch` Anweisung sie ab.

Die `try...catch` Anweisung besteht aus einem `try` Block, der
eine oder mehrere Anweisungen enthält, und einem `catch` Block, der Anweisungen
enthält, die angeben, was zu tun ist, wenn im `try` Block eine Ausnahme ausgelöst wird.

Mit anderen Worten, Sie möchten, dass der `try` Block erfolgreich ist—aber wenn er das nicht ist, soll die Kontrolle an den `catch` Block übergehen. Wird im
`try` Block (oder in einer innerhalb des `try` Blocks aufgerufenen Funktion)
eine Ausnahme ausgelöst, geht die Kontrolle _sofort_ an den `catch`
Block. Wird im `try` Block keine Ausnahme ausgelöst, wird der `catch`
Block übersprungen. Der `finally` Block wird nach den `try` und
`catch` Blöcken ausgeführt, jedoch vor den Anweisungen, die auf die
`try...catch` Anweisung folgen.

Das folgende Beispiel verwendet eine `try...catch` Anweisung. Das Beispiel ruft eine
Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem der
Funktion übergebenen Wert abruft. Wenn der Wert keiner Monatszahl
(`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert
`'InvalidMonthNo'` ausgelöst und die Anweisungen im `catch` Block setzen die
`monthName` Variable auf `'unknown'`.

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

#### Der catch Block

Sie können einen `catch` Block verwenden, um alle Ausnahmen zu behandeln, die im
`try` Block generiert werden können.

```js-nolint
catch (exception) {
  statements
}
```

Der `catch` Block spezifiziert einen Bezeichner (`exception`
im vorhergehenden Syntax), der den im `throw`
ausgelösten Wert enthält. Sie können diesen Bezeichner verwenden, um Informationen über die ausgelöste
Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch` Block aufgerufen wird. Der
Bezeichner existiert nur für die Dauer des `catch` Blocks. Sobald der
`catch` Block die Ausführung beendet, existiert der Bezeichner nicht mehr.

Zum Beispiel wirft der folgende Code eine Ausnahme. Wenn die Ausnahme auftritt, geht die Kontrolle
auf den `catch` Block über.

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
> eines `catch` Blocks wird empfohlen, `console.error()`
> anstelle von `console.log()` für das Debuggen zu verwenden. Es formatiert die Nachricht als einen
> Fehler und fügt sie zur Liste der vom Seiteninhalt erzeugten Fehlermeldungen hinzu.

#### Der finally Block

Der `finally` Block enthält Anweisungen, die _nach_ den
`try` und `catch` Blöcken ausgeführt werden. Zusätzlich wird der
`finally` Block _vor_ dem Code ausgeführt, der auf die
`try...catch...finally` Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally` Block ausgeführt wird,
_unabhängig davon_, ob eine Ausnahme ausgelöst wird oder nicht. Wird jedoch eine Ausnahme ausgelöst, werden die
Anweisungen im `finally` Block auch dann ausgeführt, wenn kein `catch` Block
die ausgelöste Ausnahme behandelt.

Sie können den `finally` Block verwenden, um Ihr Skript im Fehlerfall elegant zu beenden. So müssen Sie beispielsweise möglicherweise eine Ressource freigeben, die Ihr Skript blockiert hat.

Im folgenden Beispiel wird eine Datei geöffnet und dann werden Anweisungen ausgeführt, die die Datei verwenden. (Serverseitiges JavaScript ermöglicht den Zugriff auf Dateien.) Wenn während des Öffnens der
Datei eine Ausnahme ausgelöst wird, schließt der `finally` Block die Datei, bevor das Skript fehlschlägt.
Das Verwenden von `finally` hier _stellt sicher_, dass die Datei niemals offen bleibt, selbst
wenn ein Fehler auftritt.

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

Wenn der `finally` Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert
der gesamten `try...catch...finally` Produktion, unabhängig von irgendwelchen
`return` Anweisungen in den `try` und `catch` Blöcken:

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

Das Überschreiben von Rückgabewerten durch den `finally` Block gilt auch für
Ausnahmen, die in dem `catch` Block ausgelöst oder erneut ausgelöst werden:

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

#### Verschachtelung von try...catch Anweisungen

Sie können eine oder mehrere `try...catch` Anweisungen verschachteln.

Wenn ein innerer `try` Block _keinen_ entsprechenden
`catch` Block hat:

1. muss er einen `finally` Block enthalten und
2. wird der `catch` Block der umgebenden `try...catch` Anweisung
   auf eine Übereinstimmung überprüft.

Für weitere Informationen, siehe [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks)
auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)
Referenzseite.

### Verwendung von Error-Objekten

Je nach Fehlerart können Sie möglicherweise die `name` und
`message` Eigenschaften verwenden, um eine verfeinerte Nachricht zu erhalten.

Die `name` Eigenschaft gibt die allgemeine Klasse des `Error` an (wie
`DOMException` oder `Error`), während `message`
in der Regel eine prägnantere Nachricht bereitstellt als die, die man durch das Konvertieren des Error-Objekts in einen String erhalten würde.

Wenn Sie eigene Ausnahmen werfen, um diese Eigenschaften zu nutzen
(zum Beispiel, wenn Ihr `catch` Block nicht zwischen eigenen
Ausnahmen und Systemausnahmen unterscheidet), können Sie den `Error` Konstruktor verwenden.

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
