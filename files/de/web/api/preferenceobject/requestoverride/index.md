---
title: "PreferenceObject: requestOverride() Methode"
short-title: requestOverride()
slug: Web/API/PreferenceObject/requestOverride
l10n:
  sourceCommit: e5a63f8d002dcac9654be79bd03bfda262dd4d89
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestOverride`** Methode des [`PreferenceObject`](/de/docs/Web/API/PreferenceObject) Interfaces legt einen [`override`](/de/docs/Web/API/PreferenceObject/override) Wert für eine bestimmte Präferenz fest.

## Syntax

```js-nolint
requestOverrides(value)
```

### Parameter

- `value`
  - : Der Wert, mit dem ein Override angefordert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, der auf {{jsxref("undefined")}} bei Erfolg auflöst oder bei einem Fehler verworfen wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Wert nicht zulässig ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel fordert ein Override des [`colorScheme`](/de/docs/Web/API/PreferenceManager/colorScheme) an.

```js
await navigator.preferences.colorScheme.requestOverride("dark");
console.log(navigator.preferences.colorScheme.override);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
