---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`throw`**-Anweisung löst eine benutzerdefinierte Ausnahme aus. Die Ausführung der aktuellen Funktion wird gestoppt (die Anweisungen nach `throw` werden nicht ausgeführt) und die Kontrolle wird an den ersten [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block im Aufrufstapel übergeben. Wenn kein `catch`-Block unter den aufrufenden Funktionen existiert, wird das Programm beendet.

{{InteractiveExample("JavaScript Demo: throw statement")}}

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
  - : Der Ausdruck, der geworfen werden soll.

## Beschreibung

Die `throw`-Anweisung ist in allen Kontexten gültig, in denen Anweisungen verwendet werden können. Ihre Ausführung erzeugt eine Ausnahme, die durch den Aufrufstapel dringt. Weitere Informationen zum Fehler-Bubbling und zur Fehlerbehandlung finden Sie unter [Ablaufsteuerung und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

Das `throw`-Schlüsselwort kann von jeder Art von Ausdruck gefolgt werden, zum Beispiel:

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

In der Praxis sollte die von Ihnen geworfene Ausnahme _immer_ ein {{jsxref("Error")}}-Objekt oder eine Instanz einer `Error`-Unterklasse wie z.B. {{jsxref("RangeError")}} sein. Dies liegt daran, dass Code, der den Fehler auffängt, möglicherweise erwartet, dass bestimmte Eigenschaften wie {{jsxref("Error/message", "message")}} im aufgefangenen Wert vorhanden sind. Web-APIs werfen beispielsweise typischerweise [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen, die von `Error.prototype` erben.

### Automatische Semikolon-Einfügung

Die Syntax verbietet Zeilenumbrüche zwischen dem `throw`-Schlüsselwort und dem zu werfenden Ausdruck.

```js-nolint example-bad
throw
new Error();
```

Der obige Code wird durch die [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) umgewandelt in:

```js-nolint
throw;
new Error();
```

Dies ist ungültiger Code, da im Gegensatz zu {{jsxref("Statements/return", "return")}} `throw` von einem Ausdruck gefolgt werden muss.

Um dieses Problem zu vermeiden (um ASI zu verhindern), könnten Sie Klammern verwenden:

```js-nolint
throw (
  new Error()
);
```

## Beispiele

### Werfen eines benutzerdefinierten Fehlers

Dieses Beispiel definiert eine Funktion, die einen {{jsxref("TypeError")}} wirft, wenn die Eingabe nicht vom erwarteten Typ ist.

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

### Werfen eines vorhandenen Objekts

Dieses Beispiel ruft eine asynchrone Funktion, die auf Rückrufe basiert, auf und wirft einen Fehler, wenn der Rückruf einen Fehler erhält.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

Fehler, die auf diese Weise geworfen werden, können vom Aufrufer nicht abgefangen werden und führen zum Absturz des Programms, es sei denn, (a) die `readFile`-Funktion fängt den Fehler selbst ab oder (b) das Programm läuft in einem Kontext, der Top-Level-Fehler auffängt. Sie können Fehler natürlicher handhaben, indem Sie den {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwenden.

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
