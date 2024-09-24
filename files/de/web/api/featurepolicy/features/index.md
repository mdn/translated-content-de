---
title: "FeaturePolicy: features()-Methode"
short-title: features()
slug: Web/API/FeaturePolicy/features
l10n:
  sourceCommit: 6f8b8ed77b8926640d5d5c4d292489eeb2525460
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`features()`**-Methode der
{{DOMxRef("FeaturePolicy")}}-Schnittstelle liefert eine Liste von Namen aller vom User Agent unterstützten Features zurück. Features, deren Name in der Liste erscheint, sind möglicherweise nicht durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) des aktuellen Ausführungskontextes erlaubt und/oder könnten aufgrund der Berechtigungen des Benutzers nicht zugänglich sein.

## Syntax

```js-nolint
features()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von Zeichenfolgen, die die Namen aller vom User Agent unterstützten Berechtigungsrichtlinien-Direktiven darstellen.

## Beispiel

Das folgende Beispiel protokolliert alle unterstützten Direktiven in der Konsole.

```js
// Holen Sie sich das FeaturePolicy-Objekt
const featurePolicy = document.featurePolicy;

// Rufen Sie die Liste aller unterstützten Berechtigungsrichtlinien-Direktiven ab
const supportedDirectives = featurePolicy.features();

// Geben Sie jede Direktive in der Konsole aus
for (const directive of supportedDirectives) {
  console.log(directive);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
