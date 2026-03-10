---
title: "PreferenceManager: colorScheme-Eigenschaft"
short-title: colorScheme
slug: Web/API/PreferenceManager/colorScheme
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`colorScheme`**-Eigenschaft des [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Interfaces gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzerpräferenz für das [Farbschema](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-color-scheme) der Website zu überschreiben.

Gültige `colorScheme`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `dark` und `light`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für das [Farbschema](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-color-scheme) der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie das bevorzugte Farbschema des Benutzers abfragen können.

```js
if (navigator.preferences.colorScheme.value === "dark") {
  // The user prefers a dark color scheme.
} else {
  // The user prefers a light color scheme.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
