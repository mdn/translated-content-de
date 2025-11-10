---
title: "Dokument: queryCommandEnabled() Methode"
short-title: queryCommandEnabled()
slug: Web/API/Document/queryCommandEnabled
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

> [!NOTE]
> Obwohl die [`execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode veraltet ist, sollten Sie, wenn Sie sich aus den auf jener Seite genannten Gründen entscheiden, sie zu verwenden, bedenken, die Verfügbarkeit des Befehls mit `queryCommandEnabled()` zu überprüfen, um die Kompatibilität sicherzustellen.

Die **`Document.queryCommandEnabled()`**-Methode gibt an, ob der angegebene Editorbefehl vom Browser aktiviert ist oder nicht.

## Syntax

```js-nolint
queryCommandEnabled(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung bestimmt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl aktiviert ist, und `false`, wenn der Befehl nicht aktiviert ist.

## Hinweise

- Bei den Befehlen `"cut"` und `"copy"` gibt die Methode nur `true` zurück, wenn sie von einem durch den Benutzer initiierten Thread aufgerufen wird.
- Der `"paste"`-Befehl gibt `false` zurück, nicht nur, wenn die Funktionalität nicht verfügbar ist, sondern auch, wenn das aufrufende Skript nicht über ausreichende Berechtigungen verfügt, um die Aktion auszuführen.

## Beispiel

```js
const flg = document.queryCommandEnabled("SelectAll");

if (flg) {
  document.execCommand("SelectAll", false, null); // command is enabled, run it
}
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt jedoch einen inoffiziellen [W3C execCommand spezifikationsentwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- [`document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported)
