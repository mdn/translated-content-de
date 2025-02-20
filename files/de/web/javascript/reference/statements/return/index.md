---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`return`**-Anweisung beendet die Ausführung einer Funktion und gibt einen Wert zurück an den Aufrufer dieser Funktion.

{{InteractiveExample("JavaScript Demo: Statement - Return")}}

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
  - : Der Ausdruck, dessen Wert zurückgegeben werden soll. Wenn dieser weggelassen wird, wird `undefined` zurückgegeben.

## Beschreibung

Die `return`-Anweisung kann nur innerhalb von Funktionskörpern verwendet werden. Wenn eine `return`-Anweisung in einem Funktionskörper verwendet wird, wird die Ausführung der Funktion abgebrochen. Die `return`-Anweisung hat unterschiedliche Auswirkungen in verschiedenen Funktionen:

- In einer einfachen Funktion wird der Funktionsaufruf mit dem Rückgabewert ausgewertet.
- In einer asynchronen Funktion (`async function`) wird die daraus resultierende Promise mit dem zurückgegebenen Wert aufgelöst.
- In einer Generatorfunktion gibt die Methode `next()` des erzeugten Generator-Objekts `{ done: true, value: returnedValue }` zurück.
- In einer asynchronen Generatorfunktion (`async generator function`) gibt die Methode `next()` des erzeugten asynchronen Generator-Objekts ein Promise zurück, das mit `{ done: true, value: returnedValue }` erfüllt wird.

Wenn eine `return`-Anweisung innerhalb eines {{jsxref("Statements/try...catch", "try")}}-Blocks ausgeführt wird, wird, falls vorhanden, zunächst der zugehörige `finally`-Block ausgeführt, bevor der Wert tatsächlich zurückgegeben wird.

### Automatische Semikolon-Einfügung

Die Syntax verbietet Zeilenumbrüche zwischen dem `return`-Schlüsselwort und dem zurückzugebenden Ausdruck.

```js-nolint example-bad
return
a + b;
```

Der obige Code wird durch [automatische Semikolon-Einfügung (ASI)](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wie folgt interpretiert:

```js-nolint
return;
a + b;
```

Dies führt dazu, dass die Funktion `undefined` zurückgibt und der Ausdruck `a + b` nie ausgewertet wird. Dies könnte [eine Warnung in der Konsole erzeugen](/de/docs/Web/JavaScript/Reference/Errors/Stmt_after_return).

Um dieses Problem zu vermeiden (und ASI vorzubeugen), könnten Sie Klammern verwenden:

```js-nolint
return (
  a + b
);
```

## Beispiele

### Funktion unterbrechen

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

Siehe dazu auch den Artikel über [Closures](/de/docs/Web/JavaScript/Closures).

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

- [Functions](/de/docs/Web/JavaScript/Reference/Functions)
- [Closures](/de/docs/Web/JavaScript/Closures)
