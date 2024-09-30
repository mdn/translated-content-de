---
title: "FeaturePolicy: `features()` Methode"
short-title: features()
slug: Web/API/FeaturePolicy/features
l10n:
  sourceCommit: 6f8b8ed77b8926640d5d5c4d292489eeb2525460
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`features()`**-Methode des
[`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces gibt eine Liste von Namen aller vom User Agent unterstützten Funktionen zurück. Funktionen, deren Name auf der Liste erscheint, könnten möglicherweise nicht durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) des aktuellen Ausführungskontexts erlaubt sein und/oder könnten aufgrund der Benutzerberechtigungen nicht zugänglich sein.

## Syntax

```js-nolint
features()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von Zeichenfolgen, die die Namen aller vom User Agent unterstützten `Permissions Policy`-Direktiven darstellen.

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
