---
title: "PreferenceManager: reducedTransparency-Eigenschaft"
short-title: reducedTransparency
slug: Web/API/PreferenceManager/reducedTransparency
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`reducedTransparency`**-Eigenschaft des [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Interfaces ist eine schreibgeschützte Eigenschaft, die das [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurückgibt, das verwendet wird, um die Benutzereinstellung für die {{cssxref("@media/prefers-reduced-transparency", "reduzierte Transparenz")}} der Website zu überschreiben.

Gültige Einstellungen für `reducedTransparency` im [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das dazu verwendet wird, die Benutzereinstellung für die {{cssxref("@media/prefers-reduced-transparency", "reduzierte Transparenz")}} der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die reduzierte Transparenz-Präferenz des Benutzers abgefragt wird.

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
