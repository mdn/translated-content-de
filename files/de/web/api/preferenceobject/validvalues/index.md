---
title: "PreferenceObject: validValues-Eigenschaft"
short-title: validValues
slug: Web/API/PreferenceObject/validValues
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`validValues`** der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle gibt ein schreibgeschütztes Array von Werten zurück, die von der Überschreibung akzeptiert werden.

## validValues

Ein Array, das die gültigen Werte enthält, mit denen der Wert des [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) überschrieben werden kann.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie alle möglichen Kontrastwerte protokolliert werden.

```js
console.log(navigator.preferences.contrast.validValues);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
