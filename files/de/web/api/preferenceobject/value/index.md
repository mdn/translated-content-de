---
title: "PreferenceObject: Eigenschaft value"
short-title: value
slug: Web/API/PreferenceObject/value
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`value`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt den Override-Wert einer Präferenz zurück, falls einer festgelegt ist, oder den von der UA definierten Wert, falls kein Override-Wert festgelegt ist.

## Wert

Der Override der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle, falls einer festgelegt ist, oder der von der UA definierte Wert ansonsten.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie die Präferenz des Benutzers für reduzierte Bewegungen abfragen können.

```js
if (navigator.preferences.reducedMotion.value === "reduce") {
  // The user prefers reduced motion.
} else {
  // The user has stated no preference regarding motion.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
