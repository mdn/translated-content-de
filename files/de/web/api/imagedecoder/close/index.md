---
title: "ImageDecoder: close()-Methode"
short-title: close()
slug: Web/API/ImageDecoder/close
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der Schnittstelle {{domxref("ImageDecoder")}} beendet alle noch offenen Arbeiten und gibt Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `ImageDecoder`.

```js
imageDecoder.close();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
