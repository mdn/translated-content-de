---
title: "Named capturing group: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{jsSidebar}}

Ein **benannter Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), die es ermöglicht, der Gruppe einen Namen zu geben. Das Übereinstimmungsergebnis der Gruppe kann später durch diesen Namen statt durch seinen Index im Muster identifiziert werden.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem Regex-Literal verwendet werden darf, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte Erfassungsgruppen können wie normale Erfassungsgruppen verwendet werden — sie haben ebenfalls ihren Übereinstimmungsindex im Ergebnisarray und können durch `\1`, `\2`, etc. referenziert werden. Der einzige Unterschied besteht darin, dass sie _zusätzlich_ durch ihren Namen referenziert werden können. Die Informationen über die Übereinstimmung der Erfassungsgruppe können abgerufen werden durch:

- Die `groups`-Eigenschaft des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Der `groups`-Parameter der `replacement`-Callbackfunktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) im gleichen Muster

Alle Namen müssen innerhalb desselben Musters einzigartig sein. Mehrere benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung wird gelockert, wenn die doppelten benannten Erfassungsgruppen nicht in derselben [Disjunktionsalternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) sind, so dass für jede Zeichenketteingabe tatsächlich nur eine benannte Erfassungsgruppe abgeglichen werden kann. Dies ist ein viel neueres Feature, prüfen Sie also die [Browser-Kompatibilität](#browser-kompatibilität), bevor Sie es verwenden.

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Benannte Erfassungsgruppen werden alle im Ergebnis vorhanden sein. Wenn eine benannte Erfassungsgruppe nicht abgeglichen wird (zum Beispiel gehört sie zu einer nicht abgeglichenen Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)), hat die entsprechende Eigenschaft im `groups`-Objekt den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Sie können die Start- und Endindizes jeder benannten Erfassungsgruppe im Eingabestring abrufen, indem Sie das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag verwenden. Zusätzlich zu ihrem Zugriff über die `indices`-Eigenschaft des von `exec()` zurückgegebenen Arrays, können Sie auch über `indices.groups` auf sie nach ihren Namen zugreifen.

Im Vergleich zu unbenannten Erfassungsgruppen bieten benannte Erfassungsgruppen folgende Vorteile:

- Sie erlauben es, jedem Teilübereinstimmungsergebnis einen beschreibenden Namen zu geben.
- Sie ermöglichen den Zugriff auf Teilübereinstimmungsergebnisse, ohne sich die Reihenfolge merken zu müssen, in der sie im Muster erscheinen.
- Beim Umstrukturieren von Code können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne sich Sorgen machen zu müssen, andere Verweise zu unterbrechen.

## Beispiele

### Verwenden benannter Erfassungsgruppen

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

- [Polyfill von benannten Erfassungsgruppen in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht-erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
