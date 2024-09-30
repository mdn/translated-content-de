---
title: "MediaStreamTrack: getConstraints()-Methode"
short-title: getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getConstraints()`**-Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt zurück, das die zuletzt für den Track festgelegten Einschränkungen enthält, welche durch einen vorherigen Aufruf von [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) definiert wurden. Diese Einschränkungen geben Werte und Wertbereiche an, die die Website oder Anwendung als erforderlich oder akzeptabel für die enthaltenen Einschränkungs-Eigenschaften festgelegt hat.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmte von Ihnen bevorzugte Richtlinien erfüllen. Beispielsweise bevorzugen Sie möglicherweise hochauflösendes Video, aber verlangen, dass die Bildrate etwas niedrig ist, um die Datenrate niedrig genug zu halten, damit das Netzwerk nicht überlastet wird. Einschränkungen können auch ideale und/oder akzeptable Größen oder Größenbereiche angeben. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details, wie mit einschränkbaren Eigenschaften gearbeitet wird.

## Syntax

```js-nolint
getConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das die von der Website oder App zuletzt gesetzten einschränkbaren Eigenschaften angibt, die über [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt wurden. Die Eigenschaften im zurückgegebenen Objekt sind in der gleichen Reihenfolge aufgelistet, wie sie festgelegt wurden, und es sind nur Eigenschaften enthalten, die explizit von der Website oder App gesetzt wurden.

> [!NOTE]
> Der zurückgegebene Satz von Einschränkungen beschreibt nicht unbedingt den aktuellen Zustand der Medien. Auch wenn keine der Einschränkungen erfüllt werden konnten, sind sie im zurückgegebenen Objekt so enthalten, wie ursprünglich vom Code der Website festgelegt. Um die aktuell aktiven Einstellungen für alle einschränkbaren Eigenschaften zu erhalten, sollten Sie stattdessen [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aufrufen.

## Beispiele

Dieses Beispiel ermittelt die aktuellen Einschränkungen für einen Track, setzt den [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) und wendet die aktualisierten Einschränkungen an.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
