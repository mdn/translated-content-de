---
title: "FeaturePolicy: allowedFeatures()-Methode"
short-title: allowedFeatures()
slug: Web/API/FeaturePolicy/allowedFeatures
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`allowedFeatures()`**-Methode der [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Schnittstelle gibt eine Liste von Direktivenamen aller vom [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) erlaubten Features zurück. Dies ermöglicht eine Prüfung der einzelnen Direktiven der Permissions Policy, auf der sie ausgeführt wird. Daher gibt die `allowedFeatures()`-Methode eine Untermenge der von [`features()`](/de/docs/Web/API/FeaturePolicy/features) zurückgegebenen Direktiven zurück.

## Syntax

```js-nolint
allowedFeatures()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenketten, das die Namen der Permissions Policy-Direktiven darstellt, die von der Permissions Policy erlaubt sind, auf der diese Methode aufgerufen wird.

## Beispiel

Das folgende Beispiel protokolliert alle erlaubten Direktiven für das aktuelle Dokument. Bitte beachten Sie, dass diese Features durch die Permissions API eingeschränkt sein könnten, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

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
