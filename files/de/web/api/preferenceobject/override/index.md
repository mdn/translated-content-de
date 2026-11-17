---
title: "PreferenceObject: Eigenschaft override"
short-title: override
slug: Web/API/PreferenceObject/override
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`override`** der Schnittstelle [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) gibt die Überschreibung einer Präferenz zurück, falls eine festgelegt wurde, andernfalls `null`.

## Wert

Die Überschreibung der Schnittstelle [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), falls eine festgelegt wurde, andernfalls `null`.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich die vom User Agent festgelegte Farbschema-Präferenz von einer programmatischen Überschreibung unterscheiden lässt.

```js
if (navigator.preferences.colorScheme.override === null) {
  console.log(
    "The user agent set the following color scheme:",
    navigator.preferences.colorScheme.value,
  );
} else {
  console.log(
    "The following color scheme was set programmatically:",
    navigator.preferences.colorScheme.override,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
