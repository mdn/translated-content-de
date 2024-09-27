---
title: "MediaStreamTrack: getConstraints()-Methode"
short-title: getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getConstraints()`**-Methode des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces gibt ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt zurück, welches die zuletzt für den Track mit einem vorherigen Aufruf von [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegten Einschränkungen enthält. Diese Einschränkungen geben Werte und Wertbereiche an, die die Website oder Anwendung als erforderlich oder akzeptabel für die enthaltenen beeinflussbaren Eigenschaften spezifiziert hat.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmte von Ihnen bevorzugte Richtlinien erfüllen. Beispielsweise bevorzugen Sie möglicherweise hochauflösendes Video, verlangen jedoch, dass die Bildrate etwas niedriger ist, um die Datenrate niedrig genug zu halten, um das Netzwerk nicht zu überlasten. Einschränkungen können auch ideale und/oder akzeptable Größen oder Größenbereiche angeben. Siehe [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details zur Arbeit mit beeinflussbaren Eigenschaften.

## Syntax

```js-nolint
getConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Objekt, das die beeinflussbaren Eigenschaften anzeigt, die von der Website oder App zuletzt mit [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints) festgelegt wurden. Die Eigenschaften im zurückgegebenen Objekt sind in der gleichen Reihenfolge aufgeführt, in der sie gesetzt wurden, und es sind nur die Eigenschaften enthalten, die speziell von der Seite oder App festgelegt wurden.

> [!NOTE]
> Der zurückgegebene Satz von Einschränkungen beschreibt nicht unbedingt den tatsächlichen Zustand der Medien. Selbst wenn eine der Einschränkungen nicht erfüllt werden konnte, werden sie als ursprünglich vom Code der Seite festgelegt im zurückgegebenen Objekt aufgenommen. Um die aktuell aktiven Einstellungen für alle beeinflussbaren Eigenschaften zu erhalten, sollten Sie stattdessen [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) aufrufen.

## Beispiele

Dieses Beispiel ruft die aktuellen Einschränkungen für einen Track ab, setzt den [`facingMode`](/de/docs/Web/API/MediaTrackConstraints/facingMode) und wendet die aktualisierten Einschränkungen an.

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
