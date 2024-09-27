---
title: "Input Boundary Assertion: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Input-Grenz-Assertion** prüft, ob die aktuelle Position im String ein Input-Grenzpunkt ist. Ein Input-Grenzpunkt ist der Anfang oder das Ende des Strings; oder, wenn das `m`-Flag gesetzt ist, der Anfang oder das Ende einer Zeile.

## Syntax

```regex
^
$
```

## Beschreibung

`^` behauptet, dass die aktuelle Position der Anfang des Inputs ist. `$` behauptet, dass die aktuelle Position das Ende des Inputs ist. Beide sind _Assertionen_, das heißt, sie verbrauchen keine Zeichen.

Genauer gesagt behauptet `^`, dass das Zeichen links außerhalb der Grenzen des Strings liegt; `$` behauptet, dass das Zeichen rechts außerhalb der Grenzen des Strings liegt. Wenn das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)-Flag gesetzt ist, passt `^` auch, wenn das Zeichen links ein [Zeilenendezeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) ist, und `$` passt auch, wenn das Zeichen rechts ein Zeilenendezeichen ist.

Sofern das `m`-Flag nicht gesetzt ist, machen die `^`- und `$`-Assertionen nur Sinn, wenn sie an den Grenzen des Musters platziert sind, da alle anderen Zeichen links oder rechts von ihnen zwangsläufig dazu führen würden, dass die Assertion fehlschlägt.

Das `y`-Flag ändert die Bedeutung dieser Assertionen nicht — siehe auch [angeklebtes sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

## Beispiele

### Entfernen von abschließenden Schrägstrichen

Das folgende Beispiel entfernt abschließende Schrägstriche aus einem URL-String:

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### Abgleichen von Dateierweiterungen

Das folgende Beispiel überprüft Dateitypen, indem die Dateierweiterung abgeglichen wird, die immer am Ende des Strings steht:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Abgleichen des gesamten Inputs

Manchmal möchten Sie sicherstellen, dass Ihr Regex den gesamten Input abgleicht, nicht nur einen Teilstring des Inputs. Zum Beispiel, wenn Sie bestimmen möchten, ob ein String ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, können Sie Input-Grenz-Assertionen an beiden Enden des Musters hinzufügen:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

Diese Funktion ist nützlich beim Codegen (Generieren von Code mit Code), da Sie gültige Bezeichner anders verwenden können als andere String-Eigenschaften, wie zum Beispiel [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) statt [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

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

- [Assertionen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
