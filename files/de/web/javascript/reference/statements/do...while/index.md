---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{jsSidebar("Statements")}}

Die **`do...while`**-Anweisung erstellt eine Schleife, die eine bestimmte Anweisung so lange ausführt, wie die Testbedingung als wahr bewertet wird. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, wodurch die angegebene Anweisung mindestens einmal ausgeführt wird.

{{InteractiveExample("JavaScript Demo: do...while statement")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i += 1;
  result += i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## Syntax

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : Eine Anweisung, die mindestens einmal ausgeführt wird und erneut ausgeführt wird, solange die Bedingung als wahr bewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.
- `condition`
  - : Ein Ausdruck, der _nach_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung als {{Glossary("Truthy", "wahr bewertet wird")}}, wird `statement` erneut ausgeführt. Wenn die Bedingung als {{Glossary("Falsy", "falsch bewertet wird")}}, wird die Ausführung mit der Anweisung nach der `do...while`-Schleife fortgesetzt.

## Beschreibung

Wie bei anderen Schleifenanweisungen können Sie [Kontrollflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und bewertet `condition` erneut.

Die Syntax der `do...while`-Anweisung erfordert ein Semikolon am Ende, aber der Prozess der [automatischen Semikoloneinfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) kann eines für Sie einfügen, wenn das Fehlen eines Semikolons zu ungültiger Syntax führt.

## Beispiele

### Verwenden von do...while

Im folgenden Beispiel iteriert die `do...while`-Schleife mindestens einmal und
wiederholt sich, bis `i` nicht mehr kleiner als 5 ist.

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```

### Verwenden von false als do...while-Bedingung

Da die Anweisung immer einmal ausgeführt wird, ist `do...while (false)` dasselbe wie das Ausführen der Anweisung selbst. Dies ist ein gängiges Idiom in C-ähnlichen Sprachen, das es Ihnen ermöglicht, `break` zu verwenden, um frühzeitig aus verzweigter Logik auszubrechen.

```js
do {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// The rest of code
```

In JavaScript gibt es einige Alternativen, wie die Verwendung einer [beschrifteten Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/label) mit `break`:

```js
handleFriends: {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    break handleFriends;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

Oder die Verwendung einer Funktion:

```js
function handleFriends() {
  if (!user.loggedIn) {
    console.log("You are not logged in");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("No friends found");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

### Verwenden einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden, wie in diesem Beispiel:

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

Aber wenn Sie das tun, gibt es Kompromisse bei der Lesbarkeit. Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Dokumentation enthält einen Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit unseren Empfehlungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
