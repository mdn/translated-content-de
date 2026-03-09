---
title: "PreferenceManager: reducedData-Eigenschaft"
short-title: reducedData
slug: Web/API/PreferenceManager/reducedData
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`reducedData`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzereinstellung für das {{cssxref("@media/prefers-reduced-data", "reduzierte Datenvolumen")}} der Website zu überschreiben.

Gültige `reducedData`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzereinstellung für das {{cssxref("@media/prefers-reduced-data", "reduzierte Datenvolumen")}} der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die Benutzereinstellung für reduziertes Datenvolumen abgefragt wird.

```js
if (navigator.preferences.reducedData.value === "reduce") {
  // The user prefers you use less data.
} else {
  // The user has stated no preference regarding data use.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
