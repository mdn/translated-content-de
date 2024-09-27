---
title: "SourceBuffer: changeType()-Methode"
short-title: changeType()
slug: Web/API/SourceBuffer/changeType
l10n:
  sourceCommit: 1573959d78591b4079500af13019f901faaaca02
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`changeType()`**-Methode des [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Interfaces legt den MIME-Typ fest, den zukünftige Aufrufe von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) erwarten sollen, dass die neuen Mediendaten diesem entsprechen. Diese Methode ermöglicht es, Codecs oder den Container-Typ während eines Streams zu ändern.

Ein Szenario, in dem dies hilfreich ist, besteht darin, die Anpassung der Medienquelle an die sich ändernde Bandbreitenverfügbarkeit zu unterstützen, indem man beim Wechsel der Ressourcenbedingungen von einem Codec zu einem anderen wechselt.

## Syntax

```js-nolint
changeType(type)
```

### Parameter

- `type`
  - : Ein String, der den MIME-Typ angibt, dem zukünftige Puffer entsprechen werden.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene String leer ist und keinen gültigen MIME-Typ angibt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`SourceBuffer`](/de/docs/Web/API/SourceBuffer) kein Mitglied der [`sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste der übergeordneten Medienquelle ist oder wenn die [`updating`](/de/docs/Web/API/SourceBuffer/updating)-Eigenschaft des Puffers darauf hinweist, dass ein zuvor geplanter [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer) oder [`remove()`](/de/docs/Web/API/SourceBuffer/remove) noch verarbeitet wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene MIME-Typ nicht unterstützt wird oder nicht mit den in der [`MediaSource.sourceBuffers`](/de/docs/Web/API/MediaSource/sourceBuffers)-Liste vorhandenen Typen von [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)-Objekten unterstützt wird.

## Verwendungshinweise

Wenn die [`readyState`](/de/docs/Web/API/MediaSource/readyState)-Eigenschaft der übergeordneten [`MediaSource`](/de/docs/Web/API/MediaSource) auf `"ended"` gesetzt ist, wird durch Aufrufen von `changeType()` die `readyState`-Eigenschaft auf `"open"` gesetzt und ein einfaches Ereignis namens [`sourceopen`](/de/docs/Web/API/MediaSource/sourceopen_event) bei der übergeordneten Medienquelle ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBufferList`](/de/docs/Web/API/SourceBufferList)
