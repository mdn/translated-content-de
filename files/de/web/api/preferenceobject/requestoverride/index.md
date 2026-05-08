---
title: "PreferenceObject: requestOverride() Methode"
short-title: requestOverride()
slug: Web/API/PreferenceObject/requestOverride
l10n:
  sourceCommit: cef391e51005fcc0716545cc6629e5f6d6223225
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestOverride`**-Methode der [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Schnittstelle setzt einen [`override`](/de/docs/Web/API/PreferenceObject/override)-Wert für eine bestimmte Präferenz.

## Syntax

```js-nolint
requestOverrides(value)
```

### Parameter

- `value`
  - : Der Wert, mit dem eine Überschreibung angefordert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei Erfolg auf {{jsxref("undefined")}} aufgelöst wird oder bei Fehler abgelehnt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Wert nicht zulässig ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel fordert eine Überschreibung des [`colorScheme`](/de/docs/Web/API/PreferenceObject/colorScheme) an.

```js
await navigator.preferences.colorScheme.requestOverride("dark");
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
