---
title: "SourceBuffer: changeType() Methode"
short-title: changeType()
slug: Web/API/SourceBuffer/changeType
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`changeType()`** Methode des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces legt den MIME-Typ fest, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten sollen, um den neuen Mediadaten zu entsprechen. Dies ermöglicht es, Codecs oder den Containertyp mitten im Stream zu ändern.

Ein Anwendungsfall, in dem dies hilfreich ist, ist die Unterstützung der Anpassung der Medienquelle an die sich ändernde Bandbreitenverfügbarkeit, indem der Übergang von einem Codec zu einem anderen erfolgt, wenn sich die Ressourcenbeschränkungen ändern.

## Syntax

```js-nolint
changeType(type)
```

### Parameter

- `type`
  - : Ein String, der den MIME-Typ angibt, zu dem zukünftige Puffer konform sein werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene String leer ist, anstatt einen gültigen MIME-Typ anzugeben.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) kein Mitglied der [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste der übergeordneten Medienquelle ist oder die [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft des Puffers anzeigt, dass ein zuvor in die Warteschlange gestelltes [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove) noch in Bearbeitung ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ nicht unterstützt wird oder nicht unterstützt wird mit den Typen von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten, die in der [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste vorhanden sind.

## Hinweise zur Nutzung

Wenn die [`readyState`](/de/docs/Web/API/MediaSource/readyState)-Eigenschaft der übergeordneten [`MediaSource`](/de/docs/Web/API/MediaSource) auf `"ended"` gesetzt ist, wird durch den Aufruf von `changeType()` die `readyState`-Eigenschaft auf `"open"` gesetzt und ein Ereignis mit dem Namen [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event) bei der übergeordneten Medienquelle ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
