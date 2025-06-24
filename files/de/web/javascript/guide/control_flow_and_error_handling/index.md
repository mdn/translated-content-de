---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Auswahl von Anweisungen, besonders
Kontrollfluss-Anweisungen, die Sie verwenden können, um eine große Menge an Interaktivität
in Ihrer Anwendung zu integrieren. Dieses Kapitel gibt einen Überblick über diese Anweisungen.

Die [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Statements)
enthält ausführliche Details zu den Anweisungen in diesem Kapitel. Das Semikolon
(`;`) Zeichen wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung.
Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)
für vollständige Informationen über Ausdrücke.

## Block-Anweisung

Die grundlegendste Anweisung ist eine _Block-Anweisung_, die verwendet wird, um
Anweisungen zu gruppieren. Der Block wird durch ein Paar geschweifter Klammern abgegrenzt:

```js
{
  statement1;
  statement2;
  // …
  statementN;
}
```

### Beispiel

Block-Anweisungen werden häufig mit Kontrollfluss-Anweisungen (`if`,
`for`, `while`) verwendet.

```js
while (x < 10) {
  x++;
}
```

Hier ist `{ x++; }` die Block-Anweisung.

> [!NOTE]
> Mit [`var`](/de/docs/Web/JavaScript/Reference/Statements/var) deklarierte Variablen sind nicht blockweise, sondern auf die umgebende Funktion oder das Skript bezogen, und die Auswirkungen ihrer Einstellung bestehen über den Block hinaus. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies gibt `2` aus, da die `var x`-Anweisung innerhalb des Blocks im selben Rahmen wie die `var x`-Anweisung vor dem Block ist. (In C oder Java würde der äquivalente Code `1` ausgeben.)
>
> Dieser Scoping-Effekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemindert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist eine Gruppe von Befehlen, die ausgeführt werden, wenn eine bestimmte Bedingung erfüllt ist. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und `switch`.

### if...else-Anweisung

Verwenden Sie die `if`-Anweisung, um eine Anweisung auszuführen, wenn eine logische Bedingung
`true` ist. Verwenden Sie die optionale `else`-Klausel, um eine Anweisung auszuführen, falls
die Bedingung `false` ist.

Eine `if`-Anweisung sieht wie folgt aus:

```js
if (condition) {
  statement1;
} else {
  statement2;
}
```

Hierbei kann die `condition` jeder Ausdruck sein, der zu
`true` oder `false` ausgewertet wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description)
für eine Erklärung, was zu `true` und `false` ausgewertet wird.)

Wenn `condition` zu `true` ausgewertet wird,
wird `statement1` ausgeführt. Andernfalls wird
`statement2` ausgeführt. `statement1` und
`statement2` können jede Anweisung sein, einschließlich weiterer verschachtelter
`if`-Anweisungen.

Sie können die Anweisungen auch mit `else if` kombinieren, um mehrere
Bedingungen in der Reihe zu testen, wie folgt:

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

Im Falle mehrerer Bedingungen wird nur die erste Bedingung, die zu
`true` ausgewertet wird, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie diese innerhalb einer
Block-Anweisung (`{ /* … */ }`).

#### Beste Praktiken

Im Allgemeinen ist es eine gute Praxis, immer Block-Anweisungen zu verwenden—_besonders_ beim
Verschachteln von `if`-Anweisungen:

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

