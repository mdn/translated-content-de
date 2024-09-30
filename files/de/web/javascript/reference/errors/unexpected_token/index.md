---
title: "SyntaxError: Unerwartetes Token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahmen "unerwartetes Token" treten auf, wenn der Parser an der angegebenen Position ein Token nicht erkennt und daher die Struktur des Programms nicht verstehen kann. Dies könnte ein einfacher Tippfehler sein.

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

## Was ist schief gelaufen?

Ein bestimmtes Sprachkonstrukt wurde erwartet, aber etwas anderes wurde bereitgestellt. Dies könnte ein einfacher Tippfehler sein.

## Beispiele

### Ausdruck erwartet

Zum Beispiel sind beim Verketten von Ausdrücken nachgestellte Kommata nicht erlaubt.

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

Die Klammern mögen auf den ersten Blick korrekt erscheinen, aber beachten Sie, wie das `||` außerhalb der Klammern liegt. Korrekt wäre es, Klammern um das `||` zu setzen:

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
