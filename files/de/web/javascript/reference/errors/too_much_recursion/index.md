---
title: "InternalError: zu viel Rekursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "too much recursion" oder "Maximum call stack size exceeded" tritt auf, wenn es zu viele Funktionsaufrufe gibt oder einer Funktion ein Basisfall fehlt.

## Nachricht

```plain
RangeError: Maximum call stack size exceeded (Chrome)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded. (Safari)
```

## Fehlertyp

{{jsxref("InternalError")}} in Firefox; {{jsxref("RangeError")}} in Chrome und Safari.

## Was ist schiefgelaufen?

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. Sobald eine Bedingung erfüllt ist, hört die Funktion auf, sich selbst aufzurufen. Dies wird als _Basisfall_ bezeichnet.

In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrmals aus, und beide erfordern eine Bedingung (um eine Endlosschleife oder vielmehr eine unendliche Rekursion in diesem Fall zu vermeiden). Wenn es zu viele Funktionsaufrufe gibt oder einer Funktion ein Basisfall fehlt, wird JavaScript diesen Fehler auslösen.

## Beispiele

Diese rekursive Funktion läuft 10 Mal, entsprechend der Abbruchbedingung.

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" is the exit condition
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Eine sehr hohe Einstellung dieser Bedingung wird nicht funktionieren:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

Diese rekursive Funktion fehlt ein Basisfall. Da es keine Abbruchbedingung gibt, wird die Funktion sich unendlich oft selbst aufrufen.

```js example-bad
function loop(x) {
  // The base case is missing
  loop(x + 1); // Recursive call
}

loop(0);

// InternalError: too much recursion
```

### Klassenfehler: zu viel Rekursion

```js example-bad
class Person {
  constructor() {}
  set name(name) {
    this.name = name; // Recursive call
  }
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: too much recursion
```

Wenn einem Eigenschaftsnamen ein Wert zugewiesen wird (this.name = name;), muss JavaScript diese Eigenschaft setzen. Wenn dies geschieht, wird die Setter-Funktion ausgelöst.

In diesem Beispiel, wenn der Setter ausgelöst wird, wird ihm gesagt, dass er dasselbe wieder tun soll: _dieselbe Eigenschaft zu setzen, für die er zuständig ist._ Dies führt dazu, dass die Funktion sich immer wieder selbst aufruft und unendlich rekursiv wird.

Dieses Problem tritt auch auf, wenn dieselbe Variable im Getter verwendet wird.

```js example-bad
class Person {
  get name() {
    return this.name; // Recursive call
  }
}
```

Um dieses Problem zu vermeiden, stellen Sie sicher, dass die Eigenschaft, die innerhalb der Setter-Funktion zugewiesen wird, sich von der unterscheidet, die den Setter ursprünglich ausgelöst hat. Dasselbe gilt für den Getter.

```js
class Person {
  constructor() {}
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const tony = new Person();
tony.name = "Tonisha";
console.log(tony);
```

## Siehe auch

- [Rekursion](/de/docs/Glossary/Recursion)
- [Rekursive Funktionen](/de/docs/Web/JavaScript/Guide/Functions#recursion)
