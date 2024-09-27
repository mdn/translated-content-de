---
title: "Wildcard: ."
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **Wildcard** entspricht allen Zeichen außer Zeilenendemarken. Es entspricht auch Zeilenendemarken, wenn das `s`-Flag gesetzt ist.

## Syntax

```regex
.
```

## Beschreibung

`.` entspricht jedem Zeichen außer [Zeilenendemarken](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators). Wenn das [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) Flag gesetzt ist, entspricht `.` auch Zeilenendemarken.

Das genaue Zeichen-Set, das von `.` erfasst wird, hängt davon ab, ob der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist. Ist er Unicode-bewusst, entspricht `.` jedem Unicode-Codepunkt; andernfalls entspricht es jeder UTF-16 Code-Einheit. Zum Beispiel:

```js
/../.test("😄"); // true; matches two UTF-16 code units as a surrogate pair
/../u.test("😄"); // false; input only has one Unicode character
```

## Beispiele

### Nutzung mit Quantifizierern

Wildcards werden häufig mit [Quantifizierern](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) verwendet, um eine Zeichenfolge zu erfassen, bis das nächste interessante Zeichen gefunden wird. Zum Beispiel extrahiert das folgende Beispiel den Titel einer Markdown-Seite in der Form `# Titel`:

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

### Inhalt eines Code-Blocks erfassen

Das folgende Beispiel erfasst den Inhalt eines Code-Blocks, der in Markdown von drei Backticks umschlossen ist. Es verwendet das `s`-Flag, um `.` so einzustellen, dass es Zeilenendemarken erfasst, da der Inhalt eines Code-Blocks mehrere Zeilen umfassen kann:

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
> Diese Beispiele dienen nur zu Demonstrationszwecken. Wenn Sie Markdown parsen möchten, verwenden Sie einen dedizierten Markdown-Parser, da es viele Randfälle zu berücksichtigen gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Escape-Sequenzen für Zeichenklassen: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
