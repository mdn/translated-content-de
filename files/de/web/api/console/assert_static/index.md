---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.assert()`** statische Methode schreibt eine Fehlermeldung in die Konsole, wenn die Assertion falsch ist. Wenn die Assertion wahr ist, passiert nichts.

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
  - : Jeder boolesche Ausdruck. Wenn die Assertion falsch ist, wird eine generische Nachricht über das Scheitern der Assertion in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird nach einer generischen Fehlschlagmeldung der Assertion in der Konsole ausgegeben (die unterschiedlich zu der Nachricht sein kann, die ausgegeben wird, wenn diese Werte nicht vorhanden sind), in der angegebenen Reihenfolge mit einer Art von Trennung zwischen der Nachricht und jedem einzelnen von ihnen. Es gibt einen speziellen Fall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die mit `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungszeichenfolgen ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und dann die ersetzte Zeichenfolge werden an die generische Assertionsnachricht angehängt, um eine detaillierte Assertionsnachricht zu erstellen, und das Ergebnis wird in der Konsole ausgegeben. Siehe [Verwendung von Zeichenfolgen-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden sollen. Wenn es mehr Ersetzungswerte als Ersetzungszeichenfolgen gibt, werden die zusätzlichen Werte selbst nach der detaillierten Assertionsnachricht in der Konsole geschrieben, wie wenn es keine Formatzeichenfolge gibt.

Weitere Einzelheiten finden Sie unter [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel demonstriert die Verwendung eines JavaScript-Objekts nach der Assertion:

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

- [Microsoft Edges Dokumentation für `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#assert)
- [Node.JS-Dokumentation für `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
