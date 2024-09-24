---
title: "Fenster: updateCommands()-Methode"
short-title: updateCommands()
slug: Web/API/Window/updateCommands
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ApiRef}}{{Non-standard_Header}}

Aktualisiert den Zustand der Befehle des aktuellen Browserfensters (UI).

## Syntax

```js-nolint
updateCommands(commandName)
```

### Parameter

- `commandName`
  - : Ein String, der beschreibt, um welche Art von Aktualisierungsereignis es sich handelt (z. B. ob wir derzeit fett sind).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Hinweise

Dies aktiviert oder deaktiviert Elemente (setzt oder entfernt das Attribut "disabled" im Befehlsknoten entsprechend) oder stellt sicher, dass der Befehlszustand den Zustand der Auswahl widerspiegelt, indem aktuelle Zustandsinformationen im Attribut "state" der XUL-Befehlsknoten festgelegt werden.

## Spezifikationen

DOM Level 0. Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
