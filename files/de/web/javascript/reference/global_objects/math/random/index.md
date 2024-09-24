---
title: Math.random()
slug: Web/JavaScript/Reference/Global_Objects/Math/random
l10n:
  sourceCommit: 0aba9992d39210d5b8a8b204c5baafd3b31c4e25
---

{{JSRef}}

Die **`Math.random()`**-statische Methode gibt eine Gleitkommazahl zurück, die ein pseudo-zufälliger Wert ist, größer oder gleich 0 und kleiner als 1, mit annähernd gleichmäßiger Verteilung über diesen Bereich — die Sie dann auf Ihren gewünschten Bereich skalieren können. Die Implementierung wählt den initialen Startwert des Zufallsgenerierungsalgorithmus; dieser kann vom Benutzer weder gewählt noch zurückgesetzt werden.

> **Hinweis:** `Math.random()` liefert _keine_ kryptographisch sicheren Zufallszahlen. Verwenden Sie sie nicht für sicherheitsbezogene Anwendungen. Verwenden Sie stattdessen die Web Crypto API und genauer die Methode {{domxref("Crypto.getRandomValues()")}}.

{{EmbedInteractiveExample("pages/js/math-random.html")}}

## Syntax

```js-nolint
Math.random()
```

### Parameter

Keine.

### Rückgabewert

Eine Gleitkommazahl, ein pseudo-zufälliger Wert zwischen 0 (einschließlich) und 1 (ausschließlich).

## Beispiele

Beachten Sie, dass aufgrund der Darstellung von Zahlen in JavaScript als IEEE 754-Gleitkommazahlen mit Rundung auf den nächsten geraden Wert die für die unten angegebenen Funktionen behaupteten Bereiche (außer dem für `Math.random()` selbst) nicht genau sind. In der Regel ist die behauptete obere Grenze nicht erreichbar, aber wenn `Math.random()` eine Zahl sehr nahe an 1 zurückgibt, kann der winzige Unterschied bei der angeforderten Höchstgrenze möglicherweise nicht darstellbar sein, wodurch die obere Grenze erreicht werden kann.

### Eine Zufallszahl zwischen 0 (einschließlich) und 1 (ausschließlich) erhalten

```js
function getRandom() {
  return Math.random();
}
```

### Eine Zufallszahl zwischen zwei Werten erhalten

Dieses Beispiel gibt eine Zufallszahl zwischen den angegebenen Werten zurück. Der zurückgegebene Wert ist nicht kleiner als (und kann möglicherweise gleich) `min` und ist kleiner als (und nicht gleich) `max`.

```js
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

### Eine Zufallszahl ganzzahlig zwischen zwei Werten erhalten

Dieses Beispiel gibt einen zufälligen _Ganzzahl_ zwischen den angegebenen Werten zurück. Der Wert ist nicht kleiner als `min` (oder die nächste ganze Zahl größer als `min`, wenn `min` keine ganze Zahl ist) und ist kleiner als (aber nicht gleich) `max`.

```js
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // Das Maximum ist exklusiv und das Minimum ist inklusive
}
```

> [!NOTE]
> Es könnte verlockend sein, [`Math.round()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/round) dafür zu verwenden, aber das würde dazu führen, dass Ihre Zufallszahlen einer nicht gleichmäßigen Verteilung folgen, was möglicherweise nicht akzeptabel für Ihre Bedürfnisse ist.

### Eine Zufallszahl ganzzahlig zwischen zwei Werten, inklusive

Während die obige `getRandomInt()`-Funktion am Minimum inklusive ist, ist sie am Maximum exklusiv. Was, wenn Sie die Ergebnisse sowohl am Minimum als auch am Maximum inklusive benötigen? Die unten stehende Funktion `getRandomIntInclusive()` erreicht genau das.

```js
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // Das Maximum ist inklusive und das Minimum ist inklusive
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Crypto.getRandomValues()")}}
