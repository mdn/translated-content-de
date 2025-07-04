---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.assert()`** schreibt eine Fehlermeldung in die Konsole, wenn die Behauptung falsch ist. Ist die Behauptung wahr, passiert nichts.

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
  - : Jedes beliebige boolesche Ausdruck. Wenn die Behauptung falsch ist, wird eine generische Meldung, die das Scheitern der Behauptung anzeigt, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird nach einer generischen Fehlermeldung zur Behauptung in der angegebenen Reihenfolge in die Konsole ausgegeben, wobei zwischen der Nachricht und jedem von ihnen eine Art Trennung erfolgt. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungsstrings enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungsstrings ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und dann der ersetzte String werden der generischen Behauptungsmeldung angefügt, um eine detaillierte Behauptungsmeldung zu bilden, die in der Konsole ausgegeben wird. Siehe [Using string substitutions](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen die Ersetzungsstrings innerhalb von `msg` ersetzt werden sollen. Wenn es mehr Ersetzungswerte als Ersetzungsstrings gibt, werden die zusätzlichen Werte selbst in derselben Weise wie ohne Formatstring nach der detaillierten Behauptungsmeldung in die Konsole geschrieben.

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

- [Microsoft Edges Dokumentation für `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#assert)
- [Node.js Dokumentation für `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation für `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
