---
title: "Wildcards: ."
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Ein **Wildcard** passt auf alle Zeichen außer Zeilenendzeichen. Es passt auch auf Zeilenendzeichen, wenn das `s`-Flag gesetzt ist.

## Syntax

```regex
.
```

## Beschreibung

`.` passt auf jedes Zeichen außer [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators). Wenn das [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)-Flag gesetzt ist, passt `.` auch auf Zeilenendzeichen.

Der genaue Zeichensatz, auf den `.` passt, hängt davon ab, ob der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist. Wenn er Unicode-bewusst ist, passt `.` auf jeden Unicode-Codepoint; andernfalls passt es auf jede UTF-16-Codeeinheit. Zum Beispiel:

```js
/../.test("😄"); // true; matches two UTF-16 code units as a surrogate pair
/../u.test("😄"); // false; input only has one Unicode character
```

## Beispiele

### Verwendung mit Quantifizierern

Wildcards werden häufig mit [Quantifizierern](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) verwendet, um eine beliebige Zeichenfolge zu finden, bis das nächste interessante Zeichen gefunden wird. Zum Beispiel extrahiert das folgende Beispiel den Titel einer Markdown-Seite in der Form `# Titel`:

```js
function parseTitle(entry) {
  // Verwenden Sie den Mehrzeilenmodus, da der Titel möglicherweise nicht
  // am Anfang der Datei steht. Beachten Sie, dass das m-Flag nicht
  // bewirkt, dass . auf Zeilenendzeichen passt, sodass der Titel
  // in einer einzigen Zeile stehen muss.
  // Gibt den durch die erste Erfassungsgruppe abgeglichenen Text zurück.
  return /^#[ \t]+(.+)$/m.exec(entry)?.[1];
}

parseTitle("# Hello world"); // "Hello world"
parseTitle("## Subsection"); // undefined
parseTitle(`
---
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

# Wildcards: .

Ein **Wildcard** passt auf alle Zeichen außer Zeilenendzeichen.
`); // "Wildcards: ."
```

### Inhalt eines Codeblocks abgleichen

Das folgende Beispiel gleicht den Inhalt eines durch drei Backticks eingeschlossenen Codeblocks in Markdown ab. Es verwendet das `s`-Flag, damit `.` auf Zeilenendzeichen passt, da der Inhalt eines Codeblocks mehrere Zeilen umfassen kann:

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
Eine \`try...catch\`-Anweisung muss die Blöcke in geschweiften Klammern einschließen.

\`\`\`js example-bad
try
  doSomething();
catch (e)
  console.log(e);
\`\`\`
`); // "try\n  doSomething();\ncatch (e)\n  console.log(e);"
````

> [!WARNING]
> Diese Beispiele dienen nur zur Demonstration. Wenn Sie Markdown parsen möchten, verwenden Sie einen dedizierten Markdown-Parser, da es viele Sonderfälle zu beachten gibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Escape-Sequenz für Zeichenklassen: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
