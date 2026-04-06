---
title: "PreferenceManager: reducedTransparency-Eigenschaft"
short-title: reducedTransparency
slug: Web/API/PreferenceManager/reducedTransparency
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`reducedTransparency`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt das [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Benutzerpräferenz für die [reduzierte Transparenz](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) der Website zu überschreiben.

Gültige `reducedTransparency` [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value)-Einstellungen sind `reduce` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die [reduzierte Transparenz](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die Präferenz des Benutzers für reduzierte Transparenz abgefragt wird.

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
