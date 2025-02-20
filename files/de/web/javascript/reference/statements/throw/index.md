---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`throw`**-Anweisung wird verwendet, um eine benutzerdefinierte Ausnahme auszulösen. Die Ausführung der aktuellen Funktion wird gestoppt (die Anweisungen nach `throw` werden nicht ausgeführt), und die Kontrolle wird an den ersten [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block im Aufrufstapel übergeben. Wenn kein `catch`-Block in den aufrufenden Funktionen vorhanden ist, wird das Programm beendet.

{{InteractiveExample("JavaScript Demo: Statement - Throw")}}

```js interactive-example
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw new Error("Parameter is not a number!");
  }
}

try {
  getRectArea(3, "A");
} catch (e) {
  console.error(e);
  // Expected output: Error: Parameter is not a number!
}
```

## Syntax

```js-nolint
throw expression;
```

- `expression`
  - : Der Ausdruck, der ausgelöst werden soll.

## Beschreibung

Die `throw`-Anweisung ist in allen Kontexten gültig, in denen Anweisungen verwendet werden können. Ihre Ausführung generiert eine Ausnahme, die durch den Aufrufstapel weitergeleitet wird. Weitere Informationen zur Fehlerweitergabe und -behandlung finden Sie unter [Kontrollfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

Das `throw`-Schlüsselwort kann von jedem beliebigen Ausdruck gefolgt sein, zum Beispiel:

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

In der Praxis sollte die Ausnahme, die Sie auslösen, _immer_ ein {{jsxref("Error")}}-Objekt oder eine Instanz einer `Error`-Unterklasse sein, wie z.B. {{jsxref("RangeError")}}. Der Grund dafür ist, dass Code, der den Fehler abfängt, bestimmte Eigenschaften, wie z.B. {{jsxref("Error/message", "message")}}, auf dem aufgefangenen Wert erwartet. Beispielsweise werfen Web-APIs in der Regel [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen, die von `Error.prototype` erben.

### Automatische Semikolon-Einfügung

Die Syntax verbietet Zeilenumbrüche zwischen dem `throw`-Schlüsselwort und dem Ausdruck, der ausgelöst werden soll.

```js-nolint example-bad
throw
new Error();
```

Der obige Code wird durch [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wie folgt transformiert:

```js-nolint
throw;
new Error();
```

Dies ist ungültiger Code, da im Gegensatz zu {{jsxref("Statements/return", "return")}} `throw` von einem Ausdruck gefolgt werden muss.

Um dieses Problem zu vermeiden (um ASI zu verhindern), können Sie Klammern verwenden:

```js-nolint
throw (
  new Error()
);
```

## Beispiele

### Auslösen eines benutzerdefinierten Fehlers

Dieses Beispiel definiert eine Funktion, die einen {{jsxref("TypeError")}} auslöst, wenn die Eingabe nicht dem erwarteten Typ entspricht.

```js
function isNumeric(x) {
  return ["number", "bigint"].includes(typeof x);
}

function sum(...values) {
  if (!values.every(isNumeric)) {
    throw new TypeError("Can only add numbers");
  }
  return values.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3)); // 6
try {
  sum("1", "2");
} catch (e) {
  console.error(e); // TypeError: Can only add numbers
}
```

### Auslösen eines vorhandenen Objekts

Dieses Beispiel ruft eine Callback-basierte asynchrone Funktion auf und löst einen Fehler aus, wenn der Callback einen Fehler erhält.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

Fehler, die auf diese Weise ausgelöst werden, können vom Aufrufer nicht abgefangen werden und führen zum Absturz des Programms, es sei denn, (a) die Funktion `readFile` fängt den Fehler selbst ab oder (b) das Programm läuft in einem Kontext, der Fehler auf oberster Ebene abfängt. Sie können Fehler natürlicher behandeln, indem Sie den {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwenden.

```js
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

try {
  const data = await readFilePromise("foo.txt");
  console.log(data);
} catch (err) {
  console.error(err);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/try...catch", "try...catch")}}
- {{jsxref("Error")}}
