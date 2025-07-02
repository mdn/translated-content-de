---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.assert()`** statische Methode schreibt eine Fehlermeldung in die Konsole, wenn die Behauptung falsch ist. Ist die Behauptung wahr, passiert nichts.

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
  - : Jeglicher boolescher Ausdruck. Wenn die Behauptung falsch ist, wird eine generische Nachricht, die auf einen Behauptungsfehler hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zum Ausgeben. Eine Darstellung jedes dieser Werte wird nach einer generischen Behauptungsfehlermeldung (die möglicherweise von der Nachricht abweicht, die ausgegeben wird, wenn diese Werte nicht vorhanden sind) in der angegebenen Reihenfolge mit einer Art von Trennung zwischen der Nachricht und zwischen jedem von ihnen in die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der im Folgenden beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die in aufeinanderfolgender Reihenfolge mit `subst1` bis `substN` ersetzt werden, bis die Anzahl der Ersetzungszeichenfolgen erreicht ist. Ein Doppelpunkt, ein Leerzeichen und dann die ersetzte Zeichenfolge werden der generischen Behauptungsnachricht hinzugefügt, um eine detaillierte Behauptungsnachricht zu bilden, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn mehr Ersetzungswerte als Ersetzungszeichenfolgen vorhanden sind, werden die zusätzlichen Werte nach der detaillierten Behauptungsnachricht auf die gleiche Weise in die Konsole geschrieben, als ob es keine Formatzeichenfolge gäbe.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel demonstriert die Verwendung eines JavaScript-Objekts nach der Behauptung:

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

- [Microsoft Edge-Dokumentation für `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#assert)
- [Node.js-Dokumentation für `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chrome-Dokumentation für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
