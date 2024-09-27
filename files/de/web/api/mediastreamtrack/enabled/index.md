---
title: "MediaStreamTrack: enabled-Eigenschaft"
short-title: enabled
slug: Web/API/MediaStreamTrack/enabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`enabled`**-Eigenschaft des [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces ist ein Boolescher Wert, der `true` ist, wenn der Track erlaubt ist, den Quellstream wiederzugeben, oder `false`, wenn nicht. Dies kann verwendet werden, um einen Track absichtlich stummzuschalten.

Wenn aktiviert, werden die Daten eines Tracks von der Quelle zum Ziel ausgegeben; andernfalls werden leere Frames ausgegeben.

Im Fall von Audio erzeugt ein deaktivierter Track Frames der Stille (das heißt, Frames, in denen der Wert jedes Samples 0 ist). Bei Videotracks wird jedes Frame vollständig mit schwarzen Pixeln gefüllt.

Der Wert von `enabled` stellt im Wesentlichen dar, was ein typischer Benutzer als den Stummschaltungszustand für einen Track betrachten würde, während die [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)-Eigenschaft einen Zustand anzeigt, in dem der Track vorübergehend keine Daten ausgeben kann, wie in einem Szenario, in dem Frames beim Übertragen verloren gegangen sind.

> [!NOTE]
> Wenn der Track getrennt wurde, kann der Wert dieser Eigenschaft geändert werden, hat jedoch keine Wirkung.

## Wert

Wenn `true`, zeigt `enabled` an, dass der Track berechtigt ist, sein tatsächliches Medium an die Ausgabe zu rendern. Wenn `enabled` auf `false` gesetzt ist, erzeugt der Track nur leere Frames.

Leere Audio-Frames haben jeden Sample-Wert auf 0 gesetzt. Leere Video-Frames haben jeden Pixel auf schwarz gesetzt.

> [!NOTE]
> Wenn Sie eine Stummschalt-/Entstummschaltfunktion implementieren, sollten Sie die `enabled`-Eigenschaft verwenden.

## Nutzungshinweise

Wenn der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) den Videoeingang einer Kamera darstellt, bewirkt das Deaktivieren des Tracks durch Setzen von `enabled` auf `false` auch, dass die Geräteaktivitätsanzeigen zeigen, dass die Kamera momentan nicht aufnimmt oder streamt. Zum Beispiel geht das grüne "in Gebrauch"-Licht neben der Kamera in iMac- und MacBook-Computern aus, während der Track auf diese Weise stummgeschaltet ist.

## Beispiel

Dieses Beispiel demonstriert einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignishandler für einen Pausenknopf.

```js
pauseButton.onclick = (evt) => {
  const newState = !myAudioTrack.enabled;

  pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
  myAudioTrack.enabled = newState;
};
```

Dies erstellt eine Variable, `newState`, die das Gegenteil des aktuellen Wertes von `enabled` ist und verwendet diesen, um entweder das Emoji-Zeichen für das "Play"-Symbol oder das Zeichen für das "Pause"-Symbol als neue [`innerHTML`](/de/docs/Web/API/Element/innerHTML) des Elementes des Pausenknopfes auszuwählen.

Schließlich wird der neue Wert von `enabled` gespeichert, um die Änderung wirksam werden zu lassen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
