---
title: Kontrollfluss und Fehlerbehandlung
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("JavaScript Guide")}}
{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript unterstützt eine kompakte Menge an Anweisungen, insbesondere Kontrollflussanweisungen, die Sie verwenden können, um Ihrem Anwendung eine große Menge an Interaktivität zu verleihen. Dieses Kapitel bietet einen Überblick über diese Anweisungen.

Das [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference/Statements) enthält umfassende Details zu den in diesem Kapitel beschriebenen Anweisungen. Das Semikolon (`;`) Zeichen wird verwendet, um Anweisungen im JavaScript-Code zu trennen.

Jeder JavaScript-Ausdruck ist auch eine Anweisung. Siehe [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators) für vollständige Informationen über Ausdrücke.

## Blockanweisung

Die grundlegendste Anweisung ist eine _Blockanweisung_, die verwendet wird, um Anweisungen zu gruppieren. Der Block wird durch geschweifte Klammern begrenzt:

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

> **Hinweis:** [`var`](/de/docs/Web/JavaScript/Reference/Statements/var)-deklarierte Variablen sind nicht block-skopiert, sondern skopiert auf die enthaltene Funktion oder das Skript, und die Effekte ihrer Festlegung bestehen über den Block hinaus. Zum Beispiel:
>
> ```js
> var x = 1;
> {
>   var x = 2;
> }
> console.log(x); // 2
> ```
>
> Dies ergibt `2`, da die `var x`-Anweisung im Block im selben Scope wie die `var x`-Anweisung vor dem Block ist. (In C oder Java würde der äquivalente Code `1` ausgeben.)
>
> Dieser Scoping-Effekt kann durch die Verwendung von {{jsxref("Statements/let", "let")}} oder {{jsxref("Statements/const", "const")}} gemindert werden.

## Bedingte Anweisungen

Eine bedingte Anweisung ist eine Menge von Befehlen, die ausgeführt werden, wenn eine bestimmte Bedingung wahr ist. JavaScript unterstützt zwei bedingte Anweisungen: `if...else` und `switch`.

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

Hierbei kann die `condition` jeder Ausdruck sein, der zu `true` oder `false` evaluiert wird. (Siehe [Boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#description) für eine Erklärung, was zu `true` und `false` evaluiert wird.)

Wenn die `condition` zu `true` evaluiert wird, wird `statement_1` ausgeführt. Andernfalls wird `statement_2` ausgeführt. `statement_1` und `statement_2` können jede Anweisung sein, einschließlich weiterer verschachtelter `if`-Anweisungen.

Sie können die Anweisungen auch mit `else if` zusammenfassen, um mehrere Bedingungen in Folge zu prüfen, wie folgt:

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

Im Falle mehrerer Bedingungen wird nur die erste logische Bedingung, die zu `true` auswertet, ausgeführt. Um mehrere Anweisungen auszuführen, gruppieren Sie diese innerhalb einer Blockanweisung (`{ /* … */ }`).

#### Beste Praxis

Im Allgemeinen ist es eine gute Praxis, immer Blockanweisungen zu verwenden—_besonders_ beim Verschachteln von `if`-Anweisungen:

```js
if (condition) {
  // Anweisungen, wenn die Bedingung wahr ist
  // …
} else {
  // Anweisungen, wenn die Bedingung falsch ist
  // …
}
```

Im Allgemeinen ist es ratsam, kein `if...else` mit einer Zuweisung wie `x = y` als Bedingung zu haben:

```js-nolint example-bad
if (x = y) {
  // hier Anweisungen
}
```

Wenn Sie sich jedoch in dem seltenen Fall befinden, etwas Derartiges tun zu wollen, hat die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Dokumentation einen Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit Richtlinien für eine allgemein bekannte Best-Practice-Syntax, die Sie kennen und befolgen sollten.

#### Falsy-Werte

Die folgenden Werte evaluieren zu `false` (auch als [Falsy](/de/docs/Glossary/Falsy) Werte bekannt):

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- die leere Zeichenkette (`""`)

Alle anderen Werte—einschließlich aller Objekte—evaluieren zu `true`, wenn sie an eine bedingte Anweisung übergeben werden.

> [!NOTE]
> Verwechseln Sie nicht die primitiven booleschen Werte
> `true` und `false` mit den true- und false-Werten des
> {{jsxref("Boolean")}} Objekts!
>
> Zum Beispiel:
>
> ```js
> const b = new Boolean(false);
> if (b) {
>   // diese Bedingung evaluiert zu true
> }
> if (b == true) {
>   // diese Bedingung evaluiert zu false
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
      `Geben Sie genau drei Zeichen ein. ${document.form1.threeChar.value} ist ungültig.`,
    );
    return false;
  }
}
```

### switch-Anweisung

Eine `switch`-Anweisung ermöglicht es einem Programm, einen Ausdruck auszuwerten und zu versuchen, den Wert des Ausdrucks einem `case`-Label zuzuordnen. Wenn eine Übereinstimmung gefunden wird, führt das Programm die zugehörige Anweisung aus.

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

JavaScript wertet die obige switch-Anweisung wie folgt aus:

- Das Programm sucht zuerst nach einer `case`-Klausel mit einem Label, das dem Wert des Ausdrucks entspricht, und überträgt dann die Kontrolle an diese Klausel, um die zugehörigen Anweisungen auszuführen.
- Wenn kein übereinstimmendes Label gefunden wird, sucht das Programm nach der optionalen `default`-Klausel:

  - Wenn eine `default`-Klausel gefunden wird, überträgt das Programm die Kontrolle an diese Klausel und führt die zugehörigen Anweisungen aus.
  - Wenn keine `default`-Klausel gefunden wird, wird das Programm an der Anweisung fortgesetzt, die dem Ende des `switch` folgt.
  - (Üblicherweise wird die `default`-Klausel als letzte Klausel geschrieben, aber das muss nicht so sein.)

#### break-Anweisungen

Die optionale `break`-Anweisung in Verbindung mit jeder `case`-Klausel sorgt dafür, dass das Programm aus dem `switch` ausbricht, sobald die übereinstimmende Anweisung ausgeführt wurde, und dann die Ausführung bei der Anweisung nach `switch` fortsetzt. Wenn `break` weggelassen wird, wird das Programm die Ausführung innerhalb der `switch`-Anweisung fortsetzen (und die Anweisungen unter dem nächsten `case` ausführen, und so weiter).

##### Beispiel

Im folgenden Beispiel, wenn `fruitType` zu `'Bananas'` ausgewertet wird, ordnet das Programm den Wert dem Fall `'Bananas'` zu und führt die zugehörige Anweisung aus. Wenn `break` erreicht wird, verlässt das Programm die `switch`-Anweisung und setzt die Ausführung ab der Anweisung nach `switch` fort. Wenn `break` weggelassen würde, würde auch die Anweisung für `case 'Cherries'` ausgeführt werden.

```js
switch (fruitType) {
  case "Oranges":
    console.log("Orangen kosten $0.59 pro Pfund.");
    break;
  case "Apples":
    console.log("Äpfel kosten $0.32 pro Pfund.");
    break;
  case "Bananas":
    console.log("Bananen kosten $0.48 pro Pfund.");
    break;
  case "Cherries":
    console.log("Kirschen kosten $3.00 pro Pfund.");
    break;
  case "Mangoes":
    console.log("Mangos kosten $0.56 pro Pfund.");
    break;
  case "Papayas":
    console.log("Mangos und Papayas kosten $2.79 pro Pfund.");
    break;
  default:
    console.log(`Entschuldigung, wir haben kein ${fruitType}.`);
}
console.log("Möchten Sie noch etwas anderes?");
```

## Fehlerbehandlungsanweisungen

Sie können Ausnahmen mit der `throw`-Anweisung werfen und sie mit den `try...catch`-Anweisungen abfangen.

- [`throw`-Anweisung](#throw-anweisung)
- [`try...catch`-Anweisung](#try...catch_statement)

### Ausnahmearten

Praktisch jedes Objekt kann in JavaScript geworfen werden. Dennoch sind nicht alle geworfenen Objekte gleichwertig. Während es üblich ist, Zahlen oder Zeichenketten als Fehler zu werfen, ist es häufig effektiver, einen der speziell zu diesem Zweck erstellten Ausnahmetypen zu verwenden:

- [ECMAScript-Ausnahmen](/de/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)
- [`DOMException`](/de/docs/Web/API/DOMException)

### throw-Anweisung

Verwenden Sie die `throw`-Anweisung, um eine Ausnahme zu werfen. Eine `throw`-Anweisung gibt den Wert an, der geworfen werden soll:

```js
throw expression;
```

Sie können jeden Ausdruck werfen, nicht nur Ausdrücke eines bestimmten Typs. Der folgende Code wirft mehrere Ausnahmen verschiedener Typen:

```js
throw "Fehler2"; // String-Typ
throw 42; // Number-Typ
throw true; // Boolean-Typ
throw {
  toString() {
    return "Ich bin ein Objekt!";
  },
};
```

### `try...catch`-Anweisung

Die `try...catch`-Anweisung markiert einen Block von Anweisungen, die versucht werden sollen, und spezifiziert eine oder mehrere Reaktionen, sollte eine Ausnahme geworfen werden. Wenn eine Ausnahme geworfen wird, fängt die `try...catch`-Anweisung diese ab.

Die `try...catch`-Anweisung besteht aus einem `try`-Block, der eine oder mehrere Anweisungen enthält, und einem `catch`-Block, der Anweisungen enthält, die spezifizieren, was zu tun ist, wenn eine Ausnahme im `try`-Block geworfen wird.

Mit anderen Worten, Sie möchten, dass der `try`-Block erfolgreich ist—aber wenn nicht, soll die Kontrolle an den `catch`-Block übergeben werden. Wenn eine Anweisung innerhalb des `try`-Blocks (oder in einer Funktion, die aus dem `try`-Block aufgerufen wird) eine Ausnahme auslöst, wird die Kontrolle _sofort_ an den `catch`-Block übertragen. Wenn im `try`-Block keine Ausnahme geworfen wird, wird der `catch`-Block übersprungen. Der `finally`-Block wird ausgeführt, nachdem die `try`- und `catch`-Blöcke ausgeführt wurden, aber bevor die Anweisungen, die der `try...catch`-Anweisung folgen, ausgeführt werden.

Das folgende Beispiel verwendet eine `try...catch`-Anweisung. Das Beispiel ruft eine Funktion auf, die einen Monatsnamen aus einem Array basierend auf dem Wert, der an die Funktion übergeben wird, abruft. Wenn der Wert keiner Monatsnummer (`1` – `12`) entspricht, wird eine Ausnahme mit dem Wert `'InvalidMonthNo'` geworfen und die Anweisungen im `catch`-Block setzen die Variable `monthName` auf `'unknown'`.

```js-nolint
function getMonthName(mo) {
  mo--; // Monatsnummer für Array-Index anpassen (sodass 0 = Jan, 11 = Dez)
  const months = [
    "Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
    "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw new Error("InvalidMonthNo"); // hier wird das throw-Schlüsselwort verwendet
  }
}

try {
  // zu versuchende Anweisungen
  monthName = getMonthName(myMonth); // Funktion könnte Ausnahme werfen
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // Ausnahmeobjekt an Fehler-Handler übergeben (d. h. Ihre eigene Funktion)
}
```

#### Der catch-Block

Sie können einen `catch`-Block verwenden, um alle Ausnahmen zu behandeln, die im `try`-Block entstehen könnten.

```js-nolint
catch (exception) {
  statements
}
```

Der `catch`-Block spezifiziert einen Bezeichner (`exception` in der vorhergehenden Syntax), der den Wert enthält, der durch die `throw`-Anweisung angegeben wurde. Sie können diesen Bezeichner verwenden, um Informationen über die geworfene Ausnahme zu erhalten.

JavaScript erstellt diesen Bezeichner, wenn der `catch`-Block aktiviert wird. Der Bezeichner existiert nur für die Dauer des `catch`-Blocks. Sobald der `catch`-Block die Ausführung beendet hat, existiert der Bezeichner nicht mehr.

Zum Beispiel wirft der folgende Code eine Ausnahme aus. Wenn die Ausnahme auftritt, wird die Kontrolle an den `catch`-Block übertragen.

```js
try {
  throw "myException"; // erzeugt eine Ausnahme
} catch (err) {
  // Anweisungen zur Behandlung etwaiger Ausnahmen
  logMyErrors(err); // Ausnahmeobjekt an Fehler-Handler übergeben
}
```

> [!NOTE]
> Beim Protokollieren von Fehlern in der Konsole innerhalb eines `catch`-Blocks wird empfohlen, `console.error()` statt `console.log()` für Debugging zu verwenden. Es formatiert die Nachricht als Fehler und fügt sie der Liste der vom Seite erzeugten Fehlermeldungen hinzu.

#### Der finally-Block

Der `finally`-Block enthält Anweisungen, die _nach_ den `try`- und `catch`-Blöcken ausgeführt werden sollen. Darüber hinaus wird der `finally`-Block _vor_ dem Code ausgeführt, der auf die `try…catch…finally`-Anweisung folgt.

Es ist ebenso wichtig zu beachten, dass der `finally`-Block ausgeführt wird, _unabhängig davon_, ob eine Ausnahme geworfen wird. Wenn jedoch eine Ausnahme geworfen wird, führen die Anweisungen im `finally`-Block aus, auch wenn kein `catch`-Block die geworfene Ausnahme behandelt.

Sie können den `finally`-Block verwenden, um Ihr Skript bei Auftreten einer Ausnahme kontrolliert scheitern zu lassen. Zum Beispiel müssen Sie möglicherweise eine Ressource freigeben, die Ihr Skript belegt hat.

Das folgende Beispiel öffnet eine Datei und führt dann Anweisungen aus, die die Datei nutzen. (Serverseitiges JavaScript erlaubt den Zugriff auf Dateien.) Wenn während der Dateiöffnung eine Ausnahme ausgelöst wird, schließt der `finally`-Block die Datei, bevor das Skript fehlschlägt. Die Verwendung von `finally` hier _stellt sicher_, dass die Datei niemals offen bleibt, auch wenn ein Fehler auftritt.

```js
openMyFile();
try {
  writeMyFile(theData); // Dies kann einen Fehler auslösen
} catch (e) {
  handleError(e); // Wenn ein Fehler aufgetreten ist, behandeln
} finally {
  closeMyFile(); // Immer die Ressource schließen
}
```

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try…catch…finally`-Produktion, unabhängig von irgendwelchen `return`-Anweisungen in den `try`- und `catch`-Blöcken:

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    // Diese return-Anweisung wird ausgesetzt
    // bis der finally-Block abgeschlossen ist
    return true;
    console.log(2); // nicht erreichbar
  } finally {
    console.log(3);
    return false; // überschreibt das vorherige "return"
    console.log(4); // nicht erreichbar
  }
  // "return false" wird jetzt ausgeführt
  console.log(5); // nicht erreichbar
}
console.log(f()); // 0, 1, 3, false
```

Das Überschreiben von Rückgabewerten durch den `finally`-Block gilt auch für Ausnahmen, die im `catch`-Block geworfen oder erneut geworfen werden:

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('innere "bogus" gefangen');
    // Diese throw-Anweisung wird ausgesetzt
    // bis der finally-Block abgeschlossen ist
    throw e;
  } finally {
    return false; // überschreibt das vorherige "throw"
  }
  // "return false" wird jetzt ausgeführt
}

try {
  console.log(f());
} catch (e) {
  // das wird nie erreicht!
  // während f() ausgeführt wird, gibt der `finally`-Block false zurück,
  // was das `throw` im oben genannten `catch` überschreibt
  console.log('äußere "bogus" gefangen');
}

// Protokoll:
// innere "bogus" gefangen
// false
```

#### Verschachtelung von try...catch-Anweisungen

Sie können eine oder mehrere `try...catch`-Anweisungen verschachteln.

Wenn ein innerer `try`-Block keinen entsprechenden `catch`-Block hat:

1. muss er einen `finally`-Block enthalten, und
2. der `catch`-Block der umgebenden `try...catch`-Anweisung wird auf eine Übereinstimmung überprüft.

Weitere Informationen finden Sie unter [verschachtelte try-Blöcke](/de/docs/Web/JavaScript/Reference/Statements/try...catch#nested_try_blocks) auf der [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Referenzseite.

### Nutzung von Error-Objekten

Abhängig von der Art des Fehlers können Sie möglicherweise die Eigenschaften `name` und `message` verwenden, um eine verfeinerte Nachricht zu erhalten.

Die `name`-Eigenschaft gibt die allgemeine Klasse des `Error` an (wie `DOMException` oder `Error`), während `message` im Allgemeinen eine prägnantere Nachricht liefert, als man durch die Umwandlung des Fehlerobjekts in eine Zeichenkette erhalten würde.

Wenn Sie Ihre eigenen Ausnahmen werfen, um von diesen Eigenschaften zu profitieren (zum Beispiel wenn Ihr `catch`-Block nicht zwischen Ihren eigenen Ausnahmen und Systemausnahmen unterscheidet), können Sie den `Error`-Konstruktor verwenden.

Zum Beispiel:

```js
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("Die Nachricht");
  } else {
    doSomethingToGetAJavaScriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Jetzt verwenden wir tatsächlich `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'Die Nachricht', oder eine JavaScript-Fehlermeldung
}
```

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
