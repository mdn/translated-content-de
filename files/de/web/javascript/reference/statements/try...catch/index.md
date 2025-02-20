---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`try...catch`**-Anweisung besteht aus einem `try`-Block und entweder einem `catch`-Block, einem `finally`-Block oder beiden. Der Code im `try`-Block wird zuerst ausgeführt, und wenn eine Ausnahme ausgelöst wird, wird der Code im `catch`-Block ausgeführt. Der Code im `finally`-Block wird immer ausgeführt, bevor die Ablaufsteuerung das gesamte Konstrukt verlässt.

{{InteractiveExample("JavaScript Demo: Statement - Try...Catch")}}

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
  - : Eine optionale [Bezeichner oder Muster](#catch-bindung), um die gefangene Ausnahme für den zugehörigen `catch`-Block zu speichern. Wenn der Wert der Ausnahme im `catch`-Block nicht verwendet wird, können Sie `exceptionVar` und die umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor die Ablaufsteuerung das `try...catch...finally`-Konstrukt verlässt. Diese Anweisungen werden unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder abgefangen wurde.

## Beschreibung

Die Anweisung `try` beginnt immer mit einem `try`-Block. Anschließend muss ein `catch`-Block oder ein `finally`-Block vorhanden sein. Es ist auch möglich, sowohl `catch`- als auch `finally`-Blöcke zu verwenden. Dies ergibt drei Formen für die `try`-Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstrukten wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) müssen die Blöcke `try`, `catch` und `finally` _Blöcke_ sein und keine Einzelanweisungen.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch`-Block enthält Anweisungen, die festlegen, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird. Wenn eine Anweisung innerhalb des `try`-Blocks (oder in einer Funktion, die vom `try`-Block aus aufgerufen wird) eine Ausnahme auslöst, wird die Ablaufsteuerung sofort zum `catch`-Block verschoben. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen.

Der `finally`-Block wird immer ausgeführt, bevor die Ablaufsteuerung das `try...catch...finally`-Konstrukt verlässt. Er wird unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder abgefangen wurde.

Man kann mehrere `try`-Anweisungen verschachteln. Wenn ein innerer `try`-Block keinen `catch`-Block hat, wird der `catch`-Block des umschließenden `try`-Blocks statt dessen verwendet.

Die `try`-Anweisung kann auch dazu verwendet werden, JavaScript-Ausnahmen zu behandeln. Weitere Informationen zu JavaScript-Ausnahmen finden Sie im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

### Catch-Bindung

Wenn eine Ausnahme im `try`-Block ausgelöst wird, enthält `exceptionVar` (d.h. das `e` in `catch (e)`) den Ausnahmewert. Diese {{Glossary("binding", "Bindung")}} können Sie verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten. Diese {{Glossary("binding", "Bindung")}} ist nur im {{Glossary("Scope", "Gültigkeitsbereich")}} des `catch`-Blocks verfügbar.

Es muss kein einzelner Bezeichner sein. Man kann ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere Bezeichner gleichzeitig zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die durch die `catch`-Klausel erstellten Bindungen existieren im selben Gültigkeitsbereich wie der `catch`-Block, sodass Variablen, die im `catch`-Block deklariert sind, nicht denselben Namen wie die durch die `catch`-Klausel erstellten Bindungen haben dürfen. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber dies ist eine veraltete Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahme-Bindung ist beschreibbar. Zum Beispiel könnten Sie den Ausnahme-Wert normalisieren, um sicherzustellen, dass es sich um ein {{jsxref("Error")}}-Objekt handelt.

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

Wenn Sie den Ausnahme-Wert nicht benötigen, können Sie diesen sowie die umschließenden Klammern weglassen.

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

Der `finally`-Block enthält Anweisungen, die nach der Ausführung der `try`- und `catch`-Blöcke ausgeführt werden, aber vor den Anweisungen, die auf den `try...catch...finally`-Block folgen. Die Ablaufsteuerung tritt immer in den `finally`-Block ein, was auf folgende Weise geschehen kann:

- Direkt nachdem der `try`-Block normal ausgeführt wurde (und keine Ausnahmen ausgelöst wurden);
- Direkt nachdem der `catch`-Block normal ausgeführt wurde;
- Direkt bevor eine Ablaufsteuerungsanweisung (`return`, `throw`, `break`, `continue`) im `try`- oder `catch`-Block ausgeführt wird und den Block verlassen würde.

Wenn im `try`-Block eine Ausnahme ausgelöst wird, selbst wenn kein `catch`-Block vorhanden ist, um die Ausnahme zu behandeln, wird der `finally`-Block trotzdem ausgeführt, in welchem Fall die Ausnahme unmittelbar nach Abschluss des `finally`-Blocks weiterhin ausgelöst wird.

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally`-Block. Der Code öffnet eine Datei und führt anschließend Anweisungen aus, die die Datei verwenden. Der `finally`-Block stellt sicher, dass die Datei nach der Benutzung immer geschlossen wird, selbst wenn eine Ausnahme ausgelöst wurde.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

