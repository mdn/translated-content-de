---
title: "PreferenceManager: contrast-Eigenschaft"
short-title: contrast
slug: Web/API/PreferenceManager/contrast
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`contrast`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle liefert ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Präferenz des Benutzers für das {{cssxref("@media/prefers-color-scheme", "Farbschema")}} der Website zu überschreiben.

Gültige `contrast`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `more`, `less` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Präferenz des Benutzers für das {{cssxref("@media/prefers-color-scheme", "Farbschema")}} der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie die Kontrastpräferenz des Benutzers abfragen können.

```js
if (navigator.preferences.contrast.value === "more") {
  // The user prefers a high color contrast.
} else if (navigator.preferences.contrast.value === "less") {
  // The user prefers a low color contrast.
} else {
  // The user has stated no preference regarding color contrast.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
