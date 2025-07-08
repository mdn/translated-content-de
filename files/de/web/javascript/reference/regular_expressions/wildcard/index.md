---
title: "Wildcard: ."
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Wildcard** (Platzhalter) passt auf alle Zeichen außer Zeilenendzeichen. Es passt auch auf Zeilenendzeichen, wenn das `s`-Flag gesetzt ist.

## Syntax

```regex
.
```

## Beschreibung

`.` passt auf jedes Zeichen außer den [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators). Wenn das [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)-Flag gesetzt ist, passt `.` auch auf Zeilenendzeichen.

Der genaue Zeichensatz, auf den `.` passt, hängt davon ab, ob der Regex [Unicode-fähig](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist. Wenn er Unicode-fähig ist, passt `.` auf jeden Unicode-Codepunkt; andernfalls passt er auf jede UTF-16-Codeeinheit. Zum Beispiel:

```js
/../.test("😄"); // true; matches two UTF-16 code units as a surrogate pair
/../u.test("😄"); // false; input only has one Unicode character
```

## Beispiele

### Verwendung mit Quantifizierern

Wildcards werden oft mit [Quantifizierern](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) verwendet, um jede Zeichenfolge zu erfassen, bis das nächste relevante Zeichen gefunden wird. Zum Beispiel extrahiert das folgende Beispiel den Titel einer Markdown-Seite in der Form `# Title`:

```js
function parseTitle(entry) {
  // Use multiline mode because the title may not be at the start of
  // the file. Note that the m flag does not make . match line
  // terminators, so the title must be on a single line
  // Return text matched by the first capturing group.
  return /^#[ \t]+(.+)$/m.exec(entry)?.[1];
}

parseTitle("# Hello world"); // "Hello world"
parseTitle("## Subsection"); // undefined
parseTitle(`
---
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

# Wildcard: .

A **wildcard** matches all characters except line terminators.
`); // "Wildcard: ."
```

### Inhalte von Codeblöcken abgleichen

Das folgende Beispiel stimmt mit dem Inhalt eines Codeblocks überein, der in Markdown durch drei Backticks eingeschlossen ist. Es verwendet das `s`-Flag, damit `.` auf Zeilenendzeichen passt, da der Inhalt eines Codeblocks mehrere Zeilen umfassen kann:

````js
function parseCodeBlock(entry) {
  return /^```.*?^(.+?)\n```/ms.exec(entry)?.[1];
}

parseCodeBlock(`
\`\`\`js
console.log("Hello world");
\`\`\`
`); // "console.log("Hello world");"

parseCodeBlock(`
A \`try...catch\` statement must have the blocks enclosed in curly braces.

\`\`\`js example-bad
try
  doSomething();
catch (e)
  console.log(e);
\`\`\`
`); // "try\n  doSomething();\ncatch (e)\n  console.log(e);"
````

> [!WARNING]
> Diese Beispiele dienen nur zur Veranschaulichung. Wenn Sie Markdown parsen möchten, verwenden Sie einen dedizierten Markdown-Parser, da es viele Sonderfälle zu beachten gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
