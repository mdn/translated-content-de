---
title: "ReadableStreamBYOBReader: releaseLock()-Methode"
short-title: releaseLock()
slug: Web/API/ReadableStreamBYOBReader/releaseLock
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`releaseLock()`**-Methode der {{domxref("ReadableStreamBYOBReader")}}-Schnittstelle gibt die Sperre des Lesers für den Stream frei. Nachdem die Sperre freigegeben wurde, ist der Leser nicht mehr aktiv.

Der Leser wird als fehlerhaft angezeigt, wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird; andernfalls wird der Leser als geschlossen angezeigt.

Wenn die Sperre des Lesers freigegeben wird, während noch ausstehende Leseanforderungen bestehen, werden die von der {{domxref("ReadableStreamBYOBReader.read()")}}-Methode des Lesers zurückgegebenen Versprechen sofort mit einem `TypeError` abgelehnt. Ungelesene Datenblöcke bleiben in der internen Warteschlange des Streams und können später durch das Erwerben eines neuen Lesers gelesen werden.

## Syntax

```js-nolint
releaseLock()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamBYOBReader` ist.

## Beispiele

Ein einfaches Beispiel wird unten gezeigt. Eine Sperre wird erstellt, sobald der Leser auf dem Stream erstellt wird.

```js
const reader = stream.getReader({ mode: "byob" });
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}-Konstruktor
- [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
