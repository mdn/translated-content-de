---
title: "FeaturePolicy: allowsFeature() Methode"
short-title: allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowsFeature()`**-Methode des [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interfaces ermöglicht die Prüfung einzelner Direktiven der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy), auf der sie ausgeführt wird. Sie gibt einen {{JSxRef("Boolean")}} zurück, der `true` ist, wenn und nur wenn die angegebene Funktion im angegebenen Kontext (oder im Standardkontext, falls kein Kontext angegeben ist) zulässig ist.

## Syntax

```js-nolint
allowsFeature(feature)
allowsFeature(feature, origin)
```

### Parameter

- `feature`
  - : Der spezifische Funktionsname, dessen Verfügbarkeit geprüft werden soll.
- `origin` {{Optional_inline}}
  - : Der spezifische Ursprungsname, dessen Verfügbarkeit geprüft werden soll. Wenn nicht angegeben, wird der Standardursprung verwendet.

### Rückgabewert

Ein {{JSxRef("Boolean")}}, der `true` ist, wenn und nur wenn die Funktion erlaubt ist.

## Beispiel

Das folgende Beispiel prüft, ob das Dokument die Kamera-API gemäß der Permissions Policy verwenden darf. Beachten Sie bitte, dass die Kamera-API durch die Permissions-API eingeschränkt sein kann, wenn der Benutzer die entsprechende Berechtigung noch nicht erteilt hat.

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
