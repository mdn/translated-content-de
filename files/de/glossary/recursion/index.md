---
title: Rekursion
slug: Glossary/Recursion
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Der Akt der Selbstaufrufung einer Funktion, Rekursion, wird verwendet, um Probleme zu lösen, die kleinere Unterprobleme enthalten. Eine rekursive Funktion kann zwei Eingaben erhalten: einen Basisfall (beendet die Rekursion) oder einen rekursiven Fall (nimmt die Rekursion wieder auf).

## Beispiele

### Rekursive Funktion ruft sich selbst auf, bis Bedingung erfüllt ist

Der folgende Python-Code definiert eine Funktion, die eine Zahl entgegennimmt, sie ausdruckt und sich dann selbst mit dem Wert der Zahl -1 erneut aufruft. Dies geschieht so lange, bis die Zahl gleich 0 ist, in welchem Fall sie stoppt.

```py
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

Die Ausgabe sieht folgendermaßen aus:

10
9
8
7
6
5
4
3
2
1

### Rekursion ist durch Stapelgröße begrenzt

Der folgende Code definiert eine Funktion, die die maximale Größe des Aufrufstapels zurückgibt, der im JavaScript-Laufzeitsystem verfügbar ist, in dem der Code ausgeführt wird.

```js
const getMaxCallStackSize = (i) => {
  try {
    return getMaxCallStackSize(++i);
  } catch {
    return i;
  }
};

console.log(getMaxCallStackSize(0));
```

### Häufige Anwendungsbeispiele

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(10));
// 3628800
```

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

```js
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## Siehe auch

- [Rekursion (Informatik)](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>) auf Wikipedia
- [Mehr Details über Rekursion in JavaScript](/de/docs/Web/JavaScript/Guide/Functions#recursion)
