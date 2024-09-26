---
title: "Dokument: queryCommandSupported()-Methode"
short-title: queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

Die **`Document.queryCommandSupported()`**-Methode gibt an, ob der angegebene Editor-Befehl vom Browser unterstützt wird.

## Syntax

```js-nolint
queryCommandSupported(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung festgestellt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl unterstützt wird, und `false`, wenn er nicht unterstützt wird.

## Hinweise

Der `'paste'`-Befehl gibt `false` zurück, nicht nur wenn die Funktion nicht verfügbar ist, sondern auch wenn das aufrufende Skript nicht die erforderlichen Berechtigungen hat, um die Aktion auszuführen.

## Beispiele

```js
const flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // Do something…
}
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.execCommand()")}}
- {{domxref("Document.queryCommandEnabled()")}}