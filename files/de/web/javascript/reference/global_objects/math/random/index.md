---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Math.random()`** gibt eine Fließkommazahl zurück, die größer oder gleich 0 und kleiner als 1 ist und über diesen Bereich annähernd gleichmäßig verteilt ist. Diese Zahl kann dann auf den gewünschten Bereich skaliert werden. Die Implementierung wählt den Startwert (Seed) für den Zufallszahlengenerierungsalgorithmus aus; der Benutzer kann diesen weder wählen noch zurücksetzen.

> **Note:** `Math.random()` _liefert keine_ kryptografisch sicheren Zufallszahlen. Verwenden Sie diese Methode nicht für sicherheitsrelevante Anwendungen. Stattdessen sollten Sie die Web Crypto API verwenden, genauer gesagt die Methode [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues).

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

Eine Fließkommazahl, die größer oder gleich 0 (einschließlich) und kleiner als 1 (ausschließlich) ist.

## Beispiele

Da Zahlen in JavaScript IEEE 754 Fließkommazahlen mit Rundung nach nächstgelegener gerader Zahl sind, sind die für die unten stehenden Funktionen angegebenen Bereiche (außer für `Math.random()` selbst) nicht genau. Üblicherweise ist die angegebene obere Grenze nicht erreichbar, aber wenn `Math.random()` eine Zahl sehr nahe bei 1 zurückgibt, könnte der winzige Unterschied bei der angeforderten Maximalgrenze nicht darstellbar sein, was dazu führen kann, dass die obere Grenze erreicht wird.

### Eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich)

```js
function getRandom() {
  return Math.random();
}
```

### Eine Zufallszahl zwischen zwei Werten generieren

Dieses Beispiel gibt eine Zufallszahl zwischen den angegebenen Werten zurück. Der zurückgegebene Wert ist nicht kleiner als (und möglicherweise gleich) `min` und kleiner als (und nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Eine ganze Zufallszahl zwischen zwei Werten generieren

Dieses Beispiel gibt eine zufällige _ganze Zahl_ zwischen den angegebenen Werten zurück. Der Wert ist nicht kleiner als `min` (oder die nächsthöhere ganze Zahl größer als `min`, falls `min` keine ganze Zahl ist) und kleiner als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> Es könnte verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) zu verwenden, um dies zu erreichen. Allerdings würde dies dazu führen, dass Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise für Ihre Anforderungen nicht akzeptabel ist.

### Eine ganze Zufallszahl zwischen zwei Werten, einschließlich

Während die Funktion `getRandomInt()` oben den Minimalwert einschließt, den Maximalwert jedoch ausschließt, kann es sein, dass Sie Ergebnisse benötigen, die sowohl den Minimalwert als auch den Maximalwert einschließen. Die folgende Funktion `getRandomIntInclusive()` erreicht dies.

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
