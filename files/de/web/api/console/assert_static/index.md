---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.assert()`** schreibt eine Fehlermeldung in die Konsole, wenn die Behauptung falsch ist. Wenn die Behauptung wahr ist, passiert nichts.

## Syntax

```js-nolint
console.assert(assertion)

console.assert(assertion, val1)
console.assert(assertion, val1, val2)
console.assert(assertion, val1, val2, /* …, */ valN)

console.assert(assertion, msg)
console.assert(assertion, msg, subst1)
console.assert(assertion, msg, subst1, /* …, */ substN)
```

### Parameter

- `assertion`
  - : Jede boolesche Ausdruck. Wenn die Behauptung falsch ist, wird eine generische Meldung, die auf das Scheitern der Behauptung hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird nach einer generischen Fehlermeldung der Behauptung in der Konsole ausgegeben (die eventuell anders ist, wenn diese Werte nicht vorhanden sind) in der gegebenen Reihenfolge mit einer Art von Trennung zwischen der Meldung und jedem von ihnen. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die in aufeinanderfolgender Reihenfolge mit `subst1` bis `substN` bis zur Anzahl der Ersetzungsstrings ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und dann der ersetzte String werden der generischen Fehlermeldung der Behauptung angehängt, um eine detaillierte Behauptungsmeldung zu bilden, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwenden von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungsstrings innerhalb von `msg` ersetzt werden sollen. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Fehlermeldung in die Konsole geschrieben, auf dieselbe Weise wie wenn kein Formatstring vorhanden ist.

Siehe [Text in die Konsole ausgeben](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel zeigt die Verwendung eines JavaScript-Objekts nach der Behauptung:

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#assert)
- [Node.js-Dokumentation zu `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
