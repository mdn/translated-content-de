---
title: "Dokumentation: queryCommandSupported() Methode"
short-title: queryCommandSupported()
slug: Web/API/Document/queryCommandSupported
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

{{ApiRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

> [!NOTE]
> Auch wenn die Methode [`execCommand()`](/de/docs/Web/API/Document/execCommand) veraltet ist, sollten Sie, falls Sie sich aus den auf dieser Seite genannten Gründen dafür entscheiden, in Betracht ziehen, die Verfügbarkeit des Befehls mit `queryCommandSupported()` zu überprüfen, um die Kompatibilität sicherzustellen.

Die **`Document.queryCommandSupported()`**-Methode meldet, ob der angegebene Editor-Befehl vom Browser unterstützt wird oder nicht.

## Syntax

```js-nolint
queryCommandSupported(command)
```

### Parameter

- `command`
  - : Der Befehl, für den die Unterstützung ermittelt werden soll.

### Rückgabewert

Gibt einen booleschen Wert zurück, der `true` ist, wenn der Befehl unterstützt wird, und `false`, wenn der Befehl nicht unterstützt wird.

## Hinweise

Der `'paste'`-Befehl gibt `false` zurück, nicht nur wenn die Funktion nicht verfügbar ist, sondern auch, wenn das Skript, das den Aufruf tätigt, nicht die erforderlichen Berechtigungen hat, um die Aktion auszuführen.

## Beispiele

```js
const flg = document.queryCommandSupported("SelectAll");

if (flg) {
  // Do something…
}
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr vorgesehen, dass es ein Standard wird. Es gibt einen inoffiziellen [W3C execCommand Spec-Entwurf](https://w3c.github.io/editing/docs/execCommand/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.execCommand()`](/de/docs/Web/API/Document/execCommand)
- [`document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled)
