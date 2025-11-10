---
title: "MediaStream: getTrackById() Methode"
short-title: getTrackById()
slug: Web/API/MediaStream/getTrackById
l10n:
  sourceCommit: c8ed2b6e2451a1e0b6d9fed31ac9c37511b05b5c
---

{{APIRef("Media Capture and Streams")}}

Die **`getTrackById()`** Methode der [`MediaStream`](/de/docs/Web/API/MediaStream) Schnittstelle
gibt ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt zurück, das die Spur mit der angegebenen ID-Zeichenfolge repräsentiert. Wenn es keine Spur mit der angegebenen ID gibt, gibt diese Methode `null` zurück.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenfolge, die die zurückzugebende Spur identifiziert.

### Rückgabewert

Wenn eine Spur gefunden wird, für die [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) mit der angegebenen
`id`-Zeichenfolge übereinstimmt, wird dieses [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Objekt zurückgegeben.
Andernfalls ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Beispiel aktiviert eine Kommentatorspur auf einem Video, indem es das Audiolevel der Hauptaudiospur auf 50% reduziert und dann die Kommentatorspur aktiviert.

Das Beispiel geht davon aus, dass die IDs der beiden Spuren bekannt sind (zum Beispiel aus einem vorherigen Aufruf von [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id)). In einer realen Anwendung könnten Sie diese IDs speichern, wenn Sie den Stream zum ersten Mal erhalten, da sie im Browser zufällig generiert werden.

```js
const primaryAudioTrack = stream.getTrackById(
  "69f8520f-d94e-43f0-8a7c-77b1774f3b8f",
);
const commentaryTrack = stream.getTrackById(
  "b5410643-2549-491e-b0f7-f08a4ebe54b8",
);

primaryAudioTrack.applyConstraints({ volume: 0.5 });
commentaryTrack.enabled = true;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id)
