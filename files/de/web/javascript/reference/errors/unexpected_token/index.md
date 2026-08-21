---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die JavaScript-Ausnahme "unerwartetes Token" tritt auf, wenn der Parser an der angegebenen Position ein Token sieht, das er nicht erkennt, und daher die Struktur des Programms nicht interpretieren kann. Dies könnte ein einfacher Tippfehler sein.

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

## Was ist schiefgelaufen?

Ein spezifisches Sprachkonstrukt wurde erwartet, aber etwas anderes wurde bereitgestellt. Dies könnte ein einfacher Tippfehler sein.

## Beispiele

### Ausdruck erwartet

Zum Beispiel, wenn Ausdrücke verkettet werden, sind abschließende Kommas nicht erlaubt.

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// Uncaught SyntaxError: expected expression, got ';'
```

Korrekt wäre es, das Komma wegzulassen oder einen weiteren Ausdruck hinzuzufügen:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Nicht genügend Klammern

Manchmal werden Klammern um `if`-Anweisungen ausgelassen:

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

Die Klammern sehen auf den ersten Blick korrekt aus, aber beachten Sie, wie das `||` außerhalb der Klammern steht. Korrekt wäre es, Klammern um das `||` zu setzen:

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

### Ein Strukturfehler weiter oben hat die Bedeutung verwirrt

Manchmal wird der Fehler durch Strukturprobleme verursacht, die sich nicht direkt an der Fehlerstelle befinden, sodass Sie die Umgebung auf potenzielle Fehler untersuchen müssen. Zum Beispiel wollten Sie eine Methode eines Objekts deklarieren, haben es aber stattdessen als Eigenschaft deklariert:

```js-nolint example-bad
const MyComponent = {
  mounted: {
    document.getElementById("app").classList.add("loaded");
  }
}
```

Der `.` nach `document` ist unerwartet, weil JavaScript die `{}` als Objektliteral und nicht als Funktionskörper interpretiert und daher ein `:` erwartet. Das Problem wird gelöst, indem `mounted` als Funktion deklariert wird.

```js-nolint example-good
const MyComponent = {
  mounted() {
    document.getElementById("app").classList.add("loaded");
  }
}
```

## Siehe auch

- {{jsxref("SyntaxError")}}
