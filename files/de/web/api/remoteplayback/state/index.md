---
title: "RemotePlayback: state-Eigenschaft"
short-title: state
slug: Web/API/RemotePlayback/state
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Remote Playback API")}}

Die schreibgeschützte **`state`**-Eigenschaft der {{domxref("RemotePlayback")}}-Schnittstelle gibt den aktuellen Zustand der `RemotePlayback`-Verbindung zurück.

## Wert

Einer der folgenden:

- `"connecting"`
  - : Der Benutzeragent versucht, die Fernwiedergabe mit dem ausgewählten Gerät zu initiieren.
- `"connected"`
  - : Der Übergang von der lokalen zur Fernwiedergabe ist erfolgt. Alle Befehle werden nun auf dem Ferngerät ausgeführt.
- `"disconnected"`
  - : Die Fernwiedergabe wurde nicht initiiert, das Initiieren ist fehlgeschlagen oder wurde gestoppt.

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
