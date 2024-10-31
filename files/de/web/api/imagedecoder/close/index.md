---
title: "ImageDecoder: close()-Methode"
short-title: close()
slug: Web/API/ImageDecoder/close
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`close()`**-Methode der [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)-Schnittstelle beendet alle anstehenden Arbeiten und gibt Systemressourcen frei.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel schließt den `ImageDecoder`.

```js
imageDecoder.close();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
