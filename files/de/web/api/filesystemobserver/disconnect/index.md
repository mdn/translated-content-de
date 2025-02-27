---
title: "FileSystemObserver: Methode disconnect()"
short-title: disconnect()
slug: Web/API/FileSystemObserver/disconnect
l10n:
  sourceCommit: 328a7843ffd9e0afb4d21822d058bb08b17d3445
---

{{securecontext_header}}{{APIRef("File System API")}}

Die **`disconnect()`**-Methode des [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver)-Interfaces stoppt die Beobachtung des Dateisystems durch den Observer.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

### Beobachtung des Dateisystems stoppen

Angenommen, eine Instanz von `FileSystemObserver` ist verfügbar, können Sie die `disconnect()`-Methode aufrufen, um die Beobachtung von Änderungen am Dateisystemeintrag zu beenden:

```js
observer.disconnect();
```

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für das relevante Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)
