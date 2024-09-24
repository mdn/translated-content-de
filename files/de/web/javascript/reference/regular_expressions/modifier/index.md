---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}{{SeeCompatTable}}

Ein **Modifier** überschreibt [Flag]-Einstellungen (/de/docs/Web/JavaScript/Reference/Regular_expressions#regex_flags) in einem bestimmten Teil eines regulären Ausdrucks. Er kann verwendet werden, um Flags zu aktivieren oder zu deaktivieren, die die Bedeutungen bestimmter Regex-Syntaxelemente ändern. Diese Flags sind [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) und [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntax

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript hat nur die "begrenzte" Modifier-Form, bei der das Muster innerhalb der Modifier-Gruppe platziert wird. Die meisten anderen Sprachen, die Modifier unterstützen, haben eine "unbegrenzte" Form, bei der der Modifier bis zum Ende der nächsten beinhaltenden Gruppe angewendet wird.

### Parameter

- `flags1` {{optional_inline}}
  - : Ein String von Flags zur Aktivierung. Kann jede Kombination von `i`, `m` und `s` enthalten.
- `flags2` {{optional_inline}}
  - : Ein String von Flags zur Deaktivierung. Kann jede Kombination von `i`, `m` und `s` enthalten, darf jedoch keine Flags enthalten, die in `flags1` enthalten sind.
- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Einige Flags ändern die Bedeutungen von Regex-Syntaxelementen:

- Das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag macht den Regex groß- und kleinschreibungsunempfindlich, indem alle [wörtlichen Zeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) implizit klein geschrieben werden.
- Das [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) Flag ändert das Verhalten von [Eingabebegrenzungs-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` und `$`, sodass sie den Beginn und das Ende jeder Zeile zusätzlich zum Beginn und Ende des Eingabestrings treffen.
- Das [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) Flag ändert das Verhalten des [Jokerzeichens](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) `.` so, dass es jedes Zeichen, einschließlich Zeilenabschlusster;], trifft.

Manchmal möchten Sie, dass diese Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam werden. Dies können Sie erreichen, indem Sie diesen Teil in einen Modifier einbetten. Zum Beispiel:

```js
/(?i:Hello) world/;
```

In diesem Regex ist das `i`-Flag nur für den `Hello`-Teil des Musters aktiviert. Der `world`-Teil ist groß-/kleinschreibungssensitiv. Daher trifft es auf `Hello world`, `hello world` und `HELLO world`, aber nicht auf `HELLO WORLD`. Das Folgende ist äquivalent, indem das `i`-Flag global aktiviert und dann für den `world`-Teil deaktiviert wird:

```js
/Hello (?-i:world)/i;
```

Die Parameter `flags1` und `flags2` können jede Kombination von `i`, `m` und `s` enthalten. Die Flags müssen jedoch zwischen `flags1` und `flags2` eindeutig sein – Sie können ein Flag nicht zweimal aktivieren oder deaktivieren oder ein Flag aktivieren und dann sofort deaktivieren.

Die Parameter `flags1` und `flags2` sind optional, aber mindestens einer muss nicht leer sein. `(?flags1-:pattern)` ist ein Modifier, der nur Flags aktiviert (äquivalent zu `(?flags1:pattern)`). `(?-flags2:pattern)` ist ein Modifier, der nur Flags deaktiviert. `(?:pattern)` ist einfach eine [nicht speichernde Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), und `(?-:pattern)` ist ein Syntaxfehler.

Andere Flags sind in einem Modifier sinnlos und führen daher zu Syntaxfehlern, wenn sie eingeschlossen werden:

- Die [`g`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) und [`y`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags bestimmen, wie sich mehrere Aufrufe von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) verhalten und beeinflussen das Übereinstimmungsverhalten des gesamten Regex.
- Das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag aktiviert zusätzliche Informationen im [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) Ergebnis und beeinflusst das Übereinstimmungsverhalten des gesamten Regex.
- Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) Flags ändern das Verhalten der Regex-Engine auf eine Weise, die zu komplex ist, um lokal modifiziert zu werden. Sie haben auch globale Auswirkungen auf den Regex, wie die Fortschrei> ».

## Beispiele

### Ein mehrzeiliges Format nur am Anfang des Strings abgleichen

Der folgende Regex definiert ein Format für einen mehrzeiligen String. Das erste `^` steht für den Anfang des gesamten Eingabestrings, da es innerhalb eines `(?-m:)` Modifiers ist, während alle anderen `^`-Zeichen den Beginn einer Zeile bezeichnen:

```js
const pattern = /(?-m:^)---\n^title:.*^slug:.*^---/ms;

const input = `---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
---`;

pattern.test(input); // true

// Zeilenumbruch am Start des Strings
const input2 = `\n${input}`;

pattern.test(input2); // false
```

### Bestimmte Wörter ohne Rücksicht auf Groß-/Kleinschreibung abgleichen

Stellen Sie sich vor, Sie finden alle Variablendeklarationen namens `foo` oder `bar` (weil sie schlechte Namen sind). Das Wort kann in jeder Groß-/Kleinschreibung vorkommen, aber Sie wissen, dass das Schlüsselwort immer kleingeschrieben ist, deshalb können Sie das tun:

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
- [Nicht speichernde Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
