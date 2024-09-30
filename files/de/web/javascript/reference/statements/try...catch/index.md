---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

{{jsSidebar("Statements")}}

Die **`try...catch`** Anweisung besteht aus einem `try` Block und entweder einem `catch` Block, einem `finally` Block oder beiden. Der Code im `try` Block wird zuerst ausgeführt, und wenn er eine Ausnahme wirft, wird der Code im `catch` Block ausgeführt. Der Code im `finally` Block wird immer ausgeführt, bevor der Kontrollfluss das gesamte Konstrukt verlässt.

{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}

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
  - : Anweisung, die ausgeführt wird, wenn eine Ausnahme im `try` Block geworfen wird.
- `exceptionVar` {{optional_inline}}
  - : Ein optionaler [Bezeichner oder ein Muster](#catch-bindung), um die gefangene Ausnahme für den zugehörigen `catch` Block zu halten. Wenn der `catch` Block den Wert der Ausnahme nicht verwendet, können Sie `exceptionVar` und seine umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor der Kontrollfluss das `try...catch...finally` Konstrukt verlässt. Diese Anweisungen werden unabhängig davon ausgeführt, ob eine Ausnahme geworfen oder gefangen wurde.

## Beschreibung

Die `try` Anweisung beginnt immer mit einem `try` Block. Dann muss ein `catch` Block oder ein `finally` Block vorhanden sein. Es ist auch möglich, sowohl `catch` als auch `finally` Blöcke zu haben. Dies gibt uns drei Formen für die `try` Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstrukten wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) müssen die `try`, `catch`, und `finally` Blöcke _Blöcke_ sein, anstatt einzelner Anweisungen.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch` Block enthält Anweisungen, die angeben, was zu tun ist, wenn eine Ausnahme im `try` Block geworfen wird. Wenn eine Ausnahme innerhalb des `try` Blocks (oder in einer Funktion, die vom `try` Block aufgerufen wird) geworfen wird, wird die Kontrolle sofort auf den `catch` Block umgeschaltet. Wenn keine Ausnahme im `try` Block geworfen wird, wird der `catch` Block übersprungen.

Der `finally` Block wird immer ausgeführt, bevor der Kontrollfluss das `try...catch...finally` Konstrukt verlässt. Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme geworfen oder gefangen wurde.

Sie können einen oder mehrere geschachtelte `try` Anweisungen verwenden. Wenn eine innere `try` Anweisung keinen `catch` Block hat, wird der `catch` Block der umgebenden `try` Anweisung stattdessen verwendet.

Sie können die `try` Anweisung auch verwenden, um JavaScript-Ausnahmen zu behandeln. Weitere Informationen zu JavaScript-Ausnahmen finden Sie im [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

### Catch-Bindung

Wenn eine Ausnahme im `try` Block geworfen wird, hält `exceptionVar` (d. h. das `e` in `catch (e)`) den Ausnahme-Wert. Sie können diese [Bindung](/de/docs/Glossary/binding) verwenden, um Informationen über die geworfene Ausnahme zu erhalten. Diese [Bindung](/de/docs/Glossary/binding) ist nur im [Gültigkeitsbereich](/de/docs/Glossary/Scope) des `catch` Blocks verfügbar.

Es muss nicht ein einzelner Bezeichner sein. Sie können ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere Bezeichner auf einmal zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die Bindungen, die durch die `catch` Klausel erstellt werden, leben im selben Gültigkeitsbereich wie der `catch` Block, sodass keine in der `catch` Block deklarierten Variablen denselben Namen wie die durch die `catch` Klausel erstellten Bindungen haben können. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber es ist eine veraltete Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahmebindung ist schreibbar. Zum Beispiel möchten Sie möglicherweise den Ausnahme-Wert normalisieren, um sicherzustellen, dass es sich um ein {{jsxref("Error")}} Objekt handelt.

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

Wenn Sie den Ausnahme-Wert nicht benötigen, können Sie ihn zusammen mit den einschließenden Klammern weglassen.

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

Der `finally` Block enthält Anweisungen, die nach dem `try` Block und `catch` Block(s) ausgeführt werden, aber vor den Anweisungen, die auf den `try...catch...finally` Block folgen. Der Kontrollfluss wird immer in den `finally` Block eintreten, was auf eine der folgenden Arten geschehen kann:

- Unmittelbar nachdem der `try` Block seine Ausführung normal beendet hat (und keine Ausnahmen geworfen wurden);
- Unmittelbar nachdem der `catch` Block seine Ausführung normal beendet hat;
- Unmittelbar vor der Ausführung einer Kontrollflussanweisung (`return`, `throw`, `break`, `continue`) im `try` Block oder `catch` Block, die diesen Block verlassen würde.

Wenn eine Ausnahme aus dem `try` Block geworfen wird, auch wenn kein `catch` Block vorhanden ist, um die Ausnahme zu behandeln, wird der `finally` Block trotzdem ausgeführt, wobei die Ausnahme sofort nach der Ausführung des `finally` Blocks erneut geworfen wird.

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally` Block. Der Code öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden; der `finally` Block stellt sicher, dass die Datei immer geschlossen wird, nachdem sie verwendet wurde, selbst wenn eine Ausnahme geworfen wurde.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

