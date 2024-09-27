---
title: "Capturing group: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Eine **Capturing-Gruppe** gruppiert ein Teilmuster, wodurch Sie einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) innerhalb dieser verwenden können. Sie speichert Informationen über die Übereinstimmung des Teilmusters, sodass Sie später mit einem [Backreference](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) darauf verweisen oder die Informationen über die [Match-Ergebnisse](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) abrufen können.

Wenn Sie das Ergebnis des Teilmusters nicht benötigen, verwenden Sie stattdessen eine [nicht erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), die die Leistung verbessert und Umstrukturierungsgefahren vermeidet.

## Syntax

```regex
(pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles umfassen kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Eine Capturing-Gruppe agiert wie der [Gruppenoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken und ermöglicht es Ihnen, ein Teilmuster als einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) zu verwenden.

Capturing-Gruppen werden nach der Reihenfolge ihrer öffnenden Klammern nummeriert. Die erste Capturing-Gruppe erhält die Nummer `1`, die zweite `2` und so weiter. [Benannte Capturing-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind ebenfalls Capturing-Gruppen und werden zusammen mit anderen (unbenannten) Capturing-Gruppen nummeriert. Die Informationen über das Übereinstimmungsmuster einer Capturing-Gruppe können abgerufen werden durch:

- Den Rückgabewert (der ein Array ist) von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Die `pN`-Parameter der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb desselben Musters

> [!NOTE]
> Auch im Ergebnis-Array von `exec()` werden Capturing-Gruppen mit den Nummern `1`, `2` usw. abgerufen, da das `0`-Element die gesamte Übereinstimmung ist. `\0` ist kein Backreference, sondern ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Capturing-Gruppen im Regex-Quellcode entsprechen ihren Ergebnissen eins zu eins. Wenn eine Capturing-Gruppe nicht übereinstimmt (zum Beispiel gehört sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), ist das entsprechende Ergebnis `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Capturing-Gruppen können [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. In diesem Fall ist die Übereinstimmungsinformation, die dieser Gruppe entspricht, die letzte Übereinstimmung der Gruppe.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; because "b" comes after "a", this result overwrites the previous one
```

Capturing-Gruppen können in [Lookahead](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertionen verwendet werden. Da Lookbehind-Assertionen ihre Atome rückwärts abgleichen, ist die finale Übereinstimmung, die dieser Gruppe entspricht, diejenige, die am _linken_ Ende der Zeichenfolge erscheint. Die Indizes der Übereinstimmungsgruppen entsprechen jedoch weiterhin ihren relativen Positionen im Regex-Quellcode.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; because "a" is seen by the lookbehind after the lookbehind has seen "b"
```

Capturing-Gruppen können verschachtelt werden, in diesem Fall wird die äußere Gruppe zuerst nummeriert, dann die innere Gruppe, da sie nach ihren öffnenden Klammern geordnet sind. Wenn eine verschachtelte Gruppe durch einen Quantor wiederholt wird, werden bei jedem Übereinstimmungsvorgang die Ergebnisse der Untergruppen alle überschrieben, manchmal mit `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

Im obigen Beispiel wird die äußere Gruppe dreimal übereinstimmt:

1. Entspricht `"aac"`, mit Untergruppen `"aa"`, `undefined` und `"c"`.
2. Entspricht `"bbbc"`, mit Untergruppen `undefined`, `"bbb"` und `"c"`.
3. Entspricht `"ac"`, mit Untergruppen `"a"`, `undefined` und `"c"`.

Das `"bbb"`-Ergebnis der zweiten Übereinstimmung wird nicht beibehalten, da die dritte Übereinstimmung es mit `undefined` überschreibt.

Sie können die Start- und Endindizes jeder Capturing-Gruppe in der Eingabezeichenfolge abrufen, indem Sie das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag verwenden. Dadurch wird eine zusätzliche `indices`-Eigenschaft im Array hinzugefügt, das von `exec()` zurückgegeben wird.

Sie können optional einer Capturing-Gruppe einen Namen zuweisen, um Fallstricke im Zusammenhang mit Gruppenpositionen und -indizierung zu vermeiden. Weitere Informationen finden Sie unter [Benannte Capturing-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

Klammern haben in verschiedenen Regex-Syntaxen andere Zwecke. Zum Beispiel umfassen sie auch Lookahead- und Lookbehind-Assertionen. Da diese Syntaxen alle mit `?` beginnen und `?` ein [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ist, der normalerweise nicht direkt nach `(` vorkommen kann, führt dies nicht zu Mehrdeutigkeiten.

## Beispiele

### Datumsübereinstimmung

Das folgende Beispiel entspricht einem Datum im Format `YYYY-MM-DD`:

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

### Paarweise Anführungszeichen

Die folgende Funktion entspricht den Mustern `title='xxx'` und `title="xxx"` in einer Zeichenkette. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir ein Backreference, um auf das erste Anführungszeichen zu verweisen. Durch den Zugriff auf die zweite Capturing-Gruppe (`[2]`) wird die Zeichenkette zwischen den übereinstimmenden Anführungszeichen zurückgegeben:

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
- [Benannte Capturing-Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Backreference: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
