---
title: "FeaturePolicy: features() Methode"
short-title: features()
slug: Web/API/FeaturePolicy/features
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`features()`** Methode des [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces gibt eine Liste von Namen aller vom User Agent unterstützten Funktionen zurück. Eine Funktion, deren Name in der Liste erscheint, könnte durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) des aktuellen Ausführungskontextes möglicherweise nicht erlaubt sein und/oder aufgrund der Berechtigungen des Benutzers nicht zugänglich sein.

## Syntax

```js-nolint
features()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von Zeichenfolgen, die die Namen aller von der Berechtigungsrichtlinie unterstützten Direktiven des User Agents darstellen.

## Beispiel

Das folgende Beispiel protokolliert alle unterstützten Direktiven in der Konsole.

```js
// Get the FeaturePolicy object
const featurePolicy = document.featurePolicy;

// Retrieve the list of all supported Permissions Policy directives
const supportedDirectives = featurePolicy.features();

// Print out each directive into the console
for (const directive of supportedDirectives) {
  console.log(directive);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
