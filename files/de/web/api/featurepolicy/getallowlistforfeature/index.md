---
title: "FeaturePolicy: getAllowlistForFeature()-Methode"
short-title: getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`getAllowlistForFeature()`**-Methode der [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Schnittstelle ermöglicht das Abfragen der Allowlist für ein bestimmtes Feature für die aktuelle Berechtigungspolicy.

## Syntax

```js-nolint
getAllowlistForFeature(feature)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, dessen Allowlist abgerufen werden soll.

### Rückgabewert

Ein Array von Zeichenfolgen, das die serialisierte Liste der erlaubten Ursprünge für das Feature enthält. Wenn ein Platzhalter (`*`) verwendet wird, enthält das Array `*`.

### Ausnahmen

Die Funktion gibt eine Warnung aus, wenn der angegebene Berechtigungspolicy-Direktivname nicht bekannt ist. Es wird jedoch auch ein leeres Array zurückgegeben, was darauf hinweist, dass keinem Ursprung die Nutzung des Features gestattet ist.

## Beispiel

Das folgende Beispiel gibt alle Ursprünge aus, denen die Nutzung der Kamera-API durch die Berechtigungspolicy gestattet ist. Beachten Sie bitte, dass die Kamera-API auch durch die [Permissions API](/de/docs/Web/API/Permissions_API) eingeschränkt werden kann, wenn der Benutzer die entsprechende Berechtigung nicht erteilt hat.

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
