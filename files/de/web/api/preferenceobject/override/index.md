---
title: "PreferenceObject: override-Eigenschaft"
short-title: override
slug: Web/API/PreferenceObject/override
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`override`**-Eigenschaft des [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Interfaces gibt das Override einer Präferenz zurück, falls eines festgelegt ist, andernfalls `null`.

## Wert

Das Override des [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Interfaces, falls festgelegt, oder `null`, wenn kein Override festgelegt ist.

## Beispiele

## Grundlegende Verwendung

Dieses Beispiel zeigt, wie man zwischen der vom User-Agent festgelegten Farbschema-Präferenz und einem programmatischen Override unterscheidet.

```js
if (navigator.preferences.colorScheme.override == null) {
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
