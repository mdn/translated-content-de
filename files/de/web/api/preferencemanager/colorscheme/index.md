---
title: "PreferenceManager: Farbeinstellung-Eigenschaft"
short-title: colorScheme
slug: Web/API/PreferenceManager/colorScheme
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`colorScheme`** der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzerpräferenz für das {{cssxref("@media/prefers-color-scheme", "Farbschema")}} der Seite zu überschreiben.

Gültige Einstellungen für `colorScheme` [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `dark` und `light`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für das {{cssxref("@media/prefers-color-scheme", "Farbschema")}} der Seite zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie das bevorzugte Farbschema des Benutzers abgefragt wird.

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
