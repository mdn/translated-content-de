---
title: "Modifikator: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: b7b0b7c096525c24c22d80f79448823c747491e7
---

{{jsSidebar}}

Ein **Modifikator** überschreibt [Flags](/de/docs/Web/JavaScript/Reference/Regular_expressions#regex_flags) Einstellungen in einem spezifischen Teil eines regulären Ausdrucks. Er kann verwendet werden, um Flags zu aktivieren oder zu deaktivieren, die die Bedeutung bestimmter RegEx-Syntaxelemente ändern. Diese Flags sind [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) und [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntax

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript hat nur die "begrenzte" Modifikatorform, bei der das Muster innerhalb der Modifikatorgruppe platziert wird. Die meisten anderen Sprachen, die Modifikatoren unterstützen, haben eine "unbegrenzte" Form, bei der der Modifikator bis zum Ende der nächstgelegenen umgebenden Gruppe gilt.

### Parameter

- `flags1` {{optional_inline}}
  - : Ein String von zu aktivierenden Flags. Kann jede Kombination von `i`, `m` und `s` enthalten.
- `flags2` {{optional_inline}}
  - : Ein String von zu deaktivierenden Flags. Kann jede Kombination von `i`, `m` und `s` enthalten, darf jedoch keine Flags enthalten, die in `flags1` enthalten sind.
- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was Sie in einem RegEx-Literal verwenden dürfen, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Einige Flags ändern die Bedeutung von RegEx-Syntaxelementen:

- Das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag macht den RegEx case-insensitive, indem alle [Literalzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) implizit kleingeschrieben werden.
- Das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) Flag ändert das Verhalten von [Eingabebegrenzungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` und `$`, sodass sie den Anfang und das Ende jeder Zeile zusätzlich zum Anfang und Ende des Eingabestrings abgleichen.
- Das [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) Flag ändert das Verhalten des [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) Zeichens `.` so, dass es mit jedem Zeichen, einschließlich Zeilenendzeichen, übereinstimmt.

Manchmal möchten Sie, dass diese Änderungen nur in einem bestimmten Teil eines RegEx-Musters wirksam werden. Dies können Sie erreichen, indem Sie diesen Teil in einen Modifikator einschließen. Zum Beispiel:

```js
/(?i:Hello) world/;
```

In diesem RegEx ist das `i` Flag nur für den `Hello` Teil des Musters aktiviert. Der `world` Teil ist case-sensitiv. Somit passt es zu `Hello world`, `hello world` und `HELLO world`, aber nicht zu `HELLO WORLD`. Dies ist gleichwertig, indem das `i` Flag global aktiviert und dann für den `world` Teil deaktiviert wird:

```js
/Hello (?-i:world)/i;
```

Die `flags1` und `flags2` Parameter können jede Kombination von `i`, `m` und `s` enthalten. Die Flags müssen jedoch einzigartig zwischen `flags1` und `flags2` sein – Sie können nicht ein Flag zweimal aktivieren oder deaktivieren oder ein Flag aktivieren und dann sofort deaktivieren.

Die `flags1` und `flags2` Parameter sind optional, aber mindestens einer muss nicht leer sein. `(?flags1-:pattern)` ist ein Modifikator, der nur Flags aktiviert (gleichwertig mit `(?flags1:pattern)`). `(?-flags2:pattern)` ist ein Modifikator, der nur Flags deaktiviert. `(?:pattern)` ist einfach eine [nicht-erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), und `(?-:pattern)` ist ein Syntaxfehler.

Andere Flags ergeben in einem Modifikator keinen Sinn und sind daher Syntaxfehler, wenn sie enthalten sind:

- Die [`g`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) und [`y`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags bestimmen, wie mehrfaches Aufrufen von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) funktioniert und beeinflussen das Matching-Verhalten des gesamten RegEx.
- Das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag aktiviert zusätzliche Informationen im [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Ergebnis und beeinflusst das Matching-Verhalten des gesamten RegEx.
- Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags ändern das Verhalten der RegEx-Engine auf eine Weise, die zu komplex ist, um lokal verändert zu werden. Sie haben auch globale Effekte auf den RegEx, wie zum Beispiel, wie der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vorwärts bewegt wird.

## Beispiele

### Ein Multiline-Format nur am Anfang des Strings abgleichen

Der folgende RegEx definiert ein Format für einen mehrzeiligen String. Das erste `^` repräsentiert den Anfang des gesamten Eingabestrings, indem es sich innerhalb eines `(?-m:)` Modifikators befindet, während alle anderen `^` Zeichen den Anfang einer Zeile darstellen:

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

Stellen Sie sich vor, Sie suchen alle Variablendeklarationen namens `foo` oder `bar` (weil sie schlechte Namen sind). Das Wort kann in beliebiger Groß-/Kleinschreibung erscheinen, aber Sie wissen, dass das Schlüsselwort immer kleingeschrieben ist, also können Sie dies tun:

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

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
