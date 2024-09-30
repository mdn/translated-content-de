---
title: "Window: back()-Methode"
short-title: back()
slug: Web/API/Window/back
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

Die veraltete und nicht standardisierte Methode `back()` auf der [`window`](/de/docs/Web/API/Window)-Schnittstelle bringt das Fenster zurück zum vorherigen Eintrag in der Historie. Dies war eine Firefox-spezifische Methode und wurde in Firefox 31 entfernt.

> [!NOTE]
> Verwenden Sie stattdessen die standardisierte Methode [`history.back`](/de/docs/Web/API/History/back).

## Syntax

```js-nolint
back()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses einfache Beispiel behandelt einen Klick auf einen "Zurück"-Button, indem es `back()` aufruft.

```js
function handleMyBackButton() {
  if (canGoBack) {
    window.back();
  }
}
```

## Spezifikationen

Dies ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

Diese nicht standardisierte Methode war nur in Firefox implementiert und wurde in Firefox 31 entfernt.

## Siehe auch

- [`History.back()`](/de/docs/Web/API/History/back)
- [`History.forward()`](/de/docs/Web/API/History/forward)
