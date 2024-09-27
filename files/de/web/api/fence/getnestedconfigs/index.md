---
title: "Fence: getNestedConfigs() Methode"
short-title: getNestedConfigs()
slug: Web/API/Fence/getNestedConfigs
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

Die **`getNestedConfigs()`**-Methode der [`Fence`](/de/docs/Web/API/Fence)-Schnittstelle gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s zurück, die in `<fencedframe>`s geladen sind, die im aktuellen `<fencedframe>` eingebettet sind.

## Syntax

```js-nolint
getNestedConfigs()
```

### Parameter

Keine.

### Rückgabewert

`getNestedConfigs()` hat zwei mögliche Rückgabewerte:

- Ein Array von 20 [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekten, wenn die Konfiguration des aktuellen `<fencedframe>` mithilfe einer API erstellt wurde, die geschachtelte Konfigurationen unterstützt (zum Beispiel [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)). Von diesen 20 Konfigurationen sind die ersten N Konfigurationen diejenigen, die über die API registriert wurden, und der Rest sind Pufferkonfigurationen, die zu `about:blank` navigieren, damit die Anzahl der Konfigurationen verborgen bleibt und keine Informationen preisgegeben werden können.
- `null`, wenn die Konfiguration des aktuellen `<fencedframe>` mithilfe einer API erstellt wurde, die keine geschachtelten Konfigurationen unterstützt (zum Beispiel [Shared Storage](/de/docs/Web/API/Shared_Storage_API)).

## Beispiele

```js
// Run inside a <fencedframe>

// Retrieve the configs of embedded fenced frames
const configs = window.fence.getNestedConfigs();

// Set a new fenced frame's config to equal one of the retrieved configs
const frame = document.createElement("fencedframe");
frame.config = configs[0];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
