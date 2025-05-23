---
title: "Benannte Erfassungsgruppe: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{jsSidebar}}

Eine **benannte Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), die es ermöglicht, der Gruppe einen Namen zu geben. Das übereinstimmende Ergebnis der Gruppe kann später durch diesen Namen anstelle seines Indexes im Muster identifiziert werden.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Es muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte Erfassungsgruppen können wie normale Erfassungsgruppen verwendet werden — sie haben ebenfalls ihren Match-Index im Ergebnisarray, und sie können durch `\1`, `\2` usw. referenziert werden. Der einzige Unterschied besteht darin, dass sie _zusätzlich_ durch ihren Namen referenziert werden können. Die Informationen über den Match der Erfassungsgruppe können abgerufen werden über:

- Die `groups`-Eigenschaft des Rückgabewertes von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Den `groups`-Parameter der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb des gleichen Musters

Alle Namen müssen innerhalb desselben Musters eindeutig sein. Mehrere benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung wird aufgehoben, wenn die doppelten benannten Erfassungsgruppen nicht in derselben [alternative Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) sind, sodass für jede Zeichenketteneingabe nur eine benannte Erfassungsgruppe tatsächlich übereinstimmen kann. Dies ist eine viel neuere Funktion, daher überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie sie verwenden.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Benannte Erfassungsgruppen werden alle im Ergebnis vorhanden sein. Wenn eine benannte Erfassungsgruppe nicht übereinstimmt (zum Beispiel, weil sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), hat die entsprechende Eigenschaft im `groups`-Objekt den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Sie können die Start- und Endindizes jeder benannten Erfassungsgruppe im Eingabestring durch die Verwendung des [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flags abrufen. Zusätzlich zum Zugriff auf sie über die `indices`-Eigenschaft des von `exec()` zurückgegebenen Arrays können Sie auch über ihre Namen auf `indices.groups` zugreifen.

Im Vergleich zu unbenannten Erfassungsgruppen haben benannte Erfassungsgruppen folgende Vorteile:

- Sie ermöglichen Ihnen, jedem Teilergebnis einen beschreibenden Namen zu geben.
- Sie ermöglichen Ihnen den Zugang zu Teilergebnissen, ohne sich an die Reihenfolge erinnern zu müssen, in der sie im Muster auftreten.
- Beim Refactoring von Code können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne sich Sorgen über unbeabsichtigte Änderungen an anderen Verweisen machen zu müssen.

## Beispiele

### Verwendung von benannten Erfassungsgruppen

Im folgenden Beispiel werden ein Zeitstempel und ein Autorenname aus einem Git-Protokolleintrag (Ausgabe mit `git log --format=%ct,%an -- filename`) geparst:

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

- [Polyfill von benannten Erfassungsgruppen in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannte Rückverweise: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
