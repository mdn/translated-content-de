---
title: "Fence: getNestedConfigs() Methode"
short-title: getNestedConfigs()
slug: Web/API/Fence/getNestedConfigs
l10n:
  sourceCommit: e316526e520d8163e9151dca8973eb777b5285e0
---

{{APIRef("Fenced Frame API")}}

Die **`getNestedConfigs()`** Methode des
[`Fence`](/de/docs/Web/API/Fence) Interfaces gibt die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s zurück, die in `<fencedframe>`s geladen sind, welche innerhalb des aktuellen `<fencedframe>` eingebettet sind.

## Syntax

```js-nolint
getNestedConfigs()
```

### Parameter

Keine.

### Rückgabewert

`getNestedConfigs()` hat zwei mögliche Rückgabewerte:

- Ein Array von 20 [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) Objekten, wenn die Konfiguration des aktuellen `<fencedframe>` mit einer API erstellt wurde, die verschachtelte Konfigurationen unterstützt (beispielsweise [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience)). Von diesen 20 Konfigurationen sind die ersten N Konfigurationen jene, die über die API registriert wurden, und der Rest sind Platzhalter-Konfigurationen, die zu `about:blank` navigieren, sodass die Anzahl der Konfigurationen verborgen bleibt und keine Informationen preisgibt.
- `null` wenn die Konfiguration des aktuellen `<fencedframe>` mit einer API erstellt wurde, die keine verschachtelten Konfigurationen unterstützt (beispielsweise [Shared Storage](/de/docs/Web/API/Shared_Storage_API)).

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

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
