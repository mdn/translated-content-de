---
title: "AudioSession: state-Eigenschaft"
short-title: state
slug: Web/API/AudioSession/state
l10n:
  sourceCommit: 52a02663d8a43fb35ea80f1b276dab03d8dab9ef
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die **`state`**-Eigenschaft der [`AudioSession`](/de/docs/Web/API/AudioSession)-Schnittstelle gibt den aktuellen Zustand der Audiositzung zurück.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `"active"`
  - : Die Audiositzung spielt derzeit Ton ab, nimmt Audio auf oder beides.
- `"interrupted"`
  - : Die Audiositzung war aktiv, wurde jedoch vorübergehend vom System unterbrochen, beispielsweise wegen eines eingehenden Anrufs oder weil eine andere Anwendung die exklusive Kontrolle über das Audio übernommen hat. Die Sitzung kann nach Ende der Unterbrechung wieder in den Zustand `"active"` zurückkehren.
- `"inactive"`
  - : Die Audiositzung spielt oder nimmt derzeit kein Audio auf und ist nicht unterbrochen. Dies ist der Standardzustand.

## Beschreibung

Das System aktualisiert den `state`-Zustand als Reaktion auf die eigene Audioaktivität der Seite (Start oder Stopp der Wiedergabe oder Aufnahme) und auf Systemereignisse wie eine andere Anwendung, die die exklusive Kontrolle über das Audio übernimmt, oder einen eingehenden Anruf.
Das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis kann überwacht werden, um Benachrichtigungen zu erhalten, wenn sich der Wert ändert.

Die Eigenschaft spiegelt den Zustand jeder Audiowequelle und jedes -sinks wider, die oder das die Seite erstellt hat, einschließlich {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen, [`AudioContext`](/de/docs/Web/API/AudioContext)-Instanzen und Mikrofon-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s, die mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) abgerufen wurden.
Die Sitzung wird `"active"`, wenn eines dieser Elemente hörbaren Ton produziert oder aufnimmt, und kehrt zu `"inactive"` zurück, wenn alle gestoppt sind.
Das Starten oder Stoppen einer einzelnen Quelle ändert ansonsten nicht den gemeldeten Zustand.

Wenn der Zustand `"interrupted"` wird, weil etwas anderes die exklusive Kontrolle über das Audio übernommen hat, pausiert der Browser automatisch die Medienwiedergabe, setzt `AudioContext`s aus und stummt Mikrofonspuren, die zur Sitzung gehören.
Diese werden dann automatisch fortgesetzt, wenn der Zustand wieder zu `"active"` zurückkehrt.
Beachten Sie, dass dies nur für Elemente gilt, die hörbare Ausgaben produzieren, wenn der Zustand unterbrochen wird; ein stummgeschaltetes oder stilles Element wird niemals betroffen und muss bei Bedarf explizit pausiert oder fortgesetzt werden.
Siehe die [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignisseite für ein Beispiel.

Der Wert von `state` hindert Sie nicht daran, [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) oder andere Mechanismen zu verwenden, um Audio zu starten, aber ein solcher Aufruf wird wahrscheinlich fehlschlagen, wenn eine andere App noch die exklusive Kontrolle über das Audio hat.
In diesem Fall bleibt der `state`-Zustand `"inactive"` oder `"interrupted"`, die Methode kehrt ohne Fehler zurück, aber es wird möglicherweise kein Ton produziert.
Sie sollten stattdessen auf das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis warten, das meldet, dass `state` von selbst zu `"active"` zurückgekehrt ist.

## Beispiele

### Grundlegende Verwendung

```js
navigator.audioSession.addEventListener("statechange", () => {
  statusElement.textContent = `Audio session: ${navigator.audioSession.state}`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`AudioSession.statechange_event`](/de/docs/Web/API/AudioSession/statechange_event)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
