---
title: "Dokument: queryCommandEnabled() Methode"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`Document.queryCommandEnabled()`** Methode gibt an, ob der angegebene Editor-Befehl vom Browser aktiviert ist oder nicht.

## Syntax

```js-nolint
document.queryCommandEnabled(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung ermittelt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl aktiviert ist,
und `false`, wenn der Befehl nicht aktiviert ist.

## Hinweise

- Für die Befehle '`cut`' und '`copy`' gibt die Methode nur `true` zurück, wenn sie von einem benutzerinitiierten Thread aufgerufen wird.
- Der Befehl `'paste'` gibt `false` zurück, nicht nur wenn die Funktion nicht verfügbar ist, sondern auch, wenn das Skript, das ihn aufruft, nicht die erforderlichen Berechtigungen hat, um die Aktion auszuführen.

## Beispiel

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // Befehl ist aktiviert, führe ihn aus
}
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandSupported()")}}
