---
title: "Input-Bereichs-Assertion: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Input-Bereichs-Assertion** überprüft, ob die aktuelle Position im String ein Input-Bereich ist. Ein Input-Bereich ist der Beginn oder das Ende des Strings; oder, wenn das `m`-Flag gesetzt ist, der Beginn oder das Ende einer Zeile.

## Syntax

```regex
^
$
```

## Beschreibung

`^` bestätigt, dass die aktuelle Position der Beginn des Inputs ist. `$` bestätigt, dass die aktuelle Position das Ende des Inputs ist. Beide sind _Assertionen_, daher verbrauchen sie keine Zeichen.

Genauer gesagt, `^` bestätigt, dass das Zeichen links außerhalb des Stringbereichs liegt; `$` bestätigt, dass das Zeichen rechts außerhalb des Stringbereichs liegt. Wenn das [`m`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) Flag gesetzt ist, passt `^` auch, wenn das Zeichen links ein [Zeilenbeendigung](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) Zeichen ist, und `$` passt auch, wenn das Zeichen rechts ein Zeilenbeendigung Zeichen ist.

Solange das `m`-Flag nicht gesetzt ist, machen die `^` und `$` Assertionen nur Sinn, wenn sie an den Rändern des Musters platziert werden, da alle anderen Zeichen links oder rechts von ihnen zwangsläufig dazu führen würden, dass die Assertion fehlschlägt.

Das `y`-Flag ändert die Bedeutung dieser Assertionen nicht — siehe auch [anchored sticky flag](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

## Beispiele

### Entfernen von abschließenden Schrägstrichen

Das folgende Beispiel entfernt abschließende Schrägstriche aus einer URL-Zeichenfolge:

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### Dateierweiterungen abgleichen

Das folgende Beispiel überprüft Dateitypen, indem es die Dateierweiterung abgleicht, die immer am Ende der Zeichenfolge steht:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Gesamten Input abgleichen

Manchmal möchten Sie sicherstellen, dass Ihr Regex den gesamten Input abgleicht, nicht nur eine Teilzeichenfolge des Inputs. Wenn Sie beispielsweise feststellen möchten, ob ein String ein gültiges [Bezeichner](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, können Sie Input-Bereichs-Assertionen an beiden Enden des Musters hinzufügen:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

Diese Funktion ist nützlich, wenn Sie Codegen (Code mit Code generieren) durchführen, weil Sie gültige Bezeichner anders verwenden können als andere String-Eigenschaften, wie z.B. [Punktnotation](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) anstelle von [Klammernotation](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

```js
const variables = ["foo", "foo:bar", "  foo  "];

function toAssignment(key) {
  if (isValidIdentifier(key)) {
    return `globalThis.${key} = undefined;`;
  }
  // JSON.stringify() escapes quotes and other special characters
  return `globalThis[${JSON.stringify(key)}] = undefined;`;
}

const statements = variables.map(toAssignment).join("\n");

console.log(statements);
// globalThis.foo = undefined;
// globalThis["foo:bar"] = undefined;
// globalThis["  foo  "] = undefined;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertionen](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Wortgrenzen-Assertion: `\b`, `\B`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
