---
title: "Window: stop() Methode"
short-title: stop()
slug: Web/API/Window/stop
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`window.stop()`** Methode stoppt das weitere Laden von Ressourcen im aktuellen Browsing-Kontext, was dem Stopp-Button im Browser entspricht.

Aufgrund der Art und Weise, wie Skripte ausgeführt werden, kann diese Methode das Laden des übergeordneten Dokuments nicht unterbrechen, sie wird jedoch die Bilder, neuen Fenster und andere noch ladende Objekte stoppen.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.stop();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
