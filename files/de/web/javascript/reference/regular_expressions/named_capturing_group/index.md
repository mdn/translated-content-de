---
title: "Benannte Erfassungsgruppe: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **benannte Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), die es ermöglicht, der Gruppe einen Namen zu geben. Das Übereinstimmungsergebnis der Gruppe kann später anhand dieses Namens identifiziert werden, anstatt durch seinen Index im Muster.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte Erfassungsgruppen können wie Erfassungsgruppen verwendet werden — sie haben ebenfalls ihren Übereinstimmungsindex im Ergebnisarray, und sie können durch `\1`, `\2`, etc. referenziert werden. Der einzige Unterschied besteht darin, dass sie _zusätzlich_ durch ihren Namen referenziert werden können. Die Informationen über die Übereinstimmung der Erfassungsgruppe können abgerufen werden durch:

- Die `groups`-Eigenschaft des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Den `groups`-Parameter der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb des gleichen Musters

Alle Namen müssen innerhalb desselben Musters eindeutig sein. Mehrere benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung wird gelockert, wenn die doppelten benannten Erfassungsgruppen nicht in der gleichen [Disjunktionsalternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) liegen, sodass für jede Zeichenfolgeneingabe nur eine benannte Erfassungsgruppe tatsächlich übereinstimmen kann. Dies ist ein viel neueres Feature, daher sollten Sie die [Browser-Kompatibilität](#browser-kompatibilität) überprüfen, bevor Sie es verwenden.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Benannte Erfassungsgruppen werden alle im Ergebnis vorhanden sein. Wenn eine benannte Erfassungsgruppe nicht übereinstimmt (zum Beispiel, sie gehört zu einer nicht passenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), hat die entsprechende Eigenschaft im `groups`-Objekt den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Sie können die Start- und Endindizes jeder benannten Erfassungsgruppe in der Eingabestring durch die Verwendung des [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flags erhalten. Zusätzlich zum Zugriff auf sie über die `indices`-Eigenschaft des Arrays, das von `exec()` zurückgegeben wird, können Sie auch über ihre Namen auf `indices.groups` zugreifen.

Im Vergleich zu unbenannten Erfassungsgruppen haben benannte Erfassungsgruppen die folgenden Vorteile:

- Sie ermöglichen es Ihnen, jedem Submatch-Ergebnis einen beschreibenden Namen zu geben.
- Sie ermöglichen den Zugriff auf Submatch-Ergebnisse, ohne sich die Reihenfolge merken zu müssen, in der sie im Muster erscheinen.
- Beim Refactoring von Code können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne sich darüber Gedanken machen zu müssen, dass andere Referenzen dadurch gebrochen werden.

## Beispiele

### Verwendung von benannten Erfassungsgruppen

Das folgende Beispiel analysiert einen Zeitstempel und einen Autorennamen aus einem Git-Logeintrag (Ausgabe mit `git log --format=%ct,%an -- filename`):

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

- [Polyfill of named capturing groups in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
