---
title: "Eingangsgrenzen-Assertion: ^, $"
slug: Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Eingangsgrenzen-Assertion** prüft, ob die aktuelle Position im String eine Eingangsgrenze ist. Eine Eingangsgrenze ist der Anfang oder das Ende des Strings; oder, wenn das `m`-Flag gesetzt ist, der Anfang oder das Ende einer Zeile.

## Syntax

```regex
^
$
```

## Beschreibung

`^` setzt voraus, dass sich die aktuelle Position am Anfang der Eingabe befindet. `$` setzt voraus, dass sich die aktuelle Position am Ende der Eingabe befindet. Beide sind _Assertions_, sie verbrauchen also keine Zeichen.

Genauer gesagt setzt `^` voraus, dass das Zeichen links außerhalb der Grenzen des Strings ist; `$` setzt voraus, dass das Zeichen rechts außerhalb der Grenzen des Strings ist. Wenn das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)-Flag gesetzt ist, passt `^` auch, wenn das Zeichen links ein [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) ist, und `$` passt auch, wenn das Zeichen rechts ein Zeilenabschlusszeichen ist.

Sofern das `m`-Flag nicht gesetzt ist, machen `^`- und `$`-Assertions nur Sinn, wenn sie an den Grenzen des Musters platziert sind, da alle anderen Zeichen links oder rechts von ihnen zwangsläufig einen Fehler der Assertion verursachen würden.

Das `y`-Flag ändert die Bedeutung dieser Assertions nicht — siehe auch [angeklebtes sticky-Flag](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky#anchored_sticky_flag).

## Beispiele

### Entfernen von abschließenden Schrägstrichen

Das folgende Beispiel entfernt abschließende Schrägstriche aus einer URL-Zeichenkette:

```js
function removeTrailingSlash(url) {
  return url.replace(/\/$/, "");
}

removeTrailingSlash("https://example.com/"); // "https://example.com"
removeTrailingSlash("https://example.com/docs/"); // "https://example.com/docs"
```

### Prüfen von Dateiendungen

Das folgende Beispiel überprüft Dateitypen, indem es die Dateiendung abgleicht, die immer am Ende der Zeichenkette steht:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Übereinstimmung mit der gesamten Eingabe

Manchmal möchten Sie sicherstellen, dass Ihr Regex die gesamte Eingabe trifft und nicht nur eine Teilzeichenkette der Eingabe. Zum Beispiel, wenn Sie bestimmen, ob ein String ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, können Sie Eingangsgrenzen-Assertions an beiden Enden des Musters hinzufügen:

```js
function isValidIdentifier(str) {
  return /^[$_\p{ID_Start}][$_\p{ID_Continue}]*$/u.test(str);
}

isValidIdentifier("foo"); // true
isValidIdentifier("$1"); // true
isValidIdentifier("1foo"); // false
isValidIdentifier("  foo  "); // false
```

Diese Funktion ist nützlich beim Code-Generieren (Erstellen von Code mit Code), da Sie gültige Bezeichner anders verwenden können als andere Zeichenketteneigenschaften, wie zum Beispiel [Punktnotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) anstelle der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation):

```js
const variables = ["foo", "foo:bar", "  foo  "];

function toAssignment(key) {
  if (isValidIdentifier(key)) {
    return `globalThis.${key} = undefined;`;
  }
  // JSON.stringify() entkommt Anführungszeichen und anderen Sonderzeichen
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

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Anleitung
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
