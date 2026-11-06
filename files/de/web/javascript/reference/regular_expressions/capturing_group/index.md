---
title: "Erfassende Gruppe: (...)"
slug: Web/JavaScript/Reference/Regular_expressions/Capturing_group
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **erfassende Gruppe** gruppiert ein Teilmuster. Dadurch können Sie einen [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder innerhalb der Gruppe [Alternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Sie speichert Informationen über die Übereinstimmung mit dem Teilmuster, sodass Sie später mit einer [Rückreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) darauf verweisen oder über die [Übereinstimmungsergebnisse](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#return_value) darauf zugreifen können.

Wenn Sie das Ergebnis der Übereinstimmung mit dem Teilmuster nicht benötigen, verwenden Sie stattdessen eine [nicht erfassende Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group). Das verbessert die Leistung und vermeidet Probleme bei der Überarbeitung des Musters.

## Syntax

```regex
(pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was in einem Regex-Literal zulässig ist, einschließlich einer [Alternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Eine erfassende Gruppe verhält sich wie der [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken: Sie ermöglicht es, ein Teilmuster als einzelnes [Atom](/de/docs/Web/JavaScript/Reference/Regular_expressions#atoms) zu verwenden.

Erfassende Gruppen werden nach der Reihenfolge ihrer öffnenden Klammern nummeriert. Die erste erfassende Gruppe erhält die Nummer `1`, die zweite die Nummer `2` und so weiter. [Benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind ebenfalls erfassende Gruppen und werden zusammen mit den anderen, unbenannten erfassenden Gruppen nummeriert. Auf die Informationen zur Übereinstimmung einer erfassenden Gruppe können Sie wie folgt zugreifen:

- Über den Rückgabewert (ein Array) von {{jsxref("RegExp.prototype.exec()")}} oder von {{jsxref("String.prototype.match()")}}, wenn der reguläre Ausdruck nicht das Flag `g` hat
- Über jedes Übereinstimmungs-Array, das der von {{jsxref("String.prototype.matchAll()")}} zurückgegebene Iterator liefert
- Über die `pN`-Parameter der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- Über [Rückreferenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) innerhalb desselben Musters

> [!NOTE]
> Auch im Ergebnis-Array von `exec()` wird auf erfassende Gruppen über die Nummern `1`, `2` usw. zugegriffen, da das Element `0` die gesamte Übereinstimmung enthält. `\0` ist keine Rückreferenz, sondern eine [Zeichen-Escapesequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Die erfassenden Gruppen im Quelltext des regulären Ausdrucks entsprechen ihren Ergebnissen eins zu eins. Wenn eine erfassende Gruppe keine Übereinstimmung findet (beispielsweise weil sie zu einer nicht zutreffenden Alternative gehört), ist das entsprechende Ergebnis `undefined`.

```js
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Auf erfassende Gruppen können [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) angewendet werden. In diesem Fall enthalten die Übereinstimmungsinformationen der Gruppe ihre letzte Übereinstimmung.

```js
/([ab])+/.exec("abc"); // ['ab', 'b']; because "b" comes after "a", this result overwrites the previous one
```

Erfassende Gruppen können in [Lookahead-](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) und [Lookbehind-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) verwendet werden. Da Lookbehind-Assertions ihre Atome rückwärts abgleichen, ist die letzte Übereinstimmung dieser Gruppe diejenige, die im String am weitesten _links_ steht. Die Indizes der Übereinstimmungsgruppen entsprechen jedoch weiterhin ihren relativen Positionen im Quelltext des regulären Ausdrucks.

```js
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; because "a" is seen by the lookbehind after the lookbehind has seen "b"
```

Erfassende Gruppen können verschachtelt sein. Dabei wird zuerst die äußere Gruppe und dann die innere Gruppe nummeriert, da sich die Reihenfolge nach den öffnenden Klammern richtet. Wenn eine verschachtelte Gruppe durch einen Quantifizierer wiederholt wird, werden die Ergebnisse ihrer Untergruppen bei jeder Übereinstimmung der Gruppe überschrieben – manchmal mit `undefined`.

```js
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

Im obigen Beispiel findet die äußere Gruppe dreimal eine Übereinstimmung:

1. Sie findet `"aac"`, mit den Untergruppen `"aa"`, `undefined` und `"c"`.
2. Sie findet `"bbbc"`, mit den Untergruppen `undefined`, `"bbb"` und `"c"`.
3. Sie findet `"ac"`, mit den Untergruppen `"a"`, `undefined` und `"c"`.

Das Ergebnis `"bbb"` aus der zweiten Übereinstimmung bleibt nicht erhalten, weil die dritte Übereinstimmung es mit `undefined` überschreibt.

Mit dem Flag [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) können Sie die Start- und Endindizes jeder erfassenden Gruppe im Eingabestring ermitteln. Dadurch erhält das von `exec()` zurückgegebene Array eine zusätzliche Eigenschaft `indices`.

Sie können einer erfassenden Gruppe optional einen Namen geben. So lassen sich Probleme vermeiden, die mit Gruppenpositionen und Indizes zusammenhängen. Weitere Informationen finden Sie unter [Benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group).

Klammern haben in verschiedenen Regex-Syntaxformen weitere Aufgaben. Beispielsweise umschließen sie auch Lookahead- und Lookbehind-Assertions. Da diese Syntaxformen alle mit `?` beginnen und `?` ein [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) ist, der normalerweise nicht direkt nach `(` stehen kann, entstehen dadurch keine Mehrdeutigkeiten.

## Beispiele

### Ein Datum abgleichen

Das folgende Beispiel gleicht ein Datum im Format `YYYY-MM-DD` ab:

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

### Anführungszeichen zuordnen

Die folgende Funktion gleicht die Muster `title='xxx'` und `title="xxx"` in einem String ab. Um sicherzustellen, dass die Anführungszeichen zusammenpassen, verwenden wir eine Rückreferenz auf das erste Anführungszeichen. Der Zugriff auf die zweite erfassende Gruppe (`[2]`) gibt den String zwischen den zusammengehörenden Anführungszeichen zurück:

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

- [Gruppen und Rückreferenzen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) – Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückreferenz: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
