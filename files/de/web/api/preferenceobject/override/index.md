---
title: "PreferenceObject: override-Eigenschaft"
short-title: override
slug: Web/API/PreferenceObject/override
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`override`** schreibgeschützte Eigenschaft der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle gibt das Override einer Präferenz zurück, falls eines gesetzt ist, andernfalls `null`.

## Wert

Das Override der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle, falls gesetzt, oder `null`, wenn kein Override gesetzt ist.

## Beispiele

## Grundlegende Nutzung

Dieses Beispiel zeigt, wie man zwischen der vom Benutzeragenten festgelegten Farbpräsenz und einem programmatischen Override unterscheidet.

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
