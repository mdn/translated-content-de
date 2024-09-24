---
title: "FileReader: abort()-Methode"
short-title: abort()
slug: Web/API/FileReader/abort
l10n:
  sourceCommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{APIRef("File API")}}{{AvailableInWorkers}}

Die **`abort()`**-Methode des {{domxref("FileReader")}}-Interface bricht den Lesevorgang ab. Nach der Rückkehr wird der {{domxref("FileReader.readyState","readyState")}} den Wert `DONE` haben.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("FileReader")}}
