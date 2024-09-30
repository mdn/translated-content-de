---
title: "RemotePlayback: state-Eigenschaft"
short-title: state
slug: Web/API/RemotePlayback/state
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Remote Playback API")}}

Die schreibgeschützte **`state`**-Eigenschaft der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle gibt den aktuellen Zustand der `RemotePlayback`-Verbindung zurück.

## Wert

Einer von:

- `"connecting"`
  - : Der User-Agent versucht, die Fernwiedergabe mit dem ausgewählten Gerät zu starten.
- `"connected"`
  - : Der Übergang von lokaler zu Fernwiedergabe ist erfolgt. Alle Befehle werden nun auf dem entfernten Gerät ausgeführt.
- `"disconnected"`
  - : Die Fernwiedergabe wurde nicht gestartet, konnte nicht gestartet werden oder wurde gestoppt.

## Beispiele

Im folgenden Beispiel wird der Wert von `RemotePlayback.state` in die Konsole ausgegeben, wenn der User-Agent erfolgreich verbindet.

```js
RemotePlayback.onconnect = () => {
  console.log(RemotePlayback.state);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
