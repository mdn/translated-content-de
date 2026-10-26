---
title: "AudioSession: statechange-Ereignis"
short-title: statechange
slug: Web/API/AudioSession/statechange_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Ein **`statechange`**-Ereignis wird auf einer [`AudioSession`](/de/docs/Web/API/AudioSession) ausgelöst, wenn sich ihre [`state`](/de/docs/Web/API/AudioSession/state)-Eigenschaft ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternativ können Sie ihn der [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onstatechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Der Wert von `state` ändert sich als Reaktion auf die Audioaktivität der Seite: Er wird zu `"active"`, wenn eine Audioquelle oder ein Audioausgabegerät auf der Seite aktiv ist, und zu `"inactive"`, wenn alle Audioquellen und Audioausgabegeräte gestoppt sind.
Er kann auch als Reaktion auf ein Ereignis auf Plattformebene zu `"interrupted"` werden, beispielsweise bei einem eingehenden Telefonanruf oder wenn eine andere Anwendung die ausschließliche Kontrolle über die Audioausgabe übernimmt.

Wenn der Zustand zu `"interrupted"` oder von `"interrupted"` zu einem anderen Zustand wechselt, pausiert der Browser hörbare Medienelemente automatisch oder setzt sie fort, suspendiert `AudioContext`-Instanzen oder setzt sie fort und schaltet Mikrofon-Tracks der Sitzung stumm oder hebt deren Stummschaltung auf.

Mit dem **`statechange`**-Ereignis können Sie Zustandsänderungen überwachen und Vorgänge ausführen, die nicht automatisch erledigt werden.
Dazu gehört beispielsweise die Entscheidung, ob stummgeschaltete Videos pausiert werden sollen oder ob ein ausgehender [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) weiter gestreamt werden soll.

## Beispiele

### Eine Unterbrechung während eines Videoanrufs behandeln

Dieses Beispiel zeigt, wie Code ein `statechange`-Ereignis während eines Videoanrufs behandeln kann.

`remoteVideo` gibt das Audio des anderen Teilnehmers wieder. Solange es hörbar ist, pausiert der Browser es automatisch und setzt es automatisch fort.
Wenn der Benutzer den anderen Teilnehmer jedoch stummgeschaltet hat, ist `remoteVideo` nicht hörbar und der Browser greift nicht ein.

`localVideo` zeigt die Vorschau der eigenen Kamera des Benutzers (die stummgeschaltet ist).
Diese Vorschau und der ausgehende Mikrofon-Track müssen bei Bedarf von der Seite selbst pausiert, fortgesetzt, stummgeschaltet und wieder hörbar geschaltet werden.

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
