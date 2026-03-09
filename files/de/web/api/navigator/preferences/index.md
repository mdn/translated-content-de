---
title: "Navigator: preferences-Eigenschaft"
short-title: preferences
slug: Web/API/Navigator/preferences
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{SeeCompatTable}}

Die schreibgeschützte **`preferences`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt für das aktuelle Dokument zurück. Dies ist der Einstiegspunkt für die Funktionalität der [User Preferences API](/de/docs/Web/API/User_Preferences_API).

## Wert

Ein [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt.

## Beispiele

### Farbschema-Präferenz abrufen

Dieses Beispiel zeigt, wie Sie das bevorzugte Farbschema des Benutzers abfragen können.

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
