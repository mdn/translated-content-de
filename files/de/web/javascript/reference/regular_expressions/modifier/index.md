---
title: "Modifikator: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
l10n:
  sourceCommit: cd0230e0a3ee63fdf289d7eef37301002fa2345e
---

{{jsSidebar}}

Ein **Modifikator** überschreibt die [Flaggen](/de/docs/Web/JavaScript/Reference/Regular_expressions#regex_flags)-Einstellungen in einem bestimmten Teil eines regulären Ausdrucks. Es kann verwendet werden, um Flaggen zu aktivieren oder zu deaktivieren, welche die Bedeutungen bestimmter Regex-Syntaxelemente ändern. Diese Flaggen sind [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) und [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntax

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript hat nur die "begrenzte" Modifikatorform, bei der das Muster innerhalb der Modifikatorgruppe platziert wird. Die meisten anderen Sprachen, die Modifikatoren unterstützen, haben eine "unbegrenzte" Form, bei der der Modifikator bis zum Ende der nächsten enthaltenen Gruppe angewendet wird.

### Parameter

- `flags1` {{optional_inline}}
  - : Eine Zeichenkette von Flaggen, die aktiviert werden sollen. Kann jede Kombination von `i`, `m` und `s` enthalten.
- `flags2` {{optional_inline}}
  - : Eine Zeichenkette von Flaggen, die deaktiviert werden sollen. Kann jede Kombination von `i`, `m` und `s` enthalten, darf aber keine Flaggen enthalten, die in `flags1` enthalten sind.
- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich eines [Disjunktionsmusters](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Einige Flaggen ändern die Bedeutungen von Regex-Syntaxelementen:

- Die [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flagge macht die Regex-Groß-/Kleinschreibung unempfindlich, indem alle [literal characters](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) und [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) implizit in Kleinbuchstaben umgewandelt werden.
- Die [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)-Flagge ändert das Verhalten von [Eingabebegrenzungsbedingungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` und `$`, um den Anfang und das Ende jeder Zeile zusätzlich zum Anfang und Ende der Eingabezeichenfolge zu entsprechen.
- Die [`s`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)-Flagge ändert das Verhalten des [Wildcard](/de/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)-`.`-Zeichens, um jedem Zeichen zu entsprechen, einschließlich Zeilenumbruchszeichen.

Manchmal möchten Sie, dass diese Änderungen nur in einem bestimmten Teil eines Regex-Musters wirksam sind. Sie können dies tun, indem Sie diesen Teil in einem Modifikator umschließen. Zum Beispiel:

```js
/(?i:Hello) world/;
```

In dieser Regex ist die `i`-Flagge nur für den `Hello`-Teil des Musters aktiviert. Der `world`-Teil ist groß-/kleinheitssensitiv. Daher entspricht es `Hello world`, `hello world` und `HELLO world`, aber nicht `HELLO WORLD`. Das folgende Beispiel ist äquivalent, indem die `i`-Flagge global aktiviert wird und dann für den `world`-Teil deaktiviert wird:

```js
/Hello (?-i:world)/i;
```

Die `flags1`- und `flags2`-Parameter können jede Kombination von `i`, `m` und `s` enthalten. Allerdings müssen die Flaggen eindeutig zwischen `flags1` und `flags2` sein — Sie können eine Flagge nicht zweimal aktivieren oder deaktivieren oder eine Flagge aktivieren und dann sofort deaktivieren.

Die `flags1`- und `flags2`-Parameter sind optional, aber mindestens einer muss nicht leer sein. `(?flags1-:pattern)` ist ein Modifikator, der nur Flaggen aktiviert (entspricht `(?flags1:pattern)`). `(?-flags2:pattern)` ist ein Modifikator, der nur Flaggen deaktiviert. `(?:pattern)` ist lediglich eine [nicht erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), und `(?-:pattern)` ist ein Syntaxfehler.

Andere Flaggen sind in einem Modifikator nicht sinnvoll und erzeugen daher Syntaxfehler, wenn sie enthalten sind:

- Die [`g`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) und [`y`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flaggen bestimmen, wie mehrere Aufrufe von [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) ablaufen und beeinflussen das Übereinstimmungsverhalten der gesamten Regex.
- Die [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flagge aktiviert zusätzliche Informationen im [`exec()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)-Ergebnis und beeinflusst das Übereinstimmungsverhalten der gesamten Regex.
- Die [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) und [`v`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)-Flaggen ändern das Verhalten der Regex-Engine auf eine Weise, die zu komplex ist, um lokal modifiziert zu werden. Sie haben auch globale Auswirkungen auf die Regex, wie zum Beispiel, wie der [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) fortgeschritten wird.

## Beispiele

### Ein mehrzeiliges Format nur am Anfang der Zeichenfolge abgleichen

Die folgende Regex definiert ein Format für eine mehrzeilige Zeichenkette. Das erste `^` repräsentiert den Anfang der gesamten Eingabezeichenfolge, da es sich innerhalb eines `(?-m:)`-Modifikators befindet, während alle anderen `^`-Zeichen den Anfang einer Zeile darstellen:

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

### Bestimmte Wörter groß-/kleinheitsunempfindlich abgleichen

Stellen Sie sich vor, Sie suchen alle Variablendeklarationen, die `foo` oder `bar` heißen (weil es schlechte Namen sind). Das Wort kann in beliebiger Groß-/Kleinschreibung erscheinen, aber Sie wissen, dass das Schlüsselwort immer klein geschrieben ist, also können Sie dies tun:

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
