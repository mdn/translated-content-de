---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Statements")}}

Die **`try...catch`**-Anweisung besteht aus einem `try`-Block und entweder einem `catch`-Block, einem `finally`-Block oder beidem. Der Code im `try`-Block wird zuerst ausgeführt, und wenn er eine Ausnahme auslöst, wird der Code im `catch`-Block ausgeführt. Der Code im `finally`-Block wird immer ausgeführt, bevor der Kontrollfluss das gesamte Konstrukt verlässt.

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
  - : Die auszuführenden Anweisungen.
- `catchStatements`
  - : Anweisung, die ausgeführt wird, wenn im `try`-Block eine Ausnahme ausgelöst wird.
- `exceptionVar` {{optional_inline}}
  - : Ein optionaler [Bezeichner oder ein Muster](#catch-bindung), um die abgefangene Ausnahme im zugehörigen `catch`-Block zu halten. Wenn der `catch`-Block den Wert der Ausnahme nicht verwendet, können Sie `exceptionVar` und die umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor der Kontrollfluss das `try...catch...finally`-Konstrukt verlässt. Diese Anweisungen werden unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder abgefangen wurde.

## Beschreibung

Die `try`-Anweisung beginnt immer mit einem `try`-Block. Dann muss ein `catch`-Block oder ein `finally`-Block vorhanden sein. Es ist auch möglich, sowohl `catch`- als auch `finally`-Blöcke zu haben. Dies gibt uns drei Formen für die `try`-Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstrukten wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) müssen die `try`-, `catch`- und `finally`-Blöcke _Blöcke_ sein, statt einzelner Anweisungen.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch`-Block enthält Anweisungen, die festlegen, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird. Wenn eine beliebige Anweisung innerhalb des `try`-Blocks (oder in einer Funktion, die vom `try`-Block aus aufgerufen wird) eine Ausnahme auslöst, wird die Kontrolle sofort auf den `catch`-Block übertragen. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen.

Der `finally`-Block wird immer ausgeführt, bevor der Kontrollfluss das `try...catch...finally`-Konstrukt verlässt. Er wird unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder abgefangen wurde.

Es ist möglich, ein oder mehrere `try`-Anweisungen zu verschachteln. Wenn eine innere `try`-Anweisung keinen `catch`-Block hat, wird stattdessen der `catch`-Block der umgebenden `try`-Anweisung verwendet.

Sie können die `try`-Anweisung auch verwenden, um JavaScript-Ausnahmen zu behandeln. Weitere Informationen zu JavaScript-Ausnahmen finden Sie im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

### Catch-Bindung

Wenn im `try`-Block eine Ausnahme ausgelöst wird, hält `exceptionVar` (d.h. das `e` in `catch (e)`) den Ausnahme-Wert. Sie können diese {{Glossary("binding", "Bindung")}} verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten. Diese {{Glossary("binding", "Bindung")}} ist nur im {{Glossary("Scope", "Bereich")}} des `catch`-Blocks verfügbar.

Es muss kein einzelner Bezeichner sein. Sie können ein [Destructuring-Muster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere Bezeichner auf einmal zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die durch die `catch`-Klausel erstellten Bindungen existieren im gleichen Bereich wie der `catch`-Block, sodass alle im `catch`-Block deklarierten Variablen nicht denselben Namen wie die durch die `catch`-Klausel erstellten Bindungen haben können. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber sie ist ein veralteter Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahmbindung ist schreibbar. Zum Beispiel möchten Sie möglicherweise den Ausnahme-Wert normalisieren, um sicherzustellen, dass es sich um ein {{jsxref("Error")}}-Objekt handelt.

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

Wenn Sie den Ausnahme-Wert nicht benötigen, können Sie ihn zusammen mit den umgebenden Klammern weglassen.

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

Der `finally`-Block enthält Anweisungen, die nach Ausführung des `try`-Blocks und der `catch`-Block(s) ausgeführt werden, jedoch vor den Anweisungen, die dem `try...catch...finally`-Block folgen. Der Kontrollfluss wird immer den `finally`-Block durchlaufen, der in einer der folgenden Weisen fortfahren kann:

- Unmittelbar nachdem der `try`-Block normal abgeschlossen wird (und keine Ausnahmen ausgelöst wurden);
- Unmittelbar nachdem der `catch`-Block normal abgeschlossen wird;
- Unmittelbar bevor die Ausführung einer Kontrollfluss-Anweisung (`return`, `throw`, `break`, `continue`) im `try`-Block oder `catch`-Block, die den Block verlassen würde, beginnt.

Wenn von einem `try`-Block eine Ausnahme ausgelöst wird, selbst wenn kein `catch`-Block vorhanden ist, um die Ausnahme zu behandeln, wird der `finally`-Block dennoch ausgeführt, wobei die Ausnahme unmittelbar nach Abschluss des `finally`-Blocks dennoch ausgelöst wird.

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally`-Block. Der Code öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden; der `finally`-Block stellt sicher, dass die Datei immer geschlossen wird, nachdem sie verwendet wurde, auch wenn eine Ausnahme ausgelöst wurde.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

