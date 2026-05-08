---
title: "PreferenceObject: clearOverride() Methode"
short-title: clearOverride()
slug: Web/API/PreferenceObject/clearOverride
l10n:
  sourceCommit: cef391e51005fcc0716545cc6629e5f6d6223225
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearOverride`** Methode der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle setzt den Wert des [`override`](/de/docs/Web/API/PreferenceObject/override) zurück.

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

Das folgende Beispiel entfernt den Override des [`color scheme`](/de/docs/Web/API/PreferenceObject/colorScheme).

```js
navigator.preferences.colorScheme.clearOverride();
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
