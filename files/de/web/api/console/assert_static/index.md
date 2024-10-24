---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.assert()`** statische Methode schreibt eine Fehlermeldung in die Konsole, wenn die Aussage falsch ist. Wenn die Aussage wahr ist, passiert nichts.

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
  - : Jede boolesche Ausdruck. Wenn die Aussage falsch ist, wird eine generische Meldung, die auf den Fehler hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zur Ausgabe. Eine Darstellung jedes dieser Werte wird nach einer generischen Fehlermeldung in die Konsole ausgegeben (die von der Meldung abweichen kann, wenn diese Werte nicht vorhanden sind) in der gegebenen Reihenfolge mit einer Art Trennung zwischen der Meldung und jedem von ihnen. Es gibt einen Sonderfall, wenn `obj1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersetzungs-Strings enthält, die in aufeinander folgender Reihenfolge mit `subst1` bis `substN` ersetzt werden, bis zur Anzahl der Ersetzungs-Strings. Ein Doppelpunkt, ein Leerzeichen und dann der ersetzte String werden angehängt, um eine detaillierte Fehlermeldung zu bilden, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersetzungs-Strings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersetzungswerte als Ersetzungs-Strings gibt, werden die zusätzlichen Werte nach der detaillierten Fehlermeldung auf dieselbe Weise in die Konsole ausgegeben, wie wenn kein Format-String vorhanden ist.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel demonstriert die Verwendung eines JavaScript-Objekts nach der Aussage:

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
- [Node.JS-Dokumentation zu `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
