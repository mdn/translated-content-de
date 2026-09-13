---
title: "PreferenceObject: Methode clearOverride()"
short-title: clearOverride()
slug: Web/API/PreferenceObject/clearOverride
l10n:
  sourceCommit: 46a755ea71206e4512e3639596e6f68f4e71f041
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearOverride`**-Methode des [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Interfaces setzt den [`override`](/de/docs/Web/API/PreferenceObject/override)-Wert zurück.

## Syntax

```js-nolint
clearOverrides()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel entfernt das Override des [Color Scheme](/de/docs/Web/API/PreferenceManager/colorScheme).

```js
navigator.preferences.colorScheme.clearOverride();
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
