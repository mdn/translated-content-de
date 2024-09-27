---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}{{SeeCompatTable}}

Ein **Modifier** überschreibt die [Flag](/de/docs/Web/JavaScript/Reference/Regular_expressions#regex_flags) Einstellungen in einem speziellen Teil eines regulären Ausdrucks. Er kann verwendet werden, um Flags zu aktivieren oder zu deaktivieren, die die Bedeutungen bestimmter Regex-Syntaxelemente ändern. Diese Flags sind [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) und [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntax

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript hat nur die "begrenzte" Modifier-Form, bei der das Muster innerhalb der Modifier-Gruppe platziert wird. Die meisten anderen Sprachen, die Modifier unterstützen, haben eine "unbegrenzte" Form, bei der der Modifier bis zum Ende der nächstgelegenen enthaltenden Gruppe angewendet wird.

### Parameter

- `flags1` {{optional_inline}}
  - : Eine Zeichenkette von Flags, die aktiviert werden sollen. Kann jede Kombination von `i`, `m` und `s` enthalten.
- `flags2` {{optional_inline}}
  - : Eine Zeichenkette von Flags, die deaktiviert werden sollen. Kann jede Kombination von `i`, `m` und `s` enthalten, darf jedoch keine Flags enthalten, die in `flags1` enthalten sind.
- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunction](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Einige Flags ändern die Bedeutungen von Regex-Syntaxelementen:

- Das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag macht den Regex nicht mehr case-sensitiv, indem es alle [Literalzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) implizit zu Kleinbuchstaben macht.
- Das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) Flag ändert das Verhalten von [Eingabegrenzen-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` und `$`, um den Anfang und das Ende jeder Zeile zu erfassen, zusätzlich zum Anfang und Ende der Eingabezeichenfolge.
- Das [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) Flag ändert das Verhalten des [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) `.` Zeichens, um jedes Zeichen, einschließlich Zeilenendzeichen, zu erfassen.

Manchmal möchten Sie, dass diese Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden. Sie können dies tun, indem Sie diesen Teil in einen Modifier einbetten. Zum Beispiel:

```js
/(?i:Hello) world/;
```

In diesem Regex ist das `i` Flag nur für den `Hello`-Teil des Musters aktiviert. Der `world`-Teil ist case-sensitiv. Daher passt es zu `Hello world`, `hello world` und `HELLO world`, aber nicht zu `HELLO WORLD`. Das Folgende ist gleichwertig, indem das `i` Flag global aktiviert und dann für den `world`-Teil deaktiviert wird:

```js
/Hello (?-i:world)/i;
```

Die `flags1` und `flags2` Parameter können jede Kombination von `i`, `m` und `s` enthalten. Die Flags müssen jedoch eindeutig zwischen `flags1` und `flags2` sein — Sie können ein Flag nicht zweimal aktivieren oder deaktivieren oder ein Flag aktivieren und dann sofort deaktivieren.

Die `flags1` und `flags2` Parameter sind optional, aber mindestens einer muss nicht leer sein. `(?flags1-:pattern)` ist ein Modifier, der nur Flags aktiviert (entspricht `(?flags1:pattern)`). `(?-flags2:pattern)` ist ein Modifier, der nur Flags deaktiviert. `(?:pattern)` ist nur eine [nicht erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), und `(?-:pattern)` ist ein Syntaxfehler.

Andere Flags sind in einem Modifier nicht sinnvoll und sind daher Syntaxfehler, wenn sie enthalten sind:

- Die [`g`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) und [`y`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags bestimmen, wie sich mehrere Aufrufe von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhalten und beeinflussen das Matching-Verhalten des gesamten Regex.
- Das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag ermöglicht zusätzliche Informationen im [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Ergebnis und beeinflusst das Matching-Verhalten des gesamten Regex.
- Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags ändern das Verhalten der Regex-Engine auf eine Weise, die zu komplex ist, um lokal modifiziert zu werden. Sie haben auch globale Auswirkungen auf den Regex, wie z. B. wie der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) fortgeschrieben wird.

## Beispiele

### Ein mehrzeiliges Format nur am Anfang der Zeichenkette abgleichen

Der folgende Regex definiert ein Format für eine mehrzeilige Zeichenkette. Das erste `^` repräsentiert den Anfang der gesamten Eingabezeichenkette, indem es sich innerhalb eines `(?-m:)` Modifiers befindet, während alle anderen `^` Zeichen den Anfang einer Zeile darstellen:

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

### Bestimmte Wörter case-insensitiv abgleichen

Stellen Sie sich vor, Sie finden alle Variablendeklarationen mit dem Namen `foo` oder `bar` (da sie schlechte Namen sind). Das Wort kann in beliebiger Groß- oder Kleinschreibung erscheinen, aber Sie wissen, dass das Schlüsselwort immer klein geschrieben ist, sodass Sie dies tun können:

```js
const pattern = /(?:var|let|const) (?i:foo|bar)\b/i;

pattern.test("let foo;"); // true
pattern.test("const BAR = 1;"); // true
pattern.test("Let foo be a number"); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
