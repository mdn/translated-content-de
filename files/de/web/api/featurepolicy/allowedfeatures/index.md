---
title: "FeaturePolicy: allowedFeatures() Methode"
short-title: allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowedFeatures()`**-Methode des [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces gibt eine Liste von Direktivenamen aller durch die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) erlaubten Funktionen zurück. Dies ermöglicht eine Untersuchung der einzelnen Direktiven der Permissions Policy, auf der sie ausgeführt wird. Daher gibt die `allowedFeatures()`-Methode ein Subset der von [`features()`](/de/docs/Web/API/FeaturePolicy/features) zurückgegebenen Direktiven zurück.

## Syntax

```js-nolint
allowedFeatures()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das die Namen der von der Permissions Policy erlaubten Direktiven repräsentiert, auf die diese Methode angewendet wird.

## Beispiel

Das folgende Beispiel protokolliert alle erlaubten Direktiven für das aktuelle Dokument. Bitte beachten Sie, dass diese Funktionen möglicherweise durch die Permissions API eingeschränkt sind, wenn der Benutzer die entsprechende Erlaubnis noch nicht erteilt hat.

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
