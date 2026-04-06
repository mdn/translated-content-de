---
title: "PreferenceManager: contrast-Eigenschaft"
short-title: contrast
slug: Web/API/PreferenceManager/contrast
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`contrast`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Kontrasteinstellung des Nutzers für die Website zu überschreiben.

Gültige `contrast`-Einstellungen von [`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value) sind `more`, `less` und `no-preference`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Kontrasteinstellung des Nutzers für die Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man die Kontrasteinstellung des Nutzers abfragt.

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