Ablaufsteuerungsanweisungen (`return`, `throw`, `break`, `continue`) im `finally`-Block "überschreiben" jeden Abschlusswert des `try`- oder `catch`-Blocks. Im folgenden Beispiel versucht der `try`-Block, den Wert 1 zurückzugeben. Bevor jedoch die Rückgabe erfolgt, wird die Ablaufsteuerung zuerst dem `finally`-Block übergeben, sodass der Rückgabewert des `finally`-Blocks stattdessen zurückgegeben wird.

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

In der Regel ist es keine gute Praxis, Ablaufsteuerungsanweisungen im `finally`-Block zu verwenden. Verwenden Sie ihn nur für Bereinigungsvorgänge.

## Beispiele

### Bedingungsloser Catch-Block

Wenn ein `catch`-Block verwendet wird, wird dieser ausgeführt, wenn irgendeine Ausnahme aus dem `try`-Block ausgelöst wird. Wenn beispielsweise eine Ausnahme im folgenden Code auftritt, wechselt die Ablaufsteuerung zum `catch`-Block.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

Der `catch`-Block gibt einen Bezeichner an (`e` im obigen Beispiel), der den Wert der Ausnahme enthält. Dieser Wert ist nur im {{Glossary("Scope", "Gültigkeitsbereich")}} des `catch`-Blocks verfügbar.

### Bedingte Catch-Blöcke

Man kann "bedingte `catch`-Blöcke" erstellen, indem `try...catch`-Blöcke mit `if...else if...else`-Strukturen kombiniert werden, wie hier:

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

Ein häufiger Anwendungsfall dafür ist, nur eine kleine Teilmenge erwarteter Fehler abzufangen (und stillzulegen) und in anderen Fällen die Ausnahme erneut auszulösen:

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

Dies kann die Syntax aus anderen Sprachen wie Java nachahmen:

```java
try {
  myRoutine();
} catch (RangeError e) {
  // statements to handle this very common expected error
}
// Other errors are implicitly re-thrown
```

### Verschachtelte Try-Blöcke

Lassen Sie uns zunächst sehen, was hier passiert:

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

Wenn wir nun die Ausnahme durch Hinzufügen eines `catch`-Blocks bereits im inneren `try`-Block abfangen:

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

Eine bestimmte Ausnahme wird nur einmal vom nächstgelegenen umgebenden `catch`-Block abgefangen, es sei denn, sie wird erneut ausgelöst. Natürlich werden alle neuen Ausnahmen, die im "inneren" Block ausgelöst werden (da der Code im `catch`-Block möglicherweise etwas ausführen könnte, das eine Ausnahme auslöst), vom "äußeren" Block abgefangen.

### Rückgabe aus einem Finally-Block

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try-catch-finally`-Anweisung, unabhängig von Rückgabeanweisungen in den `try`- und `catch`-Blöcken. Dies gilt auch für Ausnahmen, die im `catch`-Block ausgelöst wurden:

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

Der äußere "oops" wird nicht ausgelöst, da im `finally`-Block eine Rückgabe erfolgt. Dasselbe gilt für jeden Wert, der im `catch`-Block zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
