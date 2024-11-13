---
title: "SyntaxError: Unerwartetes Token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: 8c4bb8752201d9eee9ea7c189774db0f73f4efa1
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahmen "unexpected token" treten auf, wenn der Parser an der gegebenen Position ein Token nicht erkennt und daher die Struktur des Programms nicht versteht. Dies könnte ein einfacher Tippfehler sein.

## Nachricht

```plain
SyntaxError: Unexpected token ';' (V8-based)
SyntaxError: Unexpected identifier 'x' (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: Unexpected string (V8-based)
SyntaxError: Unexpected regular expression (V8-based)
SyntaxError: Unexpected template string (V8-based)

SyntaxError: unexpected token: identifier (Firefox)
SyntaxError: expected expression, got "x" (Firefox)
SyntaxError: expected property name, got "x" (Firefox)
SyntaxError: expected target, got "x" (Firefox)
SyntaxError: expected meta, got "x" (Firefox)
SyntaxError: expected rest argument name, got "x" (Firefox)
SyntaxError: expected closing parenthesis, got "x" (Firefox)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Ein spezifisches Sprachkonstrukt wurde erwartet, aber es wurde etwas anderes bereitgestellt. Dies könnte ein einfacher Tippfehler sein.

## Beispiele

### Ausdruck erwartet

Zum Beispiel sind bei der Verkettung von Ausdrücken nachgestellte Kommata nicht erlaubt.

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// Uncaught SyntaxError: expected expression, got ';'
```

Richtig wäre es, das Komma zu weglassen oder einen weiteren Ausdruck hinzuzufügen:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Nicht genug Klammern

Manchmal lässt man Klammern um `if`-Anweisungen weg:

```js-nolint example-bad
function round(n, upperBound, lowerBound) {
if (n > upperBound) || (n < lowerBound) { // Missing parentheses here!
    throw new Error(`Number ${n} is more than ${upperBound} or less than ${lowerBound}`);
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

Die Klammern mögen auf den ersten Blick korrekt erscheinen, aber beachten Sie, wie sich das `||` außerhalb der Klammern befindet. Richtig wäre es, Klammern um das `||` zu setzen:

```js-nolint example-good
function round(n, upperBound, lowerBound) {
  if ((n > upperBound) || (n < lowerBound)) {
    throw new Error(
      `Number ${n} is more than ${upperBound} or less than ${lowerBound}`,
    );
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
}
```

### Ein Strukturfehler weiter oben verwirrte die Bedeutung

Manchmal wird der Fehler durch Strukturprobleme verursacht, die sich nicht direkt an der Fehlstelle befinden, sodass Sie nach potenziellen Fehlern in der Umgebung suchen müssen. Zum Beispiel wollten Sie eine Methode eines Objekts deklarieren, haben sie aber stattdessen als Eigenschaft deklariert:

```js-nolint example-bad
const MyComponent = {
  mounted: {
    document.getElementById("app").classList.add("loaded");
  }
}
```

Das `.` nach `document` ist unerwartet, weil JavaScript die `{}` als Objektliteral anstelle eines Funktionskörpers interpretiert und daher ein `:` erwartet. Das Problem wird durch die Deklaration von `mounted` als Funktion gelöst.

```js-nolint example-good
const MyComponent = {
  mounted() {
    document.getElementById("app").classList.add("loaded");
  }
}
```

## Siehe auch

- {{jsxref("SyntaxError")}}
