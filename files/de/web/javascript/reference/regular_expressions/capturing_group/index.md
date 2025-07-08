---
title: "Erfassungsgruppe: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Erfassungsgruppe** gruppiert ein Teilmuster, sodass Sie einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) innerhalb davon verwenden können. Sie merkt sich Informationen über das Teilmuster-Match, sodass Sie später mit einem [Backreference](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) darauf zurückgreifen oder die Informationen über die [Match-Ergebnisse](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) abrufen können.

Wenn Sie das Ergebnis des Teilmuster-Matches nicht benötigen, verwenden Sie stattdessen eine [nicht erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), was die Leistung verbessert und Refactoring-Gefahren vermeidet.

## Syntax

```regex
(pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Eine Erfassungsgruppe funktioniert wie der [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken und ermöglicht Ihnen, ein Teilmuster als einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) zu verwenden.

Erfassungsgruppen werden in der Reihenfolge ihrer öffnenden Klammern nummeriert. Die erste Erfassungsgruppe wird mit `1` nummeriert, die zweite mit `2` und so weiter. [Benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind ebenfalls Erfassungsgruppen und werden zusammen mit anderen (unnamede) Erfassungsgruppen nummeriert. Die Informationen des Erfassungsgruppen-Matches können abgerufen werden durch:

- Den Rückgabewert (der ein Array ist) von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Die `pN`-Parameter der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb desselben Musters

> [!NOTE]
> Selbst im Ergebnis-Array von `exec()` werden Erfassungsgruppen durch die Nummern `1`, `2` usw. abgerufen, da das `0`-Element das gesamte Match ist. `\0` ist kein Backreference, sondern eine [Zeichenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Erfassungsgruppen im Regex-Quellcode entsprechen eins-zu-eins ihren Ergebnissen. Wenn eine Erfassungsgruppe nicht gematcht wird (zum Beispiel, wenn sie zu einer nicht passenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), ist das entsprechende Ergebnis `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Erfassungsgruppen können [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. In diesem Fall sind die Match-Informationen, die dieser Gruppe entsprechen, das letzte Match der Gruppe.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; because "b" comes after "a", this result overwrites the previous one
```

Erfassungsgruppen können in [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertionen verwendet werden. Da Lookbehind-Assertionen ihre Atome rückwärts matchen, ist das endgültige Match, das dieser Gruppe entspricht, dasjenige, das am _linken_ Ende des Strings erscheint. Die Indizes der Match-Gruppen entsprechen jedoch immer noch ihren relativen Positionen im Regex-Quellcode.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; because "a" is seen by the lookbehind after the lookbehind has seen "b"
```

Erfassungsgruppen können verschachtelt sein, wobei die äußere Gruppe zuerst nummeriert wird und dann die innere Gruppe, da sie durch ihre öffnenden Klammern angeordnet sind. Wenn eine verschachtelte Gruppe durch einen Quantor wiederholt wird, werden jedes Mal, wenn die Gruppe matcht, die Ergebnisse der Untergruppen alle überschrieben, manchmal mit `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

Im obigen Beispiel wird die äußere Gruppe dreimal gematcht:

1. Matcht `"aac"`, mit Untergruppen `"aa"`, `undefined` und `"c"`.
2. Matcht `"bbbc"`, mit Untergruppen `undefined`, `"bbb"` und `"c"`.
3. Matcht `"ac"`, mit Untergruppen `"a"`, `undefined` und `"c"`.

Das Ergebnis `"bbb"` des zweiten Matches bleibt nicht erhalten, da es durch das dritte Match mit `undefined` überschrieben wird.

Sie können die Start- und Endindizes jeder Erfassungsgruppe im Eingabestring erhalten, indem Sie das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag verwenden. Dies erzeugt eine zusätzliche `indices` Eigenschaft auf dem Array, das von `exec()` zurückgegeben wird.

Sie können optional einer Erfassungsgruppe einen Namen zuweisen, der hilft, Fallstricke in Bezug auf Gruppenpositionen und Indizierung zu vermeiden. Siehe [Benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) für weitere Informationen.

Klammern haben in verschiedenen Regex-Syntaxen andere Zwecke. Zum Beispiel umschließen sie auch Lookahead- und Lookbehind-Assertionen. Da diese Syntaxen alle mit `?` beginnen und `?` ein [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ist, der normalerweise nicht direkt nach `(` auftreten kann, führt dies nicht zu Mehrdeutigkeiten.

## Beispiele

### Datum matchen

Das folgende Beispiel matcht ein Datum im Format `YYYY-MM-DD`:

```js
function parseDate(input) {
  const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
  if (!parts) {
    return null;
  }
  return parts.slice(1).map((p) => parseInt(p, 10));
}

parseDate("2019-01-01"); // [2019, 1, 1]
parseDate("2019-06-19"); // [2019, 6, 19]
```

### Zitate paaren

Die folgende Funktion matcht die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir ein Backreference, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Backreferences](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Backreference: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
