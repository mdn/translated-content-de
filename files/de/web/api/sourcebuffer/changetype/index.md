---
title: "SourceBuffer: changeType()-Methode"
short-title: changeType()
slug: Web/API/SourceBuffer/changeType
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`changeType()`**-Methode des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces legt den MIME-Typ fest, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten sollen, um neue Mediendaten zu verarbeiten, die diesem Typ entsprechen. Dies ermöglicht es, Codecs oder den Containertyp während der Übertragung zu ändern.

Ein Szenario, in dem dies hilfreich ist, besteht darin, die Medienquelle an die sich ändernde Bandbreitenverfügbarkeit anzupassen, indem man von einem Codec zu einem anderen wechselt, wenn sich die Ressourcenbeschränkungen ändern.

## Syntax

```js-nolint
changeType(type)
```

### Parameter

- `type`
  - : Ein Zeichenstring, der den MIME-Typ angibt, dem die zukünftigen Puffer entsprechen werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene String leer ist, anstatt einen gültigen MIME-Typ anzugeben.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) kein Mitglied der `sourceBuffers`-Liste der übergeordneten Medienquelle ist, oder wenn die `updating`-Eigenschaft des Puffers anzeigt, dass ein zuvor eingereihtes [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove) noch verarbeitet wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ nicht unterstützt wird oder nicht mit den Arten von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten unterstützt wird, die in der `MediaSource.sourceBuffers`-Liste vorhanden sind.

## Nutzungshinweise

Wenn die `readyState`-Eigenschaft der übergeordneten [`MediaSource`](/de/docs/Web/API/MediaSource) auf `"ended"` gesetzt ist, wird durch den Aufruf von `changeType()` die `readyState`-Eigenschaft auf `"open"` gesetzt und ein einfaches Ereignis namens [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event) bei der übergeordneten Medienquelle ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
