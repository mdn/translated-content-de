---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`try...catch`**-Anweisung besteht aus einem `try`-Block und entweder einem `catch`-Block, einem `finally`-Block oder beidem. Der Code im `try`-Block wird zuerst ausgeführt und wenn er eine Ausnahme auslöst, wird der Code im `catch`-Block ausgeführt. Der Code im `finally`-Block wird immer ausgeführt, bevor der Kontrollfluss den gesamten Block verlässt.

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
  - : Anweisung, die ausgeführt wird, wenn im `try`-Block eine Ausnahme ausgelöst wird.
- `exceptionVar` {{optional_inline}}
  - : Ein optionaler [Bezeichner oder ein Muster](#catch-bindung), um die gefangene Ausnahme für den zugehörigen `catch`-Block zu speichern. Wenn der `catch`-Block den Wert der Ausnahme nicht verwendet, können Sie `exceptionVar` und die umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor der Kontrollfluss den `try...catch...finally`-Block verlässt. Diese Anweisungen werden unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder abgefangen wurde.

## Beschreibung

Die `try`-Anweisung beginnt immer mit einem `try`-Block. Dann muss ein `catch`-Block oder ein `finally`-Block vorhanden sein. Es ist auch möglich, sowohl `catch`- als auch `finally`-Blöcke zu haben. Dadurch ergeben sich drei Formen für die `try`-Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstrukten wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), müssen die `try`, `catch` und `finally` Blöcke _Blöcke_ und keine einzelnen Anweisungen sein.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch`-Block enthält Anweisungen, die festlegen, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird. Wenn eine Anweisung im `try`-Block (oder in einer von innerhalb des `try`-Blocks aufgerufenen Funktion) eine Ausnahme auslöst, wird der Kontrollfluss sofort auf den `catch`-Block umgeschaltet. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen.

Der `finally`-Block wird immer ausgeführt, bevor der Kontrollfluss den `try...catch...finally`-Block verlässt. Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme ausgelöst oder abgefangen wurde.

Sie können ein oder mehrere `try`-Anweisungen verschachteln. Wenn eine innere `try`-Anweisung keinen `catch`-Block hat, wird der `catch`-Block der umschließenden `try`-Anweisung stattdessen verwendet.

Sie können die `try`-Anweisung auch verwenden, um JavaScript-Ausnahmen zu behandeln. Sehen Sie sich den [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements) für weitere Informationen zu JavaScript-Ausnahmen an.

### Catch-Bindung

Wenn im `try`-Block eine Ausnahme ausgelöst wird, hält `exceptionVar` (d.h. das `e` in `catch (e)`) den Ausnahme-Wert. Sie können diese {{Glossary("binding", "Bindung")}} verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten. Diese {{Glossary("binding", "Bindung")}} ist nur im {{Glossary("Scope", "Gültigkeitsbereich")}} des `catch`-Blocks verfügbar.

Sie muss nicht ein einzelner Bezeichner sein. Sie können ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um mehrere Bezeichner gleichzeitig zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die durch die `catch`-Klausel erstellten Bindungen existieren im gleichen Gültigkeitsbereich wie der `catch`-Block, daher können Variablen, die im `catch`-Block deklariert werden, nicht denselben Namen wie die von der `catch`-Klausel erstellten Bindungen haben. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber das ist eine veraltete Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahmebindung ist beschreibbar. Zum Beispiel könnten Sie den Ausnahme-Wert normalisieren wollen, um sicherzustellen, dass es sich um ein {{jsxref("Error")}}-Objekt handelt.

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

Wenn Sie den Ausnahme-Wert nicht benötigen, können Sie ihn zusammen mit den umschließenden Klammern weglassen.

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

### Der finally-Block

Der `finally`-Block enthält Anweisungen, die nach der Ausführung der `try`- und `catch`-Blöcke ausgeführt werden, aber vor den Anweisungen, die auf den `try...catch...finally`-Block folgen. Der Kontrollfluss wird immer in den `finally`-Block eintreten, der auf eine der folgenden Arten fortgesetzt werden kann:

- Unmittelbar nachdem der `try`-Block die Ausführung normal beendet hat (und keine Ausnahmen ausgelöst wurden);
- Unmittelbar nachdem der `catch`-Block die Ausführung normal beendet hat;
- Unmittelbar bevor die Ausführung einer Kontrollfluss-Anweisung (`return`, `throw`, `break`, `continue`) im `try`-Block oder `catch`-Block, die den Block verlassen würde.

Wenn eine Ausnahme aus dem `try`-Block ausgelöst wird, selbst wenn es keinen `catch`-Block gibt, um die Ausnahme zu behandeln, wird der `finally`-Block dennoch ausgeführt, in welchem Fall die Ausnahme sofort nach dem Abschluss des `finally`-Blocks erneut ausgelöst wird.

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally`-Block. Der Code öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden; der `finally`-Block stellt sicher, dass die Datei immer geschlossen wird, nachdem sie verwendet wurde, selbst wenn eine Ausnahme ausgelöst wurde.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

