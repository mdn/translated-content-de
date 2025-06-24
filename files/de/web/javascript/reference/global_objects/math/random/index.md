---
title: Math.random()
short-title: random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Die statische Methode **`Math.random()`** gibt eine Gleitkommazahl zurück, die pseudo-zufällig ist und größer oder gleich 0 sowie kleiner als 1 ist, mit einer annähernd gleichmäßigen Verteilung über diesen Bereich – welche Sie dann auf den gewünschten Bereich skalieren können. Die Implementierung wählt den anfänglichen Startwert für den Zufallszahlengenerierungsalgorithmus aus; dieser kann nicht vom Benutzer gewählt oder zurückgesetzt werden.

> [!NOTE] > `Math.random()` _liefert keine_ kryptographisch sicheren Zufallszahlen. Verwenden Sie sie nicht für sicherheitsrelevante Anwendungen. Nutzen Sie stattdessen die Web Crypto API, genauer gesagt die Methode [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues).

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

Eine Gleitkommazahl, pseudo-zufällig, zwischen 0 (einschließlich) und 1 (ausschließlich).

## Beispiele

Es ist zu beachten, dass Zahlen in JavaScript IEEE 754 Gleitkommazahlen mit Rundung auf die nächste gerade Zahl sind, sodass die für die unten genannten Funktionen behaupteten Bereiche (außer demjenigen für `Math.random()` selbst) nicht exakt sind. Üblicherweise ist das behauptete obere Ende nicht erreichbar, aber wenn `Math.random()` eine Zahl zurückgibt, die sehr nah bei 1 liegt, könnte der winzige Unterschied beim angeforderten Maximum nicht darstellbar sein, was dazu führt, dass das obere Ende erreicht wird.

### Eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich) erhalten

```js
function getRandom() {
  return Math.random();
}
```

### Eine Zufallszahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine Zufallszahl zurück, die zwischen den angegebenen Werten liegt. Der zurückgegebene Wert ist nicht niedriger als (und möglicherweise gleich) `min` und kleiner als (und nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Einen zufälligen Integer zwischen zwei Werten erhalten

Dieses Beispiel gibt einen zufälligen _Integer_ zwischen den angegebenen Werten zurück. Der Wert ist nicht niedriger als `min` (oder der nächste ganzzahlige Wert größer als `min`, wenn `min` keine ganze Zahl ist) und kleiner als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> Es könnte verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) zu verwenden, um dies zu erreichen, jedoch würde dies dazu führen, dass Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise nicht für Ihre Anforderungen geeignet ist.

### Einen zufälligen Integer zwischen zwei Werten, einschließlich erhalten

Während die Funktion `getRandomInt()` oben am Minimum einschließlich ist, ist sie am Maximum ausschließlich. Was, wenn die Ergebnisse an beiden Grenzen einschließlich sein müssen? Die Funktion `getRandomIntInclusive()` erreicht genau das.

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
