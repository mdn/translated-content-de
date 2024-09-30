---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.assert()`** schreibt eine Fehlermeldung in die Konsole, wenn die Behauptung falsch ist. Wenn die Behauptung wahr ist, passiert nichts.

## Syntax

```js-nolint
assert(assertion)

assert(assertion, val1)
assert(assertion, val1, val2)
assert(assertion, val1, val2, /* …, */ valN)

assert(assertion, msg)
assert(assertion, msg, subst1)
assert(assertion, msg, subst1, /* …, */ substN)
```

### Parameter

- `assertion`
  - : Beliebiger boolescher Ausdruck. Wenn die Behauptung falsch ist, wird eine generische Nachricht, die auf den Aussagefehler hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird nach einer generischen Fehlermeldung (die sich von der Nachricht unterscheiden kann, die ausgegeben wird, wenn diese Werte nicht vorhanden sind) in der angegebenen Reihenfolge mit einer Art Trennung zwischen der Nachricht und jedem von ihnen in die Konsole ausgegeben. Es gibt einen Sonderfall, wenn `obj1` eine Zeichenkette ist, der im Folgenden beschrieben wird.
- `msg`
  - : Eine JavaScript-Zeichenkette, die null oder mehr Ersetzungszeichenfolgen enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungszeichenfolgen ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und dann die ersetzte Zeichenkette werden an die generische Fehlermeldung angehängt, um eine detaillierte Fehlermeldung zu bilden, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwendung von Zeichenfolgenersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte nach der detaillierten Fehlermeldung auf die gleiche Weise in die Konsole geschrieben, als gäbe es kein Formatzeichen.

Siehe [Text in die Konsole ausgeben](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

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

- [Microsoft Edges Dokumentation zu `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#assert)
- [Node.JS Dokumentation zu `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
