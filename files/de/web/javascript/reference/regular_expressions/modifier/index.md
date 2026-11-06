---
title: "Modifikator: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Ein **Modifikator** überschreibt die Einstellungen von [Flags](/de/docs/Web/JavaScript/Reference/Regular_expressions#regex_flags) in einem bestimmten Teil eines regulären Ausdrucks. Damit lassen sich Flags aktivieren oder deaktivieren, die die Bedeutung bestimmter Syntaxelemente eines regulären Ausdrucks ändern. Diese Flags sind [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) und [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntax

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript unterstützt nur die „begrenzte“ Form des Modifikators, bei der das Muster innerhalb der Modifikatorgruppe steht. Die meisten anderen Sprachen, die Modifikatoren unterstützen, bieten auch eine „unbegrenzte“ Form, bei der der Modifikator bis zum Ende der nächstgelegenen umschließenden Gruppe gilt.

### Parameter

- `flags1` {{optional_inline}}
  - : Eine Zeichenfolge mit zu aktivierenden Flags. Sie kann eine beliebige Kombination aus `i`, `m` und `s` enthalten.
- `flags2` {{optional_inline}}
  - : Eine Zeichenfolge mit zu deaktivierenden Flags. Sie kann eine beliebige Kombination aus `i`, `m` und `s` enthalten, darf aber keine Flags enthalten, die bereits in `flags1` vorkommen.
- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem Regex-Literal zulässig ist, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Einige Flags ändern die Bedeutung von Syntaxelementen regulärer Ausdrücke:

- Das Flag [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) macht den regulären Ausdruck unabhängig von der Groß- und Kleinschreibung, indem es die Schreibweise von [literalen Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) normalisiert.
- Das Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) ändert das Verhalten der [Zusicherungen für Eingabegrenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` und `$`: Sie entsprechen dann nicht nur dem Anfang und Ende der Eingabezeichenfolge, sondern auch dem Anfang und Ende jeder Zeile.
- Das Flag [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) ändert das Verhalten des [Platzhalters](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) `.`: Er entspricht dann jedem Zeichen, einschließlich Zeilenumbruchzeichen.

Manchmal sollen diese Änderungen nur in einem bestimmten Teil eines Regex-Musters gelten. Dazu können Sie diesen Teil in einen Modifikator einschließen. Zum Beispiel:

```js
/(?i:Hello) world/;
```

In diesem regulären Ausdruck ist das Flag `i` nur für den Teil `Hello` des Musters aktiviert. Beim Teil `world` wird zwischen Groß- und Kleinschreibung unterschieden. Daher werden `Hello world`, `hello world` und `HELLO world` erkannt, nicht aber `HELLO WORLD`. Das folgende Muster ist gleichwertig: Es aktiviert das Flag `i` für den gesamten regulären Ausdruck und deaktiviert es anschließend für den Teil `world`:

```js
/Hello (?-i:world)/i;
```

Die Parameter `flags1` und `flags2` können jede beliebige Kombination aus `i`, `m` und `s` enthalten. Jedes Flag darf jedoch in `flags1` und `flags2` zusammen nur einmal vorkommen: Sie können ein Flag weder zweimal aktivieren oder deaktivieren noch es aktivieren und unmittelbar danach deaktivieren.

Die Parameter `flags1` und `flags2` sind optional, aber mindestens einer von ihnen darf nicht leer sein. `(?flags1-:pattern)` ist ein Modifikator, der nur Flags aktiviert (gleichwertig mit `(?flags1:pattern)`). `(?-flags2:pattern)` ist ein Modifikator, der nur Flags deaktiviert. `(?:pattern)` ist lediglich eine [nicht-erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), und `(?-:pattern)` ist ein Syntaxfehler.

Andere Flags sind in einem Modifikator nicht sinnvoll und verursachen daher einen Syntaxfehler, wenn sie darin enthalten sind:

- Die Flags [`g`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) und [`y`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) bestimmen, wie sich mehrere Aufrufe von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhalten, und beeinflussen das Abgleichverhalten des gesamten regulären Ausdrucks.
- Das Flag [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) aktiviert zusätzliche Informationen im Ergebnis von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) und beeinflusst das Abgleichverhalten des gesamten regulären Ausdrucks.
- Die Flags [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) ändern das Verhalten der Regex-Engine auf eine Weise, die zu komplex ist, um sie auf einen Teil des Musters zu beschränken. Sie wirken sich außerdem auf den gesamten regulären Ausdruck aus, beispielsweise darauf, wie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) weitergesetzt wird.

## Beispiele

### Ein mehrzeiliges Format nur am Anfang der Zeichenfolge erkennen

Der folgende reguläre Ausdruck definiert ein Format für eine mehrzeilige Zeichenfolge. Das erste `^` steht für den Anfang der gesamten Eingabezeichenfolge, da es sich innerhalb eines `(?-m:)`-Modifikators befindet. Alle anderen `^`-Zeichen stehen dagegen für den Anfang einer Zeile:

```js
const pattern = /(?-m:^)---\n^title:.*^slug:.*^---/ms;

const input = `---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
---`;

pattern.test(input); // true

// Extra line break at the start of string
const input2 = `\n${input}`;

pattern.test(input2); // false
```

### Bestimmte Wörter unabhängig von der Groß- und Kleinschreibung erkennen

Angenommen, Sie suchen nach allen Variablendeklarationen mit den Namen `foo` oder `bar` (weil dies schlechte Namen sind). Der Name kann in beliebiger Groß- und Kleinschreibung vorkommen, aber Sie wissen, dass das Schlüsselwort immer kleingeschrieben ist. Daher können Sie Folgendes verwenden:

```js
const pattern = /(?:var|let|const) (?i:foo|bar)\b/;

pattern.test("let foo;"); // true
pattern.test("const BAR = 1;"); // true
pattern.test("Let foo be a number"); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) – Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
