---
title: "Rückverweis: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Ein **Rückverweis** bezieht sich auf die Teilübereinstimmung einer vorherigen [Capturing Group](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) und stimmt mit demselben Text wie diese Gruppe überein. Für [benannte Capturing Groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) können Sie stattdessen die Syntax für [benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) verwenden.

## Syntax

```regex
\N
```

> [!NOTE]
> `N` ist kein Literalzeichen.

### Parameter

- `N`
  - : Eine positive ganze Zahl, die die Nummer einer Capturing Group angibt.

## Beschreibung

Mit einem Rückverweis lässt sich derselbe Text abgleichen, der zuvor von einer Capturing Group erfasst wurde. Capturing Groups werden ab 1 gezählt. Auf das Ergebnis der ersten Capturing Group kann daher mit `\1` verwiesen werden, auf das der zweiten mit `\2` und so weiter. `\0` ist ein [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Bei einem [Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) kann der Rückverweis mit Text übereinstimmen, dessen Groß- und Kleinschreibung sich vom ursprünglichen Text unterscheidet.

```js
/(b)\1/i.test("bB"); // true
```

Der Rückverweis muss auf eine vorhandene Capturing Group verweisen. Ist die angegebene Nummer größer als die Gesamtzahl der Capturing Groups, wird ein Syntaxfehler ausgelöst.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

Die gesamte Folge von Dezimalziffern wird als Nummer der Capturing Group interpretiert. Beispielsweise verweist `\12` auf die zwölfte Capturing Group und nicht auf die erste Capturing Group, gefolgt von einem literalen `2`.

Im [Modus ohne Unicode-Unterstützung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) wird das Escape unterschiedlich interpretiert, wenn die angegebene Capturing Group nicht existiert. Ausschlaggebend ist die erste Ziffer:

- Beginnt es mit einer Ziffer von `1` bis `7`, wird es zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences). Dabei werden bis zu drei Oktalziffern mit einem Höchstwert von `0o377` verwendet. Alle übrigen Ziffern sind Literalzeichen.
- Beginnt es mit `8` oder `9`, wird es zu einem [Identity-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape), das mit der Ziffer selbst übereinstimmt. Alle übrigen Ziffern sind Literalzeichen.

Der Parser versucht nicht erneut, eine kürzere Nummer einer Capturing Group zu verwenden.

Diese Syntaxvarianten sind [aus Gründen der Webkompatibilität veraltet](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp). Sie sollten sich nicht auf sie verlassen.

```js
/(a)\2/.test("a\x02"); // true
/(a)\12/.test("a\n"); // true; octal 12, not a backreference to group 1 followed by 2
/\18/.test("\x018"); // true; octal 1 followed by a literal 8
/\1234/.test("S4"); // true; octal 123 followed by a literal 4
/\400/.test(" 0"); // true; octal 40 followed by a literal 0
/\89/.test("89"); // true; identity escape followed by a literal 9
```

Wenn für die referenzierte Capturing Group keine Übereinstimmung vorliegt (beispielsweise weil sie zu einer nicht passenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört) oder die Gruppe noch nicht abgeglichen wurde (beispielsweise weil sie rechts vom Rückverweis steht), ist der Rückverweis immer erfolgreich (als würde er mit der leeren Zeichenfolge übereinstimmen).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Beispiele

### Anführungszeichen paarweise zuordnen

Die folgende Funktion findet die Muster `title='xxx'` und `title="xxx"` in einer Zeichenfolge. Damit das öffnende und das schließende Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis auf das erste Anführungszeichen. Der Zugriff auf die zweite Capturing Group (`[2]`) liefert die Zeichenfolge zwischen den passenden Anführungszeichen:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Doppelte Wörter finden

Die folgende Funktion findet doppelte Wörter in einer Zeichenfolge (bei denen es sich in der Regel um Tippfehler handelt). Beachten Sie, dass sie das [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) `\w` verwendet, das nur englische Buchstaben erfasst, jedoch keine Buchstaben mit Akzenten oder Buchstaben aus anderen Alphabeten. Für einen allgemeineren Abgleich können Sie die Zeichenfolge mit [split](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) an Leerraumzeichen aufteilen und über das resultierende Array iterieren.

```js
function findDuplicates(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

findDuplicates("foo foo bar"); // 'foo'
findDuplicates("foo bar foo"); // undefined
findDuplicates("Hello hello"); // 'Hello'
findDuplicates("Hello hellos"); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capturing Group: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Capturing Group: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
