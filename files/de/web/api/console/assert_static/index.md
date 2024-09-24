---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: 18a5b7e39a1cb4653207cc476c681120cc62d260
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.assert()`** statische Methode schreibt eine Fehlermeldung in die Konsole, wenn die Überprüfung falsch ist. Wenn die Überprüfung wahr ist, passiert nichts.

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
  - : Jeder boolesche Ausdruck. Wenn die Überprüfung falsch ist, wird eine generische Nachricht, die auf einen Überprüfungsfehler hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten, die ausgegeben werden sollen. Eine Darstellung jedes dieser Werte wird in der Konsole nach einer generischen Überprüfungsfehlermeldung (die von der Nachricht abweichen kann, wenn diese Werte nicht vorhanden sind) in der angegebenen Reihenfolge ausgegeben, mit einer Art von Trennung zwischen der Nachricht und jedem dieser Werte. Ein besonderer Fall tritt ein, wenn `obj1` ein String ist, was nachfolgend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersetzungs-Strings ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und dann der ersetzte String werden der generischen Überprüfungsnachricht hinzugefügt, um eine detaillierte Überprüfungsnachricht zu bilden, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwendung von String-Substitutionen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie die Substitutionen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungs-Strings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Überprüfungsnachricht auf die gleiche Weise wie bei fehlendem Format-String in die Konsole geschrieben.

Siehe [Textausgabe in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von {{domxref("console")}} für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel demonstriert die Verwendung eines JavaScript-Objekts nach der Überprüfung:

```js
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, "%o", { number, errorMsg });
}
// Ausgabe:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Microsoft Edges Dokumentation zu `console.assert()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#assert)
- [Node.JS Dokumentation zu `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
