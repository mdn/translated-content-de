---
title: "MediaStreamTrack: enabled-Eigenschaft"
short-title: enabled
slug: Web/API/MediaStreamTrack/enabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`enabled`**-Eigenschaft des Interfaces
{{domxref("MediaStreamTrack")}} ist ein boolescher Wert, der `true`
ist, wenn der Track erlaubt ist, den Quellstream zu rendern, oder
`false`, wenn dies nicht der Fall ist. Dies kann verwendet werden, um einen
Track absichtlich stumm zu schalten.

Wenn aktiviert, wird die Spur vom Quell- zum Zielgerät ausgegeben; andernfalls werden leere Frames ausgegeben.

Im Fall von Audio erzeugt eine deaktivierte Spur Frames der Stille (das heißt, Frames, bei denen der Wert jedes Samples 0 ist). Für Videospuren wird jeder Frame vollständig mit schwarzen Pixeln gefüllt.

Der Wert von `enabled` stellt im Wesentlichen dar, was ein typischer Benutzer als den Stummschaltungszustand für einen Track betrachten würde, während die Eigenschaft {{domxref("MediaStreamTrack.muted", "muted")}} einen Zustand anzeigt, in dem der Track vorübergehend nicht in der Lage ist, Daten auszugeben, wie etwa bei einem Szenario, bei dem Frames während der Übertragung verloren gegangen sind.

> [!NOTE]
> Wenn die Spur getrennt wurde, kann der Wert dieser Eigenschaft
> geändert werden, hat jedoch keine Wirkung.

## Wert

Wenn `true`, zeigt `enabled` an, dass die Spur berechtigt ist, ihre tatsächlichen Medien auszugeben. Wenn `enabled` auf `false` gesetzt ist, erzeugt die Spur nur leere Frames.

Leere Audio-Frames haben für jedes Sample den Wert 0. Leere Video-Frames haben für jedes Pixel den Wert schwarz.

> [!NOTE]
> Bei der Implementierung einer Stumm-/Aufhebungsfunktion sollten Sie die
> `enabled`-Eigenschaft verwenden.

## Anwendungshinweise

Wenn die {{domxref("MediaStreamTrack")}} den Videoeingang von einer Kamera darstellt, aktualisiert das Deaktivieren der Spur durch Setzen von `enabled` auf `false` auch die Aktivitätsanzeigen des Geräts, um anzuzeigen, dass die Kamera derzeit nicht aufzeichnet oder streamt. Beispielsweise erlischt das grüne "in use"-Licht neben der Kamera in iMac- und MacBook-Computern, während die Spur auf diese Weise stummgeschaltet ist.

## Beispiel

Dieses Beispiel zeigt einen {{domxref("Element/click_event", "Klick")}}-Ereignishandler für eine Pausentaste.

```js
pauseButton.onclick = (evt) => {
  const newState = !myAudioTrack.enabled;

  pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
  myAudioTrack.enabled = newState;
};
```

Dies erstellt eine Variable, `newState`, die das Gegenteil des aktuellen Werts von `enabled` ist, und verwendet diese, um entweder das Emoji-Zeichen für das "Abspiel"-Symbol oder das Zeichen für das "Pause"-Symbol als neuen {{domxref("Element.innerHTML", "innerHTML")}} der Pausentaster zu wählen.

Schließlich wird der neue Wert von `enabled` gespeichert, um die Änderung wirksam zu machen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
