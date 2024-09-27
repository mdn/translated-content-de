---
title: "RemotePlayback: state-Eigenschaft"
short-title: state
slug: Web/API/RemotePlayback/state
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Remote Playback API")}}

Die **`state`**-Eigenschaft des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Interfaces (nur lesbar) gibt den aktuellen Zustand der `RemotePlayback`-Verbindung zurück.

## Wert

Einer von:

- `"connecting"`
  - : Der Benutzeragent versucht, die Fernwiedergabe mit dem ausgewählten Gerät zu starten.
- `"connected"`
  - : Der Wechsel von der lokalen zur Fernwiedergabe hat stattgefunden. Alle Befehle werden nun auf dem Ferngerät ausgeführt.
- `"disconnected"`
  - : Die Fernwiedergabe wurde nicht gestartet, ist fehlgeschlagen oder wurde beendet.

## Beispiele

Im folgenden Beispiel wird der Wert von `RemotePlayback.state` in die Konsole ausgegeben, wenn der Benutzeragent erfolgreich eine Verbindung herstellt.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
