---
title: "Navigator: preferences-Eigenschaft"
short-title: preferences
slug: Web/API/Navigator/preferences
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}

Die schreibgeschützte **`preferences`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt für das aktuelle Dokument zurück. Dies ist der Einstiegspunkt für die [User Preferences API](/de/docs/Web/API/User_Preferences_API)-Funktionalität.

## Wert

Ein [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt.

## Beispiele

### Abfrage der Farbdesign-Präferenz

Dieses Beispiel zeigt, wie die bevorzugte Farbgestaltung des Benutzers abgefragt werden kann.

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

## Siehe auch

- [User Preferences API](/de/docs/Web/API/User_Preferences_API)
