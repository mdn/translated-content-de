---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.assert()`** statische Methode schreibt eine Fehlermeldung in die Konsole, wenn die Annahme falsch ist. Wenn die Annahme wahr ist, passiert nichts.

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
  - : Jede boolesche Ausdruck. Wenn die Annahme falsch ist, wird eine generische Meldung, die auf einen Fehler in der Annahme hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird der Konsole nach einer generischen Fehlermeldung (die sich von der Meldung unterscheiden kann, die ohne diese Werte ausgegeben wird) in der angegebenen Reihenfolge mit einer Art von Trennung zwischen der Meldung und jedem dieser Werte ausgegeben. Es gibt einen Sonderfall, wenn `val1` ein String ist, der im Folgenden beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungszeichenfolgen enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungszeichenfolgen ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und dann die ersetzte Zeichenfolge werden zu der generischen Fehlermeldung hinzugefügt, um eine detaillierte Fehlermeldung zu bilden, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungszeichenfolgen innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte gibt als Ersetzungszeichenfolgen, werden die zusätzlichen Werte selbst nach der detaillierten Fehlermeldung auf die gleiche Weise der Konsole geschrieben, wie wenn kein Format-String vorhanden ist.

Siehe [Textausgabe in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel zeigt die Verwendung eines JavaScript-Objekts nach der Annahme:

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
- [Node.js Dokumentation zu `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
