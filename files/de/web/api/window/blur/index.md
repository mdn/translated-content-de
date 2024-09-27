---
title: "Window: blur()-Methode"
short-title: blur()
slug: Web/API/Window/blur
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{deprecated_header}}

Die **`Window.blur()`**-Methode tut nichts.

> [!NOTE]
> Historisch gesehen war diese Methode das programmgesteuerte Äquivalent dazu, dass der Benutzer den Fokus vom aktuellen Fenster weg verschiebt. Dieses Verhalten wurde entfernt, da feindselige Websites diese Funktionalität missbrauchten. In Firefox können Sie das alte Verhalten mit der Einstellung `dom.disable_window_flip` aktivieren.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.blur();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
