---
title: "Navigator: preferences-Eigenschaft"
short-title: preferences
slug: Web/API/Navigator/preferences
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}

Die **`preferences`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt für das aktuelle Dokument zurückgibt. Dies ist der Ausgangspunkt für die Funktionalität der [User Preferences API](/de/docs/Web/API/User_Preferences_API).

## Wert

Ein [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt.

## Beispiele

### Farbpräferenz abrufen

Dieses Beispiel zeigt, wie Sie die bevorzugte Farbgestaltung des Benutzers abfragen können.

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
