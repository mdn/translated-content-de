---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`throw`** Anweisung wirft eine benutzerdefinierte Ausnahme. Die Ausführung der aktuellen Funktion wird gestoppt (die Anweisungen nach `throw` werden nicht ausgeführt), und die Kontrolle wird an den ersten [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block im Aufrufstapel übergeben. Wenn kein `catch`-Block unter den aufrufenden Funktionen existiert, wird das Programm beendet.

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

Die `throw` Anweisung ist in allen Kontexten gültig, in denen Anweisungen verwendet werden können. Ihre Ausführung erzeugt eine Ausnahme, die den Aufrufstapel durchdringt. Für weitere Informationen zu Fehlerausbreitung und -behandlung siehe [Ablaufkontrolle und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

Auf das `throw` Schlüsselwort kann jede Art von Ausdruck folgen, zum Beispiel:

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

In der Praxis sollte die Ausnahme, die Sie werfen, _immer_ ein {{jsxref("Error")}} Objekt oder eine Instanz einer `Error`-Unterklasse, wie zum Beispiel {{jsxref("RangeError")}}, sein. Dies liegt daran, dass der Code, der den Fehler abfängt, möglicherweise bestimmte Eigenschaften wie {{jsxref("Error/message", "message")}} erwartet, die im abgefangenen Wert vorhanden sein sollten. Zum Beispiel werfen Web-APIs typischerweise [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen, die von `Error.prototype` erben.

### Automatische Einfügesemikola

Die Syntax verbietet Zeilenendungen zwischen dem `throw` Schlüsselwort und dem Ausdruck, der geworfen werden soll.

```js-nolint example-bad
throw
new Error();
```

Der obige Code wird durch [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) in Folgendes umgewandelt:

```js-nolint
throw;
new Error();
```

Dies ist ungültiger Code, denn anders als {{jsxref("Statements/return", "return")}} muss `throw` von einem Ausdruck gefolgt werden.

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

### Werfen eines bestehenden Objekts

Dieses Beispiel ruft eine asynchrone Funktion auf, die auf Rückrufe basiert, und wirft einen Fehler, wenn der Rückruf einen Fehler erhält.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

Fehler, die auf diese Weise geworfen werden, sind für den Aufrufer nicht abfangbar und führen zum Absturz des Programms, es sei denn, (a) die `readFile`-Funktion fängt den Fehler selbst ab oder (b) das Programm wird in einem Kontext ausgeführt, der Fehler auf oberster Ebene abfängt. Sie können Fehler auf natürlicher Weise handhaben, indem Sie den {{jsxref("Promise/Promise", "Promise()")}} Konstruktor verwenden.

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
