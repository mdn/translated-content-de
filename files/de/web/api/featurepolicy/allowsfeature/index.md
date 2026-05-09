---
title: "FeaturePolicy: allowsFeature()-Methode"
short-title: allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`allowsFeature()`**-Methode des [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces ermöglicht die Überprüfung einzelner Direktiven der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), auf der sie ausgeführt wird. Sie gibt ein {{JSxRef("Boolean")}} zurück, das `true` ist, wenn und nur wenn das angegebene Feature im angegebenen Kontext (oder im Standardkontext, falls kein Kontext angegeben ist) erlaubt ist.

## Syntax

```js-nolint
allowsFeature(feature)
allowsFeature(feature, origin)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, um seine Verfügbarkeit zu überprüfen.
- `origin` {{Optional_inline}}
  - : Der spezifische Ursprungsname, um seine Verfügbarkeit zu überprüfen. Wenn nicht angegeben, wird der Standardursprung verwendet.

### Rückgabewert

Ein {{JSxRef("Boolean")}}, das `true` ist, wenn und nur wenn das Feature erlaubt ist.

## Beispiel

Das folgende Beispiel überprüft, ob dem Dokument die Nutzung der Kamera-API durch die Permissions Policy erlaubt ist. Bitte beachten Sie, dass die Kamera-API durch die Permissions API eingeschränkt sein könnte, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

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
