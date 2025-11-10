---
title: "MediaTrackSettings: restrictOwnAudio-Eigenschaft"
short-title: restrictOwnAudio
slug: Web/API/MediaTrackSettings/restrictOwnAudio
l10n:
  sourceCommit: a439453bab9f5508b5268a4062a42fc760a2f20b
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`restrictOwnAudio`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs steuert, ob Systemaudio, das von dem erfassenden Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird, um in einigen Fällen sauberere Bildschirmaufnahmen zu ermöglichen.

Wenn zum Beispiel die erfassende Webseite selbst eingebettete Audiodaten oder Videos abspielt, würde dieses Audio in die Aufnahme einbezogen werden. Da dies zu einem unerwünschten Echo führen oder die beabsichtigten Audioquellen aus anderen Tabs oder Anwendungen stören könnte, ist es wünschenswert, es aus der Aufnahme zu entfernen.

## Wert

Ein boolescher Wert, bei dem `true` die Einschränkung des Systemaudios des erfassenden Tabs aktiviert und `false` sie deaktiviert.

Wenn der Wert `true` ist, wird der User-Agent versuchen, jegliches Audio zu entfernen, das von dem durch den Tab, der [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) aufgerufen hat, erfassten Audio erzeugt wird. Wenn das Entfernen des Audios durch Verarbeitung fehlschlägt, kann der User-Agent jegliches Audio, das vom erfassenden Tab stammt, ausschließen.

> [!NOTE]
> Wenn die erfasste Anzeigeoberfläche kein Systemaudio enthält, hat diese Einstellung keine Wirkung.

## Beispiele

Die folgende Funktion richtet ein Einschränkungsobjekt ein, das die Optionen für einen Aufruf von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) angibt.
Es fügt die `restrictOwnAudio`-Einschränkung (die verlangt, dass das Systemaudio, das vom erfassenden Tab stammt, aus der Bildschirmaufnahme herausgefiltert wird) nur hinzu, wenn bekannt ist, dass sie vom Browser unterstützt wird.
Die Erfassung beginnt dann, indem `getDisplayMedia()` aufgerufen und der zurückgegebene Stream an das {{htmlelement("video")}}-Element angehängt wird, das durch die Variable `videoElem` referenziert wird.

```js
async function capture() {
  const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  const displayMediaOptions = {
    audio: {},
  };

  if (supportedConstraints.restrictOwnAudio) {
    displayMediaOptions.audio.restrictOwnAudio = true;
  }

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    /* handle the error */
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
