---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 0aba9992d39210d5b8a8b204c5baafd3b31c4e25
---

{{JSRef}}

Die statische Methode **`Math.random()`** gibt eine Gleitkommazahl zurück, die größer als oder gleich 0 und kleiner als 1 ist, mit einer annähernd gleichmäßigen Verteilung über diesen Bereich — die Sie dann auf Ihren gewünschten Bereich skalieren können. Die Implementierung wählt den anfänglichen Seed für den Zufallszahlengenerierungsalgorithmus; er kann nicht vom Benutzer ausgewählt oder zurückgesetzt werden.

> **Note:** `Math.random()` _liefert keine_ kryptografisch sicheren Zufallszahlen. Verwenden Sie diese nicht für sicherheitsrelevante Anwendungen. Verwenden Sie stattdessen die Web Crypto API und genauer die Methode [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues).

{{EmbedInteractiveExample("pages/js/math-random.html")}}

## Syntax

```js-nolint
Math.random()
```

### Parameter

Keine.

### Rückgabewert

Eine Gleitkommazahl, Pseudo-Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich).

## Beispiele

Beachten Sie, dass Zahlen in JavaScript IEEE 754-Gleitkommazahlen mit Rundung auf den nächsten geraden Wert sind. Die für die nachstehenden Funktionen behaupteten Bereiche (mit Ausnahme derjenigen für `Math.random()` selbst) sind nicht exakt. Normalerweise ist die behauptete obere Grenze nicht erreichbar, aber wenn `Math.random()` eine Zahl zurückgibt, die sehr nahe bei 1 liegt, kann der winzige Unterschied am angeforderten Maximum möglicherweise nicht darstellbar sein, was dazu führen kann, dass die obere Grenze erreicht wird.

### Zufällige Zahl zwischen 0 (einschließlich) und 1 (ausschließlich)

```js
function getRandom() {
  return Math.random();
}
```

### Zufällige Zahl zwischen zwei Werten

Dieses Beispiel gibt eine Zufallszahl zwischen den angegebenen Werten zurück. Der zurückgegebene Wert ist nicht niedriger als (und kann möglicherweise gleich) `min` sein und ist kleiner als (und nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Zufällige Ganzzahl zwischen zwei Werten

Dieses Beispiel gibt eine zufällige _Ganzzahl_ zwischen den angegebenen Werten zurück. Der Wert ist nicht niedriger als `min` (oder die nächsthöhere Ganzzahl, wenn `min` keine Ganzzahl ist) und ist kleiner als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> Es könnte verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) zu verwenden, um dies zu erreichen, aber dies würde dazu führen, dass Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise für Ihre Bedürfnisse nicht akzeptabel ist.

### Zufällige Ganzzahl zwischen zwei Werten, einschließlich

Während die Funktion `getRandomInt()` oben am Minimum einschließlich ist, ist sie am Maximum ausschließlich. Was, wenn Sie die Ergebnisse sowohl am Minimum als auch am Maximum einschließlich benötigen? Die folgende Funktion `getRandomIntInclusive()` erreicht dies.

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
