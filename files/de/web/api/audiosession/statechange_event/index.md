---
title: "AudioSession: statechange-Event"
short-title: statechange
slug: Web/API/AudioSession/statechange_event
l10n:
  sourceCommit: 52a02663d8a43fb35ea80f1b276dab03d8dab9ef
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Ein **`statechange`**-Ereignis wird auf einer [`AudioSession`](/de/docs/Web/API/AudioSession) ausgelöst, wenn sich ihre [`state`](/de/docs/Web/API/AudioSession/state)-Eigenschaft ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("statechange", (event) => { })

onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Der `state`-Wert ändert sich als Reaktion auf die eigene Audio-Aktivität der Seite und wird `"active"`, wenn eine Audioquelle oder ein Audioausgang auf der Seite aktiv ist, und `"inactive"`, wenn alle Audioquellen und -ausgänge gestoppt sind.
Er kann auch auf `"interrupted"` ändern, als Reaktion auf ein Ereignis auf Plattformebene, wie etwa einen eingehenden Anruf oder eine andere Anwendung, die exklusiv die Kontrolle über das Audio übernimmt.

Wenn sich der Status zu oder von `"interrupted"` ändert, pausiert oder setzt der Browser automatisch hörbare Media-Elemente fort, setzt `AudioContext`s aus oder setzt sie fort und schaltet Mikrofonspuren der Sitzung stumm oder aktiviert diese wieder.

Das **`statechange`**-Ereignis ermöglicht es Ihnen, Änderungen des Status zu überwachen und alle Operationen durchzuführen, die nicht automatisch behandelt werden.
Dazu gehört, ob ein stummgeschaltetes Video pausiert werden soll oder ob ein ausgehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) weiterhin gestreamt werden soll.

## Beispiele

### Behandlung einer Unterbrechung bei einem Videoanruf

Dieses Beispiel zeigt, wie Code ein `statechange`-Ereignis während eines Videoanrufs behandeln könnte.

`remoteVideo` spielt den Ton des anderen Teilnehmers ab, sodass der Browser es automatisch pausiert und fortsetzt, solange es hörbar ist.
Wenn der Benutzer den anderen Teilnehmer stummgeschaltet hat, ist `remoteVideo` nicht hörbar und der Browser lässt es in Ruhe.

`localVideo` zeigt die eigene Kameravorschau des Benutzers (die stummgeschaltet ist).
Diese und die ausgehende Mikrofonspur müssen, wenn nötig, von der Seite selbst pausiert, fortgesetzt, stummgeschaltet und aktiviert werden.

```js
navigator.audioSession.addEventListener("statechange", () => {
  const interrupted = navigator.audioSession.state === "interrupted";

  // remoteVideo is the audio/video from the remote end.
  // We pause it on interruption if it was muted (and hence not paused automatically)
  if (remoteVideo.muted) {
    if (interrupted) {
      remoteVideo.pause();
    } else {
      remoteVideo.play();
    }
  }

  // localVideo is the preview for the local user.
  // This is typically muted by default,
  // so the page must pause and resume it explicitly.
  if (interrupted) {
    localVideo.pause();
  } else {
    localVideo.play();
  }

  // Whether an outgoing track is enabled is always up to the page.
  microphoneTrack.enabled = !interrupted;

  // Control the display of a banner
  // ... and so on ...
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`AudioSession.state`](/de/docs/Web/API/AudioSession/state)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
