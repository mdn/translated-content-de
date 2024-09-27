---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 0aba9992d39210d5b8a8b204c5baafd3b31c4e25
---

{{JSRef}}

Die statische Methode **`Math.random()`** gibt eine Fließkommazahl zurück, die pseudo-zufällig ist und größer oder gleich 0 und kleiner als 1 ist, mit ungefähr gleichmäßiger Verteilung über diesen Bereich — welche Sie dann auf Ihren gewünschten Bereich skalieren können. Die Implementierung wählt den anfänglichen Seed für den Zufallszahlengenerator-Algorithmus aus; er kann nicht vom Benutzer ausgewählt oder zurückgesetzt werden.

> **Note:** `Math.random()` liefert _keine_ kryptographisch sicheren Zufallszahlen. Verwenden Sie sie nicht für Sicherheitszwecke. Nutzen Sie stattdessen die Web Crypto API, insbesondere die Methode [`Crypto.getRandomValues()`](/de/docs/Web/API/Crypto/getRandomValues).

{{EmbedInteractiveExample("pages/js/math-random.html")}}

## Syntax

```js-nolint
Math.random()
```

### Parameter

Keine.

### Rückgabewert

Eine Fließkommazahl, die pseudo-zufällig zwischen 0 (einschließlich) und 1 (ausschließlich) liegt.

## Beispiele

Beachten Sie, dass Zahlen in JavaScript IEEE 754 Fließkommazahlen mit rund-zu-nächste-gerade Verhalten sind, die für die unten genannten Funktionen (außer `Math.random()` selbst) beanspruchten Bereiche deshalb nicht exakt sind. Normalerweise ist die beanspruchte Obergrenze nicht erreichbar, aber wenn `Math.random()` eine Zahl liefert, die sehr nahe bei 1 liegt, kann der winzige Unterschied möglicherweise nicht als das angeforderte Maximum dargestellt werden, wodurch die Obergrenze erreicht werden kann.

### Eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich) erhalten

```js
function getRandom() {
  return Math.random();
}
```

### Eine Zufallszahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine Zufallszahl zwischen den angegebenen Werten zurück. Der zurückgegebene Wert ist nicht kleiner als (und möglicherweise gleich) `min` und kleiner als (aber nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Eine zufällige Ganzzahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine zufällige _Ganzzahl_ zwischen den angegebenen Werten zurück. Der Wert ist nicht kleiner als `min` (oder die nächste Ganzzahl größer als `min`, wenn `min` keine Ganzzahl ist) und ist kleiner als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
```

> [!NOTE]
> Es mag verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) zu verwenden, um dies zu erreichen, aber dadurch würden Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise nicht akzeptabel für Ihre Bedürfnisse ist.

### Eine zufällige Ganzzahl zwischen zwei Werten, inklusive

Während die oben genannte Funktion `getRandomInt()` inklusiv beim Minimum ist, ist sie exklusiv beim Maximum. Was, wenn Sie die Ergebnisse sowohl beim Minimum als auch beim Maximum inklusiv benötigen? Die Funktion `getRandomIntInclusive()` unten erreicht das.

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
