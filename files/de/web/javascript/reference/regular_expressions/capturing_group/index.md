---
title: "Erfassungsgruppe: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Eine **Erfassungsgruppe** gruppiert ein Teilmuster, sodass Sie einen [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [Alternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) innerhalb der Gruppe verwenden können. Sie merkt sich Informationen über das Teilmuster-Match, sodass Sie später mit einer [Rückreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) darauf zurückgreifen oder die Informationen über die [Match-Ergebnisse](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) zugreifen können.

Wenn Sie das Ergebnis des Teilmuster-Matches nicht benötigen, verwenden Sie stattdessen eine [nicht erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), um die Leistung zu verbessern und Refaktorisierungsrisiken zu vermeiden.

## Syntax

```regex
(pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem Regex-Literal verwendet werden kann, einschließlich einer [Alternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Eine Erfassungsgruppe verhält sich wie der [Gruppenoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken, der es Ihnen erlaubt, ein Teilmuster als ein einziges [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) zu verwenden.

Erfassungsgruppen werden nach der Reihenfolge ihrer öffnenden Klammern nummeriert. Die erste Erfassungsgruppe wird als `1` nummeriert, die zweite als `2` usw. [Benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind ebenfalls Erfassungsgruppen und werden zusammen mit anderen (nicht benannten) Erfassungsgruppen nummeriert. Die Informationen des Matches der Erfassungsgruppe können abgerufen werden durch:

- Den Rückgabewert (ein Array) von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}}, und {{jsxref("String.prototype.matchAll()")}}
- Die `pN` Parameter der `replacement` Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Rückreferenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb desselben Musters

> [!NOTE]
> Selbst im Ergebnis-Array von `exec()` werden Erfassungsgruppen mit den Nummern `1`, `2` usw. aufgerufen, weil das Element `0` das gesamte Match ist. `\0` ist keine Rückreferenz, sondern ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Erfassungsgruppen im Regex-Quellcode entsprechen eins-zu-eins ihren Ergebnissen. Wenn eine Erfassungsgruppe nicht gematcht wird (zum Beispiel, weil sie zu einer nicht gematchten Alternative in einer [Alternation](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), ist das entsprechende Ergebnis `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Erfassungsgruppen können [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. In diesem Fall ist die entsprechende Match-Information dieser Gruppe das letzte Match der Gruppe.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; weil "b" nach "a" kommt, überschreibt dieses Ergebnis das vorherige
```

Erfassungsgruppen können in [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions verwendet werden. Da Lookbehind-Assertions ihre Atome rückwärts matchen, ist das finale Match, das dieser Gruppe entspricht, das, welches am _linken_ Ende der Zeichenkette erscheint. Die Indizes der Match-Gruppen entsprechen jedoch weiterhin ihren relativen Positionen im Regex-Quelltext.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; weil "a" vom Lookbehind gesehen wird, nachdem der Lookbehind "b" gesehen hat
```

Erfassungsgruppen können verschachtelt werden, in welchem Fall die äußere Gruppe zuerst nummeriert wird, dann die innere Gruppe, da sie nach ihren öffnenden Klammern sortiert sind. Wenn eine verschachtelte Gruppe durch einen Quantifizierer wiederholt wird, dann werden jedes Mal, wenn die Gruppe gematcht wird, die Untergruppen-Ergebnisse alle überschrieben, manchmal mit `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

Im obigen Beispiel wird die äußere Gruppe dreimal gematcht:

1. Matcht `"aac"`, mit Untergruppen `"aa"`, `undefined`, und `"c"`.
2. Matcht `"bbbc"`, mit Untergruppen `undefined`, `"bbb"`, und `"c"`.
3. Matcht `"ac"`, mit Untergruppen `"a"`, `undefined`, und `"c"`.

Das `"bbb"`-Ergebnis aus dem zweiten Match wird nicht erhalten, weil das dritte Match es mit `undefined` überschreibt.

Sie können die Start- und Endindizes jeder Erfassungsgruppe in der Eingabezeichenkette erhalten, indem Sie das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag verwenden. Dies erstellt eine zusätzliche `indices`-Eigenschaft im Array, das von `exec()` zurückgegeben wird.

Sie können optional einer Erfassungsgruppe einen Namen zuweisen, was hilft, Fallstricke im Zusammenhang mit Gruppenpositionen und -indizierung zu vermeiden. Weitere Informationen finden Sie unter [Benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

Klammern haben in verschiedenen Regex-Syntaxen andere Zwecke. Zum Beispiel umfassen sie auch Lookahead- und Lookbehind-Assertions. Da diese Syntaxen alle mit `?` beginnen und `?` ein [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ist, der normalerweise nicht direkt nach `(` auftreten kann, führt dies nicht zu mehrdeutigkeiten.

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

### Anführungszeichen paaren

Die folgende Funktion matcht die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir eine Rückreferenz, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückreferenzen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Nicht-ergreifende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückreferenz: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
