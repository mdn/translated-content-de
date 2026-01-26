---
title: Rekursion
slug: Glossary/Recursion
l10n:
  sourceCommit: edcc5310efdcf36ca408ab3df5d5d4ba2f21cd4a
---

Der Akt der Selbstaufrufung einer Funktion, Rekursion, wird verwendet, um Probleme zu lösen, die kleinere Teilprobleme enthalten. Eine rekursive Funktion kann zwei Eingaben erhalten: einen Basisfall (beendet die Rekursion) oder einen rekursiven Fall (setzt die Rekursion fort).

## Beispiele

### Rekursive Funktion ruft sich selbst auf, bis Bedingung erfüllt ist

Der folgende Python-Code definiert eine Funktion, die eine Zahl übernimmt, sie ausgibt und sich dann erneut mit dem Wert der Zahl -1 aufruft. Sie fährt fort, bis die Zahl gleich 0 ist, in diesem Fall stoppt sie.

```python
def recurse(x):
   if x > 0:
       print(x)
       recurse(x - 1)

recurse(10)
```

Die Ausgabe wird wie folgt aussehen:

```plain
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
```

### Rekursion ist durch die Stapelgröße begrenzt

Der folgende Code definiert eine Funktion, die die maximale Größe des Aufrufstapels zurückgibt, der in der JavaScript-Laufzeit verfügbar ist, in der der Code ausgeführt wird.

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

#### Fakultät

```js
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(10));
// 3628800
```

#### Fibonacci

```js
const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
// 55
```

#### Reduzieren

```js
const reduce = (fn, acc, [cur, ...rest]) =>
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest);
console.log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// 45
```

## Siehe auch

- [Rekursion (Informatik)](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>) auf Wikipedia
- [Weitere Details zur Rekursion in JavaScript](/de/docs/Web/JavaScript/Guide/Functions#recursion)
