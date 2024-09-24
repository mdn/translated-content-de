---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

{{jsSidebar("Statements")}}

Die **`try...catch`** Anweisung besteht aus einem `try` Block und entweder einem `catch` Block, einem `finally` Block oder beiden. Der Code im `try` Block wird zuerst ausgeführt, und wenn er eine Ausnahme auslöst, wird der Code im `catch` Block ausgeführt. Der Code im `finally` Block wird immer ausgeführt, bevor der Kontrollfluss das gesamte Konstrukt verlässt.

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
  - : Anweisung, die ausgeführt wird, wenn im `try` Block eine Ausnahme ausgelöst wird.
- `exceptionVar` {{optional_inline}}
  - : Ein optionaler [Bezeichner oder ein Muster](#catch-bindung), um die gefangene Ausnahme für den zugehörigen `catch` Block zu halten. Wenn der `catch` Block den Wert der Ausnahme nicht verwendet, können Sie `exceptionVar` und die umgebenden Klammern weglassen.
- `finallyStatements`
  - : Anweisungen, die ausgeführt werden, bevor der Kontrollfluss das `try...catch...finally` Konstrukt verlässt. Diese Anweisungen werden unabhängig davon ausgeführt, ob eine Ausnahme ausgelöst oder gefangen wurde.

## Beschreibung

Die `try`-Anweisung beginnt immer mit einem `try`-Block. Dann muss ein `catch` Block oder ein `finally` Block vorhanden sein. Es ist auch möglich, sowohl `catch` als auch `finally` Blöcke zu haben. Dies ergibt drei Formen für die `try` Anweisung:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Im Gegensatz zu anderen Konstrukten wie [`if`](/de/docs/Web/JavaScript/Reference/Statements/if...else) oder [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) müssen die `try`, `catch`, und `finally` Blöcke _Blöcke_ sein, anstelle von einzelnen Anweisungen.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

Ein `catch` Block enthält Anweisungen, die festlegen, was zu tun ist, wenn im `try` Block eine Ausnahme ausgelöst wird. Wenn eine Anweisung innerhalb des `try` Blocks (oder in einer Funktion, die vom `try` Block aus aufgerufen wird) eine Ausnahme auslöst, wird der Kontrollfluss sofort zum `catch` Block verschoben. Wenn im `try` Block keine Ausnahme ausgelöst wird, wird der `catch` Block übersprungen.

Der `finally` Block wird immer ausgeführt, bevor der Kontrollfluss das `try...catch...finally` Konstrukt verlässt. Er wird immer ausgeführt, unabhängig davon, ob eine Ausnahme ausgelöst oder gefangen wurde.

Sie können ein oder mehrere `try` Anweisungen verschachteln. Wenn eine innere `try` Anweisung keinen `catch` Block hat, wird der `catch` Block der umgebenden `try` Anweisung stattdessen verwendet.

Sie können die `try` Anweisung auch verwenden, um JavaScript-Ausnahmen zu behandeln. Weitere Informationen zu JavaScript-Ausnahmen finden Sie im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

### Catch-Bindung

Wenn im `try` Block eine Ausnahme ausgelöst wird, enthält `exceptionVar` (d. h. das `e` in `catch (e)`) den Ausnahmewert. Sie können diese {{Glossary("binding")}} verwenden, um Informationen über die ausgelöste Ausnahme zu erhalten. Diese {{Glossary("binding")}} ist nur im {{Glossary("Scope", "Gültigkeitsbereich")}} des `catch` Blocks verfügbar.

Es muss nicht ein einzelner Bezeichner sein. Sie können ein [Destrukturierungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um mehrere Bezeichner auf einmal zuzuweisen.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

Die durch die `catch` Klausel erstellten Bindungen leben im selben Gültigkeitsbereich wie der `catch` Block, sodass keine Variablen, die im `catch` Block deklariert sind, denselben Namen wie die durch die `catch` Klausel erstellten Bindungen haben können. (Es gibt [eine Ausnahme von dieser Regel](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), aber es ist eine veraltete Syntax.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

Die Ausnahmebindung ist schreibbar. Zum Beispiel möchten Sie den Ausnahmewert möglicherweise normalisieren, um sicherzustellen, dass es sich um ein {{jsxref("Error")}} Objekt handelt.

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

Der `finally` Block enthält Anweisungen, die nach dem `try` Block und `catch` Block ausgeführt werden, aber vor den Anweisungen, die dem `try...catch...finally` Block folgen. Der Kontrollfluss wird immer in den `finally` Block eintreten, der in einer der folgenden Weisen fortfahren kann:

- Unmittelbar nachdem der `try` Block die Ausführung normal beendet hat (und keine Ausnahmen ausgelöst wurden);
- Unmittelbar nachdem der `catch` Block die Ausführung normal beendet hat;
- Unmittelbar vor der Ausführung einer Kontrollflussanweisung (`return`, `throw`, `break`, `continue`) im `try` Block oder `catch` Block, die den Block verlassen würde.

Wenn eine Ausnahme vom `try` Block ausgelöst wird, auch wenn es keinen `catch` Block gibt, um die Ausnahme zu behandeln, wird der `finally` Block dennoch ausgeführt, in welchem Fall die Ausnahme sofort nach Abschluss des `finally` Blocks erneut ausgelöst wird.

Das folgende Beispiel zeigt einen Anwendungsfall für den `finally` Block. Der Code öffnet eine Datei und führt dann Anweisungen aus, die die Datei verwenden; der `finally` Block sorgt dafür, dass die Datei nach der Verwendung immer geschlossen wird, auch wenn eine Ausnahme ausgelöst wurde.

```js
openMyFile();
try {
  // Ressourcen sichern
  writeMyFile(theData);
} finally {
  closeMyFile(); // immer die Ressource schließen
}
```

Kontrollflussanweisungen (`return`, `throw`, `break`, `continue`) im `finally` Block werden jeden Abschlusswert des `try` Blocks oder `catch` Blocks "maskieren". In diesem Beispiel versucht der `try` Block, 1 zurückzugeben, aber bevor er zurückgibt, wird der Kontrollfluss zuerst an den `finally` Block übergeben, sodass der Rückgabewert des `finally` Blockes stattdessen zurückgegeben wird.

```js
function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // gibt 2 zurück
```

Es ist im Allgemeinen eine schlechte Idee, Kontrollflussanweisungen im `finally` Block zu haben. Verwenden Sie ihn nur für Bereinigungscode.

## Beispiele

### Unbedingter Catch-Block

Wenn ein `catch` Block verwendet wird, wird der `catch` Block ausgeführt, wenn eine Ausnahme aus dem `try` Block geworfen wird. Zum Beispiel, wenn die Ausnahme im folgenden Code auftritt, wird die Kontrolle an den `catch` Block übertragen.

```js
try {
  throw "myException"; // generiert eine Ausnahme
} catch (e) {
  // Anweisungen, um Ausnahmen zu behandeln
  logMyErrors(e); // übergebe Ausnahmeobjekt an Fehlerbehandler
}
```

Der `catch` Block spezifiziert einen Bezeichner (`e` im obigen Beispiel), der den Wert der Ausnahme hält; dieser Wert ist nur im {{Glossary("Scope", "Gültigkeitsbereich")}} des `catch` Blocks verfügbar.

### Bedingte Catch-Blöcke

Sie können "Bedingte `catch` Blöcke" erstellen, indem Sie `try...catch` Blöcke mit `if...else if...else` Strukturen kombinieren, wie folgt:

```js
try {
  myroutine(); // kann drei Arten von Ausnahmen werfen
} catch (e) {
  if (e instanceof TypeError) {
    // Anweisungen zum Behandeln von TypeError-Ausnahmen
  } else if (e instanceof RangeError) {
    // Anweisungen zum Behandeln von RangeError-Ausnahmen
  } else if (e instanceof EvalError) {
    // Anweisungen zum Behandeln von EvalError-Ausnahmen
  } else {
    // Anweisungen zum Behandeln von nicht spezifizierten Ausnahmen
    logMyErrors(e); // übergebe Ausnahmeobjekt an Fehlerbehandler
  }
}
```

Ein häufiger Anwendungsfall hierfür ist, nur eine kleine Teilmenge erwarteter Fehler abzufangen (und zu unterdrücken) und dann den Fehler in anderen Fällen erneut zu werfen:

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // Anweisungen zum Behandeln dieses sehr häufig erwarteten Fehlers
  } else {
    throw e; // werfe den Fehler unverändert erneut
  }
}
```

Dies kann die Syntax anderer Sprachen wie Java nachahmen:

```java
try {
  myRoutine();
} catch (RangeError e) {
  // Anweisungen zum Behandeln dieses sehr häufig erwarteten Fehlers
}
// Andere Fehler werden implizit erneut geworfen
```

### Verschachtelte Try-Blöcke

Zuerst sehen wir uns an, was in diesem Fall passiert:

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

// Protokolliert:
// "finally"
// "outer" "oops"
```

Nun, wenn wir die Ausnahme im inneren `try` Block bereits gefangen haben, indem wir einen `catch` Block hinzufügen:

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

// Protokolliert:
// "inner" "oops"
// "finally"
```

Und jetzt lassen Sie uns den Fehler erneut werfen.

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

// Protokolliert:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Jede gegebene Ausnahme wird nur einmal vom nächstgelegenen umgebenden `catch` Block abgefangen, es sei denn, sie wird erneut geworfen. Natürlich werden alle neuen Ausnahmen, die im "inneren" Block (weil der Code im `catch` Block etwas tun könnte, das wirft) angezeigt werden, vom "äußeren" Block gefangen.

### Rückgaben aus einem Finally-Block

Wenn der `finally` Block einen Wert zurückgibt, wird dieser Wert der Rückgabewert der gesamten `try-catch-finally` Anweisung, unabhängig von allen `return` Anweisungen in den `try` und `catch` Blöcken. Dies schließt Ausnahmen ein, die innerhalb des `catch` Blocks geworfen werden:

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

// Protokolliert:
// "inner" "oops"
// "finally"
```

Das äußere "oops" wird nicht geworfen, weil im `finally` Block zurückgegeben wird. Dasselbe würde für jeden Wert gelten, der aus dem `catch` Block zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
