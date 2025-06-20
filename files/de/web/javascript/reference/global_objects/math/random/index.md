---
title: Math.random()
short-title: random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Math.random()`** gibt eine Gleitkommazahl zurück, die pseudozufällig ist und größer oder gleich 0 und kleiner als 1 ist, mit ungefähr gleichmäßiger Verteilung über diesen Bereich — die Sie dann auf Ihren gewünschten Bereich skalieren können. Die Implementierung wählt den initialen Seed für den Zufallszahlengenerierungsalgorithmus; er kann nicht vom Benutzer gewählt oder zurückgesetzt werden.

> **Hinweis:** `Math.random()` _liefert keine_ kryptografisch sicheren Zufallszahlen. Verwenden Sie sie nicht für sicherheitsrelevante Themen. Verwenden Sie stattdessen die Web Crypto API und genauer die Methode [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues).

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

Eine Gleitkommazahl, die pseudozufällig zwischen 0 (einschließlich) und 1 (ausschließlich) ist.

## Beispiele

Beachten Sie, dass Zahlen in JavaScript IEEE 754-Gleitkommazahlen mit Rundung-zur-nächsten-geraden-Verhalten sind. Die beanspruchten Bereiche für die unten angegebenen Funktionen (außer für `Math.random()` selbst) sind nicht exakt. Normalerweise ist die beanspruchte obere Grenze nicht erreichbar, aber wenn `Math.random()` eine Zahl zurückgibt, die sehr nahe bei 1 liegt, kann der winzige Unterschied möglicherweise nicht bei dem angeforderten Maximum dargestellt werden, wodurch die obere Grenze erreicht wird.

### Eine zufällige Zahl zwischen 0 (einschließlich) und 1 (ausschließlich) erhalten

```js
function getRandom() {
  return Math.random();
}
```

### Eine zufällige Zahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine zufällige Zahl zwischen den angegebenen Werten zurück. Der zurückgegebene Wert ist nicht niedriger als (und möglicherweise gleich) `min` und ist kleiner als (und nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Eine zufällige Ganzzahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine zufällige _Ganzzahl_ zwischen den angegebenen Werten zurück. Der Wert ist nicht niedriger als `min` (oder die nächste ganze Zahl größer als `min`, wenn `min` keine ganze Zahl ist) und ist kleiner als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> Es könnte verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) zu verwenden, um dies zu erreichen, aber dies würde dazu führen, dass Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise nicht akzeptabel für Ihre Bedürfnisse ist.

### Eine zufällige Ganzzahl zwischen zwei Werten erhalten, inklusive

Während die oben angegebene Funktion `getRandomInt()` am Minimum inklusive ist, ist sie am Maximum exklusiv. Was ist, wenn Sie Ergebnisse benötigen, die sowohl am Minimum als auch am Maximum inklusive sind? Die unten stehende Funktion `getRandomIntInclusive()` erreicht genau das.

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
