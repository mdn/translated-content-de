---
title: "FeaturePolicy: getAllowlistForFeature() Methode"
short-title: getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`getAllowlistForFeature()`**
Methode der [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Schnittstelle ermöglicht das Abfragen der Allowlist für ein spezifisches Feature in der aktuellen Berechtigungsrichtlinie.

## Syntax

```js-nolint
getAllowlistForFeature(feature)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, für den die Allowlist abgerufen werden soll.

### Rückgabewert

Ein Array von Strings, das die serialisierte Liste der erlaubten Ursprünge für das Feature enthält. Wenn ein Platzhalter (`*`) verwendet wird, enthält das Array `*`.

### Ausnahmen

Die Funktion gibt eine Warnung aus, wenn der angegebene Name der Berechtigungsrichtlinien-Direktive nicht bekannt ist. Sie gibt jedoch auch ein leeres Array zurück, was anzeigt, dass kein Ursprung berechtigt ist, das Feature zu verwenden.

## Beispiel

Im folgenden Beispiel werden alle Ursprünge ausgegeben, die durch die Berechtigungsrichtlinie berechtigt sind, die Kamera-API zu verwenden. Bitte beachten Sie, dass die Kamera-API möglicherweise auch durch die [Permissions API](/de/docs/Web/API/Permissions_API) eingeschränkt wird, falls der Benutzer die entsprechende Berechtigung nicht gewährt hat.

```js
// First, get the FeaturePolicy object
const featurePolicy = document.featurePolicy;

// Query for specific feature
const allowlist = featurePolicy.getAllowlistForFeature("camera");

for (const origin of allowlist) {
  console.log(origin);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
