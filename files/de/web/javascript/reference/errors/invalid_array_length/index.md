---
title: "RangeError: Ungültige Array-Länge"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Ungültige Array-Länge" tritt auf, wenn eine Array-Länge angegeben wird, die entweder negativ ist, eine Gleitkommazahl darstellt oder die maximale Länge überschreitet, die von der Plattform unterstützt wird (z. B. wenn ein {{jsxref("Array")}} oder {{jsxref("ArrayBuffer")}} erstellt wird oder beim Festlegen der {{jsxref("Array/length", "Länge")}}-Eigenschaft).

Die maximal zulässige Array-Länge hängt von der Plattform, dem Browser und der Browserversion ab. Für {{jsxref("Array")}} beträgt die maximale Länge 2<sup>32</sup>-1. Für {{jsxref("ArrayBuffer")}} beträgt das Maximum auf 32-Bit-Systemen 2<sup>31</sup>-1 (2GiB-1). Ab Firefox Version 89 beträgt der maximale Wert von {{jsxref("ArrayBuffer")}} auf 64-Bit-Systemen 2<sup>33</sup> (8GiB).

> **Note:** `Array` und `ArrayBuffer` sind unabhängige Datenstrukturen (die Implementierung der einen beeinflusst die andere nicht).

## Meldung

```plain
RangeError: invalid array length (V8-based & Firefox)
RangeError: Array size is not a small enough positive integer. (Safari)

RangeError: Invalid array buffer length (V8-based)
RangeError: length too large (Safari)
```

## Fehlertyp

{{jsxref("RangeError")}}

## Was ist schiefgelaufen?

Der Fehler kann auftreten, wenn versucht wird, ein {{jsxref("Array")}} oder {{jsxref("ArrayBuffer")}} mit einer ungültigen Länge zu erzeugen, was Folgendes beinhaltet:

- Negative Länge, über den Konstruktor oder beim Einstellen der {{jsxref("Array/length", "Länge")}}-Eigenschaft.
- Nicht-ganzzahlige Länge, über den Konstruktor oder beim Einstellen der {{jsxref("Array/length", "Länge")}}-Eigenschaft. (Der `ArrayBuffer`-Konstruktor zwingt die Länge zu einer Ganzzahl, aber der `Array`-Konstruktor tut dies nicht.)
- Überschreiten der maximalen Länge, die von der Plattform unterstützt wird. Für Arrays beträgt die maximale Länge 2<sup>32</sup>-1. Für `ArrayBuffer` beträgt die maximale Länge auf 32-Bit-Systemen 2<sup>31</sup>-1 (2GiB-1) oder auf 64-Bit-Systemen 2<sup>33</sup> (8GiB). Dies kann über den Konstruktor, das Einstellen der Länge oder durch Array-Methoden geschehen, die implizit die Längen-Eigenschaft setzen (wie {{jsxref("Array/push", "push")}} und {{jsxref("Array/concat", "concat")}}).

Wenn Sie ein `Array` mit dem Konstruktor erstellen, möchten Sie wahrscheinlich stattdessen die Literal-Schreibweise verwenden, da das erste Argument als Länge des `Array` interpretiert wird. Andernfalls sollten Sie die Länge möglicherweise begrenzen, bevor Sie die Länge festlegen oder sie als Argument des Konstruktors verwenden.

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
- {{jsxref("Array/length", "Länge")}}
- {{jsxref("ArrayBuffer")}}
