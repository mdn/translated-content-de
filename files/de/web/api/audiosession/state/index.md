---
title: "AudioSession: state-Eigenschaft"
short-title: state
slug: Web/API/AudioSession/state
l10n:
  sourceCommit: 865686a652cb8dc4e9522e23399896e6373bfc19
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die schreibgeschützte **`state`**-Eigenschaft des [`AudioSession`](/de/docs/Web/API/AudioSession)-Interfaces gibt den aktuellen Zustand der Audio-Session zurück.

## Wert

Ein String, dessen Wert einer der folgenden ist:

- `"active"`
  - : Die Audio-Session gibt derzeit Ton wieder, zeichnet Audio auf oder beides.
- `"interrupted"`
  - : Die Audio-Session war aktiv, wurde jedoch vorübergehend von der Plattform angehalten, beispielsweise wegen eines eingehenden Telefonanrufs oder weil eine andere Anwendung die exklusive Kontrolle über Audio übernommen hat. Die Session kann zu `"active"` zurückkehren, sobald die Unterbrechung endet.
- `"inactive"`
  - : Die Audio-Session gibt kein Audio wieder und zeichnet kein Audio auf; sie ist derzeit auch nicht unterbrochen. Dies ist der Standardzustand.

## Beschreibung

Die Plattform aktualisiert `state` als Reaktion auf die eigene Audioaktivität der Seite (Starten oder Stoppen der Wiedergabe oder Aufzeichnung) sowie auf Ereignisse auf Plattformebene, etwa wenn eine andere Anwendung die exklusive Kontrolle über Audio übernimmt oder ein Telefonanruf eingeht.
Das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis kann überwacht werden, um Benachrichtigungen zu erhalten, wenn sich der Wert ändert.

Die Eigenschaft spiegelt den Zustand jeder Audioquelle und -senke wider, die die Seite erstellt hat, einschließlich {{htmlelement("audio")}}- und {{htmlelement("video")}}-Elementen, [`AudioContext`](/de/docs/Web/API/AudioContext)-Instanzen sowie Mikrofon-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)s, die mit [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) abgerufen wurden.
Die Session wird zu `"active"`, wenn eines davon hörbaren Ton erzeugt oder aufzeichnet, und kehrt zu `"inactive"` zurück, wenn alle gestoppt wurden.
Das Starten oder Stoppen einer einzelnen Quelle ändert den gemeldeten Zustand ansonsten nicht.

Wenn der Zustand zu `"interrupted"` wird, weil etwas anderes die exklusive Kontrolle über Audio übernommen hat, hält der Browser wiedergebende Medienelemente automatisch an, setzt `AudioContext`s aus und schaltet Mikrofon-Tracks stumm, die zur Session gehören.
Er setzt sie dann automatisch fort, wenn der Zustand zu `"active"` zurückkehrt.
Beachten Sie, dass dies nur für Elemente gilt, die hörbare Ausgabe erzeugen, wenn der Zustand unterbrochen wird; ein stummgeschaltetes oder lautloses Element ist nie betroffen und muss bei Bedarf ausdrücklich angehalten oder fortgesetzt werden.
Ein Beispiel finden Sie auf der Seite zum [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis.

Der Wert von `state` hindert Sie nicht daran, [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) oder andere Mechanismen aufzurufen, um Audio zu starten, aber ein solcher Aufruf wird wahrscheinlich fehlschlagen, wenn eine andere App weiterhin die exklusive Kontrolle über Audio hat.
In diesem Fall bleibt `state` `"inactive"` oder `"interrupted"`, die Methode wird ohne Fehler zurückgegeben, aber es wird möglicherweise tatsächlich kein Ton erzeugt.
Sie sollten stattdessen auf das [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis warten, das meldet, dass `state` selbstständig zu `"active"` zurückgekehrt ist.

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
- [`statechange`](/de/docs/Web/API/AudioSession/statechange_event)-Ereignis
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
