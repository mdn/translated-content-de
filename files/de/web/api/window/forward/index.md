---
title: "Fenster: forward()-Methode"
short-title: forward()
slug: Web/API/Window/forward
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{Non-standard_header}} {{deprecated_header}}

Bewegt das Fenster ein Dokument vorwärts in der Historie. Dies war eine Firefox-spezifische Methode und wurde in Firefox 31 entfernt.

> [!NOTE]
> Verwenden Sie stattdessen die standardisierte Methode {{domxref("History.forward", "history.forward()")}}.

## Syntax

```js-nolint
forward()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

Diese nicht-standardisierte Methode wurde nur in Firefox implementiert und in Firefox 31 entfernt.

## Siehe auch

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
