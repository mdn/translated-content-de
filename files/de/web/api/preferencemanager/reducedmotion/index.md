---
title: "PreferenceManager: reducedMotion-Eigenschaft"
short-title: reducedMotion
slug: Web/API/PreferenceManager/reducedMotion
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`reducedMotion`**-Eigenschaft des [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Interfaces gibt das [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Präferenz des Nutzers für die [reduzierte Bewegung](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-motion) der Website zu überschreiben.

Gültige `reducedMotion`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Präferenz des Nutzers für die [reduzierte Bewegung](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-motion) der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die Präferenz des Nutzers für reduzierte Bewegung abgefragt wird.

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
