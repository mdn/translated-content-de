---
title: "Window: blur()-Methode"
short-title: blur()
slug: Web/API/Window/blur
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{deprecated_header}}

Die **`Window.blur()`**-Methode hat keine Funktion.

> [!NOTE]
> Historisch gesehen war diese Methode das programmgesteuerte Äquivalent zum Entfernen des Fokus durch den Benutzer vom aktuellen Fenster. Dieses Verhalten wurde entfernt, da feindliche Websites diese Funktionalität missbrauchten. In Firefox können Sie das alte Verhalten mit der `dom.disable_window_flip` Einstellung aktivieren.

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