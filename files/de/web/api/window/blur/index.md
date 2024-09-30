---
title: "Window: blur() Methode"
short-title: blur()
slug: Web/API/Window/blur
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{deprecated_header}}

Die **`Window.blur()`** Methode bewirkt nichts.

> [!NOTE]
> Historisch gesehen war diese Methode das programmgesteuerte Äquivalent dazu, dass der Benutzer den Fokus vom aktuellen Fenster wegverschiebt. Dieses Verhalten wurde entfernt, da feindliche Seiten diese Funktionalität missbrauchten. In Firefox können Sie das alte Verhalten mit der `dom.disable_window_flip` Präferenz aktivieren.

## Syntax

```js-nolint
blur()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
window.blur();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
