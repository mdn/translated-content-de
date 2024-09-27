---
title: "Document: queryCommandEnabled() Methode"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`Document.queryCommandEnabled()`**-Methode gibt an, ob der angegebene Editorkommando vom Browser aktiviert ist oder nicht.

## Syntax

```js-nolint
document.queryCommandEnabled(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung bestimmt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl aktiviert ist, und `false`, wenn der Befehl nicht aktiviert ist.

## Hinweise

- Für die Befehle `"cut"` und `"copy"` gibt die Methode nur dann `true` zurück, wenn sie aus einem benutzerinitiierten Thread aufgerufen wird.
- Der `"paste"`-Befehl gibt `false` zurück, nicht nur wenn die Funktion nicht verfügbar ist, sondern auch wenn das Skript, das den Aufruf tätigt, nicht über ausreichende Berechtigungen verfügt, um die Aktion auszuführen.

## Beispiel

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // command is enabled, run it
}
```

## Spezifikationen

Dieses Merkmal ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
