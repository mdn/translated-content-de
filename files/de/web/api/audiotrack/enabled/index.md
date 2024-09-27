---
title: "AudioTrack: enabled-Eigenschaft"
short-title: enabled
slug: Web/API/AudioTrack/enabled
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("HTML DOM")}}

Die **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**-Eigenschaft
**`enabled`** gibt an, ob der beschriebene Audiotrack derzeit zur Verwendung aktiviert ist. Wenn der Track deaktiviert wird, indem `enabled` auf `false` gesetzt wird, ist der Track stummgeschaltet und erzeugt keinen Ton.

## Wert

Die `enabled`-Eigenschaft ist ein Boolescher Wert, der `true` ist, wenn der Track aktiviert ist; aktivierte Tracks erzeugen Ton, während die Medien abgespielt werden. Das Setzen von `enabled` auf `false` schaltet den Audiotrack effektiv stumm und verhindert, dass er zum Klang der Medien beiträgt.

## Beispiel

Dieses Beispiel wechselt zwischen den Haupt- und Kommentaraudiotracks eines Medienelements.

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

Die oben dargestellte `swapCommentaryMain()`-Funktion durchsucht die Audiotracks des {{HTMLElement("video")}}-Elements `"main-video"` nach den Audiotracks, deren [`kind`](/de/docs/Web/API/AudioTrack/kind)-Werte `"main"` und `"commentary"` sind. Diese repräsentieren den primären Audiotrack und den Kommentartrack.

> [!NOTE]
> Dieses Beispiel geht davon aus, dass im Video nur eine Art von
> Track vorhanden ist, was jedoch nicht unbedingt der Fall ist.

Anschließend werden die Audiotracks des Elements mit der JavaScript-Methode {{jsxref("Array.forEach", "forEach()")}} durchsucht (obwohl die [`audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks)-Eigenschaft eines Medienelements tatsächlich kein JavaScript-Array ist, kann sie größtenteils wie eines angesprochen werden).

Der Scan sucht nach den Tracks, deren [`kind`](/de/docs/Web/API/AudioTrack/kind)-Werte `"main"` und `"commentary"` sind, und merkt sich diese [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte. Sobald diese gefunden wurden, werden die Werte der beiden `enabled`-Eigenschaften der Tracks vertauscht, was dazu führt, dass der aktive Track gewechselt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
