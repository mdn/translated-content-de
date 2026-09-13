---
title: "Eingabebegrenzungs-Assertion: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Eine **Eingabebegrenzungs-Assertion** überprüft, ob die aktuelle Position im String eine Eingabebegrenzung ist. Eine Eingabebegrenzung ist der Anfang oder das Ende des Strings; oder, falls das `m`-Flag gesetzt ist, der Anfang oder das Ende einer Zeile.

> [!NOTE]
> Um den Anfang und das Ende des gesamten Strings im `m`-Modus zu erfassen, verwenden Sie die [Pufferbegrenzungs-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) `\A`, `\z` und `\Z`.

## Syntax

```regex
^
$
```

## Beschreibung

`^` bestätigt, dass die aktuelle Position der Anfang der Eingabe ist. `$` bestätigt, dass die aktuelle Position das Ende der Eingabe ist. Beide sind _Assertions_, daher verbrauchen sie keine Zeichen.

Genauer gesagt bestätigt `^`, dass das Zeichen links außerhalb des Strings liegt; `$` bestätigt, dass das Zeichen rechts außerhalb des Strings liegt. Wenn das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)-Flag gesetzt ist, passt `^` auch, wenn das Zeichen links ein [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) ist, und `$` passt auch, wenn das Zeichen rechts ein Zeilenendzeichen ist.

Wenn das `m`-Flag nicht gesetzt ist, machen diese Assertions nur Sinn, wenn keine Zeichen links oder rechts von ihnen erwartet werden. Zum Beispiel `f^o` passt nie, weil es unmöglich ist, dass `^` sowohl am Anfang des Strings steht als auch ein Zeichen links von ihm hat.

Diese Assertions ändern die Übereinstimmungspositionen nicht, wenn das `y`-Flag verwendet wird — siehe auch [verankertes sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

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

### Dateierweiterungen abgleichen

Das folgende Beispiel überprüft Dateitypen, indem es die Dateierweiterung abgleicht, die immer am Ende des Strings steht:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Gesamte Eingabe abgleichen

Manchmal möchten Sie sicherstellen, dass Ihr Regex die gesamte Eingabe und nicht nur einen Teil der Eingabe abgleicht. Wenn Sie zum Beispiel bestimmen, ob ein String ein gültiges [Identifizierer](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, können Sie Eingabebegrenzungs-Assertions an beiden Enden des Musters hinzufügen:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

Diese Funktion ist nützlich beim Codegen (Code unter Verwendung von Code generieren), da Sie gültige Identifizierer anders verwenden können als andere Zeichenfolgeneigenschaften, wie z.B. [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) anstelle der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

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

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Pufferbegrenzungs-Assertion: `\A`, `\z`, `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion)
- [Wortbegrenzungs-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
