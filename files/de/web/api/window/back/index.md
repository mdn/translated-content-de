---
title: "Window: back()-Methode"
short-title: back()
slug: Web/API/Window/back
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

Die veraltete und nicht standardisierte Methode `back()` in der {{domxref("window")}}-Schnittstelle kehrt zum vorherigen Element in der Historie zurück. Dies war eine spezifische Methode von Firefox und wurde in Firefox 31 entfernt.

> [!NOTE]
> Verwenden Sie stattdessen die standardisierte Methode {{domxref("history.back")}}.

## Syntax

```js-nolint
back()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses einfache Beispiel verarbeitet einen Klick auf einen "Zurück"-Button durch Aufrufen von `back()`.

```js
function handleMyBackButton() {
  if (canGoBack) {
    window.back();
  }
}
```

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

Diese nicht standardisierte Methode wurde nur in Firefox implementiert und in Firefox 31 entfernt.

## Siehe auch

- {{domxref("History.back()")}}
- {{domxref("History.forward()")}}
