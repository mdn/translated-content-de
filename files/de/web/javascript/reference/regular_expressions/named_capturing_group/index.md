---
title: "Benannte Erfassungsgruppe: (?<name>...)"
slug: Web/JavaScript/Reference/Regular_expressions/Named_capturing_group
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **benannte Erfassungsgruppe** ist eine besondere Art von [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), der Sie einen Namen geben können. Das Ergebnis der Gruppe lässt sich später über diesen Namen statt über ihren Index im Muster identifizieren.

## Syntax

```regex
(?<name>pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem Regex-Literal zulässig ist, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).
- `name`
  - : Der Name der Gruppe. Er muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein.

## Beschreibung

Benannte Erfassungsgruppen können wie andere Erfassungsgruppen verwendet werden: Auch sie haben einen Übereinstimmungsindex im Ergebnisarray und können über `\1`, `\2` usw. referenziert werden. Zusätzlich können Sie über ihren Namen auf sie zugreifen. Die Informationen zur Übereinstimmung einer Erfassungsgruppe sind über Folgendes zugänglich:

- Die Eigenschaft `groups` des Rückgabewerts von {{jsxref("RegExp.prototype.exec()")}} oder von {{jsxref("String.prototype.match()")}}, wenn der reguläre Ausdruck nicht das Flag `g` hat
- Die Eigenschaft `groups` jedes Übereinstimmungsarrays, das der von {{jsxref("String.prototype.matchAll()")}} zurückgegebene Iterator liefert
- Den Parameter `groups` der Callback-Funktion `replacement` der Methoden {{jsxref("String.prototype.replace()")}} und {{jsxref("String.prototype.replaceAll()")}}
- [Benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) innerhalb desselben Musters

Alle Namen innerhalb eines Musters müssen eindeutig sein. Mehrere benannte Erfassungsgruppen mit demselben Namen führen zu einem Syntaxfehler.

```js-nolint example-bad
/(?<name>)(?<name>)/; // SyntaxError: Invalid regular expression: Duplicate capture group name
```

Diese Einschränkung gilt nicht, wenn sich die gleichnamigen benannten Erfassungsgruppen in unterschiedlichen [Alternativen einer Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) befinden. Dadurch kann bei jeder Eingabezeichenfolge tatsächlich nur eine benannte Erfassungsgruppe dieses Namens übereinstimmen. Diese Funktion ist deutlich neuer; prüfen Sie daher vor ihrer Verwendung die [Browser-Kompatibilität](#browser-kompatibilität).

```js
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
// Works; "year" can either come before or after the hyphen
```

Alle benannten Erfassungsgruppen sind im Ergebnis vorhanden. Wenn eine benannte Erfassungsgruppe keine Übereinstimmung erzielt (etwa weil sie zu einer nicht übereinstimmenden Alternative einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), hat die entsprechende Eigenschaft des Objekts `groups` den Wert `undefined`.

```js
/(?<ab>ab)|(?<cd>cd)/.exec("cd").groups; // [Object: null prototype] { ab: undefined, cd: 'cd' }
```

Mit dem Flag [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) können Sie die Start- und Endindizes jeder benannten Erfassungsgruppe in der Eingabezeichenfolge ermitteln. Sie können nicht nur über die Eigenschaft `indices` des von `exec()` zurückgegebenen Arrays darauf zugreifen, sondern auch über die jeweiligen Namen unter `indices.groups`.

Gegenüber unbenannten Erfassungsgruppen haben benannte Erfassungsgruppen folgende Vorteile:

- Sie können jedem Teilergebnis einen aussagekräftigen Namen geben.
- Sie können auf Teilergebnisse zugreifen, ohne sich die Reihenfolge der Gruppen im Muster merken zu müssen.
- Bei einer Umstrukturierung des Codes können Sie die Reihenfolge der Erfassungsgruppen ändern, ohne befürchten zu müssen, dass andere Verweise dadurch nicht mehr funktionieren.

## Beispiele

### Benannte Erfassungsgruppen verwenden

Das folgende Beispiel liest einen Zeitstempel und einen Autornamen aus einem Git-Protokolleintrag aus (Ausgabe mit `git log --format=%ct,%an -- filename`):

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
- Leitfaden zu [Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Nicht erfassende Gruppe: `(?:...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [ESLint-Regel: `prefer-named-capture-group`](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
