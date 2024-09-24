---
title: "VideoFrame: close()-Methode"
short-title: close()
slug: Web/API/VideoFrame/close
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der {{domxref("VideoFrame")}}-Schnittstelle löscht alle Zustände und gibt die Referenz zur Medienressource frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Undefined.

## Beispiele

Das folgende Beispiel zeigt das Schließen des `VideoFrame`-Objekts.

```js
VideoFrame.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
