---
title: "PreferenceManager: colorScheme-Eigenschaft"
short-title: colorScheme
slug: Web/API/PreferenceManager/colorScheme
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`colorScheme`**-Eigenschaft der [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Schnittstelle, die nur lesbar ist, gibt ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) zurück, das verwendet wird, um die Einstellung des Nutzers für das [Farbschema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) der Seite zu überschreiben.

Gültige `colorScheme`-[`PreferenceObject.value`](/de/docs/Web/API/PreferenceObject/value)-Einstellungen sind `dark` und `light`.

## Wert

Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Einstellung des Nutzers für das [Farbschema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) der Seite zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert, wie das bevorzugte Farbschema des Nutzers abgefragt wird.

```js
if (navigator.preferences.colorScheme.value === "dark") {
  // The user prefers a dark color scheme.
} else {
  // The user prefers a light color scheme.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
