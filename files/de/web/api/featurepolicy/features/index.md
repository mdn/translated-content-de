---
title: "FeaturePolicy: features() Methode"
short-title: features()
slug: Web/API/FeaturePolicy/features
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`features()`** Methode des
[`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interfaces gibt eine Liste von Namen aller vom User Agent unterstützten Features zurück. Ein Feature, dessen Name in der Liste erscheint, könnte durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) des aktuellen Ausführungskontexts nicht erlaubt sein und/oder aufgrund der Berechtigungen des Benutzers nicht zugänglich sein.

## Syntax

```js-nolint
features()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von Zeichenketten, die die Namen aller vom User Agent unterstützten Richtlinien der Permissions Policy repräsentieren.

## Beispiel

Das folgende Beispiel protokolliert alle unterstützten Richtlinien im Konsole.

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
