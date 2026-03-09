---
title: "PreferenceObject: requestOverride() Methode"
short-title: requestOverride()
slug: Web/API/PreferenceObject/requestOverride
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestOverride`**-Methode der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle setzt einen {{domxref("PreferenceObject.override" "override")}}-Wert für eine bestimmte Präferenz.

## Syntax

```js-nolint
requestOverrides(value)
```

### Parameter

- `value`
  - : Der Wert, mit dem eine Überschreibung angefordert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, der bei Erfolg in {{jsxref("undefined")}} aufgelöst wird oder bei Misserfolg abgelehnt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Wert nicht zulässig ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel fordert eine Überschreibung von {{domxref("PreferenceObject.colorScheme" "colorScheme")}} an.

```js
await navigator.preferences.colorScheme.requestOverride("dark");
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
