---
title: "MediaStream: Methode getTrackById()"
short-title: getTrackById()
slug: Web/API/MediaStream/getTrackById
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`getTrackById()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle
gibt ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zurück, das den Track mit der angegebenen ID-Zeichenfolge repräsentiert.
Wenn kein Track mit der angegebenen ID vorhanden ist, gibt diese Methode `null` zurück.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenfolge, die den zurückzugebenden Track identifiziert.

### Rückgabewert

Wenn ein Track gefunden wird, für den [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) mit der angegebenen
`id`-Zeichenfolge übereinstimmt, wird dieses [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zurückgegeben.
Andernfalls ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Beispiel aktiviert einen Kommentartrack in einem Video, indem es das Audiolevel des
Hauptaudio-Tracks auf 50% absenkt und dann den Kommentartrack aktiviert.

```js
stream.getTrackById("primary-audio-track").applyConstraints({ volume: 0.5 });
stream.getTrackById("commentary-track").enabled = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id)
