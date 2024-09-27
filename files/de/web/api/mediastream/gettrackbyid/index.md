---
title: "MediaStream: getTrackById()-Methode"
short-title: getTrackById()
slug: Web/API/MediaStream/getTrackById
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`getTrackById()`**-Methode der [`MediaStream`](/de/docs/Web/API/MediaStream)-Schnittstelle
gibt ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zurück, das die Spur mit der angegebenen ID-Zeichenkette darstellt. Wenn es keine Spur mit der angegebenen ID gibt, gibt diese Methode `null` zurück.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameter

- `id`
  - : Eine Zeichenkette, die die zurückzugebende Spur identifiziert.

### Rückgabewert

Wenn eine Spur gefunden wird, für die [`MediaStreamTrack.id`](/de/docs/Web/API/MediaStreamTrack/id) mit der angegebenen
`id`-Zeichenkette übereinstimmt, wird dieses [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt zurückgegeben.
Andernfalls ist der zurückgegebene Wert `null`.

## Beispiele

Dieses Beispiel aktiviert eine Kommentatorspur in einem Video, indem der Audiopegel der
Haupttonspur auf 50 % abgesenkt und dann die Kommentatorspur aktiviert wird.

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
