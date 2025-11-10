---
title: "InternalError: zu viel Rekursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme „zu viel Rekursion“ oder „Maximale Aufrufstapelgröße überschritten“
tritt auf, wenn es zu viele Funktionsaufrufe gibt oder eine Funktion einen Basisfall vermisst.

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

In gewisser Weise ist Rekursion analog zu einer Schleife. Beide führen denselben Code mehrfach aus und beide benötigen eine Bedingung (um eine Endlosschleife bzw. in diesem Fall eine endlose Rekursion zu vermeiden). Wenn es zu viele Funktionsaufrufe gibt oder eine Funktion einen Basisfall vermisst, wirft JavaScript diesen Fehler.

## Beispiele

Diese rekursive Funktion läuft 10 Mal, gemäß der Abbruchbedingung.

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

Das Setzen dieser Bedingung auf einen extrem hohen Wert funktioniert nicht:

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

### Klassischer Fehler: zu viel Rekursion

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

Wenn ein Wert der Eigenschaft `name` zugewiesen wird (`this.name = name;`), muss JavaScript diese Eigenschaft setzen. Wenn dies geschieht, wird die Setter-Funktion ausgelöst.

In diesem Beispiel wird bei Auslösen des Setters derselbe Vorgang erneut angewiesen: _die gleiche Eigenschaft zu setzen, die es zu bearbeiten gilt._ Dies führt dazu, dass die Funktion sich selbst immer und immer wieder aufruft und dadurch unendlich rekursiv wird.

Dieses Problem tritt auch auf, wenn dieselbe Variable im Getter verwendet wird.

```js example-bad
class Person {
  get name() {
    return this.name; // Recursive call
  }
}
```

Um dieses Problem zu vermeiden, stellen Sie sicher, dass die Eigenschaft, die innerhalb der Setter-Funktion zugewiesen wird, sich von der unterscheidet, die den Setter ursprünglich ausgelöst hat. Gleiches gilt für den Getter.

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

- {{Glossary("Recursion", "Rekursion")}}
- [Rekursive Funktionen](/de/docs/Web/JavaScript/Guide/Functions#recursion)