Kontrollfluss-Anweisungen (`return`, `throw`, `break`, `continue`) im `finally`-Block werden den Abschlusswert des `try`-Blocks oder `catch`-Blocks "überdecken". In diesem Beispiel versucht der `try`-Block, 1 zurückzugeben, aber bevor er zurückgibt, wird der Kontrollfluss zuerst an den `finally`-Block übergeben, sodass der Rückgabewert des `finally`-Blocks stattdessen zurückgegeben wird.

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

Es ist generell eine schlechte Idee, Kontrollfluss-Anweisungen im `finally`-Block zu haben. Verwenden Sie ihn nur für Bereinigungscode.

## Beispiele

### Unbedingter catch-Block

Wenn ein `catch`-Block verwendet wird, wird der `catch`-Block ausgeführt, wenn eine beliebige Ausnahme vom `try`-Block ausgelöst wird. Zum Beispiel, wenn die Ausnahme im folgenden Code auftritt, wird die Kontrolle auf den `catch`-Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

Der `catch`-Block legt einen Bezeichner (`e` im obigen Beispiel) fest, der den Wert der Ausnahme hält; dieser Wert ist nur im {{Glossary("Scope", "Bereich")}} des `catch`-Blocks verfügbar.

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

Ein häufiger Anwendungsfall dafür ist, nur einen kleinen Teil erwarteter Fehler abzufangen (und zu unterdrücken) und dann den Fehler in anderen Fällen erneut auszulösen:

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

Dies kann die Syntax aus anderen Sprachen, wie Java, nachahmen:

```java
try {
  myRoutine();
} catch (RangeError e) {
  // statements to handle this very common expected error
}
// Other errors are implicitly re-thrown
```

### Verschachtelte try-Blöcke

Lassen Sie uns zunächst sehen, was mit diesem passiert:

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

Nun, wenn wir die Ausnahme bereits im inneren `try`-Block gefangen haben, indem wir einen `catch`-Block hinzufügen:

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

Und jetzt, lassen Sie uns den Fehler erneut auslösen.

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

Jede gegebene Ausnahme wird nur einmal vom nächstgelegenen, umgebenden `catch`-Block abgefangen, es sei denn, sie wird erneut ausgelöst. Natürlich werden alle neuen Ausnahmen, die im "inneren" Block ausgelöst werden (weil der Code im `catch`-Block möglicherweise etwas tut, das eine Ausnahme auslöst), vom "äußeren" Block abgefangen.

### Rückgabe aus einem finally-Block

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try-catch-finally`-Anweisung, unabhängig von `return`-Anweisungen in den `try`- und `catch`-Blöcken. Dies gilt auch für Ausnahmen, die innerhalb des `catch`-Blocks ausgelöst werden:

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

Das äußere "oops" wird nicht ausgelöst, wegen der Rückgabe im `finally`-Block. Gleiches würde für jeden zurückgegebenen Wert aus dem `catch`-Block gelten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
