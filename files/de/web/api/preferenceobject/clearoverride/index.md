---
title: "PreferenceObject: clearOverride()-Methode"
short-title: clearOverride()
slug: Web/API/PreferenceObject/clearOverride
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`clearOverride`**-Methode der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle setzt den [`override`](/de/docs/Web/API/PreferenceObject/override)-Wert zurück.

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

Das folgende Beispiel entfernt die Überschreibung des [Farbschemas](/de/docs/Web/API/PreferenceObject/colorScheme).

```js
navigator.preferences.colorScheme.clearOverride();
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
