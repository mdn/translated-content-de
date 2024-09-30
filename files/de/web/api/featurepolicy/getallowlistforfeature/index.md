---
title: "FeaturePolicy: getAllowlistForFeature()-Methode"
short-title: getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`getAllowlistForFeature()`**-Methode des [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces ermöglicht das Abfragen der Zulassungsliste für ein bestimmtes Feature in der aktuellen Permissions Policy.

## Syntax

```js-nolint
getAllowlistForFeature(feature)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, um seine Zulassungsliste zu erhalten.

### Rückgabewert

Ein Array von Zeichenfolgen, das die serialisierte Liste der erlaubten Ursprünge für das Feature enthält. Wenn ein Platzhalter (`*`) verwendet wird, enthält das Array `*`.

### Ausnahmen

Die Funktion wird eine Warnung ausgeben, wenn der angegebene Permissions Policy-Direktivenname unbekannt ist. Sie gibt jedoch auch ein leeres Array zurück, was darauf hinweist, dass kein Ursprung berechtigt ist, das Feature zu verwenden.

## Beispiel

Das folgende Beispiel gibt alle Ursprünge aus, die berechtigt sind, die Camera API gemäß der Permissions Policy zu verwenden. Bitte beachten Sie, dass die Camera API ebenfalls durch die [Permissions API](/de/docs/Web/API/Permissions_API) eingeschränkt sein kann, wenn der Benutzer die entsprechende Berechtigung nicht erteilt hat.

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
