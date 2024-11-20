---
title: "console: assert() statische Methode"
short-title: assert()
slug: Web/API/console/assert_static
l10n:
  sourceCommit: 24d561bb783b8baa87219d4d90535da2da766b14
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
  - : Jedes beliebige boolesche Ausdruck. Wenn die Behauptung falsch ist, wird eine generische Meldung, die auf das Scheitern der Behauptung hinweist, in die Konsole geschrieben.
- `val1` … `valN`
  - : Eine Liste von JavaScript-Werten zum Ausgeben. Eine Darstellung jedes dieser Werte wird nach einer generischen Fehlermeldung der Behauptung in der angegebenen Reihenfolge in die Konsole ausgegeben, wobei eine Art von Trennung zwischen der Meldung und jedem dieser Werte erfolgt. Es gibt einen Sonderfall, wenn `val1` ein String ist, der anschließend beschrieben wird.
- `msg`
  - : Ein JavaScript-String, der null oder mehr Ersatzstrings enthält, die durch `subst1` bis `substN` in aufeinanderfolgender Reihenfolge bis zur Anzahl der Ersatzstrings ersetzt werden. Ein Doppelpunkt, ein Leerzeichen und anschließend der ersetzte String werden der generischen Behauptungsmeldung hinzugefügt, um eine detaillierte Fehlermeldung zu erstellen, und das Ergebnis wird in die Konsole ausgegeben. Siehe [Verwendung von String-Ersetzungen](/de/docs/Web/API/console#using_string_substitutions) für eine Beschreibung, wie die Ersetzungen funktionieren.
- `subst1` … `substN`
  - : JavaScript-Werte, mit denen Ersatz-Strings innerhalb von `msg` ersetzt werden. Wenn es mehr Ersatzwerte als Ersatzstrings gibt, werden die zusätzlichen Werte selbst nach der detaillierten Fehlermeldung in derselben Weise wie bei fehlendem Format-String in die Konsole geschrieben.

Siehe [Ausgabe von Text in die Konsole](/de/docs/Web/API/console#outputting_text_to_the_console) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für weitere Details.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
- [Node.JS-Dokumentation zu `console.assert()`](https://nodejs.org/docs/latest/api/console.html#consoleassertvalue-message)
- [Google Chromes Dokumentation zu `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