Kontrollflussanweisungen (`return`, `throw`, `break`, `continue`) im `finally` Block werden jeden Abschlusswert des `try` Blocks oder `catch` Blocks "verbergen". In diesem Beispiel versucht der `try` Block, 1 zurückzugeben, aber bevor die Rückgabe erfolgt, wird der Kontrollfluss zuerst dem `finally` Block übergeben, sodass der Rückgabewert des `finally` Blocks stattdessen zurückgegeben wird.

```js
function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // returns 2
```

Es ist im Allgemeinen eine schlechte Idee, Kontrollflussanweisungen im `finally` Block zu haben. Verwenden Sie ihn nur für Aufräumcode.

## Beispiele

### Unbedingter Catch-Block

Wenn ein `catch` Block verwendet wird, wird der `catch` Block ausgeführt, wenn eine beliebige Ausnahme aus dem `try` Block heraus geworfen wird. Wenn z.B. die Ausnahme im folgenden Code auftritt, wird die Kontrolle an den `catch` Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

Der `catch` Block spezifiziert einen Bezeichner (`e` im obigen Beispiel), der den Wert der Ausnahme hält; dieser Wert ist nur im [Gültigkeitsbereich](/de/docs/Glossary/Scope) des `catch` Blocks verfügbar.

### Bedingte Catch-Blöcke

Sie können "Bedingte `catch` Blöcke" erstellen, indem Sie `try...catch` Blöcke mit `if...else if...else` Strukturen kombinieren, wie folgt:

```js
try {
  myroutine(); // may throw three types of exceptions
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

Ein häufiger Anwendungsfall hierfür ist, nur eine kleine Teilmenge erwarteter Fehler abzufangen (und zu ignorieren) und dann den Fehler in anderen Fällen erneut zu werfen:

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

### Geschachtelte Try-Blöcke

Zuerst, lassen Sie uns sehen, was mit diesem passiert:

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

Nun, wenn wir die Ausnahme bereits im inneren `try` Block gefangen haben, indem wir einen `catch` Block hinzufügen:

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

Und jetzt werfen wir den Fehler erneut.

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

Jede gegebene Ausnahme wird nur einmal vom nächstgelegenen einschließenden `catch` Block gefangen, es sei denn, sie wird erneut geworfen. Natürlich werden alle neuen Ausnahmen, die im "inneren" Block (weil der Code im `catch` Block etwas tun kann, das wirft) ausgelöst werden, vom "äußeren" Block gefangen.

### Rückgabe aus einem Finally-Block

Wenn der `finally` Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try-catch-finally` Anweisung, unabhängig von allen `return` Anweisungen in den `try` und `catch` Blöcken. Dies schließt auch Ausnahmen ein, die im `catch` Block geworfen wurden:

```js
(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// Logs:
// "inner" "oops"
// "finally"
```

Das äußere "oops" wird nicht geworfen, weil der Rückgabewert im `finally` Block liegt. Dasselbe würde für jeden Wert gelten, der aus dem `catch` Block zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
