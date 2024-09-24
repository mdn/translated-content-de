---
title: "SyntaxError: Unerwartetes Token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: bd401d0045851cd5c7c145c3acdeabe5062059f5
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahmen "unerwartetes Token" treten auf, wenn der Parser an der gegebenen Position ein Token sieht, das er nicht erkennt, sodass er die Struktur des Programms nicht verstehen kann. Dies könnte ein einfacher Tippfehler sein.

## Mitteilung

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

Ein bestimmtes Sprachkonstrukt wurde erwartet, aber etwas anderes wurde bereitgestellt. Dies könnte ein einfacher Tippfehler sein.

## Beispiele

### Ausdruck erwartet

Zum Beispiel sind gelegte Ausdrücke mit nachfolgenden Kommas nicht erlaubt.

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// Uncaught SyntaxError: expected expression, got ';'
```

Richtig wäre es, das Komma wegzulassen oder einen weiteren Ausdruck hinzuzufügen:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Nicht genug Klammern

Manchmal werden Klammern um `if`-Anweisungen ausgelassen:

```js-nolint example-bad
function round(n, upperBound, lowerBound) {
  if (n > upperBound) || (n < lowerBound) { // Nicht genug Klammern hier!
    throw new Error(`Number ${n} is more than ${upperBound} or less than ${lowerBound}`);
  } else if (n < (upperBound + lowerBound) / 2) {
    return lowerBound;
  } else {
    return upperBound;
  }
} // SyntaxError: expected expression, got '||'
```

Die Klammern können auf den ersten Blick korrekt erscheinen, aber beachten Sie, wie das `||` außerhalb der Klammern steht. Richtig wäre es, Klammern um das `||` zu setzen:

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

## Siehe auch

- {{jsxref("SyntaxError")}}