Kontrollfluss-Anweisungen (`return`, `throw`, `break`, `continue`) im `finally`-Block werden jeden Abschlusswert des `try`-Blocks oder `catch`-Blocks "maskieren". In diesem Beispiel versucht der `try`-Block, 1 zu returnieren, aber bevor der Wert zurückgegeben wird, wird der Kontrollfluss zuerst an den `finally`-Block übergeben, daher wird der Rückgabewert des `finally`-Blocks stattdessen zurückgegeben.

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

Es ist im Allgemeinen eine schlechte Idee, Kontrollfluss-Anweisungen im `finally`-Block zu haben. Verwenden Sie ihn nur für Bereinigungscode.

## Beispiele

### Unbedingter catch-Block

Wenn ein `catch`-Block verwendet wird, wird der `catch`-Block ausgeführt, wenn eine Ausnahme von innerhalb des `try`-Blocks ausgelöst wird. Zum Beispiel wird, wenn die Ausnahme im folgenden Code auftritt, der Kontrollfluss auf den `catch`-Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

Der `catch`-Block gibt einen Bezeichner an (`e` im obigen Beispiel), der den Wert der Ausnahme enthält; dieser Wert ist nur im {{Glossary("Scope", "Gültigkeitsbereich")}} des `catch`-Blocks verfügbar.

### Bedingte catch-Blöcke

Sie können "Bedingte `catch`-Blöcke" erstellen, indem Sie `try...catch`-Blöcke mit `if...else if...else`-Strukturen kombinieren, wie folgt:

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

Ein häufiger Anwendungsfall dafür ist, nur eine kleine Untermenge erwarteter Fehler abzufangen (und zu unterdrücken) und den Fehler in anderen Fällen erneut auszulösen:

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

Dies kann die Syntax anderer Sprachen wie Java nachahmen:

```java
try {
  myRoutine();
} catch (RangeError e) {
  // statements to handle this very common expected error
}
// Other errors are implicitly re-thrown
```

### Verschachtelte try-Blöcke

Zuerst sehen wir uns an, was bei diesem passiert:

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

Jetzt, wenn wir die Ausnahme bereits im inneren `try`-Block gefangen haben, indem wir einen `catch`-Block hinzugefügt haben:

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

Jede gegebene Ausnahme wird nur einmal vom nächstgelegenen umgebenden `catch`-Block gefangen, es sei denn, sie wird erneut ausgelöst. Natürlich werden neue Ausnahmen, die im "inneren" Block ausgelöst werden (da der Code im `catch`-Block etwas tun kann, das eine Ausnahme auslöst), vom "äußeren" Block gefangen.

### Rückkehr aus einem finally-Block

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try-catch-finally`-Anweisung, unabhängig von `return`-Anweisungen im `try`- und `catch`-Block. Dies schließt Ausnahmen ein, die innerhalb des `catch`-Blocks ausgelöst werden:

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

Das äußere "oops" wird nicht ausgelöst, wegen des Returns im `finally`-Block. Dasselbe würde für jeden Wert gelten, der vom `catch`-Block zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
