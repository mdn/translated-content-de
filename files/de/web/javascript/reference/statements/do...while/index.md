---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: becca01d713f7f3c37f40ede7ee7c282312dfa4f
---

{{jsSidebar("Statements")}}

Die **`do...while`**-Anweisung erstellt eine Schleife, die eine angegebene Anweisung ausführt, solange die Testbedingung auf true ausgewertet wird. Die Bedingung wird nach der Ausführung der Anweisung ausgewertet, was dazu führt, dass die angegebene Anweisung mindestens einmal ausgeführt wird.

{{EmbedInteractiveExample("pages/js/statement-dowhile.html")}}

## Syntax

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : Eine Anweisung, die mindestens einmal ausgeführt wird und erneut ausgeführt wird, solange die Bedingung auf true ausgewertet wird. Sie können eine [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block) verwenden, um mehrere Anweisungen auszuführen.
- `condition`
  - : Ein Ausdruck, der _nach_ jedem Durchlauf der Schleife ausgewertet wird. Wenn diese Bedingung [auf true ausgewertet wird](/de/docs/Glossary/Truthy), wird `statement` erneut ausgeführt. Wenn die Bedingung [auf false ausgewertet wird](/de/docs/Glossary/Falsy), wird die Ausführung mit der Anweisung nach der `do...while`-Schleife fortgesetzt.

## Beschreibung

Wie andere Schleifenanweisungen können Sie [Steuerflussanweisungen](/de/docs/Web/JavaScript/Reference/Statements#control_flow) innerhalb von `statement` verwenden:

- {{jsxref("Statements/break", "break")}} stoppt die Ausführung von `statement` und geht zur ersten Anweisung nach der Schleife.
- {{jsxref("Statements/continue", "continue")}} stoppt die Ausführung von `statement` und wertet `condition` erneut aus.

Die Syntax der `do...while`-Anweisung erfordert ein Semikolon am Ende, aber der Prozess der [automatischen Semikoloneinfügung](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) kann eines für Sie einfügen, falls das Fehlen eines Semikolons zu ungültiger Syntax führt.

## Beispiele

### Verwenden von do...while

Im folgenden Beispiel durchläuft die `do...while`-Schleife mindestens einmal und wiederholt sich, bis `i` nicht mehr kleiner als 5 ist.

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Trotz i === 0 wird dies weiterhin durchlaufen, da es ohne den Test beginnt

console.log(result);
```

### Verwenden von false als do...while-Bedingung

Da die Anweisung immer einmal ausgeführt wird, ist `do...while (false)` dasselbe wie die Ausführung der Anweisung selbst. Dies ist ein gängiges Idiom in C-ähnlichen Sprachen, das es Ihnen ermöglicht, `break` zu verwenden, um aus der Verzweigungslogik frühzeitig auszubrechen.

```js
do {
  if (!user.loggedIn) {
    console.log("Sie sind nicht eingeloggt");
    break;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("Keine Freunde gefunden");
    break;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
} while (false);
// Der Rest des Codes
```

In JavaScript gibt es einige Alternativen, wie die Verwendung einer [beschrifteten Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/label) mit `break`:

```js
handleFriends: {
  if (!user.loggedIn) {
    console.log("Sie sind nicht eingeloggt");
    break handleFriends;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("Keine Freunde gefunden");
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
    console.log("Sie sind nicht eingeloggt");
    return;
  }
  const friends = user.getFriends();
  if (!friends.length) {
    console.log("Keine Freunde gefunden");
    return;
  }
  for (const friend of friends) {
    handleFriend(friend);
  }
}
```

### Verwendung einer Zuweisung als Bedingung

In einigen Fällen kann es sinnvoll sein, eine Zuweisung als Bedingung zu verwenden, wie in diesem Beispiel:

```js
do {
  // …
} while ((match = regexp.exec(str)));
```

Dabei gibt es jedoch Einbußen bei der Lesbarkeit. Die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Dokumentation enthält einen Abschnitt [Verwendung einer Zuweisung als Bedingung](/de/docs/Web/JavaScript/Reference/Statements/while#using_an_assignment_as_a_condition) mit unseren Empfehlungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
