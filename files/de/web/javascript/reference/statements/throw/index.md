---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

Die **`throw`**-Anweisung löst eine benutzerdefinierte Ausnahme aus. Die Ausführung der aktuellen Funktion wird gestoppt (die Anweisungen nach `throw` werden nicht ausgeführt), und die Kontrolle wird an den ersten [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block im Aufrufstapel übergeben. Falls kein `catch`-Block in den aufrufenden Funktionen existiert, wird das Programm beendet.

{{EmbedInteractiveExample("pages/js/statement-throw.html")}}

## Syntax

```js-nolint
throw expression;
```

- `expression`
  - : Der Ausdruck, der ausgelöst werden soll.

## Beschreibung

Die `throw`-Anweisung ist in allen Kontexten gültig, in denen Anweisungen verwendet werden können. Ihre Ausführung erzeugt eine Ausnahme, die durch den Aufrufstapel durchdringt. Für weitere Informationen über Fehlerweitergabe und -behandlung siehe [Ablaufsteuerung und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

Das `throw`-Schlüsselwort kann von jedem Ausdruck gefolgt werden, zum Beispiel:

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

In der Praxis sollte die Ausnahme, die Sie auslösen, _immer_ ein {{jsxref("Error")}}-Objekt oder eine Instanz einer `Error`-Unterklasse, wie zum Beispiel {{jsxref("RangeError")}}, sein. Der Grund ist, dass der Code, der den Fehler auffängt, möglicherweise bestimmte Eigenschaften, wie {{jsxref("Error/message", "message")}}, auf dem aufgefangenen Wert erwartet. Zum Beispiel werfen Web-APIs typischerweise [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen, die von `Error.prototype` erben.

### Automatische Semikolonsetzung

Die Syntax verbietet Zeilenendzeichen zwischen dem `throw`-Schlüsselwort und dem Ausdruck, der geworfen werden soll.

```js-nolint example-bad
throw
new Error();
```

Der obige Code wird durch [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) in:

```js-nolint
throw;
new Error();
```

umgewandelt. Dies ist ungültiger Code, denn im Gegensatz zu {{jsxref("Statements/return", "return")}} muss `throw` von einem Ausdruck gefolgt werden.

Um dieses Problem zu vermeiden (um ASI zu verhindern), könnten Sie Klammern verwenden:

```js-nolint
throw (
  new Error()
);
```

## Beispiele

### Werfen eines benutzerdefinierten Fehlers

Dieses Beispiel definiert eine Funktion, die einen {{jsxref("TypeError")}} wirft, wenn der Eingabewert nicht vom erwarteten Typ ist.

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

Dieses Beispiel ruft eine Callback-basierte asynchrone Funktion auf und wirft einen Fehler, wenn der Callback einen Fehler erhält.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

Fehler, die auf diese Weise geworfen werden, können vom Aufrufer nicht aufgefangen werden und führen zum Absturz des Programms, es sei denn, (a) die `readFile`-Funktion fängt den Fehler selbst ab, oder (b) das Programm läuft in einem Kontext, der Top-Level-Fehler abfängt. Sie können Fehler natürlicher handhaben, indem Sie den {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwenden.

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
