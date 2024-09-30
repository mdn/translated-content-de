---
title: "Capturing group: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Eine **erfassende Gruppe** gruppiert ein Teilmuster, sodass Sie einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [disjunctions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) innerhalb dieser verwenden können. Sie speichert Informationen über das Teilmuster-Match, sodass Sie später mit einem [Backreference](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) darauf zurückgreifen oder die Informationen über das [Match-Ergebnis](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) abrufen können.

Wenn Sie das Ergebnis des Teilmuster-Matchs nicht benötigen, verwenden Sie stattdessen eine [nicht-erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), was die Leistung verbessert und Refactoring-Gefahren vermeidet.

## Syntax

```regex
(pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [disjunction](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Eine erfassende Gruppe wirkt wie der [Gruppenoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken und ermöglicht es Ihnen, ein Teilmuster als einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) zu verwenden.

Erfassende Gruppen werden nach der Reihenfolge ihrer öffnenden Klammern nummeriert. Die erste erfassende Gruppe wird mit `1` nummeriert, die zweite mit `2` und so weiter. [Benannte erfasste Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind ebenfalls erfassende Gruppen und werden zusammen mit anderen (unbenannten) erfassenden Gruppen nummeriert. Die Informationen über das Match der erfassenden Gruppe können abgerufen werden durch:

- Den Rückgabewert (der ein Array ist) von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}}, und {{jsxref("String.prototype.matchAll()")}}
- Die `pN` Parameter der `replacement` Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb desselben Musters

> [!NOTE]
> Auch im Ergebnis-Array von `exec()` werden erfassende Gruppen durch die Nummern `1`, `2` usw. angesprochen, da das Element `0` das gesamte Match ist. `\0` ist kein Backreference, sondern ein [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Erfassende Gruppen im Regex-Quellcode entsprechen ihren Ergebnissen eins zu eins. Wenn eine erfassende Gruppe nicht gematcht wird (z. B. gehört sie zu einer nicht gematchten Alternative in einer [disjunction](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), ist das entsprechende Ergebnis `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Erfassende Gruppen können [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. In diesem Fall sind die Match-Informationen, die dieser Gruppe entsprechen, das letzte Match der Gruppe.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; because "b" comes after "a", this result overwrites the previous one
```

Erfassende Gruppen können in [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions verwendet werden. Da Lookbehind-Assertions ihre Atome rückwärts matchen, ist das finale Match, das dieser Gruppe entspricht, dasjenige, das am _linken_ Ende des Strings erscheint. Die Indizes der Match-Gruppen entsprechen jedoch weiterhin ihren relativen Positionen im Regex-Quellcode.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; because "a" is seen by the lookbehind after the lookbehind has seen "b"
```

Erfassende Gruppen können verschachtelt sein, wobei zuerst die äußere Gruppe nummeriert wird und dann die innere Gruppe, da sie nach ihren öffnenden Klammern geordnet sind. Wenn eine verschachtelte Gruppe durch einen Quantor wiederholt wird, werden jedes Mal, wenn die Gruppe matcht, die Ergebnisse der Untergruppen alle überschrieben, manchmal mit `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

Im obigen Beispiel wird die äußere Gruppe dreimal gematcht:

1. Matcht `"aac"`, mit Untergruppen `"aa"`, `undefined`, und `"c"`.
2. Matcht `"bbbc"`, mit Untergruppen `undefined`, `"bbb"`, und `"c"`.
3. Matcht `"ac"`, mit Untergruppen `"a"`, `undefined`, und `"c"`.

Das `"bbb"` Ergebnis aus dem zweiten Match wird nicht beibehalten, da das dritte Match es mit `undefined` überschreibt.

Sie können die Start- und Endindizes jeder erfassenden Gruppe im Eingabestring erhalten, indem Sie das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag verwenden. Dies erstellt eine zusätzliche `indices` Eigenschaft auf dem von `exec()` zurückgegebenen Array.

Sie können optional einer erfassenden Gruppe einen Namen zuweisen, was hilft, Fallstricke in Bezug auf Gruppenpositionen und Indizierung zu vermeiden. Lesen Sie [Benannte erfasste Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) für weitere Informationen.

Klammern haben andere Zwecke in unterschiedlichen Regex-Syntaxen. Zum Beispiel umfassen sie auch Lookahead- und Lookbehind-Assertions. Da diese Syntaxen alle mit `?` beginnen, und `?` ein [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ist, der normalerweise nicht direkt nach `(` auftreten kann, führt dies nicht zu Mehrdeutigkeiten.

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

### Paarung von Anführungszeichen

Die folgende Funktion matcht die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Backreference, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite erfassende Gruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

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
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Backreference: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
