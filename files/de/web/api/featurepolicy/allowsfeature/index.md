---
title: "FeaturePolicy: allowsFeature()-Methode"
short-title: allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowsFeature()`**-Methode des [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces ermöglicht die Überprüfung einzelner Direktiven der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), auf der sie ausgeführt wird. Sie gibt ein {{JSxRef("Boolean")}} zurück, das dann und nur dann `true` ist, wenn das angegebene Feature im angegebenen Kontext erlaubt ist (oder im Standardkontext, wenn kein Kontext angegeben ist).

## Syntax

```js-nolint
allowsFeature(feature)
allowsFeature(feature, origin)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, dessen Verfügbarkeit überprüft werden soll.
- `origin` {{Optional_inline}}
  - : Der spezifische Ursprungsname, dessen Verfügbarkeit überprüft werden soll. Wenn nicht angegeben, wird der Standardursprung verwendet.

### Rückgabewert

Ein {{JSxRef("Boolean")}}, das dann und nur dann `true` ist, wenn das Feature erlaubt ist.

## Beispiel

Das folgende Beispiel fragt ab, ob das Dokument die Kamera-API gemäß der Permissions Policy verwenden darf. Bitte beachten Sie, dass die Kamera-API durch die Permissions-API eingeschränkt sein könnte, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

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
