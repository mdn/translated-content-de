---
title: "Assertion für Eingabegrenzen: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **Assertion für Eingabegrenzen** prüft, ob die aktuelle Position in der Zeichenfolge an einer Eingabegrenze liegt. Eine Eingabegrenze ist der Anfang oder das Ende der Zeichenfolge oder, wenn das `m`-Flag gesetzt ist, der Anfang oder das Ende einer Zeile.

> [!NOTE]
> Um im `m`-Modus den Anfang und das Ende der gesamten Zeichenfolge abzugleichen, verwenden Sie die [Assertionen für Puffergrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) `\A` und `\z`.

## Syntax

```regex
^
$
```

## Beschreibung

`^` stellt sicher, dass die aktuelle Position am Anfang der Eingabe liegt. `$` stellt sicher, dass die aktuelle Position am Ende der Eingabe liegt. Beide sind _Assertionen_ und verbrauchen daher keine Zeichen.

Genauer gesagt stellt `^` sicher, dass sich links von der aktuellen Position kein Zeichen der Zeichenfolge befindet; `$` stellt sicher, dass sich rechts davon kein Zeichen der Zeichenfolge befindet. Wenn das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)-Flag gesetzt ist, trifft `^` auch zu, wenn das Zeichen links davon ein [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) ist. Entsprechend trifft `$` auch zu, wenn das Zeichen rechts davon ein Zeilenabschlusszeichen ist.

Solange das `m`-Flag nicht gesetzt ist, sind diese Assertionen nur sinnvoll, wenn links beziehungsweise rechts davon keine Zeichen erwartet werden. Beispielsweise kann `f^o` nie übereinstimmen, da `^` nicht gleichzeitig am Anfang der Zeichenfolge stehen und ein Zeichen links von sich haben kann.

Diese Assertionen ändern die Übereinstimmungspositionen nicht, wenn das `y`-Flag verwendet wird – siehe auch [verankertes Sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

## Beispiele

### Abschließende Schrägstriche entfernen

Das folgende Beispiel entfernt abschließende Schrägstriche aus einer URL-Zeichenfolge:

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### Dateiendungen abgleichen

Das folgende Beispiel prüft Dateitypen anhand der Dateiendung, die immer am Ende der Zeichenfolge steht:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Gesamte Eingabe abgleichen

Manchmal möchten Sie sicherstellen, dass Ihr regulärer Ausdruck mit der gesamten Eingabe übereinstimmt und nicht nur mit einer Teilzeichenfolge. Wenn Sie beispielsweise prüfen, ob eine Zeichenfolge ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, können Sie an beiden Enden des Musters Assertionen für Eingabegrenzen hinzufügen:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

Diese Funktion ist bei der Codegenerierung (dem Erzeugen von Code mithilfe von Code) nützlich, da Sie gültige Bezeichner anders als andere Zeichenfolgen als Eigenschaftsnamen verwenden können: beispielsweise mit [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) statt mit [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

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

- [Leitfaden zu Assertionen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Assertion für Puffergrenzen: `\A`, `\z`, `\Z`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion)
- [Assertion für Wortgrenzen: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
