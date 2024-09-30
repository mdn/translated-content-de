---
title: "Window: forward()-Methode"
short-title: forward()
slug: Web/API/Window/forward
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{Non-standard_header}} {{deprecated_header}}

Bewegt das Fenster ein Dokument in der Historie vorwärts. Dies war eine Firefox-spezifische Methode und wurde in Firefox 31 entfernt.

> [!NOTE]
> Verwenden Sie stattdessen die standardmäßige [`history.forward()`](/de/docs/Web/API/History/forward)-Methode.

## Syntax

```js-nolint
forward()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
function goForward() {
  if (canGoForward) {
    window.forward();
  }
}
```

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

Diese nicht standardisierte Methode wurde nur in Firefox implementiert und in Firefox 31 entfernt.

## Siehe auch

- [`History.back()`](/de/docs/Web/API/History/back)
- [`History.forward()`](/de/docs/Web/API/History/forward)
