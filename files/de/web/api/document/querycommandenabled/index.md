---
title: "Document: queryCommandEnabled() Methode"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`Document.queryCommandEnabled()`** Methode gibt an, ob der angegebene Editor-Befehl vom Browser aktiviert ist oder nicht.

## Syntax

```js-nolint
queryCommandEnabled(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung ermittelt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl aktiviert ist, und `false`, wenn er es nicht ist.

## Hinweise

- Für die Befehle `"cut"` und `"copy"` gibt die Methode nur `true` zurück, wenn sie aus einem vom Benutzer initiierten Thread aufgerufen wird.
- Der Befehl `"paste"` gibt `false` zurück, nicht nur wenn die Funktion nicht verfügbar ist, sondern auch, wenn das aufrufende Skript nicht die erforderlichen Berechtigungen hat, um die Aktion auszuführen.

## Beispiel

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // command is enabled, run it
}
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es wird nicht mehr als Standard verfolgt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
