---
title: "Named Capturing Group: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar}}

Eine **benannte erfassende Gruppe** ist eine besondere Art von [erfassender Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), die es ermöglicht, der Gruppe einen Namen zu geben. Das Übereinstimmungsergebnis der Gruppe kann später durch diesen Namen identifiziert werden, anstatt durch seinen Index im Muster.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte erfassende Gruppen können genauso verwendet werden wie erfassende Gruppen — sie haben auch ihren Übereinstimmungsindex im Ergebnisarray und können durch `\1`, `\2` usw. referenziert werden. Der einzige Unterschied besteht darin, dass sie _zusätzlich_ durch ihren Namen referenziert werden können. Die Information über die Übereinstimmung der erfassenden Gruppe kann abgerufen werden durch:

- Die `groups`-Eigenschaft des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Der `groups`-Parameter der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb desselben Musters

Alle Namen müssen innerhalb desselben Musters eindeutig sein. Mehrere benannte erfassende Gruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung wird gelockert, wenn die doppelten benannten erfassenden Gruppen nicht in derselben [Disjunktionsalternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) sind, sodass für jede Zeichenketteingabe nur eine benannte erfassende Gruppe tatsächlich übereinstimmen kann. Dies ist ein viel neueres Feature, deshalb überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie es verwenden.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Benannte erfassende Gruppen werden alle im Ergebnis vorhanden sein. Wenn eine benannte erfassende Gruppe nicht übereinstimmt (zum Beispiel gehört sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), hat die entsprechende Eigenschaft im `groups`-Objekt den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Sie können die Start- und Endindizes jeder benannten erfassenden Gruppe in der Eingabezeichenkette mithilfe des [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flags erhalten. Zusätzlich zu ihrem Zugriff auf die `indices`-Eigenschaft im von `exec()` zurückgegebenen Array können Sie auch über ihre Namen auf `indices.groups` zugreifen.

Verglichen mit unbenannten erfassenden Gruppen haben benannte erfassende Gruppen folgende Vorteile:

- Sie erlauben Ihnen, jedem Teilübereinstimmungsergebnis einen beschreibenden Namen zu geben.
- Sie ermöglichen den Zugriff auf Teilübereinstimmungsergebnisse, ohne sich die Reihenfolge merken zu müssen, in der sie im Muster erscheinen.
- Beim Refactoring von Code können Sie die Reihenfolge der erfassenden Gruppen ändern, ohne Sorge um die Zerstörung anderer Verweise.

## Beispiele

### Verwenden benannter erfassender Gruppen

Das folgende Beispiel analysiert einen Zeitstempel und einen Autorennamen aus einem Git-Log-Eintrag (Ausgabe mit `git log --format=%ct,%an -- filename`):

```js
function parseLog(entry) {
  const { author, timestamp } = /^(?<timestamp>\d+),(?<author>.+)$/.exec(
    entry,
  ).groups;
  return `${author} committed on ${new Date(
    parseInt(timestamp) * 1000,
  ).toLocaleString()}`;
}

parseLog("1560979912,Caroline"); // "Caroline committed on 6/19/2019, 5:31:52 PM"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für benannte erfassende Gruppen in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
