---
title: "AudioTrack: enabled Eigenschaft"
short-title: enabled
slug: Web/API/AudioTrack/enabled
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("HTML DOM")}}

Die **{{domxref("AudioTrack")}}**-Eigenschaft
**`enabled`** gibt an, ob der beschriebene Audiotrack momentan zur Nutzung aktiviert ist oder nicht. Wenn der Track durch das Setzen von `enabled` auf `false` deaktiviert wird, wird der Track stummgeschaltet und produziert keinen Ton.

## Wert

Die Eigenschaft `enabled` ist ein Boolean, dessen Wert `true` ist, wenn der Track aktiviert ist; aktivierte Tracks produzieren Audio, während die Medienwiedergabe läuft. Das Setzen von `enabled` auf `false` schaltet den Audiotrack effektiv stumm und verhindert, dass er zur Audioleistung des Mediums beiträgt.

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

Die oben dargestellte Funktion `swapCommentaryMain()` sucht innerhalb der Audiotracks des
{{HTMLElement("video")}}-Elements `"main-video"` die Audiotracks, deren
{{domxref("AudioTrack.kind", "kind")}}-Werte `"main"` und
`"commentary"` sind. Diese stehen für den primären Audiotrack und den Kommentartrack.

> [!NOTE]
> Dieses Beispiel geht davon aus, dass es nur je einen Tracktyp im Video gibt, was jedoch nicht unbedingt der Fall sein muss.

Die Audiotracks des Elements werden dann mithilfe der JavaScript-{{jsxref("Array.forEach", "forEach()")}}-Methode durchlaufen (obwohl die
{{domxref("HTMLMediaElement.audioTracks", "audioTracks")}}-Eigenschaft eines Medienelements nicht tatsächlich ein JavaScript-Array ist, kann darauf größtenteils wie auf ein Array zugegriffen werden).

Der Scan sucht nach den Tracks, deren {{domxref("AudioTrack.kind", "kind")}}-Werte
`"main"` und `"commentary"` sind, und speichert diese
{{domxref("AudioTrack")}}-Objekte. Sobald diese gefunden wurden, werden die Werte der `enabled`-Eigenschaften der beiden Tracks ausgetauscht, was zu einem Wechsel führt, welcher der beiden Tracks aktuell aktiv ist.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
