---
title: "Window: updateCommands() Methode"
short-title: updateCommands()
slug: Web/API/Window/updateCommands
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef}}{{Non-standard_Header}}

Aktualisiert den Zustand von Befehlen des aktuellen Chrome-Fensters (UI).

## Syntax

```js-nolint
updateCommands(commandName)
```

### Parameter

- `commandName`
  - : Ein String, der beschreibt, um welche Art von Aktualisierungsereignis es sich handelt (z.B. ob wir gerade fett schreiben).

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Hinweise

Dies aktiviert oder deaktiviert Elemente (Indem das "disabled"-Attribut am Befehls-Knoten je nach Bedarf gesetzt oder gelöscht wird) oder stellt sicher, dass der Befehlsstatus den Zustand der Auswahl widerspiegelt, indem aktuelle Statusinformationen im "state"-Attribut der XUL-Befehls-Knoten gesetzt werden.

## Spezifikationen

DOM Level 0. Kein Teil der Spezifikation.

## Browser-Kompatibilität

{{Compat}}
