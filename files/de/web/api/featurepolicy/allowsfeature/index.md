---
title: "FeaturePolicy: allowsFeature()-Methode"
short-title: allowsFeature()
slug: Web/API/FeaturePolicy/allowsFeature
l10n:
  sourceCommit: 6f8b8ed77b8926640d5d5c4d292489eeb2525460
---

{{APIRef("Feature Policy API")}}{{SeeCompatTable}}

Die **`allowsFeature()`**-Methode des {{DOMxRef("FeaturePolicy")}}-Interfaces ermöglicht die Überprüfung einzelner Direktiven der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy), auf der sie ausgeführt wird. Sie gibt ein {{JSxRef("Boolean")}} zurück, das `true` ist, wenn und nur wenn das angegebene Feature im angegebenen Kontext (oder im Standardkontext, wenn kein Kontext angegeben ist) erlaubt ist.

## Syntax

```js-nolint
allowsFeature(feature)
allowsFeature(feature, origin)
```

### Parameter

- `feature`
  - : Der spezifische Feature-Name, um dessen Verfügbarkeit zu überprüfen.
- `origin` {{Optional_inline}}
  - : Der spezifische Origin-Name, um dessen Verfügbarkeit zu überprüfen. Wenn nicht angegeben, wird der Standardorigin verwendet.

### Rückgabewert

Ein {{JSxRef("Boolean")}}, das `true` ist, wenn und nur wenn das Feature erlaubt ist.

## Beispiel

Im folgenden Beispiel wird abgefragt, ob das Dokument die Kamera-API verwenden darf, gemäß der Permissions Policy. Bitte beachten Sie, dass die Kamera-API möglicherweise durch die Permissions API eingeschränkt ist, wenn dem Benutzer noch keine entsprechende Berechtigung erteilt wurde.

```js
// Zuerst das Feature Policy-Objekt erhalten
const featurePolicy = document.featurePolicy;

// Dann das Feature für die Spezifität abfragen
const allowed = featurePolicy.allowsFeature("camera");

if (allowed) {
  console.log("FP erlaubt Kamera.");
} else {
  console.log("FP erlaubt Kamera nicht.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
