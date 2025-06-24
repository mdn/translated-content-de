---
title: "RangeError: ungültige Array-Länge"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Ungültige Array-Länge" tritt auf, wenn eine Array-Länge angegeben wird, die entweder negativ, eine Gleitkommazahl ist oder das von der Plattform unterstützte Maximum überschreitet (d.h. beim Erstellen eines {{jsxref("Array")}} oder {{jsxref("ArrayBuffer")}}, oder beim Setzen der {{jsxref("Array/length", "length")}} Eigenschaft).

Die maximal zulässige Array-Länge hängt von der Plattform, dem Browser und der Browserversion ab.
Für {{jsxref("Array")}} beträgt die maximale Länge 2<sup>32</sup>-1.
Für {{jsxref("ArrayBuffer")}} ist das Maximum auf 32-Bit-Systemen 2<sup>31</sup>-1 (2GiB-1).
Ab Firefox-Version 89 ist der Maximalwert von {{jsxref("ArrayBuffer")}} 2<sup>33</sup> (8GiB) auf 64-Bit-Systemen.

> [!NOTE] > `Array` und `ArrayBuffer` sind unabhängige Datenstrukturen (die Implementierung eines beeinflusst nicht die des anderen).

## Nachricht

```plain
RangeError: invalid array length (V8-based & Firefox)
RangeError: Array size is not a small enough positive integer. (Safari)

RangeError: Invalid array buffer length (V8-based)
RangeError: length too large (Safari)
```

## Fehlerart

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Der Fehler kann auftreten, wenn versucht wird, ein {{jsxref("Array")}} oder {{jsxref("ArrayBuffer")}} mit einer ungültigen Länge zu erzeugen, was Folgendes umfasst:

- Negative Länge, entweder über den Konstruktor oder das Setzen der {{jsxref("Array/length", "length")}} Eigenschaft.
- Nicht-ganzzahlige Länge, entweder über den Konstruktor oder das Setzen der {{jsxref("Array/length", "length")}} Eigenschaft. (Der `ArrayBuffer`-Konstruktor wandelt die Länge in eine ganze Zahl um, der `Array`-Konstruktor jedoch nicht.)
- Überschreiten der maximalen auf der Plattform unterstützten Länge. Für Arrays ist die maximale Länge 2<sup>32</sup>-1. Für `ArrayBuffer` ist die maximale Länge 2<sup>31</sup>-1 (2GiB-1) auf 32-Bit-Systemen oder 2<sup>33</sup> (8GiB) auf 64-Bit-Systemen. Dies kann über den Konstruktor, das Setzen der `length`-Eigenschaft oder Array-Methoden, die implizit die `length`-Eigenschaft setzen (wie {{jsxref("Array/push", "push")}} und {{jsxref("Array/concat", "concat")}}), geschehen.

Wenn Sie ein `Array` mit dem Konstruktor erstellen, möchten Sie wahrscheinlich stattdessen die Literalnotation verwenden, da das erste Argument als Länge des `Array` interpretiert wird. Andernfalls möchten Sie möglicherweise die Länge begrenzen, bevor Sie die `length`-Eigenschaft setzen oder sie als Argument des Konstruktors verwenden.

## Beispiele

### Ungültige Fälle

```js example-bad
new Array(2 ** 40);
new Array(-1);
new ArrayBuffer(2 ** 32); // 32-bit system
new ArrayBuffer(-1);

const a = [];
a.length -= 1; // set the length property to -1

const b = new Array(2 ** 32 - 1);
b.length += 1; // set the length property to 2^32
b.length = 2.5; // set the length property to a floating-point number

const c = new Array(2.5); // pass a floating-point number

// Concurrent modification that accidentally grows the array infinitely
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
```

### Gültige Fälle

```js example-good
[2 ** 40]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(2 ** 31 - 1);
new ArrayBuffer(2 ** 33); // 64-bit systems after Firefox 89
new ArrayBuffer(0);

const a = [];
a.length = Math.max(0, a.length - 1);

const b = new Array(2 ** 32 - 1);
b.length = Math.min(0xffffffff, b.length + 1);
// 0xffffffff is the hexadecimal notation for 2^32 - 1
// which can also be written as (-1 >>> 0)

b.length = 3;

const c = new Array(3);

// Because array methods save the length before iterating, it is safe to grow
// the array during iteration
const arr = [1, 2, 3];
arr.forEach((e) => arr.push(e * 10));
```

## Siehe auch

- {{jsxref("Array")}}
- {{jsxref("Array/length", "length")}}
- {{jsxref("ArrayBuffer")}}
