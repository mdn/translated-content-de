---
title: "Dokumentation: queryCommandSupported()-Methode"
short-title: queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ApiRef("DOM")}}{{Non-standard_header}}

> [!NOTE]
> Obwohl die [`execCommand()`](/de/docs/Web/API/Document/execCommand)-Methode veraltet ist, sollten Sie, wenn Sie sich aus den auf dieser Seite genannten Gründen dafür entscheiden, sie zu verwenden, über die Nutzung von `queryCommandSupported()` nachdenken, um die Verfügbarkeit des Befehls zu überprüfen und die Kompatibilität sicherzustellen.

Die **`Document.queryCommandSupported()`**-Methode gibt an, ob der angegebene Editorbefehl vom Browser unterstützt wird oder nicht.

## Syntax

```js-nolint
queryCommandSupported(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung bestimmt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl unterstützt wird, und `false`, wenn der Befehl nicht unterstützt wird.

## Anmerkungen

Der `'paste'`-Befehl gibt `false` zurück, nicht nur, wenn die Funktion nicht verfügbar ist, sondern auch, wenn das aufrufende Skript nicht über ausreichende Berechtigungen verfügt, um die Aktion auszuführen.

## Beispiele

```js
const flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // Do something…
}
```

## Spezifikationen

Diese Funktion ist Teil keiner aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden. Es gibt einen inoffiziellen [W3C execCommand Spec Entwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
