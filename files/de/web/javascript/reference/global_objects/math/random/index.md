---
title: Math.random()
short-title: random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Math.random()`** statische Methode gibt eine Gleitkommazahl zurück, die pseudo-zufällig ist und größer oder gleich 0 und kleiner als 1 ist, mit ungefähr gleichmäßiger Verteilung über diesen Bereich — den Sie dann auf Ihren gewünschten Bereich skalieren können. Die Implementierung wählt den anfänglichen Seed für den Zufallszahlengenerierungsalgorithmus aus; er kann vom Benutzer nicht gewählt oder zurückgesetzt werden.

> [!NOTE]
> `Math.random()` _bietet keine_ kryptografisch sicheren Zufallszahlen. Verwenden Sie sie nicht für sicherheitsrelevante Zwecke. Verwenden Sie stattdessen die Web Crypto API, und genauer die Methode [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues).

{{InteractiveExample("JavaScript Demo: Math.random()")}}

```js interactive-example
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1
```

## Syntax

```js-nolint
Math.random()
```

### Parameter

Keine.

### Rückgabewert

Eine Gleitkommazahl, pseudo-zufällig zwischen 0 (einschließlich) und 1 (ausschließlich).

## Beispiele

Beachten Sie, dass Zahlen in JavaScript IEEE 754 Gleitkommazahlen mit Rundung auf das nächste gerade Verhalten sind. Die für die unten genannten Funktionen (außer für `Math.random()` selbst) angegebenen Bereiche sind daher nicht exakt. Normalerweise ist die angegebene obere Grenze nicht erreichbar, aber wenn `Math.random()` eine Zahl sehr nah an 1 zurückgibt, könnte der winzige Unterschied an der gewünschten maximalen Grenze nicht darstellbar sein, wodurch die obere Grenze erreicht wird.

### Eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich) erhalten

```js
function getRandom() {
  return Math.random();
}
```

### Eine Zufallszahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine Zufallszahl zwischen den angegebenen Werten zurück. Der zurückgegebene Wert ist nicht niedriger als (und kann möglicherweise gleich) `min`, und ist weniger als (und nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Eine zufällige ganze Zahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine zufällige _ganze Zahl_ zwischen den angegebenen Werten zurück. Der Wert ist nicht niedriger als `min` (oder die nächste ganze Zahl größer als `min`, wenn `min` keine ganze Zahl ist) und ist weniger als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> Es könnte verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) dafür zu verwenden, aber dies würde dazu führen, dass Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise nicht für Ihre Bedürfnisse akzeptabel ist.

### Eine zufällige ganze Zahl zwischen zwei Werten (einschließlich) erhalten

Obwohl die oben erwähnte `getRandomInt()` Funktion am Minimum einschließlich ist, ist sie am Maximum ausschließlich. Was, wenn Sie Ergebnisse benötigen, die sowohl am Minimum als auch am Maximum einschließlich sind? Die `getRandomIntInclusive()` Funktion unten erreicht das.

```js
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues)
