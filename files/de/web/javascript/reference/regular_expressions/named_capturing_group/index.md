---
title: "Benannte Erfassungsgruppe: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Eine **benannte Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), die es Ihnen ermöglicht, der Gruppe einen Namen zu geben. Das Abgleichsergebnis der Gruppe kann später durch diesen Namen identifiziert werden, anstatt durch seinen Index im Muster.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, das Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte Erfassungsgruppen können genauso wie Erfassungsgruppen verwendet werden - sie haben ebenfalls ihren Abgleichsindex im Ergebnisarray und können durch `\1`, `\2` usw. referenziert werden. Der einzige Unterschied ist, dass sie _zusätzlich_ durch ihren Namen referenziert werden können. Die Informationen des Abgleichs der Erfassungsgruppe können abgerufen werden durch:

- Die `groups`-Eigenschaft des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}}, und {{jsxref("String.prototype.matchAll()")}}
- Der `groups`-Parameter der `replacement`-Rückruffunktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb desselben Musters

Alle Namen müssen einzigartig innerhalb desselben Musters sein. Mehrere benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung wird gelockert, wenn die doppelten benannten Erfassungsgruppen nicht in derselben [Disjunktionsalternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) sind, so dass für jede Zeichenketteingabe nur eine benannte Erfassungsgruppe tatsächlich abgeglichen werden kann. Dies ist ein viel neueres Feature, daher überprüfen Sie bitte die [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie es verwenden.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Benannte Erfassungsgruppen werden alle im Ergebnis vorhanden sein. Wenn eine benannte Erfassungsgruppe nicht abgeglichen wird (beispielsweise gehört sie zu einer nicht abgeglichenen Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), hat die entsprechende Eigenschaft im `groups`-Objekt den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Sie können die Start- und Endindizes jeder benannten Erfassungsgruppe in der Eingabestring mit dem [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag erhalten. Zusätzlich zum Zugriff auf diese über die `indices`-Eigenschaft des Arrays, das von `exec()` zurückgegeben wird, können Sie auch über ihre Namen auf `indices.groups` darauf zugreifen.

Im Vergleich zu unbenannten Erfassungsgruppen bieten benannte Erfassungsgruppen folgende Vorteile:

- Sie ermöglichen es Ihnen, jedem Teilergebniss einen beschreibenden Namen zu geben.
- Sie ermöglichen den Zugriff auf Teilergebnisse, ohne sich an die Reihenfolge erinnern zu müssen, in der sie im Muster erscheinen.
- Beim Refactoring von Code können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne sich Sorgen machen zu müssen, andere Referenzen zu brechen.

## Beispiele

### Verwendung benannter Erfassungsgruppen

Das folgende Beispiel analysiert einen Zeitstempel und einen Autorennamen aus einem Git-Log-Eintrag (Ausgabe mit `git log --format=%ct,%an -- filename`):

```js
function parseLog(entry) {
  const { author, timestamp } = /^(?<timestamp>\d+),(?<author>.+)$/.exec(
    entry,
  ).groups;
  return `${author} committed on ${new Date(
    parseInt(timestamp, 10) * 1000,
  ).toLocaleString()}`;
}

parseLog("1560979912,Caroline"); // "Caroline committed on 6/19/2019, 5:31:52 PM"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill benannter Erfassungsgruppen in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
