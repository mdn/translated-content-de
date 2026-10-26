---
title: "Benannte Erfassungsgruppe: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Eine **benannte Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), der Sie einen Namen geben können. Das Übereinstimmungsergebnis der Gruppe lässt sich später über diesen Namen statt über ihren Index im Muster identifizieren.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was in einem Literal für reguläre Ausdrücke zulässig ist, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte Erfassungsgruppen können wie andere Erfassungsgruppen verwendet werden: Sie haben ebenfalls einen Übereinstimmungsindex im Ergebnisarray und können über `\1`, `\2` usw. referenziert werden. Der einzige Unterschied besteht darin, dass sie _zusätzlich_ über ihren Namen referenziert werden können. Auf die Informationen zur Übereinstimmung einer Erfassungsgruppe können Sie wie folgt zugreifen:

- Über die Eigenschaft `groups` des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}}, {{jsxref("String.prototype.match()")}} und {{jsxref("String.prototype.matchAll()")}}
- Über den Parameter `groups` der `replacement`-Callback-Funktion der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- Über [benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb desselben Musters

Alle Namen müssen innerhalb desselben Musters eindeutig sein. Mehrere benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung gilt nicht, wenn sich die benannten Erfassungsgruppen mit demselben Namen in unterschiedlichen [Disjunktionsalternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) befinden, sodass für jede Eingabezeichenfolge tatsächlich nur eine benannte Erfassungsgruppe eine Übereinstimmung erzielen kann. Diese Funktion ist deutlich neuer. Prüfen Sie daher vor ihrer Verwendung die [Browser-Kompatibilität](#browser-kompatibilität).

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Alle benannten Erfassungsgruppen sind im Ergebnis vorhanden. Wenn für eine benannte Erfassungsgruppe keine Übereinstimmung gefunden wird (beispielsweise weil sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), hat die entsprechende Eigenschaft des `groups`-Objekts den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Mit dem Flag [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) können Sie den Anfangs- und Endindex jeder benannten Erfassungsgruppe in der Eingabezeichenfolge ermitteln. Neben dem Zugriff über die Eigenschaft `indices` des von `exec()` zurückgegebenen Arrays können Sie über `indices.groups` auch anhand der Namen darauf zugreifen.

Gegenüber unbenannten Erfassungsgruppen haben benannte Erfassungsgruppen folgende Vorteile:

- Sie können jedem Ergebnis einer Teilübereinstimmung einen aussagekräftigen Namen geben.
- Sie können auf die Ergebnisse von Teilübereinstimmungen zugreifen, ohne sich deren Reihenfolge im Muster merken zu müssen.
- Bei der Umstrukturierung von Code können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne befürchten zu müssen, dass andere Referenzen dadurch ungültig werden.

## Beispiele

### Benannte Erfassungsgruppen verwenden

Das folgende Beispiel liest einen Zeitstempel und den Namen eines Autors aus einem Git-Protokolleintrag aus (ausgegeben mit `git log --format=%ct,%an -- filename`):

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

- [Polyfill für benannte Erfassungsgruppen in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Leitfaden zu Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
