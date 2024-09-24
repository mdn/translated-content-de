---
title: "SourceBuffer: changeType()-Methode"
short-title: changeType()
slug: Web/API/SourceBuffer/changeType
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Media Source Extensions")}}

Die **`changeType()`** Methode der
{{domxref("SourceBuffer")}}-Schnittstelle legt den MIME-Typ für zukünftige Aufrufe von
{{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} fest, an den die neuen Mediendaten
angepasst werden sollen. Dadurch wird es möglich, Codecs oder den Containertyp
im Stream zu ändern.

Ein Szenario, in dem dies hilfreich ist, umfasst die Anpassung der Medienquelle an
sich ändernde Bandbreitenverfügbarkeit, indem von einem Codec zu einem anderen gewechselt wird, wenn sich die Ressourcenanforderungen ändern.

## Syntax

```js-nolint
changeType(type)
```

### Parameter

- `type`
  - : Ein String, der den MIME-Typ angibt, an den sich zukünftige Buffers anpassen werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der angegebene String leer ist und keinen gültigen MIME-Typ angibt.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("SourceBuffer")}} kein Mitglied der
    {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}}-Liste der übergeordneten Medienquelle ist, oder wenn die
    {{domxref("SourceBuffer.updating", "updating")}}-Eigenschaft des Buffers anzeigt, dass ein zuvor angefordertes
    {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} oder
    {{domxref("SourceBuffer.remove", "remove()")}} noch verarbeitet wird.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene MIME-Typ nicht unterstützt wird oder nicht mit den Typen von
    {{domxref("SourceBuffer")}}-Objekten in der
    {{domxref("MediaSource.sourceBuffers")}}-Liste unterstützt wird.

## Verwendungshinweise

Wenn die {{domxref("MediaSource.readyState", "readyState")}}-Eigenschaft der übergeordneten {{domxref("MediaSource")}} auf `"ended"` gesetzt ist, setzt ein Aufruf von `changeType()`
die Eigenschaft `readyState` auf `"open"` und
löst ein einfaches Ereignis namens {{domxref("MediaSource.sourceopen_event", "sourceopen")}} bei der übergeordneten Medienquelle aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
