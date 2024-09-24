---
title: "MediaStream: Methode getTrackById()"
short-title: getTrackById()
slug: Web/API/MediaStream/getTrackById
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`getTrackById()`** Methode der {{domxref("MediaStream")}} Schnittstelle
gibt ein {{domxref("MediaStreamTrack")}} Objekt zurück, das den Track mit der angegebenen ID-Zeichenkette repräsentiert. Existiert kein Track mit der angegebenen ID, gibt diese Methode `null` zurück.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenkette, die den zurückzugebenden Track identifiziert.

### Rückgabewert

Wenn ein Track gefunden wird, für den {{domxref("MediaStreamTrack.id")}} mit der angegebenen
`id` Zeichenkette übereinstimmt, wird dieses {{domxref("MediaStreamTrack")}} Objekt zurückgegeben.
Andernfalls ist der zurückgegebene Wert `null`.

## Beispiele

In diesem Beispiel wird ein Kommentartrack in einem Video aktiviert, indem das Audiolevel des
Hauptaudiotracks auf 50% reduziert wird und dann der Kommentartrack aktiviert wird.

```js
stream.getTrackById("primary-audio-track").applyConstraints({ volume: 0.5 });
stream.getTrackById("commentary-track").enabled = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack.id")}}
