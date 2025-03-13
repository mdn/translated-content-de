---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Statements")}}

Die **`return`** Anweisung beendet die Ausführung einer Funktion und gibt einen Wert an den Funktionsaufrufer zurück.

{{InteractiveExample("JavaScript Demo: return statement")}}

```js interactive-example
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0
```

## Syntax

```js-nolint
return;
return expression;
```

- `expression` {{optional_inline}}
  - : Der Ausdruck, dessen Wert zurückgegeben werden soll. Wird dieser weggelassen, wird `undefined` zurückgegeben.

## Beschreibung

Die `return` Anweisung kann nur innerhalb von Funktionskörpern verwendet werden. Wenn eine `return` Anweisung in einem Funktionskörper verwendet wird, wird die Ausführung der Funktion gestoppt. Die `return` Anweisung hat unterschiedliche Effekte, wenn sie in verschiedenen Funktionen platziert wird:

- In einer einfachen Funktion wird der Funktionsaufruf auf den Rückgabewert ausgewertet.
- In einer `async` Funktion wird das erzeugte Versprechen mit dem zurückgegebenen Wert aufgelöst.
- In einer Generatorfunktion gibt die `next()`-Methode des erzeugten Generatorobjekts `{ done: true, value: returnedValue }` zurück.
- In einer `async` Generatorfunktion gibt die `next()`-Methode des erzeugten `async` Generatorobjekts ein Versprechen zurück, das mit `{ done: true, value: returnedValue }` erfüllt ist.

Wenn eine `return` Anweisung innerhalb eines {{jsxref("Statements/try...catch", "try")}} Blocks ausgeführt wird, wird dessen `finally` Block, falls vorhanden, zuerst ausgeführt, bevor der Wert tatsächlich zurückgegeben wird.

### Automatische Semikolon-Einfügung

Die Syntax verbietet Zeilenumbrüche zwischen dem `return` Schlüsselwort und dem Ausdruck, der zurückgegeben werden soll.

```js-nolint example-bad
return
a + b;
```

Der obige Code wird durch die [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) in:

```js-nolint
return;
a + b;
```

umgewandelt. Dies führt dazu, dass die Funktion `undefined` zurückgibt und der `a + b` Ausdruck nie ausgewertet wird. Dies kann [eine Warnung in der Konsole erzeugen](/de/docs/Web/JavaScript/Reference/Errors/Stmt_after_return).

Um dieses Problem zu vermeiden (um ASI zu verhindern), könnten Sie Klammern verwenden:

```js-nolint
return (
  a + b
);
```

## Beispiele

### Eine Funktion unterbrechen

Eine Funktion stoppt sofort an der Stelle, an der `return` aufgerufen wird.

```js
function counter() {
  // Infinite loop
  for (let count = 1; ; count++) {
    console.log(`${count}A`); // Until 5
    if (count === 5) {
      return;
    }
    console.log(`${count}B`); // Until 4
  }
  console.log(`${count}C`); // Never appears
}

counter();

// Logs:
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

Siehe auch den Artikel über [Closures](/de/docs/Web/JavaScript/Guide/Closures).

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
- [Closures](/de/docs/Web/JavaScript/Guide/Closures)
