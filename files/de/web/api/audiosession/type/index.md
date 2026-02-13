---
title: "AudioSession: type-Eigenschaft"
short-title: type
slug: Web/API/AudioSession/type
l10n:
  sourceCommit: 7afb60028792bba6b9c809867bc6c5304f9868a6
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

Die **`type`**-Eigenschaft der [`AudioSession`](/de/docs/Web/API/AudioSession)-Schnittstelle gibt den Typ der Audiositzung zurück oder legt ihn fest.

Der Typ der Audiositzung beschreibt die allgemeine Art der Audioausgabe einer Webseite und ermöglicht es der Plattform, zu bestimmen, wie webbasierte Audiodaten mit anderen Audiodaten auf dem Gerät interagieren sollen.

## Wert

Ein String, der den Typ der Audiositzung repräsentiert. Mögliche Werte sind:

- `"auto"`
  - : Der Standardwert. Der Benutzeragent wählt automatisch den besten Audiositzungstyp basierend auf den von der Seite verwendeten Audio-APIs.
- `"playback"`
  - : Audio für die Medienwiedergabe, wie zum Beispiel Video- oder Musikwiedergabe, Podcasts usw. Dies ist ein exklusiver Typ, der andere Wiedergabe-Audiotöne auf dem Gerät pausiert, aber möglicherweise nicht-Wiedergabe-Audio (wie Benachrichtigungstöne) ermöglicht weiterzulaufen.
- `"transient"`
  - : Transientes Audio, wie Benachrichtigungstöne. Dieser Typ wird normalerweise über anderes Audio gelegt und kann dazu führen, dass dieses leiser wird (reduziert in der Lautstärke).
- `"transient-solo"`
  - : Transientes Solo-Audio, wie Fahranweisungen oder Sprachansagen. Dieser Typ pausiert oder stummschaltet alle anderen Audioquellen und wird exklusiv abgespielt. Wenn das Audio endet, kann zuvor abgespieltes Audio fortgesetzt werden.
- `"ambient"`
  - : Umgebungsgeräusche, die mit anderen Audiotypen gemischt werden können. Dies ist nützlich, wenn Benutzer Audio von mehreren Seiten oder Anwendungen mischen möchten.
- `"play-and-record"`
  - : Audio für Aufnahme oder Echtzeitkommunikation. Dies ist geeignet, wenn das Mikrofon verwendet wird oder in Videokonferenzanwendungen.

## Beispiele

### Festlegen des Audiosession-Typs für die Medienwiedergabe

```js
// Set the audio session type for music playback
navigator.audioSession.type = "playback";

// Play music
audioElement.play();
```

### Einrichtung eines Videokonferenzgesprächs

```js
// Set up for video conferencing (both playback and recording)
navigator.audioSession.type = "play-and-record";

// Start video call
const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});
localVideo.srcObject = stream;
```

### Verwendung von transientem Audio für Benachrichtigungen

```js
// Set transient type for a notification sound
navigator.audioSession.type = "transient";

// Play notification
notificationSound.play();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`AudioSession`](/de/docs/Web/API/AudioSession)
- [`Navigator.audioSession`](/de/docs/Web/API/Navigator/audioSession)
- [Audio Session API](/de/docs/Web/API/Audio_Session_API)
