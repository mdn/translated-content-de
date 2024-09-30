---
title: "Window: updateCommands() Methode"
short-title: updateCommands()
slug: Web/API/Window/updateCommands
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef}}{{Non-standard_Header}}

Aktualisiert den Status von Befehlen des aktuellen Chrome-Fensters (UI).

## Syntax

```js-nolint
updateCommands(commandName)
```

### Parameter

- `commandName`
  - : Ein String, der beschreibt, um welche Art von Aktualisierungsereignis es sich handelt (z. B. ob wir gerade fett schreiben).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise

Dies aktiviert oder deaktiviert Elemente (indem das "disabled"-Attribut am Befehls-Knoten entsprechend gesetzt oder entfernt wird) oder stellt sicher, dass der Befehlsstatus den Status der Auswahl widerspiegelt, indem aktuelle Statusinformationen im "state"-Attribut der XUL-Befehls-Knoten eingestellt werden.

## Spezifikationen

DOM Level 0. Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
