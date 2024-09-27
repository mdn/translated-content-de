---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

{{jsSidebar("Statements")}}

Die **`try...catch`**-Anweisung besteht aus einem `try`-Block und entweder einem `catch`-Block, einem `finally`-Block oder beidem. Der Code im `try`-Block wird zuerst ausgeführt, und wenn er eine Ausnahme auslöst, wird der Code im `catch`-Block ausgeführt. Der Code im `finally`-Block wird immer ausgeführt, bevor der Kontrollfluss die gesamte Konstruktion verlässt.

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
  - : Ein optionaler [Bezeichner oder ein Muster](#catch-bindung), um die gefangene Ausnahme für den zugehörigen `catch`-Block zu halten. Wenn der `catch`-Block den Wert der Ausnahme nicht verwendet, können Sie `exceptionVar` und die sie umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor der Kontrollfluss die `try...catch...finally`-Konstruktion verlässt. Diese Anweisungen werden unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder abgefangen wurde.

## Beschreibung

Der `try`-Anweisungsblock beginnt immer mit einem `try`-Block. Danach muss ein `catch`-Block oder ein `finally`-Block vorhanden sein. Es ist auch möglich, sowohl `catch`- als auch `finally`-Blöcke zu haben. Dies ergibt drei Formen für die `try`-Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstrukten wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) müssen die `try`, `catch` und `finally`-Blöcke _Blöcke_ sein, anstatt einzelner Anweisungen.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch`-Block enthält Anweisungen, die festlegen, was zu tun ist, wenn im `try`-Block eine Ausnahme ausgelöst wird. Wenn eine beliebige Anweisung im `try`-Block (oder in einer Funktion, die vom `try`-Block aus aufgerufen wird) eine Ausnahme auslöst, wird die Kontrolle sofort auf den `catch`-Block übertragen. Wenn im `try`-Block keine Ausnahme ausgelöst wird, wird der `catch`-Block übersprungen.

Der `finally`-Block wird immer ausgeführt, bevor der Kontrollfluss die `try...catch...finally`-Konstruktion verlässt. Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme ausgelöst oder abgefangen wurde.

Sie können ein oder mehrere `try`-Anweisungen schachteln. Wenn eine innere `try`-Anweisung keinen `catch`-Block hat, wird stattdessen der `catch`-Block der umgebenden `try`-Anweisung verwendet.

Sie können die `try`-Anweisung auch verwenden, um JavaScript-Ausnahmen zu behandeln. Weitere Informationen zu JavaScript-Ausnahmen finden Sie im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

### Catch-Bindung

Wenn im `try`-Block eine Ausnahme ausgelöst wird, hält `exceptionVar` (d.h. das `e` in `catch (e)`) den Ausnahme-Wert. Sie können diese [Bindung](/de/docs/Glossary/binding) verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten. Diese [Bindung](/de/docs/Glossary/binding) ist nur im [Scope](/de/docs/Glossary/Scope) des `catch`-Blocks verfügbar.

Es muss nicht ein einzelner Bezeichner sein. Sie können ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehreren Bezeichnern gleichzeitig Werte zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die durch die `catch`-Klausel erstellten Bindungen leben im selben Gültigkeitsbereich wie der `catch`-Block, daher können Variablen, die im `catch`-Block deklariert werden, nicht denselben Namen wie die durch die `catch`-Klausel erstellten Bindungen haben. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber sie ist eine veraltete Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahme-Bindung ist beschreibbar. Beispielsweise möchten Sie möglicherweise den Ausnahme-Wert normalisieren, um sicherzustellen, dass es sich um ein {{jsxref("Error")}} Objekt handelt.

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

Der `finally`-Block enthält Anweisungen, die ausgeführt werden, nachdem der `try`-Block und der `catch`-Block/die `catch`-Blöcke ausgeführt wurden, aber vor den Anweisungen, die dem `try...catch...finally`-Block folgen. Der Steuerfluss wird immer in den `finally`-Block eintreten, der auf eine der folgenden Arten fortgeführt werden kann:

- Unmittelbar nachdem der `try`-Block seine Ausführung normal beendet hat (und keine Ausnahmen ausgelöst wurden);
- Unmittelbar nachdem der `catch`-Block seine Ausführung normal beendet hat;
- Unmittelbar bevor die Ausführung einer Steuerflussanweisung (`return`, `throw`, `break`, `continue`) im `try`-Block oder `catch`-Block, die den Block verlassen würde.

Wenn aus dem `try`-Block eine Ausnahme geworfen wird, selbst wenn kein `catch`-Block vorhanden ist, um die Ausnahme zu behandeln, wird der `finally`-Block dennoch ausgeführt, wobei die Ausnahme sofort nach dem Abschluss des `finally`-Blocks weiterhin geworfen wird.

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally`-Block. Der Code öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden; der `finally`-Block stellt sicher, dass die Datei nach ihrer Verwendung immer geschlossen wird, auch wenn eine Ausnahme ausgelöst wurde.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

