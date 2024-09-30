---
title: "MediaStreamTrack: enabled-Eigenschaft"
short-title: enabled
slug: Web/API/MediaStreamTrack/enabled
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`enabled`**-Eigenschaft des
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces ist ein boolescher Wert, der
`true` ist, wenn der Track die Quellstream-Wiedergabe erlauben soll, oder
`false`, wenn nicht. Dies kann verwendet werden, um einen Track absichtlich stummzuschalten.

Wenn aktiviert, wird die Spur vom Quell- zum Zielmedium übertragen; andernfalls werden leere Frames ausgegeben.

Im Falle von Audio erzeugt ein deaktivierter Track stumme Frames (d.h. Frames, in denen jeder Sample-Wert 0 ist). Bei Videospuren wird jeder Frame vollständig mit
schwarzen Pixeln gefüllt.

Der Wert von `enabled` entspricht im Wesentlichen dem, was ein typischer Benutzer als den Stummschaltungszustand eines Tracks betrachten würde, während die [`muted`](/de/docs/Web/API/MediaStreamTrack/muted)
Eigenschaft einen Zustand anzeigt, in dem der Track vorübergehend keine Daten ausgeben kann, wie in einem Szenario, in dem Frames während der Übertragung verloren gegangen sind.

> [!NOTE]
> Wenn die Verbindung zum Track getrennt wurde, kann der Wert dieser Eigenschaft
> geändert werden, hat jedoch keine Wirkung.

## Wert

Wenn `true`, zeigt `enabled` an, dass der Track berechtigt ist, sein tatsächliches Medium auszugeben. Wenn `enabled` auf
`false` gesetzt ist, erzeugt die Spur nur leere Frames.

Leere Audioframes haben für jedes Sample den Wert 0. Leere Videoframes sind vollständig schwarz gefärbt.

> [!NOTE]
> Beim Implementieren einer Stummschaltungs-/Nicht-Stummschaltungsfunktion sollte die
> `enabled`-Eigenschaft verwendet werden.

## Verwendungshinweise

Wenn das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) die Videoeingabe von einer Kamera repräsentiert,
zeigt das Deaktivieren der Spur durch Setzen von `enabled` auf `false` auch an,
dass die Kamera derzeit nicht aufnimmt oder streamt. Beispielsweise leuchtet das grüne "in Benutzung"-Licht neben der Kamera in iMac- und MacBook-Computern nicht, während die Spur auf diese Weise stummgeschaltet ist.

## Beispiel

Dieses Beispiel demonstriert einen [`click`](/de/docs/Web/API/Element/click_event)-Ereignis-Handler für eine Pausentaste.

```js
pauseButton.onclick = (evt) => {
  const newState = !myAudioTrack.enabled;

  pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
  myAudioTrack.enabled = newState;
};
```

Dies erstellt eine Variable, `newState`, die das Gegenteil des aktuellen
Werts von `enabled` ist, und verwendet diese, um entweder das Emoji-Zeichen für das
"Play"-Symbol oder das Zeichen für das "Pause"-Symbol als neuen
[`innerHTML`](/de/docs/Web/API/Element/innerHTML) der Pausentasten-Element auszuwählen.

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
