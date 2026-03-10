---
title: "PreferenceManager: reducedTransparency-Eigenschaft"
short-title: reducedTransparency
slug: Web/API/PreferenceManager/reducedTransparency
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`reducedTransparency`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt das [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzervorliebe für die [reduzierte Transparenz](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-transparency) der Website zu überschreiben.

Gültige `reducedTransparency`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzervorliebe für die [reduzierte Transparenz](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-transparency) der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie die reduzierte Transparenzvorliebe des Benutzers abfragen können.

```js
if (navigator.preferences.reducedTransparency.value === "reduce") {
  // The user prefers reduced transparency.
} else {
  // The user has stated no preference regarding transparency.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
