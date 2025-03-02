---
title: "FileSystemObserver: `disconnect()`-Methode"
short-title: disconnect()
slug: Web/API/FileSystemObserver/disconnect
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{securecontext_header}}{{APIRef("File System API")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`disconnect()`**-Methode der [`FileSystemObserver`](/de/docs/Web/API/FileSystemObserver)-Schnittstelle beendet die Beobachtung des Dateisystems.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

### Beobachtung des Dateisystems beenden

Angenommen, eine Instanz von `FileSystemObserver` ist verfügbar, dann können Sie die `disconnect()`-Methode aufrufen, wenn Sie die Beobachtung von Änderungen am Dateisystemeintrag beenden möchten:

```js
observer.disconnect();
```

## Spezifikationen

Derzeit nicht Teil einer Spezifikation. Siehe [https://github.com/whatwg/fs/pull/165](https://github.com/whatwg/fs/pull/165) für den relevanten Spezifikations-PR.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [File System API](/de/docs/Web/API/File_System_API)
- [The File System Observer API origin trial](https://developer.chrome.com/blog/file-system-observer#stop-observing-the-file-system) auf developer.chrome.com (2024)
