---
title: "Dokumentation: queryCommandEnabled() Methode"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}{{Non-standard_header}}

> [!NOTE]
> Obwohl die [`execCommand()`](/de/docs/Web/API/Document/execCommand) Methode veraltet ist, sollten Sie, wenn Sie sich aus den auf dieser Seite genannten Gründen entscheiden, sie zu verwenden, in Betracht ziehen, die Verfügbarkeit des Befehls mit `queryCommandEnabled()` zu überprüfen, um die Kompatibilität sicherzustellen.

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

- Für die Befehle `"cut"` und `"copy"` gibt die Methode nur `true` zurück, wenn sie aus einem benutzerinitiierten Thread aufgerufen wird.
- Der `"paste"`-Befehl gibt `false` zurück, nicht nur, wenn die Funktion nicht verfügbar ist, sondern auch, wenn das aufrufende Skript nicht genügend Berechtigungen hat, um die Aktion auszuführen.

## Beispiel

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // command is enabled, run it
}
```

## Spezifikationen

Dieses Feature gehört zu keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
