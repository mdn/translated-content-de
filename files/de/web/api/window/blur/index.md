---
title: "Window: blur()-Methode"
short-title: blur()
slug: Web/API/Window/blur
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`Window.blur()`**-Methode tut nichts.

> [!NOTE]
> Historisch gesehen war diese Methode das programmgesteuerte Äquivalent dazu, dass der Benutzer den Fokus von dem aktuellen Fenster weg verschiebt. Dieses Verhalten wurde entfernt, da feindliche Webseiten diese Funktionalität missbrauchten. In Firefox können Sie das alte Verhalten mit der `dom.disable_window_flip`-Einstellung aktivieren.

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
