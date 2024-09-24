---
title: "Fenster: stop()-Methode"
short-title: stop()
slug: Web/API/Window/stop
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die **`window.stop()`**-Methode stoppt das weitere Laden von Ressourcen im aktuellen Browsing-Kontext, was dem Stopp-Button im Browser entspricht.

Aufgrund der Art und Weise, wie Skripte ausgeführt werden, kann diese Methode das Laden des übergeordneten Dokuments nicht unterbrechen, aber sie wird das Laden von Bildern, neuen Fenstern und anderen noch ladenden Objekten stoppen.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
window.stop();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
