---
title: Memoization
slug: Glossary/Memoization
l10n:
  sourceCommit: 9f46f08d20b21498293cbf6b84f508103272ec6f
---

**Memoization** ist eine Optimierungstechnik, die das Ergebnis eines {{Glossary("function", "Funktionsaufrufs")}} speichert und das gespeicherte Ergebnis zurückgibt, wenn die Funktion erneut mit denselben Eingaben aufgerufen wird. Dies vermeidet die Wiederholung der Berechnung.

Das folgende Muster ist typisch für Memoization:

```js
const argToResult = new Map();

function memoizedFunction(arg) {
  if (argToResult.has(arg)) {
    return argToResult.get(arg);
  }
  const result = heavyComputation(arg);
  argToResult.set(arg, result);
  return result;
}
```

Memoization tauscht zusätzlichen Speicherbedarf gegen potenziell schnellere Ausführung ein. Es eignet sich für Funktionen, die für dieselben Eingaben stets dasselbe Ergebnis liefern und keine Nebeneffekte haben, insbesondere wenn erwartet wird, dass die Funktion häufig mit denselben Eingaben aufgerufen wird. Zum Beispiel wird es häufig bei {{Glossary("recursion", "Rekursion")}} verwendet, da es viele rekursive Aufrufe mit demselben Argument geben kann.

## Siehe auch

- [Memoization](https://en.wikipedia.org/wiki/Memoization) auf Wikipedia
- [Smart / self-overwriting / lazy getters](/de/docs/Web/JavaScript/Reference/Functions/get#smart_self-overwriting_lazy_getters)
