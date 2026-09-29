---
title: "PreferenceObject: override-Eigenschaft"
short-title: override
slug: Web/API/PreferenceObject/override
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`override`** der Schnittstelle [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) gibt die Überschreibung einer Präferenz zurück, falls eine festgelegt wurde, andernfalls `null`.

## Wert

Die Überschreibung der Schnittstelle [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), falls eine festgelegt wurde, oder `null`, falls keine Überschreibung festgelegt wurde.

## Beispiele

## Grundlegende Verwendung

Dieses Beispiel zeigt, wie sich unterscheiden lässt, ob die Präferenz für das Farbschema vom User-Agent festgelegt oder programmatisch überschrieben wurde.

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