In dem seltenen Fall, dass Sie so etwas tun möchten, hat die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Dokumentation einen Abschnitt über [Verwenden einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit Anleitungen zu einer allgemeinen Best-Practice-Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte werden zu `false` ausgewertet (auch bekannt als {{Glossary("Falsy", "Falsy")}}-Werte):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- der leere String (`""`)

Alle anderen Werte—einschließlich aller Objekte—werden zu `true` ausgewertet, wenn sie
einer bedingten Anweisung übergeben werden.

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
>   // diese Bedingung wird als true ausgewertet
> }
> if (b == true) {
>   // diese Bedingung wird als false ausgewertet
> }
> ```

#### Beispiel

Im folgenden Beispiel gibt die Funktion `checkData` `true` zurück, falls die Anzahl der Zeichen in einem `Text`-Objekt drei beträgt. Andernfalls zeigt sie eine Warnung an und gibt `false` zurück.

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

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck zu bewerten und zu versuchen,
den Wert des Ausdrucks mit einem `case`-Label abzugleichen. Wenn ein Treffer gefunden wird, führt das
Programm die zugehörige Anweisung aus.

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

JavaScript bewertet die obige switch-Anweisung wie folgt:

- Das Programm sucht zunächst nach einer `case`-Klausel mit einem Label, das den
  Wert des Ausdrucks abgleicht, und überträgt dann die Kontrolle auf diese Klausel und führt die
  zugehörigen Anweisungen aus.
- Wenn kein passendes Label gefunden wird, sucht das Programm nach der optionalen
  `default`-Klausel:
  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle auf diese
    Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, setzt das Programm die Ausführung bei der
    Anweisung fort, die dem Ende von `switch` folgt.
  - (Nach Konvention wird die `default`-Klausel als letzte Klausel geschrieben,
    aber sie muss nicht so sein.)

#### break-Anweisungen

Die optionale `break`-Anweisung, die mit jeder `case`-Klausel verbunden ist,
stellt sicher, dass das Programm die `switch` verlässt, sobald die gematchte Anweisung
ausgeführt wird, und dann die Ausführung bei der Anweisung fortsetzt, die `switch` folgt.
Wenn `break` weggelassen wird, setzt das Programm die Ausführung innerhalb der
`switch`-Anweisung fort (und wird Anweisungen unter der nächsten `case` ausführen, und so weiter).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` zu
`"Bananas"` ausgewertet wird, gleicht das Programm den Wert mit `case "Bananas"`
ab und führt die zugehörige Anweisung aus. Wenn `break` auftritt, verlässt das
Programm die `switch` und setzt die Ausführung von der Anweisung fort, die
`switch` folgt. Wenn `break` weggelassen würde, würde die Anweisung für
`case "Cherries"` ebenfalls ausgeführt.

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

## Ausnahmebehandlungs-Anweisungen

Sie können Ausnahmen mit der `throw`-Anweisung werfen und mit
den `try...catch`-Anweisungen behandeln.

