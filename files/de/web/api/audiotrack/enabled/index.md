---
title: "AudioTrack: enabled-Eigenschaft"
short-title: enabled
slug: Web/API/AudioTrack/enabled
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("HTML DOM")}}

Die **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**-Eigenschaft
**`enabled`** gibt an, ob der beschriebene Audiotrack derzeit zur Verwendung aktiviert ist oder nicht. Wenn der Track durch Setzen von
`enabled` auf `false` deaktiviert wird, wird der Track stummgeschaltet und erzeugt keinen Ton.

## Wert

Die `enabled`-Eigenschaft ist ein Boolean, dessen Wert `true` ist, wenn der Track aktiviert ist; aktivierte Tracks erzeugen Ton, während das Medium abgespielt wird. Wenn `enabled` auf `false` gesetzt wird, wird der Audiotrack effektiv stummgeschaltet und trägt nicht zur Audioleistung des Mediums bei.

## Beispiel

Dieses Beispiel wechselt zwischen dem Haupt- und dem Kommentar-Audiotrack eines Medienelements.

```js
function swapCommentaryMain() {
  const videoElem = document.getElementById("main-video");
  let audioTrackMain;
  let audioTrackCommentary;

  videoElem.audioTracks.forEach((track) => {
    if (track.kind === "main") {
      audioTrackMain = track;
    } else if (track.kind === "commentary") {
      audioTrackCommentary = track;
    }
  });

  if (audioTrackMain && audioTrackCommentary) {
    const commentaryEnabled = audioTrackCommentary.enabled;
    audioTrackCommentary.enabled = audioTrackMain.enabled;
    audioTrackMain.enabled = commentaryEnabled;
  }
}
```

Die oben gezeigte Funktion `swapCommentaryMain()` sucht innerhalb der Audiotracks des {{HTMLElement("video")}}-Elements `"main-video"` nach den Audiotracks, deren [`kind`](/de/docs/Web/API/AudioTrack/kind)-Werte `"main"` und `"commentary"` sind. Diese repräsentieren den primären Audiotrack und den Kommentartrack.

> [!NOTE]
> Dieses Beispiel geht davon aus, dass es nur einen Track jeder Art im Video gibt, was jedoch nicht unbedingt der Fall ist.

Die Audiotracks des Elements werden dann mit der JavaScript-Methode {{jsxref("Array.forEach", "forEach()")}} durchsucht (obwohl die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft eines Medienelements eigentlich kein JavaScript-Array ist, kann auf sie größtenteils wie auf ein solches zugegriffen werden).

Die Durchsuchung sucht nach den Tracks, deren [`kind`](/de/docs/Web/API/AudioTrack/kind)-Werte `"main"` und `"commentary"` sind, und merkt sich diese [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte. Sobald diese gefunden wurden, werden die Werte der beiden `enabled`-Eigenschaften der Tracks ausgetauscht, was zu einem Wechsel führt, welcher der beiden Tracks gerade aktiv ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