Steuerflussanweisungen (`return`, `throw`, `break`, `continue`) im `finally`-Block "überdecken" jeden Abschlusswert des `try`-Blocks oder `catch`-Blocks. In diesem Beispiel versucht der `try`-Block, 1 zurückzugeben, aber bevor die Rückgabe erfolgt, wird der Steuerfluss zuerst in den `finally`-Block geleitet, sodass der Rückgabewert des `finally`-Blocks stattdessen zurückgegeben wird.

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

Es ist im Allgemeinen keine gute Idee, Steuerflussanweisungen im `finally`-Block zu haben. Verwenden Sie ihn nur für Bereinigungscode.

## Beispiele

### Unbedingter Catch-Block

Wenn ein `catch`-Block verwendet wird, wird der `catch`-Block ausgeführt, wenn eine Ausnahme von innerhalb des `try`-Blocks ausgelöst wird. Zum Beispiel, wenn die Ausnahme im folgenden Code auftritt, wird die Kontrolle auf den `catch`-Block übertragen.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

Der `catch`-Block spezifiziert einen Bezeichner (`e` im obigen Beispiel), der den Wert der Ausnahme hält; dieser Wert ist nur im [Scope](/de/docs/Glossary/Scope) des `catch`-Blocks verfügbar.

### Bedingte Catch-Blöcke

Sie können "Bedingte `catch`-Blöcke" erstellen, indem Sie `try...catch`-Blöcke mit `if...else if...else`-Strukturen kombinieren, wie folgt:

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

Ein häufiger Anwendungsfall hierfür ist, nur eine kleine Untermenge erwarteter Fehler abzufangen (und zum Schweigen zu bringen) und dann in anderen Fällen den Fehler erneut zu werfen:

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

### Verschachtelte Try-Blöcke

Zunächst sehen wir, was mit diesem Code geschieht:

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

Jetzt, wenn wir bereits die Ausnahme im inneren `try`-Block abgefangen haben, indem wir einen `catch`-Block hinzufügen:

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

Und nun lassen Sie uns den Fehler erneut werfen.

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

Eine gegebene Ausnahme wird nur einmal durch den am nächsten gelegenen umgebenden `catch`-Block abgefangen, es sei denn, sie wird erneut geworfen. Natürlich werden alle neuen Ausnahmen, die im "inneren" Block auftreten (da der Code im `catch`-Block möglicherweise etwas tut, das einen Fehler erzeugt), durch den "äußeren" Block abgefangen.

### Rückgabe aus einem Finally-Block

Wenn der `finally`-Block einen Wert zurückgibt, wird dieser Wert zum Rückgabewert der gesamten `try-catch-finally`-Anweisung, unabhängig von etwaigen `return`-Anweisungen in den `try`- und `catch`-Blöcken. Dies umfasst auch Austoßungen, die innerhalb des `catch`-Blocks geworfen werden:

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

Der äußere "oops" wird nicht geworfen, weil die Rückgabe im `finally`-Block erfolgt. Gleiches gilt für jeden Wert, der aus dem `catch`-Block zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
