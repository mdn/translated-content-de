---
title: "FeaturePolicy: allowedFeatures() Methode"
short-title: allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowedFeatures()`**-Methode des {{DOMxRef("FeaturePolicy")}}-Interfaces gibt eine Liste der Direktivenamen aller Funktionen zurück, die von der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) erlaubt sind. Dies ermöglicht die Untersuchung einzelner Direktiven der Berechtigungsrichtlinie, auf der sie ausgeführt wird. Daher gibt die `allowedFeatures()`-Methode ein Unterset der von {{DOMxRef("FeaturePolicy.features", "features()")}} zurückgegebenen Direktiven zurück.

## Syntax

```js-nolint
allowedFeatures()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Strings, das die Namen der Berechtigungsrichtlinien-Direktiven darstellt, die von der Berechtigungsrichtlinie erlaubt sind, auf der diese Methode aufgerufen wird.

## Beispiel

Das folgende Beispiel protokolliert alle erlaubten Direktiven für das aktuelle Dokument. Bitte beachten Sie, dass diese Funktionen durch die Permissions API eingeschränkt sein könnten, falls der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

```js
// Zuerst das Permissions Policy-Objekt erhalten
const featurePolicy = document.featurePolicy;

// Dann die Funktion für spezifische fragen
const allowed = featurePolicy.allowedFeatures();

for (const directive of allowed) {
  console.log(directive);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
