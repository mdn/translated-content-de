---
title: "Benannte Erfassungsgruppe: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar}}

Eine **benannte Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), die es ermöglicht, der Gruppe einen Namen zu geben. Das Ergebnis der Übereinstimmung kann später durch diesen Namen identifiziert werden, anstatt durch seinen Index im Muster.

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

Benannte Erfassungsgruppen können genauso verwendet werden wie Erfassungsgruppen — sie haben ebenfalls ihren Übereinstimmungsindex im Ergebnisarray und können durch `\1`, `\2` usw. referenziert werden. Der einzige Unterschied besteht darin, dass sie _zusätzlich_ durch ihren Namen referenziert werden können. Die Informationen der Übereinstimmung der Erfassungsgruppe können zugegriffen werden über:

- Die `groups`-Eigenschaft des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Den `groups`-Parameter der `replacement`-Rückruffunktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb desselben Musters

Alle Namen müssen innerhalb desselben Musters eindeutig sein. Mehrfache benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung wird gelockert, wenn die doppelten benannten Erfassungsgruppen nicht im selben [Disjunktionsalternativ](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) sind, sodass für jede String-Eingabe nur eine benannte Erfassungsgruppe tatsächlich übereinstimmen kann. Dies ist eine sehr neue Funktion, daher sollten Sie die [Browserkompatibilität](#browser-kompatibilität) überprüfen, bevor Sie sie verwenden.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Funktioniert; "year" kann entweder vor oder nach dem Bindestrich stehen
```

Benannte Erfassungsgruppen sind im Ergebnis alle vorhanden. Wenn eine benannte Erfassungsgruppe nicht übereinstimmt (z. B. gehört sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), hat die entsprechende Eigenschaft im `groups`-Objekt den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Sie können die Start- und Endindizes jeder benannten Erfassungsgruppe in der Eingabezeichenkette erhalten, indem Sie das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag verwenden. Zusätzlich zum Zugriff auf diese über die `indices`-Eigenschaft im Array, das von `exec()` zurückgegeben wird, können Sie auch auf sie über ihre Namen in `indices.groups` zugreifen.

Im Vergleich zu unbenannten Erfassungsgruppen haben benannte Erfassungsgruppen folgende Vorteile:

- Sie ermöglichen es Ihnen, jedem Teilübereinstimmungsergebnis einen beschreibenden Namen zu geben.
- Sie ermöglichen den Zugriff auf Teilübereinstimmungsergebnisse, ohne sich die Reihenfolge merken zu müssen, in der sie im Muster erscheinen.
- Beim Refactoring von Code können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne sich darüber Gedanken machen zu müssen, andere Verweise zu brechen.

## Beispiele

### Verwendung benannter Erfassungsgruppen

Das folgende Beispiel analysiert einen Zeitstempel und einen Autorennamen aus einem Git-Protokolleintrag (Ausgabe mit `git log --format=%ct,%an -- filename`):

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

- [Polyfill von benannten Erfassungsgruppen in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Leitfaden [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
