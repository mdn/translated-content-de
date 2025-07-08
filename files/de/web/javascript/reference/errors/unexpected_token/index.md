---
title: "SyntaxError: Unerwartetes Token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahmen "unerwartetes Token" treten auf, wenn der Parser an der angegebenen Stelle ein Token sieht, das er nicht erkennt, sodass er die Struktur des Programms nicht verstehen kann. Dies könnte ein einfacher Tippfehler sein.

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

Ein bestimmtes Sprachkonstrukt wurde erwartet, aber es wurde etwas anderes übergeben. Dies könnte ein einfacher Tippfehler sein.

## Beispiele

### Ausdruck erwartet

Zum Beispiel sind bei der Verkettung von Ausdrücken nachgestellte Kommas nicht erlaubt.

```js-nolint example-bad
for (let i = 0; i < 5,; ++i) {
  console.log(i);
}
// Uncaught SyntaxError: expected expression, got ';'
```

Korrekt wäre, das Komma wegzulassen oder einen weiteren Ausdruck hinzuzufügen:

```js example-good
for (let i = 0; i < 5; ++i) {
  console.log(i);
}
```

### Nicht genügend Klammern

Manchmal vergisst man Klammern um `if`-Anweisungen:

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

Die Klammern sehen auf den ersten Blick korrekt aus, aber beachten Sie, dass das `||` außerhalb der Klammern steht. Korrekt wäre es, Klammern um das `||` zu setzen:

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

Manchmal wird der Fehler durch Strukturprobleme verursacht, die nicht direkt neben dem Fehlerort liegen, sodass Sie nach potenziellen Fehlern in der Umgebung suchen müssen. Zum Beispiel wollten Sie eine Methode eines Objekts deklarieren, haben sie aber stattdessen als Eigenschaft deklariert:

```js-nolint example-bad
const MyComponent = {
  mounted: {
    document.getElementById("app").classList.add("loaded");
  }
}
```

Der `.` nach `document` ist unerwartet, da JavaScript die `{}` als Objektliteral statt als Funktionskörper interpretiert und daher ein `:` erwartet. Das Problem wird gelöst, indem `mounted` als Funktion deklariert wird.

```js-nolint example-good
const MyComponent = {
  mounted() {
    document.getElementById("app").classList.add("loaded");
  }
}
```

## Siehe auch

- {{jsxref("SyntaxError")}}
