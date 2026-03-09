---
title: "PreferenceManager: reducedMotion-Eigenschaft"
short-title: reducedMotion
slug: Web/API/PreferenceManager/reducedMotion
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`reducedMotion`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt das [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Präferenz des Benutzers für die {{cssxref("@media/prefers-reduced-motion", "reduzierte Bewegung")}} der Seite zu überschreiben.

Gültige Einstellungen für `reducedMotion` [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Präferenz des Benutzers für die {{cssxref("@media/prefers-reduced-motion", "reduzierte Bewegung")}} der Seite zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man die reduzierte Bewegungspräferenz des Benutzers abfragt.

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
