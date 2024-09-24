---
title: "MediaStreamTrack: Methode getConstraints()"
short-title: getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`getConstraints()`**-Methode des {{domxref("MediaStreamTrack")}}-Interfaces gibt ein {{domxref('MediaTrackConstraints')}} Objekt zurück, das die zuletzt für den Track festgelegten Einschränkungen enthält, die zuvor mit einem Aufruf von {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} festgelegt wurden. Diese Einschränkungen geben Werte und Wertbereiche an, die die Website oder die Anwendung als erforderlich oder akzeptabel für die enthaltenen einschränkbaren Eigenschaften spezifiziert hat.

Einschränkungen können verwendet werden, um sicherzustellen, dass die Medien bestimmten von Ihnen bevorzugten Richtlinien entsprechen. Zum Beispiel könnten Sie hochauflösendes Video bevorzugen, aber verlangen, dass die Bildfrequenz gering genug ist, um die Datenrate niedrig zu halten und das Netzwerk nicht zu überlasten. Einschränkungen können auch ideale und/oder akzeptable Größen oder Größenbereiche spezifizieren. Siehe [Capabilities, constraints, and settings](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints) für Details dazu, wie man mit einschränkbaren Eigenschaften arbeitet.

## Syntax

```js-nolint
getConstraints()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref('MediaTrackConstraints')}} Objekt, das die kürzlich durch die Website oder App mit {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} gesetzten einschränkbaren Eigenschaften angibt. Die Eigenschaften im zurückgegebenen Objekt sind in der gleichen Reihenfolge aufgelistet, wie sie gesetzt wurden, und nur die vom Standort oder der App speziell gesetzten Eigenschaften sind enthalten.

> [!NOTE]
> Der zurückgegebene Satz von Einschränkungen beschreibt nicht unbedingt den tatsächlichen Zustand der Medien. Auch wenn keine der Einschränkungen erfüllt werden konnte, sind sie im zurückgegebenen Objekt dennoch wie ursprünglich durch den Code der Website festgelegt enthalten. Um die derzeit aktiven Einstellungen für alle einschränkbaren Eigenschaften zu erhalten, sollten Sie stattdessen {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} aufrufen.

## Beispiele

Dieses Beispiel ruft die aktuellen Einschränkungen für einen Track ab, setzt die {{domxref("MediaTrackConstraints.facingMode", "facingMode")}} und wendet die aktualisierten Einschränkungen an.

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
