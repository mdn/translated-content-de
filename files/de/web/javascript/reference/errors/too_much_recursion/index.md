---
title: "InternalError: zu viele Rekursionen"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "zu viele Rekursionen" oder "Maximum call stack size exceeded" tritt auf, wenn es zu viele Funktionsaufrufe gibt oder einer Funktion ein Basisfall fehlt.

## Nachricht

```plain
RangeError: Maximum call stack size exceeded (Chrome)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded. (Safari)
```

## Fehlerart

{{jsxref("InternalError")}} in Firefox; {{jsxref("RangeError")}} in Chrome und Safari.

## Was ist schiefgelaufen?

Eine Funktion, die sich selbst aufruft, wird als _rekursive Funktion_ bezeichnet. Sobald eine Bedingung erfüllt ist, hört die Funktion auf, sich selbst aufzurufen. Dies wird als _Basisfall_ bezeichnet.

In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrmals aus und beide erfordern eine Bedingung (um eine Endlosschleife oder in diesem Fall eine endlose Rekursion zu vermeiden). Wenn es zu viele Funktionsaufrufe gibt oder einer Funktion ein Basisfall fehlt, wird JavaScript diesen Fehler auslösen.

## Beispiele

Diese rekursive Funktion läuft 10 Mal, entsprechend der Ausstiegsbedingung.

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" ist die Ausstiegsbedingung
    return;
  // mache etwas
  loop(x + 1); // der rekursive Aufruf
}
loop(0);
```

Das Setzen dieser Bedingung auf einen extrem hohen Wert wird nicht funktionieren:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // mache etwas
  loop(x + 1);
}
loop(0);

// InternalError: zu viele Rekursionen
```

Diese rekursive Funktion fehlt ein Basisfall. Da es keine Ausstiegsbedingung gibt, wird die Funktion sich unendlich oft aufrufen.

```js example-bad
function loop(x) {
  // Der Basisfall fehlt
  loop(x + 1); // Rekursiver Aufruf
}

loop(0);

// InternalError: zu viele Rekursionen
```

### Klassenfehler: zu viele Rekursionen

```js example-bad
class Person {
  constructor() {}
  set name(name) {
    this.name = name; // Rekursiver Aufruf
  }
}

const tony = new Person();
tony.name = "Tonisha"; // InternalError: zu viele Rekursionen
```

Wenn einem Wert die Eigenschaft name zugewiesen wird (this.name = name;), muss JavaScript diese Eigenschaft setzen. Wenn dies passiert, wird die Setzerfunktion ausgelöst.

In diesem Beispiel wird dem Setzer gesagt, er soll erneut dasselbe tun: _die gleiche Eigenschaft zu setzen, für die er zuständig ist_. Dies führt dazu, dass sich die Funktion immer wieder selbst aufruft, was sie unendlich rekursiv macht.

Dieses Problem tritt auch auf, wenn dieselbe Variable im Getter verwendet wird.

```js example-bad
class Person {
  get name() {
    return this.name; // Rekursiver Aufruf
  }
}
```

Um dieses Problem zu vermeiden, stellen Sie sicher, dass die Eigenschaft, der innerhalb der Setzerfunktion ein Wert zugewiesen wird, sich von der unterscheidet, die ursprünglich den Setzer ausgelöst hat. Das Gleiche gilt für den Getter.

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

- {{Glossary("Recursion")}}
- [Rekursive Funktionen](/de/docs/Web/JavaScript/Guide/Functions#recursion)
