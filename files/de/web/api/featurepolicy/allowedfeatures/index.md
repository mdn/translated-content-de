---
title: "FeaturePolicy: Methode allowedFeatures()"
short-title: allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowedFeatures()`**-Methode der [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Schnittstelle gibt eine Liste von Direktivenamen aller durch die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubten Funktionen zurück. Dies ermöglicht die Einsicht in einzelne Direktiven der Berechtigungsrichtlinie, auf der sie ausgeführt wird. Daher liefert die Methode `allowedFeatures()` eine Teilmenge der Direktiven zurück, die von [`features()`](/de/docs/Web/API/FeaturePolicy/features) zurückgegeben werden.

## Syntax

```js-nolint
allowedFeatures()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das die Namen der Berechtigungsrichtlinien-Direktiven darstellt, die von der Berechtigungsrichtlinie erlaubt sind, auf der diese Methode aufgerufen wird.

## Beispiel

Im folgenden Beispiel werden alle erlaubten Direktiven für das aktuelle Dokument protokolliert. Bitte beachten Sie, dass diese Funktionen durch die Permissions API eingeschränkt sein könnten, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

```js
// First, get the Permissions Policy object
const featurePolicy = document.featurePolicy;

// Then query feature for specific
const allowed = featurePolicy.allowedFeatures();

for (const directive of allowed) {
  console.log(directive);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
