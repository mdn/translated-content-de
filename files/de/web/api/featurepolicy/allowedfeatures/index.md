---
title: "FeaturePolicy: allowedFeatures() Methode"
short-title: allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowedFeatures()`** Methode der [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Schnittstelle gibt eine Liste von Richtlinienschlüsseln aller Funktionen zurück, die durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) erlaubt sind. Dies ermöglicht eine Prüfung der einzelnen Richtlinien der Permissions Policy, auf der sie ausgeführt wird. Somit gibt die `allowedFeatures()` Methode eine Teilmenge der Richtlinien zurück, die von [`features()`](/de/docs/Web/API/FeaturePolicy/features) geliefert werden.

## Syntax

```js-nolint
allowedFeatures()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, die die Namen der Richtlinien der Permissions Policy darstellen, die von der Permissions Policy erlaubt sind, auf der diese Methode aufgerufen wird.

## Beispiel

Das folgende Beispiel protokolliert alle erlaubten Richtlinien für das aktuelle Dokument. Bitte beachten Sie, dass diese Funktionen durch die Permissions API eingeschränkt sein können, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

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
