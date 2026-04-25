---
title: "PreferenceManager: reducedMotion-Eigenschaft"
short-title: reducedMotion
slug: Web/API/PreferenceManager/reducedMotion
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`reducedMotion`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt das [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzerpräferenz für die [verringerte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) der Website zu überschreiben.

Gültige `reducedMotion`-Einstellungen von [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das zur Überschreibung der Benutzerpräferenz für die [verringerte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) der Website verwendet wird.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die Präferenz des Benutzers für verringerte Bewegung abgefragt wird.

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