- [`throw`-Anweisung](#throw-anweisung)
- [`try...catch`-Anweisung](#try...catch-anweisung)

### Ausnahmetypen

Fast jedes Objekt kann in JavaScript geworfen werden. Dennoch sind nicht alle geworfenen Objekte
gleich. Während es üblich ist, Zahlen oder Strings als Fehler zu werfen, ist es
häufig effektiver, einen der speziell für diesen Zweck erstellten Ausnahmetypen zu verwenden:

- [ECMAScript-Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme zu werfen. Eine `throw`-
Anweisung gibt den zu werfenden Wert an:

```js
throw expression;
```

Sie können jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende
Code wirft mehrere Ausnahmen verschiedener Typen:

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

Die `try...catch`-Anweisung markiert einen Block von Anweisungen, der versucht wird,
und spezifiziert eine oder mehrere Reaktionen, sollte eine Ausnahme geworfen werden. Wird eine Ausnahme
geworfen, fängt die `try...catch`-Anweisung sie ab.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der
eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen
enthält, die angeben, was zu tun ist, wenn im `try`-Block eine Ausnahme geworfen wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn nicht,
möchten Sie, dass die Kontrolle auf den `catch`-Block übergeht. Wenn eine Anweisung innerhalb des
`try`-Blocks (oder in einer Funktion, die innerhalb des `try`-Blocks aufgerufen wird)
eine Ausnahme wirft, wechselt die Kontrolle _sofort_ zum `catch`-
Block. Wenn keine Ausnahme im `try`-Block geworfen wird, wird der `catch`-
Block übersprungen. Der `finally`-Block wird nach den `try`- und
`catch`-Blöcken ausgeführt, jedoch vor den Anweisungen, die der
`try...catch`-Anweisung folgen.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine
Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem übergebenen Wert
abrufen soll. Wenn der Wert keiner Monatsnummer
(`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert
`'InvalidMonthNo'` geworfen und die Anweisungen im `catch`-Block setzen die
`monthName`-Variable auf `'unknown'`.

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

Sie können einen `catch`-Block verwenden, um alle Ausnahmen zu behandeln, die im
`try`-Block erzeugt werden könnten.

```js-nolint
catch (exception) {
  statements
}
```

Der `catch`-Block spezifiziert einen Bezeichner (`exception`
im vorstehenden Syntaxbeispiel), der den durch die `throw`-
Anweisung angegebenen Wert enthält. Sie können diesen Bezeichner verwenden, um Informationen über die geworfene Ausnahme zu
erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block betreten wird. Der
Bezeichner existiert nur während der Ausführungsdauer des `catch`-Blocks. Nach dem
Ende des `catch`-Blocks existiert der Bezeichner nicht mehr.

Zum Beispiel wirft der folgende Code eine Ausnahme. Wenn die Ausnahme auftritt, wird die
Kontrolle auf den `catch`-Block übertragen.

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
> eines `catch`-Blocks wird die Verwendung von `console.error()` anstelle von
> `console.log()` zum Debuggen empfohlen. Es formatiert die Nachricht als
> Fehler und fügt sie der Liste der von der Seite generierten Fehlermeldungen hinzu.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ den
`try`- und `catch`-Blöcken ausgeführt werden. Außerdem wird der
`finally`-Block _vor_ dem Code ausgeführt, der der
`try…catch…finally`-Anweisung folgt.

Es ist auch wichtig zu beachten, dass der `finally`-Block ausgeführt wird,
_unabhängig davon_, ob eine Ausnahme geworfen wird oder nicht. Wenn jedoch eine
Ausnahme geworfen wird, werden die Anweisungen im `finally`-Block ausgeführt, auch wenn der
`catch`-Block die geworfene Ausnahme nicht behandelt.

Sie können den `finally`-Block verwenden, um das Skript bei einer
Ausnahme fehlerfrei zu beenden. Beispielsweise müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript
belegt hat.

Im folgenden Beispiel wird eine Datei geöffnet und dann Anweisungen ausgeführt, die die Datei
verwenden. (Serverseitiges JavaScript ermöglicht Ihnen den Zugriff auf Dateien.) Wird während der
Dateiöffnung eine Ausnahme geworfen, schließt der `finally`-Block die Datei,
bevor das Skript fehlschlägt. Durch die Verwendung von `finally` wird _sichergestellt_,
dass die Datei niemals offen bleibt, selbst wenn ein Fehler auftritt.

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

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert
der gesamten `try…catch…finally`-Produktion, unabhängig von
irgendwelchen `return`-Anweisungen in den `try`- und `catch`-Blöcken:

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

Das Überschreiben von Rückgabewerten durch den `finally`-Block gilt auch für
Ausnahmen, die im `catch`-Block geworfen oder neu geworfen werden:

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

Wenn ein innerer `try`-Block _keinen_ entsprechenden
`catch`-Block hat:

1. _muss_ er einen `finally`-Block enthalten, und
2. der `catch`-Block der umschließenden `try...catch`-Anweisung wird
   auf eine Übereinstimmung überprüft.

Für weitere Informationen siehe [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks)
auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)
Referenzseite.

### Verwendung von Error-Objekten

Je nach Art des Fehlers können Sie möglicherweise die Eigenschaften `name` und
`message` verwenden, um eine genauere Nachricht zu erhalten.

Die Eigenschaft `name` gibt die allgemeine Klasse des `Error` an (wie
`DOMException` oder `Error`), während `message`
in der Regel eine prägnantere Nachricht liefert, als wenn das Fehlerobjekt in einen String
umgewandelt wird.

Wenn Sie Ihre eigenen Ausnahmen werfen, um diese Eigenschaften nutzen zu können
(wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und System-
Ausnahmen unterscheidet), können Sie den `Error`-Konstruktor verwenden.

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
