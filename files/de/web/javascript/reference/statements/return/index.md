---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jsSidebar("Statements")}}

Die **`return`**-Anweisung beendet die Ausführung einer Funktion und gibt einen Wert an den Funktionsaufrufer zurück.

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## Syntax

```js-nolint
return;
return expression;
```

- `expression` {{optional_inline}}
  - : Der Ausdruck, dessen Wert zurückgegeben werden soll. Wenn er weggelassen wird, wird `undefined` zurückgegeben.

## Beschreibung

Die `return`-Anweisung kann nur innerhalb von Funktionskörpern verwendet werden. Wenn eine `return`-Anweisung in einem Funktionskörper verwendet wird, wird die Ausführung der Funktion gestoppt. Die `return`-Anweisung hat unterschiedliche Effekte, je nachdem, in welcher Funktion sie platziert ist:

- In einer normalen Funktion wird der Aufruf dieser Funktion mit dem Rückgabewert ausgewertet.
- In einer asynchronen Funktion wird das erzeugte Versprechen mit dem zurückgegebenen Wert aufgelöst.
- In einer Generatorfunktion gibt die `next()`-Methode des erzeugten Generatorobjekts `{ done: true, value: returnedValue }` zurück.
- In einer asynchronen Generatorfunktion gibt die `next()`-Methode des erzeugten asynchronen Generatorobjekts ein Versprechen zurück, das mit `{ done: true, value: returnedValue }` erfüllt wird.

Wenn eine `return`-Anweisung innerhalb eines {{jsxref("Statements/try...catch", "try")}}-Blocks ausgeführt wird, wird dessen `finally`-Block, falls vorhanden, zuerst ausgeführt, bevor der Wert tatsächlich zurückgegeben wird.

### Automatische Semikolon-Einfügung

Die Syntax verbietet Zeilenumbrüche zwischen dem `return`-Schlüsselwort und dem Ausdruck, der zurückgegeben werden soll.

```js-nolint example-bad
return
a + b;
```

Der obige Code wird durch die [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) in Folgendes umgewandelt:

```js-nolint
return;
a + b;
```

Dies führt dazu, dass die Funktion `undefined` zurückgibt und der Ausdruck `a + b` niemals ausgewertet wird. Dies kann [eine Warnung in der Konsole erzeugen](/de/docs/Web/JavaScript/Reference/Errors/Stmt_after_return).

Um dieses Problem zu vermeiden (um ASI zu verhindern), könnten Sie Klammern verwenden:

```js-nolint
return (
  a + b
);
```

## Beispiele

### Eine Funktion unterbrechen

Eine Funktion wird sofort an dem Punkt gestoppt, an dem `return` aufgerufen wird.

```js
function counter() {
  // Endlosschleife
  for (let count = 1; ; count++) {
    console.log(`${count}A`); // Bis 5
    if (count === 5) {
      return;
    }
    console.log(`${count}B`); // Bis 4
  }
  console.log(`${count}C`); // Erscheint nie
}

counter();

// Protokolliert:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### Eine Funktion zurückgeben

Siehe auch den Artikel über [Closures](/de/docs/Web/JavaScript/Closures).

```js
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
answer(1337); // 56154
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Closures](/de/docs/Web/JavaScript/Closures)
