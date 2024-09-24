---
title: "FeaturePolicy: getAllowlistForFeature() Methode"
short-title: getAllowlistForFeature()
slug: Web/API/FeaturePolicy/getAllowlistForFeature
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`getAllowlistForFeature()`** Methode der {{DOMxRef("FeaturePolicy")}} Schnittstelle ermöglicht die Abfrage der Allowlist für ein spezifisches Feature innerhalb der aktuellen Berechtigungsrichtlinie.

## Syntax

```js-nolint
getAllowlistForFeature(feature)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, um dessen Allowlist abzurufen.

### Rückgabewert

Ein Array von Zeichenfolgen, das die serialisierte Liste der erlaubten Ursprünge für das Feature enthält. Wenn ein Platzhalter (`*`) verwendet wird, enthält das Array `*`.

### Ausnahmen

Die Funktion wird eine Warnung ausgeben, wenn der angegebene Name der Berechtigungsrichtliniendirektive nicht bekannt ist. Sie wird jedoch auch ein leeres Array zurückgeben, was anzeigt, dass kein Ursprung berechtigt ist, das Feature zu nutzen.

## Beispiel

Das folgende Beispiel gibt alle Ursprünge aus, die durch die Berechtigungsrichtlinie zur Nutzung der Kamera-API berechtigt sind. Bitte beachten Sie, dass die Kamera-API auch durch die [Permissions API](/de/docs/Web/API/Permissions_API) eingeschränkt werden könnte, wenn der Benutzer die entsprechende Berechtigung nicht gewährt hat.

```js
// Zuerst das FeaturePolicy-Objekt abrufen
const featurePolicy = document.featurePolicy;

// Anfrage für ein spezifisches Feature
const allowlist = featurePolicy.getAllowlistForFeature("camera");

for (const origin of allowlist) {
  console.log(origin);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
