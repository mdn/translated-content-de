---
title: "PreferenceObject: clearOverride() Methode"
short-title: clearOverride()
slug: Web/API/PreferenceObject/clearOverride
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearOverride`** Methode der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) Schnittstelle setzt den Wert von {{domxref("PreferenceObject.override" "override")}} zurück.

## Syntax

```js-nolint
clearOverrides()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel löscht die Überschreibung des {{domxref("PreferenceObject.colorScheme" "color scheme")}}.

```js
navigator.preferences.colorScheme.clearOverride();
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
