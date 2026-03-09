---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 203acfabc8a27b2a64757df33586b3c29abb730f
---

Die **`try...catch`** Anweisung besteht aus einem `try` Block und entweder einem `catch` Block, einem `finally` Block oder beidem. Der Code im `try` Block wird zuerst ausgeführt, und wenn er eine Ausnahme auslöst, wird der Code im `catch` Block ausgeführt. Der Code im `finally` Block wird immer vor dem Verlassen der gesamten Konstruktion ausgeführt.

{{InteractiveExample("JavaScript Demo: try...catch statement")}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
```

## Syntax

```js-nolint
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```

- `tryStatements`
  - : Die Anweisungen, die ausgeführt werden sollen.
- `catchStatements`
  - : Anweisung, die ausgeführt wird, wenn im `try` Block eine Ausnahme ausgelöst wird.
- `exceptionVar` {{optional_inline}}
  - : Ein optionaler [Identifier oder ein Muster](#catch_bindung) zum Halten der gefangenen Ausnahme für den zugehörigen `catch` Block. Wenn der `catch` Block den Wert der Ausnahme nicht verwendet, können Sie `exceptionVar` und seine umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor der Kontrollfluss die `try...catch...finally` Konstruktion verlässt. Diese Anweisungen werden ausgeführt, unabhängig davon, ob eine Ausnahme ausgelöst oder gefangen wurde.

## Beschreibung

Die `try` Anweisung beginnt immer mit einem `try` Block. Danach muss ein `catch` Block oder ein `finally` Block vorhanden sein. Es ist auch möglich, sowohl `catch` als auch `finally` Blöcke zu haben. Dies gibt uns drei Formen für die `try` Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstruktionen wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) müssen die `try`, `catch` und `finally` Blöcke _Blöcke_ sein, anstatt einzelner Anweisungen.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch` Block enthält Anweisungen, die festlegen, was zu tun ist, wenn im `try` Block eine Ausnahme ausgelöst wird. Wenn eine beliebige Anweisung im `try` Block (oder in einer aus dem `try` Block aufgerufenen Funktion) eine Ausnahme auslöst, wird der Kontrollfluss sofort auf den `catch` Block verschoben. Wenn im `try` Block keine Ausnahme ausgelöst wird, wird der `catch` Block übersprungen.

Der `finally` Block wird immer ausgeführt, bevor der Kontrollfluss die `try...catch...finally` Konstruktion verlässt. Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme ausgelöst oder gefangen wurde.

Sie können eine oder mehrere `try` Anweisungen verschachteln. Wenn eine innere `try` Anweisung keinen `catch` Block hat, wird stattdessen der `catch` Block der umschließenden `try` Anweisung verwendet.

Sie können die `try` Anweisung auch zur Behandlung von JavaScript-Ausnahmen verwenden. Siehe den [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements) für weitere Informationen zu JavaScript-Ausnahmen.

### Catch Bindung

Wenn im `try` Block eine Ausnahme ausgelöst wird, hält `exceptionVar` (d.h. das `e` in `catch (e)`) den Ausnahme-Wert. Sie können diese {{Glossary("binding", "Bindung")}} verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten. Diese {{Glossary("binding", "Bindung")}} ist nur im {{Glossary("Scope", "Scope")}} des `catch` Blocks verfügbar.

Es muss kein einzelner Identifier sein. Sie können ein [Destrukturierungs-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere Identifier auf einmal zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die Bindungen, die durch die `catch` Klausel erstellt werden, existieren im selben Scope wie der `catch` Block, sodass jede im `catch` Block deklarierte Variable nicht denselben Namen wie die durch die `catch` Klausel erstellten Bindungen haben kann. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber es ist eine veraltete Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahmebindung ist beschreibbar. Sie können beispielsweise den Ausnahmewert normalisieren, um sicherzustellen, dass es sich um ein {{jsxref("Error")}} Objekt handelt.

```js
try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

Wenn Sie den Ausnahmewert nicht benötigen, können Sie ihn zusammen mit den umgebenden Klammern weglassen.

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### Der finally Block

Der `finally` Block enthält Anweisungen, die nach Ausführung des `try` Blocks und der `catch` Blöcke, jedoch vor den Anweisungen nach dem `try...catch...finally` Block ausgeführt werden. Der Kontrollfluss wird immer in den `finally` Block gelangen und kann auf eine der folgenden Arten fortsetzen:

- Unmittelbar nachdem der Kontrollfluss den `try` Block in einer `try...finally` Konstruktion verlässt (entweder nach der letzten Anweisung oder einer `throw`, `return`, `break` oder `continue` Anweisung);
- Unmittelbar nachdem der Kontrollfluss den `catch` Block in einer `try...catch...finally` Konstruktion verlässt;
- Unmittelbar nachdem der Kontrollfluss den `try` Block in einer `try...catch...finally` Konstruktion verlässt, es sei denn, er verlässt ihn über eine `throw` Anweisung (in diesem Fall gelangt der Kontrollfluss zuerst in den `catch` Block).

Wenn der `finally` Block nach einer Kontrollflussanweisung (`return`, `throw`, `break`, `continue`) im `try` oder `catch` Block betreten wird, wird die Wirkung dieser Anweisung bis nach der letzten im `finally` Block ausgeführten Anweisung aufgeschoben. Wenn beispielsweise eine Ausnahme aus dem `try` Block ausgelöst wird, selbst wenn es keinen `catch` Block gibt, um die Ausnahme zu behandeln, wird der `finally` Block dennoch ausgeführt, und die Ausnahme wird sofort nach Abschluss des `finally` Blocks ausgelöst.

Es gibt jedoch eine Ausnahme von dieser Regel: Wenn die letzte Anweisung im `finally` Block selbst eine Kontrollflussanweisung ist, wird diese Anweisung die Wirkung der vorherigen aufheben (kein Aufschub); siehe [Rückgabe aus einem `finally` Block](#rückgabe_aus_einem_finally_block) für Beispiele. Es ist im Allgemeinen eine schlechte Idee, Kontrollflussanweisungen (`return`, `throw`, `break`, `continue`) im `finally` Block zu verwenden, da sie die Wirkung von zuvor ausgeführten Kontrollflussanweisungen überschreiben können, was selten beabsichtigt ist. Meistens sollte der `finally` Block für Bereinigungscode reserviert werden, der die Hauptlogik nicht verändert.

## Beispiele

### Unbedingter catch Block

Wenn ein `catch` Block verwendet wird, wird der `catch` Block ausgeführt, wenn eine Ausnahme aus dem `try` Block ausgelöst wird. Zum Beispiel, wenn im folgenden Code die Ausnahme auftritt, wird der Kontrollfluss zum `catch` Block übertragen.

```js
try {
  throw new Error("My exception"); // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

Der `catch` Block gibt einen Bezeichner an (`e` im obigen Beispiel), der den Wert der Ausnahme hält; dieser Wert ist nur im {{Glossary("Scope", "Scope")}} des `catch` Blocks verfügbar.

### Bedingte catch Blöcke

Sie können "Bedingte `catch` Blöcke" erstellen, indem Sie `try...catch` Blöcke mit `if...else if...else` Strukturen kombinieren, wie folgt:

```js
try {
  myRoutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}
```

Eine häufige Verwendung dafür ist, nur eine kleine Teilmenge erwarteter Fehler abzufangen (und zum Schweigen zu bringen) und dann im Falle anderer Fehler den Fehler erneut auszulösen:

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
  } else {
    throw e; // re-throw the error unchanged
  }
}
```

Dies kann die Syntax anderer Sprachen, wie Java, nachahmen:

```java
try {
  myRoutine();
} catch (RangeError e) {
  // statements to handle this very common expected error
}
// Other errors are implicitly re-thrown
```

### Verschachtelte try Blöcke

Sehen wir zunächst, was passiert:

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "finally"
// "outer" "oops"
```

Nun, wenn wir die Ausnahme im inneren `try` Block bereits abgefangen haben, indem wir einen `catch` Block hinzugefügt haben:

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"
```

Und nun, lassen Sie uns den Fehler erneut auslösen.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Eine gegebene Ausnahme wird nur einmal durch den nächstgelegenen umschließenden `catch` Block abgefangen, es sei denn, sie wird erneut ausgelöst. Natürlich werden alle neuen im "inneren" Block auftretenden Ausnahmen (weil der Code im `catch` Block etwas tun kann, das eine Ausnahme auslöst) durch den "äußeren" Block abgefangen.

### Ressourcenbereinigung mit finally

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally` Block. Der Code öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden; der `finally` Block stellt sicher, dass die Datei immer geschlossen wird, nachdem sie verwendet wurde, selbst wenn eine Ausnahme ausgelöst wurde.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
  // any uncaught exception is deferred here
}
```

Auf dieselbe Weise wird die Wirkung einer `return` Anweisung im `try` Block am Ende des `finally` Blocks aufgeschoben, obwohl der Return-Wert-Ausdruck ausgewertet wird, bevor der `finally` Block betreten wird.

```js
function safeWriteMyFile() {
  openMyFile();
  try {
    return writeMyFile(theData); // function call is evaluated
  } finally {
    closeMyFile(); // always close the resource
    // return is deferred here
  }
}
```

### Rückgabe aus einem finally Block

Das folgende Beispiel zeigt, wie Kontrollflussanweisungen im `finally` Block sich verhalten. Wenn der Kontrollfluss den `try` Block über die erste `return` Anweisung verlässt, wird der Return-Wert Ausdruck (`order.sort()`) ausgewertet, bevor der `finally` Block betreten wird, und die Funktion ist geplant, diesen Wert nach Abschluss des `finally` Blocks zurückzugeben. Jedoch überschreibt die `return` Anweisung im `finally` Block die Wirkung der vorherigen `return` Anweisung, einschließlich deren Rückgabewert.

```js
function doIt() {
  const order = ["z"];
  try {
    order.push("try");
    return order.sort(); // "z" is now after "try"
  } finally {
    order.push("finally");
    return order;
  }
}
doIt();
// returns ["try", "z", "finally"], not ["finally", "try", "z"] or ["try", "z"]
```

Die gleiche Logik gilt für andere Kontrollflussanweisungen. Hier ist die Funktion zunächst geplant, den Wert `"catch"` auszulösen, gibt jedoch stattdessen den Wert `"finally"` zurück.

```js
function doIt() {
  try {
    throw "try"; // makes control flow enter the `catch` block
  } catch {
    throw "catch"; // makes control flow enter the `finally` block
  } finally {
    return "finally"; // returns "finally" instead of throwing "catch"
  }
}
doIt(); // returns "finally"
```

Wieder einmal werden Kontrollflussanweisungen im `finally` Block entmutigt, da dieser Effekt wahrscheinlich nicht beabsichtigt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
