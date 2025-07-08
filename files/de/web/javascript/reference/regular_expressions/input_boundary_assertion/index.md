---
title: "Input-Grenzfallassertion: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Input-Grenzfallassertion** überprüft, ob die aktuelle Position im String eine Input-Grenze ist. Eine Input-Grenze ist der Anfang oder das Ende des Strings; oder, wenn das `m`-Flag gesetzt ist, der Anfang oder das Ende einer Zeile.

## Syntax

```regex
^
$
```

## Beschreibung

`^` behauptet, dass die aktuelle Position der Anfang des Inputs ist. `$` behauptet, dass die aktuelle Position das Ende des Inputs ist. Beide sind _Assertierungen_, daher verbrauchen sie keine Zeichen.

Genauer gesagt, `^` behauptet, dass das Zeichen links außerhalb der Grenzen des Strings ist; `$` behauptet, dass das Zeichen rechts außerhalb der Grenzen des Strings ist. Wenn das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)-Flag gesetzt ist, passt `^` auch, wenn das Zeichen links ein [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) ist, und `$` passt auch, wenn das Zeichen rechts ein Zeilenabschlusszeichen ist.

Wenn das `m`-Flag nicht gesetzt ist, machen die `^`- und `$`-Assertions nur Sinn, wenn sie an den Begrenzungen des Musters platziert sind, da alle anderen Zeichen links oder rechts von ihnen notwendigerweise dazu führen, dass die Assertion fehlschlägt.

Das `y`-Flag ändert nicht die Bedeutung dieser Assertions – siehe auch [Verankertes Sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

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

### Datei-Erweiterungen abgleichen

Das folgende Beispiel überprüft Dateitypen durch das Abgleichen der Dateierweiterung, die immer am Ende des Strings kommt:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Gesamten Input abgleichen

Manchmal möchten Sie sicherstellen, dass Ihr Regex den gesamten Input abgleicht, nicht nur einen Teilstring des Inputs. Zum Beispiel, wenn Sie feststellen möchten, ob ein String ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, können Sie an beiden Enden des Musters Input-Grenzfallassertionen hinzufügen:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

Diese Funktion ist nützlich beim Codegen (Erzeugen von Code mittels Code), weil Sie gültige Bezeichner anders verwenden können als andere String-Eigenschaften, wie z.B. [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) anstelle von [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

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
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
