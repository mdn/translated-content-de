---
title: "FeaturePolicy: allowsFeature() Methode"
short-title: allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowsFeature()`**-Methode der [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Schnittstelle ermöglicht die Untersuchung einzelner Direktiven der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), auf der sie ausgeführt wird. Sie gibt ein {{JSxRef("Boolean")}} zurück, das `true` ist, wenn und nur wenn die angegebene Funktion im spezifischen Kontext erlaubt ist (oder im Standardkontext, wenn kein Kontext angegeben wird).

## Syntax

```js-nolint
allowsFeature(feature)
allowsFeature(feature, origin)
```

### Parameter

- `feature`
  - : Der spezifische Funktionsname, um dessen Verfügbarkeit zu prüfen.
- `origin` {{Optional_inline}}
  - : Der spezifische Ursprungsname, um dessen Verfügbarkeit zu prüfen. Wenn nicht angegeben, wird der Standardursprung verwendet.

### Rückgabewert

Ein {{JSxRef("Boolean")}}, das `true` ist, wenn und nur wenn die Funktion erlaubt ist.

## Beispiel

Das folgende Beispiel fragt ab, ob das Dokument die Nutzung der Kamera-API durch die Berechtigungsrichtlinie erlaubt ist. Bitte beachten Sie, dass die Kamera-API möglicherweise durch die Berechtigungs-API eingeschränkt ist, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

```js
// First, get the Feature Policy object
const featurePolicy = document.featurePolicy;

// Then query feature for specific
const allowed = featurePolicy.allowsFeature("camera");

if (allowed) {
  console.log("FP allows camera.");
} else {
  console.log("FP does not allows camera.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
