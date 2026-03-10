---
title: "PreferenceManager: reducedData-Eigenschaft"
short-title: reducedData
slug: Web/API/PreferenceManager/reducedData
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`reducedData`** schreibgeschützte Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzereinstellung für die [verringerte Datenmenge](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-data) der Website zu überschreiben.

Gültige `reducedData`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzereinstellung für die [verringerte Datenmenge](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-data) der Website zu überschreiben.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie Sie die Präferenz des Benutzers für verringerte Datenmengen abfragen können.

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
