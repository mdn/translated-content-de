---
title: "Window: blur() Methode"
short-title: blur()
slug: Web/API/Window/blur
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`Window.blur()`** Methode macht nichts.

> [!NOTE]
> Historisch gesehen war diese Methode das programmatische Äquivalent zum Verschieben des Fokus von
> dem aktuellen Fenster durch den Benutzer. Dieses Verhalten wurde entfernt, da feindliche Websites diese Funktionalität missbrauchten.
> In Firefox können Sie das alte Verhalten mit der `dom.disable_window_flip` Präferenz aktivieren.

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
