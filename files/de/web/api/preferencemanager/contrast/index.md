---
title: "PreferenceManager: contrast-Eigenschaft"
short-title: contrast
slug: Web/API/PreferenceManager/contrast
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`contrast`** Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager) Schnittstelle gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzerpräferenz für den [Kontrast](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-contrast) der Seite zu überschreiben.

Gültige `contrast` [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) Einstellungen sind `more`, `less` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für den [Kontrast](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-contrast) der Seite zu überschreiben.

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
