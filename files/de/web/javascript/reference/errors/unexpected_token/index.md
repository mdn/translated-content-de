---
title: "SyntaxError: Unerwartetes Token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: b903e95a2a2201bcbab901e7bb3a85074a15dcd8
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "unerwartetes Token" tritt auf, wenn der Parser ein Token nicht erkennt, es also an der gegebenen Position nicht versteht und somit die Struktur des Programms nicht erfassen kann. Dies könnte ein einfacher Tippfehler sein.

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

Ein bestimmtes Sprachkonstrukt wurde erwartet, aber etwas anderes wurde bereitgestellt. Dies könnte ein einfacher Tippfehler sein.

## Beispiele

### Ausdruck erwartet

Zum Beispiel, wenn Ausdrücke verkettet werden, sind nachgestellte Kommas nicht erlaubt.

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

Manchmal lässt man Klammern bei `if`-Anweisungen weg:

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

Die Klammern könnten auf den ersten Blick korrekt erscheinen, aber beachten Sie, wie das `||` außerhalb der Klammern steht. Korrekt wäre es, Klammern um das `||` zu setzen:

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

Manchmal wird der Fehler durch strukturelle Probleme verursacht, die nicht direkt neben der Fehlerstelle liegen, daher müssen Sie nach möglichen Fehlern Ausschau halten. Zum Beispiel wollten Sie eine Methode eines Objekts deklarieren, haben sie jedoch als Eigenschaft deklariert:

```js-nolint example-bad
const MyComponent = {
  mounted: {
    document.getElementById("app").classList.add("loaded");
  }
}
```

Der `.` nach `document` kommt unerwartet, da JavaScript die `{}` als Objektliteral statt als Funktionskörper parst und daher einen `:` erwartet. Das Problem wird gelöst, indem `mounted` als Funktion deklariert wird.

```js-nolint example-good
const MyComponent = {
  mounted() {
    document.getElementById("app").classList.add("loaded");
  }
}
```

## Siehe auch

- {{jsxref("SyntaxError")}}
