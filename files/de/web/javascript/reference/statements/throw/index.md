---
title: throw
slug: Web/JavaScript/Reference/Statements/throw
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

Die **`throw`**-Anweisung löst eine benutzerdefinierte Ausnahme aus. Die Ausführung der aktuellen Funktion wird gestoppt (die Anweisungen nach `throw` werden nicht ausgeführt), und die Kontrolle wird an den ersten [`catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block im Aufruf-Stack übergeben. Wenn kein `catch`-Block unter den aufrufenden Funktionen existiert, wird das Programm beendet.

{{EmbedInteractiveExample("pages/js/statement-throw.html")}}

## Syntax

```js-nolint
throw expression;
```

- `expression`
  - : Der Ausdruck, der geworfen werden soll.

## Beschreibung

Die `throw`-Anweisung ist in allen Kontexten gültig, in denen Anweisungen verwendet werden können. Ihre Ausführung erzeugt eine Ausnahme, die den Aufruf-Stack durchdringt. Weitere Informationen zur Fehlerweitergabe und -behandlung finden Sie unter [Steuerfluss und Fehlerbehandlung](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

Das `throw`-Schlüsselwort kann von jeder Art von Ausdruck gefolgt werden, zum Beispiel:

```js
throw error; // Wirft einen zuvor definierten Wert (z.B. innerhalb eines Catch-Blocks)
throw new Error("Required"); // Wirft ein neues Error-Objekt
```

In der Praxis sollte die von Ihnen ausgelöste Ausnahme _immer_ ein {{jsxref("Error")}}-Objekt oder eine Instanz einer `Error`-Unterklasse wie {{jsxref("RangeError")}} sein. Dies liegt daran, dass der Code, der den Fehler abfängt, möglicherweise bestimmte Eigenschaften erwartet, wie z.B. {{jsxref("Error/message", "message")}} auf dem abgefangenen Wert. Beispielsweise werfen Web-APIs typischerweise {{domxref("DOMException")}}-Instanzen, die von `Error.prototype` erben.

### Automatische Semikolon-Einfügung

Die Syntax verbietet Zeilenumbrüche zwischen dem `throw`-Schlüsselwort und dem zu werfenden Ausdruck.

```js-nolint example-bad
throw
new Error();
```

Der obige Code wird durch die [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) in:

```js-nolint
throw;
new Error();
```

umgewandelt. Dies ist ungültiger Code, da im Gegensatz zu {{jsxref("Statements/return", "return")}} `throw` von einem Ausdruck gefolgt werden muss.

Um dieses Problem zu vermeiden (um ASI zu verhindern), können Sie Klammern verwenden:

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

Dieses Beispiel ruft eine asynchrone Funktion mit Callback auf und wirft einen Fehler, wenn der Callback einen Fehler erhält.

```js
readFile("foo.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
```

Fehler, die auf diese Weise geworfen werden, sind vom Aufrufer nicht abfangbar und führen zum Absturz des Programms, es sei denn, (a) die `readFile`-Funktion selbst fängt den Fehler ab, oder (b) das Programm läuft in einem Kontext, der Top-Level-Fehler abfängt. Sie können Fehler natürlicher handhaben, indem Sie den {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor verwenden.

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
