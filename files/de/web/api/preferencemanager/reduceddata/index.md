---
title: "PreferenceManager: reducedData-Eigenschaft"
short-title: reducedData
slug: Web/API/PreferenceManager/reducedData
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`reducedData`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzereinstellung für die [reduzierten Daten](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-data) der Website zu überschreiben.

Gültige `reducedData`-Einstellungen für [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzereinstellung für die [reduzierten Daten](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-data) der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie die Benutzereinstellung für reduzierte Daten abfragen können.

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
